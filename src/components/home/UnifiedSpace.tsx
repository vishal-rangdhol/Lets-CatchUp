"use client";

import React from "react";
import { Users, Zap, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function UnifiedSpace() {
  const sections = [
    {
      title: "Seamless collaboration",
      description: "Break down silos with tools designed for real-time teamwork and project management. Experience the future of team alignment.",
      icon: Zap,
      color: "accent",
      gradient: "from-teal-400 to-cyan-300",
      delay: 0.1,
    },
    {
      title: "Community engagement",
      description: "Build vibrant communities where members can interact, share knowledge, and grow together. Connection redefined for the modern age.",
      icon: Users,
      color: "primary",
      gradient: "from-primary to-indigo-400",
      delay: 0.2,
    },
  ];

  return (
    <section className="py-32 px-6 relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-accent/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto space-y-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-6"
        >
          <h2 className="text-4xl md:text-6xl font-headline font-bold tracking-tight">
            A unified space for <span className="text-gradient">every community</span>
          </h2>
          <p className="text-muted-foreground text-xl max-w-2xl mx-auto font-medium">
            Everything you need to manage your organization or learning environment in one powerful, cohesive interface.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {sections.map((section, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: section.delay, duration: 0.7 }}
              className="relative group h-full"
            >
              {/* Beneath Layer - Sharp & Offset */}
              <div className={cn(
                "absolute -bottom-4 -right-4 w-full h-full rounded-[32px] bg-gradient-to-br opacity-40 transition-all duration-500 group-hover:opacity-70 group-hover:-bottom-6 group-hover:-right-6",
                section.gradient
              )} />

              {/* Main Content Card */}
              <div className="relative h-full bg-gradient-to-br from-[#1e294b] via-[#141d3d] to-[#0f172a] border border-white/10 rounded-[32px] p-10 md:p-12 shadow-2xl overflow-hidden flex flex-col md:flex-row gap-8 items-center md:items-start group-hover:border-white/20 transition-all duration-500">
                
                {/* Icon Container */}
                <div className="relative shrink-0">
                  <div className={cn(
                    "w-20 h-20 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-xl",
                    `group-hover:border-${section.color}/40`
                  )}>
                    <section.icon className={cn(
                      "w-10 h-10 glow-icon",
                      section.color === "accent" ? "text-accent" : "text-primary"
                    )} />
                  </div>
                  {/* Decorative pulse around icon */}
                  <div className={cn(
                    "absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500",
                    section.color === "accent" ? "bg-accent" : "bg-primary"
                  )} />
                </div>

                {/* Text Content */}
                <div className="space-y-6 flex-1 text-center md:text-left">
                  <div className="space-y-3">
                    <h3 className="text-3xl font-bold tracking-tight transition-colors group-hover:text-white">
                      {section.title}
                    </h3>
                    <p className="text-gray-400 text-lg leading-relaxed font-medium">
                      {section.description}
                    </p>
                  </div>

                  <button className={cn(
                    "flex items-center gap-2 font-bold uppercase tracking-widest text-xs transition-all group/btn",
                    section.color === "accent" ? "text-accent" : "text-primary"
                  )}>
                    <span>Explore features</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-2" />
                  </button>
                </div>

                {/* Premium Gloss Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
