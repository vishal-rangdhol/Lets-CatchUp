
"use client";

import React, { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { motion, useScroll, useTransform } from "framer-motion";

type Particle = {
  x: string;
  y: string;
  duration: number;
  delay: number;
};

export function AboutSection() {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 0.2], [0, -50]);
  const y2 = useTransform(scrollYProgress, [0, 0.2], [0, 100]);
  const rotate = useTransform(scrollYProgress, [0, 0.2], [0, 5]);

  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Generate random positions only on the client to avoid hydration mismatch
    const generatedParticles = [...Array(20)].map(() => ({
      x: Math.random() * 100 + "%",
      y: Math.random() * 100 + "%",
      duration: Math.random() * 5 + 5,
      delay: Math.random() * 5,
    }));
    setParticles(generatedParticles);
  }, []);

  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden w-full">
      {/* Interactive Particles Layer */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        {particles.map((p, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-accent rounded-full"
            initial={{ 
              x: p.x, 
              y: p.y 
            }}
            animate={{
              y: [null, "-20%"],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              ease: "linear",
              delay: p.delay
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            style={{ y: y1 }}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <span className="font-headline text-accent font-black tracking-widest text-sm">01</span>
                <Badge variant="secondary" className="glass text-accent px-4 py-1 border-white/10 uppercase tracking-widest text-[10px] font-black bg-accent/5 backdrop-blur-sm">
                  Our Story
                </Badge>
              </div>
              <h1 className="text-5xl md:text-8xl font-headline font-bold leading-tight tracking-tight text-white">
                Democratizing <br /><span className="text-gradient">Potential</span>
              </h1>
            </div>
            
            <div className="space-y-6">
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-medium font-body">
                Founded with the vision to democratize technical education, <span className="text-white font-bold">Lets Catch Up</span> started as a response to the growing gap between academic theory and industry reality.
              </p>
              <div className="h-[1px] w-20 bg-accent-gradient rounded-full" />
              <p className="text-base text-gray-400 leading-relaxed font-body">
                Today, we are a high-fidelity unified ecosystem empowering thousands of students, educators, and organizations worldwide through secure, mindful technology.
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            style={{ y: y2, rotate }}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative group w-full"
          >
            {/* Architectural Layered Effect */}
            <div className="absolute -bottom-6 -right-6 w-full h-full rounded-[40px] bg-accent-gradient opacity-20 transition-all duration-500 group-hover:opacity-30 group-hover:-bottom-8 group-hover:-right-8 -z-10" />
            
            <div className="relative bg-gradient-to-br from-[#1e294b] via-[#141d3d] to-[#0f172a] border border-white/10 rounded-[40px] p-3 shadow-2xl overflow-hidden group-hover:border-white/20 transition-all duration-500">
              <div className="relative rounded-[32px] overflow-hidden w-full h-auto">
                <video
                  src="/promotion.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
