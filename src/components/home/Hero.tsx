
"use client";

import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3 } from "lucide-react";
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
    <section ref={containerRef} className="relative pt-32 pb-20 overflow-hidden min-h-[90vh] flex items-center px-6">
      <div ref={blob1Ref} className="absolute top-[15%] right-[10%] -z-10 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-primary/10 rounded-full blur-[100px] md:blur-[150px]" />
      <div ref={blob2Ref} className="absolute bottom-[15%] left-[5%] -z-10 w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-accent/10 rounded-full blur-[90px] md:blur-[130px]" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center w-full relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8 text-center lg:text-left"
        >
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-headline font-bold leading-tight tracking-tight">
            Unlock potential and <br className="hidden md:block" />
            <span className="text-gradient">build connections</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed font-medium mx-auto lg:mx-0">
            Lets Catch Up is your all-in-one platform for collaboration and learning — built for schools and startups.
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-4">
            <Link href="/contact" className="w-full sm:w-auto">
              <Button size="lg" className="w-full bg-accent-gradient hover:opacity-90 rounded-full px-10 h-14 md:h-16 text-lg font-bold transition-all hover:scale-105 button-glow border-none">
                Get Started <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/contact" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="w-full rounded-full px-10 h-14 md:h-16 text-lg glass border-white/20 hover:bg-white/10 transition-all">
                Contact Us
              </Button>
            </Link>
          </div>
        </motion.div>

        <div className="relative min-h-[400px] flex items-center justify-center lg:justify-end">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="relative"
          >
            <motion.div 
              whileHover={{ scale: 1.02, y: -5 }}
              className="glass-card p-6 md:p-8 w-64 md:w-80 relative z-20 shadow-2xl border-white/10"
            >
               <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-accent-gradient flex items-center justify-center mb-6">
                 <BarChart3 className="text-white w-5 h-5 md:w-6 md:h-6" />
               </div>
               <h4 className="text-xl md:text-2xl font-bold mb-2">Smart Analytics</h4>
               <p className="text-xs md:text-sm text-muted-foreground">Track student progress with real-time AI insights.</p>
               <div className="mt-6 space-y-3">
                 <div className="space-y-1">
                   <div className="flex justify-between text-[10px] font-bold uppercase tracking-wider text-accent">
                     <span>Completion</span>
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
              className="absolute -top-10 -right-4 md:-right-8 glass-card p-3 md:p-4 rounded-2xl z-30 border-white/10 shadow-xl"
            >
              <div className="flex items-center gap-2 md:gap-3">
                <div className="relative w-2 h-2 md:w-3 md:h-3">
                  <div className="absolute inset-0 bg-emerald-500 rounded-full animate-ping opacity-75" />
                  <div className="relative w-2 h-2 md:w-3 md:h-3 rounded-full bg-emerald-500" />
                </div>
                <span className="text-[10px] md:text-xs font-bold">2.4k Live</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
