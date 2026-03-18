
"use client";

import React from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Sparkles, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function AboutSection() {
  const values = [
    {
      title: "Empowerment & Inclusivity",
      desc: "We believe that every learner, regardless of their background, should have the tools and community support to build their dream career in tech.",
      icon: Sparkles,
      color: "accent",
      gradient: "from-teal-400 to-cyan-300",
    },
    {
      title: "ISO Certified Trust",
      desc: "ISO-certified, secure, and private environment — maintaining the highest levels of data security and institutional integrity.",
      icon: ShieldCheck,
      color: "primary",
      gradient: "from-indigo-500 to-purple-500",
    },
  ];

  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-24 md:space-y-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 md:space-y-8"
          >
            <div className="space-y-4">
              <Badge variant="secondary" className="glass text-accent px-4 py-1 border-white/10 uppercase tracking-widest text-[10px] font-black bg-accent/5 backdrop-blur-sm">
                Our Story
              </Badge>
              <h2 className="text-4xl md:text-7xl font-headline font-bold leading-tight tracking-tight text-white">
                The journey of <br /><span className="text-gradient">Lets Catch Up</span>
              </h2>
            </div>
            <p className="text-sm md:text-xl text-gray-400 leading-relaxed font-medium font-body max-w-xl">
              Founded with the vision to democratize technical education, Lets Catch Up started as a small project to bridge the gap between classroom learning and industry requirements. Today, we are a unified ecosystem empowering thousands of students and educators worldwide.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative group w-full"
          >
            {/* Layered Architectural Backdrop */}
            <div className="absolute -bottom-4 -right-4 w-full h-full rounded-[32px] bg-gradient-to-br from-primary/30 to-accent/30 opacity-40 transition-all duration-500 group-hover:opacity-70 group-hover:-bottom-5 group-hover:-right-5 -z-10" />
            
            <div className="relative bg-gradient-to-br from-[#1e294b] via-[#141d3d] to-[#0f172a] border border-white/10 rounded-[32px] p-3 shadow-2xl overflow-hidden group-hover:border-white/20 transition-all duration-500">
              {/* Responsive Container for Proper Framing */}
              <div className="relative rounded-[20px] overflow-hidden h-[300px] md:h-[480px] w-full">
                <Image
                  src="/about-us.jpeg"
                  alt="Collaborative team at Let's Catch Up"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                {/* Subtle internal gloss overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none" />
              </div>
            </div>
          </motion.div>
        </div>

        <div className="space-y-12 md:space-y-16">
          <div className="text-center space-y-4">
            <h3 className="text-3xl lg:text-5xl font-headline font-bold text-white tracking-tight">Our Core Values</h3>
            <div className="w-16 h-1 bg-accent-gradient mx-auto rounded-full opacity-50" />
          </div>
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-12">
            {values.map((v, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, x: i === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="relative group h-full"
              >
                <div className={cn(
                  "absolute -bottom-2 -right-2 md:-bottom-4 md:-right-4 w-full h-full rounded-2xl md:rounded-[32px] bg-gradient-to-br opacity-40 transition-all duration-500 group-hover:opacity-70 group-hover:-bottom-3 md:group-hover:-bottom-5 group-hover:-right-3 md:group-hover:-right-5 -z-10",
                  v.gradient
                )} />

                <div className="relative h-full bg-gradient-to-br from-[#1e294b] via-[#141d3d] to-[#0f172a] border border-white/10 rounded-2xl md:rounded-[32px] p-4 md:p-10 shadow-2xl overflow-hidden flex flex-col md:flex-row gap-4 md:gap-8 items-center md:items-start group-hover:border-white/20 transition-all duration-500">
                  <div className="relative shrink-0">
                    <div className="w-12 h-12 md:w-20 md:h-20 rounded-xl md:rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-xl backdrop-blur-sm">
                      <v.icon className={cn(
                        "w-6 h-6 md:w-10 md:h-10 glow-icon",
                        v.color === "accent" ? "text-accent" : "text-primary"
                      )} />
                    </div>
                  </div>

                  <div className="space-y-2 md:space-y-4 flex-1 text-center md:text-left">
                    <div className="space-y-1 md:space-y-2">
                      <h4 className="text-lg md:text-3xl font-headline font-bold tracking-tight text-white">
                        {v.title}
                      </h4>
                      <p className="text-[10px] md:text-lg text-gray-400 leading-relaxed font-medium font-body">
                        {v.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
