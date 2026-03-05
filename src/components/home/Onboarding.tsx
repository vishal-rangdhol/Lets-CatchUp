"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";
import { UserPlus, Target, Users } from "lucide-react";

export function Onboarding() {
  const steps = [
    {
      title: "Sign up for free",
      description: "Get started instantly with our easy registration process. No credit card required to explore.",
      icon: UserPlus,
      color: "text-[#4fd1c5]",
    },
    {
      title: "Set your learning goals",
      description: "Tell us what you want to achieve. Our AI tailors your dashboard to your specific career path.",
      icon: Target,
      color: "text-[#667eea]",
    },
    {
      title: "Collaborate and connect",
      description: "Join communities, work on projects with peers, and start your journey towards technical mastery.",
      icon: Users,
      color: "text-[#f687b3]",
    },
  ];

  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <Badge variant="outline" className="border-accent/30 text-accent">Getting Started</Badge>
          <h2 className="text-3xl md:text-5xl font-headline font-bold">Your path to success</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Three simple steps to unlock your full potential on LetsCatchUp.</p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/10 to-transparent hidden lg:block -translate-y-1/2" />
          
          <div className="grid lg:grid-cols-3 gap-8 relative z-10">
            {steps.map((step, idx) => (
              <div key={idx} className="glass-card p-10 flex flex-col items-center text-center space-y-6 group">
                <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform relative">
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent-gradient flex items-center justify-center text-white font-bold text-sm">
                    {idx + 1}
                  </div>
                  <step.icon className={`w-10 h-10 ${step.color} glow-icon`} />
                </div>
                <h3 className="text-2xl font-bold">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
