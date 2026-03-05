
"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Play, Star } from "lucide-react";
import Image from "next/image";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";

export function Hero() {
  const heroImage = PlaceHolderImages.find((img) => img.id === "hero-bg");

  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 -z-10 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 -z-10 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <Badge variant="secondary" className="bg-white/5 border-white/10 text-accent px-4 py-1.5 rounded-full backdrop-blur-sm">
            🚀 Your Future Starts Here
          </Badge>
          
          <h1 className="text-5xl lg:text-7xl font-headline font-bold leading-[1.1] text-gradient">
            Master Skills That <br />
            <span className="text-accent">Define Tomorrow.</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
            LetsCatchUp Learn provides world-class courses designed by industry experts. Join thousands of students accelerating their careers.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 rounded-full px-8 h-14 text-lg">
              Enroll Now <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 h-14 text-lg glass border-white/20">
              <Play className="mr-2 w-5 h-5 fill-current" /> Watch Intro
            </Button>
          </div>

          <div className="flex items-center gap-6 pt-4">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-background overflow-hidden">
                  <Image
                    src={`https://picsum.photos/seed/${i + 10}/100/100`}
                    alt="User"
                    width={40}
                    height={40}
                  />
                </div>
              ))}
            </div>
            <div className="text-sm">
              <div className="flex items-center gap-1 text-accent">
                {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="w-3 h-3 fill-current" />)}
              </div>
              <p className="text-muted-foreground font-medium">Trusted by 10k+ Learners</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="glass-card rounded-3xl p-4 rotate-2 relative z-10">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              {heroImage && (
                <Image
                  src={heroImage.imageUrl}
                  alt={heroImage.description}
                  fill
                  className="object-cover"
                  data-ai-hint={heroImage.imageHint}
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </div>
          </div>
          {/* Floating elements */}
          <div className="absolute -top-6 -right-6 glass-card p-4 rounded-2xl z-20 animate-bounce delay-700">
            <div className="bg-accent rounded-lg p-2 mb-2">
              <Star className="text-background w-5 h-5" />
            </div>
            <p className="text-xs font-bold">Top Rated Course</p>
          </div>
          <div className="absolute -bottom-6 -left-6 glass-card p-6 rounded-2xl z-20 animate-pulse">
            <p className="text-2xl font-bold font-headline text-accent">85%</p>
            <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold">Success Rate</p>
          </div>
        </div>
      </div>
    </section>
  );
}
