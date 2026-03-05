
"use client";

import React from "react";
import Image from "next/image";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";
import { Badge } from "@/components/ui/badge";
import { Shield, Sparkles, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutPage() {
  const aboutImg = PlaceHolderImages?.find((img) => img.id === "about-img");

  const values = [
    {
      title: "Empowerment & Inclusivity",
      desc: "We believe that every learner, regardless of their background, should have the tools and community support to build their dream career in tech.",
      icon: Sparkles,
      color: "from-teal-400 to-cyan-300",
    },
    {
      title: "Trust & Transparency",
      desc: "We maintain open communication with our community and focus on delivering measurable educational outcomes that students can trust.",
      icon: Shield,
      color: "from-indigo-500 to-purple-500",
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto space-y-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <Badge variant="secondary" className="glass text-accent px-4 py-1 border-white/10">
              Our Story
            </Badge>
            <h1 className="text-5xl md:text-7xl font-headline font-bold leading-tight">
              The journey of <span className="text-gradient">Lets Catch Up</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed font-medium">
              Founded with the vision to democratize technical education, Lets Catch Up started as a small project to bridge the gap between classroom learning and industry requirements. Today, we are a unified ecosystem empowering thousands of students and educators worldwide.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div className="glass-card p-3 rotate-3 relative z-10 overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.5)]">
              <div className="relative rounded-[20px] overflow-hidden aspect-video">
                {aboutImg && (
                  <Image
                    src={aboutImg.imageUrl}
                    alt={aboutImg.description}
                    fill
                    className="object-cover"
                    data-ai-hint={aboutImg.imageHint}
                  />
                )}
              </div>
            </div>
            <div className="absolute -top-6 -right-6 w-48 h-48 bg-primary/20 rounded-full blur-[100px]" />
          </motion.div>
        </div>

        <div className="space-y-16">
          <div className="text-center">
            <h2 className="text-4xl lg:text-5xl font-headline font-bold">Our Core Values</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-10">
            {values.map((v, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group relative"
              >
                {/* The "Success Card" Rounded-Tab Design */}
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 p-12 rounded-[40px] h-full flex flex-col items-center text-center space-y-8 transition-all duration-500 group-hover:bg-white/10 group-hover:border-white/20 shadow-2xl">
                  
                  {/* Top Glossy Lip */}
                  <div className="absolute top-0 left-10 right-10 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent z-20" />

                  {/* Icon with Floating Animation */}
                  <motion.div 
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
                    className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${v.color} flex items-center justify-center text-white shadow-xl rotate-3 group-hover:rotate-6 transition-transform`}
                  >
                    <v.icon className="w-10 h-10" />
                  </motion.div>

                  <div className="space-y-4">
                    <h3 className="text-3xl font-bold tracking-tight">{v.title}</h3>
                    <p className="text-gray-400 text-lg leading-relaxed font-medium">
                      {v.desc}
                    </p>
                  </div>

                  <div className="pt-4 mt-auto">
                    <button className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] opacity-40 group-hover:opacity-100 transition-all text-white">
                      <span>Learn more</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
                    </button>
                  </div>

                  {/* Ambient inner glow */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${v.color} blur-3xl opacity-5 rounded-[40px] pointer-events-none`} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
