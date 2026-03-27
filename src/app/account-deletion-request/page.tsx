"use client";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import {
    getContactSubmissionConfig,
    getContactSubmissionUrl,
    sanitizeContactPayload,
} from "@/lib/contact-api";
import {
    AlertTriangle,
    CheckCircle2,
    Clock3,
    Mail,
    ShieldCheck,
    Trash2,
} from "lucide-react";
import Link from "next/link";
import { FormEvent, useState } from "react";

type DeletionForm = {
  fullName: string;
  email: string;
  phone: string;
  platform: string;
  preferredContact: "email" | "phone";
  reason: string;
  confirmOwnership: boolean;
  confirmDeletionImpact: boolean;
};

const INITIAL_FORM: DeletionForm = {
  fullName: "",
  email: "",
  phone: "",
  platform: "both",
  preferredContact: "email",
  reason: "",
  confirmOwnership: false,
  confirmDeletionImpact: false,
};

export default function AccountDeletionRequestPage() {
  const { toast } = useToast();
  const submissionConfig = getContactSubmissionConfig();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState<DeletionForm>(INITIAL_FORM);

  const submitRequest = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!form.fullName || !form.email || !form.reason) {
      toast({
        title: "Missing information",
        description: "Please complete all required fields before submitting.",
        variant: "destructive",
      });
      return;
    }

    if (!form.confirmOwnership || !form.confirmDeletionImpact) {
      toast({
        title: "Confirmation required",
        description:
          "Please confirm account ownership and acknowledge permanent deletion.",
        variant: "destructive",
      });
      return;
    }

    try {
      setIsSubmitting(true);

      const structuredMessage = [
        "Account deletion request details:",
        `- Full name: ${form.fullName}`,
        `- Registered email: ${form.email}`,
        `- Phone: ${form.phone || "Not provided"}`,
        `- Platform: ${form.platform}`,
        `- Preferred contact: ${form.preferredContact}`,
        `- Ownership confirmed: ${form.confirmOwnership ? "Yes" : "No"}`,
        `- Permanent deletion acknowledged: ${
          form.confirmDeletionImpact ? "Yes" : "No"
        }`,
        "",
        "Reason:",
        form.reason,
      ].join("\n");

      const response = await fetch(getContactSubmissionUrl(), {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(
          sanitizeContactPayload({
            name: form.fullName,
            email: form.email,
            phone: form.phone,
            company_name: "",
            designation: "",
            subject: "Account Deletion Request",
            message: structuredMessage,
            source: "website-account-deletion",
          }),
        ),
      });

      const contentType = response.headers.get("content-type") || "";
      const result = contentType.includes("application/json")
        ? ((await response.json()) as {
            ok?: boolean;
            message?: string;
            detail?: string;
            error?: string;
          })
        : null;

      if (!response.ok) {
        throw new Error(
          result?.message ||
            result?.detail ||
            result?.error ||
            "Unable to submit your request.",
        );
      }

      setForm(INITIAL_FORM);
      toast({
        title: "Request submitted",
        description:
          result?.message ||
          "Your account deletion request has been received. We will contact you soon.",
      });
    } catch (error) {
      toast({
        title: "Submission failed",
        description:
          error instanceof Error
            ? error.message
            : "Please try again in a moment.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative overflow-hidden px-6 pb-20 pt-36 md:pb-24 md:pt-44">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-6 h-[460px] w-[460px] -translate-x-1/2 rounded-full bg-rose-400/15 blur-[130px]" />
        <div className="absolute -left-20 top-1/3 h-[300px] w-[300px] rounded-full bg-primary/20 blur-[120px]" />
        <div className="absolute -right-16 bottom-0 h-[320px] w-[320px] rounded-full bg-accent/20 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl space-y-12 md:space-y-16">
        <header className="space-y-6 text-center">
          <Badge className="glass border-rose-200/30 bg-rose-300/10 px-4 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-rose-100">
            Data Rights
          </Badge>
          <h1 className="mx-auto max-w-4xl text-balance font-headline text-4xl font-black leading-tight text-white md:text-6xl">
            Account Deletion Request
          </h1>
          <p className="mx-auto max-w-3xl text-balance text-base text-gray-200 md:text-xl">
            Submit this form to permanently remove your account and associated
            personal data from Let&apos;s Catch Up services.
          </p>
        </header>

        <div className="grid gap-8 lg:grid-cols-[1.12fr_0.88fr]">
          <div className="glass-card rounded-[30px] border-white/10 p-6 md:p-8">
            <h2 className="mb-6 font-headline text-2xl font-bold text-white md:text-3xl">
              Verify and request deletion
            </h2>
            <form onSubmit={submitRequest} className="space-y-5">
              {submissionConfig.isLocalFallback && (
                <Alert className="border-amber-300/30 bg-amber-500/10 text-amber-100 [&>svg]:text-amber-300">
                  <AlertTriangle className="h-4 w-4" />
                  <AlertTitle>Endpoint configuration notice</AlertTitle>
                  <AlertDescription className="text-xs md:text-sm">
                    This form is currently using local fallback endpoint
                    <span className="ml-1 font-semibold">/api/contact</span>.
                  </AlertDescription>
                </Alert>
              )}

              <div className="grid gap-5 md:grid-cols-2">
                <div className="space-y-2">
                  <Label
                    htmlFor="fullName"
                    className="text-[11px] font-black uppercase tracking-[0.16em] text-gray-300"
                  >
                    Full name
                  </Label>
                  <Input
                    id="fullName"
                    value={form.fullName}
                    onChange={(event) =>
                      setForm({ ...form, fullName: event.target.value })
                    }
                    placeholder="Jane Williams"
                    className="h-12 rounded-2xl border-white/10 bg-white/5"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="email"
                    className="text-[11px] font-black uppercase tracking-[0.16em] text-gray-300"
                  >
                    Registered email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={(event) =>
                      setForm({ ...form, email: event.target.value })
                    }
                    placeholder="you@example.com"
                    className="h-12 rounded-2xl border-white/10 bg-white/5"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="phone"
                    className="text-[11px] font-black uppercase tracking-[0.16em] text-gray-300"
                  >
                    Phone (optional)
                  </Label>
                  <Input
                    id="phone"
                    value={form.phone}
                    onChange={(event) =>
                      setForm({ ...form, phone: event.target.value })
                    }
                    placeholder="+91 98765 43210"
                    className="h-12 rounded-2xl border-white/10 bg-white/5"
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="platform"
                    className="text-[11px] font-black uppercase tracking-[0.16em] text-gray-300"
                  >
                    Platform used
                  </Label>
                  <select
                    id="platform"
                    value={form.platform}
                    onChange={(event) =>
                      setForm({ ...form, platform: event.target.value })
                    }
                    className="h-12 w-full rounded-2xl border border-white/10 bg-white/5 px-3 text-sm text-white outline-none focus:ring-2 focus:ring-ring"
                  >
                    <option value="both" className="bg-[#11163e]">
                      Android + iOS
                    </option>
                    <option value="android" className="bg-[#11163e]">
                      Android
                    </option>
                    <option value="ios" className="bg-[#11163e]">
                      iOS
                    </option>
                    <option value="web" className="bg-[#11163e]">
                      Web
                    </option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="reason"
                  className="text-[11px] font-black uppercase tracking-[0.16em] text-gray-300"
                >
                  Reason for deletion
                </Label>
                <Textarea
                  id="reason"
                  value={form.reason}
                  onChange={(event) =>
                    setForm({ ...form, reason: event.target.value })
                  }
                  placeholder="Please share any context that can help us process your request faster."
                  className="min-h-[140px] rounded-2xl border-white/10 bg-white/5"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="preferredContact"
                  className="text-[11px] font-black uppercase tracking-[0.16em] text-gray-300"
                >
                  Preferred contact channel
                </Label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() =>
                      setForm({ ...form, preferredContact: "email" })
                    }
                    className={`rounded-2xl border px-4 py-3 text-sm font-semibold transition-colors ${
                      form.preferredContact === "email"
                        ? "border-accent/60 bg-accent/15 text-white"
                        : "border-white/10 bg-white/5 text-gray-300 hover:border-white/20"
                    }`}
                  >
                    Email
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setForm({ ...form, preferredContact: "phone" })
                    }
                    className={`rounded-2xl border px-4 py-3 text-sm font-semibold transition-colors ${
                      form.preferredContact === "phone"
                        ? "border-accent/60 bg-accent/15 text-white"
                        : "border-white/10 bg-white/5 text-gray-300 hover:border-white/20"
                    }`}
                  >
                    Phone
                  </button>
                </div>
              </div>

              <div className="space-y-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <div className="flex items-start gap-3">
                  <Checkbox
                    id="confirmOwnership"
                    checked={form.confirmOwnership}
                    onCheckedChange={(checked) =>
                      setForm({ ...form, confirmOwnership: checked === true })
                    }
                    className="mt-1 border-white/40"
                  />
                  <Label
                    htmlFor="confirmOwnership"
                    className="text-sm font-medium leading-relaxed text-gray-200"
                  >
                    I confirm that I am the owner of this account and authorized
                    to request deletion.
                  </Label>
                </div>

                <div className="flex items-start gap-3">
                  <Checkbox
                    id="confirmDeletionImpact"
                    checked={form.confirmDeletionImpact}
                    onCheckedChange={(checked) =>
                      setForm({
                        ...form,
                        confirmDeletionImpact: checked === true,
                      })
                    }
                    className="mt-1 border-white/40"
                  />
                  <Label
                    htmlFor="confirmDeletionImpact"
                    className="text-sm font-medium leading-relaxed text-gray-200"
                  >
                    I understand this deletion is permanent and I may lose
                    access to courses, history, and app data.
                  </Label>
                </div>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="h-12 w-full rounded-2xl bg-accent-gradient text-sm font-black uppercase tracking-[0.14em] text-white shadow-xl shadow-accent/20"
              >
                {isSubmitting
                  ? "Submitting request..."
                  : "Submit deletion request"}
              </Button>
            </form>
          </div>

          <aside className="space-y-6">
            <div className="glass-card rounded-[30px] border-white/10 p-6 md:p-7">
              <h3 className="mb-4 font-headline text-xl font-bold text-white md:text-2xl">
                What happens next
              </h3>
              <ul className="space-y-4 text-sm text-gray-200">
                <li className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-4 w-4 text-accent" />
                  <span>
                    Our support team confirms your identity and request details.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Clock3 className="mt-0.5 h-4 w-4 text-accent" />
                  <span>
                    Standard processing timeline is 5 to 10 business days.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Trash2 className="mt-0.5 h-4 w-4 text-accent" />
                  <span>
                    Account data is deleted after verification and completion.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-accent" />
                  <span>
                    You receive a final confirmation once deletion is completed.
                  </span>
                </li>
              </ul>
            </div>

            <div className="glass-card rounded-[30px] border-white/10 p-6 md:p-7">
              <h3 className="mb-3 font-headline text-xl font-bold text-white md:text-2xl">
                Need urgent help?
              </h3>
              <p className="text-sm text-gray-200">
                If you cannot access your account email, contact us directly and
                include identity verification details.
              </p>
              <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm text-gray-200">
                <p className="font-semibold text-white">Support email</p>
                <p className="mt-1">info@kandhugule-kcs.com</p>
              </div>
              <div className="mt-5">
                <Link
                  href="/privacy-policy"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-white"
                >
                  <ShieldCheck className="h-4 w-4" />
                  Review privacy policy
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
