"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Shield, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import CONFIG from "@/app-config";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-black/50 backdrop-blur-md border-b border-green-500/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-green-500" />
            <span className="text-xl font-bold">{CONFIG.appName}</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-green-500 hover:text-green-400 transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Button variant="outline" className="border-green-500 text-green-500 hover:bg-green-500 hover:text-black">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-green-500"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-black/95 border-b border-green-500/20"
        >
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-green-500 hover:text-green-400 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Button variant="outline" className="border-green-500 text-green-500 hover:bg-green-500 hover:text-black">
                Get Started
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
}