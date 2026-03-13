"use client";

import React from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Globe, Cpu, Zap, Users } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ServicesPage() {
  const services = [
    {
      title: "Educational Institutions",
      description: "Empower your faculty and students with modern LMS tools. From primary schools to universities, our platform simplifies curriculum management and enhances student engagement.",
      icon: GraduationCap,
      href: "/services/educational-institutions",
      color: "accent",
      gradient: "from-teal-400 to-cyan-300",
      features: [
        { name: "Virtual Classrooms", icon: Globe },
        { name: "Student Analytics", icon: Cpu },
      ]
    },
    {
      title: "Startups & Organizations",
      description: "Scale your team's knowledge with project management and collaboration features designed for fast-paced environments. Build a culture of continuous learning.",
      icon: Briefcase,
      href: "/services/startups-organizations",
      color: "primary",
      gradient: "from-primary to-indigo-400",
      features: [
        { name: "Team Collaboration", icon: Users },
        { name: "Project Tracking", icon: Zap },
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto space-y-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center space-y-6 max-w-3xl mx-auto"
        >
          <Badge className="glass text-accent border-white/10 px-4 py-1">Our Solutions</Badge>
          <h1 className="text-5xl md:text-7xl font-headline font-bold">Tailored for your <span className="text-gradient">Success</span></h1>
          <p className="text-xl text-gray-400">Professional platforms designed for the unique needs of every learner and leader.</p>
        </motion.div>

        <div className="grid gap-8 md:gap-16">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.7 }}
              className="relative group w-full"
            >
              {/* Sharp Layered Effect */}
              <div className={cn(
                "absolute -bottom-4 -right-4 w-full h-full rounded-[40px] bg-gradient-to-br opacity-40 transition-all duration-500 group-hover:opacity-70 group-hover:-bottom-5 group-hover:-right-5",
                s.gradient
              )} />

              <div className="relative bg-gradient-to-br from-[#1e294b] via-[#141d3d] to-[#0f172a] border border-white/10 rounded-[40px] p-10 md:p-12 shadow-2xl overflow-hidden flex flex-col md:flex-row gap-10 items-center md:items-start group-hover:border-white/20 transition-all duration-500">
                <div className="relative shrink-0">
                  <div className={cn(
                    "w-20 h-20 md:w-24 md:h-24 rounded-3xl bg-white/5 flex items-center justify-center border border-white/10 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-xl"
                  )}>
                    <s.icon className={cn(
                      "w-10 h-10 md:w-12 md:h-12 glow-icon",
                      s.color === "accent" ? "text-accent" : "text-primary"
                    )} />
                  </div>
                </div>

                <div className="flex-1 space-y-8 text-center md:text-left">
                  <div className="space-y-4">
                    <h2 className="text-3xl md:text-5xl font-headline font-bold leading-tight">
                      {s.title}
                    </h2>
                    <p className="text-gray-400 text-lg md:text-xl leading-relaxed font-medium">
                      {s.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap justify-center md:justify-start gap-8">
                    {s.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-sm text-gray-300 font-bold uppercase tracking-widest">
                        <feat.icon className={cn("w-5 h-5", s.color === "accent" ? "text-accent" : "text-primary")} />
                        {feat.name}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Decorative background glow */}
                <div className={cn(
                  "absolute -bottom-20 -right-20 w-64 h-64 blur-[120px] opacity-10 pointer-events-none transition-opacity group-hover:opacity-20 bg-gradient-to-br",
                  s.gradient
                )} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
