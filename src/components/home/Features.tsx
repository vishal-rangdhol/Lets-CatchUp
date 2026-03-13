
"use client";

import React from "react";
import { GraduationCap, Zap, Users } from "lucide-react";
import { motion } from "framer-motion";
import { FeatureCard } from "@/components/ui/FeatureCard";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export function Features() {
  const features = [
    {
      title: "Academic Operations",
      description: "A Learning Management System (LMS) designed for schools and universities to manage courses, students, assignments, and digital learning in one platform.",
      icon: GraduationCap,
      color: "from-emerald-400 to-teal-300",
      href: "/services/educational-institutions"
    },
    {
      title: "Professional Collaboration",
      description: "An integrated platform offering smart tools for startups and institutions to simplify management, boost productivity, and accelerate growth.",
      icon: Zap,
      color: "from-blue-500 to-indigo-400",
      href: "/services/startups-organizations"
    },
    {
      title: "Healthy Social Spaces",
      description: "A platform offering private school-level spaces and public human-centric communities built for meaningful connection rather than dopamine-driven engagement.",
      icon: Users,
      color: "from-pink-500 to-rose-400",
      href: "/services/healthy-social-spaces"
    },
  ];

  return (
    <section id="ecosystem" className="py-24 relative overflow-hidden px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20 space-y-4"
        >
          <h3 className="text-3xl md:text-5xl font-headline font-bold leading-tight">
            Core capabilities for every community
          </h3>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-20 max-w-6xl mx-auto"
        >
          {features.map((feature, idx) => (
            <motion.div key={idx} variants={itemVariants}>
              <FeatureCard
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                gradientFrom={feature.color.split(' ')[0]}
                gradientTo={feature.color.split(' ')[1]}
                href={feature.href}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
