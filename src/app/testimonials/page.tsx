"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle, Sparkles } from "lucide-react";

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

  const faqs = [
    {
      q: "What is “Let’s Catch Up” and who is it for?",
      a: "Let’s Catch Up is a free, all-in-one platform designed to support schools, colleges, students, teachers, parents, startups, and organizations. It brings together collaboration, learning, and communication through dedicated spaces, tools, and resources tailored to the needs of each user group."
    },
    {
      q: "How can students benefit from the platform?",
      a: "Students can connect with peers, join interest-based communities, engage with mentors, explore their interests, and develop skills beyond the classroom — all within a safe and supportive digital environment."
    },
    {
      q: "Can schools and colleges manage their operations on the platform?",
      a: "Yes. The platform offers intuitive tools for academic management, communication, event coordination, and student engagement, making it an effective and modern alternative to traditional learning management systems."
    },
    {
      q: "How do startups and organizations use the platform?",
      a: "Startups and organizations can use Let’s Catch Up to manage projects, facilitate team discussions, collaborate securely, and build meaningful connections with external communities — all from a single integrated platform."
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto space-y-32 relative z-10">
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
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="glass-card p-12 border-white/10 text-center space-y-8"
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

        {/* FAQ Section */}
        <div className="space-y-16 max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center space-y-4"
          >
            <Badge variant="outline" className="border-accent/30 text-accent px-4 py-1 uppercase tracking-widest text-[10px] font-black">
              Common Queries
            </Badge>
            <h2 className="text-4xl md:text-5xl font-headline font-bold">Frequently Asked <span className="text-gradient">Questions</span></h2>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative group"
          >
            {/* Architectural Layered Effect */}
            <div className="absolute -bottom-4 -right-4 w-full h-full rounded-[40px] bg-accent-gradient opacity-10 transition-all duration-500 group-hover:opacity-20 group-hover:-bottom-6 group-hover:-right-6 -z-10" />

            <div className="glass-card p-8 md:p-12 border-white/10 bg-gradient-to-br from-[#1e294b] via-[#141d3d] to-[#0f172a] shadow-2xl relative overflow-hidden">
              <div className="absolute top-10 right-10 text-white/5 pointer-events-none">
                <HelpCircle size={160} strokeWidth={1} />
              </div>

              <Accordion type="single" collapsible className="w-full space-y-4 relative z-10">
                {faqs.map((faq, i) => (
                  <AccordionItem 
                    key={i} 
                    value={`item-${i}`} 
                    className="border-white/5 bg-white/5 rounded-2xl px-6 md:px-8 border hover:bg-white/10 transition-all duration-300"
                  >
                    <AccordionTrigger className="text-lg md:text-xl font-bold hover:text-accent py-6 transition-all text-left hover:no-underline gap-4">
                      <span className="flex-1">{faq.q}</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-base md:text-lg text-gray-400 leading-relaxed pb-8 pt-2 font-medium">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
