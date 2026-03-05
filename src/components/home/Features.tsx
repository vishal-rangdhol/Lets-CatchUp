
"use client";

import React from "react";
import { Network, Settings, Users, Layout } from "lucide-react";

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
        <div className="text-center max-w-4xl mx-auto mb-20 space-y-6">
          <h2 className="text-accent font-bold tracking-widest text-sm uppercase">Core Capabilities</h2>
          <h3 className="text-4xl lg:text-6xl font-headline font-bold leading-tight">
            Features designed to connect, <br className="hidden md:block" /> collaborate, and grow
          </h3>
          <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
            Everything you need to build, manage, and scale your learning ecosystem in one professional dashboard.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {features.map((feature, idx) => (
            <div key={idx} className="glass-card p-10 group relative overflow-hidden hover:translate-y-[-8px] transition-all duration-500">
               {/* Subtle hover glow accent */}
               <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/5 rounded-full blur-[60px] group-hover:bg-accent/15 transition-all duration-500" />
              
              <div className={`w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-8 transition-all duration-500 group-hover:scale-110 group-hover:bg-white/10 shadow-2xl border border-white/5`}>
                <feature.icon className={`w-8 h-8 ${feature.color} glow-icon`} />
              </div>
              
              <h4 className="text-2xl font-bold mb-4 group-hover:text-gradient transition-all duration-300">
                {feature.title}
              </h4>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
