"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { 
  Home, 
  Info, 
  CreditCard, 
  Menu as MenuIcon,
  LogIn,
  Phone,
  LayoutGrid,
} from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!mounted || pathname !== "/") return;

    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -40% 0px",
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    const sections = ["home", "ecosystem", "about", "pricing", "contact"];
    sections.forEach(id => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [mounted, pathname]);

  const navItems = [
    { name: "Home", href: pathname === "/" ? "#home" : "/#home", icon: Home },
    { name: "Ecosystem", href: pathname === "/" ? "#ecosystem" : "/#ecosystem", icon: LayoutGrid },
    { name: "About Us", href: pathname === "/" ? "#about" : "/#about", icon: Info },
    { name: "Pricing", href: pathname === "/" ? "#pricing" : "/#pricing", icon: CreditCard },
  ];

  const getIsActive = (item: any) => {
    if (!mounted || !pathname) return false;
    if (pathname === "/") {
      if (item.name === "Home") return activeSection === "home";
      if (item.name === "Ecosystem") return activeSection === "ecosystem";
      if (item.name === "About Us") return activeSection === "about";
      if (item.name === "Pricing") return activeSection === "pricing";
    }
    return false;
  };

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
          paddingBottom: "1rem",
          borderBottomColor: "rgba(255, 255, 255, 0)",
        },
        scrolled: {
          y: 12,
          width: "calc(100% - 2rem)",
          left: "1rem",
          backgroundColor: "rgba(15, 21, 61, 0.95)",
          backdropFilter: "blur(24px)",
          paddingTop: "0.5rem",
          paddingBottom: "0.5rem",
          borderBottomColor: "rgba(255, 255, 255, 0.1)",
          borderRadius: "2rem",
          boxShadow: "0 20px 40px -10px rgba(0, 0, 0, 0.4)",
        },
      }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 z-50 px-4 md:px-6 border-b transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between relative h-full">
        <div className="flex items-center gap-2 shrink-0 relative z-10">
          <Link href="/#home" className="flex items-center gap-2 md:gap-3">
            <motion.div whileHover={{ scale: 1.05 }} className="relative w-8 h-8 md:w-10 md:h-10 overflow-hidden shadow-2xl">
              <Image 
                src="/favicon-v2.ico" 
                alt="Let's Catch Up Logo" 
                fill 
                className="object-contain"
                priority
              />
            </motion.div>
            <span className="font-headline font-bold text-base md:text-xl tracking-tight text-white block">Let's Catch Up</span>
          </Link>
        </div>

        <div className="hidden lg:flex items-center absolute left-1/2 -translate-x-1/2 h-full">
          <div className="flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = getIsActive(item);
              return (
                <div key={item.name} className="relative group">
                  <Link href={item.href}>
                    <motion.span className={cn(
                      "inline-block font-headline text-sm font-bold transition-all cursor-pointer whitespace-nowrap px-4 py-2 rounded-full relative",
                      isActive ? "text-accent bg-white/5" : "text-gray-300 hover:text-white"
                    )}>
                      {item.name}
                      {isActive && mounted && (
                        <motion.div 
                          layoutId="activeNav" 
                          className="absolute inset-0 bg-white/10 rounded-full -z-10" 
                          transition={{ type: "spring", stiffness: 380, damping: 30 }} 
                        />
                      )}
                    </motion.span>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex items-center gap-3 md:gap-4 relative z-10">
          <div className="hidden lg:flex items-center gap-4">
            <Link href="https://app.letscatchup-kcs.com/">
              <Button variant="ghost" className="font-headline text-white hover:text-accent hover:bg-white/5 border border-white/10 hover:border-accent/40 text-sm font-bold rounded-full px-6 transition-all h-10">
                Get started
              </Button>
            </Link>
            <Link href="/contact-us">
              <Button className="font-headline bg-accent-gradient hover:opacity-90 text-white text-sm font-bold rounded-full px-8 shadow-xl border-none h-10 transition-all active:scale-95">
                Get in touch
              </Button>
            </Link>
          </div>

          <div className="lg:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="text-white hover:bg-white/10 rounded-xl w-10 h-10 border border-white/10 transition-all"
                >
                  <MenuIcon className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="bg-[rgb(15,21,61)] border-white/10 backdrop-blur-2xl w-[85%] sm:w-[400px] p-0">
                <SheetHeader className="sr-only">
                  <SheetTitle>Navigation Menu</SheetTitle>
                  <SheetDescription>Main navigation for Let's Catch Up platform.</SheetDescription>
                </SheetHeader>
                
                <div className="flex flex-col h-full p-0 relative overflow-hidden bg-[rgb(15,21,61)]">
                  <div className="absolute top-[-100px] left-[-100px] w-64 h-64 bg-accent/10 rounded-full blur-[80px] pointer-events-none" />
                  <div className="absolute bottom-[-100px] right-[-100px] w-64 h-64 bg-primary/10 rounded-full blur-[80px] pointer-events-none" />

                  <div className="text-left mb-2 relative z-10 px-6 pt-8 pb-2">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="relative w-10 h-10 overflow-hidden shadow-xl">
                        <Image src="/favicon-v2.ico" alt="Logo" fill className="object-contain" />
                      </div>
                      <span className="font-headline text-white font-bold text-xl tracking-tight">Let's Catch Up</span>
                    </div>
                    <Separator className="bg-white/10 mb-4" />
                  </div>
                  
                  <nav className="flex flex-col gap-2 relative z-10 flex-1 px-6">
                    {navItems.map((item, idx) => {
                      const isActive = getIsActive(item);
                      return (
                        <Link 
                          key={item.name} 
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                        >
                          <motion.div 
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className={cn(
                              "flex items-center gap-4 px-5 py-3.5 rounded-2xl transition-all duration-300 group relative overflow-hidden",
                              isActive 
                                ? "bg-accent-gradient text-white shadow-xl shadow-accent/10" 
                                : "text-gray-100 hover:text-white hover:bg-white/10 border border-transparent hover:border-white/20"
                            )}
                          >
                            <item.icon className={cn(
                              "w-5 h-5 transition-transform duration-300 group-hover:scale-110",
                              isActive ? "text-white" : "text-white/80"
                            )} />
                            <span className="font-headline font-bold text-base tracking-tight">{item.name}</span>
                          </motion.div>
                        </Link>
                      );
                    })}
                  </nav>

                  <div className="mt-auto p-6 border-t border-white/20 flex flex-col gap-4 relative z-10 bg-black/20">
                    <div className="flex flex-col gap-3">
                      <Link href="https://app.letscatchup-kcs.com/" onClick={() => setIsOpen(false)} className="w-full">
                        <Button className="font-headline w-full h-12 rounded-2xl bg-accent-gradient text-white font-bold uppercase tracking-widest text-[10px] gap-3 shadow-xl border-none">
                          <LogIn className="w-4 h-4" /> Get started
                        </Button>
                      </Link>
                      <Link href="/contact-us" onClick={() => setIsOpen(false)} className="w-full">
                        <Button variant="outline" className="font-headline w-full h-12 rounded-2xl border-white/20 bg-white/10 text-white font-bold gap-3">
                          <Phone className="w-4 h-4 text-accent" /> Get in touch
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}