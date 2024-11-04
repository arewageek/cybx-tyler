"use client";

import { motion } from "framer-motion";
import { Shield, Users, Clock, Award } from "lucide-react";

const stats = [
  {
    icon: Shield,
    value: "100M+",
    label: "Threats Blocked",
    suffix: "Monthly",
  },
  {
    icon: Users,
    value: "10k",
    label: "Active Clients",
    suffix: "Worldwide",
  },
  {
    icon: Clock,
    value: "99.9%",
    label: "Uptime",
    suffix: "Guaranteed",
  },
  {
    icon: Award,
    value: "13+",
    label: "Years Experience",
    suffix: "In Security",
  },
];

export function StatsSection() {
  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-green-500/5" />
      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-6 rounded-lg border border-green-500/20 backdrop-blur-sm"
            >
              <stat.icon className="h-10 w-10 text-green-500 mx-auto mb-4" />
              <div className="text-3xl font-bold text-green-500 mb-2">
                {stat.value}
              </div>
              <div className="text-lg font-semibold mb-1">{stat.label}</div>
              <div className="text-sm text-gray-400">{stat.suffix}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}