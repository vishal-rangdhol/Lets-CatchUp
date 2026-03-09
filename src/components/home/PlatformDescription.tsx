"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Globe, Sparkles, Library } from "lucide-react";
import { cn } from "@/lib/utils";

export function PlatformDescription() {
  const targetGroups = [
    { name: "Schools", icon: GraduationCap, color: "text-accent" },
    { name: "Startups", icon: Briefcase, color: "text-primary" },
    { name: "Organizations", icon: Globe, color: "text-rose-400" },
    { name: "Educational Institutes", icon: Library, color: "text-emerald-400" },
  ];

  return (
    <section className="py-32 px-6 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            <div className="space-y-6">
              <Badge variant="outline" className="border-accent/30 text-accent px-6 py-1.5 uppercase tracking-widest text-[10px] font-black bg-accent/5 backdrop-blur-sm">
                About the Platform
              </Badge>
              <h2 className="text-5xl md:text-7xl font-headline font-bold leading-[1.1] tracking-tight text-white">
                Empowering communities through <br />
                <span className="text-gradient">meaningful connection</span>
              </h2>
            </div>

            <div className="flex flex-wrap gap-8 pt-4">
              {targetGroups.map((group, i) => (
                <div key={i} className="flex items-center gap-3 group">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center transition-all group-hover:scale-110 group-hover:border-accent/40 shadow-xl">
                    <group.icon className={cn("w-5 h-5", group.color)} />
                  </div>
                  <span className="text-xs font-black uppercase tracking-widest text-gray-400 group-hover:text-white transition-colors">
                    {group.name}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative group"
          >
            {/* Architectural Layered Effect */}
            <div className="absolute -bottom-6 -right-6 w-full h-full rounded-[40px] bg-accent-gradient opacity-20 transition-all duration-500 group-hover:opacity-30 group-hover:-bottom-8 group-hover:-right-8 -z-10" />
            
            <div className="relative bg-gradient-to-br from-[#1e294b] via-[#141d3d] to-[#0f172a] border border-white/10 rounded-[40px] p-10 md:p-14 shadow-[0_30px_60px_rgba(0,0,0,0.5)] overflow-hidden transition-all duration-500 group-hover:border-white/20">
              {/* Subtle Decorative Icon */}
              <div className="absolute top-8 right-8 text-white/5 group-hover:text-accent/10 transition-colors">
                <Sparkles size={120} strokeWidth={1} />
              </div>

              <div className="relative z-10 space-y-8">
                <div className="w-12 h-1.5 bg-accent-gradient rounded-full" />
                <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-medium tracking-tight">
                  <span className="text-white font-bold">Lets catch up</span> simplifies collaboration across schools, startups, and organizations. 
                  From engaging students to enabling seamless teamwork, our platform helps users stay connected, grow faster, and build <span className="text-accent underline decoration-accent/30 decoration-4 underline-offset-8">meaningful relationships</span> in a secure space.
                </p>
                <div className="flex items-center gap-4 text-accent text-sm font-black uppercase tracking-[0.2em] opacity-60 group-hover:opacity-100 transition-all cursor-pointer">
                  <span>Explore Our Vision</span>
                  <div className="w-8 h-[1px] bg-accent transition-all group-hover:w-12" />
                </div>
              </div>

              {/* Internal Gloss */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
