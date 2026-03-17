
"use client";

import React from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, Star, Users } from "lucide-react";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";
import { motion } from "framer-motion";

export function CourseGrid() {
  const courses = [
    {
      id: "course-web-dev",
      title: "Advanced Web Architecture",
      instructor: "Dr. Sarah Jenkins",
      rating: 4.9,
      students: "1.2k",
      duration: "12 weeks",
      category: "Development",
      price: "$199",
      color: "from-teal-400 to-cyan-300",
    },
    {
      id: "course-data-science",
      title: "Mastering Machine Learning",
      instructor: "Michael Chen",
      rating: 4.8,
      students: "2.4k",
      duration: "15 weeks",
      category: "Data Science",
      price: "$249",
      color: "from-indigo-500 to-purple-500",
    },
    {
      id: "course-ai",
      title: "Neural Networks & GPT-4",
      instructor: "Prof. Alan Turing",
      rating: 5.0,
      students: "800",
      duration: "8 weeks",
      category: "Artificial Intelligence",
      price: "$299",
      color: "from-pink-500 to-rose-500",
    },
  ];

  return (
    <section className="py-24 max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div className="space-y-4 text-center md:text-left">
          <Badge variant="outline" className="border-accent/30 text-accent px-4 py-1 uppercase tracking-widest text-[10px] font-black">
            Course Catalog
          </Badge>
          <h3 className="text-4xl md:text-5xl font-headline font-bold">Featured Programs</h3>
        </div>
        <Button variant="outline" className="rounded-full glass border-white/20 h-11 md:h-12 px-6 md:px-8 font-semibold w-full md:w-auto">
          View All Courses
        </Button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
        {courses.map((course, idx) => {
          const courseImg = PlaceHolderImages?.find((img) => img.id === course.id);
          return (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="group relative"
            >
              {/* The "Success Card" Rounded-Tab Design */}
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-[24px] md:rounded-[40px] overflow-hidden flex flex-col h-full transition-all duration-500 group-hover:bg-white/10 group-hover:border-white/20 shadow-2xl">
                
                {/* Top Glossy Lip */}
                <div className="absolute top-0 left-10 right-10 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent z-20" />

                <div className="relative h-40 md:h-56 overflow-hidden">
                  {courseImg && (
                    <Image
                      src={courseImg.imageUrl}
                      alt={course.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      data-ai-hint={courseImg.imageHint}
                    />
                  )}
                  <div className="absolute top-4 left-4 md:top-5 md:left-5 z-20">
                    <Badge className={`bg-gradient-to-br ${course.color} text-white border-none px-2 py-0.5 md:px-3 md:py-1 text-[8px] md:text-xs font-bold shadow-lg`}>
                      {course.category}
                    </Badge>
                  </div>
                </div>
                
                <div className="p-5 md:p-8 flex-1 flex flex-col space-y-3 md:space-y-4">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-1.5 text-accent">
                      <Star className="w-3.5 h-3.5 md:w-4 md:h-4 fill-current glow-icon" />
                      <span className="text-xs md:text-sm font-bold">{course.rating}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-muted-foreground">
                      <Users className="w-3.5 h-3.5 md:w-4 md:h-4" />
                      <span className="text-[10px] md:text-xs font-semibold">{course.students}</span>
                    </div>
                  </div>

                  <h4 className="text-lg md:text-2xl font-bold leading-tight group-hover:text-accent transition-colors duration-300">
                    {course.title}
                  </h4>
                  <p className="text-[10px] md:text-sm text-muted-foreground font-medium italic">by {course.instructor}</p>

                  <div className="flex items-center gap-4 text-muted-foreground text-[10px] md:text-sm font-semibold pt-1 md:pt-2">
                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary" />
                      {course.duration}
                    </div>
                  </div>

                  <div className="flex justify-between items-center border-t border-white/5 pt-4 md:pt-6 mt-auto">
                    <span className="text-xl md:text-3xl font-bold text-white">{course.price}</span>
                  </div>
                </div>

                {/* Ambient glow matching course theme */}
                <div className={`absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br ${course.color} blur-[60px] opacity-10 pointer-events-none`} />
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
