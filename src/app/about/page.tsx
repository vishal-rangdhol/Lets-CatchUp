"use client";

import React, { useState, useEffect } from "react";
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
import { motion, useScroll, useSpring } from "framer-motion";

export default function AboutPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Progress Bar for the Journey
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative min-h-screen bg-[#0b0f2f] snap-y snap-proximity overflow-x-hidden">
      {/* Progress Line */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-accent-gradient origin-left z-[60]"
        style={{ scaleX }}
      />

      {/* Background Soft Blobs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px]" />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10"
      >
        {/* Phase 01: The Origin */}
        <div id="origin" className="snap-start min-h-screen flex items-center">
          <AboutSection />
        </div>

        {/* Phase 02: The Friction */}
        <div id="friction" className="snap-start relative bg-black/20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(239,68,68,0.05)_0%,transparent_70%)] pointer-events-none" />
          <ProblemSection />
        </div>

        {/* Phase 03: The Architecture */}
        <div id="architecture" className="relative space-y-0">
          <div className="snap-start">
            <SolutionSection />
          </div>
          
          <div className="snap-start">
            <InstitutionalExcellenceSection />
          </div>
          <div className="snap-start">
            <CollaborationSuiteSection />
          </div>
          <div className="snap-start">
            <NetworkedStudentSection />
          </div>
          <div className="snap-start">
            <BreakingAlgorithmSection />
          </div>
        </div>

        {/* Phase 04: The Foundation */}
        <div id="foundation" className="relative bg-gradient-to-b from-transparent via-primary/5 to-transparent">
          <div className="snap-start">
            <CharterSection />
          </div>
          <div className="snap-start">
            <WhyItWinsSection />
          </div>
          <div className="snap-start">
            <CoreValuesSection />
          </div>
        </div>

        {/* Phase 05: The Call */}
        <div id="call" className="snap-start relative pb-20">
          <Invitation />
        </div>
      </motion.div>
    </div>
  );
}
