import { Hero } from "@/components/home/Hero";
import { PlatformDescription } from "@/components/home/PlatformDescription";
import { UnifiedSpace } from "@/components/home/UnifiedSpace";
import { Features } from "@/components/home/Features";
import { AboutSection } from "@/components/sections/AboutSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Invitation } from "@/components/home/Invitation";
import { FAQSection } from "@/components/sections/FAQSection";

export default function Home() {
  return (
    <div className="min-h-screen space-y-0">
      <Hero />
      <PlatformDescription />
      <Features />
      <UnifiedSpace />
      <AboutSection />
      <PricingSection />
      <Invitation />
      <FAQSection />
      <ContactSection />
    </div>
  );
}
