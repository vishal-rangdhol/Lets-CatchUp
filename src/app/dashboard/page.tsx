
"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Sparkles, BookOpen, Trophy, Settings, LayoutDashboard, Search, Zap, ArrowRight } from "lucide-react";
import { aiCourseRecommendation } from "@/ai/flows/ai-course-recommendation-flow";
import { motion, AnimatePresence } from "framer-motion";

export default function DashboardPage() {
  const [recommendations, setRecommendations] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const fetchRecommendations = async () => {
    setLoading(true);
    try {
      const result = await aiCourseRecommendation({
        userId: "user_123",
        enrolledCourses: ["Intro to Web Development", "React Fundamentals"],
        performanceSummary: "Completed React with 95% score, currently 40% through Advanced CSS.",
        interests: ["AI", "Fullstack Development", "UX Design"]
      });
      setRecommendations(result);
    } catch (error) {
      console.error("Failed to fetch recommendations", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRecommendations();
  }, []);

  const stats = [
    { title: "Active Courses", val: "4", desc: "+2 from last month", icon: Zap, color: "from-teal-400 to-cyan-300" },
    { title: "Lessons Finished", val: "24", desc: "8 more to go this week", icon: BookOpen, color: "from-indigo-500 to-purple-500" },
    { title: "XP Earned", val: "12,450", desc: "Top 5% of learners", icon: Trophy, color: "from-pink-500 to-rose-500" },
  ];

  return (
    <div className="min-h-screen pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
        {/* Sidebar Nav (Mini) */}
        <aside className="w-full lg:w-64 space-y-4">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[40px] p-8 space-y-8 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30">
                <span className="font-bold">JD</span>
              </div>
              <div>
                <p className="font-bold text-sm">John Doe</p>
                <p className="text-[10px] text-muted-foreground">Pro Member</p>
              </div>
            </div>
            <nav className="space-y-2">
              {[
                { name: "Dashboard", icon: LayoutDashboard, active: true },
                { name: "My Courses", icon: BookOpen },
                { name: "Certifications", icon: Trophy },
                { name: "Explore", icon: Search },
                { name: "Settings", icon: Settings },
              ].map((item) => (
                <Button key={item.name} variant="ghost" className={`w-full justify-start gap-3 rounded-full ${item.active ? 'bg-white/5 text-accent' : 'hover:bg-white/5'}`}>
                  <item.icon className="w-4 h-4" /> {item.name}
                </Button>
              ))}
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1 space-y-8">
          <header className="space-y-1">
            <h1 className="text-4xl font-headline font-bold">Welcome Back, John 👋</h1>
            <p className="text-muted-foreground text-lg">Your learning journey is 65% complete this week.</p>
          </header>

          <div className="grid md:grid-cols-3 gap-6">
            {stats.map((stat, i) => (
              <motion.div 
                key={i} 
                whileHover={{ y: -5 }}
                className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-[32px] p-6 shadow-xl group overflow-hidden"
              >
                <div className="absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                <div className="flex flex-col gap-2">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-2 shadow-lg group-hover:scale-110 transition-transform`}>
                    <stat.icon className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-sm font-medium opacity-60 uppercase tracking-widest">{stat.title}</p>
                  <p className="text-3xl font-black">{stat.val}</p>
                  <p className="text-xs text-muted-foreground mt-1">{stat.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid lg:grid-cols-5 gap-8">
            <div className="lg:col-span-3 space-y-8">
              {/* Ongoing Course */}
              <motion.div 
                whileHover={{ scale: 1.01 }}
                className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-[40px] p-10 shadow-2xl overflow-hidden group"
              >
                <div className="absolute top-0 left-10 right-10 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold">Continue Learning</h3>
                    <p className="text-muted-foreground">React Design Patterns & Optimization</p>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm font-bold">
                      <span className="text-muted-foreground">Module 4: Performance</span>
                      <span className="text-accent">72%</span>
                    </div>
                    <Progress value={72} className="h-2.5 bg-white/10 rounded-full" />
                  </div>
                  <Button className="w-full bg-accent-gradient hover:opacity-90 rounded-full h-14 text-lg font-bold shadow-lg">
                    Resume Lesson <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </div>
              </motion.div>

              {/* AI Recommendation Section */}
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <Sparkles className="w-7 h-7 text-accent animate-pulse" />
                  <h2 className="text-3xl font-headline font-bold">AI Recommendations</h2>
                </div>
                
                <AnimatePresence mode="wait">
                {loading ? (
                  <div className="grid gap-4">
                    {[1, 2].map((i) => (
                      <div key={i} className="h-32 bg-white/5 rounded-[32px] animate-pulse" />
                    ))}
                  </div>
                ) : recommendations ? (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="grid gap-6"
                  >
                    {recommendations.recommendedCourses.map((rec: any, i: number) => (
                      <motion.div 
                        key={i} 
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: i * 0.1 }}
                        className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-[32px] p-8 group overflow-hidden"
                      >
                        <div className="absolute top-0 left-10 right-10 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                        <div className="flex flex-col md:flex-row gap-6 items-center">
                          <div className="flex-1 space-y-3">
                            <Badge variant="outline" className="border-accent/30 text-accent">Personalized Recommendation</Badge>
                            <h4 className="text-2xl font-bold group-hover:text-accent transition-colors">{rec.title}</h4>
                            <p className="text-muted-foreground leading-relaxed">{rec.description}</p>
                            <p className="text-sm italic text-accent/80 font-medium">Reason: {rec.reason}</p>
                          </div>
                          <button className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] opacity-40 group-hover:opacity-100 transition-all text-white shrink-0">
                            <span>View details</span>
                            <ArrowRight className="w-4 h-4" />
                          </button>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                ) : (
                  <Button onClick={fetchRecommendations} className="glass border-white/10 rounded-full h-14 px-8">Generate AI Insights</Button>
                )}
                </AnimatePresence>
              </div>
            </div>

            <div className="lg:col-span-2 space-y-8">
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-[40px] p-8 shadow-2xl h-full overflow-hidden">
                <div className="absolute top-0 left-10 right-10 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                <h3 className="text-2xl font-bold mb-8">Upcoming Tasks</h3>
                <div className="space-y-8">
                  {[
                    { title: "Quiz: Data Flow", date: "Tomorrow, 2:00 PM", type: "Quiz", emoji: "📝" },
                    { title: "Project: Dashboard UI", date: "Friday, Oct 24", type: "Assignment", emoji: "💻" },
                    { title: "Workshop: Cloud Native", date: "Monday, Oct 27", type: "Live Session", emoji: "☁️" },
                  ].map((task, i) => (
                    <motion.div 
                      key={i} 
                      whileHover={{ x: 5 }}
                      className="flex gap-5 items-center group/task"
                    >
                      <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover/task:bg-white/10 transition-colors shadow-lg">
                        <span className="text-2xl">{task.emoji}</span>
                      </div>
                      <div>
                        <p className="font-bold text-lg">{task.title}</p>
                        <p className="text-sm text-muted-foreground">{task.date} • {task.type}</p>
                      </div>
                    </motion.div>
                  ))}
                  <div className="pt-6">
                    <Button variant="link" className="text-accent font-bold p-0 flex items-center gap-2 group/btn">
                      View Full Calendar <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
