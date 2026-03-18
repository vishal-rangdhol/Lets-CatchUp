"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Smartphone } from "lucide-react";

export function AppShowcase() {
  return (
    <section 
      className="py-24 md:py-32 px-6 relative overflow-hidden bg-transparent"
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[400px] bg-primary/5 rounded-full blur-[160px] -z-10" />
      
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center space-y-12 md:space-y-20">
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

        {/* High-Fidelity Mobile Mockup Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="relative w-full max-w-[250px] md:max-w-[300px] aspect-[9/19] mx-auto z-20"
        >
          {/* Ambient Glow behind phone */}
          <div className="absolute inset-0 bg-accent/20 blur-[80px] md:blur-[120px] rounded-full -z-10" />
          
          <motion.div
            animate={{ 
              y: [0, -15, 0],
            }}
            transition={{ 
              duration: 6, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="relative w-full h-full"
          >
            {/* The Phone Frame */}
            <div className="absolute inset-0 bg-slate-900 border-[8px] border-slate-800 rounded-[2.5rem] shadow-[0_40px_100px_rgba(0,0,0,0.8)] overflow-hidden">
              {/* Internal Bezel/Edge */}
              <div className="absolute inset-0 border-[2px] border-white/5 rounded-[2.1rem] pointer-events-none z-30" />
              
              {/* Dynamic Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-slate-800 rounded-b-2xl z-40 flex items-center justify-center gap-2">
                <div className="w-8 h-1 bg-slate-700 rounded-full" />
                <div className="w-2 h-2 bg-slate-700 rounded-full" />
              </div>

              {/* Screen Content */}
              <div className="relative w-full h-full overflow-hidden flex items-center justify-center">
                <Image 
                  src="/mobile-view.png" 
                  alt="Let's Catch Up Mobile App View"
                  fill
                  sizes="(max-width: 768px) 250px, 300px"
                  className="object-cover"
                  priority
                />
                {/* Screen Reflection Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none z-20" />
              </div>
            </div>

            {/* Hardware Buttons - Left Side */}
            <div className="absolute top-24 -left-2 w-1 h-12 bg-slate-700 rounded-l-md border-r border-black/20" />
            <div className="absolute top-40 -left-2 w-1 h-12 bg-slate-700 rounded-l-md border-r border-black/20" />
            
            {/* Power Button - Right Side */}
            <div className="absolute top-32 -right-2 w-1 h-16 bg-slate-700 rounded-r-md border-l border-black/20" />
          </motion.div>
        </motion.div>

        {/* Download Buttons Area */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="flex flex-col items-center gap-8"
        >
          <div className="flex flex-col items-center gap-6">
             <span className="font-headline text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 flex items-center gap-2">
                <Smartphone className="w-4 h-4 text-accent" />
                Available on Android & iOS
             </span>
             <div className="flex flex-wrap justify-center gap-6">
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
                  <div className="relative overflow-hidden rounded-lg shadow-xl border border-white/5">
                    <Image 
                      src="/appstore.jpg" 
                      alt="Apple App Store" 
                      width={140} 
                      height={42} 
                      style={{ height: 'auto' }}
                      className="object-contain" 
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
