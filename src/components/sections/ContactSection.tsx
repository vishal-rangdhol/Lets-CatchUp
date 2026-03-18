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
import { motion } from "framer-motion";
import { AlertTriangle, ExternalLink, Mail, MapPin } from "lucide-react";
import React, { useState } from "react";

export function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const submissionConfig = getContactSubmissionConfig();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      toast({
        title: "Missing Fields",
        description: "Please fill all required fields.",
        variant: "destructive",
      });
      return;
    }
    try {
      setLoading(true);
      const response = await fetch(getContactSubmissionUrl(), {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(
          sanitizeContactPayload({
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message,
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

      toast({
        title: "Message Sent!",
        description:
          result?.message ||
          "Your interest has been recorded and sent to our team.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      toast({
        title: "Submission Failed",
        description:
          error instanceof Error
            ? error.message
            : "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const mapUrl =
    "https://www.google.com/maps/place/3-37+RC+Puram,+Hyderabad,+Telangana+502032";

  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-20 md:space-y-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8 lg:sticky lg:top-32"
          >
            <div className="space-y-6">
              <Badge className="font-headline glass text-accent border-white/10 px-4 py-1 uppercase tracking-widest text-[10px] font-bold">
                Connect With Us
              </Badge>
              <h2 className="text-4xl md:text-6xl font-headline font-bold leading-tight text-white">
                Let's <span className="text-gradient">Catch Up</span>
              </h2>
              <p className="text-base md:text-xl text-gray-400 max-w-lg leading-relaxed font-medium font-body">
                Have questions about our programs or interested in a
                partnership? Our team is here to help you scale your potential.
              </p>
            </div>

            <div className="grid gap-6">
              <div className="flex gap-5 items-start glass-card p-6 md:p-8 border-white/5 group relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-accent-gradient opacity-50" />
                <div className="bg-white/5 p-3 md:p-4 rounded-xl md:rounded-2xl group-hover:scale-110 transition-transform shadow-xl border border-white/10">
                  <MapPin className="w-5 h-5 md:w-6 md:h-6 text-accent glow-icon" />
                </div>
                <div className="space-y-2">
                  <p className="font-headline text-[10px] text-accent uppercase tracking-widest font-bold">
                    Headquarters
                  </p>
                  <div className="font-body font-bold text-xs md:text-sm text-gray-200 leading-relaxed">
                    Building: 3-37 RC Puram, behind SR chambers,
                    <br />
                    Hyderabad, 502032,
                    <br />
                    Telangana
                  </div>
                </div>
              </div>
              <div className="flex gap-5 items-center glass-card p-6 md:p-8 border-white/5 group relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-accent-gradient opacity-50" />
                <div className="bg-white/5 p-3 md:p-4 rounded-xl md:rounded-2xl group-hover:scale-110 transition-transform shadow-xl border border-white/10">
                  <Mail className="w-5 h-5 md:w-6 md:h-6 text-accent glow-icon" />
                </div>
                <div className="space-y-2">
                  <p className="font-headline text-[10px] text-accent uppercase tracking-widest font-bold">
                    Direct Communication
                  </p>
                  <p className="font-headline font-bold text-base md:text-lg text-white">
                    info@kandhugule-kcs.com
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 w-full h-full rounded-3xl md:rounded-[40px] bg-accent-gradient opacity-20 transition-all duration-500 group-hover:opacity-30 -z-10" />
            <div className="relative bg-gradient-to-br from-[#1e294b] via-[#141d3d] to-[#0f172a] border border-white/10 rounded-3xl md:rounded-[40px] p-5 md:p-10 shadow-2xl overflow-hidden group-hover:border-white/20 transition-all duration-500">
              <form
                onSubmit={handleSubmit}
                className="space-y-4 md:space-y-8 relative z-10"
              >
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
                <div className="grid md:grid-cols-2 gap-4 md:gap-8">
                  <div className="space-y-2">
                    <Label
                      htmlFor="name"
                      className="font-headline text-gray-300 font-bold uppercase tracking-widest text-[9px] md:text-[10px]"
                    >
                      Full Name
                    </Label>
                    <Input
                      id="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      className="font-body bg-white/5 border-white/10 h-10 md:h-12 rounded-xl md:rounded-2xl px-4 md:px-6 focus-visible:ring-accent text-sm md:text-base"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="email"
                      className="font-headline text-gray-300 font-bold uppercase tracking-widest text-[9px] md:text-[10px]"
                    >
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="font-body bg-white/5 border-white/10 h-10 md:h-12 rounded-xl md:rounded-2xl px-4 md:px-6 focus-visible:ring-accent text-sm md:text-base"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label
                    htmlFor="subject"
                    className="font-headline text-gray-300 font-bold uppercase tracking-widest text-[9px] md:text-[10px]"
                  >
                    Subject
                  </Label>
                  <Input
                    id="subject"
                    placeholder="How can we help you?"
                    value={formData.subject}
                    onChange={handleChange}
                    className="font-body bg-white/5 border-white/10 h-10 md:h-12 rounded-xl md:rounded-2xl px-4 md:px-6 focus-visible:ring-accent text-sm md:text-base"
                    required
                    />
                </div>
                <div className="space-y-2">
                  <Label
                    htmlFor="message"
                    className="font-headline text-gray-300 font-bold uppercase tracking-widest text-[9px] md:text-[10px]"
                  >
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Type your message here..."
                    value={formData.message}
                    onChange={handleChange}
                    className="font-body bg-white/5 border-white/10 min-h-[80px] md:min-h-[180px] rounded-xl md:rounded-2xl p-4 md:p-6 focus-visible:ring-accent text-sm md:text-base"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  disabled={loading}
                  className="font-headline w-full bg-accent-gradient h-11 md:h-16 rounded-full text-base md:text-xl font-bold shadow-xl border-none transition-all hover:scale-[1.02] active:scale-95 uppercase tracking-widest"
                >
                  {loading ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div className="text-center space-y-4">
            <h3 className="text-3xl md:text-5xl font-headline font-bold text-white">
              Our <span className="text-gradient">Location</span>
            </h3>
          </div>
          <div className="relative group max-w-full md:max-w-2xl mx-auto">
            <div className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl md:rounded-[40px] bg-accent-gradient opacity-10 -z-10" />
            <div className="glass-card border-white/10 overflow-hidden shadow-2xl bg-[#0f172a] rounded-2xl md:rounded-[40px]">
              <a
                href={mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="aspect-video w-full relative block cursor-pointer group/map"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.2891!2d78.3004977!3d17.5253292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91065c71510b%3A0x74a001174092b77a!2sRC+Puram+BHEL+Township%2C+Hyderabad%2C+Telangana!5e0!3m2!1sen!2sin!4v1709456000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="filter grayscale-[0.2] transition-all group-hover/map:grayscale-0 pointer-events-none"
                ></iframe>
                <div className="absolute inset-0 bg-black/20 group-hover/map:bg-black/0 transition-all flex flex-col items-center justify-center opacity-0 group-hover/map:opacity-100">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-full shadow-2xl scale-90 group-hover/map:scale-100 transition-transform">
                    <ExternalLink className="w-8 h-8 text-primary" />
                  </div>
                  <span className="font-headline mt-4 text-white font-bold uppercase tracking-widest text-xs">
                    Open in Google Maps
                  </span>
                </div>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}