
"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Sparkles, BookOpen, Trophy, Settings, LayoutDashboard, Search, Zap } from "lucide-react";
import { aiCourseRecommendation } from "@/ai/flows/ai-course-recommendation-flow";

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

  return (
    <div className="min-h-screen pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
        {/* Sidebar Nav (Mini) */}
        <aside className="w-full lg:w-64 space-y-4">
          <div className="glass-card rounded-2xl p-6 space-y-6">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30">
                <span className="font-bold">JD</span>
              </div>
              <div>
                <p className="font-bold text-sm">John Doe</p>
                <p className="text-[10px] text-muted-foreground">Pro Member</p>
              </div>
            </div>
            <nav className="space-y-2">
              <Button variant="ghost" className="w-full justify-start gap-3 bg-white/5">
                <LayoutDashboard className="w-4 h-4 text-accent" /> Dashboard
              </Button>
              <Button variant="ghost" className="w-full justify-start gap-3">
                <BookOpen className="w-4 h-4" /> My Courses
              </Button>
              <Button variant="ghost" className="w-full justify-start gap-3">
                <Trophy className="w-4 h-4" /> Certifications
              </Button>
              <Button variant="ghost" className="w-full justify-start gap-3">
                <Search className="w-4 h-4" /> Explore
              </Button>
              <Button variant="ghost" className="w-full justify-start gap-3">
                <Settings className="w-4 h-4" /> Settings
              </Button>
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1 space-y-8">
          <header className="space-y-1">
            <h1 className="text-3xl font-headline font-bold">Welcome Back, John 👋</h1>
            <p className="text-muted-foreground">Your learning journey is 65% complete this week.</p>
          </header>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="glass-card border-none">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium flex items-center gap-2">
                  <Zap className="w-4 h-4 text-accent" /> Active Courses
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">4</p>
                <p className="text-xs text-muted-foreground mt-1">+2 from last month</p>
              </CardContent>
            </Card>
            <Card className="glass-card border-none">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-primary" /> Lessons Finished
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">24</p>
                <p className="text-xs text-muted-foreground mt-1">8 more to go this week</p>
              </CardContent>
            </Card>
            <Card className="glass-card border-none">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium flex items-center gap-2">
                  <Trophy className="w-4 h-4 text-amber-400" /> XP Earned
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">12,450</p>
                <p className="text-xs text-muted-foreground mt-1">Top 5% of learners</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid lg:grid-cols-5 gap-8">
            <div className="lg:col-span-3 space-y-8">
              {/* Ongoing Course */}
              <Card className="glass-card border-none overflow-hidden">
                <CardHeader>
                  <CardTitle className="text-xl">Continue Learning</CardTitle>
                  <CardDescription>React Design Patterns & Optimization</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Module 4: Performance</span>
                      <span className="font-bold">72%</span>
                    </div>
                    <Progress value={72} className="h-2 bg-white/10" />
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90 rounded-full h-12 text-lg">
                    Resume Lesson
                  </Button>
                </CardContent>
              </Card>

              {/* AI Recommendation Section */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-6 h-6 text-accent animate-pulse" />
                  <h2 className="text-2xl font-headline font-bold">AI Recommended for You</h2>
                </div>
                
                {loading ? (
                  <div className="grid gap-4">
                    {[1, 2].map((i) => (
                      <div key={i} className="h-32 glass-card animate-pulse rounded-2xl" />
                    ))}
                  </div>
                ) : recommendations ? (
                  <div className="grid gap-6">
                    {recommendations.recommendedCourses.map((rec: any, i: number) => (
                      <Card key={i} className="glass-card border-none flex flex-col md:flex-row p-6 gap-6 group">
                        <div className="flex-1 space-y-2">
                          <Badge variant="outline" className="border-accent/30 text-accent">Recommended Course</Badge>
                          <h4 className="text-lg font-bold group-hover:text-accent transition-colors">{rec.title}</h4>
                          <p className="text-sm text-muted-foreground">{rec.description}</p>
                          <div className="pt-2">
                            <p className="text-xs italic text-accent/80">Reason: {rec.reason}</p>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <Button variant="secondary" className="rounded-full bg-white/5">View Details</Button>
                        </div>
                      </Card>
                    ))}
                    
                    {recommendations.personalizedLearningPaths.map((path: any, i: number) => (
                      <Card key={i} className="bg-gradient-to-r from-primary/20 to-accent/20 border border-white/10 p-6 rounded-2xl">
                        <h4 className="font-bold text-lg mb-2">Learning Path: {path.name}</h4>
                        <p className="text-sm text-muted-foreground mb-4">{path.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {path.courses.map((c: string, j: number) => (
                            <Badge key={j} className="bg-background/50 border border-white/10">{c}</Badge>
                          ))}
                        </div>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <Button onClick={fetchRecommendations} className="glass border-white/10">Generate AI Insights</Button>
                )}
              </div>
            </div>

            <div className="lg:col-span-2 space-y-8">
              <Card className="glass-card border-none h-full">
                <CardHeader>
                  <CardTitle>Upcoming Tasks</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {[
                    { title: "Quiz: Data Flow", date: "Tomorrow, 2:00 PM", type: "Quiz" },
                    { title: "Project: Dashboard UI", date: "Friday, Oct 24", type: "Assignment" },
                    { title: "Workshop: Cloud Native", date: "Monday, Oct 27", type: "Live Session" },
                  ].map((task, i) => (
                    <div key={i} className="flex gap-4 items-center">
                      <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                        <span className="text-lg">🗓️</span>
                      </div>
                      <div>
                        <p className="font-bold text-sm">{task.title}</p>
                        <p className="text-xs text-muted-foreground">{task.date} • {task.type}</p>
                      </div>
                    </div>
                  ))}
                  <Button variant="link" className="text-accent w-full mt-4">View Calendar</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
