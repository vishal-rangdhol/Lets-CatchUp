
"use client";

import React from "react";
import { Network, Settings, Users, Layout, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function Features() {
  const features = [
    {
      title: "Connected Learning Spaces",
      description: "Unified digital environments where students and educators interact effortlessly to build the future of education.",
      icon: Network,
      color: "text-[#4fd1c5]",
    },
    {
      title: "Seamless Academic Management",
      description: "Powerful administrative tools designed to streamline grading, scheduling, and student progress tracking with ease.",
      icon: Settings,
      color: "text-[#667eea]",
    },
    {
      title: "Interest-Based Communities",
      description: "Join or create specialized groups centered around your specific passions, career goals, and academic interests.",
      icon: Users,
      color: "text-[#f687b3]",
    },
    {
      title: "Inclusive Collaboration Tools",
      description: "Accessible and intuitive features built for diverse teams to collaborate, communicate, and execute projects seamlessly.",
      icon: Layout,
      color: "text-[#4fd1c5]",
    },
  ];

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-accent/5 rounded-full blur-[120px] -z-10" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto mb-24 space-y-6">
          <h2 className="text-accent font-bold tracking-widest text-sm uppercase">Core Capabilities</h2>
          <h3 className="text-4xl lg:text-6xl font-headline font-bold leading-tight">
            Features designed to connect, <br className="hidden md:block" /> collaborate, and grow
          </h3>
          <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
            Everything you need to build, manage, and scale your learning ecosystem in one professional dashboard.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 lg:gap-20">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="relative group"
            >
              {/* Ghost Layer Background */}
              <div className="absolute inset-0 bg-accent/10 rounded-[2.5rem] translate-y-6 translate-x-4 blur-sm group-hover:translate-y-8 group-hover:translate-x-6 transition-all duration-500 -z-10" />
              
              {/* Main Card */}
              <div className="relative glass-card p-10 pt-20 flex flex-col h-full border-white/5 overflow-visible group-hover:translate-y-[-8px] transition-all duration-500 bg-[#141a4b]/40">
                
                {/* Floating Top Icon */}
                <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-24 h-24 rounded-full bg-[#0b0f2f] border-2 border-white/10 flex items-center justify-center shadow-2xl z-20 group-hover:scale-110 transition-transform duration-500">
                  <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                    <feature.icon className={`w-8 h-8 ${feature.color} glow-icon`} />
                  </div>
                </div>

                <div className="space-y-6 flex-1">
                  <h4 className="text-3xl font-bold text-white group-hover:text-accent transition-colors duration-300">
                    {feature.title}
                  </h4>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                <div className="mt-10 pt-6 border-t border-white/5">
                  <button className="flex items-center gap-2 text-accent font-bold text-sm uppercase tracking-widest group/btn hover:opacity-80 transition-opacity">
                    Learn More
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
