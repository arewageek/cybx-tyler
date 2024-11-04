"use client";

import { motion } from "framer-motion";
import { Shield, Lock, Code } from "lucide-react";

export function AboutHeroSection() {
  const height = 1000
  const width = 1000

  return (
    <section className="min-h-[70vh] pt-[10vh] relative flex items-center justify-center overflow-hidden">
      {/* Matrix-like falling characters effect */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-green-500/30 text-2xl font-mono"
            initial={{
              x: Math.random() * width,
              y: -20,
              opacity: 0,
            }}
            animate={{
              y: height + 20,
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            {String.fromCharCode(33 + Math.floor(Math.random() * 94))}{" "}
          </motion.div>
        ))}
      </div>

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
            Pioneering the Future of{" "}
            <span className="text-green-500">Cybersecurity</span>
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