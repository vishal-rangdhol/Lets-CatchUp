"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";
import { UserPlus, Target, Users } from "lucide-react";
import { motion } from "framer-motion";

export function Onboarding() {
  const steps = [
    {
      title: "Sign up for free",
      description: "Get started instantly with our easy registration process. Access all our core features immediately.",
      icon: UserPlus,
      color: "from-teal-400 to-cyan-300",
      delay: 0.1,
    },
    {
      title: "Set your goals",
      description: "Tell us what you want to achieve. Our platform tailors your dashboard to your academic path.",
      icon: Target,
      color: "from-indigo-500 to-purple-500",
      delay: 0.2,
    },
    {
      title: "Connect & Grow",
      description: "Join vibrant communities and start your journey towards technical mastery alongside peers.",
      icon: Users,
      color: "from-pink-500 to-rose-500",
      delay: 0.3,
    },
  ];

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-primary/5 rounded-full blur-[160px] -z-10" />

      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20 space-y-4"
        >
          <Badge variant="outline" className="border-accent/30 text-accent px-4 py-1 uppercase tracking-widest text-[10px] font-black">
            The Roadmap
          </Badge>
          <h2 className="text-3xl md:text-5xl font-headline font-bold">Your path to <span className="text-gradient">success</span></h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 relative z-10">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: step.delay, duration: 0.6, ease: "easeOut" }}
              className="group relative"
            >
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-10 rounded-[32px] h-full flex flex-col items-center text-center space-y-6 transition-all duration-500 group-hover:bg-white/10 shadow-2xl">
                <div className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white text-xl font-black shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                  0{idx + 1}
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl md:text-2xl font-bold tracking-tight">{step.title}</h3>
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed font-medium">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
