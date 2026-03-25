"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

export function BreakingAlgorithmSection() {
  const { scrollYProgress } = useScroll();
  const blur = useTransform(scrollYProgress, [0.5, 0.6, 0.7], ["blur(0px)", "blur(10px)", "blur(0px)"]);
  const opacity = useTransform(scrollYProgress, [0.5, 0.6, 0.7], [1, 0.3, 1]);

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Dynamic Background Focus Layer */}
      <motion.div 
        className="absolute inset-0 -z-10 pointer-events-none bg-[#0b0f2f]"
        style={{ filter: blur, opacity }}
      />

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
          {/* Enhanced Architectural Card (formerly terracotta) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-br from-[#1e294b] to-[#0f172a] border border-white/10 rounded-[32px] p-8 md:p-14 space-y-8 shadow-2xl relative overflow-hidden transition-all duration-500 group"
          >
            <div className="space-y-6 relative z-10">
              <h3 className="text-2xl md:text-4xl font-headline font-bold text-white group-hover:text-accent transition-colors">
                The &quot;Anti-Scroll&quot; Zone
              </h3>
              <p className="text-base md:text-xl text-gray-300 font-body font-medium leading-relaxed">
                A public space for everyone (18+) to connect without the psychological toll of dopamine loops.
              </p>
            </div>

            <div className="h-[1px] w-full bg-white/10 relative z-10" />

            <div className="space-y-4 relative z-10">
              <h3 className="text-xl md:text-2xl font-headline font-bold text-white">
                Bridging Generations
              </h3>
              <p className="text-sm md:text-lg text-gray-400 font-body font-medium leading-relaxed">
                A place where Gen Z, Gen Alpha, and older generations can interact in a shared, non-toxic environment.
              </p>
            </div>
            
            {/* Ambient Accent Glow */}
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-accent/10 blur-[100px] rounded-full pointer-events-none group-hover:bg-accent/20 transition-all duration-700" />
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/5 pointer-events-none" />
          </motion.div>

          {/* Human-First Architecture Grid */}
          <div className="space-y-12">
            <motion.h4 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-lg md:text-xl font-headline font-bold text-white uppercase tracking-[0.3em]"
            >
              Human-First Architecture
            </motion.h4>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "No Predatory Algorithms",
                  desc: "Feeds are chronological or intent-based, not optimized for addiction or comparison."
                },
                {
                  title: "Psychological Safety",
                  desc: "A moderated environment designed for meaningful discourse rather than engagement bait."
                }
              ].map((card, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-[#0f172a] border border-white/10 border-l-4 border-l-cyan-400 rounded-3xl p-8 md:p-10 space-y-6 shadow-xl hover:bg-[#1e294b] transition-all duration-500 group"
                >
                  <h5 className="text-xl md:text-3xl font-headline font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {card.title}
                  </h5>
                  <p className="text-sm md:text-lg text-gray-400 font-body leading-relaxed font-medium">
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
