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
    border: "border-emerald-400/30",
    glow: "bg-emerald-400/10",
  },
  {
    title: "Professional Collaboration",
    description: "Tools for startups and institutions.",
    icon: Briefcase,
    color: "text-cyan-400",
    border: "border-cyan-400/30",
    glow: "bg-cyan-400/10",
  },
  {
    title: "Healthy Social Spaces",
    description: "Private (school-level) and Public (human-centric) spaces built for connection, not dopamine loops.",
    icon: Heart,
    color: "text-blue-400",
    border: "border-blue-400/30",
    glow: "bg-blue-400/10",
  },
];

export function SolutionSection() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background Glow representing "The Solution" */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(45,212,191,0.05)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="flex items-center gap-4">
            <span className="font-headline text-accent font-black tracking-widest text-sm">03</span>
            <Badge variant="outline" className="border-accent/30 text-accent px-4 py-1 uppercase tracking-widest text-[9px] md:text-[10px] font-black bg-accent/5 backdrop-blur-sm">
              The Architecture
            </Badge>
          </div>
          <h2 className="text-4xl md:text-7xl font-headline font-bold text-white tracking-tight">
            The Solution: The <span className="text-gradient">"All-in-One"</span> Mindful Hub
          </h2>
          
          <div className="p-8 rounded-[32px] bg-white/5 border border-white/10 max-w-3xl backdrop-blur-xl">
            <p className="text-lg md:text-2xl font-body text-gray-300 leading-relaxed font-medium">
              <span className="text-white font-bold">Our Philosophy:</span> We are shifting the paradigm from <span className="italic text-gray-500">Engagement</span> (grabbing attention) to <span className="text-accent font-bold">Utility</span> (providing intentional value).
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {solutions.map((sol, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={cn(
                "relative group p-10 rounded-[40px] bg-[#141d3d] border transition-all duration-500 hover:bg-[#1e294b] flex flex-col items-center text-center",
                sol.border
              )}
            >
              <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-500")}>
                <sol.icon className={cn("w-8 h-8", sol.color)} />
              </div>
              <h3 className="text-xl md:text-2xl font-headline font-bold text-white mb-4">
                {sol.title}
              </h3>
              <p className="text-sm md:text-base text-gray-400 font-body leading-relaxed">
                {sol.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
