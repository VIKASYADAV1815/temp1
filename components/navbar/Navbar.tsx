"use client";

import Link from "next/link";
import ThemeToggle from "@/components/theme/ThemeToggle";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 dark:bg-[#0d0d0d]/80 dark:border-zinc-800 shadow-sm dark:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.6)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-6 h-6 bg-black dark:bg-white rounded-sm flex items-center justify-center shadow-sm">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="2" y="2" width="8" height="8" fill="white" />
                  <rect x="14" y="2" width="8" height="8" fill="white" />
                  <rect x="2" y="14" width="8" height="8" fill="white" />
                  <rect x="14" y="14" width="8" height="8" fill="white" />
                </svg>
              </div>
              <span className="text-xl font-semibold text-gray-900 dark:text-white">Agenforce</span>
            </Link>
          </div>

          {/* Center Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="#features"
              className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium dark:text-zinc-300 dark:hover:text-white underline-offset-4 hover:underline"
            >
              Features
            </Link>
            <Link
              href="#product"
              className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium dark:text-zinc-300 dark:hover:text-white underline-offset-4 hover:underline"
            >
              Product
            </Link>
            <Link
              href="#faqs"
              className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium dark:text-zinc-300 dark:hover:text-white underline-offset-4 hover:underline"
            >
              FAQs
            </Link>
            <Link
              href="#pricing"
              className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium dark:text-zinc-300 dark:hover:text-white underline-offset-4 hover:underline"
            >
              Pricing
            </Link>
          </div>

          {/* Right Side */}
          <div className="flex items-center space-x-4">
            <Link
              href="#login"
              className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium dark:text-zinc-300 dark:hover:text-white"
            >
              Login
            </Link>
            <Link
              href="#signup"
              className="bg-black text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors dark:bg-white dark:text-black dark:hover:bg-zinc-200"
            >
              Signup
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
