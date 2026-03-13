'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, BarChart3, TrendingUp } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 w-full py-12 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Content */}
          <div className="space-y-10 z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-headline font-bold text-white leading-[1.05] tracking-tight">
                Unlock potential <br />
                and <span className="text-gradient">build <br />connections</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-slate-400 max-w-xl leading-relaxed font-medium"
            >
              Lets Catch Up is your all-in-one platform for collaboration and learning — built for schools and startups.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-5"
            >
              <Link href="https://app.letscatchup-kcs.com/">
                <Button
                  size="lg"
                  className="bg-accent-gradient hover:opacity-90 text-white font-black rounded-full px-10 h-16 text-lg transition-all hover:scale-105 border-none shadow-2xl"
                >
                  Get Started <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/#contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-white/5 border-white/10 text-white font-bold rounded-full px-10 h-16 text-lg transition-all hover:bg-white/10"
                >
                  Contact Us
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Right Column: Visual Component */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* 2.4k Live Badge */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-12 right-12 z-20"
            >
              <div className="glass px-4 py-2 rounded-full border-white/20 flex items-center gap-2 shadow-2xl">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-black text-white uppercase tracking-widest">2.4k Live</span>
              </div>
            </motion.div>

            {/* Smart Analytics Card */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-accent via-primary to-rose-400 rounded-[40px] blur-2xl opacity-20 group-hover:opacity-30 transition-opacity" />
              
              <div className="relative glass-card border-white/10 bg-[#1e294b]/80 p-8 md:p-10 w-full max-w-[440px] ml-auto">
                <div className="space-y-8">
                  <div className="bg-accent-gradient w-14 h-14 rounded-2xl flex items-center justify-center shadow-xl">
                    <BarChart3 className="text-white w-8 h-8" />
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-3xl font-bold text-white tracking-tight">Smart Analytics</h3>
                    <p className="text-slate-400 font-medium">
                      Track student progress with real-time AI insights.
                    </p>
                  </div>

                  <div className="space-y-4 pt-4 border-t border-white/5">
                    <div className="flex justify-between items-end">
                      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-accent">Completion</span>
                      <span className="text-sm font-black text-white">88%</span>
                    </div>
                    <Progress value={88} className="h-2.5 bg-white/5">
                      <div className="h-full bg-accent transition-all" />
                    </Progress>
                  </div>
                </div>
              </div>
            </div>

            {/* Subtle floating stats icon */}
            <motion.div 
              animate={{ y: [0, 20, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-10 -left-10 w-24 h-24 glass rounded-[32px] border-white/20 flex items-center justify-center shadow-2xl"
            >
              <TrendingUp className="text-accent w-10 h-10" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
