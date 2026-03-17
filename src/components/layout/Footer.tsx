
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Linkedin, MapPin, Mail, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const FOOTER_LINKS = {
  navigation: [
    { name: "Home", href: "/#home" },
    { name: "Ecosystem", href: "/#ecosystem" },
    { name: "About Us", href: "/#about" },
    { name: "Pricing", href: "/#pricing" },
  ],
  services: [
    { name: "Academic Operations", href: "/services/educational-institutions" },
    { name: "Professional Collaboration", href: "/services/startups-organizations" },
    { name: "Healthy Social Spaces", href: "/services/healthy-social-spaces" },
  ],
  legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms and Conditions", href: "#" },
    { name: "Community Guidelines", href: "#" },
    { name: "Grievance Policy", href: "#" },
    { name: "Refund Policy", href: "#" },
    { name: "Cookie Policy", href: "#" },
  ]
};

const SOCIAL_LINKS = [
  { 
    Icon: Facebook, 
    href: "https://www.facebook.com/people/Kandhugule-Consultancy-Services/61563863545091/#",
    label: "Facebook",
    hoverClass: "hover:text-[#1877F2] hover:border-[#1877F2]/40 hover:shadow-[0_0_20px_rgba(24,119,242,0.5)]"
  },
  { 
    Icon: Instagram, 
    href: "https://www.instagram.com/kandhuguleconsultancyservices/",
    label: "Instagram",
    hoverClass: "hover:text-[#E4405F] hover:border-[#E4405F]/40 hover:shadow-[0_0_20px_rgba(228,64,95,0.5)]"
  },
  { 
    Icon: Linkedin, 
    href: "https://www.linkedin.com/company/kandhuguleconsultancyservicespvtltd/posts/?feedView=all",
    label: "LinkedIn",
    hoverClass: "hover:text-[#0A66C2] hover:border-[#0A66C2]/40 hover:shadow-[0_0_20px_rgba(10,102,194,0.5)]"
  },
  { 
    Icon: (props: any) => (
      <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
      </svg>
    ),
    href: "https://x.com/Kandhugule_KCS",
    label: "X",
    hoverClass: "hover:text-white hover:border-white/40 hover:shadow-[0_0_20px_rgba(255,255,255,0.5)]"
  },
];

export function Footer() {
  const [currentYear, setCurrentYear] = useState<number | string>(2025);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="relative pt-16 pb-12 bg-[#0b0f2f] overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pt-10 border-t border-white/5">
          <div className="lg:col-span-4 space-y-8">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-10 h-10 md:w-12 md:h-12 overflow-hidden shadow-2xl">
                <Image src="/favicon-v2.ico" alt="Let's Catch Up Logo" fill className="object-contain" />
              </div>
              <span className="font-headline font-bold text-xl md:text-2xl tracking-tight text-white">
                Let’s catch up
              </span>
            </Link>
            
            <div className="space-y-4">
              <div className="flex gap-4 items-start group">
                <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-accent/40 transition-colors">
                  <MapPin className="w-4 h-4 md:w-5 md:h-5 text-accent" />
                </div>
                <div className="text-gray-400 text-xs leading-relaxed">
                  Building: 3-37 RC Puram, behind SR chambers,<br />
                  Hyderabad, 502032,<br />
                  Telangana
                </div>
              </div>
              <div className="flex gap-4 items-center group">
                <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-accent/40 transition-colors">
                  <Mail className="w-3 h-3 md:w-4 md:h-4 text-accent" />
                </div>
                <p className="text-gray-400 text-sm">info@kandhugule-kcs.com</p>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <div className="flex gap-3">
                {SOCIAL_LINKS.map(({ Icon, href, label, hoverClass }, i) => (
                  <motion.a 
                    key={i}
                    whileHover={{ scale: 1.15, y: -5 }}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className={`w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center transition-all text-gray-400 ${hoverClass}`}
                  >
                    <Icon className="w-4 h-4 md:w-5 md:h-5" />
                  </motion.a>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <Link href="https://play.google.com/store/apps/details?id=com.kcs.letscatchup&pcampaignid=web_share" target="_blank" className="transition-transform hover:scale-105 shrink-0">
                  <Image src="/googleplay.png" alt="Google Play Store" width={120} height={36} className="object-contain" />
                </Link>
                <Link href="https://apps.apple.com/in/app/lets-catch-up-kcs/id6749822557" target="_blank" className="transition-transform hover:scale-105 shrink-0">
                  <Image src="/appstore.jpg" alt="Apple App Store" width={120} height={36} className="object-contain rounded-lg shadow-xl" />
                </Link>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-4 md:space-y-6">
            <h5 className="text-white font-bold tracking-widest text-xs uppercase opacity-50">Platform</h5>
            <ul className="space-y-3 md:space-y-4">
              {FOOTER_LINKS.navigation.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm flex items-center group">
                    <span className="w-0 group-hover:w-4 overflow-hidden transition-all duration-300 text-accent opacity-0 group-hover:opacity-100">
                      <ArrowRight className="w-3 h-3 mr-2" />
                    </span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3 space-y-4 md:space-y-6">
            <h5 className="text-white font-bold tracking-widest text-xs uppercase opacity-50">Ecosystem</h5>
            <ul className="space-y-3 md:space-y-4">
              {FOOTER_LINKS.services.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm flex items-center group">
                    <span className="w-0 group-hover:w-4 overflow-hidden transition-all duration-300 text-accent opacity-0 group-hover:opacity-100">
                      <ArrowRight className="w-3 h-3 mr-2" />
                    </span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3 space-y-4 md:space-y-6">
            <h5 className="text-white font-bold tracking-widest text-xs uppercase opacity-50">Support</h5>
            <ul className="space-y-3 md:space-y-4">
              {FOOTER_LINKS.legal.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm flex items-center group">
                    <span className="w-0 group-hover:w-4 overflow-hidden transition-all duration-300 text-accent opacity-0 group-hover:opacity-100">
                      <ArrowRight className="w-3 h-3 mr-2" />
                    </span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex items-center gap-3 p-2 rounded-xl bg-white/5 border border-white/10 group">
              <Image 
                src="/iso.png" 
                alt="ISO Certified Logo" 
                width={36} 
                height={36} 
                className="object-contain"
              />
              <span className="text-[8px] font-black uppercase tracking-[0.2em] text-gray-500 group-hover:text-accent transition-colors">ISO Certified</span>
            </div>
            <p className="text-gray-500 text-[9px] uppercase tracking-widest font-medium leading-relaxed">
              @COPYRIGHT {currentYear} | ALL RIGHTS RESERVED BY <br className="md:hidden" /> <span className="font-bold text-white">KANDHUGULE CONSULTANCY SERVICES PRIVATE LIMITED</span>
            </p>
          </div>

          <div className="flex gap-6 md:gap-8 text-[9px] uppercase tracking-widest font-black text-gray-500">
            <Link href="#" className="hover:text-white transition-colors">Cookie Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Community Guidelines</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
