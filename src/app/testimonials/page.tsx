"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { TestimonialCard } from "@/components/ui/TestimonialCard";

export default function TestimonialsPage() {
  const testimonials = [
    {
      name: "Meera Sinha",
      role: "Education Consultant",
      quote: "The platform's focus on meaningful connection has made a huge difference in our student engagement levels. It's truly transformative for the modern classroom.",
      initials: "MS",
    },
    {
      name: "Rohan Mehta",
      role: "Startup Founder",
      quote: "As a startup founder, finding a space that balances professional growth with community is rare. LetsCatchUp nailed it perfectly for our engineering team.",
      initials: "RM",
    },
    {
      name: "Anjali Rao",
      role: "Operations Manager",
      quote: "The collaboration tools are intuitive and powerful. It's truly a unified space that makes teamwork feel natural, productive, and fun.",
      initials: "AR",
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto space-y-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center space-y-6 max-w-3xl mx-auto"
        >
          <Badge className="glass text-accent border-white/10 px-6 py-1.5 uppercase tracking-widest text-[10px] font-black">
            Community Voices
          </Badge>
          <h1 className="text-5xl md:text-7xl font-headline font-bold leading-tight">
            Trusted by the <br /><span className="text-gradient">Community</span>
          </h1>
          <p className="text-xl text-gray-400 font-medium leading-relaxed">
            Hear from the educators and founders who are redefining collaboration and learning on our platform.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 items-stretch">
          {testimonials.map((t, i) => (
            <TestimonialCard
              key={i}
              index={i}
              name={t.name}
              role={t.role}
              quote={t.quote}
              initials={t.initials}
            />
          ))}
        </div>
        
        {/* Additional Stats / Social Proof */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="glass-card p-12 mt-24 border-white/10 text-center space-y-8"
        >
          <h4 className="text-2xl font-bold">Join 10,000+ Students & 500+ Educators</h4>
          <div className="flex flex-wrap justify-center gap-12">
            {[
              { label: "Active Users", val: "10k+" },
              { label: "Partner Schools", val: "150+" },
              { label: "Satisfaction", val: "99.9%" },
            ].map((stat, i) => (
              <div key={i} className="space-y-1">
                <p className="text-4xl font-bold text-accent">{stat.val}</p>
                <p className="text-xs uppercase tracking-widest text-muted-foreground font-black">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
