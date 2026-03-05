"use client";

import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const orbRef = useRef<HTMLDivElement>(null);
  const ring1Ref = useRef<SVGSVGElement>(null);
  const ring2Ref = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Floating animation for the core
      gsap.to(orbRef.current, {
        y: -30,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Rotation animations for rings
      gsap.to(ring1Ref.current, {
        rotate: 360,
        duration: 20,
        repeat: -1,
        ease: "none",
      });

      gsap.to(ring2Ref.current, {
        rotate: -360,
        duration: 25,
        repeat: -1,
        ease: "none",
      });

      // Scroll-triggered interactions
      gsap.to(ring1Ref.current, {
        scale: 1.5,
        opacity: 0.1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.5,
        },
      });

      gsap.to(orbRef.current, {
        scale: 0.8,
        filter: "blur(10px)",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      // Mouse Move Interaction
      const handleMouseMove = (e: MouseEvent) => {
        const { clientX, clientY } = e;
        const xPos = (clientX / window.innerWidth - 0.5) * 50;
        const yPos = (clientY / window.innerHeight - 0.5) * 50;

        gsap.to(orbRef.current, {
          x: xPos,
          y: yPos,
          duration: 1.2,
          ease: "power2.out",
        });

        gsap.to([ring1Ref.current, ring2Ref.current], {
          x: xPos * 0.5,
          y: yPos * 0.5,
          duration: 1.5,
          ease: "power2.out",
        });
      };

      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative pt-32 pb-20 overflow-hidden">
      {/* Decorative Glow Elements */}
      <div className="absolute top-0 right-0 -z-10 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-0 left-0 -z-10 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-10">
          <Badge variant="secondary" className="bg-white/5 border-white/10 text-accent px-5 py-2 rounded-full backdrop-blur-md">
            🚀 Accelerate Your Growth
          </Badge>
          
          <h1 className="text-5xl lg:text-7xl font-headline font-bold leading-tight tracking-tight">
            Unlock potential and <br />
            <span className="text-gradient">build lasting connections</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-lg leading-relaxed font-medium">
            Lets Catch Up is your all-in-one platform for collaboration, learning, and growth — built to support schools, startups, and communities with powerful, intuitive tools.
          </p>

          <div className="flex flex-wrap gap-5">
            <Link href="/contact">
              <Button size="lg" className="bg-accent-gradient hover:opacity-90 rounded-full px-10 h-16 text-lg font-bold transition-all hover:scale-105 button-glow border-none">
                Get Started <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="rounded-full px-10 h-16 text-lg glass border-white/20 hover:bg-white/10 transition-all">
                Contact Us
              </Button>
            </Link>
          </div>

          <div className="flex items-center gap-8 pt-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <CheckCircle2 className="w-5 h-5 text-accent" />
              <span>Free for teams</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <CheckCircle2 className="w-5 h-5 text-accent" />
              <span>No credit card</span>
            </div>
          </div>
        </div>

        {/* Interactive Object Animation */}
        <div className="relative min-h-[600px] flex items-center justify-center">
          <div ref={orbRef} className="relative z-20">
            {/* The Core Orb */}
            <div className="w-64 h-64 rounded-full bg-accent-gradient p-[1px] shadow-[0_0_80px_rgba(79,209,197,0.4)] transition-all">
              <div className="w-full h-full rounded-full bg-[#0b0f2f] flex items-center justify-center backdrop-blur-3xl overflow-hidden relative">
                <div className="absolute inset-0 bg-accent/10 animate-pulse" />
                <div className="w-32 h-32 rounded-full bg-accent-gradient blur-3xl opacity-30" />
                <div className="relative z-10 text-accent font-headline font-bold text-4xl tracking-tighter">LCU</div>
              </div>
            </div>
          </div>

          {/* Rotating Rings */}
          <svg 
            ref={ring1Ref}
            className="absolute w-[500px] h-[500px] pointer-events-none z-10"
            viewBox="0 0 100 100"
          >
            <circle 
              cx="50" cy="50" r="48" 
              fill="none" 
              stroke="url(#grad1)" 
              strokeWidth="0.5" 
              strokeDasharray="15 10"
              className="opacity-40"
            />
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#4fd1c5" />
                <stop offset="100%" stopColor="#667eea" />
              </linearGradient>
            </defs>
          </svg>

          <svg 
            ref={ring2Ref}
            className="absolute w-[400px] h-[400px] pointer-events-none z-10"
            viewBox="0 0 100 100"
          >
            <circle 
              cx="50" cy="50" r="42" 
              fill="none" 
              stroke="url(#grad2)" 
              strokeWidth="0.2" 
              strokeDasharray="5 5"
              className="opacity-30"
            />
            <defs>
              <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#667eea" />
                <stop offset="100%" stopColor="#f687b3" />
              </linearGradient>
            </defs>
          </svg>

          {/* Decorative floating dots */}
          {[...Array(6)].map((_, i) => (
            <div 
              key={i}
              className="absolute w-1 h-1 bg-accent rounded-full animate-pulse blur-[1px]"
              style={{
                top: `${20 + Math.random() * 60}%`,
                left: `${20 + Math.random() * 60}%`,
                animationDelay: `${i * 0.5}s`,
                opacity: 0.5
              }}
            />
          ))}

          {/* Background decoration */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-accent/5 rounded-full blur-[100px] -z-10" />
        </div>
      </div>
    </section>
  );
}
