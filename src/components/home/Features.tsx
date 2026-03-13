"use client";

import React from "react";
import { GraduationCap, Zap, Users, Target, Network } from "lucide-react";
import { motion } from "framer-motion";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { Badge } from "@/components/ui/badge";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export function Features() {
  const features = [
    {
      title: "Academic Operations",
      description: "A Learning Management System (LMS) designed for schools and universities to manage courses, students, assignments, and digital learning in one platform.",
      icon: GraduationCap,
      color: "from-emerald-400 to-teal-300",
      href: "/services/educational-institutions"
    },
    {
      title: "Professional Collaboration",
      description: "An integrated platform offering smart tools for startups and institutions to simplify management, boost productivity, and accelerate growth.",
      icon: Zap,
      color: "from-blue-500 to-indigo-400",
      href: "/services/startups-organizations"
    },
    {
      title: "Healthy Social Spaces",
      description: "A platform offering private school-level spaces and public human-centric communities built for meaningful connection rather than dopamine-driven engagement.",
      icon: Users,
      color: "from-pink-500 to-rose-400",
      href: "/services/healthy-social-spaces"
    },
  ];

  return (
    <section id="ecosystem" className="py-24 relative overflow-hidden px-6">
      <div className="max-w-7xl mx-auto">
        {/* Enhanced Architectural Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-5xl mx-auto mb-16 md:mb-20 space-y-12"
        >
          <div className="space-y-6">
            <div className="flex justify-center">
              <Badge variant="outline" className="border-accent/30 text-accent px-6 py-1.5 uppercase tracking-[0.2em] text-[10px] font-black bg-accent/5 backdrop-blur-sm">
                The Unified Institutional Command Center
              </Badge>
            </div>
            <h3 className="text-4xl md:text-6xl font-headline font-bold leading-tight tracking-tight text-white">
              Core capabilities for <br /><span className="text-gradient">every community</span>
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Philosophy Card */}
            <div className="glass-card p-6 md:p-8 border-white/5 text-left flex gap-6 items-start group hover:border-accent/30 transition-all duration-500 relative overflow-hidden">
               <div className="absolute top-0 left-0 w-1 h-full bg-accent opacity-20 group-hover:opacity-100 transition-opacity" />
               <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-accent/10 transition-colors shadow-xl">
                <Target className="w-6 h-6 text-white transition-colors duration-500 group-hover:text-accent glow-icon" />
              </div>
              <div className="space-y-2">
                <p className="text-[10px] font-black uppercase tracking-widest text-accent/60">Our Philosophy</p>
                <p className="text-gray-300 text-sm md:text-base font-medium leading-relaxed">
                  Shifting the paradigm from superficial engagement to <span className="text-white font-bold">high-impact functional utility</span>.
                </p>
              </div>
            </div>

            {/* Infrastructure Card */}
            <div className="glass-card p-6 md:p-8 border-white/5 text-left flex gap-6 items-start group hover:border-primary/30 transition-all duration-500 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-primary opacity-20 group-hover:opacity-100 transition-opacity" />
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-colors shadow-xl">
                <Network className="w-6 h-6 text-white transition-colors duration-500 group-hover:text-primary glow-icon" />
              </div>
              <div className="space-y-2">
                <p className="text-[10px] font-black uppercase tracking-widest text-primary/60">The Infrastructure</p>
                <p className="text-gray-300 text-sm md:text-base font-medium leading-relaxed">
                  Three foundational pillars seamlessly integrated within a <span className="text-white font-bold">secure, all-encompassing digital ecosystem</span>.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 md:gap-y-20 max-w-6xl mx-auto"
        >
          {features.map((feature, idx) => (
            <motion.div key={idx} variants={itemVariants}>
              <FeatureCard
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                gradientFrom={feature.color.split(' ')[0]}
                gradientTo={feature.color.split(' ')[1]}
                href={feature.href}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}