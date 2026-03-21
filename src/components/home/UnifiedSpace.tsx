"use client";

import React from "react";
import { Users, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function UnifiedSpace() {
  const sections = [
    {
      title: "Seamless collaboration",
      description: "Break down silos with tools designed for real-time teamwork and project management across your entire organization.",
      icon: Zap,
      color: "accent",
      gradient: "from-teal-400 to-cyan-300",
      delay: 0.1,
    },
    {
      title: "Community engagement",
      description: "Build vibrant, secure communities where members can interact, share deep knowledge, and grow together.",
      icon: Users,
      color: "primary",
      gradient: "from-primary to-indigo-400",
      delay: 0.2,
    },
  ];

  return (
    <section id="unified-space" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-accent/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto space-y-12 md:space-y-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-6"
        >
          <h2 className="text-4xl md:text-6xl font-headline font-bold leading-tight tracking-tight text-white">
            A unified space for <br /><span className="text-gradient">every community</span>
          </h2>
          <p className="text-gray-400 text-sm md:text-xl max-w-2xl mx-auto font-medium font-body leading-relaxed">
            Everything you need to manage your organization in one cohesive and professional interface.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 md:gap-16">
          {sections.map((section, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: section.delay, duration: 0.7 }}
              className="relative group h-full"
            >
              {/* Architectural Layered Effect matching PlatformDescription */}
              <div className={cn(
                "absolute -bottom-6 -right-6 w-full h-full rounded-[40px] opacity-20 transition-all duration-500 group-hover:opacity-30 group-hover:-bottom-8 group-hover:-right-8 -z-10 bg-gradient-to-br",
                section.gradient
              )} />

              <div className="relative h-full bg-gradient-to-br from-[#1e294b] via-[#141d3d] to-[#0f172a] border border-white/10 rounded-[40px] p-10 md:p-12 shadow-[0_30px_60px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col md:flex-row gap-8 items-center md:items-start group-hover:border-white/20 transition-all duration-500">
                <div className="relative shrink-0">
                  <div className={cn(
                    "w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-xl backdrop-blur-sm"
                  )}>
                    <section.icon className={cn(
                      "w-8 h-8 md:w-10 md:h-10 glow-icon",
                      section.color === "accent" ? "text-accent" : "text-primary"
                    )} />
                  </div>
                </div>

                <div className="space-y-4 flex-1 text-center md:text-left">
                  <h3 className="text-2xl md:text-3xl font-headline font-bold text-white tracking-tight">
                    {section.title}
                  </h3>
                  <p className="text-gray-400 text-sm md:text-lg leading-relaxed font-medium font-body">
                    {section.description}
                  </p>
                </div>

                {/* Internal Gloss Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
