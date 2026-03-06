"use client";

import { motion } from "framer-motion";

export default function SunrayBeam() {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      {/* 
        The Ray - Conical Gradient 
        - Constrained to top-left
        - Masked heavily to prevent bottom leakage
      */}
      <div 
        className="absolute -top-[20%] -left-[10%] w-[150%] h-[150%] z-0 opacity-40 dark:opacity-20 blur-[60px]"
        style={{
          background: "conic-gradient(from 125deg at 5% 5%, transparent 0deg, currentColor 10deg, transparent 30deg)",
          // Use CSS variables or fallbacks for light/dark
          color: "var(--beam-color, #a1a1aa)", 
          // Strong radial mask to keep it contained to the top-left quadrant
          maskImage: "radial-gradient(circle at 10% 10%, black 0%, transparent 40%)",
          WebkitMaskImage: "radial-gradient(circle at 10% 10%, black 0%, transparent 40%)"
        }}
      >
        <div className="hidden dark:block" style={{ color: "white" }} />
        <div className="block dark:hidden" style={{ color: "#71717a" }} />
      </div>

      {/* Sparkling Particles - Constrained within the beam area */}
      <div 
        className="absolute top-0 left-0 w-1/2 h-1/2 z-10 pointer-events-none"
        style={{
          maskImage: "radial-gradient(circle at 20% 20%, black 0%, transparent 60%)",
          WebkitMaskImage: "radial-gradient(circle at 20% 20%, black 0%, transparent 60%)"
        }}
      >
         {[...Array(20)].map((_, i) => (
           <motion.div
             key={i}
             initial={{ opacity: 0, scale: 0, y: -20, x: 0 }}
             animate={{ 
               opacity: [0, 0.8, 0], 
               scale: [0, Math.random() * 1.5 + 0.5, 0], 
               y: [0, Math.random() * 100 + 50], // Fall down
               x: [0, Math.random() * 20 - 10]   // Slight drift
             }}
             transition={{ 
               duration: 3 + Math.random() * 4, 
               repeat: Infinity, 
               delay: Math.random() * 5,
               ease: "linear"
             }}
             style={{
               left: `${Math.random() * 40}%`, // Concentrated left
               top: `${Math.random() * 40}%`,  // Concentrated top
             }}
             className="absolute w-0.5 h-0.5 md:w-1 md:h-1 bg-zinc-900 dark:bg-white rounded-full shadow-[0_0_8px_rgba(255,255,255,0.8)]"
           />
         ))}
      </div>
    </div>
  );
}
