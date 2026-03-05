import { Hero } from "@/components/home/Hero";
import { Features } from "@/components/home/Features";
import { CTASection } from "@/components/home/CTASection";
import { PlatformDescription } from "@/components/home/PlatformDescription";
import { UnifiedSpace } from "@/components/home/UnifiedSpace";
import { Onboarding } from "@/components/home/Onboarding";

export default function Home() {
  return (
    <div className="min-h-screen space-y-0">
      <Hero />
      <PlatformDescription />
      <UnifiedSpace />
      <Onboarding />
      
      <Features />
      <CTASection />
    </div>
  );
}
