"use client";

import React from "react";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { motion } from "framer-motion";

export function Testimonials() {
  const testimonials = [
    {
      name: "Meera Sinha",
      role: "Education Consultant",
      quote: "The platform's focus on meaningful connection has made a huge difference in our student engagement levels. It's truly transformative.",
      initials: "MS",
    },
    {
      name: "Rohan Mehta",
      role: "Startup Founder",
      quote: "As a startup founder, finding a space that balances professional growth with community is rare. LetsCatchUp nailed it perfectly.",
      initials: "RM",
    },
    {
      name: "Anjali Rao",
      role: "Operations Manager",
      quote: "The collaboration tools are intuitive and powerful. It's truly a unified space that makes teamwork feel natural and fun.",
      initials: "AR",
    },
  ];

  return (
    <section className="py-32 px-6 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24 space-y-6"
        >
          <h2 className="text-accent font-black tracking-[0.2em] text-sm uppercase">Wall of Love</h2>
          <h3 className="text-4xl md:text-6xl font-headline font-bold">What Our Community Says</h3>
          <p className="text-muted-foreground text-xl max-w-2xl mx-auto font-medium">
            Real feedback from educators and founders across the globe who are building the future with us.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {testimonials.map((t, idx) => (
            <TestimonialCard
              key={idx}
              index={idx}
              name={t.name}
              role={t.role}
              quote={t.quote}
              initials={t.initials}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
