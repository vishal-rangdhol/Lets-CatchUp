"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

const problems = [
  {
    title: "Institutional Silos",
    description: "Education is stuck in disconnected apps. Managing a school involves 5+ different platforms.",
    highlights: ["5+ different platforms"],
    color: "from-emerald-400 to-teal-300",
    glow: "shadow-[0_0_40px_rgba(52,211,153,0.1)]",
  },
  {
    title: "The Attention Economy",
    description: "Public social platforms are built to addict. They prioritize \"engagement\" (rage, scrolling, vanity) over human well-being.",
    highlights: ["\"engagement\""],
    color: "from-cyan-400 to-blue-400",
    glow: "shadow-[0_0_40px_rgba(34,211,238,0.1)]",
  },
  {
    title: "Mental Health Impact",
    description: "Gen Z and Gen Alpha are suffering from \"algorithmic fatigue\"—a constant state of social comparison, anxiety, and fragmented focus.",
    highlights: ["\"algorithmic fatigue\""],
    color: "from-blue-500 to-indigo-500",
    glow: "shadow-[0_0_40px_rgba(59,130,246,0.1)]",
  },
];

export function ProblemSection() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-3xl mx-auto space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-6"
        >
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-3">
              <span className="font-headline text-accent font-black tracking-widest text-sm">02</span>
              <Badge variant="outline" className="border-red-500/30 text-red-400 px-4 py-1 uppercase tracking-widest text-[9px] md:text-[10px] font-black bg-red-500/5 backdrop-blur-sm">
                The Challenge
              </Badge>
            </div>
            <h2 className="text-4xl md:text-7xl font-headline font-bold leading-tight text-white tracking-tight">
              The <span className="text-gradient">"Fragmented"</span> <br /> Digital World
            </h2>
          </div>
          <p className="text-sm md:text-xl text-gray-400 max-w-2xl mx-auto font-body font-medium leading-relaxed">
            Identifying the friction points that prevent genuine human growth and institutional excellence.
          </p>
        </motion.div>

        <div className="grid gap-8 md:gap-12">
          {problems.map((prob, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="relative group"
            >
              {/* Stacked Card Layer */}
              <div className={cn(
                "absolute -bottom-2 -right-2 w-full h-full rounded-[32px] bg-white/5 opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10",
                "border border-white/5"
              )} />

              <div className={cn(
                "relative h-full bg-gradient-to-br from-[#1e294b] via-[#141d3d] to-[#0f172a] border border-white/10 rounded-[32px] p-8 md:p-12 flex flex-col gap-6 overflow-hidden transition-all duration-500 hover:border-white/20 shadow-2xl",
                prob.glow
              )}>
                {/* Glowing Side Accent */}
                <div className={cn("absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b", prob.color)} />
                
                <div className="space-y-4 relative z-10">
                  <h3 className="text-2xl md:text-4xl font-headline font-bold text-white tracking-tight group-hover:text-accent transition-colors">
                    {prob.title}
                  </h3>
                  
                  <p className="text-sm md:text-xl text-gray-400 leading-relaxed font-medium font-body">
                    {prob.description.split(new RegExp(`(${prob.highlights.map(h => h.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`, 'g')).map((part, index) => 
                      prob.highlights.includes(part) ? (
                        <span key={index} className="text-white font-bold">{part}</span>
                      ) : (
                        part
                      )
                    )}
                  </p>
                </div>

                {/* Subtle Grain Texture overlay */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
                
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
