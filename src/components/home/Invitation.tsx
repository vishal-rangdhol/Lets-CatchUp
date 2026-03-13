
"use client";

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
import { ArrowRight, Sparkles, Target, Rocket } from "lucide-react";
import { cn } from "@/lib/utils";

export function Invitation() {
  const invitations = [
    {
      title: "The 34-Day Immersion",
      desc: "Experience the full operational impact of our ecosystem with a 34-day, risk-free journey. This is a zero-commitment window designed for you to witness the seamless transition from traditional management to high-utility connectivity.",
      icon: Target,
      color: "text-teal-400",
      glowColor: "group-hover:border-teal-400/50",
      hoverText: "group-hover:text-teal-400",
      label: "Operational Impact"
    },
    {
      title: "The Collaborative Future",
      desc: "We are actively seeking visionary institutions and community builders to help us scale this infrastructure. We don't just want users; we want strategic partners ready to architect the next standard of academic and social synergy.",
      icon: Rocket,
      color: "text-indigo-400",
      glowColor: "group-hover:border-indigo-400/50",
      hoverText: "group-hover:text-indigo-400",
      label: "Strategic Partnership"
    },
    {
      title: "Beyond the Digital Noise",
      desc: "It is time to move past the superficial and prioritize intentional connection. Let’s strip away the distractions and focus on what truly adds value to your community.",
      icon: Sparkles,
      color: "text-rose-400",
      glowColor: "group-hover:border-rose-400/50",
      hoverText: "group-hover:text-rose-400",
      label: "Human Centric"
    }
  ];

  return (
    <section className="py-32 px-6 relative overflow-hidden bg-gradient-to-b from-transparent to-[#0b0f2f]/50">
      <div className="max-w-7xl mx-auto space-y-20">
        
        {/* Centered Header Section */}
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Badge variant="outline" className="border-accent/30 text-accent px-6 py-1.5 uppercase tracking-widest text-[10px] font-black bg-accent/5 backdrop-blur-sm">
              The Invitation
            </Badge>
            <h2 className="text-5xl md:text-7xl font-headline font-bold leading-tight tracking-tight text-white">
              Join the <span className="text-gradient">Movement</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-medium">
              We are building the architecture of the next decade. Be part of a transition that prioritizes utility, safety, and human growth over engagement metrics.
            </p>
          </motion.div>
        </div>

        {/* Vertical Accordion Column Layout */}
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-6">
            {invitations.map((inv, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <AccordionItem 
                  value={`invitation-${i}`}
                  className="border-white/10 bg-white/5 rounded-[24px] px-6 md:px-10 border hover:bg-white/10 transition-all duration-300 overflow-hidden group"
                >
                  <AccordionTrigger className="hover:no-underline py-8">
                    <div className="flex items-center gap-6 text-left w-full">
                      <div className={cn(
                        "w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 shadow-xl shrink-0 transition-all duration-500",
                        inv.glowColor
                      )}>
                        <inv.icon className={cn("w-6 h-6 text-gray-400 transition-colors duration-500", inv.hoverText)} />
                      </div>
                      <div className="space-y-1">
                        <Badge variant="outline" className="border-white/10 text-[8px] font-black uppercase tracking-[0.2em] text-gray-400">
                          {inv.label}
                        </Badge>
                        <h3 className={cn(
                          "text-xl md:text-3xl font-headline font-bold text-white transition-colors duration-500",
                          inv.hoverText
                        )}>
                          {inv.title}
                        </h3>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-10 pt-2 px-2 md:px-20">
                    <p className={cn(
                      "text-lg md:text-xl text-gray-400 leading-relaxed font-medium transition-colors duration-500",
                      inv.hoverText
                    )}>
                      {inv.desc}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>

        {/* Action Button Centered */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="flex justify-center pt-8"
        >
          <Link href="/#contact">
            <button className="bg-accent-gradient hover:opacity-90 text-white px-12 py-5 rounded-full font-black uppercase tracking-widest text-xs shadow-2xl transition-all hover:scale-105 active:scale-95 flex items-center gap-3">
              Start Your Journey <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
