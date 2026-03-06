"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ThemeToggle from "@/components/theme/ThemeToggle";
import { useState } from "react";

export default function Navbar() {
  const [hoveredPath, setHoveredPath] = useState("");

  const navItems = [
    { name: "Features", href: "#features" },
    { name: "Product", href: "#product" },
    { name: "FAQs", href: "#faqs" },
    { name: "Pricing", href: "#pricing" },
  ];

  return (
    <div className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
      <nav className="w-full max-w-7xl bg-white/70 dark:bg-[#0d0d0d]/70 backdrop-blur-xl border border-zinc-200/50 dark:border-zinc-800/50 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.05)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 md:h-16">
            
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center gap-2 group">
                <div className="w-8 h-8 bg-black dark:bg-white rounded-xl flex items-center justify-center transition-transform group-hover:rotate-12 group-hover:scale-110 shadow-lg">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="stroke-white dark:stroke-black">
                    <rect x="3" y="3" width="7" height="7" rx="1" strokeWidth="2" />
                    <rect x="14" y="3" width="7" height="7" rx="1" strokeWidth="2" />
                    <rect x="3" y="14" width="7" height="7" rx="1" strokeWidth="2" />
                    <rect x="14" y="14" width="7" height="7" rx="1" strokeWidth="2" />
                  </svg>
                </div>
                <span className="text-lg font-bold tracking-tighter text-gray-900 dark:text-white uppercase">
                  Agenforce
                </span>
              </Link>
            </div>

            {/* Center Navigation - Premium Hover Effect */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onMouseEnter={() => setHoveredPath(item.name)}
                  onMouseLeave={() => setHoveredPath("")}
                  className="relative px-4 py-2 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
                >
                  {item.name}
                  {hoveredPath === item.name && (
                    <motion.span
                      layoutId="nav-hover"
                      className="absolute inset-0 bg-zinc-100 dark:bg-zinc-800/50 rounded-xl -z-10"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* Right Side */}
            <div className="flex items-center space-x-2 md:space-x-5">
              <Link
                href="#login"
                className="hidden sm:block text-zinc-600 hover:text-zinc-900 transition-colors text-sm font-medium dark:text-zinc-400 dark:hover:text-white px-2"
              >
                Login
              </Link>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="#signup"
                  className="relative overflow-hidden bg-black text-white dark:bg-white dark:text-black px-5 py-2 rounded-xl text-sm font-bold shadow-xl shadow-black/10 dark:shadow-white/5 group"
                >
                  <span className="relative z-10">Signup</span>
                  {/* Subtle sweep effect on button hover */}
                  <motion.div 
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent z-0"
                  />
                </Link>
              </motion.div>
              
              <div className="pl-2 border-l border-zinc-200 dark:border-zinc-800">
                <ThemeToggle />
              </div>
            </div>

          </div>
        </div>
      </nav>
    </div>
  );
}