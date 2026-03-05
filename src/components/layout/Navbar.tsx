
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
      setIsScrolled(window.scrollY > 50);
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
          y: 0,
          width: "100%",
          left: "0%",
          backgroundColor: "rgba(11, 15, 47, 0)",
          backdropFilter: "blur(0px)",
          paddingTop: "1.5rem",
          paddingBottom: "1.5rem",
          borderBottomColor: "rgba(255, 255, 255, 0)",
          borderRadius: "0px",
          boxShadow: "0 0 0 rgba(0,0,0,0)",
        },
        scrolled: {
          y: 10,
          width: "calc(100% - 3rem)",
          left: "1.5rem",
          backgroundColor: "rgba(11, 15, 47, 0.85)",
          backdropFilter: "blur(16px)",
          paddingTop: "0.75rem",
          paddingBottom: "0.75rem",
          borderBottomColor: "rgba(255, 255, 255, 0.1)",
          borderRadius: "2rem",
          boxShadow: "0 20px 40px -15px rgba(0, 0, 0, 0.5)",
        },
      }}
      transition={{ 
        duration: 0.5, 
        ease: [0.22, 1, 0.36, 1] // Custom quintic ease-out
      }}
      className="fixed top-0 z-50 px-6 border-b"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group shrink-0">
          <motion.div 
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="bg-accent-gradient p-2 rounded-lg shadow-lg"
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
              <motion.span 
                className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent rounded-full"
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <Link href="/dashboard">
            <Button variant="ghost" className="text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-full px-5">
              Log in
            </Button>
          </Link>
          <Link href="/contact">
            <Button className="bg-accent-gradient hover:opacity-90 text-white text-sm font-bold rounded-full px-6 shadow-lg border-none h-10 transition-transform active:scale-95">
              Get Started
            </Button>
          </Link>
        </div>

        <button
          className="lg:hidden p-2 text-gray-300 hover:bg-white/5 rounded-full transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 mt-4 bg-[#0b0f2f]/95 backdrop-blur-2xl border border-white/10 rounded-3xl lg:hidden overflow-hidden mx-4 shadow-2xl"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link, idx) => (
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  key={link.name}
                >
                  <Link
                    href={link.href}
                    className="text-lg font-medium py-2 text-gray-300 hover:text-accent flex items-center justify-between group"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                    <X className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity rotate-45" />
                  </Link>
                </motion.div>
              ))}
              <div className="flex flex-col gap-3 pt-4 border-t border-white/10">
                <Link href="/dashboard" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button variant="outline" className="w-full glass border-white/10 rounded-full h-12">
                    Log in
                  </Button>
                </Link>
                <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button className="w-full bg-accent-gradient border-none rounded-full h-12 shadow-lg">Get Started</Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
