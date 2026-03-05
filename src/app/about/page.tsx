"use client";

import React from "react";
import Image from "next/image";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";
import { Badge } from "@/components/ui/badge";
import { Shield, Sparkles } from "lucide-react";

export default function AboutPage() {
  const aboutImg = PlaceHolderImages?.find((img) => img.id === "about-img");

  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto space-y-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <Badge variant="secondary" className="glass text-accent px-4 py-1 border-white/10">
              Our Story
            </Badge>
            <h1 className="text-5xl md:text-7xl font-headline font-bold leading-tight">
              The journey of <span className="text-gradient">Lets Catch Up</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              Founded with the vision to democratize technical education, Lets Catch Up started as a small project to bridge the gap between classroom learning and industry requirements. Today, we are a unified ecosystem empowering thousands of students and educators worldwide.
            </p>
          </div>
          <div className="relative">
            <div className="glass-card p-3 rotate-3 relative z-10 overflow-hidden">
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
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
          </div>
        </div>

        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-4xl font-headline font-bold">Our Core Values</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-card p-10 space-y-6 group">
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                <Sparkles className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-2xl font-bold">Empowerment & Inclusivity</h3>
              <p className="text-gray-400 leading-relaxed">
                We believe that every learner, regardless of their background, should have the tools and community support to build their dream career in tech.
              </p>
            </div>
            <div className="glass-card p-10 space-y-6 group">
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Shield className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Trust & Transparency</h3>
              <p className="text-gray-400 leading-relaxed">
                We maintain open communication with our community and focus on delivering measurable educational outcomes that students can trust.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
