"use client";

import React from "react";
import Link from "next/link";
import { GraduationCap, Facebook, Twitter, Instagram, Linkedin, MapPin, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative pt-24 pb-12 border-t border-white/10 bg-[#0b0f2f]">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
        <div className="space-y-6">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-accent-gradient p-2 rounded-lg transition-transform group-hover:scale-110">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <span className="font-headline font-bold text-2xl tracking-tight text-white">
              LetsCatchUp <span className="text-accent">Learn</span>
            </span>
          </Link>
          <div className="space-y-4">
            <div className="flex gap-3 text-gray-400">
              <MapPin className="w-5 h-5 text-accent shrink-0" />
              <p className="text-sm leading-relaxed">
                Building No.: 3-37, Old RC Puram,<br />
                Back Side ZPHS School, Mumbai Highway,<br />
                Hyderabad, Telangana – 502032
              </p>
            </div>
            <div className="flex items-center gap-3 text-gray-400">
              <Mail className="w-4 h-4 text-accent" />
              <p className="text-sm">support@letscatchup.com</p>
            </div>
          </div>
          <div className="flex gap-4">
            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-accent-gradient hover:border-transparent transition-all group">
                <Icon className="w-5 h-5 text-gray-400 group-hover:text-white" />
              </a>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <h5 className="font-bold text-white text-lg">Navigation</h5>
          <ul className="space-y-4">
            {[
              { name: "Home", href: "/" },
              { name: "About Us", href: "/about" },
              { name: "Pricing", href: "/pricing" },
              { name: "Contact Us", href: "/contact" },
            ].map((link) => (
              <li key={link.name}>
                <Link href={link.href} className="text-gray-400 hover:text-accent transition-colors text-sm">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-6">
          <h5 className="font-bold text-white text-lg">Services</h5>
          <ul className="space-y-4">
            <li>
              <Link href="/services" className="text-gray-400 hover:text-accent transition-colors text-sm">
                Educational Institutions
              </Link>
            </li>
            <li>
              <Link href="/services" className="text-gray-400 hover:text-accent transition-colors text-sm">
                Startups & Organizations
              </Link>
            </li>
          </ul>
        </div>

        <div className="space-y-6">
          <h5 className="font-bold text-white text-lg">Policies</h5>
          <ul className="space-y-4">
            {[
              "Privacy Policy",
              "Terms & Conditions",
              "Cancellation and Refund Policy",
              "Shipping and Delivery Policy",
            ].map((policy) => (
              <li key={policy}>
                <a href="#" className="text-gray-400 hover:text-accent transition-colors text-sm">
                  {policy}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-12 border-t border-white/5 text-center">
        <p className="text-gray-500 text-xs">
          © {currentYear} LetsCatchUp. All rights reserved. Crafted for excellence.
        </p>
      </div>
    </footer>
  );
}
