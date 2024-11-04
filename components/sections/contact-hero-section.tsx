"use client";

import { motion } from "framer-motion";
import { Globe } from "lucide-react";

export function ContactHeroSection() {
  return (
    <section className="min-h-[60vh] relative flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        {/* Animated grid lines */}
        <div className="absolute inset-0 grid grid-cols-8 gap-4">
          {[...Array(64)].map((_, i) => (
            <motion.div
              key={i}
              className="h-full w-0.5 bg-green-500/10"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{
                duration: 1.5,
                delay: i * 0.05,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="inline-block mb-8"
          >
            <Globe className="h-24 w-24 text-green-500" />
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Get in <span className="text-green-500">Touch</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            Have questions about our cybersecurity solutions? We're here to help
            protect your digital assets.
          </p>
        </motion.div>
      </div>
    </section>
  );
}