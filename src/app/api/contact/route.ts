import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const LegacyContactSubmissionSchema = z.object({
  fullName: z.string().trim().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().trim().email("Invalid email address").max(120),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  organization: z.string().trim().max(200).optional().or(z.literal("")),
  subject: z.string().trim().min(4, "Subject must be at least 4 characters").max(200),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(5000),
  source: z.string().trim().max(80).optional(),
  page: z.string().trim().max(200).optional(),
});

const ExternalContactSubmissionSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().trim().email("Invalid email address").max(120),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  company_name: z.string().trim().max(200).optional().or(z.literal("")),
  designation: z.string().trim().max(100).optional().or(z.literal("")),
  subject: z.string().trim().min(5, "Subject must be at least 5 characters").max(200),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(5000),
  source: z.string().trim().max(80).optional(),
});

const ContactSubmissionSchema = z.union([
  LegacyContactSubmissionSchema,
  ExternalContactSubmissionSchema,
]);

type ContactSubmission = z.infer<typeof ContactSubmissionSchema>;

type NormalizedContactSubmission = {
  fullName: string;
  email: string;
  phone: string;
  organization: string;
  designation: string;
  subject: string;
  message: string;
  source: string;
  page: string;
};

type RateLimitBucket = {
  count: number;
  startedAt: number;
};

const rateLimit = new Map<string, RateLimitBucket>();
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX_REQUESTS = 6;

function getClientIp(request: NextRequest): string {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0]?.trim() || "unknown";
  }
  return request.headers.get("x-real-ip") || "unknown";
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const current = rateLimit.get(ip);

  if (!current || now - current.startedAt > RATE_LIMIT_WINDOW_MS) {
    rateLimit.set(ip, { count: 1, startedAt: now });
    return false;
  }

  if (current.count >= RATE_LIMIT_MAX_REQUESTS) {
    return true;
  }

  current.count += 1;
  rateLimit.set(ip, current);
  return false;
}

function normalizePayload(
  payload: ContactSubmission,
): NormalizedContactSubmission {
  if ("name" in payload) {
    const ext = payload as z.infer<typeof ExternalContactSubmissionSchema>;
    return {
      fullName: ext.name,
      email: ext.email,
      phone: ext.phone?.trim() || "",
      organization: ext.company_name?.trim() || "",
      designation: ext.designation?.trim() || "",
      subject: ext.subject,
      message: ext.message,
      source: ext.source?.trim() || "website",
      page: "",
    };
  }

  const legacy = payload as z.infer<typeof LegacyContactSubmissionSchema>;
  return {
    fullName: legacy.fullName,
    email: legacy.email,
    phone: legacy.phone?.trim() || "",
    organization: legacy.organization?.trim() || "",
    designation: "",
    subject: legacy.subject,
    message: legacy.message,
    source: legacy.source?.trim() || "website",
    page: legacy.page?.trim() || "",
  };
}

async function forwardSubmission(
  payload: NormalizedContactSubmission,
): Promise<{ success: boolean; message?: string; contact_id?: string }> {
  const webhookUrl = process.env.CONTACT_WEBHOOK_URL;
  const targetUrl =
    webhookUrl ||
    process.env.BACKEND_API_URL ||
    process.env.NEXT_PUBLIC_CONTACT_API_URL ||
    "https://api.letscatchup-kcs.com/api/public/contact";

  if (!targetUrl) {
    throw new Error("No contact submission destination configured.");
  }

  const isBackendDirect =
    targetUrl.includes("/public/contact") ||
    targetUrl.includes("letscatchup-kcs.com");

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };

  if (process.env.CONTACT_WEBHOOK_TOKEN) {
    headers["x-contact-webhook-token"] = process.env.CONTACT_WEBHOOK_TOKEN;
  }

  // If targeting backend directly or via proxy, format matching backend schema
  const bodyPayload = isBackendDirect
    ? {
        name: payload.fullName,
        email: payload.email,
        phone: payload.phone || undefined,
        subject: payload.subject,
        message: payload.message,
        company_name: payload.organization || undefined,
        designation: payload.designation || undefined,
        source: payload.source || "website",
      }
    : {
        event: "contact_submission",
        submittedAt: new Date().toISOString(),
        payload,
      };

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 10_000);

  try {
    const response = await fetch(targetUrl, {
      method: "POST",
      headers,
      signal: controller.signal,
      body: JSON.stringify(bodyPayload),
      cache: "no-store",
    });

    const responseText = await response.text();
    let responseData: any = null;
    try {
      responseData = JSON.parse(responseText);
    } catch {
      // not JSON
    }

    if (!response.ok) {
      const errDetail =
        responseData?.message ||
        responseData?.error?.message ||
        responseData?.error ||
        responseText;
      throw new Error(
        `Destination rejected submission (${response.status}): ${errDetail}`,
      );
    }

    return {
      success: true,
      message: responseData?.message || "Inquiry recorded successfully.",
      contact_id: responseData?.contact_id,
    };
  } finally {
    clearTimeout(timeout);
  }
}

export async function POST(request: NextRequest) {
  try {
    const ip = getClientIp(request);
    if (isRateLimited(ip)) {
      return NextResponse.json(
        {
          ok: false,
          message: "Too many requests. Please wait a minute and try again.",
        },
        { status: 429 },
      );
    }

    const rawBody = await request.json();
    const parsed = ContactSubmissionSchema.safeParse(rawBody);

    if (!parsed.success) {
      return NextResponse.json(
        {
          ok: false,
          message: "Invalid submission payload.",
          issues: parsed.error.issues.map((issue) => ({
            path: issue.path.join("."),
            message: issue.message,
          })),
        },
        { status: 400 },
      );
    }

    const normalized = normalizePayload(parsed.data);
    const result = await forwardSubmission(normalized);

    return NextResponse.json(
      {
        ok: true,
        success: true,
        message:
          result.message ||
          "Thanks for reaching out. We will contact you shortly.",
        contact_id: result.contact_id,
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("[contact-api] Submission failed", error);

    return NextResponse.json(
      {
        ok: false,
        success: false,
        message:
          error instanceof Error
            ? error.message
            : "Unable to process your request right now. Please try again shortly.",
      },
      { status: 502 },
    );
  }
}
