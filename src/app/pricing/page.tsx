
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
      small: "5 Users (₹1500 / month)",
      growing: "50 Users (₹12,500 / month)",
      intl: "20 Users (₹10,000 / month)",
    },
    {
      feature: "Student Information System",
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
      feature: "Academic Gradebook",
      small: "Basic",
      growing: "Advanced",
      intl: "Advanced",
    },
    {
      feature: "Parent–Teacher Communication",
      small: "Basic Messaging",
      growing: "Messaging + Meetings",
      intl: "Advanced Messaging + Website Integration",
    },
    {
      feature: "Fee Management",
      small: "Core Fee Records",
      growing: "Online Payments + Reminders",
      intl: "Multi-Currency Payments + Scholarships",
    },
    {
      feature: "Timetable Scheduling",
      small: true,
      growing: true,
      intl: true,
    },
    {
      feature: "Reports & Analytics",
      small: "Basic Reports",
      growing: "Advanced Reports",
      intl: "Customizable Reports",
    },
    {
      feature: "LMS Integration",
      small: "Not Included",
      growing: "Basic LMS Integration",
      intl: "Advanced LMS Integration",
    },
    {
      feature: "Support",
      small: "Standard Email Support",
      growing: "Priority Email Support",
      intl: "Dedicated Customer Support",
    },
    {
      feature: "User Roles & Permissions",
      small: "Not Included",
      growing: "Not Included",
      intl: "Role & Permission Management",
    },
  ];

  const renderVal = (val: string | boolean) => {
    if (typeof val === "boolean") {
      return val ? (
        <Check className="w-5 h-5 text-accent mx-auto" />
      ) : (
        <Minus className="w-5 h-5 text-gray-600 mx-auto" />
      );
    }
    return <span className="text-sm font-medium text-gray-300">{val}</span>;
  };

  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto space-y-24">
        {/* Header */}
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <Badge className="glass text-accent border-white/10 px-4 py-1 uppercase tracking-widest text-[10px] font-black">Pricing Plans</Badge>
          <h1 className="text-5xl font-headline font-bold">Choose Your <span className="text-gradient">Path</span></h1>
          <p className="text-xl text-gray-400">Scale your institution with flexible plans designed for growth.</p>
        </div>

        {/* Pricing Cards */}
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
              {plan.popular && (
                <div className="absolute -inset-1 bg-gradient-to-r from-accent via-primary to-accent rounded-[42px] blur-xl opacity-20 group-hover:opacity-40 animate-pulse transition-opacity" />
              )}

              <div className={`relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-[40px] p-10 flex flex-col h-full transition-all duration-500 group-hover:bg-white/10 group-hover:border-white/20 shadow-2xl ${plan.popular ? 'ring-2 ring-accent/30' : ''}`}>
                
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
                      <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center shrink-0 group-hover/item:scale-110 transition-transform">
                        <Check className="w-3.5 h-3.5 text-accent stroke-[3px]" />
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

                <div className={`absolute -bottom-10 -left-10 w-48 h-48 bg-gradient-to-br ${plan.color} blur-[100px] opacity-5 pointer-events-none group-hover:opacity-10 transition-opacity`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Comparison Table Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-16 pt-12"
        >
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-headline font-bold tracking-tight">Compare <span className="text-gradient">Plans</span></h2>
            <p className="text-gray-400 font-medium">A side-by-side look at our institutional capabilities.</p>
          </div>

          <div className="glass-card p-4 md:p-8 border-white/10 overflow-hidden shadow-2xl">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader className="border-white/10 bg-white/5">
                  <TableRow className="hover:bg-transparent border-white/10">
                    <TableHead className="w-[300px] text-gray-400 font-bold uppercase tracking-widest text-[10px] py-6">Features</TableHead>
                    <TableHead className="text-center text-teal-400 font-bold uppercase tracking-widest text-[10px] py-6">Small School</TableHead>
                    <TableHead className="text-center text-primary font-bold uppercase tracking-widest text-[10px] py-6">Growing School</TableHead>
                    <TableHead className="text-center text-rose-400 font-bold uppercase tracking-widest text-[10px] py-6">International School</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {comparisonData.map((row, idx) => (
                    <TableRow key={idx} className="border-white/5 hover:bg-white/5 transition-colors">
                      <TableCell className="font-bold text-white py-6">{row.feature}</TableCell>
                      <TableCell className="text-center py-6">{renderVal(row.small)}</TableCell>
                      <TableCell className="text-center py-6 bg-primary/5">{renderVal(row.growing)}</TableCell>
                      <TableCell className="text-center py-6">{renderVal(row.intl)}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
