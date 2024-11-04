"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Star } from "lucide-react";
import CONFIG from "@/app-config";

const appName = CONFIG.appName
const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Retired Accountant",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    content:
      `I was devastated when I lost access to my cryptocurrency wallet. I felt hopeless, but then I found ${appName}. Their team was incredibly supportive and professional. They kept me informed throughout the entire process and, to my surprise, were able to recover my funds. I can't thank them enough for their expertise and dedication.`,
  },
  {
    name: "Michael Chen",
    role: "Financial Consultant",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    content:
      `As a new crypto investor, I had no idea what to do when my funds disappeared. ${appName} was a lifesaver. They patiently explained the process and worked tirelessly to recover my lost assets. I'm so grateful for their help and would recommend them to anyone in a similar situation.`,
  },
  {
    name: "Emily Rodriguez",
    role: "Software Engineer",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    content:
      `I was initially skeptical about hiring a recovery agency, but ${appName} quickly changed my mind. Their team's knowledge and experience were evident from the start. They were able to navigate complex technical issues and successfully recovered my funds. I'm amazed at their professionalism and highly recommend their services.`,
  },
];

export function TestimonialsSection() {
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
            Trusted by <span className="text-green-500">Industry Leaders</span>
          </h2>
          <p className="text-gray-400">
            See what our clients say about our cybersecurity services
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-lg border border-green-500/20 backdrop-blur-sm"
            >
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 text-green-500 fill-green-500"
                  />
                ))}
              </div>
              <p className="text-gray-400 mb-6">{testimonial.content}</p>
              <div className="flex items-center">
                <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}