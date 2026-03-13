
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { 
  Home, 
  Info, 
  CreditCard, 
  Menu,
  LogIn,
  Phone,
  LayoutGrid,
  HelpCircle,
} from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

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

  // Intersection Observer for ScrollSpy
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
    { name: "FAQ", href: "/faq", icon: HelpCircle },
  ];

  const getIsActive = (item: any) => {
    if (!mounted || !pathname) return false;

    if (item.name === "FAQ") return pathname === "/faq";

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
          paddingTop: "2rem",
          paddingBottom: "1rem",
          borderBottomColor: "rgba(255, 255, 255, 0)",
        },
        scrolled: {
          y: 12,
          width: "calc(100% - 3rem)",
          left: "1.5rem",
          backgroundColor: "rgba(20, 29, 75, 0.95)",
          backdropFilter: "blur(24px)",
          paddingTop: "0.6rem",
          paddingBottom: "0.6rem",
          borderBottomColor: "rgba(255, 255, 255, 0.1)",
          borderRadius: "2.5rem",
          boxShadow: "0 20px 40px -10px rgba(0, 0, 0, 0.4)",
        },
      }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 z-50 px-6 border-b transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between relative h-full">
        {/* Left Side: Brand */}
        <div className="flex items-center gap-3 shrink-0 relative z-10">
          <Link href="/#home" className="flex items-center gap-3">
            <motion.div whileHover={{ scale: 1.05 }} className="bg-accent-gradient w-10 h-10 md:w-12 md:h-12 rounded-xl shadow-lg flex items-center justify-center overflow-hidden">
              <span className="text-white font-black text-lg leading-none tracking-tighter">LC</span>
            </motion.div>
            <span className="font-headline font-bold text-lg md:text-xl tracking-tight text-white block">Let's Catch Up</span>
          </Link>
        </div>

        {/* Desktop Navigation (Center) */}
        <div className="hidden lg:flex items-center absolute left-1/2 -translate-x-1/2 h-full">
          <div className="flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = getIsActive(item);
              return (
                <div key={item.name} className="relative group">
                  <Link href={item.href}>
                    <motion.span className={cn(
                      "inline-block text-sm font-bold transition-all cursor-pointer whitespace-nowrap px-5 py-2.5 rounded-full relative",
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

        {/* Right Section: Mobile Hamburger + Desktop Actions */}
        <div className="flex items-center gap-4 relative z-10">
          {/* Desktop Only Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Link href="https://app.letscatchup-kcs.com/">
              <Button variant="ghost" className="text-white hover:text-accent hover:bg-white/5 border border-white/10 hover:border-accent/40 text-sm font-bold rounded-full px-6 transition-all h-12">
                Sign In
              </Button>
            </Link>
            <Link href="/#contact">
              <Button className="bg-accent-gradient hover:opacity-90 text-white text-sm font-black rounded-full px-10 shadow-xl border-none h-12 transition-all active:scale-95">
                Get in touch
              </Button>
            </Link>
          </div>

          {/* Mobile Hamburger (Right Side) */}
          <div className="lg:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="text-white hover:bg-white/10 rounded-xl w-10 h-10 md:w-12 md:h-12 border border-white/10 transition-all hover:shadow-[0_0_20px_hsla(var(--accent)/0.3)] hover:border-accent/50 group"
                >
                  <Menu className="w-5 h-5 md:w-6 h-6 transition-all duration-300 group-hover:scale-110 group-hover:text-accent group-hover:drop-shadow-[0_0_10px_hsla(var(--accent)/1)]" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="bg-[#0b0f2f]/95 border-white/10 backdrop-blur-2xl w-[300px] sm:w-[400px] p-0">
                <div className="flex flex-col h-full p-8">
                  <SheetHeader className="text-left mb-8">
                    <SheetTitle className="text-white font-headline font-bold text-2xl flex items-center gap-3">
                      <div className="bg-accent-gradient w-10 h-10 rounded-xl flex items-center justify-center">
                        <span className="text-white font-black text-sm">LC</span>
                      </div>
                      Menu
                    </SheetTitle>
                  </SheetHeader>
                  
                  <nav className="flex flex-col gap-2">
                    {navItems.map((item) => {
                      const isActive = getIsActive(item);
                      return (
                        <Link 
                          key={item.name} 
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                        >
                          <div className={cn(
                            "flex items-center gap-4 px-6 py-4 rounded-2xl transition-all duration-300",
                            isActive ? "bg-accent-gradient text-white shadow-lg" : "text-gray-400 hover:text-white hover:bg-white/5"
                          )}>
                            <item.icon className="w-5 h-5" />
                            <span className="font-bold text-base">{item.name}</span>
                          </div>
                        </Link>
                      );
                    })}
                  </nav>

                  <div className="mt-auto pt-8 border-t border-white/10 flex flex-col gap-4">
                    <Link 
                      href="https://app.letscatchup-kcs.com/"
                      onClick={() => setIsOpen(false)}
                      className="w-full"
                    >
                      <Button 
                        className="w-full h-14 rounded-2xl bg-accent-gradient text-white font-black uppercase tracking-widest text-xs gap-3 shadow-[0_10px_30px_rgba(45,212,191,0.3)] hover:shadow-[0_15px_40px_rgba(45,212,191,0.5)] transition-all active:scale-95 border-none flex items-center justify-center group/signin"
                      >
                        <LogIn className="w-5 h-5 transition-transform group-hover/signin:-translate-x-1" />
                        Sign In
                      </Button>
                    </Link>
                    
                    <Link 
                      href="/#contact"
                      onClick={() => setIsOpen(false)}
                      className="w-full"
                    >
                      <Button variant="outline" className="w-full h-14 rounded-2xl border-white/10 bg-white/5 text-white font-bold gap-3 hover:bg-white/10 hover:text-accent hover:border-accent/40 transition-all">
                        <Phone className="w-5 h-5 text-accent" />
                        Get in touch
                      </Button>
                    </Link>
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
