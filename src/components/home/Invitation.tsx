'use client';

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import { ArrowRight, Sparkles, Target, Rocket, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export function Invitation() {
  const invitations = [
    {
      title: "The 34-Day Immersion",
      desc: "Experience the full operational impact of our ecosystem with a 34-day, risk-free journey. This is a zero-commitment window designed for you to witness the seamless transition.",
      icon: Target,
      color: "text-amber-400",
      accentBorder: "border-l-amber-400/40",
      glowColor: "lg:group-hover:border-amber-400/50 group-data-[state=open]:border-amber-400/50",
      hoverText: "lg:group-hover:text-amber-400 group-data-[state=open]:text-amber-400",
      label: "Operational Impact",
      bgGradient: "from-amber-400/5 to-transparent"
    },
    {
      title: "The Collaborative Future",
      desc: "We are actively seeking visionary institutions and community builders to help us scale this infrastructure. We want strategic partners to architect the next standard.",
      icon: Rocket,
      color: "text-emerald-400",
      accentBorder: "border-l-emerald-400/40",
      glowColor: "lg:group-hover:border-emerald-400/50 group-data-[state=open]:border-emerald-400/50",
      hoverText: "lg:group-hover:text-emerald-400 group-data-[state=open]:text-emerald-400",
      label: "Strategic Partnership",
      bgGradient: "from-emerald-400/5 to-transparent"
    },
    {
      title: "Beyond the Digital Noise",
      desc: "It is time to move past the superficial and prioritize intentional connection. Let’s strip away the distractions and focus on what truly adds value to your community.",
      icon: Sparkles,
      color: "text-violet-400",
      accentBorder: "border-l-violet-400/40",
      glowColor: "lg:group-hover:border-violet-400/50 group-data-[state=open]:border-violet-400/50",
      hoverText: "lg:group-hover:text-violet-400 group-data-[state=open]:text-violet-400",
      label: "Human Centric",
      bgGradient: "from-violet-400/5 to-transparent"
    }
  ];

  return (
    <section id="invitation" className="py-24 md:py-32 px-6 relative overflow-hidden">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] md:w-[1000px] h-[400px] md:h-[600px] bg-primary/5 rounded-full blur-[100px] md:blur-[160px] -z-10" />

      <div className="max-w-7xl mx-auto space-y-16 md:space-y-20">
        <div className="text-center space-y-6 md:space-y-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4 md:space-y-6"
          >
            <Badge variant="outline" className="border-accent/30 text-accent px-5 py-1.5 uppercase tracking-widest text-[9px] md:text-[10px] font-black bg-accent/5 backdrop-blur-sm">
              The Invitation
            </Badge>
            <h2 className="text-4xl md:text-7xl font-headline font-bold leading-tight tracking-tight text-white">
              Join the <span className="text-gradient">Movement</span>
            </h2>
            <p className="text-[11px] md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-medium">
              We are building the architecture of the next decade. Be part of a transition that prioritizes utility, safety, and human growth.
            </p>
          </motion.div>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-6 md:space-y-12">
            {invitations.map((inv, i) => {
              const Icon = inv.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <AccordionItem value={`invitation-${i}`} className="border-none group">
                    <div className="relative">
                      <div className={cn(
                        "absolute -bottom-2 -right-2 w-full h-full rounded-[24px] md:rounded-[32px] bg-white/5 opacity-0 lg:group-hover:opacity-100 transition-all duration-500 -z-10 group-data-[state=open]:-bottom-3 md:group-data-[state=open]:-bottom-4 group-data-[state=open]:-right-3 md:group-data-[state=open]:-right-4 group-data-[state=open]:bg-accent/10 group-data-[state=open]:opacity-100"
                      )} />

                      <div className={cn(
                        "relative bg-gradient-to-br from-[#1e294b] via-[#141d3d] to-[#0f172a] border border-white/10 rounded-[24px] md:rounded-[32px] transition-all duration-500 overflow-hidden shadow-2xl lg:group-hover:border-white/20 group-data-[state=open]:border-accent/30",
                      )}>
                        <div className={cn("absolute inset-0 bg-gradient-to-br opacity-0 lg:group-hover:opacity-100 transition-opacity pointer-events-none group-data-[state=open]:opacity-100", inv.bgGradient)} />

                        <AccordionTrigger className="hover:no-underline py-6 md:py-8 px-6 md:px-12 [&>svg]:hidden">
                          <div className="flex items-center gap-4 md:gap-6 text-left w-full">
                            <div className={cn(
                              "w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 shadow-xl shrink-0 transition-all duration-500",
                              inv.glowColor
                            )}>
                              <Icon className={cn("w-5 h-5 md:w-7 md:h-7 text-gray-400 transition-colors duration-500", inv.hoverText)} />
                            </div>
                            <div className="space-y-1 flex-1">
                              <Badge variant="outline" className="border-white/10 text-[7px] md:text-[8px] font-black uppercase tracking-[0.2em] text-gray-500">
                                {inv.label}
                              </Badge>
                              <h3 className={cn(
                                "text-base md:text-3xl font-headline font-bold text-white transition-colors duration-500 tracking-tight",
                                inv.hoverText
                              )}>
                                {inv.title}
                              </h3>
                            </div>
                            
                            <div className="flex w-8 h-8 md:w-10 md:h-10 items-center justify-center rounded-full bg-white/5 border border-white/10 transition-all duration-300 lg:group-hover:border-accent/40 group-data-[state=open]:rotate-180 group-data-[state=open]:border-accent/40 shadow-lg shrink-0">
                              <ChevronDown className="w-4 h-4 md:w-5 md:h-5 text-gray-500 lg:group-hover:text-accent group-data-[state=open]:text-accent transition-all" />
                            </div>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="pb-6 md:pb-12 pt-0 px-6 md:px-12">
                          <div className="h-[1px] w-full bg-white/5 mb-4 md:mb-8" />
                          <div className={cn(
                            "relative bg-white/[0.03] border border-white/5 border-l-2 p-4 md:p-10 rounded-xl md:rounded-[2rem] shadow-inner backdrop-blur-sm transition-all duration-500 group-data-[state=open]:translate-y-0 translate-y-4 opacity-0 group-data-[state=open]:opacity-100 overflow-hidden",
                            inv.accentBorder
                          )}>
                            <p className="text-[11px] md:text-xl text-gray-400 leading-relaxed font-medium relative z-10">
                              {inv.desc}
                            </p>
                          </div>
                        </AccordionContent>
                      </div>
                    </div>
                  </AccordionItem>
                </motion.div>
              );
            })}
          </Accordion>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="flex flex-col items-center gap-4 md:gap-6 pt-8 md:pt-12"
        >
          <p className="text-[10px] md:text-sm font-bold text-gray-500 uppercase tracking-[0.3em]">Become a Strategic Partner</p>
          <Link href="/#contact">
            <button className="group relative bg-accent-gradient hover:opacity-90 text-white px-10 md:px-16 py-4 md:py-6 rounded-full font-black uppercase tracking-widest text-[10px] md:text-xs shadow-[0_15px_40px_rgba(45,212,191,0.2)] transition-all hover:scale-105 active:scale-95 flex items-center gap-2 md:gap-3">
              <span className="relative z-10">Start Your Journey</span>
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5 relative z-10 transition-transform group-hover:translate-x-1" />
              <div className="absolute inset-0 rounded-full bg-accent animate-ping opacity-0 lg:group-hover:opacity-10 transition-opacity" />
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
