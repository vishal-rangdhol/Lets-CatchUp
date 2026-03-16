import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const LegacyContactSubmissionSchema = z.object({
  fullName: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(120),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  organization: z.string().trim().max(120).optional().or(z.literal("")),
  subject: z.string().trim().min(3).max(140),
  message: z.string().trim().min(10).max(2000),
  source: z.string().trim().max(80).optional(),
  page: z.string().trim().max(200).optional(),
});

const ExternalContactSubmissionSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(120),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  company_name: z.string().trim().max(120).optional().or(z.literal("")),
  designation: z.string().trim().max(80).optional().or(z.literal("")),
  subject: z.string().trim().min(3).max(140),
  message: z.string().trim().min(10).max(2000),
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
    return {
      fullName: payload.name,
      email: payload.email,
      phone: payload.phone?.trim() || "",
      organization: payload.company_name?.trim() || "",
      subject: payload.subject,
      message: payload.message,
      source: payload.source?.trim() || "website",
      page: "",
    };
  }

  return {
    ...payload,
    phone: payload.phone?.trim() || "",
    organization: payload.organization?.trim() || "",
    source: payload.source?.trim() || "website",
    page: payload.page?.trim() || "",
  };
}

async function forwardToWebhook(
  payload: NormalizedContactSubmission,
): Promise<void> {
  const webhookUrl = process.env.CONTACT_WEBHOOK_URL;
  if (!webhookUrl) {
    console.info("[contact-api] Contact submission received", {
      fullName: payload.fullName,
      email: payload.email,
      subject: payload.subject,
      source: payload.source,
      page: payload.page,
    });
    return;
  }

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };

  if (process.env.CONTACT_WEBHOOK_TOKEN) {
    headers["x-contact-webhook-token"] = process.env.CONTACT_WEBHOOK_TOKEN;
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 10_000);

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers,
      signal: controller.signal,
      body: JSON.stringify({
        event: "contact_submission",
        submittedAt: new Date().toISOString(),
        payload,
      }),
      cache: "no-store",
    });

    if (!response.ok) {
      const body = await response.text();
      throw new Error(
        `Webhook rejected submission (${response.status}): ${body}`,
      );
    }
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
    await forwardToWebhook(normalized);

    return NextResponse.json(
      {
        ok: true,
        message: "Thanks for reaching out. We will contact you shortly.",
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("[contact-api] Submission failed", error);

    return NextResponse.json(
      {
        ok: false,
        message:
          "Unable to process your request right now. Please try again shortly.",
      },
      { status: 500 },
    );
  }
}
