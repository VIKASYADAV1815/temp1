"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ThemeToggle from "@/components/theme/ThemeToggle";
import { useState } from "react";

const DottedTexture = ({ color = "#000", opacity = "0.2" }) => (
  <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="ultra-dense-dots-nav" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
        <circle cx="1.5" cy="1.5" r="0.8" fill={color} fillOpacity={opacity} />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#ultra-dense-dots-nav)" />
  </svg>
);

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
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="relative group overflow-hidden px-4 py-2 rounded-xl">
                <Link
                  href="#login"
                  className="relative z-10 text-zinc-600 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors text-sm font-bold"
                >
                  Login
                </Link>
                {/* Refined Shimmer Effect for Login */}
                <motion.div
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-zinc-200/30 dark:via-zinc-700/30 to-transparent z-0 pointer-events-none"
                />
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="#signup"
                  className="group relative px-5 py-2 rounded-xl font-medium text-sm transition-all duration-300
                    /* CUSTOM BG: Deep Charcoal/Slate Gradient */
                    bg-gradient-to-b from-zinc-800 to-zinc-950 dark:from-zinc-100 dark:to-zinc-200
                    text-white dark:text-zinc-950
                    
                    /* SHADOW: Multi-layered for realistic right-bottom depth */
                    shadow-[1px_1px_0px_rgba(255,255,255,0.1)_inset,4px_6px_12px_rgba(0,0,0,0.4),10px_15px_30px_-5px_rgba(0,0,0,0.3)]
                    dark:shadow-[0px_1px_0px_rgba(255,255,255,0.8)_inset,4px_6px_12px_rgba(0,0,0,0.1),8px_12px_24px_-6px_rgba(0,0,0,0.1)]
                    
                    /* HOVER: Sharp Lift */
                    hover:-translate-y-1 hover:translate-x-0.5
                    hover:shadow-[15px_20px_40px_-10px_rgba(0,0,0,0.6)]
                    dark:hover:shadow-[15px_20px_40px_-10px_rgba(0,0,0,0.2)]
                    overflow-hidden flex items-center gap-2"
                >
                  {/* INTERNAL TEXTURE */}
                  <div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.08] scale-[0.4] z-10">
                    <DottedTexture color="currentColor" opacity="1" />
                  </div>

                  {/* THE BEAM: Thinner, Sharper, Side-aligned */}
                  <div className="absolute bottom-0 left-0 right-0 h-[1.5px] w-full flex justify-center z-30">
                    <div className="w-[85%] h-full bg-gradient-to-r from-transparent via-cyan-400 dark:via-cyan-500 to-transparent opacity-90" />
                  </div>

                  {/* TOP BEVEL: 1px light-catching edge */}
                  <div className="absolute inset-x-0 top-0 h-[1px] bg-white/10 dark:bg-black/5 z-20" />

                  {/* HOVER SWEEP */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/5 dark:via-black/5 to-transparent z-20" />
                  
                  <span className="relative z-30 flex items-center gap-2 tracking-tight">
                    Signup
                  </span>
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