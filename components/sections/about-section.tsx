"use client";

import CONFIG from "@/app-config";
import { motion } from "framer-motion";
import { Terminal, Shield, Users } from "lucide-react";
import Image from "next/image";

export function AboutSection() {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-green-500/10 blur-3xl rounded-full" />
            <div className="relative aspect-square rounded-lg overflow-hidden border border-green-500/20">
              <Image
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b"
                alt="Cybersecurity Operations"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              Protecting Your Digital Assets Since{" "}
              <span className="text-green-500">2011</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-gray-400 mb-8"
            >
              {CONFIG.appName} has been at the forefront of cybersecurity,
              protecting businesses from evolving digital threats. Our team of
              experts combines cutting-edge technology with years of experience to
              deliver unmatched security solutions.
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                {
                  icon: Shield,
                  stat: "99.9%",
                  label: "Threat Detection",
                },
                {
                  icon: Users,
                  stat: "10K",
                  label: "Clients Protected",
                },
                {
                  icon: Terminal,
                  stat: "24/7",
                  label: "Monitoring",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="text-center p-4 rounded-lg border border-green-500/20 backdrop-blur-sm"
                >
                  <item.icon className="h-8 w-8 text-green-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-green-500">
                    {item.stat}
                  </div>
                  <div className="text-sm text-gray-400">{item.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}