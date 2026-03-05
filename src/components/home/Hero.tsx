"use client";

import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle2, Zap, Users, BarChart3 } from "lucide-react";
import Link from "next/link";
import gsap from "gsap";
import { motion } from "framer-motion";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const blob1Ref = useRef<HTMLDivElement>(null);
  const blob2Ref = useRef<HTMLDivElement>(null);
  const blob3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const blobs = [blob1Ref.current, blob2Ref.current, blob3Ref.current];
    
    // Ambient floating for background blobs
    blobs.forEach((blob, i) => {
      if (!blob) return;
      gsap.to(blob, {
        x: "random(-100, 100)",
        y: "random(-100, 100)",
        duration: "random(10, 20)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: i * 2
      });
    });

    // Mouse move parallax interaction for a depth feel
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const xPos = (clientX / window.innerWidth - 0.5);
      const yPos = (clientY / window.innerHeight - 0.5);

      blobs.forEach((blob, i) => {
        if (!blob) return;
        gsap.to(blob, {
          x: xPos * (60 * (i + 1)),
          y: yPos * (60 * (i + 1)),
          duration: 2,
          ease: "power2.out",
        });
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section ref={containerRef} className="relative pt-32 pb-20 overflow-hidden min-h-[90vh] flex items-center">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 -z-20 opacity-[0.03]" 
           style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      {/* Ambient Moving Blobs (Mesh Gradient Effect) */}
      <div ref={blob1Ref} className="absolute top-[10%] right-[10%] -z-10 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[140px]" />
      <div ref={blob2Ref} className="absolute bottom-[10%] left-[5%] -z-10 w-[500px] h-[500px] bg-accent/15 rounded-full blur-[120px]" />
      <div ref={blob3Ref} className="absolute top-[40%] left-[30%] -z-10 w-[400px] h-[400px] bg-pink-500/10 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center w-full">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-10"
        >
          <Badge variant="secondary" className="bg-white/5 border-white/10 text-accent px-5 py-2 rounded-full backdrop-blur-md">
            🚀 Accelerate Your Growth
          </Badge>
          
          <h1 className="text-5xl lg:text-7xl font-headline font-bold leading-tight tracking-tight">
            Unlock potential and <br />
            <span className="text-gradient">build lasting connections</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-lg leading-relaxed font-medium">
            Lets Catch Up is your all-in-one platform for collaboration, learning, and growth — built to support schools, startups, and communities with powerful, intuitive tools.
          </p>

          <div className="flex flex-wrap gap-5">
            <Link href="/contact">
              <Button size="lg" className="bg-accent-gradient hover:opacity-90 rounded-full px-10 h-16 text-lg font-bold transition-all hover:scale-105 button-glow border-none">
                Get Started <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="rounded-full px-10 h-16 text-lg glass border-white/20 hover:bg-white/10 transition-all">
                Contact Us
              </Button>
            </Link>
          </div>

          <div className="flex items-center gap-8 pt-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <CheckCircle2 className="w-5 h-5 text-accent" />
              <span>Free for teams</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <CheckCircle2 className="w-5 h-5 text-accent" />
              <span>No credit card</span>
            </div>
          </div>
        </motion.div>

        {/* Floating Interactive UI Elements */}
        <div className="relative min-h-[550px] flex items-center justify-center lg:justify-end">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            {/* Main Feature Card */}
            <motion.div 
              whileHover={{ rotate: 0, scale: 1.05 }}
              className="glass-card p-8 w-80 rotate-[-4deg] relative z-20 shadow-2xl border-white/10 transition-all duration-500"
            >
               <div className="w-12 h-12 rounded-xl bg-accent-gradient flex items-center justify-center mb-6">
                 <BarChart3 className="text-white w-6 h-6" />
               </div>
               <h4 className="text-2xl font-bold mb-2">Smart Analytics</h4>
               <p className="text-sm text-muted-foreground">Track student progress with real-time AI-powered insights.</p>
               <div className="mt-6 space-y-3">
                 <div className="space-y-1">
                   <div className="flex justify-between text-[10px] font-bold uppercase tracking-wider text-accent">
                     <span>Course Completion</span>
                     <span>88%</span>
                   </div>
                   <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                     <div className="h-full bg-accent w-[88%]" />
                   </div>
                 </div>
                 <div className="space-y-1">
                   <div className="flex justify-between text-[10px] font-bold uppercase tracking-wider text-primary">
                     <span>Engagement</span>
                     <span>64%</span>
                   </div>
                   <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                     <div className="h-full bg-primary w-[64%]" />
                   </div>
                 </div>
               </div>
            </motion.div>

            {/* Floating Live Indicator */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-12 -right-12 glass-card p-4 rounded-2xl z-30 border-white/10 shadow-xl"
            >
              <div className="flex items-center gap-3">
                <div className="relative w-3 h-3">
                  <div className="absolute inset-0 bg-emerald-500 rounded-full animate-ping opacity-75" />
                  <div className="relative w-3 h-3 rounded-full bg-emerald-500" />
                </div>
                <span className="text-xs font-bold whitespace-nowrap">2,450 Live Students</span>
              </div>
            </motion.div>

            {/* Floating Community Card */}
            <motion.div 
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -bottom-10 -left-20 glass-card p-6 rounded-3xl z-10 border-white/10 w-64 shadow-xl"
            >
              <div className="flex gap-4">
                 <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                   <Users className="w-5 h-5 text-primary" />
                 </div>
                 <div className="space-y-2 flex-1">
                   <div className="h-2 w-24 bg-white/20 rounded" />
                   <div className="h-2 w-full bg-white/5 rounded" />
                   <div className="flex -space-x-2 pt-1">
                     {[1,2,3,4].map((i) => (
                       <div key={i} className="w-6 h-6 rounded-full border-2 border-[#0b0f2f] bg-white/10" />
                     ))}
                   </div>
                 </div>
              </div>
            </motion.div>

            {/* Decorative Central Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[160%] h-[160%] bg-primary/5 rounded-full blur-[140px] -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
