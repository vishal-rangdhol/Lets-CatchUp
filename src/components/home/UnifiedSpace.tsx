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

      <div className="max-w-7xl mx-auto space-y-12 md:space-y-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4"
        >
          <h2 className="text-3xl md:text-5xl font-headline font-bold tracking-tight">
            A unified space for <span className="text-gradient">every community</span>
          </h2>
          <p className="text-muted-foreground text-[10px] md:text-lg max-w-2xl mx-auto font-medium">
            Everything you need to manage your organization in one cohesive and professional interface.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
          {sections.map((section, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: section.delay, duration: 0.7 }}
              className="relative group h-full"
            >
              <div className={cn(
                "absolute -bottom-3 -right-3 md:-bottom-4 md:-right-4 w-full h-full rounded-[24px] md:rounded-[32px] bg-gradient-to-br opacity-40 transition-all duration-500 group-hover:opacity-70 group-hover:-bottom-4 group-hover:-right-4",
                section.gradient
              )} />

              <div className="relative h-full bg-gradient-to-br from-[#1e294b] via-[#141d3d] to-[#0f172a] border border-white/10 rounded-[24px] md:rounded-[32px] p-6 md:p-12 shadow-2xl overflow-hidden flex flex-col md:flex-row gap-6 md:gap-8 items-center md:items-start group-hover:border-white/20 transition-all duration-500">
                <div className="relative shrink-0">
                  <div className={cn(
                    "w-12 h-12 md:w-20 md:h-20 rounded-xl md:rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-xl"
                  )}>
                    <section.icon className={cn(
                      "w-6 h-6 md:w-10 md:h-10 glow-icon",
                      section.color === "accent" ? "text-accent" : "text-primary"
                    )} />
                  </div>
                </div>

                <div className="space-y-3 md:space-y-4 flex-1 text-center md:text-left">
                  <h3 className="text-xl md:text-3xl font-bold tracking-tight">
                    {section.title}
                  </h3>
                  <p className="text-gray-400 text-[10px] md:text-lg leading-relaxed font-medium">
                    {section.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
