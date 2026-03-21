
"use client";

import React from "react";
import { motion } from "framer-motion";
import { Circle } from "lucide-react";

const features = [
  {
    title: "Efficiency",
    description: "One dashboard for attendance, assignments, and exam scheduling.",
    color: "text-cyan-400",
  },
  {
    title: "Connection",
    description: "A \"Virtual Campus\" that bridges the gap between administrators, teachers, parents, and students.",
    color: "text-blue-400",
  },
  {
    title: "Value",
    description: "Reduces the overhead of managing multiple SaaS tools.",
    color: "text-purple-400",
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
          className="space-y-4"
        >
          <h2 className="text-3xl md:text-5xl font-headline font-bold text-white tracking-tight">
            Institutional Excellence (LMS & Management)
          </h2>
          <p className="text-lg md:text-xl font-headline font-bold text-accent uppercase tracking-widest">
            For Schools, Colleges, & Universities
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex gap-6 items-start group"
            >
              <div className="shrink-0 mt-1">
                <Circle className={feat.color} size={32} strokeWidth={1.5} />
              </div>
              <div className="space-y-3">
                <h3 className="text-xl md:text-2xl font-headline font-bold text-white group-hover:text-accent transition-colors">
                  {feat.title}
                </h3>
                <p className="text-sm md:text-lg text-gray-400 font-body leading-relaxed">
                  {feat.description.split('"').map((part, index) => 
                    index === 1 ? <span key={index} className="text-white font-bold">"{part}"</span> : part
                  )}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
