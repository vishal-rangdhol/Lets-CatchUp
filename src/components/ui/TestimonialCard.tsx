import React from 'react';
import { Quote, Star } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface TestimonialCardProps {
  name: string;
  role: string;
  quote: string;
  initials: string;
  className?: string;
  index?: number;
  rating?: number;
  avatarUrl?: string;
  avatarHint?: string;
}

export function TestimonialCard({
  name,
  role,
  quote,
  initials,
  className,
  index = 0,
  rating = 5,
  avatarUrl,
  avatarHint
}: TestimonialCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={{ y: -8 }}
      className={cn("relative group pt-10 h-full", className)}
    >
      {/* Tilted card behind - Sharp Layered Effect (No Blur) */}
      <div className="absolute bottom-0 right-0 w-[95%] h-[100px] md:h-[120px] bg-gradient-to-r from-primary/30 to-accent/30 rounded-[32px] rotate-[5deg] -translate-x-1 translate-y-4 z-0 opacity-60 transition-all duration-500 group-hover:rotate-[7deg] group-hover:translate-y-6 group-hover:opacity-100"></div>

      {/* Main Card Shell */}
      <div className="relative h-full bg-gradient-to-br from-[#1e294b] via-[#141d3d] to-[#0f172a] rounded-[32px] border border-white/10 p-6 md:p-10 flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden z-10 transition-all duration-500 group-hover:border-accent/40 group-hover:shadow-[0_30px_60px_rgba(0,0,0,0.7)]">
        
        {/* Stylized Quote Icon Background */}
        <div className="absolute top-6 right-8 opacity-5 group-hover:opacity-10 transition-opacity">
          <Quote size={80} className="text-white fill-white md:hidden" />
          <Quote size={100} className="text-white fill-white hidden md:block" />
        </div>

        <div className="space-y-4 md:space-y-6 relative z-10">
          {/* Golden Star Rating */}
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((s) => (
              <motion.div
                key={s}
                whileHover={{ scale: 1.3, rotate: 15 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <Star className={cn(
                  "w-4 h-4 md:w-5 md:h-5 drop-shadow-[0_0_8px_rgba(255,215,0,0.4)]",
                  s <= rating ? "text-golden fill-golden" : "text-white/20 fill-none"
                )} />
              </motion.div>
            ))}
          </div>

          {/* Review Text */}
          <p className="text-lg md:text-2xl text-gray-200 italic leading-relaxed font-medium tracking-tight">
            "{quote}"
          </p>
        </div>

        {/* User Identity Section */}
        <div className="flex items-center gap-4 md:gap-5 mt-8 md:mt-12 pt-6 md:pt-8 border-t border-white/5 relative z-10">
          <div className="relative">
            <Avatar className="w-12 h-12 md:w-16 md:h-16 border-2 border-accent/20 group-hover:border-accent/60 transition-colors shadow-lg">
              {avatarUrl && (
                <AvatarImage 
                  src={avatarUrl} 
                  alt={name} 
                  className="object-cover"
                  data-ai-hint={avatarHint}
                />
              )}
              <AvatarFallback className="bg-accent/10 text-accent font-bold text-lg md:text-xl uppercase tracking-tighter">
                {initials}
              </AvatarFallback>
            </Avatar>
            {/* Status indicator */}
            <div className="absolute -bottom-1 -right-1 w-4 h-4 md:w-5 md:h-5 bg-emerald-500 border-2 border-[#141d3d] rounded-full shadow-md" />
          </div>
          <div>
            <p className="font-bold text-white text-lg md:text-xl group-hover:text-accent transition-colors duration-300 tracking-tight">
              {name}
            </p>
            <p className="text-[10px] md:text-sm text-muted-foreground font-bold uppercase tracking-widest opacity-80">
              {role}
            </p>
          </div>
        </div>
        
        {/* Premium Gloss Overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none z-0"></div>
      </div>
    </motion.div>
  );
}
