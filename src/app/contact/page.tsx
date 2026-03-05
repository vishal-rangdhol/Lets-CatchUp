"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Badge } from "@/components/ui/badge";

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
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
        <div className="space-y-10">
          <div className="space-y-6">
            <Badge className="glass text-accent border-white/10">Contact Us</Badge>
            <h1 className="text-6xl font-headline font-bold leading-tight">Get in <span className="text-gradient">Touch</span></h1>
            <p className="text-xl text-gray-400 max-w-lg leading-relaxed">
              Have questions about our programs or need technical support? Visit our office or drop us a message.
            </p>
          </div>

          <div className="grid gap-6">
            <div className="flex gap-5 items-start glass-card p-6 border-white/5 group">
              <div className="bg-white/5 p-4 rounded-2xl group-hover:scale-110 transition-transform">
                <MapPin className="w-6 h-6 text-emerald-400 glow-icon" />
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-widest font-bold mb-1">Our Office</p>
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
              <div className="bg-white/5 p-4 rounded-2xl group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6 text-accent glow-icon" />
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-widest font-bold mb-1">Email Us</p>
                <p className="font-bold text-lg">support@letscatchup.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-card p-8 md:p-12 border-white/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -z-10" />
          <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
            <div className="space-y-3">
              <Label htmlFor="name" className="text-gray-300">Name</Label>
              <Input id="name" placeholder="John Doe" className="bg-white/5 border-white/10 h-14 rounded-xl px-4 focus-visible:ring-accent" required />
            </div>
            <div className="space-y-3">
              <Label htmlFor="email" className="text-gray-300">Email Address</Label>
              <Input id="email" type="email" placeholder="john@example.com" className="bg-white/5 border-white/10 h-14 rounded-xl px-4 focus-visible:ring-accent" required />
            </div>
            <div className="space-y-3">
              <Label htmlFor="message" className="text-gray-300">Message</Label>
              <Textarea id="message" placeholder="How can we help?" className="bg-white/5 border-white/10 min-h-[160px] rounded-xl p-4 focus-visible:ring-accent" required />
            </div>
            <Button type="submit" className="w-full bg-accent-gradient hover:opacity-90 h-16 rounded-full text-xl font-bold shadow-lg border-none transition-all hover:scale-[1.02]">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
