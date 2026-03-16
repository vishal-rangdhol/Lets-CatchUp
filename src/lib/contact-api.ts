const LOCAL_CONTACT_API_PATH = "/api/contact";

function normalizeBaseUrl(baseUrl: string): string {
  return baseUrl.trim().replace(/\/+$/, "");
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

export function getContactSubmissionUrl(): string {
  return getContactSubmissionConfig().url;
}

export type ContactSubmissionConfig = {
  url: string;
  isLocalFallback: boolean;
};

export function getContactSubmissionConfig(): ContactSubmissionConfig {
  const explicitContactUrl = process.env.NEXT_PUBLIC_CONTACT_API_URL;
  if (explicitContactUrl?.trim()) {
    return {
      url: explicitContactUrl.trim(),
      isLocalFallback: false,
    };
  }

  const publicApiBase = process.env.NEXT_PUBLIC_API_URL;
  if (publicApiBase?.trim()) {
    const normalized = normalizeBaseUrl(publicApiBase);
    return {
      url: normalized.endsWith("/api")
        ? `${normalized}/public/contact`
        : `${normalized}/api/public/contact`,
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
