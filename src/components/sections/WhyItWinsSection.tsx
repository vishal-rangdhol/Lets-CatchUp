
"use client";

import React from "react";
import { motion } from "framer-motion";
import { Smartphone } from "lucide-react";

export function WhyItWinsSection() {
  const points = [
    {
      value: "5+",
      label: "Apps Replaced",
      desc: "We replace 5+ apps with 1—",
      highlight: "High Utility"
    },
    {
      value: "ISO",
      label: "Certified Trust",
      desc: "ISO-certified, secure, and private environment—",
      highlight: "High Trust"
    },
    {
      value: "1",
      label: "Global Solution",
      desc: "A solution to the global digital mental health crisis—",
      highlight: "High Impact"
    }
  ];

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-16 md:space-y-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <h2 className="text-3xl md:text-5xl font-headline font-bold text-white tracking-tight leading-tight">
            Why It Wins (The Market Edge)
          </h2>
          <div className="w-12 h-1 bg-accent-gradient rounded-full opacity-30" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12 text-center md:text-left">
          {points.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="space-y-6"
            >
              <div className="text-6xl md:text-8xl font-headline font-bold text-white tracking-tighter">
                {p.value}
              </div>
              <div className="space-y-3">
                <h3 className="text-xl md:text-3xl font-headline font-bold text-white tracking-tight">
                  {p.label}
                </h3>
                <p className="text-sm md:text-xl text-gray-400 font-body leading-relaxed font-medium">
                  {p.desc}<span className="text-white font-bold">{p.highlight}</span>.
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-emerald-900/30 border border-emerald-500/20 rounded-[2.5rem] p-6 md:p-10 flex flex-col md:flex-row items-center gap-6 shadow-2xl relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-transparent pointer-events-none" />
          
          <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center shrink-0 border border-emerald-500/20 group-hover:scale-110 transition-transform duration-500 shadow-xl">
            <Smartphone className="text-emerald-400 w-7 h-7" />
          </div>
          
          <p className="text-base md:text-2xl text-gray-300 font-body leading-relaxed text-center md:text-left flex-1 font-medium">
            <span className="text-white font-bold">Global Scalability:</span> Low-bandwidth, mobile-first design makes it accessible from <span className="text-[#f472b6] font-bold">Mumbai to New York</span>.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
