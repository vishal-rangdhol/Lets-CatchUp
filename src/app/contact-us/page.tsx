"use client";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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
  Building2,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from "lucide-react";
import Link from "next/link";
import { FormEvent, useState } from "react";

type ContactForm = {
  fullName: string;
  email: string;
  phone: string;
  organization: string;
  subject: string;
  message: string;
};

const INITIAL_FORM: ContactForm = {
  fullName: "",
  email: "",
  phone: "",
  organization: "",
  subject: "",
  message: "",
};

export default function ContactUsPage() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState<ContactForm>(INITIAL_FORM);
  const submissionConfig = getContactSubmissionConfig();

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!form.fullName || !form.email || !form.subject || !form.message) {
      toast({
        title: "Missing information",
        description: "Please complete all required fields before submitting.",
        variant: "destructive",
      });
      return;
    }

    try {
      setIsSubmitting(true);

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
            company_name: form.organization,
            designation: "",
            subject: form.subject,
            message: form.message,
            source: "website",
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
            "Unable to submit the form.",
        );
      }

      setForm(INITIAL_FORM);
      toast({
        title: "Message sent",
        description:
          result?.message ||
          "Thanks for reaching out. Our team will get back to you shortly via email.",
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
        <div className="absolute left-1/2 top-8 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-primary/20 blur-[140px]" />
        <div className="absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-accent/10 blur-[120px]" />
        <div className="absolute right-0 top-1/3 h-[280px] w-[280px] rounded-full bg-cyan-400/10 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl space-y-12 md:space-y-16">
        <div className="space-y-6 text-center">
          <Badge className="glass border-white/10 px-4 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-accent">
            Contact Us
          </Badge>
          <h1 className="mx-auto max-w-4xl text-balance font-headline text-4xl font-bold leading-tight text-white md:text-6xl">
            Let&apos;s build your learning and collaboration ecosystem
          </h1>
          <p className="mx-auto max-w-3xl text-balance text-base text-gray-300 md:text-xl">
            Tell us what you are building. We support institutions, startups,
            and communities with secure, scalable engagement solutions.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="glass-card rounded-[28px] border-white/10 p-6 md:p-8">
            <h2 className="mb-6 font-headline text-2xl font-bold text-white md:text-3xl">
              Send us a message
            </h2>
            <form onSubmit={onSubmit} className="space-y-5">
              {submissionConfig.isLocalFallback && (
                <Alert className="border-amber-300/30 bg-amber-500/10 text-amber-100 [&>svg]:text-amber-300">
                  <AlertTriangle className="h-4 w-4" />
                  <AlertTitle>Contact API configuration required</AlertTitle>
                  <AlertDescription className="text-xs md:text-sm">
                    This form is using local fallback endpoint{" "}
                    <span className="font-semibold">/api/contact</span>. Set
                    NEXT_PUBLIC_CONTACT_API_URL for static production
                    deployments.
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
                    Work email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={(event) =>
                      setForm({ ...form, email: event.target.value })
                    }
                    placeholder="you@company.com"
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
                    htmlFor="organization"
                    className="text-[11px] font-black uppercase tracking-[0.16em] text-gray-300"
                  >
                    Organization
                  </Label>
                  <Input
                    id="organization"
                    value={form.organization}
                    onChange={(event) =>
                      setForm({ ...form, organization: event.target.value })
                    }
                    placeholder="KCS Private Ltd"
                    className="h-12 rounded-2xl border-white/10 bg-white/5"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="subject"
                  className="text-[11px] font-black uppercase tracking-[0.16em] text-gray-300"
                >
                  Subject
                </Label>
                <Input
                  id="subject"
                  value={form.subject}
                  onChange={(event) =>
                    setForm({ ...form, subject: event.target.value })
                  }
                  placeholder="Partnership inquiry"
                  className="h-12 rounded-2xl border-white/10 bg-white/5"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="message"
                  className="text-[11px] font-black uppercase tracking-[0.16em] text-gray-300"
                >
                  Message
                </Label>
                <Textarea
                  id="message"
                  value={form.message}
                  onChange={(event) =>
                    setForm({ ...form, message: event.target.value })
                  }
                  placeholder="Share your goals, challenges, and expected timeline."
                  className="min-h-44 rounded-2xl border-white/10 bg-white/5"
                  required
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="h-12 w-full rounded-full bg-accent-gradient text-sm font-black uppercase tracking-[0.14em] text-white md:h-14 md:text-base"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>

          <div className="space-y-6">
            <div className="glass-card rounded-[28px] border-white/10 p-6 md:p-8">
              <h3 className="mb-5 font-headline text-2xl font-bold text-white">
                Reach us directly
              </h3>
              <div className="space-y-4 text-sm text-gray-300">
                <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <p>
                    Building: 3-37 RC Puram, behind SR chambers, Hyderabad,
                    502032, Telangana
                  </p>
                </div>
                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <Mail className="h-5 w-5 shrink-0 text-accent" />
                  <a
                    href="mailto:info@kandhugule-kcs.com"
                    className="font-semibold text-white hover:text-accent"
                  >
                    info@kandhugule-kcs.com
                  </a>
                </div>
                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <Phone className="h-5 w-5 shrink-0 text-accent" />
                  <span>Available on request after first response</span>
                </div>
                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <Clock3 className="h-5 w-5 shrink-0 text-accent" />
                  <span>Monday to Saturday, 10:00 AM to 6:00 PM IST</span>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-[28px] border-white/10 p-6 md:p-8">
              <h3 className="mb-5 font-headline text-2xl font-bold text-white">
                Who we help
              </h3>
              <div className="grid gap-3 text-sm">
                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-gray-200">
                  <Building2 className="h-4 w-4 text-accent" /> Educational
                  Institutions
                </div>
                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-gray-200">
                  <MessageCircle className="h-4 w-4 text-accent" /> Startups &
                  Organizations
                </div>
                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-gray-200">
                  <MapPin className="h-4 w-4 text-accent" /> Healthy Social
                  Spaces
                </div>
              </div>
              <Link
                href="/services"
                className="mt-5 inline-block text-sm font-bold text-accent hover:text-white"
              >
                Explore our service categories
              </Link>
            </div>
          </div>
        </div>

        <div className="glass-card overflow-hidden rounded-[28px] border-white/10">
          <a
            href="https://www.google.com/maps/place/3-37+RC+Puram,+Hyderabad,+Telangana+502032"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <iframe
              title="KCS Office Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.2891!2d78.3004977!3d17.5253292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91065c71510b%3A0x74a001174092b77a!2sRC+Puram+BHEL+Township%2C+Hyderabad%2C+Telangana!5e0!3m2!1sen!2sin!4v1709456000000!5m2!1sen!2sin"
              width="100%"
              height="420"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="pointer-events-none w-full"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
