
"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function PricingPage() {
  const plans = [
    {
      name: "Small School",
      price: "₹300",
      period: "per user / month",
      min: "min ₹1,500/month",
      desc: "Perfect for localized learning centers.",
      features: ["Up to 50 students", "Basic LMS tools", "Community forums", "Standard support"],
      cta: "Get Started",
      popular: false,
      color: "from-teal-400 to-cyan-300",
    },
    {
      name: "Growing School",
      price: "₹250",
      period: "per user / month",
      min: "min ₹12,500/month",
      desc: "Optimized for expanding institutions.",
      features: ["Unlimited students", "Advanced Analytics", "Custom branding", "Priority support", "AI Learning Paths"],
      cta: "Contact Sales",
      popular: true,
      color: "from-indigo-500 to-purple-500",
    },
    {
      name: "International School",
      price: "₹500",
      period: "per user / month",
      min: "min ₹10,000/month",
      desc: "For globally recognized campuses.",
      features: ["Multilingual support", "Global data hosting", "SSO & Security", "Dedicated manager", "Research tools"],
      cta: "Talk to Expert",
      popular: false,
      color: "from-pink-500 to-rose-500",
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <Badge className="glass text-accent border-white/10 px-4 py-1">Pricing Plans</Badge>
          <h1 className="text-5xl font-headline font-bold">Choose Your <span className="text-gradient">Path</span></h1>
          <p className="text-xl text-gray-400">Scale your institution with flexible plans designed for growth.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: i * 0.1, 
                type: "spring", 
                stiffness: 200, 
                damping: 20 
              }}
              whileHover={{ scale: 1.02, y: -10 }}
              className="group relative h-full"
            >
              {/* Pulsing Glow for Popular Plan */}
              {plan.popular && (
                <div className="absolute -inset-1 bg-gradient-to-r from-accent via-primary to-accent rounded-[42px] blur-xl opacity-20 group-hover:opacity-40 animate-pulse transition-opacity" />
              )}

              {/* The "Success Card" Rounded-Tab Design */}
              <div className={`relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-[40px] p-10 flex flex-col h-full transition-all duration-500 group-hover:bg-white/10 group-hover:border-white/20 shadow-2xl ${plan.popular ? 'ring-2 ring-accent/30' : ''}`}>
                
                {/* Top Glossy Lip */}
                <div className="absolute top-0 left-10 right-10 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent z-20" />
                
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-30">
                    <Badge className="bg-accent-gradient text-white border-none py-1.5 px-6 shadow-xl flex items-center gap-2 font-black uppercase tracking-wider text-[10px]">
                      <Sparkles className="w-3 h-3" />
                      Recommended
                    </Badge>
                  </div>
                )}

                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="flex items-baseline gap-1">
                    <span className={`text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-br ${plan.color}`}>
                      {plan.price}
                    </span>
                    <span className="text-gray-400 text-xs font-medium">{plan.period}</span>
                  </div>
                  <p className="text-[10px] text-accent mt-2 font-black uppercase tracking-widest">{plan.min}</p>
                  <p className="text-sm text-gray-400 mt-6 leading-relaxed font-medium">{plan.desc}</p>
                </div>

                <div className="flex-1 space-y-5 mb-12">
                  {plan.features.map((feature, j) => (
                    <div key={j} className="flex items-center gap-4 group/item">
                      <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${plan.color} flex items-center justify-center shrink-0 shadow-lg group-hover/item:scale-110 transition-transform`}>
                        <Check className="w-3.5 h-3.5 text-white stroke-[3px]" />
                      </div>
                      <span className="text-sm text-gray-300 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-auto">
                  <Button className={`w-full rounded-full h-16 text-lg font-black border-none transition-all group/btn shadow-xl ${plan.popular ? 'bg-accent-gradient hover:shadow-accent/20' : 'glass hover:bg-white/10'}`}>
                    {plan.cta} 
                    <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover/btn:translate-x-2" />
                  </Button>
                </div>

                {/* Ambient glow matching plan theme */}
                <div className={`absolute -bottom-10 -left-10 w-48 h-48 bg-gradient-to-br ${plan.color} blur-[100px] opacity-5 pointer-events-none group-hover:opacity-10 transition-opacity`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
