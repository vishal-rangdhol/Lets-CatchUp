
"use client";

import React from "react";
import { AboutSection } from "@/components/sections/AboutSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { SolutionSection } from "@/components/sections/SolutionSection";
import { InstitutionalExcellenceSection } from "@/components/sections/InstitutionalExcellenceSection";
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
      </motion.div>
    </div>
  );
}
