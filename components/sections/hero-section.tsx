"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Shield, Lock, AlertCircle } from "lucide-react";

export function HeroSection() {
  const height = 400;
  const width = 400;
  return (
    <section className="min-h-screen pt-[10vh] relative flex items-center justify-center overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-0.5 w-0.5 bg-green-500/50"
            initial={{
              x: Math.random() * width,
              y: -10,
              opacity: 0,
            }}
            animate={{
              y: height + 10,
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Securing Your Digital Future with
              <span className="text-green-300"> Advanced Cybersecurity</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-400 mb-8"
          >
            Protect your business with enterprise-grade security solutions powered by
            cutting-edge technology and expert analysis.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col md:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              className="bg-green-500 hover:bg-green-600 text-black"
            >
              Get Protected Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-green-500 text-green-500 hover:bg-green-500 hover:text-black"
            >
              Learn More
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: Shield,
                title: "Advanced Protection",
                description: "24/7 monitoring and threat detection",
              },
              {
                icon: Lock,
                title: "Secure Infrastructure",
                description: "Enterprise-grade security solutions",
              },
              {
                icon: AlertCircle,
                title: "Incident Response",
                description: "Quick response to security threats",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.2 }}
                className="p-6 rounded-lg border border-green-500/20 backdrop-blur-sm flex flex-col items-center"
              >
                <feature.icon className="h-10 w-10 text-green-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}