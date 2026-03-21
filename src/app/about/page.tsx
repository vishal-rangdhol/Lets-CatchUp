"use client";

import React from "react";
import { AboutSection } from "@/components/sections/AboutSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { SolutionSection } from "@/components/sections/SolutionSection";
import { InstitutionalExcellenceSection } from "@/components/sections/InstitutionalExcellenceSection";
import { CollaborationSuiteSection } from "@/components/sections/CollaborationSuiteSection";
import { NetworkedStudentSection } from "@/components/sections/NetworkedStudentSection";
import { BreakingAlgorithmSection } from "@/components/sections/BreakingAlgorithmSection";
import { CharterSection } from "@/components/sections/CharterSection";
import { WhyItWinsSection } from "@/components/sections/WhyItWinsSection";
import { CoreValuesSection } from "@/components/sections/CoreValuesSection";
import { Invitation } from "@/components/home/Invitation";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20 md:pt-32 bg-[#0b0f2f]">
      {/* Decorative Narrative Line */}
      <div className="fixed left-8 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-accent/20 to-transparent hidden xl:block z-0 pointer-events-none" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10"
      >
        {/* Phase 01: The Origin */}
        <div id="origin" className="relative">
          <AboutSection />
        </div>

        {/* Phase 02: The Friction */}
        <div id="friction" className="relative bg-black/20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(239,68,68,0.05)_0%,transparent_70%)] pointer-events-none" />
          <ProblemSection />
        </div>

        {/* Phase 03: The Architecture */}
        <div id="architecture" className="relative space-y-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[200px] bg-gradient-to-b from-black/20 to-transparent pointer-events-none" />
          <SolutionSection />
          <InstitutionalExcellenceSection />
          <CollaborationSuiteSection />
          <NetworkedStudentSection />
          <BreakingAlgorithmSection />
        </div>

        {/* Phase 04: The Foundation */}
        <div id="foundation" className="relative bg-gradient-to-b from-transparent via-primary/5 to-transparent">
          <CharterSection />
          <WhyItWinsSection />
          <CoreValuesSection />
        </div>

        {/* Phase 05: The Call */}
        <div id="call" className="relative pb-20">
          <Invitation />
        </div>
      </motion.div>
    </div>
  );
}
