
"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function BreakingAlgorithmSection() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-12 md:space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-headline font-bold text-white tracking-tight">
            Breaking the Algorithm (Public Space)
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-8 md:gap-12 items-start">
          {/* Terracotta Zone Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#a67c6d] rounded-[32px] p-8 md:p-10 space-y-8 shadow-2xl relative overflow-hidden"
          >
            <div className="space-y-4 relative z-10">
              <h3 className="text-xl md:text-2xl font-headline font-bold text-white">
                The &quot;Anti-Scroll&quot; Zone
              </h3>
              <p className="text-sm md:text-lg text-white/90 font-body font-medium">
                A public space for everyone (18+) to connect.
              </p>
            </div>

            <div className="h-[1px] w-full bg-white/20 relative z-10" />

            <div className="space-y-4 relative z-10">
              <h3 className="text-xl md:text-2xl font-headline font-bold text-white">
                Bridging Generations
              </h3>
              <p className="text-sm md:text-lg text-white/90 font-body font-medium leading-relaxed">
                A place where Gen Z, Gen Alpha, and older generations can interact in a shared, non-toxic environment.
              </p>
            </div>
            
            {/* Subtle Texture Overlay */}
            <div className="absolute inset-0 bg-black/5 pointer-events-none" />
          </motion.div>

          {/* Human-First Architecture Grid */}
          <div className="space-y-8">
            <motion.h4 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-lg md:text-xl font-headline font-bold text-white uppercase tracking-widest"
            >
              Human-First Architecture
            </motion.h4>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "No Predatory Algorithms",
                  desc: "Feeds are chronological or intent-based, not optimized for addiction."
                },
                {
                  title: "Psychological Safety",
                  desc: "A moderated environment designed for meaningful discourse."
                }
              ].map((card, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-[#0f172a] border border-white/10 border-l-4 border-l-cyan-400 rounded-2xl p-6 md:p-8 space-y-4 shadow-xl hover:bg-[#1e294b] transition-colors group"
                >
                  <h5 className="text-lg md:text-2xl font-headline font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {card.title}
                  </h5>
                  <p className="text-sm md:text-base text-gray-400 font-body leading-relaxed font-medium">
                    {card.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
