"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

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
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <Badge className="glass text-accent border-white/10">Pricing Plans</Badge>
          <h1 className="text-5xl font-headline font-bold">Choose Your <span className="text-gradient">Path</span></h1>
          <p className="text-xl text-gray-400">Scale your institution with flexible plans designed for growth.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <div key={i} className={`glass-card p-10 flex flex-col relative ${plan.popular ? 'border-accent/40 scale-105 z-10' : 'border-white/5'}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <Badge className="bg-accent-gradient text-white border-none py-1 px-4">Recommended</Badge>
                </div>
              )}
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-gray-400 text-xs">{plan.period}</span>
                </div>
                <p className="text-xs text-accent mt-2 font-bold">{plan.min}</p>
                <p className="text-sm text-gray-400 mt-4">{plan.desc}</p>
              </div>
              <div className="flex-1 space-y-4 mb-10">
                {plan.features.map((feature, j) => (
                  <div key={j} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-accent shrink-0" />
                    <span className="text-sm text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
              <Button className={`w-full rounded-full h-12 text-lg font-bold border-none transition-all ${plan.popular ? 'bg-accent-gradient hover:opacity-90' : 'glass hover:bg-white/10'}`}>
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
