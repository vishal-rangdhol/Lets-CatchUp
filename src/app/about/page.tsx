
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
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20 md:pt-32 space-y-0">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <AboutSection />
        <ProblemSection />
        <SolutionSection />
        <InstitutionalExcellenceSection />
        <CollaborationSuiteSection />
        <NetworkedStudentSection />
        <BreakingAlgorithmSection />
        <CharterSection />
        <WhyItWinsSection />
      </motion.div>
    </div>
  );
}
