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
      {/* Tilted card behind - The "Shadow" Glow Layer */}
      <div className={cn(
        "absolute bottom-0 right-0 w-[95%] h-[120px] bg-gradient-to-r rounded-[32px] rotate-[6deg] -translate-x-1 translate-y-4 z-0 opacity-60 blur-[2px] transition-all duration-700 group-hover:rotate-[8deg] group-hover:translate-y-6 group-hover:opacity-80",
        gradientFrom,
        gradientTo
      )}></div>

      {/* Card Container */}
      <div className="relative w-full h-full transition-all duration-500 group-hover:-translate-y-2 z-10">
        
        {/* Visual Shell (Background, Fold, Gloss, Shadows) - This handles overflow for effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#3a4b7c] via-[#2d3d6b] to-[#24335c] rounded-[32px] shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 overflow-hidden group-hover:shadow-[0_30px_60px_rgba(0,0,0,0.6)] transition-all duration-500">
          
          {/* Premium Fold Effect (Top Right Corner) */}
          <div className="absolute top-0 right-0 w-16 h-16 pointer-events-none">
            {/* The Crease Shadow */}
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-black/20 to-transparent z-20"></div>
            {/* The Fold Highlight */}
            <div className="absolute top-0 right-0 w-0 h-0 border-t-[32px] border-r-[32px] border-t-white/10 border-r-transparent z-30"></div>
            <div className="absolute top-0 right-0 w-[45px] h-[1px] bg-white/20 rotate-[45deg] origin-top-right z-40"></div>
          </div>

          {/* Glossy Reflection Overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none z-10"></div>

          {/* Subtle Bottom Glow */}
          <div className={cn(
            "absolute -bottom-10 -left-10 w-32 h-32 blur-[60px] opacity-20 pointer-events-none z-0 bg-gradient-to-br",
            gradientFrom,
            gradientTo
          )}></div>
        </div>

        {/* Content layer - No overflow-hidden here so icon can pop out */}
        <div className="relative px-8 pt-16 pb-10 flex flex-col items-center text-center h-full">
          
          {/* Circle Icon - Elevated and Pop out */}
          <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-[100px] h-[100px] rounded-full bg-gradient-to-b from-[#3d4e84] to-[#2d3d6b] flex items-center justify-center border border-white/20 shadow-[0_10px_30px_rgba(0,0,0,0.4)] z-50 transition-transform duration-700 group-hover:scale-110 group-hover:rotate-6">
            <div className="absolute inset-0 rounded-full border-2 border-teal-400/20 animate-pulse"></div>
            <Icon
              size={40}
              strokeWidth={1.5}
              className="text-teal-300 relative z-10"
            />
          </div>

          {/* Title */}
          <h3 className="text-white text-2xl font-bold tracking-tight z-20 relative drop-shadow-md">
            {title}
          </h3>

          {/* Description */}
          <p className="text-[#cfd6ec] text-sm leading-relaxed mt-5 flex-1 z-20 relative font-medium">
            {description}
          </p>

          {/* CTA with refined interaction */}
          <button className="text-teal-300 text-xs mt-8 tracking-[0.2em] font-black hover:text-white transition-all uppercase flex items-center gap-2 group/btn z-20 relative">
            <span>LEARN MORE</span>
            <div className="w-5 h-[1px] bg-teal-300 transition-all group-hover/btn:w-8 group-hover/btn:bg-white"></div>
          </button>
        </div>
      </div>
    </div>
  );
}
