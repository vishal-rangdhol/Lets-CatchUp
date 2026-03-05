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
    <div className="min-h-screen">
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
      
      {/* Footer */}
      <footer className="py-20 border-t border-white/10 mt-20 relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[100px] -z-10" />
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
          <div className="col-span-2 space-y-6">
            <h4 className="font-headline font-bold text-3xl">LetsCatchUp <span className="text-gradient">Learn</span></h4>
            <p className="text-gray-400 text-lg max-w-sm">Empowering the next generation of technical leaders through world-class online education.</p>
          </div>
          <div className="space-y-6">
            <h5 className="font-bold text-white">Platform</h5>
            <ul className="space-y-4 text-gray-400">
              <li><a href="/about" className="hover:text-accent transition-colors">About Us</a></li>
              <li><a href="/services" className="hover:text-accent transition-colors">Services</a></li>
              <li><a href="/pricing" className="hover:text-accent transition-colors">Pricing</a></li>
            </ul>
          </div>
          <div className="space-y-6">
            <h5 className="font-bold text-white">Legal</h5>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-accent transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Terms of Service</a></li>
              <li><a href="/contact" className="hover:text-accent transition-colors">Support</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 pt-12 mt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-sm">© 2024 LetsCatchUp. Built with passion for learners.</p>
          <div className="flex gap-6">
            <div className="w-8 h-8 rounded-lg bg-white/5"></div>
            <div className="w-8 h-8 rounded-lg bg-white/5"></div>
            <div className="w-8 h-8 rounded-lg bg-white/5"></div>
          </div>
        </div>
      </footer>
    </div>
  );
}
