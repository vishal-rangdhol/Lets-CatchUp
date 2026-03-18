
"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useTransform, useSpring, useMotionValue } from "framer-motion";
import { MessageSquare, Bell, Heart, Smartphone, BookOpen, Layers } from "lucide-react";
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
  const driftX = useSpring(useTransform(mouseX, [-0.5, 0.5], [30, -30]), springConfig);
  const driftY = useSpring(useTransform(mouseY, [-0.5, 0.5], [30, -30]), springConfig);

  const floatingElements = [
    { icon: MessageSquare, color: "text-accent", delay: 0, x: -280, y: -120, label: "Hi Meera, ready to learn?" },
    { icon: BookOpen, color: "text-primary", delay: 1, x: 260, y: -180, label: "Advanced Web Arch... 85%" },
    { icon: Bell, color: "text-rose-400", delay: 2, x: 240, y: 150, label: "Live Event in 10m" },
    { icon: Heart, color: "text-amber-400", delay: 1.5, x: -250, y: 200, label: "Reaction Received" },
    { icon: Layers, color: "text-emerald-400", delay: 0.5, x: 50, y: -250, label: "New Resource Shared" },
  ];

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="py-24 md:py-40 px-6 relative overflow-hidden bg-transparent"
    >
      {/* Background Ambient Glows */}
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
                    style={{ height: 'auto' }}
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
                    style={{ height: 'auto' }}
                    className="relative object-contain rounded-lg shadow-xl" 
                  />
                </Link>
             </div>
          </div>
        </motion.div>

        {/* Visual Showcase - Refined with clean high-res mockup and floating elements */}
        <div className="relative w-full max-w-5xl h-[400px] md:h-[600px] mt-12 flex items-center justify-center">
          
          {/* Ambient Glow behind the scene */}
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
              className="absolute hidden lg:flex items-center gap-3 glass p-4 rounded-2xl border-white/10 shadow-2xl z-30 group"
            >
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 shadow-inner group-hover:border-accent/40 transition-colors">
                <el.icon className={cn("w-5 h-5", el.color)} />
              </div>
              <div className="flex flex-col text-left">
                 <span className="text-[10px] font-black uppercase tracking-widest text-gray-300">{el.label}</span>
                 <span className="text-[8px] text-gray-500 font-bold uppercase tracking-tight">Real-time update</span>
              </div>
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-accent rounded-full animate-ping opacity-40" />
            </motion.div>
          ))}

          {/* Central High-Fidelity App Mockup Visual */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative w-full max-w-2xl aspect-[16/9] flex items-center justify-center"
          >
            <div className="absolute inset-0 bg-accent-gradient opacity-10 blur-[100px] rounded-full animate-pulse" />
            
            <motion.div
              animate={{ 
                y: [0, -20, 0],
                rotate: [0, 1, 0]
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 w-[240px] md:w-[320px] h-[480px] md:h-[640px] rounded-[3rem] md:rounded-[4rem] border-[10px] md:border-[12px] border-[#1e294b] bg-[#0b0f2f] shadow-[0_60px_120px_rgba(0,0,0,0.8)] overflow-hidden group hover:border-accent/30 transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-[#1e294b] via-[#0b0f2f] to-[#0b0f2f] p-6 md:p-8 flex flex-col gap-8">
                 <div className="flex items-center justify-between">
                    <Smartphone className="w-5 h-5 text-accent opacity-50" />
                    <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10" />
                 </div>
                 
                 <div className="space-y-6 flex-1">
                    <div className="w-full h-32 md:h-40 rounded-3xl bg-accent-gradient opacity-20 border border-white/10 shadow-inner" />
                    <div className="space-y-3">
                       <div className="w-3/4 h-3 rounded-full bg-white/10" />
                       <div className="w-full h-2 rounded-full bg-white/5" />
                       <div className="w-1/2 h-2 rounded-full bg-white/5" />
                    </div>
                    <div className="grid grid-cols-2 gap-3 pt-4">
                       <div className="h-20 rounded-2xl bg-white/5 border border-white/10" />
                       <div className="h-20 rounded-2xl bg-white/5 border border-white/10" />
                    </div>
                 </div>

                 <div className="mt-auto flex justify-around p-4 bg-white/5 rounded-3xl border border-white/10 shadow-lg">
                    <Smartphone className="w-5 h-5 text-accent" />
                    <Bell className="w-5 h-5 text-gray-500" />
                    <MessageSquare className="w-5 h-5 text-gray-500" />
                 </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-transparent pointer-events-none" />
            </motion.div>

            {/* Subtitles */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
               <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-accent">Polished Mobile Interface</span>
               <span className="text-[8px] md:text-[10px] text-gray-500 font-bold uppercase tracking-widest">Available on Android & iOS</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
