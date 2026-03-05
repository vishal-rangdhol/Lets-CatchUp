"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { GraduationCap, Menu, X } from "lucide-react";
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
          backgroundColor: "rgba(35, 45, 95, 0.9)", // Brightened from 11, 15, 47
          backdropFilter: "blur(20px)",
          paddingTop: "0.85rem",
          paddingBottom: "0.85rem",
          borderBottomColor: "rgba(255, 255, 255, 0.25)",
          borderRadius: "2.5rem",
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.6)",
        },
      }}
      transition={{ 
        duration: 0.6, 
        ease: [0.22, 1, 0.36, 1] 
      }}
      className="fixed top-0 z-50 px-6 border-b"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between relative h-full">
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

        {/* Desktop Nav Links - Centered and Aligned */}
        <div className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2 h-full">
          {navLinks.map((link) => (
            <div key={link.name} className="relative flex items-center h-full">
              <Link href={link.href} className="flex items-center h-full">
                <motion.span
                  className="inline-block text-sm font-bold text-gray-300 transition-colors cursor-pointer whitespace-nowrap"
                  whileHover={{ 
                    scale: 1.2,
                    color: "hsl(var(--accent))",
                    paddingLeft: "8px",
                    paddingRight: "8px"
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  {link.name}
                </motion.span>
              </Link>
            </div>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <Link href="/dashboard">
            <Button variant="ghost" className="text-sm font-bold text-gray-300 hover:text-white hover:bg-white/5 rounded-full px-5 transition-all">
              Log in
            </Button>
          </Link>
          <Link href="/contact">
            <Button className="bg-accent-gradient hover:opacity-90 text-white text-sm font-extrabold rounded-full px-8 shadow-lg border-none h-11 transition-all active:scale-95">
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
            className="absolute top-full left-0 right-0 mt-4 bg-[#0b0f2f]/98 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] lg:hidden overflow-hidden mx-4 shadow-2xl"
          >
            <div className="flex flex-col p-8 gap-6">
              {navLinks.map((link, idx) => (
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  key={link.name}
                >
                  <Link
                    href={link.href}
                    className="text-xl font-bold py-2 text-gray-300 hover:text-accent flex items-center justify-between group"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                    <motion.div 
                      whileHover={{ x: 5 }}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <X className="w-4 h-4 rotate-45" />
                    </motion.div>
                  </Link>
                </motion.div>
              ))}
              <div className="flex flex-col gap-4 pt-6 border-t border-white/10">
                <Link href="/dashboard" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button variant="outline" className="w-full glass border-white/10 rounded-full h-14 text-lg font-bold">
                    Log in
                  </Button>
                </Link>
                <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button className="w-full bg-accent-gradient border-none rounded-full h-14 text-lg font-extrabold shadow-lg">Get Started</Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
