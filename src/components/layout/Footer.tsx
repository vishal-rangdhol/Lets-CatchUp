"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const FOOTER_LINKS = {
  navigation: [
    { name: "Home", href: "/#home" },
    { name: "Who we help", href: "/#ecosystem" },
    { name: "Pricing", href: "/#pricing" },
    { name: "About Us", href: "/about" },
  ],
  services: [
    { name: "Academic Operations", href: "/services/educational-institutions" },
    {
      name: "Professional Collaboration",
      href: "/services/startups-organizations",
    },
    { name: "Healthy Social Spaces", href: "/services/healthy-social-spaces" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms of Service", href: "/terms-of-service" },
    { name: "Account Deletion", href: "/account-deletion-request" },
    { name: "Community Guidelines", href: "/community-guidelines" },
    { name: "Grievance Policy", href: "#" },
    { name: "Refund Policy", href: "#" },
  ],
};

const SOCIAL_LINKS = [
  {
    Icon: Facebook,
    href: "https://www.facebook.com/people/Kandhugule-Consultancy-Services/61563863545091/#",
    label: "Facebook",
    hoverClass: "hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2]",
  },
  {
    Icon: Instagram,
    href: "https://www.instagram.com/kandhuguleconsultancyservices/",
    label: "Instagram",
    hoverClass: "hover:bg-[#E4405F] hover:text-white hover:border-[#E4405F]",
  },
  {
    Icon: Linkedin,
    href: "https://www.linkedin.com/company/kandhuguleconsultancyservicespvtltd/posts/?feedView=all",
    label: "LinkedIn",
    hoverClass: "hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2]",
  },
  {
    Icon: (props: any) => (
      <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
      </svg>
    ),
    href: "https://x.com/Kandhugule_KCS",
    label: "X",
    hoverClass: "hover:bg-white hover:text-black hover:border-white",
  },
];

export function Footer() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Use a stable default for the initial server render to match client hydration
  const currentYear = mounted ? new Date().getFullYear().toString() : "2025";

  return (
    <footer className={cn(
      "relative pt-24 pb-12 bg-[#0b0f2f] overflow-hidden border-t border-white/5",
      "transition-colors duration-500"
    )}>
      {/* Visual Highlighting Ambient Glows - Static containers for hydration stability */}
      <div className="absolute top-[-100px] left-1/4 w-[600px] h-[400px] bg-primary/10 rounded-full blur-[140px] pointer-events-none opacity-50 z-0" />
      <div className="absolute bottom-[-100px] right-1/4 w-[600px] h-[400px] bg-accent/10 rounded-full blur-[140px] pointer-events-none opacity-50 z-0" />
      
      {/* High-Fidelity Top Line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent z-10" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16">
          <div className="lg:col-span-4 space-y-10">
            <Link href="/" className="flex items-center gap-4 group">
              <div className="relative w-12 h-12 overflow-hidden shadow-2xl transition-transform duration-500 group-hover:scale-110">
                <Image
                  src="/favicon-v2.ico"
                  alt="Let's Catch Up Logo"
                  fill
                  sizes="48px"
                  className="object-contain"
                />
              </div>
              <span className="font-headline font-bold text-2xl md:text-3xl tracking-tight text-white group-hover:text-accent transition-colors duration-500">
                Let’s catch up
              </span>
            </Link>

            <div className="space-y-5 font-body">
              <div className="flex gap-4 items-start group">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-accent/40 transition-all duration-300 shadow-xl">
                  <MapPin className="w-5 h-5 text-accent glow-icon" />
                </div>
                <div className="text-gray-400 text-sm leading-relaxed font-medium">
                  Building: 3-37 RC Puram, behind SR chambers,
                  <br />
                  Hyderabad, 502032,
                  <br />
                  Telangana
                </div>
              </div>
              <div className="flex gap-4 items-center group">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-accent/40 transition-all duration-300 shadow-xl">
                  <Mail className="w-4 h-4 text-accent glow-icon" />
                </div>
                <p className="text-gray-400 text-sm font-medium transition-colors group-hover:text-white">info@kandhugule-kcs.com</p>
              </div>
            </div>

            <div className="flex flex-col gap-8 pt-4">
              <div className="flex gap-4 min-h-[48px]">
                {mounted && SOCIAL_LINKS.map(({ Icon, href, label, hoverClass }) => (
                  <motion.a
                    key={label}
                    whileHover={{ scale: 1.1, y: -4 }}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className={cn(
                      "w-11 h-11 md:w-12 md:h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-300 text-white/70",
                      hoverClass
                    )}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="https://play.google.com/store/apps/details?id=com.kcs.letscatchup&pcampaignid=web_share"
                  target="_blank"
                  className="transition-all hover:scale-105 hover:brightness-110 shrink-0 shadow-lg"
                >
                  <Image
                    src="/googleplay.png"
                    alt="Google Play Store"
                    width={140}
                    height={42}
                    className="object-contain"
                  />
                </Link>
                <Link
                  href="https://apps.apple.com/in/app/lets-catch-up-kcs/id6749822557"
                  target="_blank"
                  className="transition-all hover:scale-105 hover:brightness-110 shrink-0 shadow-lg"
                >
                  <Image
                    src="/appstore.jpg"
                    alt="Apple App Store"
                    width={140}
                    height={42}
                    className="object-contain rounded-lg"
                  />
                </Link>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <h5 className="font-headline text-white font-bold tracking-[0.2em] text-[10px] md:text-xs uppercase opacity-40">
              Platform
            </h5>
            <ul className="space-y-4">
              {FOOTER_LINKS.navigation.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="font-headline text-gray-400 hover:text-white transition-all duration-300 text-sm font-bold flex items-center group"
                  >
                    <span className="w-0 group-hover:w-5 overflow-hidden transition-all duration-300 text-accent opacity-0 group-hover:opacity-100 flex items-center">
                      <ArrowRight className="w-3 h-3 mr-2" />
                    </span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3 space-y-6">
            <h5 className="font-headline text-white font-bold tracking-[0.2em] text-[10px] md:text-xs uppercase opacity-40">
              Who we help
            </h5>
            <ul className="space-y-4">
              {FOOTER_LINKS.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="font-headline text-gray-400 hover:text-white transition-all duration-300 text-sm font-bold flex items-center group"
                  >
                    <span className="w-0 group-hover:w-5 overflow-hidden transition-all duration-300 text-accent opacity-0 group-hover:opacity-100 flex items-center">
                      <ArrowRight className="w-3 h-3 mr-2" />
                    </span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3 space-y-6">
            <h5 className="font-headline text-white font-bold tracking-[0.2em] text-[10px] md:text-xs uppercase opacity-40">
              Support
            </h5>
            <ul className="space-y-4">
              {FOOTER_LINKS.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="font-headline text-gray-400 hover:text-white transition-all duration-300 text-sm font-bold flex items-center group"
                  >
                    <span className="w-0 group-hover:w-5 overflow-hidden transition-all duration-300 text-accent opacity-0 group-hover:opacity-100 flex items-center">
                      <ArrowRight className="w-3 h-3 mr-2" />
                    </span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-12">
            <div className="flex items-center gap-4 px-4 py-2.5 rounded-2xl bg-white/5 border border-white/10 group transition-all duration-500 hover:border-accent/30 hover:bg-white/[0.08] shadow-xl">
              <Image
                src="/iso.png"
                alt="ISO Certified Logo"
                width={40}
                height={40}
                style={{ height: "auto" }}
                className="object-contain"
              />
              <div className="flex flex-col">
                <span className="font-headline text-[9px] font-black uppercase tracking-[0.2em] text-gray-500 group-hover:text-accent transition-colors">
                  ISO Certified
                </span>
                <span className="text-[8px] font-body text-gray-600 group-hover:text-gray-400 transition-colors uppercase tracking-widest font-bold">Secure Environment</span>
              </div>
            </div>
            <div className="space-y-1">
              <p className="text-gray-500 text-[10px] uppercase tracking-[0.15em] font-black leading-relaxed font-body">
                © {currentYear} | ALL RIGHTS RESERVED BY
              </p>
              <p className="text-[10px] md:text-xs font-bold text-white uppercase tracking-[0.15em] font-headline">
                KANDHUGULE CONSULTANCY SERVICES PRIVATE LIMITED
              </p>
            </div>
          </div>

          <div className="flex gap-8 text-[10px] uppercase tracking-[0.2em] font-black text-gray-500 font-headline">
            <Link
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
