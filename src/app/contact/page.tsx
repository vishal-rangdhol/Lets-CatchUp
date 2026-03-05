
"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MessageSquare, Phone, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

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
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl font-headline font-bold text-gradient">Get in <span className="text-accent">Touch</span></h1>
            <p className="text-xl text-muted-foreground max-w-lg">
              Have questions about our programs or need technical support? We're here to help you catch up!
            </p>
          </div>

          <div className="grid gap-6">
            <div className="flex gap-4 items-center glass-card p-6 rounded-2xl">
              <div className="bg-primary/20 p-3 rounded-xl">
                <Mail className="text-primary w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground uppercase tracking-wider font-bold">Email Us</p>
                <p className="font-bold">support@letscatchup.com</p>
              </div>
            </div>
            <div className="flex gap-4 items-center glass-card p-6 rounded-2xl">
              <div className="bg-accent/20 p-3 rounded-xl">
                <Phone className="text-accent w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground uppercase tracking-wider font-bold">Call Us</p>
                <p className="font-bold">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="flex gap-4 items-center glass-card p-6 rounded-2xl">
              <div className="bg-emerald-400/20 p-3 rounded-xl">
                <MapPin className="text-emerald-400 w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground uppercase tracking-wider font-bold">Our Office</p>
                <p className="font-bold">123 Learning Ave, Tech City</p>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-card p-8 md:p-12 rounded-[2rem]">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="first-name">First Name</Label>
                <Input id="first-name" placeholder="John" className="bg-white/5 border-white/10 h-12" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="last-name">Last Name</Label>
                <Input id="last-name" placeholder="Doe" className="bg-white/5 border-white/10 h-12" required />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" type="email" placeholder="john@example.com" className="bg-white/5 border-white/10 h-12" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Input id="subject" placeholder="Course Inquiry" className="bg-white/5 border-white/10 h-12" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" placeholder="How can we help?" className="bg-white/5 border-white/10 min-h-[150px]" required />
            </div>
            <Button type="submit" className="w-full bg-primary hover:bg-primary/90 h-14 rounded-full text-lg shadow-lg">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
