
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { 
  Home, 
  Info, 
  Layers, 
  CreditCard, 
  MessageCircle, 
  ChevronDown,
  User
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/", icon: Home, type: "link" },
    { name: "About", href: "/about", icon: Info, type: "link" },
    { 
      name: "Services", 
      icon: Layers,
      href: "/services",
      type: "dropdown",
      items: [
        { name: "Institutions", href: "/services/educational-institutions" },
        { name: "Startups", href: "/services/startups-organizations" },
      ]
    },
    { name: "Pricing", href: "/pricing", icon: CreditCard, type: "link" },
    { name: "Contact", href: "/contact", icon: MessageCircle, type: "link" },
  ];

  return (
    <>
      {/* Top Navbar - Desktop & Mobile Logo/Sign-in */}
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
        transition={{ 
          duration: 0.8, 
          ease: [0.16, 1, 0.3, 1] 
        }}
        className="fixed top-0 z-50 px-6 border-b transition-colors duration-500"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between relative h-full">
          <Link href="/" className="flex items-center gap-2 shrink-0 relative z-10">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="bg-accent-gradient w-10 h-10 sm:w-12 sm:h-12 rounded-xl shadow-lg flex items-center justify-center overflow-hidden"
            >
              <span className="text-white font-black text-sm sm:text-base leading-none tracking-tighter">LC</span>
            </motion.div>
            <span className="font-headline font-bold text-lg sm:text-xl tracking-tight text-white block">
              Let's Catch Up
            </span>
          </Link>

          {/* Floating Center Group - Hidden on Mobile */}
          <div className="hidden lg:flex items-center absolute left-1/2 -translate-x-1/2 h-full">
            <div className="flex items-center gap-1">
              {navItems.slice(0, 4).map((item) => {
                const isActive = item.type === "dropdown" 
                  ? item.items?.some(sub => pathname === sub.href)
                  : pathname === item.href;

                return (
                  <div 
                    key={item.name} 
                    className="relative group py-4"
                    onMouseEnter={() => setHoveredItem(item.name)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    <div className="flex items-center">
                      {item.type === "link" ? (
                        <Link href={item.href!}>
                          <motion.span
                            className={cn(
                              "inline-block text-[13px] font-bold transition-all cursor-pointer whitespace-nowrap px-4 py-2 rounded-full relative",
                              isActive ? "text-[#2dd4bf]" : "text-gray-300 hover:text-[#2dd4bf]"
                            )}
                            whileHover={{ scale: 1.15 }}
                          >
                            {item.name}
                            {isActive && (
                              <motion.div 
                                layoutId="activeNav"
                                className="absolute inset-0 bg-white/10 rounded-full -z-10"
                              />
                            )}
                          </motion.span>
                        </Link>
                      ) : (
                        <div
                          className={cn(
                            "inline-flex items-center gap-1 text-[13px] font-bold transition-all cursor-pointer whitespace-nowrap px-4 py-2 rounded-full relative",
                            isActive ? "text-[#2dd4bf]" : "text-gray-300 hover:text-[#2dd4bf]"
                          )}
                        >
                          {item.name}
                          <ChevronDown className={cn("w-3 h-3 opacity-50 transition-transform duration-300", hoveredItem === item.name && "rotate-180")} />
                          {isActive && (
                            <motion.div 
                              layoutId="activeNav"
                              className="absolute inset-0 bg-white/10 rounded-full -z-10"
                            />
                          )}
                        </div>
                      )}
                    </div>

                    {item.type === "dropdown" && (
                      <AnimatePresence>
                        {hoveredItem === item.name && (
                          <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            className="absolute top-full left-1/2 -translate-x-1/2 mt-0 pt-2 w-max min-w-[220px] z-50"
                          >
                            <div className="bg-[#141d4b]/95 backdrop-blur-xl border border-white/10 rounded-[24px] p-2 shadow-2xl">
                              {item.items?.map((sub) => (
                                <Link
                                  key={sub.name}
                                  href={sub.href}
                                  className={cn(
                                    "block px-5 py-3 rounded-xl text-sm font-bold transition-all",
                                    pathname === sub.href 
                                      ? "text-[#2dd4bf] bg-white/10" 
                                      : "text-gray-300 hover:bg-white/5 hover:text-[#2dd4bf]"
                                  )}
                                >
                                  {sub.name}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex items-center gap-4 relative z-10">
            <Link href="https://app.letscatchup-kcs.com/">
              <Button variant="ghost" className="text-gray-300 hover:text-[#2dd4bf] hover:bg-white/5 text-xs sm:text-sm font-bold rounded-full px-4 sm:px-6 h-10 sm:h-11 transition-all">
                <User className="w-4 h-4 lg:hidden" />
                <span className="hidden lg:inline">Sign In</span>
              </Button>
            </Link>
            <Link href="/contact" className="hidden lg:block">
              <Button className="bg-accent-gradient hover:opacity-90 text-white text-sm font-extrabold rounded-full px-8 shadow-lg border-none h-11 transition-all active:scale-95">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </motion.nav>

      {/* Bottom Navbar - Mobile Only */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 px-4 pb-4">
        <div className="glass h-20 rounded-[2rem] flex items-center justify-around px-2 shadow-[0_-10px_40px_rgba(0,0,0,0.5)] border-white/10">
          {navItems.map((item) => {
            const isActive = pathname === item.href || (item.type === "dropdown" && item.items?.some(sub => pathname === sub.href));
            
            return (
              <Link 
                key={item.name} 
                href={item.href || "/"} 
                className="flex flex-col items-center justify-center flex-1 h-full gap-1 group"
              >
                <div className={cn(
                  "p-2 rounded-2xl transition-all duration-300",
                  isActive ? "bg-accent-gradient text-white shadow-lg" : "text-gray-400 group-hover:text-white"
                )}>
                  <item.icon className="w-6 h-6" />
                </div>
                <span className={cn(
                  "text-[10px] font-black uppercase tracking-widest transition-colors duration-300",
                  isActive ? "text-accent" : "text-gray-500"
                )}>
                  {item.name}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
