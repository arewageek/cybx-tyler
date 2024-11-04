"use client";

import { ContactHeroSection } from "@/components/sections/contact-hero-section";
import { ContactFormSection } from "@/components/sections/contact-form-section";
import { ContactInfoSection } from "@/components/sections/contact-info-section";

export default function ContactPage() {
  return (
    <div className="relative">
      <ContactHeroSection />
      <ContactFormSection />
      <ContactInfoSection />
    </div>
  );
}