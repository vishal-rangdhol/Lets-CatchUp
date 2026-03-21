"use client";

import React from "react";
import { motion } from "framer-motion";
import { Smartphone, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

export function WhyItWinsSection() {
  const points = [
    {
      value: "5+",
      label: "Apps Replaced",
      desc: "Consolidating fragmented ecosystems into one—",
      highlight: "High Utility",
      color: "text-teal-400"
    },
    {
      value: "ISO",
      label: "Certified Trust",
      desc: "Secure, private, and high-trust institutional environments—",
      highlight: "High Safety",
      color: "text-indigo-400"
    },
    {
      value: "1",
      label: "Unified Platform",
      desc: "A singular solution to digital mental health—",
      highlight: "High Impact",
      color: "text-pink-400"
    }
  ];

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-20 md:space-y-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6 text-center md:text-left"
        >
          <h2 className="text-4xl md:text-8xl font-headline font-bold text-white tracking-tight leading-none">
            Why It Wins <br /><span className="text-gradient">(The Market Edge)</span>
          </h2>
          <div className="w-24 h-1.5 bg-accent-gradient rounded-full opacity-50" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {points.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative"
            >
              <div className="relative bg-white/5 border border-white/10 rounded-[40px] p-10 md:p-12 space-y-8 h-full transition-all duration-500 hover:bg-white/10 hover:border-white/20 shadow-2xl">
                <div className={cn("text-7xl md:text-9xl font-headline font-bold leading-none tracking-tighter transition-transform group-hover:scale-105", p.color)}>
                  {p.value}
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl md:text-3xl font-headline font-bold text-white tracking-tight">
                    {p.label}
                  </h3>
                  <p className="text-sm md:text-xl text-gray-400 font-body leading-relaxed font-medium">
                    {p.desc}<span className="text-white font-bold">{p.highlight}</span>.
                  </p>
                </div>
                
                {/* Decorative Check */}
                <div className="absolute top-10 right-10 opacity-5 group-hover:opacity-20 transition-opacity">
                  <CheckCircle2 size={64} className={p.color} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative group p-[1px] rounded-[40px] overflow-hidden bg-gradient-to-r from-emerald-500/50 via-primary/50 to-pink-500/50 shadow-2xl"
        >
          <div className="bg-[#0b0f2f] rounded-[39px] p-8 md:p-16 flex flex-col md:flex-row items-center gap-10 md:gap-16 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-pink-500/5 pointer-events-none" />
            
            <div className="relative shrink-0">
              <div className="w-20 h-20 md:w-28 md:h-20 rounded-3xl bg-white/5 flex items-center justify-center border border-white/10 shadow-2xl group-hover:scale-110 transition-transform duration-700">
                <Smartphone className="text-accent w-10 h-10 md:w-12 md:h-12 glow-icon" />
              </div>
              <div className="absolute -inset-4 bg-accent/20 blur-[40px] -z-10 animate-pulse" />
            </div>
            
            <div className="space-y-4 flex-1 text-center md:text-left">
              <h4 className="text-2xl md:text-4xl font-headline font-bold text-white">Global Scalability</h4>
              <p className="text-lg md:text-3xl text-gray-300 font-body leading-relaxed font-medium">
                Low-bandwidth, mobile-first design makes it accessible from <span className="text-accent font-bold">Mumbai to New York</span>. Built for the next billion users.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
