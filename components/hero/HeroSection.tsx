"use client";

import LandingImages from "./LandingImages";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import SunrayBeam from "./SunrayBeam";

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
    <section ref={containerRef} className="relative min-h-[85vh] pt-28 pb-12 md:pt-36 md:pb-24 overflow-hidden bg-background text-foreground">
      
      {/* 1. PARALLAX DOTS - Increased opacity for more visibility */}
      <motion.div 
        style={{ 
          y: yDots,
          WebkitMaskImage: 'radial-gradient(circle at 20% 20%, black 0%, transparent 65%)',
          maskImage: 'radial-gradient(circle at 20% 20%, black 0%, transparent 65%)',
        }}
        className="absolute top-0 left-0 w-full h-full pointer-events-none z-0"
      >
        <DottedTexture color="#6366f1" opacity="0.25" />
      </motion.div>

      {/* DYNAMIC SUNRAY BEAM COMPONENT */}
      <SunrayBeam />

      {/* Content Container */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10 flex flex-col items-end text-right">
        <div className="max-w-2xl">
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.2] md:leading-[1.15] bg-clip-text text-transparent bg-gradient-to-b from-zinc-900 to-zinc-600 dark:from-white dark:to-zinc-400">
            Agents that do the work.
            <br />
            <span className="from-zinc-900 to-zinc-500 dark:from-white dark:to-zinc-400"> Approvals that keep you safe.</span>
          </h1>
          
          <p className="mt-4 text-sm md:text-base text-zinc-600 dark:text-zinc-300 max-w-sm sm:max-w-lg ml-auto leading-relaxed font-normal opacity-80">
            Deploy AI agents that plan, act through your tools, and report 
            outcomes—without changing how your teams work.
          </p>
          
          {/* Buttons: Forced Row on all devices */}
          <div className="mt-8 flex flex-row items-center justify-end gap-3 sm:gap-5">
            {/* 1. SECONDARY BUTTON */}
            <button className="text-zinc-500 dark:text-zinc-400 text-[11px] sm:text-xs md:text-sm font-medium 
              hover:text-zinc-950 dark:hover:text-zinc-100 px-3 py-2 transition-colors duration-300 whitespace-nowrap">
              View role based demos
            </button>

            {/* 2. PRIMARY BUTTON: The "Pro" Slab with Sharp Cyan Edge */}
            <button className="group relative px-6 py-2.5 sm:px-8 sm:py-3 rounded-xl font-medium text-[11px] sm:text-xs md:text-sm transition-all duration-500
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
              active:scale-[0.98] overflow-hidden">
              
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
                Start free trial
                <svg className="w-3.5 h-3.5 transition-transform duration-500 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* 2. IMAGE SECTION */}
      <div className="relative z-20 mt-12 md:mt-16 px-4">
        <LandingImages />
      </div>

    </section>
  );
}