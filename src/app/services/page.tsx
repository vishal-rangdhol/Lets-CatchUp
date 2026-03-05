"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Briefcase, Globe, Cpu, Users, Zap } from "lucide-react";

export default function ServicesPage() {
  const schoolFeatures = [
    { title: "Virtual Classrooms", icon: Globe },
    { title: "Student Analytics", icon: Cpu },
    { title: "Automated Grading", icon: Zap },
  ];

  const orgFeatures = [
    { title: "Team Collaboration", icon: Users },
    { title: "Project Tracking", icon: Briefcase },
    { title: "Skill Assessment", icon: GraduationCap },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto space-y-24">
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <Badge className="glass text-accent border-white/10">Our Solutions</Badge>
          <h1 className="text-5xl font-headline font-bold">Everything you need to <span className="text-gradient">succeed</span></h1>
          <p className="text-xl text-gray-400">Tailored solutions for every stage of the educational journey.</p>
        </div>

        {/* Schools Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-headline font-bold flex items-center gap-4">
              <GraduationCap className="w-10 h-10 text-accent" /> Educational Institutions
            </h2>
            <p className="text-xl text-gray-400 leading-relaxed">
              Empower your faculty and students with modern LMS tools. From primary schools to universities, our platform simplifies curriculum management and enhances student engagement.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {schoolFeatures.map((f, i) => (
                <div key={i} className="glass-card p-4 flex flex-col items-center gap-3 text-center">
                  <f.icon className="w-6 h-6 text-accent" />
                  <span className="text-sm font-semibold">{f.title}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="glass-card p-1 aspect-video relative overflow-hidden rotate-2">
            <div className="absolute inset-0 bg-accent-gradient opacity-20" />
            <div className="w-full h-full bg-[#141a4b] rounded-[23px] flex items-center justify-center p-8">
              <span className="text-accent text-lg font-headline font-bold">LMS Dashboard Preview</span>
            </div>
          </div>
        </div>

        {/* Orgs Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="glass-card p-1 aspect-video relative overflow-hidden -rotate-2 lg:order-1 order-2">
            <div className="absolute inset-0 bg-primary/20" />
            <div className="w-full h-full bg-[#141a4b] rounded-[23px] flex items-center justify-center p-8">
              <span className="text-primary text-lg font-headline font-bold">Org Admin Preview</span>
            </div>
          </div>
          <div className="space-y-8 lg:order-2 order-1">
            <h2 className="text-4xl font-headline font-bold flex items-center gap-4">
              <Briefcase className="w-10 h-10 text-primary" /> Startups & Organizations
            </h2>
            <p className="text-xl text-gray-400 leading-relaxed">
              Scale your team's knowledge with project management and collaboration features designed for fast-paced environments. Build a culture of continuous learning.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {orgFeatures.map((f, i) => (
                <div key={i} className="glass-card p-4 flex flex-col items-center gap-3 text-center">
                  <f.icon className="w-6 h-6 text-primary" />
                  <span className="text-sm font-semibold">{f.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
