
"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowRight, Sparkles, Minus } from "lucide-react";
import { motion } from "framer-motion";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";

export default function PricingPage() {
  const plans = [
    {
      name: "Small School",
      price: "₹300",
      period: "per user / month",
      min: "min ₹1,500/month",
      desc: "Perfect for localized learning centers and small tutoring groups.",
      features: [
        "Student Information System (SIS)",
        "Smart Attendance Management",
        "Academic Performance & Gradebook",
        "Parent–Teacher Communication Portal",
        "Fee & Payment Management",
        "Automated Timetable Scheduling",
        "Analytics & Institutional Reporting",
        "Standard Email Support"
      ],
      cta: "Get Started",
      popular: false,
      color: "from-teal-400 to-cyan-300",
    },
    {
      name: "Growing School",
      price: "₹250",
      period: "per user / month",
      min: "min ₹12,500/month",
      desc: "Optimized for expanding institutions looking to scale digital operations.",
      features: [
        "All Small School Features Included",
        "Advanced Academic Gradebook",
        "Enhanced Parent–Teacher Communication Hub",
        "Comprehensive Fee & Payment Management",
        "Advanced Analytics & Performance Reporting",
        "Learning Management System (LMS) Integration",
        "Priority Email Support"
      ],
      cta: "Contact Sales",
      popular: true,
      color: "from-indigo-500 to-purple-500",
    },
    {
      name: "International School",
      price: "₹500",
      period: "per user / month",
      min: "min ₹10,000/month",
      desc: "For globally recognized campuses requiring multi-region support.",
      features: [
        "All Growing School Features Included",
        "Advanced Communication & Notification Tools",
        "Multi-Currency Fee & Payment Management",
        "Scholarship & Financial Aid Management",
        "Customizable Reports & Data Export",
        "Advanced LMS Integration",
        "Dedicated Customer Support",
        "User Roles & Permission Management"
      ],
      cta: "Talk to Expert",
      popular: false,
      color: "from-pink-500 to-rose-500",
    },
  ];

  const comparisonData = [
    {
      feature: "Minimum Users",
      small: "5 Users (₹1500)",
      growing: "50 Users (₹12,500)",
      intl: "20 Users (₹10,000)",
    },
    {
      feature: "SIS Access",
      small: true,
      growing: true,
      intl: true,
    },
    {
      feature: "Attendance Tracking",
      small: true,
      growing: true,
      intl: true,
    },
    {
      feature: "Gradebook",
      small: "Basic",
      growing: "Advanced",
      intl: "Advanced",
    },
    {
      feature: "Communication",
      small: "Basic",
      growing: "Advanced",
      intl: "Premium",
    },
    {
      feature: "Fee Management",
      small: "Core",
      growing: "Online",
      intl: "Multi-Currency",
    },
    {
      feature: "LMS Integration",
      small: false,
      growing: "Basic",
      intl: "Advanced",
    },
    {
      feature: "Support",
      small: "Email",
      growing: "Priority",
      intl: "Dedicated",
    },
  ];

  const renderVal = (val: string | boolean) => {
    if (typeof val === "boolean") {
      return val ? (
        <div className="flex justify-center"><Check className="w-5 h-5 text-accent drop-shadow-[0_0_8px_rgba(45,212,191,0.5)]" /></div>
      ) : (
        <div className="flex justify-center"><Minus className="w-5 h-5 text-white/20" /></div>
      );
    }
    return <span className="text-sm font-bold text-gray-300">{val}</span>;
  };

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 md:px-6">
      <div className="max-w-7xl mx-auto space-y-24">
        {/* Header */}
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <Badge className="glass text-accent border-white/10 px-4 py-1 uppercase tracking-widest text-[10px] font-black">Pricing Plans</Badge>
          <h1 className="text-5xl md:text-7xl font-headline font-bold leading-tight">Choose Your <span className="text-gradient">Path</span></h1>
          <p className="text-xl text-gray-400 font-medium leading-relaxed">Scale your institution with flexible plans designed for growth and excellence.</p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group relative h-full"
            >
              {plan.popular && (
                <div className="absolute -inset-1 bg-gradient-to-r from-teal-400 via-indigo-500 to-pink-500 rounded-[42px] blur-xl opacity-20 group-hover:opacity-40 transition-opacity" />
              )}

              <div className={cn(
                "relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-[40px] p-8 md:p-10 flex flex-col h-full transition-all duration-500 group-hover:bg-white/10 group-hover:border-white/20 shadow-2xl",
                plan.popular && "ring-2 ring-accent/30"
              )}>
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="flex items-baseline gap-1">
                    <span className={cn("text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-br", plan.color)}>
                      {plan.price}
                    </span>
                    <span className="text-gray-400 text-xs font-bold uppercase tracking-widest">{plan.period}</span>
                  </div>
                  <p className="text-[10px] text-accent mt-2 font-black uppercase tracking-widest">{plan.min}</p>
                </div>

                <div className="flex-1 space-y-4 mb-12">
                  {plan.features.slice(0, 6).map((feature, j) => (
                    <div key={j} className="flex items-center gap-4 group/item">
                      <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 text-accent stroke-[4px]" />
                      </div>
                      <span className="text-sm text-gray-300 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-auto">
                  <Button className={cn(
                    "w-full rounded-full h-16 text-lg font-black border-none transition-all group/btn shadow-xl",
                    plan.popular ? 'bg-accent-gradient hover:opacity-90' : 'glass hover:bg-white/10'
                  )}>
                    {plan.cta} 
                    <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover/btn:translate-x-2" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Comparison Table Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-12 pt-12"
        >
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-headline font-bold">Compare <span className="text-gradient">Capabilities</span></h2>
            <p className="text-gray-400 font-medium">A detailed look at our institutional tools.</p>
          </div>

          <div className="relative group max-w-6xl mx-auto">
            {/* Architectural Layered Effect */}
            <div className="absolute -bottom-4 -right-4 w-full h-full rounded-[40px] bg-accent-gradient opacity-10 -z-10" />

            <div className="glass-card border-white/10 overflow-hidden shadow-2xl bg-gradient-to-br from-[#1e294b] to-[#0f172a]">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader className="bg-white/5">
                    <TableRow className="hover:bg-transparent border-white/10">
                      <TableHead className="w-[260px] text-gray-200 font-black uppercase tracking-[0.2em] text-[10px] py-5 px-6">Features</TableHead>
                      <TableHead className="text-center text-teal-400 font-black uppercase tracking-[0.2em] text-[10px] py-5">Small School</TableHead>
                      <TableHead className="text-center text-indigo-400 font-black uppercase tracking-[0.2em] text-[10px] py-5 bg-white/5">Growing School</TableHead>
                      <TableHead className="text-center text-pink-400 font-black uppercase tracking-[0.2em] text-[10px] py-5">International</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {comparisonData.map((row, idx) => (
                      <TableRow key={idx} className="border-white/5 hover:bg-white/5 transition-colors group/row">
                        <TableCell className="font-bold text-white py-4 px-6 text-base md:text-xl group-hover/row:text-accent transition-colors">
                          {row.feature}
                        </TableCell>
                        <TableCell className="text-center py-4">{renderVal(row.small)}</TableCell>
                        <TableCell className="text-center py-4 bg-white/5">{renderVal(row.growing)}</TableCell>
                        <TableCell className="text-center py-4">{renderVal(row.intl)}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
