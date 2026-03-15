
"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useTransform, useSpring, useMotionValue } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, Bell, Star, Heart, LayoutGrid, Smartphone, CheckCircle, BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";

export function AppShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const springConfig = { stiffness: 100, damping: 30 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), springConfig);
  
  // Parallax for floating elements
  const driftX = useSpring(useTransform(mouseX, [-0.5, 0.5], [20, -20]), springConfig);
  const driftY = useSpring(useTransform(mouseY, [-0.5, 0.5], [20, -20]), springConfig);

  const floatingElements = [
    { icon: MessageSquare, color: "text-accent", delay: 0, x: -280, y: -120, label: "Hi Meera, ready to learn?", type: "bubble" },
    { icon: BookOpen, color: "text-primary", delay: 1, x: 260, y: -180, label: "Advanced Web Arch... 85%", type: "card" },
    { icon: Bell, color: "text-rose-400", delay: 2, x: 240, y: 150, label: "Live Event in 10m", type: "notif" },
    { icon: Heart, color: "text-amber-400", delay: 1.5, x: -250, y: 200, label: "Reaction Received", type: "bubble" },
  ];

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="py-24 md:py-40 px-6 relative overflow-hidden bg-transparent"
    >
      {/* Background Ambient Glows & Particles */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-primary/5 rounded-full blur-[160px] -z-10" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] -z-10" />
      
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center space-y-12 md:space-y-16">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6 max-w-4xl"
        >
          <div className="flex flex-col items-center gap-4">
            <motion.span 
              initial={{ opacity: 0, letterSpacing: "0.1em" }}
              whileInView={{ opacity: 1, letterSpacing: "0.3em" }}
              className="text-[10px] md:text-xs font-black uppercase text-accent tracking-[0.3em] drop-shadow-[0_0_10px_rgba(45,212,191,0.5)]"
            >
              Mobile Experience
            </motion.span>
            <h2 className="text-4xl md:text-7xl font-headline font-bold leading-tight tracking-tight text-white">
              Take Let’s Catch Up <span className="text-gradient">Anywhere</span>
            </h2>
          </div>
          <p className="text-sm md:text-xl text-gray-400 leading-relaxed font-medium max-w-2xl mx-auto">
            Stay connected to your communities, conversations, and learning spaces — wherever you go.
          </p>
        </motion.div>

        {/* Download Buttons Area */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col items-center gap-8"
        >
          <div className="flex flex-col items-center gap-4">
             <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 flex items-center gap-2">
                <Smartphone className="w-3 h-3 text-accent" />
                Available on Android & iOS
             </span>
             <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                <Link 
                  href="https://play.google.com/store/apps/details?id=com.kcs.letscatchup&pcampaignid=web_share" 
                  target="_blank"
                  className="group relative transition-all duration-300 hover:scale-105 hover:-translate-y-1"
                >
                  <div className="absolute -inset-1 bg-accent/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                  <Image 
                    src="/googleplay.png" 
                    alt="Google Play Store" 
                    width={140} 
                    height={42} 
                    className="relative object-contain" 
                  />
                </Link>
                <Link 
                  href="https://apps.apple.com/in/app/lets-catch-up-kcs/id6749822557" 
                  target="_blank"
                  className="group relative transition-all duration-300 hover:scale-105 hover:-translate-y-1"
                >
                  <div className="absolute -inset-1 bg-primary/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                  <Image 
                    src="/appstore.jpg" 
                    alt="Apple App Store" 
                    width={140} 
                    height={42} 
                    className="relative object-contain rounded-lg shadow-xl" 
                  />
                </Link>
             </div>
          </div>
        </motion.div>

        {/* Visual Showcase */}
        <div className="relative w-full max-w-5xl h-[450px] md:h-[800px] mt-12 flex items-center justify-center">
          
          {/* Ambient Glow behind phones */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-radial-gradient from-accent/10 via-primary/5 to-transparent blur-[120px] -z-10 pointer-events-none" />

          {/* Floating drifting UI elements */}
          {floatingElements.map((el, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              style={{ x: driftX, y: driftY }}
              animate={{ 
                y: [el.y, el.y - 20, el.y],
                x: [el.x, el.x + 10, el.x]
              }}
              transition={{ 
                delay: 0.5 + el.delay, 
                duration: 6 + i, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="absolute hidden lg:flex items-center gap-3 glass p-3.5 rounded-2xl border-white/10 shadow-2xl z-30 group"
            >
              <div className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 shadow-inner group-hover:border-accent/40 transition-colors">
                <el.icon className={cn("w-4 h-4", el.color)} />
              </div>
              <div className="flex flex-col">
                 <span className="text-[10px] font-black uppercase tracking-widest text-gray-300">{el.label}</span>
                 <span className="text-[8px] text-gray-500 font-bold uppercase tracking-tight">Just Now</span>
              </div>
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-accent rounded-full animate-ping opacity-40" />
            </motion.div>
          ))}

          {/* Phones Cluster with Parallax 3D tilt */}
          <motion.div 
            style={{ rotateX, rotateY }}
            className="relative flex items-center justify-center gap-6 md:gap-20 perspective-1000"
          >
            {/* Android Phone */}
            <motion.div
              animate={{ y: [0, -25, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-[160px] h-[330px] md:w-[290px] md:h-[600px] group"
            >
              <div className="absolute -inset-10 bg-accent/15 blur-[100px] rounded-full opacity-0 group-hover:opacity-60 transition-opacity duration-1000" />
              <div className="relative w-full h-full bg-[#0b0f2f] rounded-[2.5rem] md:rounded-[4rem] border-[8px] md:border-[12px] border-[#1e294b] shadow-[0_60px_100px_rgba(0,0,0,0.9)] overflow-hidden transition-all duration-500 group-hover:border-accent/40 group-hover:shadow-[0_60px_120px_rgba(45,212,191,0.2)]">
                <div className="relative w-full h-full bg-gradient-to-b from-[#1e294b] via-[#0b0f2f] to-[#0b0f2f] p-4 md:p-8 flex flex-col gap-6">
                   <div className="flex items-center justify-between">
                      <LayoutGrid className="w-5 h-5 text-accent opacity-50" />
                      <div className="w-8 h-8 rounded-full bg-white/5" />
                   </div>
                   <div className="space-y-4">
                      <div className="w-full h-20 md:h-32 rounded-2xl bg-accent-gradient opacity-10 border border-white/5" />
                      <div className="space-y-2">
                         <div className="w-3/4 h-3 rounded-full bg-white/10" />
                         <div className="w-full h-2 rounded-full bg-white/5" />
                         <div className="w-1/2 h-2 rounded-full bg-white/5" />
                      </div>
                   </div>
                   <div className="mt-auto flex justify-around p-2 bg-white/5 rounded-2xl border border-white/5">
                      <Smartphone className="w-4 h-4 text-accent" />
                      <Bell className="w-4 h-4 text-gray-500" />
                      <MessageSquare className="w-4 h-4 text-gray-500" />
                   </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none" />
              </div>
              <div className="mt-8 text-center space-y-1 opacity-60 group-hover:opacity-100 transition-opacity">
                <p className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-accent">Android Experience</p>
                <p className="text-[8px] md:text-[10px] font-medium text-gray-500 uppercase tracking-widest">Optimized for Google Play</p>
              </div>
            </motion.div>

            {/* iPhone */}
            <motion.div
              animate={{ y: [-25, 0, -25] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="relative w-[160px] h-[330px] md:w-[290px] md:h-[600px] group"
            >
              <div className="absolute -inset-10 bg-primary/15 blur-[100px] rounded-full opacity-0 group-hover:opacity-60 transition-opacity duration-1000" />
              <div className="relative w-full h-full bg-[#0b0f2f] rounded-[2.5rem] md:rounded-[4rem] border-[8px] md:border-[12px] border-[#1e294b] shadow-[0_60px_100px_rgba(0,0,0,0.9)] overflow-hidden transition-all duration-500 group-hover:border-primary/40 group-hover:shadow-[0_60px_120px_rgba(99,102,241,0.2)]">
                <div className="relative w-full h-full bg-gradient-to-b from-[#141d3d] via-[#0b0f2f] to-[#0b0f2f] p-4 md:p-8 flex flex-col gap-6">
                   <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center border border-white/5">
                         <Star className="w-4 h-4 text-primary" />
                      </div>
                      <div className="flex-1 space-y-1">
                         <div className="w-1/2 h-2 rounded-full bg-white/20" />
                         <div className="w-1/3 h-1.5 rounded-full bg-white/10" />
                      </div>
                   </div>
                   <div className="flex-1 rounded-2xl bg-white/5 border border-white/5 p-4 flex flex-col gap-4">
                      <div className="flex items-center gap-2">
                         <CheckCircle className="w-3 h-3 text-emerald-400" />
                         <div className="w-2/3 h-2 rounded-full bg-white/10" />
                      </div>
                      <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                         <div className="w-3/4 h-full bg-primary" />
                      </div>
                      <div className="flex-1 flex flex-col gap-2 pt-2">
                         <div className="w-full h-12 rounded-xl bg-white/5" />
                         <div className="w-full h-12 rounded-xl bg-white/5" />
                      </div>
                   </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none" />
              </div>
              <div className="mt-8 text-center space-y-1 opacity-60 group-hover:opacity-100 transition-opacity">
                <p className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-primary">iOS Experience</p>
                <p className="text-[8px] md:text-[10px] font-medium text-gray-500 uppercase tracking-widest">Designed for iPhone</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
