"use client";

import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle2, BarChart3, Users } from "lucide-react";
import Link from "next/link";
import gsap from "gsap";
import { motion } from "framer-motion";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const blob1Ref = useRef<HTMLDivElement>(null);
  const blob2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const blobs = [blob1Ref.current, blob2Ref.current];
    
    blobs.forEach((blob, i) => {
      if (!blob) return;
      gsap.to(blob, {
        x: "random(-80, 80)",
        y: "random(-80, 80)",
        duration: "random(12, 18)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: i * 2
      });
    });

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const xPos = (clientX / window.innerWidth - 0.5);
      const yPos = (clientY / window.innerHeight - 0.5);

      blobs.forEach((blob, i) => {
        if (!blob) return;
        gsap.to(blob, {
          x: xPos * (40 * (i + 1)),
          y: yPos * (40 * (i + 1)),
          duration: 1.5,
          ease: "power2.out",
        });
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section ref={containerRef} className="relative pt-32 pb-20 overflow-hidden min-h-[95vh] flex items-center">
      {/* Ambient Moving Blobs - Still kept for depth combined with global particles */}
      <div ref={blob1Ref} className="absolute top-[15%] right-[10%] -z-10 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px]" />
      <div ref={blob2Ref} className="absolute bottom-[15%] left-[5%] -z-10 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[130px]" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center w-full relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
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
            Lets Catch Up is your all-in-one platform for collaboration, learning, and growth — built to support schools, startups, and communities.
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

        <div className="relative min-h-[500px] flex items-center justify-center lg:justify-end">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, delay: 0.3, type: "spring" }}
            className="relative"
          >
            <motion.div 
              whileHover={{ scale: 1.02, y: -5 }}
              className="glass-card p-8 w-80 relative z-20 shadow-2xl border-white/10"
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
                     <motion.div 
                       initial={{ width: 0 }}
                       animate={{ width: "88%" }}
                       transition={{ duration: 1.5, delay: 1 }}
                       className="h-full bg-accent" 
                     />
                   </div>
                 </div>
               </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-12 -right-8 glass-card p-4 rounded-2xl z-30 border-white/10 shadow-xl"
            >
              <div className="flex items-center gap-3">
                <div className="relative w-3 h-3">
                  <div className="absolute inset-0 bg-emerald-500 rounded-full animate-ping opacity-75" />
                  <div className="relative w-3 h-3 rounded-full bg-emerald-500" />
                </div>
                <span className="text-xs font-bold">2,450 Live Students</span>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-8 -left-12 glass-card p-6 rounded-3xl z-10 border-white/10 w-60 shadow-xl"
            >
              <div className="flex gap-4">
                 <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                   <Users className="w-5 h-5 text-primary" />
                 </div>
                 <div className="space-y-2 flex-1">
                   <div className="h-2 w-20 bg-white/20 rounded" />
                   <div className="h-2 w-full bg-white/5 rounded" />
                 </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
