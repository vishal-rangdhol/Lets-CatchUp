'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 md:pt-32 pb-16 overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-20 right-0 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-primary/10 rounded-full blur-[80px] md:blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-accent/10 rounded-full blur-[80px] md:blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column: Content */}
          <div className="space-y-8 md:space-y-10 z-10 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-headline font-bold text-white leading-[1.1] tracking-tight">
                Unlock potential <br className="hidden sm:block" />
                and <span className="text-gradient">build <br className="hidden lg:block" />connections</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base md:text-xl text-slate-400 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium"
            >
              Building a unified, secure ecosystem where education meets community — without the algorithmic noise.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 md:gap-5"
            >
              <Link href="https://app.letscatchup-kcs.com/">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-accent-gradient hover:opacity-90 text-white font-black rounded-full px-10 h-14 md:h-16 text-base md:text-lg transition-all hover:scale-105 border-none shadow-2xl"
                >
                  Get Started <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/#contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto bg-white/5 border-white/10 text-white font-bold rounded-full px-10 h-14 md:h-16 text-base md:text-lg transition-all hover:bg-white/10 hover:text-accent hover:border-accent/40"
                >
                  Get in touch
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Right Column: Brand Image (image.png) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative h-[400px] md:h-[600px] flex items-center justify-center mt-12 lg:mt-0"
          >
            <div className="relative z-20 group">
              <div className="absolute -inset-12 md:-inset-20 bg-accent-gradient opacity-10 blur-[100px] rounded-full group-hover:opacity-25 transition-opacity duration-1000" />
              
              <motion.div
                animate={{ 
                  y: [0, -20, 0],
                  rotate: [0, 2, 0],
                  scale: [1, 1.02, 1]
                }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[450px] md:h-[450px] flex items-center justify-center"
              >
                <Image
                  src="/image.png"
                  alt="Let's Catch Up Brand Logo"
                  fill
                  className="object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.5)]"
                  priority
                />
                
                {/* Decorative particles orbiting the logo */}
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 border border-white/5 rounded-full"
                />
                <motion.div 
                  animate={{ rotate: -360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  className="absolute -inset-10 border border-white/5 rounded-full opacity-50"
                />
              </motion.div>
            </div>

            {/* Background Glow Rings */}
            <div className="absolute inset-0 flex items-center justify-center -z-10">
              <motion.div 
                animate={{ scale: [1, 1.1, 1], opacity: [0.05, 0.15, 0.05] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="w-[400px] md:w-[600px] h-[400px] md:h-[600px] rounded-full border border-white/10" 
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
