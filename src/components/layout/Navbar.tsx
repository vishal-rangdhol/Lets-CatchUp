
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { GraduationCap, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Features", href: "/features" },
    { name: "Services", href: "/services" },
    { name: "Pricing", href: "/pricing" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <motion.nav
      initial={false}
      animate={isScrolled ? "scrolled" : "top"}
      variants={{
        top: {
          backgroundColor: "rgba(11, 15, 47, 0)",
          backdropFilter: "blur(0px)",
          paddingTop: "1.5rem",
          paddingBottom: "1.5rem",
          borderBottomColor: "rgba(255, 255, 255, 0)",
        },
        scrolled: {
          backgroundColor: "rgba(11, 15, 47, 0.8)",
          backdropFilter: "blur(12px)",
          paddingTop: "1rem",
          paddingBottom: "1rem",
          borderBottomColor: "rgba(255, 255, 255, 0.1)",
        },
      }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 z-50 px-6 border-b"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group shrink-0">
          <motion.div 
            whileHover={{ scale: 1.1 }}
            className="bg-accent-gradient p-2 rounded-lg"
          >
            <GraduationCap className="w-6 h-6 text-white" />
          </motion.div>
          <span className="font-headline font-bold text-xl tracking-tight text-white">
            LetsCatchUp
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-6 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-300 hover:text-accent transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full" />
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <Link href="/dashboard">
            <Button variant="ghost" className="text-sm font-medium text-gray-300 hover:text-white">
              Log in
            </Button>
          </Link>
          <Link href="/contact">
            <Button className="bg-accent-gradient hover:opacity-90 text-white text-sm font-bold rounded-full px-6 shadow-[0_0_20px_rgba(79,209,197,0.3)] border-none h-10">
              Get Started
            </Button>
          </Link>
        </div>

        <button
          className="lg:hidden p-2 text-gray-300"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 right-0 bg-[#0b0f2f]/95 backdrop-blur-xl border-b border-white/10 lg:hidden overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-lg font-medium py-2 text-gray-300 border-b border-white/5 last:border-none"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex flex-col gap-3 pt-4 border-t border-white/10">
                <Link href="/dashboard" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button variant="outline" className="w-full glass border-white/10">
                    Log in
                  </Button>
                </Link>
                <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button className="w-full bg-accent-gradient border-none">Get Started</Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
