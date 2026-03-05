"use client";

import LandingImages from "./LandingImages";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const DottedTexture = ({ color = "#000", opacity = "0.2" }) => (
  <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="ultra-dense-dots" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
        <circle cx="1.5" cy="1.5" r="0.8" fill={color} fillOpacity={opacity} />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#ultra-dense-dots)" />
  </svg>
);

export default function HeroSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yDots = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section ref={containerRef} className="relative min-h-[90vh] pt-24 overflow-hidden bg-background text-foreground">
      
      {/* 1. PARALLAX DOTS (Shifted slightly and masked) */}
      <motion.div 
        style={{ 
          y: yDots,
          WebkitMaskImage: 'radial-gradient(circle at 20% 20%, black 0%, transparent 60%)',
          maskImage: 'radial-gradient(circle at 20% 20%, black 0%, transparent 60%)',
        }}
        className="absolute top-0 left-0 w-full h-full pointer-events-none z-0"
      >
        <DottedTexture color="#6366f1" opacity="0.25" />
      </motion.div>

      {/* Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-end text-right">
        <div className="max-w-3xl">
          {/* FONT TOUCH: Subtle gradient for depth + Reduced size */}
          <h1 className="text-[2.5rem] md:text-[3.5rem] font-bold tracking-tight leading-[1.1] bg-clip-text text-transparent bg-gradient-to-b from-zinc-900 to-zinc-600 dark:from-white dark:to-zinc-400">
            Agents that do the work.
            <br />
            <span className="from-zinc-900 to-zinc-500 dark:from-white dark:to-zinc-400">Approvals that keep you safe.</span>
          </h1>
          
          <p className="mt-4 text-base md:text-lg text-zinc-600 dark:text-zinc-300 max-w-xl ml-auto leading-relaxed font-normal opacity-90">
            Deploy AI agents that plan, act through your tools, and report 
            outcomes—without changing how your teams work.
          </p>
          
          <div className="mt-8 flex items-center justify-end gap-6">
            <button className="text-zinc-900 dark:text-zinc-100 text-sm font-semibold hover:opacity-70 transition-opacity">
              View role based demos
            </button>

            {/* PRIMARY BUTTON - Heavy Shadow maintained */}
            <button className="group relative bg-[#000] text-white dark:bg-white dark:text-black px-8 py-3.5 rounded-xl font-medium text-sm transition-all duration-300 overflow-hidden
              shadow-[20px_25px_50px_-10px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.4)]
              hover:-translate-y-1.5 hover:translate-x-1.5
              hover:shadow-[28px_35px_60px_-12px_rgba(0,0,0,0.6)]">
              
              <div className="absolute inset-0 pointer-events-none opacity-20 scale-[0.4]">
                <DottedTexture color="#fff" opacity="0.9" />
              </div>
              <span className="relative z-10">Start your free trial</span>
            </button>
          </div>
        </div>
      </div>

      {/* 2. IMAGE SECTION - Pulled UP significantly */}
      <div className="relative z-20 -mt-12 md:mt-8">
        <LandingImages />
      </div>

    </section>
  );
}
