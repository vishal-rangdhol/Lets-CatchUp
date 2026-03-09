"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Send, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

export default function ContactPage() {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
  };

  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto space-y-24">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-10 lg:sticky lg:top-32"
          >
            <div className="space-y-6">
              <Badge className="glass text-accent border-white/10 px-4 py-1 uppercase tracking-widest text-[10px] font-black">
                Connect With Us
              </Badge>
              <h1 className="text-6xl font-headline font-bold leading-tight">
                Let's <span className="text-gradient">Catch Up</span>
              </h1>
              <p className="text-xl text-gray-400 max-w-lg leading-relaxed font-medium">
                Have questions about our programs or interested in a partnership? Our team is here to help you scale your potential.
              </p>
            </div>

            <div className="grid gap-6">
              <div className="flex gap-5 items-start glass-card p-8 border-white/5 group relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-accent-gradient opacity-50" />
                
                <div className="bg-white/5 p-4 rounded-2xl group-hover:scale-110 transition-transform shadow-xl border border-white/10">
                  <MapPin className="w-6 h-6 text-accent glow-icon" />
                </div>
                <div className="space-y-2">
                  <p className="text-[10px] text-accent uppercase tracking-widest font-black">Headquarters</p>
                  <div className="font-bold text-sm text-gray-200 leading-relaxed">
                    Building No.: 3-37<br />
                    Old RC Puram, Back Side ZPHS School<br />
                    Mumbai Highway, Hyderabad<br />
                    Nearby: Shri Durga Bhawani Steel Work<br />
                    Ramachandrapuram, Sangareddy<br />
                    Telangana – 502032
                  </div>
                </div>
              </div>
              
              <div className="flex gap-5 items-center glass-card p-8 border-white/5 group relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-accent-gradient opacity-50" />
                <div className="bg-white/5 p-4 rounded-2xl group-hover:scale-110 transition-transform shadow-xl border border-white/10">
                  <Mail className="w-6 h-6 text-accent glow-icon" />
                </div>
                <div className="space-y-2">
                  <p className="text-[10px] text-accent uppercase tracking-widest font-black">Direct Communication</p>
                  <p className="font-bold text-lg text-white">support@letscatchup.com</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative group"
          >
            {/* Architectural Layered Effect */}
            <div className="absolute -bottom-6 -right-6 w-full h-full rounded-[40px] bg-accent-gradient opacity-20 transition-all duration-500 group-hover:opacity-30 group-hover:-bottom-8 group-hover:-right-8 -z-10" />

            <div className="relative bg-gradient-to-br from-[#1e294b] via-[#141d3d] to-[#0f172a] border border-white/10 rounded-[40px] p-8 md:p-12 shadow-2xl overflow-hidden group-hover:border-white/20 transition-all duration-500">
              <div className="absolute top-10 right-10 text-white/5 pointer-events-none">
                <Sparkles size={120} strokeWidth={1} />
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <Label htmlFor="name" className="text-gray-300 font-bold uppercase tracking-widest text-[10px]">Full Name</Label>
                    <Input id="name" placeholder="John Doe" className="bg-white/5 border-white/10 h-14 rounded-2xl px-6 focus-visible:ring-accent transition-all hover:bg-white/10" required />
                  </div>
                  <div className="space-y-3">
                    <Label htmlFor="email" className="text-gray-300 font-bold uppercase tracking-widest text-[10px]">Email Address</Label>
                    <Input id="email" type="email" placeholder="john@example.com" className="bg-white/5 border-white/10 h-14 rounded-2xl px-6 focus-visible:ring-accent transition-all hover:bg-white/10" required />
                  </div>
                </div>
                
                <div className="space-y-3">
                  <Label htmlFor="subject" className="text-gray-300 font-bold uppercase tracking-widest text-[10px]">Subject</Label>
                  <Input id="subject" placeholder="How can we help you?" className="bg-white/5 border-white/10 h-14 rounded-2xl px-6 focus-visible:ring-accent transition-all hover:bg-white/10" required />
                </div>
                
                <div className="space-y-3">
                  <Label htmlFor="message" className="text-gray-300 font-bold uppercase tracking-widest text-[10px]">Message</Label>
                  <Textarea id="message" placeholder="Type your message here..." className="bg-white/5 border-white/10 min-h-[180px] rounded-2xl p-6 focus-visible:ring-accent transition-all hover:bg-white/10" required />
                </div>
                
                <Button type="submit" className="w-full bg-accent-gradient hover:opacity-90 h-16 rounded-full text-xl font-black shadow-xl border-none transition-all hover:scale-[1.02] active:scale-95 uppercase tracking-widest flex items-center justify-center gap-3">
                  <span>Send Message</span>
                  <Send className="w-5 h-5" />
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}