import { Hero } from "@/components/home/Hero";
import { Features } from "@/components/home/Features";
import { CourseGrid } from "@/components/home/CourseGrid";
import { CTASection } from "@/components/home/CTASection";
import { PlatformDescription } from "@/components/home/PlatformDescription";
import { UnifiedSpace } from "@/components/home/UnifiedSpace";
import { Testimonials } from "@/components/home/Testimonials";
import { Onboarding } from "@/components/home/Onboarding";

export default function Home() {
  return (
    <div className="min-h-screen space-y-0">
      <Hero />
      <PlatformDescription />
      <UnifiedSpace />
      <Onboarding />
      
      <div className="relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <CourseGrid />
      </div>
      
      <Features />
      <Testimonials />
      <CTASection />
    </div>
  );
}
