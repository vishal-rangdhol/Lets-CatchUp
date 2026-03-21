"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Heart } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

const solutions = [
  {
    title: "Academic Operations",
    description: "LMS for schools and universities.",
    icon: GraduationCap,
    color: "text-emerald-400",
    gradient: "from-emerald-400/20 to-transparent",
    border: "border-emerald-400/30",
  },
  {
    title: "Professional Collaboration",
    description: "Tools for startups and institutions.",
    icon: Briefcase,
    color: "text-cyan-400",
    gradient: "from-cyan-400/20 to-transparent",
    border: "border-cyan-400/30",
  },
  {
    title: "Healthy Social Spaces",
    description: "Private (school-level) and Public (human-centric) spaces built for connection, not dopamine loops.",
    icon: Heart,
    color: "text-blue-400",
    gradient: "from-blue-400/20 to-transparent",
    border: "border-blue-400/30",
  },
];

export function SolutionSection() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(45,212,191,0.05)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-10"
        >
          <div className="flex items-center gap-4">
            <span className="font-headline text-accent font-black tracking-widest text-sm">03</span>
            <Badge variant="outline" className="border-accent/30 text-accent px-4 py-1 uppercase tracking-widest text-[9px] md:text-[10px] font-black bg-accent/5 backdrop-blur-sm">
              The Architecture
            </Badge>
          </div>
          <h2 className="text-4xl md:text-8xl font-headline font-bold text-white tracking-tight leading-none">
            The Solution: <br /><span className="text-gradient">The "All-in-One" Hub</span>
          </h2>
          
          <div className="p-8 md:p-12 rounded-[40px] bg-white/5 border border-white/10 max-w-4xl backdrop-blur-xl relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-accent-gradient opacity-30 group-hover:opacity-100 transition-opacity" />
            <p className="text-xl md:text-3xl font-body text-gray-300 leading-relaxed font-medium relative z-10">
              <span className="text-white font-bold">Our Philosophy:</span> We are shifting the paradigm from <span className="italic text-gray-500">Engagement</span> (grabbing attention) to <span className="text-accent font-bold">Utility</span> (providing intentional value).
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((sol, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative group h-full"
            >
              {/* High Fidelity Layered Card */}
              <div className={cn(
                "relative h-full p-10 rounded-[40px] bg-gradient-to-br from-[#1e294b] to-[#0f172a] border transition-all duration-500 hover:bg-[#1e294b] flex flex-col items-center text-center shadow-2xl group-hover:-translate-y-2 group-hover:border-white/20",
                sol.border
              )}>
                {/* Glow Background */}
                <div className={cn("absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity rounded-[40px] bg-gradient-to-br", sol.gradient)} />

                {/* Architectural Icon Container */}
                <div className={cn(
                  "w-20 h-20 rounded-[24px] flex items-center justify-center mb-8 shadow-[0_20px_40px_rgba(0,0,0,0.4)] bg-white/5 border border-white/10 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6",
                  "relative z-10"
                )}>
                  <sol.icon className={cn("w-10 h-10", sol.color)} strokeWidth={1.5} />
                </div>

                <h3 className="text-2xl md:text-3xl font-headline font-bold text-white mb-4 relative z-10 tracking-tight">
                  {sol.title}
                </h3>
                <p className="text-sm md:text-lg text-gray-400 font-body leading-relaxed relative z-10 font-medium">
                  {sol.description}
                </p>

                {/* Top Gloss Lip */}
                <div className="absolute top-0 left-10 right-10 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent z-20" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
