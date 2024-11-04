import { AboutSection } from "@/components/sections/about-section";
import { StatsSection } from "@/components/sections/stats-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { AboutHeroSection } from "@/components/sections/about-hero-section";
import { WhyChooseUsSection } from "@/components/sections/why-choose-us-section";
import { WorkProcessSection } from "@/components/sections/work-process-section";

export default function AboutPage() {
  return (
    <div className="relative">
      <AboutHeroSection />
      <AboutSection />
      <WhyChooseUsSection />
      <WorkProcessSection />
      <StatsSection />
      <TestimonialsSection />
    </div>
  );
}