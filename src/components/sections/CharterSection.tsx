"use client";

import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const charterItems = [
  {
    number: "01",
    title: "User Agency",
    description: "We give control back. You decide how you interact, not an algorithm.",
    color: "border-accent/40",
    glow: "shadow-[0_0_40px_rgba(45,212,191,0.1)]",
    bg: "from-accent/5 to-transparent"
  },
  {
    number: "02",
    title: "Privacy by Design",
    description: "Data is for the user, not for sale. Privacy is not a feature, it's our foundation.",
    color: "border-cyan-400/40",
    glow: "shadow-[0_0_40px_rgba(34,211,238,0.1)]",
    bg: "from-cyan-400/5 to-transparent"
  },
  {
    number: "03",
    title: "Purposeful Tech",
    description: "Every feature must answer: \"Does this help the user learn, grow, or connect?\"",
    color: "border-primary/40",
    glow: "shadow-[0_0_40px_rgba(99,102,241,0.1)]",
    bg: "from-primary/5 to-transparent"
  },
  {
    number: "04",
    title: "Inclusivity",
    description: "A space designed for all ages, bridging the generational divide through shared interest.",
    color: "border-purple-400/40",
    glow: "shadow-[0_0_40px_rgba(192,132,252,0.1)]",
    bg: "from-purple-400/5 to-transparent"
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
          <h2 className="text-4xl md:text-8xl font-headline font-bold text-white tracking-tight leading-none">
            Our Charter for <br /><span className="text-gradient">Human-Centric Tech</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
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
                {/* Visual Number Backdrop */}
                <div className="absolute top-10 right-10 text-[120px] md:text-[180px] font-headline font-black text-white/5 pointer-events-none group-hover:text-white/10 transition-colors leading-none">
                  {item.number}
                </div>

                <div className="p-10 md:p-16 space-y-8 flex-1 relative z-10">
                  <div className="space-y-2">
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-accent/60 group-hover:text-accent transition-colors">Section {item.number}</p>
                    <h3 className="text-3xl md:text-5xl font-headline font-bold text-white tracking-tight group-hover:text-gradient transition-all">
                      {item.title}
                    </h3>
                  </div>
                  
                  <p className="text-lg md:text-2xl text-gray-400 leading-relaxed font-medium font-body">
                    {item.description.split('"').map((part, index) => 
                      index === 1 ? <span key={index} className="text-white font-bold">"{part}"</span> : part
                    )}
                  </p>
                </div>

                {/* Bottom Architectural Bar */}
                <div className={cn("h-2 w-full bg-gradient-to-r", item.bg)} />

                {/* Internal Gloss */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
