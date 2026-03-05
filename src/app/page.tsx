
import { Hero } from "@/components/home/Hero";
import { Features } from "@/components/home/Features";
import { CourseGrid } from "@/components/home/CourseGrid";
import { CTASection } from "@/components/home/CTASection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <CourseGrid />
      <Features />
      <CTASection />
      
      {/* Footer */}
      <footer className="py-12 border-t border-white/10 mt-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h4 className="font-headline font-bold text-xl mb-2">LetsCatchUp <span className="text-accent">Learn</span></h4>
            <p className="text-muted-foreground text-sm max-w-xs">Elevating education through technology and accessibility.</p>
          </div>
          <div className="flex gap-10 text-sm font-medium text-muted-foreground">
            <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-accent transition-colors">Career</a>
          </div>
          <p className="text-muted-foreground text-sm">© 2024 LetsCatchUp. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
