"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Shield } from "lucide-react";

export function CtaSection() {
  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-green-500/5 to-transparent" />
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center"
        >
          <Shield className="h-16 w-16 text-green-500 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need a Professional Solution?
          </h2>
          <p className="text-gray-400 mb-8 text-lg">
            Get started with our comprehensive cybersecurity solutions today.
            Protect your business from evolving cyber threats.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-green-500 hover:bg-green-600 text-black"
            >
              Get Started Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-green-500 text-green-500 hover:bg-green-500 hover:text-black"
            >
              Learn More
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}