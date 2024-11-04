"use client";

import { motion } from "framer-motion";
import { Shield, Lock, Code } from "lucide-react";

export function ServicesHeroSection() {
  const height = 1000
  const width = 1000

  return (
    <section className="min-h-[70vh] pt-[10vh] relative flex items-center justify-center overflow-hidden">

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="flex justify-center space-x-4 mb-6">
            <Shield className="h-12 w-12 text-green-500" />
            <Lock className="h-12 w-12 text-green-500" />
            <Code className="h-12 w-12 text-green-500" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Customer Satisfaction is{" "}
            <span className="text-green-300">Always the Priority</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400">
            With over a decade of experience, we have been protecting businesses
            from evolving cyber threats while staying ahead of the curve.
          </p>
        </motion.div>
      </div>
    </section>
  );
}