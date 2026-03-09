
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X, GraduationCap, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/", type: "link" },
    { 
      name: "Company", 
      type: "dropdown",
      items: [
        { name: "About Us", href: "/about" },
        { name: "Careers", href: "/careers" },
      ]
    },
    { 
      name: "Services", 
      type: "dropdown",
      items: [
        { name: "Educational Institutions", href: "/services/educational-institutions" },
        { name: "Startups & Organizations", href: "/services/startups-organizations" },
      ]
    },
    { name: "Events", href: "/events", type: "link" },
    { name: "Testimonials", href: "/testimonials", type: "link" },
    { name: "Pricing", href: "/pricing", type: "link" },
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
          backgroundColor: "rgba(45, 65, 155, 0.98)",
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
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-2 group shrink-0 relative z-10">
          <motion.div 
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="bg-accent-gradient p-2 rounded-lg shadow-lg"
          >
            <GraduationCap className="w-6 h-6 text-white" />
          </motion.div>
          <span className="font-headline font-bold text-xl tracking-tight text-white hidden sm:inline-block">
            LetsCatchUp
          </span>
        </Link>

        {/* Center Group: Navigation Items */}
        <div className="hidden lg:flex items-center absolute left-1/2 -translate-x-1/2 h-full py-2">
          <div className="flex items-center gap-6">
            {navItems.map((item) => {
              if (item.type === "dropdown") {
                const isActive = item.items?.some(sub => pathname === sub.href);
                return (
                  <DropdownMenu key={item.name}>
                    <DropdownMenuTrigger asChild>
                      <motion.div
                        className={cn(
                          "inline-flex items-center gap-1 text-[13px] font-bold transition-all cursor-pointer whitespace-nowrap px-3 py-1.5 rounded-full outline-none",
                          isActive ? "text-accent bg-white/10" : "text-gray-300 hover:text-white"
                        )}
                        whileHover={{ scale: 1.1 }}
                      >
                        {item.name}
                        <ChevronDown className="w-3 h-3 opacity-50" />
                      </motion.div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="glass border-white/10 rounded-2xl p-2 min-w-[200px] mt-2">
                      {item.items?.map((sub) => (
                        <DropdownMenuItem key={sub.name} asChild className="rounded-xl focus:bg-white/10 focus:text-accent">
                          <Link href={sub.href} className="w-full px-4 py-2 text-sm font-semibold">
                            {sub.name}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                );
              }

              const isActive = pathname === item.href;
              return (
                <div key={item.name} className="relative flex items-center h-full">
                  <Link href={item.href!} className="flex items-center h-full">
                    <motion.span
                      className={cn(
                        "inline-block text-[13px] font-bold transition-all cursor-pointer whitespace-nowrap px-3 py-1.5 rounded-full",
                        isActive 
                          ? "text-accent bg-white/10 shadow-[0_0_15px_rgba(79,209,197,0.2)]" 
                          : "text-gray-300 hover:text-white"
                      )}
                      whileHover={{ 
                        scale: 1.25,
                        marginInline: "0.75rem",
                        color: "hsl(var(--accent))",
                      }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      {item.name}
                    </motion.span>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Group: Action Buttons */}
        <div className="hidden lg:flex items-center gap-4 relative z-10">
          <Link href="/dashboard">
            <Button variant="ghost" className="text-sm font-bold text-gray-300 hover:text-white hover:bg-white/10 rounded-full px-5 transition-all">
              Log in
            </Button>
          </Link>
          <Link href="/contact">
            <Button className="bg-accent-gradient hover:opacity-90 text-white text-sm font-extrabold rounded-full px-8 shadow-lg border-none h-11 transition-all active:scale-95">
              Contact Us
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden p-2 text-gray-300 hover:bg-white/5 rounded-full transition-colors relative z-10"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 mt-4 bg-[#0b0f2f] border border-white/10 rounded-[2.5rem] lg:hidden overflow-hidden mx-4 shadow-2xl z-50"
          >
            <div className="flex flex-col p-8 gap-4">
              <Accordion type="single" collapsible className="w-full">
                {navItems.map((item, idx) => {
                  if (item.type === "dropdown") {
                    return (
                      <AccordionItem key={item.name} value={item.name} className="border-none">
                        <AccordionTrigger className="text-lg font-bold py-2 text-gray-300 hover:text-white hover:no-underline">
                          {item.name}
                        </AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-2 pl-4 pt-2">
                          {item.items?.map((sub) => (
                            <Link
                              key={sub.name}
                              href={sub.href}
                              className="text-gray-400 font-semibold py-2"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </AccordionContent>
                      </AccordionItem>
                    );
                  }

                  const isActive = pathname === item.href;
                  return (
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      key={item.name}
                      className="py-2"
                    >
                      <Link
                        href={item.href!}
                        className={cn(
                          "text-lg font-bold flex items-center justify-between group",
                          isActive ? "text-accent" : "text-gray-300 hover:text-white"
                        )}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.name}
                        {isActive && <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />}
                      </Link>
                    </motion.div>
                  );
                })}
              </Accordion>
              
              <div className="flex flex-col gap-4 pt-6 border-t border-white/10">
                <Link href="/dashboard" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button variant="outline" className="w-full glass border-white/10 rounded-full h-14 text-lg font-bold">
                    Log in
                  </Button>
                </Link>
                <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button className="w-full bg-accent-gradient border-none rounded-full h-14 text-lg font-extrabold shadow-lg">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
