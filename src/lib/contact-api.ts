const LOCAL_CONTACT_API_PATH = "/api/contact";

function normalizeBaseUrl(baseUrl: string): string {
  return baseUrl.trim().replace(/\/+$/, "");
}

export function getContactSubmissionUrl(): string {
  return getContactSubmissionConfig().url;
}

export type ContactSubmissionConfig = {
  url: string;
  isLocalFallback: boolean;
};

export function getContactSubmissionConfig(): ContactSubmissionConfig {
  const explicitContactUrl = process.env.NEXT_PUBLIC_API_URL
    ? `${normalizeBaseUrl(process.env.NEXT_PUBLIC_API_URL)}/api/contact`
    : process.env.CONTACT_WEBHOOK_URL;
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
        ? `${normalized}/contact`
        : `${normalized}/api/contact`,
      isLocalFallback: false,
    };
  }

  return {
    url: LOCAL_CONTACT_API_PATH,
    isLocalFallback: true,
  };
}
