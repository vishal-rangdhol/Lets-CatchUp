"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Navigation } from "lucide-react";
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
        {/* Top Section: Info & Form */}
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-10"
          >
            <div className="space-y-6">
              <Badge className="glass text-accent border-white/10 px-4 py-1 uppercase tracking-widest text-[10px] font-black">
                Contact Us
              </Badge>
              <h1 className="text-6xl font-headline font-bold leading-tight">
                Get in <span className="text-gradient">Touch</span>
              </h1>
              <p className="text-xl text-gray-400 max-w-lg leading-relaxed font-medium">
                Have questions about our programs or need technical support? Visit our office or drop us a message.
              </p>
            </div>

            <div className="grid gap-6">
              <div className="flex gap-5 items-start glass-card p-6 border-white/5 group">
                <div className="bg-white/5 p-4 rounded-2xl group-hover:scale-110 transition-transform shadow-xl border border-white/10">
                  <MapPin className="w-6 h-6 text-emerald-400 glow-icon" />
                </div>
                <div>
                  <p className="text-[10px] text-accent uppercase tracking-widest font-black mb-1">Our Office</p>
                  <div className="font-bold text-sm text-gray-200 leading-relaxed">
                    Building No.: 3-37<br />
                    Old RC Puram, Back Side ZPHS School<br />
                    Mumbai Highway, Hyderabad<br />
                    Ramachandrapuram, Sangareddy<br />
                    Telangana – 502032
                  </div>
                </div>
              </div>
              
              <div className="flex gap-5 items-center glass-card p-6 border-white/5 group">
                <div className="bg-white/5 p-4 rounded-2xl group-hover:scale-110 transition-transform shadow-xl border border-white/10">
                  <Mail className="w-6 h-6 text-accent glow-icon" />
                </div>
                <div>
                  <p className="text-[10px] text-accent uppercase tracking-widest font-black mb-1">Email Us</p>
                  <p className="font-bold text-lg text-white">support@letscatchup.com</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass-card p-8 md:p-12 border-white/10 relative overflow-hidden shadow-2xl"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -z-10" />
            <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
              <div className="space-y-3">
                <Label htmlFor="name" className="text-gray-300 font-bold uppercase tracking-widest text-[10px]">Full Name</Label>
                <Input id="name" placeholder="John Doe" className="bg-white/5 border-white/10 h-14 rounded-xl px-4 focus-visible:ring-accent" required />
              </div>
              <div className="space-y-3">
                <Label htmlFor="email" className="text-gray-300 font-bold uppercase tracking-widest text-[10px]">Email Address</Label>
                <Input id="email" type="email" placeholder="john@example.com" className="bg-white/5 border-white/10 h-14 rounded-xl px-4 focus-visible:ring-accent" required />
              </div>
              <div className="space-y-3">
                <Label htmlFor="message" className="text-gray-300 font-bold uppercase tracking-widest text-[10px]">Message</Label>
                <Textarea id="message" placeholder="How can we help?" className="bg-white/5 border-white/10 min-h-[160px] rounded-xl p-4 focus-visible:ring-accent" required />
              </div>
              <Button type="submit" className="w-full bg-accent-gradient hover:opacity-90 h-16 rounded-full text-xl font-black shadow-lg border-none transition-all hover:scale-[1.02] active:scale-95 uppercase tracking-widest">
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>

        {/* Bottom Section: Interactive Map */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div className="text-center space-y-4">
            <div className="flex justify-center">
              <div className="p-3 bg-white/5 rounded-2xl border border-white/10 shadow-xl">
                <Navigation className="w-6 h-6 text-primary animate-pulse" />
              </div>
            </div>
            <h2 className="text-4xl font-headline font-bold">Find Us on the <span className="text-gradient">Map</span></h2>
          </div>

          <div className="relative group">
            {/* Architectural Layered Shadow */}
            <div className="absolute -bottom-4 -right-4 w-full h-full rounded-[40px] bg-gradient-to-br from-primary/30 to-accent/30 opacity-40 transition-all duration-500 group-hover:opacity-70 group-hover:-bottom-5 group-hover:-right-5" />

            <div className="relative bg-gradient-to-br from-[#1e294b] via-[#141d3d] to-[#0f172a] border border-white/10 rounded-[40px] p-3 shadow-2xl overflow-hidden group-hover:border-white/20 transition-all duration-500">
              <div className="relative h-[500px] w-full rounded-[32px] overflow-hidden grayscale contrast-125 opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.419028445161!2d78.29168431527581!3d17.487425188018617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91f5e8f5b8a5%3A0x7d6688e1a5a8f9a!2sRamachandrapuram%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1709123456789!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-[32px]"
                ></iframe>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}