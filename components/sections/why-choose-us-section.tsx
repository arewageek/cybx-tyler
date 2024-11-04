"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Clock,
  Users,
  Target,
  Award,
  Zap,
} from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "Advanced Security",
    description:
      "State-of-the-art technology and protocols to protect your digital assets",
  },
  {
    icon: Clock,
    title: "24/7 Monitoring",
    description:
      "Round-the-clock surveillance and immediate threat response",
  },
  {
    icon: Users,
    title: "Expert Team",
    description:
      "Certified security professionals with years of industry experience",
  },
  {
    icon: Target,
    title: "Tailored Solutions",
    description:
      "Custom security strategies designed for your specific needs",
  },
  {
    icon: Award,
    title: "Industry Leading",
    description:
      "Recognized excellence in cybersecurity services and solutions",
  },
  {
    icon: Zap,
    title: "Rapid Response",
    description:
      "Swift action against security threats and immediate incident resolution",
  },
];

export function WhyChooseUsSection() {
  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-green-500/5 to-transparent" />
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Why Clients <span className="text-green-500">Choose Us</span>
          </h2>
          <p className="text-gray-400">
            We combine expertise, innovation, and dedication to deliver
            unmatched cybersecurity solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-lg border border-green-500/20 backdrop-blur-sm hover:border-green-500/40 transition-all hover:transform hover:scale-105"
            >
              <reason.icon className="h-12 w-12 text-green-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3">{reason.title}</h3>
              <p className="text-gray-400">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}