"use client";

import CONFIG from "@/app-config";
import { motion } from "framer-motion";
import { Phone, Mail, MessageCircle, Instagram } from "lucide-react";
import Link from "next/link";

const { tel, email, whatsapp, instagram } = CONFIG.contact

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    value: tel.long,
    href: `tel:${tel.short}`,
  },
  {
    icon: Mail,
    title: "Email",
    value: email,
    href: `mailto:${email}`,
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: tel.long,
    href: whatsapp,
  },
  {
    icon: Instagram,
    title: "Instagram",
    value: `@${instagram.username}`,
    href: instagram.url,
  },
];

export function ContactInfoSection() {
  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-green-500/5 to-transparent" />
      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                href={info.href}
                target={info.href.startsWith("http") ? "_blank" : undefined}
                rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="block p-6 rounded-lg border border-green-500/20 backdrop-blur-sm hover:border-green-500/40 transition-all hover:transform hover:scale-105"
              >
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <div className="absolute inset-0 bg-green-500/20 rounded-full blur-md" />
                    <div className="relative bg-black border border-green-500/20 rounded-full p-3">
                      <info.icon className="h-6 w-6 text-green-500" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">{info.title}</h3>
                    <p className="text-gray-400">{info.value}</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}