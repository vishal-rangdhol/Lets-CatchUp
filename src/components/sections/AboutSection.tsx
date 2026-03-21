"use client";

import React from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
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
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative group w-full"
          >
            {/* Architectural Layered Effect */}
            <div className="absolute -bottom-6 -right-6 w-full h-full rounded-[40px] bg-accent-gradient opacity-20 transition-all duration-500 group-hover:opacity-30 group-hover:-bottom-8 group-hover:-right-8 -z-10" />
            
            <div className="relative bg-gradient-to-br from-[#1e294b] via-[#141d3d] to-[#0f172a] border border-white/10 rounded-[40px] p-3 shadow-2xl overflow-hidden group-hover:border-white/20 transition-all duration-500">
              <div className="relative rounded-[32px] overflow-hidden w-full h-auto">
                <Image
                  src="/about-us.jpeg"
                  alt="Collaborative team at Let's Catch Up"
                  width={1200}
                  height={800}
                  className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105"
                  priority
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
