"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { MessageSquare, Share2, Target, Users2, Zap, Briefcase } from "lucide-react";
import { FeatureCard } from "@/components/ui/FeatureCard";

export default function StartupsOrganizationsPage() {
  const tools = [
    { title: "Team Communication", desc: "Real-time channels and threads for seamless organizational alignment.", icon: MessageSquare, color: "from-blue-400 to-indigo-400" },
    { title: "Project Collaboration", desc: "Kanban boards, task tracking, and milestone management for agile teams.", icon: Zap, color: "from-amber-400 to-orange-400" },
    { title: "Shared Workspaces", desc: "Secure environments for cross-functional teams to build and scale projects.", icon: Users2, color: "from-emerald-400 to-teal-400" },
    { title: "Knowledge Sharing", desc: "Internal wikis and documentation hubs to build a culture of learning.", icon: Share2, color: "from-purple-400 to-pink-400" },
    { title: "Skill Assessments", desc: "Quantifiable metrics to track team growth and technical proficiency.", icon: Target, color: "from-rose-400 to-red-400" },
    { title: "Org Administration", desc: "Enterprise-grade controls for user access and departmental management.", icon: Briefcase, color: "from-cyan-400 to-blue-400" },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto space-y-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center space-y-6 max-w-4xl mx-auto"
        >
          <Badge className="glass text-primary border-white/10 px-4 py-1 uppercase tracking-widest text-[10px] font-black">
            For startups and organisations
          </Badge>
          <h1 className="text-5xl md:text-7xl font-headline font-bold leading-tight">
            Scale Your <br /><span className="text-gradient">Team's Potential</span>
          </h1>
          <p className="text-[10px] md:text-xl text-gray-400 leading-relaxed font-medium">
            Move faster with a unified workspace that combines project management, team learning, and professional collaboration.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 md:gap-y-24">
          {tools.map((tool, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <FeatureCard
                title={tool.title}
                description={tool.desc}
                icon={tool.icon}
                gradientFrom={tool.color.split(' ')[0]}
                gradientTo={tool.color.split(' ')[1]}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
