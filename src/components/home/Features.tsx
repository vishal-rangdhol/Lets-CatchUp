
"use client";

import React from "react";
import { BookOpen, Cpu, Globe, Headphones, ShieldCheck, Zap } from "lucide-react";

export function Features() {
  const features = [
    {
      title: "Comprehensive Curriculum",
      description: "Carefully curated paths designed to take you from beginner to expert in record time.",
      icon: BookOpen,
      color: "text-blue-400",
    },
    {
      title: "AI-Powered Learning",
      description: "Our proprietary AI suggests courses and mentors based on your unique learning style.",
      icon: Cpu,
      color: "text-purple-400",
    },
    {
      title: "Global Community",
      description: "Connect with learners and instructors from over 50 countries around the world.",
      icon: Globe,
      color: "text-emerald-400",
    },
    {
      title: "Real-time Support",
      description: "Our dedicated support team and mentors are available 24/7 to help you succeed.",
      icon: Headphones,
      color: "text-amber-400",
    },
    {
      title: "Secure Certifications",
      description: "Industry-recognized certificates that are verifiable and blockchain-protected.",
      icon: ShieldCheck,
      color: "text-rose-400",
    },
    {
      title: "Interactive Labs",
      description: "Hands-on cloud environments for coding and experimentation right in your browser.",
      icon: Zap,
      color: "text-cyan-400",
    },
  ];

  return (
    <section className="py-24 bg-white/5 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-accent font-bold tracking-widest text-sm uppercase">Why Choose Us</h2>
          <h3 className="text-4xl lg:text-5xl font-headline font-bold">The Future of Education</h3>
          <p className="text-muted-foreground text-lg">
            We've built a platform that combines traditional academic excellence with modern technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="glass-card p-8 rounded-2xl group cursor-default">
              <div className={`w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110`}>
                <feature.icon className={`w-7 h-7 ${feature.color} glow-icon`} />
              </div>
              <h4 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">{feature.title}</h4>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
