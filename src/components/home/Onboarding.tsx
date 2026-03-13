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
      glow: "shadow-teal-500/20",
      delay: 0.1,
    },
    {
      title: "Set your goals",
      description: "Tell us what you want to achieve. Our platform tailors your dashboard to your specific academic or professional path.",
      icon: Target,
      color: "from-indigo-500 to-purple-500",
      glow: "shadow-indigo-500/20",
      delay: 0.2,
    },
    {
      title: "Connect & Grow",
      description: "Join vibrant communities and start your journey towards technical mastery alongside peers and mentors.",
      icon: Users,
      color: "from-pink-500 to-rose-500",
      glow: "shadow-pink-500/20",
      delay: 0.3,
    },
  ];

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-primary/5 rounded-full blur-[160px] -z-10" />

      <div className="max-w-7xl auto">
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

        <div className="relative">
          <div className="absolute top-1/2 left-0 w-full h-[2px] hidden lg:block -translate-y-1/2 overflow-hidden px-20">
            <motion.div 
              initial={{ x: "-100%" }}
              whileInView={{ x: "0%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="w-full h-full bg-gradient-to-r from-teal-400 via-indigo-500 to-pink-500 opacity-20"
            />
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12 relative z-10">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9, y: idx % 2 === 0 ? 20 : -20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: step.delay, duration: 0.6, type: "spring" }}
                className="group relative"
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white hidden lg:block z-20">
                  <div className={`absolute inset-0 rounded-full animate-ping bg-gradient-to-r ${step.color}`} />
                </div>

                <div className={`relative bg-white/5 backdrop-blur-xl border border-white/10 p-6 md:p-8 lg:p-10 rounded-[32px] md:rounded-[40px] h-full flex flex-col items-center text-center space-y-4 md:space-y-6 transition-all duration-500 group-hover:bg-white/10 group-hover:border-white/20 shadow-2xl ${step.glow}`}>
                  <div className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl md:rounded-3xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white text-lg md:text-xl font-black shadow-lg rotate-3 group-hover:rotate-6 transition-transform`}>
                    0{idx + 1}
                  </div>

                  <motion.div 
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: idx * 0.5 }}
                    className="p-3 md:p-4 rounded-full bg-white/5 border border-white/10 relative"
                  >
                    <step.icon className="w-6 h-6 md:w-8 md:h-8 text-white opacity-80" />
                    <div className={`absolute inset-0 bg-gradient-to-br ${step.color} blur-xl opacity-20 group-hover:opacity-40 transition-opacity rounded-full`} />
                  </motion.div>

                  <div className="space-y-2 md:space-y-3">
                    <h3 className="text-lg md:text-xl font-bold tracking-tight">{step.title}</h3>
                    <p className="text-gray-400 text-[10px] md:text-sm leading-relaxed font-medium">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
