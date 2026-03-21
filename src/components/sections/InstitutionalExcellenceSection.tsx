"use client";

import React from "react";
import { motion } from "framer-motion";
import { Circle, BarChart3, Users2, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  {
    title: "Efficiency",
    description: "One dashboard for attendance, assignments, and exam scheduling.",
    icon: BarChart3,
    color: "text-cyan-400",
    border: "border-cyan-400/20"
  },
  {
    title: "Connection",
    description: "A \"Virtual Campus\" that bridges the gap between administrators, teachers, parents, and students.",
    icon: Users2,
    color: "text-blue-400",
    border: "border-blue-400/20"
  },
  {
    title: "Value",
    description: "Reduces the overhead of managing multiple SaaS tools.",
    icon: ShieldCheck,
    color: "text-purple-400",
    border: "border-purple-400/20"
  },
];

export function InstitutionalExcellenceSection() {
  return (
    <section className="py-24 px-6 relative overflow-hidden bg-gradient-to-b from-transparent to-primary/5">
      <div className="max-w-6xl mx-auto space-y-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-4xl md:text-7xl font-headline font-bold text-white tracking-tight leading-tight">
            Institutional <br /><span className="text-gradient">Excellence</span>
          </h2>
          <p className="text-lg md:text-2xl font-headline font-bold text-accent uppercase tracking-widest">
            For Schools, Colleges, & Universities
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative group"
            >
              <div className={cn(
                "relative bg-white/5 border border-white/10 rounded-[32px] p-10 space-y-8 h-full transition-all duration-500 hover:bg-white/10 hover:border-white/20 shadow-2xl",
                "flex flex-col"
              )}>
                <div className={cn(
                  "w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 shadow-xl group-hover:scale-110 transition-transform",
                  feat.color
                )}>
                  <feat.icon size={28} strokeWidth={1.5} />
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-2xl md:text-3xl font-headline font-bold text-white group-hover:text-accent transition-colors">
                    {feat.title}
                  </h3>
                  <p className="text-sm md:text-lg text-gray-400 font-body leading-relaxed font-medium">
                    {feat.description.split('"').map((part, index) => 
                      index === 1 ? <span key={index} className="text-white font-bold">"{part}"</span> : part
                    )}
                  </p>
                </div>

                {/* Corner Accent */}
                <div className={cn("absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl opacity-0 group-hover:opacity-10 transition-opacity rounded-bl-[100px] rounded-tr-[32px]", feat.color.replace('text-', 'bg-'))} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
