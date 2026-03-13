"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";
import { motion as motionFM } from "framer-motion";
import { Shield, Sparkles, Heart, MessageSquare, Handshake, Users, MessageCircle } from "lucide-react";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { Onboarding } from "@/components/home/Onboarding";

export default function HealthySocialSpacesPage() {
  const pillars = [
    { title: "Algorithmic Freedom", desc: "Interact without the noise of addictive algorithms. You control what you see and who you engage with.", icon: Shield, color: "from-teal-400 to-cyan-300" },
    { title: "Safe Communities", desc: "Dedicated, secure environments designed for respectful and meaningful dialogue among peers.", icon: Users, color: "from-blue-400 to-cyan-400" },
    { title: "Wellness Focus", desc: "Integrated tools and reminders to promote digital well-being and mindful consumption.", icon: Heart, color: "from-purple-400 to-pink-400" },
    { title: "1v1 Private Messaging", desc: "Connect securely with mentors and peers through encrypted direct messaging built for meaningful exchange.", icon: MessageCircle, color: "from-cyan-400 to-blue-500" },
    { title: "Human Connection", desc: "Focus on building real relationships through collaborative projects and shared interests.", icon: Handshake, color: "from-orange-400 to-yellow-400" },
    { title: "Authentic Feedback", desc: "Constructive feedback loops that prioritize growth over vanity metrics or engagement bait.", icon: MessageSquare, color: "from-indigo-400 to-blue-400" },
    { title: "Spark Creativity", desc: "A playground for ideas where curiosity is rewarded and technical mastery is shared.", icon: Sparkles, color: "from-rose-400 to-red-400" },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto space-y-32">
        <motionFM.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center space-y-6 max-w-4xl mx-auto"
        >
          <Badge className="glass text-accent border-white/10 px-4 py-1">Healthy Social Spaces</Badge>
          <h1 className="text-5xl md:text-7xl font-headline font-bold leading-tight">
            Connect Without <br /><span className="text-gradient">The Noise</span>
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            We are reclaiming digital agency. Experience a social ecosystem built on trust, transparency, and genuine human connection.
          </p>
        </motionFM.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 md:gap-y-32">
          {pillars.map((pillar, i) => (
            <motionFM.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <FeatureCard
                title={pillar.title}
                description={pillar.desc}
                icon={pillar.icon}
                gradientFrom={pillar.color.split(' ')[0]}
                gradientTo={pillar.color.split(' ')[1]}
              />
            </motionFM.div>
          ))}
        </div>

        <div className="pt-16">
          <Onboarding />
        </div>
      </div>
    </div>
  );
}
