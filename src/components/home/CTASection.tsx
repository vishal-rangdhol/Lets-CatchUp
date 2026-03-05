
"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function CTASection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto relative rounded-[2rem] overflow-hidden bg-gradient-to-br from-primary via-primary/80 to-accent/80 p-1">
        <div className="bg-background/90 backdrop-blur-xl rounded-[1.9rem] px-8 py-16 md:p-20 text-center space-y-8">
          <h2 className="text-4xl md:text-6xl font-headline font-bold">Ready to Transform Your <span className="text-accent">Career?</span></h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join 10,000+ students already mastering the skills of the future. Start your learning journey today with our flexible payment plans.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto pt-6">
            <Input 
              placeholder="Enter your email" 
              className="rounded-full bg-white/5 border-white/10 h-14 px-6 text-lg focus-visible:ring-accent"
            />
            <Button size="lg" className="bg-primary hover:bg-primary/90 h-14 px-10 rounded-full text-lg shadow-[0_0_20px_rgba(76,51,204,0.4)]">
              Get Started
            </Button>
          </div>
          
          <p className="text-sm text-muted-foreground">No credit card required to start exploring.</p>
        </div>
      </div>
    </section>
  );
}
