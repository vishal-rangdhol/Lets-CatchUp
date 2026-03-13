"use client";

import React from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Calendar, MapPin, Users, ArrowRight, Zap } from "lucide-react";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";
import { cn } from "@/lib/utils";

export default function EventsPage() {
  const eventsHero = PlaceHolderImages.find(img => img.id === "events-hero");

  const events = [
    {
      title: "Global AI Summit 2025",
      date: "Oct 15, 2025",
      location: "San Francisco, CA",
      attendees: "5k+",
      description: "Join world-class experts for a deep dive into the future of generative AI and machine learning.",
      color: "from-teal-400 to-cyan-300",
      type: "Conference"
    },
    {
      title: "React Next Workshop",
      date: "Nov 02, 2025",
      location: "Virtual Experience",
      attendees: "1.2k",
      description: "Master Next.js 15 features with hands-on sessions led by industry professionals.",
      color: "from-indigo-500 to-purple-500",
      type: "Workshop"
    },
    {
      title: "FinTech Innovation Night",
      date: "Dec 10, 2025",
      location: "London, UK",
      attendees: "800",
      description: "Exploring the intersection of blockchain, banking, and user-centric financial design.",
      color: "from-pink-500 to-rose-500",
      type: "Networking"
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto space-y-16 md:space-y-24">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <Badge className="glass text-accent border-white/10 px-4 py-1 uppercase tracking-widest text-[10px] font-black">
              Connect & Learn
            </Badge>
            <h1 className="text-5xl md:text-7xl font-headline font-bold leading-tight">
              Upcoming <span className="text-gradient">Events</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed font-medium">
              From global summits to intimate workshops, join our community of innovators and thought leaders across the globe.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative group"
          >
            <div className="absolute -bottom-4 -right-4 w-full h-full rounded-[32px] bg-gradient-to-br from-primary/30 to-accent/30 opacity-40 transition-all duration-500 group-hover:opacity-70 group-hover:-bottom-5 group-hover:-right-5" />
            
            <div className="relative bg-gradient-to-br from-[#1e294b] via-[#141d3d] to-[#0f172a] border border-white/10 rounded-[32px] p-3 shadow-2xl overflow-hidden group-hover:border-white/20 transition-all duration-500">
              <div className="relative rounded-[20px] overflow-hidden aspect-video">
                {eventsHero && (
                  <Image
                    src={eventsHero.imageUrl}
                    alt={eventsHero.description}
                    fill
                    className="object-cover"
                    data-ai-hint={eventsHero.imageHint}
                  />
                )}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Events Grid */}
        <div className="space-y-12 md:space-y-16">
          <div className="text-center">
            <h2 className="text-4xl lg:text-5xl font-headline font-bold">Event Calendar</h2>
          </div>
          
          <div className="grid gap-8 md:gap-12">
            {events.map((event, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="relative group"
              >
                {/* Sharp Layered Effect */}
                <div className={cn(
                  "absolute -bottom-4 -right-4 w-full h-full rounded-[32px] bg-gradient-to-br opacity-40 transition-all duration-500 group-hover:opacity-70 group-hover:-bottom-5 group-hover:-right-5",
                  event.color
                )} />

                <div className="relative bg-gradient-to-br from-[#1e294b] via-[#141d3d] to-[#0f172a] border border-white/10 rounded-[32px] p-8 md:p-10 shadow-2xl overflow-hidden flex flex-col md:flex-row gap-8 items-center md:items-start group-hover:border-white/20 transition-all duration-500">
                  <div className="shrink-0 space-y-4 text-center md:text-left">
                    <div className={cn(
                      "w-20 h-20 rounded-3xl bg-white/5 flex flex-col items-center justify-center border border-white/10 transition-transform duration-500 group-hover:scale-110 shadow-xl"
                    )}>
                      <Calendar className={cn(
                        "w-8 h-8 glow-icon mb-1",
                        i === 0 ? "text-accent" : i === 1 ? "text-primary" : "text-rose-400"
                      )} />
                    </div>
                    <Badge variant="outline" className="border-white/10 text-[10px] font-black uppercase tracking-widest">{event.type}</Badge>
                  </div>

                  <div className="space-y-6 flex-1 text-center md:text-left">
                    <div className="space-y-2">
                      <h3 className="text-2xl md:text-4xl font-bold tracking-tight group-hover:text-accent transition-colors">
                        {event.title}
                      </h3>
                      <p className="text-gray-400 text-xs md:text-lg leading-relaxed font-medium">
                        {event.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap justify-center md:justify-start gap-6">
                      <div className="flex items-center gap-2 text-[10px] md:text-sm text-gray-300 font-bold uppercase tracking-widest">
                        <MapPin className="w-4 h-4 text-accent" />
                        {event.location}
                      </div>
                      <div className="flex items-center gap-2 text-[10px] md:text-sm text-gray-300 font-bold uppercase tracking-widest">
                        <Users className="w-4 h-4 text-primary" />
                        {event.attendees} Attending
                      </div>
                      <div className="flex items-center gap-2 text-[10px] md:text-sm text-gray-300 font-bold uppercase tracking-widest">
                        <Zap className="w-4 h-4 text-rose-400" />
                        {event.date}
                      </div>
                    </div>
                  </div>

                  <div className="shrink-0">
                    <button className="flex items-center gap-2 font-black uppercase tracking-widest text-[10px] text-accent group/btn transition-all">
                      <span>Reserve Spot</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-2" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
