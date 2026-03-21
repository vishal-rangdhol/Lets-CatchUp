"use client";

import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const charterItems = [
  {
    number: "1",
    title: "User Agency",
    description: "We give control back. You decide how you interact, not an algorithm.",
    color: "border-accent/40",
    glow: "shadow-[0_0_20px_rgba(45,212,191,0.15)]",
    headerBg: "bg-accent/5"
  },
  {
    number: "2",
    title: "Privacy by Design",
    description: "Data is for the user, not for sale. Privacy is not a feature, it's our foundation.",
    color: "border-cyan-400/40",
    glow: "shadow-[0_0_20px_rgba(34,211,238,0.15)]",
    headerBg: "bg-cyan-400/5"
  },
  {
    number: "3",
    title: "Purposeful Tech",
    description: "Every feature must answer: \"Does this help the user learn, grow, or connect?\"",
    color: "border-primary/40",
    glow: "shadow-[0_0_20px_rgba(99,102,241,0.15)]",
    headerBg: "bg-primary/5"
  },
  {
    number: "4",
    title: "Inclusivity",
    description: "A space designed for all ages, bridging the generational divide through shared interest.",
    color: "border-purple-400/40",
    glow: "shadow-[0_0_20px_rgba(192,132,252,0.15)]",
    headerBg: "bg-purple-400/5"
  }
];

export function CharterSection() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="flex items-center gap-4">
            <span className="font-headline text-accent font-black tracking-widest text-sm">04</span>
            <Badge className="font-headline glass text-accent border-white/10 px-4 py-1 uppercase tracking-widest text-[9px] md:text-[10px] font-bold">
              The Foundation
            </Badge>
          </div>
          <h2 className="text-4xl md:text-7xl font-headline font-bold text-white tracking-tight leading-tight">
            Our Charter for <br /><span className="text-gradient">Human-Centric Tech</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {charterItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="relative group h-full"
            >
              <div className={cn(
                "relative h-full bg-gradient-to-br from-[#1e294b] to-[#0f172a] border rounded-[40px] overflow-hidden transition-all duration-500 group-hover:border-white/30 shadow-2xl flex flex-col",
                item.color,
                item.glow
              )}>
                {/* Number Header */}
                <div className={cn(
                  "py-6 border-b border-white/10 flex items-center justify-center font-headline text-3xl font-black text-white/80 transition-colors group-hover:text-white",
                  item.headerBg
                )}>
                  {item.number}
                </div>

                {/* Content Area */}
                <div className="p-10 md:p-14 space-y-6 flex-1">
                  <h3 className="text-2xl md:text-4xl font-headline font-bold text-white tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-lg md:text-xl text-gray-400 leading-relaxed font-medium font-body">
                    {item.description.split('"').map((part, index) => 
                      index === 1 ? <span key={index} className="text-white font-bold">"{part}"</span> : part
                    )}
                  </p>
                </div>

                {/* Internal Gloss */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/5 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
