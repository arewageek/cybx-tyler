"use client";

import { motion } from "framer-motion";
import {
  Bitcoin,
  Cloud,
  Gamepad2,
  Lock,
  Mail,
  Twitter,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import CONFIG from "@/app-config";

const services = [
  {
    icon: Bitcoin,
    title: "Bitcoin Recovery",
    description:
      "If you have lost funds or cannot access your wallet, you are close to getting that resolved.",
  },
  {
    icon: Mail,
    title: "Email Hack/Recovery",
    description:
      "It could be the matter of a forgotten password or bridge of some sort, we have got you covered.",
  },
  {
    icon: Lock,
    title: "Account Unlock/Recovery",
    description:
      "Professional tools to grant you access to accounts of your choice.",
  },
  {
    icon: Cloud,
    title: "Phone Unlock",
    description:
      "Using tools that make the unlocking processes transparent and definite.",
  },
  {
    icon: Twitter,
    title: "Social Media Recovery",
    description:
      "We know how important these accounts are, so we have solutions prepared for you.",
  },
  {
    icon: Gamepad2,
    title: "Game Activation/Recovery",
    description:
      "Get all your game accounts recovered or activated. ",
  },
];

export function ServicesSection() {
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
            Our <span className="text-green-500">Security</span> Services
          </h2>
          <p className="text-gray-400">
            Comprehensive cybersecurity solutions tailored to protect your business
            from modern threats
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-lg border border-green-500/20 backdrop-blur-sm hover:border-green-500/40 transition-colors"
            >
              <service.icon className="h-12 w-12 text-green-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-400 mb-4">{service.description}</p>
              <Link href={CONFIG.contact.whatsapp}>
                <Button
                  variant="outline"
                  className="w-full border-green-500 text-green-500 hover:bg-green-500 hover:text-black"
                >
                  Learn More
                </Button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}