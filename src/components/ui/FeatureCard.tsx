import React from 'react';
import { LucideIcon, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  className?: string;
  gradientFrom?: string;
  gradientTo?: string;
  href?: string;
}

export function FeatureCard({
  title,
  description,
  icon: Icon,
  className,
  gradientFrom = "from-teal-400",
  gradientTo = "to-cyan-300",
  href
}: FeatureCardProps) {
  return (
    <div className={cn("relative group pt-10 md:pt-14 h-full", className)}>
      {/* Tilted card behind - The Secondary Layer (No Blur) */}
      <div className={cn(
        "absolute bottom-0 right-0 w-[95%] h-[100px] md:h-[120px] bg-gradient-to-r rounded-[32px] rotate-[6deg] -translate-x-1 translate-y-4 z-0 opacity-70 transition-all duration-700 group-hover:rotate-[8deg] group-hover:translate-y-6 group-hover:opacity-100",
        gradientFrom,
        gradientTo
      )}></div>

      {/* Card Container */}
      <div className="relative w-full h-full transition-all duration-500 group-hover:-translate-y-2 z-10">
        
        {/* Visual Shell (Background, Fold, Gloss, Shadows) */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1e294b] via-[#141d3d] to-[#0f172a] rounded-[32px] shadow-[0_20px_50px_rgba(0,0,0,0.6)] border border-white/10 overflow-hidden group-hover:shadow-[0_30px_60px_rgba(0,0,0,0.8)] transition-all duration-500">
          
          {/* Premium Fold Effect (Top Right Corner) */}
          <div className="absolute top-0 right-0 w-12 h-12 md:w-16 md:h-16 pointer-events-none">
            {/* The Crease Shadow */}
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-black/40 to-transparent z-20"></div>
            {/* The Fold Highlight */}
            <div className="absolute top-0 right-0 w-0 h-0 border-t-[24px] md:border-t-[32px] border-r-[24px] md:border-r-[32px] border-t-white/10 border-r-transparent z-30"></div>
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
        <div className="relative px-6 md:px-8 pt-12 md:pt-16 pb-8 md:pb-12 flex flex-col items-center text-center h-full">
          
          {/* Circle Icon - Elevated and Pop out */}
          <div className="absolute -top-10 md:-top-12 left-1/2 -translate-x-1/2 w-[80px] h-[80px] md:w-[100px] md:h-[100px] rounded-full bg-gradient-to-b from-[#2d3d6b] to-[#141d3d] flex items-center justify-center border border-white/20 shadow-[0_15px_35px_rgba(0,0,0,0.5)] z-50 transition-transform duration-700 group-hover:scale-110 group-hover:rotate-6">
            <div className={cn(
              "absolute inset-0 rounded-full border-2 opacity-20 animate-pulse",
              gradientFrom.replace('from-', 'border-')
            )}></div>
            <Icon
              className="text-teal-300 relative z-10 w-8 h-8 md:w-10 md:h-10"
              strokeWidth={1.5}
            />
          </div>

          {/* Title */}
          <h3 className="text-white text-xl md:text-2xl font-bold tracking-tight z-20 relative drop-shadow-md group-hover:text-white transition-colors">
            {title}
          </h3>

          {/* Description */}
          <p className="text-[#cfd6ec] text-xs md:text-sm leading-relaxed mt-4 md:mt-5 flex-1 z-20 relative font-medium">
            {description}
          </p>

          {/* Learn More Link - Enhanced for engaging UI */}
          {href && (
            <div className="mt-6 md:mt-8 pt-4 md:pt-6 w-full flex justify-center z-20 relative">
              <Link href={href} className="w-full">
                <button className="group/btn relative w-full overflow-hidden rounded-2xl p-[1px] font-black uppercase tracking-[0.2em] text-[10px] transition-all hover:scale-[1.02] active:scale-95">
                  {/* Animated Border Gradient */}
                  <div className={cn(
                    "absolute inset-0 bg-gradient-to-r opacity-50 transition-opacity group-hover/btn:opacity-100",
                    gradientFrom,
                    gradientTo
                  )} />
                  
                  {/* Content Container */}
                  <div className="relative flex items-center justify-center gap-3 bg-[#0f172a] hover:bg-transparent rounded-[15px] px-4 md:px-6 py-3 md:py-4 transition-all duration-500">
                    <span className="text-white">Learn More</span>
                    <ArrowRight className="w-4 h-4 text-accent transition-transform duration-500 group-hover/btn:translate-x-2 group-hover/btn:text-white" />
                  </div>
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
