const LOCAL_CONTACT_API_PATH = "/api/contact";
export const PRODUCTION_CONTACT_API_URL =
  "https://api.letscatchup-kcs.com/api/public/contact";

export function normalizeContactUrl(url: string): string {
  let trimmed = url.trim().replace(/\/+$/, "");

  // Preserve relative paths (e.g. /api/contact in local dev)
  if (trimmed.startsWith("/")) {
    return trimmed;
  }

  // Normalize common route mismatches
  if (trimmed.endsWith("/api/contacts") || trimmed.endsWith("/api/contact")) {
    trimmed = trimmed.replace(/\/api\/contacts?$/, "/api/public/contact");
  } else if (trimmed.endsWith("/public/contacts")) {
    trimmed = trimmed.replace(/\/public\/contacts$/, "/api/public/contact");
  } else if (trimmed.endsWith("/contacts")) {
    trimmed = trimmed.replace(/\/contacts$/, "/api/public/contact");
  } else if (!trimmed.includes("/public/contact")) {
    trimmed = trimmed.endsWith("/api")
      ? `${trimmed}/public/contact`
      : `${trimmed}/api/public/contact`;
  }

  return trimmed;
}

export type ContactSubmissionInput = {
  name: string;
  email: string;
  subject: string;
  message: string;
  phone?: string;
  company_name?: string;
  designation?: string;
  source?: string;
};

export type ContactValidationResult = {
  isValid: boolean;
  error?: string;
};

export function validateContactPayload(
  payload: ContactSubmissionInput,
): ContactValidationResult {
  const name = payload.name?.trim() || "";
  if (name.length < 2) {
    return { isValid: false, error: "Name must be at least 2 characters." };
  }
  if (name.length > 100) {
    return { isValid: false, error: "Name must be less than 100 characters." };
  }

  const email = payload.email?.trim() || "";
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    return { isValid: false, error: "Please enter a valid email address." };
  }

  const subject = payload.subject?.trim() || "";
  if (subject.length < 5) {
    return { isValid: false, error: "Subject must be at least 5 characters." };
  }
  if (subject.length > 200) {
    return { isValid: false, error: "Subject must be less than 200 characters." };
  }

  const message = payload.message?.trim() || "";
  if (message.length < 10) {
    return { isValid: false, error: "Message must be at least 10 characters." };
  }
  if (message.length > 5000) {
    return { isValid: false, error: "Message must be less than 5000 characters." };
  }

  if (payload.phone && payload.phone.trim().length > 20) {
    return { isValid: false, error: "Phone number must be at most 20 characters." };
  }

  return { isValid: true };
}

export function getContactSubmissionUrl(): string {
  return getContactSubmissionConfig().url;
}

export type ContactSubmissionConfig = {
  url: string;
  isLocalFallback: boolean;
};

export function getContactSubmissionConfig(): ContactSubmissionConfig {
  const explicitContactUrl = process.env.NEXT_PUBLIC_CONTACT_API_URL;

  // If explicit URL targets local backend (e.g. localhost:4500), use it directly
  if (
    explicitContactUrl &&
    (explicitContactUrl.includes("localhost") ||
      explicitContactUrl.includes("127.0.0.1"))
  ) {
    return {
      url: normalizeContactUrl(explicitContactUrl),
      isLocalFallback: false,
    };
  }

  // When running locally in browser (localhost/127.0.0.1) with a remote backend,
  // route through local /api/contact to avoid browser CORS preflight blocking
  if (
    typeof window !== "undefined" &&
    (window.location.hostname === "localhost" ||
      window.location.hostname === "127.0.0.1")
  ) {
    return {
      url: LOCAL_CONTACT_API_PATH,
      isLocalFallback: false,
    };
  }

  if (explicitContactUrl?.trim()) {
    return {
      url: normalizeContactUrl(explicitContactUrl),
      isLocalFallback: false,
    };
  }

  const publicApiBase = process.env.NEXT_PUBLIC_API_URL;
  if (publicApiBase?.trim()) {
    return {
      url: normalizeContactUrl(publicApiBase),
      isLocalFallback: false,
    };
  }

  // When deployed to production (static export), local API route /api/contact does not exist
  if (process.env.NODE_ENV === "production") {
    return {
      url: PRODUCTION_CONTACT_API_URL,
      isLocalFallback: false,
    };
  }

  return {
    url: LOCAL_CONTACT_API_PATH,
    isLocalFallback: true,
  };
}

export function sanitizeContactPayload(
  payload: ContactSubmissionInput,
): ContactSubmissionInput {
  return {
    name: payload.name.trim(),
    email: payload.email.trim(),
    subject: payload.subject.trim(),
    message: payload.message.trim(),
    phone: payload.phone?.trim() || undefined,
    company_name: payload.company_name?.trim() || undefined,
    designation: payload.designation?.trim() || undefined,
    source: payload.source?.trim() || "website",
  };
}
