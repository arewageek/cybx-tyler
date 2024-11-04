import { Shield } from "lucide-react";
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black/50 border-t border-green-500/20 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Shield className="h-8 w-8 text-green-500" />
              <span className="text-xl font-bold">CyberGuard</span>
            </Link>
            <p className="text-gray-400">
              Protecting your digital assets with advanced cybersecurity solutions.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-green-500">
                  Threat Detection
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-green-500">
                  Network Security
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-green-500">
                  Cloud Security
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-green-500">
                  Consulting
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-green-500">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-green-500">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-green-500">
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-green-500"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>contact@cyberguard.com</li>
              <li>+1 (555) 123-4567</li>
              <li>123 Security Street</li>
              <li>Cyber City, CS 12345</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-green-500/20 mt-8 pt-8 text-center text-gray-400">
          <p>© {currentYear} CyberGuard Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}