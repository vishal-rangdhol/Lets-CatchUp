
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Smartphone, 
  Bell, 
  TrendingUp, 
  ClipboardCheck, 
  MessageCircle,
  Shield
} from "lucide-react";

export function AppShowcase() {
  const floatingFeatures = [
    {
      title: "Smart Attendance",
      icon: ClipboardCheck,
      pos: "top-4 -right-4 md:top-12 md:-right-8",
      delay: 0.2,
      duration: 5,
      color: "text-accent"
    },
    {
      title: "Real-time Chat",
      icon: MessageCircle,
      pos: "top-[25%] -left-4 md:top-[28%] md:-left-16",
      delay: 0.4,
      duration: 6,
      color: "text-cyan-400"
    },
    {
      title: "Private Spaces",
      icon: Shield,
      pos: "top-[45%] -right-6 md:top-[42%] md:-right-14",
      delay: 0.6,
      duration: 5.5,
      color: "text-indigo-400"
    },
    {
      title: "Instant Alerts",
      icon: Bell,
      pos: "top-[65%] -left-6 md:top-[58%] md:-left-10",
      delay: 0.8,
      duration: 4.8,
      color: "text-primary"
    },
    {
      title: "Progress Sync",
      icon: TrendingUp,
      pos: "bottom-4 -right-4 md:bottom-[15%] md:-right-12",
      delay: 1.0,
      duration: 6.2,
      color: "text-emerald-400"
    }
  ];

  return (
    <section 
      className="py-24 md:py-32 px-6 relative overflow-hidden bg-transparent"
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[400px] bg-primary/5 rounded-full blur-[160px] -z-10" />
      
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center space-y-16 md:space-y-24">
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
              whileInView={{ opacity: 1, letterSpacing: "0.2em" }}
              className="font-headline text-xs font-bold uppercase text-accent tracking-[0.2em] drop-shadow-[0_0_10px_rgba(45,212,191,0.5)]"
            >
              Mobile Experience
            </motion.span>
            <h2 className="text-4xl md:text-7xl font-headline font-bold leading-tight tracking-tight text-white">
              Take Let’s Catch Up <span className="text-gradient">Anywhere</span>
            </h2>
          </div>
          <p className="text-sm md:text-xl text-gray-400 leading-relaxed font-medium max-w-2xl mx-auto font-body">
            Seamlessly stay connected to your communities, conversations, and learning — wherever you are.
          </p>
        </motion.div>

        {/* Mockup Section with Floating Elements */}
        <div className="relative w-full max-w-2xl mx-auto flex justify-center">
          <div className="relative w-full max-w-[280px] md:max-w-[320px]">
            {/* Floating Feature Cards - Constant across all screens */}
            <div className="absolute inset-0 pointer-events-none z-30">
              {floatingFeatures.map((f, i) => {
                const Icon = f.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    animate={{
                      y: [0, -12, 0],
                    }}
                    transition={{
                      opacity: { duration: 0.8, delay: f.delay },
                      scale: { duration: 0.8, delay: f.delay },
                      y: {
                        duration: f.duration,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: f.delay,
                      }
                    }}
                    viewport={{ once: true }}
                    className={`absolute ${f.pos} glass-card p-2 md:p-3 flex items-center gap-2 md:gap-3 border-white/10 shadow-2xl backdrop-blur-md pointer-events-auto`}
                  >
                    <div className={`w-6 h-6 md:w-8 md:h-8 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 ${f.color}`}>
                      <Icon className="w-3 h-3 md:w-4 md:h-4" />
                    </div>
                    <span className="font-headline text-[8px] md:text-[10px] font-bold text-white whitespace-nowrap uppercase tracking-widest">{f.title}</span>
                  </motion.div>
                );
              })}
            </div>

            {/* High-Fidelity Mobile Mockup - Stationary */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="relative w-full aspect-[9/19] z-20"
            >
              {/* Ambient Glow behind phone */}
              <div className="absolute inset-0 bg-accent/20 blur-[60px] md:blur-[120px] rounded-full -z-10" />
              
              {/* Orbiting Ring Decoration */}
              <div className="absolute inset-[-40px] md:inset-[-60px] border border-white/5 rounded-full -z-10 animate-[spin_20s_linear_infinite] opacity-30" />
              <div className="absolute inset-[-80px] md:inset-[-100px] border border-white/5 rounded-full -z-10 animate-[spin_30s_linear_infinite_reverse] opacity-20" />
              
              <div className="relative w-full h-full">
                {/* The Phone Frame */}
                <div className="absolute inset-0 bg-slate-900 border-[6px] md:border-[8px] border-slate-800 rounded-[2rem] md:rounded-[2.5rem] shadow-[0_40px_100px_rgba(0,0,0,0.8)] overflow-hidden">
                  {/* Internal Bezel */}
                  <div className="absolute inset-0 border-[2px] border-white/5 rounded-[1.8rem] md:rounded-[2.1rem] pointer-events-none z-30" />
                  
                  {/* Dynamic Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 md:w-24 h-5 md:h-6 bg-slate-800 rounded-b-xl md:rounded-b-2xl z-40 flex items-center justify-center gap-1.5 md:gap-2">
                    <div className="w-6 md:w-8 h-1 bg-slate-700 rounded-full" />
                    <div className="w-1.5 md:w-2 h-1.5 md:h-2 bg-slate-700 rounded-full" />
                  </div>

                  {/* Screen Content */}
                  <div className="relative w-full h-full overflow-hidden flex items-center justify-center bg-[#0b0f2f]">
                    <Image 
                      src="/mobile-view.png" 
                      alt="Let's Catch Up Mobile App View"
                      fill
                      sizes="(max-width: 768px) 280px, 320px"
                      className="object-cover"
                      priority
                    />
                    {/* Screen Reflection */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none z-20" />
                  </div>
                </div>

                {/* Hardware Buttons */}
                <div className="absolute top-20 md:top-24 -left-1.5 md:-left-2 w-1 h-10 md:h-12 bg-slate-700 rounded-l-md border-r border-black/20" />
                <div className="absolute top-36 md:top-40 -left-1.5 md:-left-2 w-1 h-10 md:h-12 bg-slate-700 rounded-l-md border-r border-black/20" />
                <div className="absolute top-28 md:top-32 -right-1.5 md:-right-2 w-1 h-14 md:h-16 bg-slate-700 rounded-r-md border-l border-black/20" />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Action Area */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="flex flex-col items-center gap-10 md:gap-12 w-full pt-8"
        >
          {/* Download Buttons */}
          <div className="flex flex-col items-center gap-6">
             <span className="font-headline text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 flex items-center gap-2">
                <Smartphone className="w-4 h-4 text-accent" />
                Available on Android & iOS
             </span>
             <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                <Link 
                  href="https://play.google.com/store/apps/details?id=com.kcs.letscatchup&pcampaignid=web_share" 
                  target="_blank"
                  className="group relative transition-all duration-300 hover:scale-105"
                >
                  <div className="absolute -inset-1 bg-accent/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                  <Image 
                    src="/googleplay.png" 
                    alt="Google Play Store" 
                    width={130} 
                    height={38} 
                    style={{ height: 'auto' }}
                    className="relative object-contain md:w-[140px]" 
                  />
                </Link>
                <Link 
                  href="https://apps.apple.com/in/app/lets-catch-up-kcs/id6749822557" 
                  target="_blank"
                  className="group relative transition-all duration-300 hover:scale-105"
                >
                  <div className="absolute -inset-1 bg-primary/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative overflow-hidden rounded-lg shadow-xl border border-white/5">
                    <Image 
                      src="/appstore.jpg" 
                      alt="Apple App Store" 
                      width={130} 
                      height={38} 
                      style={{ height: 'auto' }}
                      className="object-contain md:w-[140px]" 
                    />
                  </div>
                </Link>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
