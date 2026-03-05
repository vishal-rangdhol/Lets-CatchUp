
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { GraduationCap, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Courses", href: "/courses" },
    { name: "Programs", href: "/programs" },
    { name: "Success Stories", href: "/stories" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        isScrolled ? "bg-background/80 backdrop-blur-lg border-b border-white/10" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-primary p-2 rounded-lg glow-icon transition-transform group-hover:scale-110">
            <GraduationCap className="w-6 h-6 text-white" />
          </div>
          <span className="font-headline font-bold text-xl tracking-tight">
            LetsCatchUp <span className="text-accent">Learn</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-white transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Link href="/login">
            <Button variant="ghost" className="text-sm font-medium">
              Log in
            </Button>
          </Link>
          <Link href="/register">
            <Button className="bg-primary hover:bg-primary/90 text-sm font-medium rounded-full px-6 shadow-[0_0_20px_rgba(76,51,204,0.3)]">
              Get Started
            </Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-muted-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-white/10 md:hidden animate-in slide-in-from-top duration-300">
          <div className="flex flex-col p-6 gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-lg font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex flex-col gap-3 pt-4 border-t border-white/10">
              <Link href="/login" onClick={() => setIsMobileMenuOpen(false)}>
                <Button variant="outline" className="w-full">
                  Log in
                </Button>
              </Link>
              <Link href="/register" onClick={() => setIsMobileMenuOpen(false)}>
                <Button className="w-full bg-primary">Sign Up</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
