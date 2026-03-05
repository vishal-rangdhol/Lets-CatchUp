"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle2, Layout, Users, Zap } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Decorative Glow Elements */}
      <div className="absolute top-0 right-0 -z-10 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-0 left-0 -z-10 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-10 animate-in fade-in slide-in-from-left duration-1000">
          <Badge variant="secondary" className="bg-white/5 border-white/10 text-accent px-5 py-2 rounded-full backdrop-blur-md">
            🚀 Accelerate Your Growth
          </Badge>
          
          <h1 className="text-5xl lg:text-7xl font-headline font-bold leading-tight tracking-tight">
            Unlock potential and <br />
            <span className="text-gradient">build lasting connections</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-lg leading-relaxed font-medium">
            Lets Catch Up is your all-in-one platform for collaboration, learning, and growth — built to support schools, startups, and communities with powerful, intuitive tools.
          </p>

          <div className="flex flex-wrap gap-5">
            <Link href="/contact">
              <Button size="lg" className="bg-accent-gradient hover:opacity-90 rounded-full px-10 h-16 text-lg font-bold transition-all hover:scale-105 button-glow border-none">
                Get Started <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="rounded-full px-10 h-16 text-lg glass border-white/20 hover:bg-white/10 transition-all">
                Contact Us
              </Button>
            </Link>
          </div>

          <div className="flex items-center gap-8 pt-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <CheckCircle2 className="w-5 h-5 text-accent" />
              <span>Free for teams</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <CheckCircle2 className="w-5 h-5 text-accent" />
              <span>No credit card</span>
            </div>
          </div>
        </div>

        {/* Floating UI Cards */}
        <div className="relative min-h-[500px] flex items-center justify-center animate-in fade-in zoom-in duration-1000">
          {/* Main Large Card */}
          <div className="glass-card w-full max-w-[440px] p-8 space-y-6 relative z-10 rotate-1 shadow-2xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-accent-gradient flex items-center justify-center">
                  <Layout className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-bold text-sm">Main Dashboard</p>
                  <p className="text-[10px] text-muted-foreground">Activity Overview</p>
                </div>
              </div>
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-6 h-6 rounded-full border-2 border-[#141a4b] bg-gray-600" />
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <div className="h-4 w-full bg-white/5 rounded-full overflow-hidden">
                <div className="h-full w-3/4 bg-accent-gradient" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="h-20 rounded-xl bg-white/5 border border-white/10" />
                <div className="h-20 rounded-xl bg-white/5 border border-white/10" />
              </div>
            </div>
          </div>

          {/* Floating Accents */}
          <div className="absolute top-10 -right-4 glass-card p-6 rounded-2xl z-20 floating shadow-xl border-white/20">
            <div className="flex items-center gap-3">
              <div className="bg-primary/20 p-2 rounded-lg">
                <Users className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider">Active Members</p>
                <p className="text-xl font-bold">1,284</p>
              </div>
            </div>
          </div>

          <div className="absolute bottom-10 -left-10 glass-card p-6 rounded-2xl z-20 floating shadow-xl border-white/20" style={{ animationDelay: '1s' }}>
            <div className="flex items-center gap-3">
              <div className="bg-accent/20 p-2 rounded-lg">
                <Zap className="w-5 h-5 text-accent" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider">Productivity</p>
                <p className="text-xl font-bold">+24%</p>
              </div>
            </div>
          </div>

          {/* Background decoration */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-accent/5 rounded-full blur-[80px] -z-10" />
        </div>
      </div>
    </section>
  );
}
