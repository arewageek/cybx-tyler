"use client";

import { motion } from "framer-motion";
import { Search, Shield, Check } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Assessment",
    description:
      "We analyze your current security infrastructure and identify potential vulnerabilities",
  },
  {
    icon: Shield,
    title: "Implementation",
    description:
      "Our team deploys custom security solutions tailored to your specific needs",
  },
  {
    icon: Check,
    title: "Monitoring",
    description:
      "Continuous monitoring and updates to ensure your protection stays ahead of threats",
  },
];

export function WorkProcessSection() {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Our <span className="text-green-500">Work Process</span>
          </h2>
          <p className="text-gray-400">
            A streamlined approach to implementing robust security solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative"
            >
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 left-full w-full h-0.5 bg-green-500/20 transform -translate-y-1/2 z-0" />
              )}
              
              <div className="relative z-10 p-6 rounded-lg border border-green-500/20 backdrop-blur-sm text-center">
                <div className="relative mx-auto w-16 h-16 mb-6">
                  <div className="absolute inset-0 bg-green-500/20 rounded-full blur-md" />
                  <div className="relative bg-black border border-green-500/20 rounded-full p-4">
                    <step.icon className="h-8 w-8 text-green-500" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}