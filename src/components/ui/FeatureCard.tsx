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
  const colorMap: Record<string, { text: string; border: string }> = {
    "from-emerald-400": { text: "group-hover:text-emerald-400", border: "border-emerald-400" },
    "from-blue-500": { text: "group-hover:text-blue-500", border: "border-blue-500" },
    "from-pink-500": { text: "group-hover:text-pink-400", border: "border-pink-400" },
    "from-teal-400": { text: "group-hover:text-teal-400", border: "border-teal-400" },
    "from-indigo-500": { text: "group-hover:text-indigo-400", border: "border-indigo-400" },
  };

  const theme = colorMap[gradientFrom] || colorMap["from-teal-400"];

  return (
    <div className={cn("relative group pt-10 md:pt-14 h-full", className)}>
      {/* Tilted card behind */}
      <div className={cn(
        "absolute bottom-0 right-0 w-[92%] md:w-[95%] h-[60px] md:h-[120px] bg-gradient-to-r rounded-[24px] md:rounded-[32px] rotate-[3deg] md:rotate-[6deg] -translate-x-1 translate-y-2 md:translate-y-4 z-0 opacity-60 md:opacity-70 transition-all duration-700 group-hover:rotate-[5deg] md:group-hover:rotate-[8deg] group-hover:translate-y-4 md:group-hover:translate-y-6 group-hover:opacity-100",
        gradientFrom,
        gradientTo
      )}></div>

      {/* Card Container */}
      <div className="relative w-full h-full transition-all duration-500 group-hover:-translate-y-2 z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1e294b] via-[#141d3d] to-[#0f172a] rounded-[24px] md:rounded-[32px] shadow-[0_15px_35px_rgba(0,0,0,0.5)] border border-white/10 overflow-hidden group-hover:shadow-[0_25px_50px_rgba(0,0,0,0.7)] transition-all duration-500">
          <div className="absolute top-0 right-0 w-12 h-12 md:w-16 md:h-16 pointer-events-none">
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-black/30 to-transparent z-20"></div>
            <div className="absolute top-0 right-0 w-0 h-0 border-t-[24px] md:border-t-[32px] border-r-[24px] md:border-r-[32px] border-t-white/10 border-r-transparent z-30"></div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/5 pointer-events-none z-10"></div>
          <div className={cn(
            "absolute -bottom-10 -left-10 w-32 md:w-48 h-32 md:h-48 blur-[60px] md:blur-[80px] opacity-10 md:opacity-20 pointer-events-none z-0 bg-gradient-to-br",
            gradientFrom,
            gradientTo
          )}></div>
        </div>

        <div className="relative px-5 md:px-8 pt-8 md:pt-16 pb-6 md:pb-12 flex flex-col items-center text-center h-full">
          <div className="absolute -top-6 md:-top-12 left-1/2 -translate-x-1/2 w-[56px] h-[56px] md:w-[100px] md:h-[100px] rounded-full bg-gradient-to-b from-[#2d3d6b] to-[#141d3d] flex items-center justify-center border border-white/20 shadow-xl z-50 transition-transform duration-700 group-hover:scale-110 group-hover:rotate-6">
            <div className={cn(
              "absolute inset-0 rounded-full border-2 opacity-20 animate-pulse",
              theme.border
            )}></div>
            <Icon
              className={cn(
                "relative z-10 w-5 h-5 md:w-10 md:h-10 text-white transition-colors duration-500",
                theme.text
              )}
              strokeWidth={1.5}
            />
          </div>

          <h3 className="text-white text-base md:text-2xl font-bold tracking-tight z-20 relative drop-shadow-md group-hover:text-white transition-colors">
            {title}
          </h3>

          <p className="text-[#cfd6ec] text-[10px] md:text-sm leading-relaxed mt-2 md:mt-5 flex-1 z-20 relative font-medium">
            {description}
          </p>

          {href && (
            <div className="mt-4 md:mt-8 pt-2 md:pt-6 w-full flex justify-center z-20 relative">
              <Link href={href} className="w-full">
                <button className="group/btn relative w-full overflow-hidden rounded-xl md:rounded-2xl p-[1px] font-black uppercase tracking-[0.2em] text-[8px] md:text-[10px] transition-all hover:scale-[1.02] active:scale-95">
                  <div className={cn(
                    "absolute inset-0 bg-gradient-to-r opacity-50 transition-opacity group-hover/btn:opacity-100",
                    gradientFrom,
                    gradientTo
                  )} />
                  <div className="relative flex items-center justify-center gap-2 bg-[#0f172a] hover:bg-transparent rounded-[11px] md:rounded-[15px] px-4 py-2 md:py-4 transition-all duration-500">
                    <span className="text-white">Learn More</span>
                    <ArrowRight className="w-3 h-3 md:w-4 md:h-4 transition-all duration-500 group-hover/btn:translate-x-2 text-white" />
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
