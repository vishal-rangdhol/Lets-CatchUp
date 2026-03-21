
"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Heart } from "lucide-react";
import { cn } from "@/lib/utils";

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
      <div className="max-w-6xl mx-auto space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-4xl md:text-6xl font-headline font-bold text-white tracking-tight">
            The Solution: The <span className="text-gradient">"All-in-One"</span> Mindful Hub
          </h2>
          
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 max-w-2xl">
            <p className="text-sm md:text-lg font-body text-gray-300 leading-relaxed">
              <span className="text-white font-bold">Our Philosophy:</span> We are moving from <span className="italic">Engagement</span> (grabbing attention) to <span className="text-accent font-bold">Utility</span> (providing value).
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
                "relative group p-8 rounded-[32px] bg-[#141d3d] border transition-all duration-500 hover:bg-[#1e294b]",
                sol.border
              )}
            >
              <div className={cn("w-12 h-12 rounded-full flex items-center justify-center mb-6 shadow-xl", sol.glow)}>
                <sol.icon className={cn("w-6 h-6", sol.color)} />
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

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="pt-8"
        >
          <p className="text-sm md:text-xl font-headline font-bold text-gray-400">
            <span className="text-white">Three Integrated Pillars</span> working together in one unified, secure ecosystem.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
