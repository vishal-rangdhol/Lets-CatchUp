
import React from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  className?: string;
  gradientFrom?: string;
  gradientTo?: string;
}

export function FeatureCard({
  title,
  description,
  icon: Icon,
  className,
  gradientFrom = "from-teal-400",
  gradientTo = "to-cyan-300"
}: FeatureCardProps) {
  return (
    <div className={cn("relative group pt-14 h-full", className)}>
      {/* Tilted card behind - The Secondary Layer (No Blur) */}
      <div className={cn(
        "absolute bottom-0 right-0 w-[95%] h-[120px] bg-gradient-to-r rounded-[32px] rotate-[6deg] -translate-x-1 translate-y-4 z-0 opacity-70 transition-all duration-700 group-hover:rotate-[8deg] group-hover:translate-y-6 group-hover:opacity-100",
        gradientFrom,
        gradientTo
      )}></div>

      {/* Card Container */}
      <div className="relative w-full h-full transition-all duration-500 group-hover:-translate-y-2 z-10">
        
        {/* Visual Shell (Background, Fold, Gloss, Shadows) */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1e294b] via-[#141d3d] to-[#0f172a] rounded-[32px] shadow-[0_20px_50px_rgba(0,0,0,0.6)] border border-white/10 overflow-hidden group-hover:shadow-[0_30px_60px_rgba(0,0,0,0.8)] transition-all duration-500">
          
          {/* Premium Fold Effect (Top Right Corner) */}
          <div className="absolute top-0 right-0 w-16 h-16 pointer-events-none">
            {/* The Crease Shadow */}
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-black/40 to-transparent z-20"></div>
            {/* The Fold Highlight */}
            <div className="absolute top-0 right-0 w-0 h-0 border-t-[32px] border-r-[32px] border-t-white/10 border-r-transparent z-30"></div>
            <div className="absolute top-0 right-0 w-[45px] h-[1px] bg-white/20 rotate-[45deg] origin-top-right z-40"></div>
          </div>

          {/* Glossy Reflection Overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none z-10"></div>

          {/* Subtle Bottom Glow matching the accent color */}
          <div className={cn(
            "absolute -bottom-10 -left-10 w-48 h-48 blur-[80px] opacity-20 pointer-events-none z-0 bg-gradient-to-br",
            gradientFrom,
            gradientTo
          )}></div>
        </div>

        {/* Content layer */}
        <div className="relative px-8 pt-16 pb-12 flex flex-col items-center text-center h-full">
          
          {/* Circle Icon - Elevated and Pop out */}
          <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-[100px] h-[100px] rounded-full bg-gradient-to-b from-[#2d3d6b] to-[#141d3d] flex items-center justify-center border border-white/20 shadow-[0_15px_35px_rgba(0,0,0,0.5)] z-50 transition-transform duration-700 group-hover:scale-110 group-hover:rotate-6">
            <div className={cn(
              "absolute inset-0 rounded-full border-2 opacity-20 animate-pulse",
              gradientFrom.replace('from-', 'border-')
            )}></div>
            <Icon
              size={40}
              strokeWidth={1.5}
              className="text-teal-300 relative z-10"
            />
          </div>

          {/* Title */}
          <h3 className="text-white text-2xl font-bold tracking-tight z-20 relative drop-shadow-md group-hover:text-white transition-colors">
            {title}
          </h3>

          {/* Description */}
          <p className="text-[#cfd6ec] text-sm leading-relaxed mt-5 flex-1 z-20 relative font-medium">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
