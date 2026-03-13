
'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Settings, Users, GraduationCap } from 'lucide-react';

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
              Building a unified, secure ecosystem where education meets community — without the algorithmic noise.
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
                  className="bg-white/5 border-white/10 text-white font-bold rounded-full px-10 h-16 text-lg transition-all hover:bg-white/10 hover:text-accent hover:border-accent/40"
                >
                  Get in touch
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Right Column: Dynamic Floating LMS Objects */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative h-[500px] flex items-center justify-center"
          >
            {/* Abstract LMS Object (Using a central floating element) */}
            <div className="relative z-20 group">
              <div className="absolute -inset-8 bg-accent-gradient opacity-10 blur-3xl rounded-full group-hover:opacity-20 transition-opacity" />
              
              <motion.div
                animate={{ 
                  y: [0, -20, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="relative w-72 h-72 glass rounded-[64px] border-white/10 flex flex-col items-center justify-center gap-6 shadow-2xl overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
                <div className="bg-accent-gradient w-20 h-20 rounded-3xl flex items-center justify-center shadow-xl">
                  <GraduationCap className="text-white w-10 h-10" />
                </div>
                <div className="text-center space-y-1">
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-accent">Unified Learning</p>
                  <p className="text-2xl font-bold text-white tracking-tight">The Ecosystem</p>
                </div>
              </motion.div>
            </div>

            {/* Floating Objects */}
            {/* Collaboration Badge */}
            <motion.div 
              animate={{ y: [0, -15, 0], rotate: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute top-1/4 -left-10 w-32 h-32 glass rounded-[32px] border-white/20 flex flex-col items-center justify-center shadow-2xl z-10"
            >
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-2">
                <Users className="text-accent w-6 h-6" />
              </div>
              <span className="text-[8px] font-black uppercase tracking-widest text-white text-center px-2">Collaboration</span>
            </motion.div>

            {/* Management Hub */}
            <motion.div 
              animate={{ y: [0, 20, 0], rotate: [0, 8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-1/4 -right-10 w-32 h-32 glass rounded-[40px] border-white/20 flex flex-col items-center justify-center shadow-2xl z-10"
            >
              <div className="w-14 h-14 rounded-full bg-accent-gradient flex items-center justify-center mb-2 shadow-lg">
                <Settings className="text-white w-7 h-7" />
              </div>
              <span className="text-[8px] font-black uppercase tracking-widest text-white text-center px-2">Management</span>
            </motion.div>

            {/* Background Glow Rings */}
            <div className="absolute inset-0 flex items-center justify-center -z-10">
              <motion.div 
                animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="w-[400px] h-[400px] rounded-full border border-white/5" 
              />
              <div className="absolute w-[500px] h-[500px] rounded-full border border-white/5 opacity-30" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
