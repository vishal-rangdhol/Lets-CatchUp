"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";

export default function FAQPage() {
  const faqs = [
    {
      q: "What is “Let’s Catch Up” and who is it for?",
      a: "Let’s Catch Up is an 'all-in-one platform' designed to support schools, colleges, students, teachers, parents, startups, and organizations. It brings together collaboration, learning, and communication through dedicated spaces, tools, and resources tailored to the needs of each user group."
    },
    {
      q: "Is the community and collaboration feature free to use?",
      a: "Yes. The community and collaboration features are completely free for all users, allowing students, educators, and professionals to connect and grow without any financial barriers."
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
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-4xl mx-auto space-y-16 md:space-y-20 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-6"
        >
          <div className="flex justify-center">
            <Badge className="glass text-accent border-white/10 px-6 py-1.5 uppercase tracking-[0.2em] text-[10px] font-black">
              Support Center
            </Badge>
          </div>
          <h1 className="text-5xl md:text-7xl font-headline font-bold leading-tight">
            Frequently Asked <br /><span className="text-gradient">Questions</span>
          </h1>
          <p className="text-xl text-gray-400 font-medium max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about the Let’s Catch Up platform and how it empowers your community.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="relative group"
        >
          <div className="absolute -bottom-4 -right-4 w-full h-full rounded-[40px] bg-accent-gradient opacity-10 transition-all duration-500 group-hover:opacity-20 group-hover:-bottom-6 group-hover:-right-6 -z-10" />

          <div className="glass-card p-8 md:p-12 border-white/10 bg-gradient-to-br from-[#1e294b] via-[#141d3d] to-[#0f172a] shadow-2xl relative overflow-hidden">
            <div className="absolute top-10 right-10 text-white/5 pointer-events-none">
              <HelpCircle size={160} strokeWidth={1} />
            </div>

            <Accordion type="single" collapsible className="w-full space-y-4 md:space-y-6 relative z-10">
              {faqs.map((faq, i) => (
                <AccordionItem 
                  key={i} 
                  value={`item-${i}`} 
                  className="border-white/5 bg-white/5 rounded-2xl px-6 md:px-8 border hover:bg-white/10 transition-all duration-300"
                >
                  <AccordionTrigger className="text-base md:text-xl font-bold hover:text-accent py-6 transition-all text-left hover:no-underline gap-4">
                    <span className="flex-1">{faq.q}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-xs md:text-lg text-gray-400 leading-relaxed pb-8 pt-2 font-medium">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
