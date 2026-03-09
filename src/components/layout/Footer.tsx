
"use client";

import React from "react";
import Link from "next/link";
import { Zap, Facebook, Twitter, Instagram, Linkedin, MapPin, Mail, ArrowRight, Send, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    navigation: [
      { name: "Home", href: "/" },
      { name: "About Us", href: "/about" },
      { name: "Pricing", href: "/pricing" },
      { name: "Testimonials", href: "/testimonials" },
      { name: "FAQ", href: "/faq" },
    ],
    services: [
      { name: "Institutions", href: "/services/educational-institutions" },
      { name: "Startups", href: "/services/startups-organizations" },
    ],
    legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Refund Policy", href: "#" },
    ]
  };

  return (
    <footer className="relative pt-32 pb-12 bg-[#0b0f2f] overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Top Newsletter Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative z-20 -mb-16"
        >
          <div className="glass-card p-8 md:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.4)]">
            <div className="space-y-3 text-center lg:text-left">
              <h4 className="text-3xl font-headline font-bold">Stay in the <span className="text-gradient">Loop</span></h4>
              <p className="text-gray-400 max-w-sm">Get the latest updates on new courses and technical workshops.</p>
            </div>
            <div className="flex w-full max-w-md gap-3">
              <Input 
                placeholder="Enter your email" 
                className="h-14 bg-white/5 border-white/10 rounded-2xl px-6 focus-visible:ring-primary" 
              />
              <Button size="icon" className="h-14 w-14 shrink-0 rounded-2xl bg-accent-gradient hover:opacity-90 transition-all shadow-lg border-none">
                <Send className="w-6 h-6" />
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Main Footer Grid */}
        <div className="pt-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-8 border-t border-white/5">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-8">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="bg-accent-gradient p-2.5 rounded-xl shadow-xl transition-transform group-hover:scale-110">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <span className="font-headline font-bold text-2xl tracking-tight text-white">
                Let’s Catch Up
              </span>
            </Link>
            
            <div className="space-y-4">
              <div className="flex gap-4 items-start group">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-accent/40 transition-colors">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Building No.: 3-37, Old RC Puram,<br />
                  Mumbai Highway, Hyderabad,<br />
                  Telangana – 502032
                </p>
              </div>
              <div className="flex gap-4 items-center group">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-accent/40 transition-colors">
                  <Mail className="w-4 h-4 text-accent" />
                </div>
                <p className="text-gray-400 text-sm">support@letscatchup.com</p>
              </div>
            </div>

            <div className="flex gap-3">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <motion.a 
                  key={i}
                  whileHover={{ scale: 1.15, y: -5 }}
                  href="#" 
                  className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-accent/40 transition-all text-gray-400 hover:text-white"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          <div className="lg:col-span-2 space-y-6">
            <h5 className="text-white font-bold tracking-widest text-xs uppercase opacity-50">Platform</h5>
            <ul className="space-y-4">
              {footerLinks.navigation.map((link) => (
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

          {/* Links Sections */}
          <div className="lg:col-span-2 space-y-6">
            <h5 className="text-white font-bold tracking-widest text-xs uppercase opacity-50">Services</h5>
            <ul className="space-y-4">
              {footerLinks.services.map((link) => (
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

          {/* Support Sections */}
          <div className="lg:col-span-2 space-y-6">
            <h5 className="text-white font-bold tracking-widest text-xs uppercase opacity-50">Support</h5>
            <ul className="space-y-4">
              {footerLinks.legal.map((link) => (
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

          {/* Status Badge */}
          <div className="lg:col-span-2 flex flex-col items-center lg:items-end justify-center">
            <div className="glass px-4 py-2 rounded-full border-white/5 flex items-center gap-3">
              <div className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </div>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-300">System Online</span>
            </div>
            <div className="mt-4 flex items-center gap-2 text-gray-500 text-[10px] uppercase font-bold tracking-widest">
              <ShieldCheck className="w-3 h-3" />
              <span>Secure Site</span>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-[10px] uppercase tracking-widest font-bold">
            © {currentYear} Let’s Catch Up. All rights reserved.
          </p>
          <div className="flex gap-8 text-[10px] uppercase tracking-widest font-black text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            <a href="#" className="hover:text-white transition-colors">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
