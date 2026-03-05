
"use client";

import React from "react";
import Image from "next/image";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";
import { Badge } from "@/components/ui/badge";
import { Shield, Sparkles, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function AboutPage() {
  const aboutImg = PlaceHolderImages?.find((img) => img.id === "about-img");

  const values = [
    {
      title: "Empowerment & Inclusivity",
      desc: "We believe that every learner, regardless of their background, should have the tools and community support to build their dream career in tech.",
      icon: Sparkles,
      color: "accent",
      gradient: "from-teal-400 to-cyan-300",
    },
    {
      title: "Trust & Transparency",
      desc: "We maintain open communication with our community and focus on delivering measurable educational outcomes that students can trust.",
      icon: Shield,
      color: "primary",
      gradient: "from-indigo-500 to-purple-500",
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
            className="relative group"
          >
            {/* The Horizontal Layered Effect for Image */}
            <div className="absolute -bottom-4 -right-4 w-full h-full rounded-[32px] bg-gradient-to-br from-primary/30 to-accent/30 opacity-40 transition-all duration-500 group-hover:opacity-70 group-hover:-bottom-5 group-hover:-right-5" />
            
            <div className="relative bg-gradient-to-br from-[#1e294b] via-[#141d3d] to-[#0f172a] border border-white/10 rounded-[32px] p-3 shadow-2xl overflow-hidden group-hover:border-white/20 transition-all duration-500">
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
          </motion.div>
        </div>

        <div className="space-y-16">
          <div className="text-center">
            <h2 className="text-4xl lg:text-5xl font-headline font-bold">Our Core Values</h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            {values.map((v, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, x: i === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="relative group h-full"
              >
                {/* Sharp Layered Effect */}
                <div className={cn(
                  "absolute -bottom-4 -right-4 w-full h-full rounded-[32px] bg-gradient-to-br opacity-40 transition-all duration-500 group-hover:opacity-70 group-hover:-bottom-5 group-hover:-right-5",
                  v.gradient
                )} />

                <div className="relative h-full bg-gradient-to-br from-[#1e294b] via-[#141d3d] to-[#0f172a] border border-white/10 rounded-[32px] p-8 md:p-10 shadow-2xl overflow-hidden flex flex-col md:flex-row gap-6 items-center md:items-start group-hover:border-white/20 transition-all duration-500">
                  <div className="relative shrink-0">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-xl">
                      <v.icon className={cn(
                        "w-8 h-8 md:w-10 md:h-10 glow-icon",
                        v.color === "accent" ? "text-accent" : "text-primary"
                      )} />
                    </div>
                  </div>

                  <div className="space-y-4 flex-1 text-center md:text-left">
                    <div className="space-y-2">
                      <h3 className="text-2xl md:text-3xl font-bold tracking-tight">
                        {v.title}
                      </h3>
                      <p className="text-gray-400 text-base md:text-lg leading-relaxed font-medium">
                        {v.desc}
                      </p>
                    </div>

                    <button className={cn(
                      "flex items-center gap-2 font-bold uppercase tracking-widest text-[10px] transition-all group/btn mx-auto md:mx-0",
                      v.color === "accent" ? "text-accent" : "text-primary"
                    )}>
                      <span>Learn more</span>
                      <ArrowRight className="w-3 h-3 transition-transform group-hover/btn:translate-x-1" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
