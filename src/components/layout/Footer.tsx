"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, MapPin, Mail, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const FOOTER_LINKS = {
  navigation: [
    { name: "Home", href: "/#home" },
    { name: "Ecosystem", href: "/#ecosystem" },
    { name: "About Us", href: "/#about" },
    { name: "Pricing", href: "/#pricing" },
    { name: "FAQ", href: "/faq" },
  ],
  services: [
    { name: "Academic Operations", href: "/services/educational-institutions" },
    { name: "Professional Collaboration", href: "/services/startups-organizations" },
    { name: "Healthy Social Spaces", href: "/services/healthy-social-spaces" },
  ],
  legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Refund Policy", href: "#" },
    { name: "Security", href: "#" },
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-8 pt-10 border-t border-white/5">
          <div className="lg:col-span-4 space-y-8">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="bg-accent-gradient w-10 h-10 md:w-12 md:h-12 rounded-xl shadow-xl flex items-center justify-center transition-transform">
                <span className="text-white font-black text-lg leading-none tracking-tighter">LC</span>
              </div>
              <span className="font-headline font-bold text-2xl tracking-tight text-white">
                Let’s catch up
              </span>
            </Link>
            
            <div className="space-y-4">
              <div className="flex gap-4 items-start group">
                <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-accent/40 transition-colors">
                  <MapPin className="w-4 h-4 md:w-5 md:h-5 text-accent" />
                </div>
                <div className="text-gray-400 text-sm leading-relaxed">
                  Building No.: 3-37, Old RC Puram,<br />
                  Back Side ZPHS School, Mumbai Highway,<br />
                  Ramachandrapuram, Sangareddy<br />
                  Telangana – 502032
                </div>
              </div>
              <div className="flex gap-4 items-center group">
                <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-accent/40 transition-colors">
                  <Mail className="w-3 h-3 md:w-4 md:h-4 text-accent" />
                </div>
                <p className="text-gray-400 text-sm">info@kandhugule-kcs.com</p>
              </div>
            </div>

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
          </div>

          <div className="lg:col-span-2 space-y-6">
            <h5 className="text-white font-bold tracking-widest text-xs uppercase opacity-50">Platform</h5>
            <ul className="space-y-4">
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

          <div className="lg:col-span-3 space-y-6">
            <h5 className="text-white font-bold tracking-widest text-xs uppercase opacity-50">Ecosystem</h5>
            <ul className="space-y-4">
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

          <div className="lg:col-span-3 space-y-6">
            <h5 className="text-white font-bold tracking-widest text-xs uppercase opacity-50">Support</h5>
            <ul className="space-y-4">
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

        <div className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <p className="text-gray-500 text-[10px] uppercase tracking-widest font-medium">
              @COPYRIGHT 2025 | ALL RIGHTS RESERVED BY <span className="font-bold text-white">KANDHUGULE CONSULTANCY SERVICES PRIVATE LIMITED</span>
            </p>
          </div>

          <div className="flex gap-8 text-[10px] uppercase tracking-widest font-black text-gray-500">
            <Link href="#" className="hover:text-white transition-colors">Cookie Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Security</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}