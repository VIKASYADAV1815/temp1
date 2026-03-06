"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function SunrayBeam() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden"
         style={{
           // Global vertical mask to strictly prevent bottom leakage - Cut off earlier
           maskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 70%)",
           WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 70%)"
         }}
    >
      {/* 
        THE RAY - Conical Gradient 
        - Constrained to top-left
        - Animated entry: Revolving/Revealing from top-left
      */}
      <motion.div 
        initial={{ opacity: 0, rotate: -20, scale: 0.5, filter: "blur(20px)" }}
        animate={{ 
          opacity: [0, 1, 0.7], 
          rotate: [-20, -5, 0],
          scale: [0.5, 1.1, 1],
          filter: ["blur(20px)", "blur(50px)", "blur(40px)"]
        }}
        transition={{ 
          duration: 1.8, 
          ease: "easeOut",
          times: [0, 0.6, 1]
        }}
        className="absolute -top-[20%] -left-[10%] w-[150%] h-[150%] z-0 blur-[50px]"
        style={{
          background: "conic-gradient(from 135deg at 5% 5%, transparent 0deg, currentColor 10deg, transparent 35deg)",
          color: "var(--beam-color, #a1a1aa)", 
          // Strong radial mask to keep it contained to the top-left quadrant
          maskImage: "radial-gradient(circle at 5% 5%, black 0%, transparent 60%)",
          WebkitMaskImage: "radial-gradient(circle at 5% 5%, black 0%, transparent 60%)"
        }}
      >
        <div className="hidden dark:block" style={{ color: "rgba(255,255,255,0.15)" }} />
        <div className="block dark:hidden" style={{ color: "rgba(82, 82, 91, 0.4)" }} />
      </motion.div>

      {/* 
        SPARKLING PARTICLES
        - Constrained within the beam area (top-left)
        - Fall from top-left towards bottom-right
        - Visible in Light & Dark modes
      */}
      <div 
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          // Mask particles to match the beam's general area
          maskImage: "radial-gradient(circle at 10% 10%, black 0%, transparent 55%)",
          WebkitMaskImage: "radial-gradient(circle at 10% 10%, black 0%, transparent 55%)"
        }}
      >
         {mounted && [...Array(35)].map((_, i) => {
           // Randomly assign cyan or standard color
           const isCyan = Math.random() > 0.6; // 40% chance of cyan
           const randomDelay = Math.random() * 2;
           // Slower animation: 5s to 10s duration
           const randomDuration = 5 + Math.random() * 5;
           
           return (
             <motion.div
               key={i}
               initial={{ 
                 opacity: 0, 
                 x: -10,
                 y: -10 
               }}
               animate={{ 
                 opacity: [0, 1, 1, 0], 
                 x: [0, Math.random() * 100 + 30],   // Drift right
                 y: [0, Math.random() * 350 + 150],  // Fall down
                 scale: [0, Math.random() * 1.5 + 0.5, 0]
               }}
               transition={{ 
                 duration: randomDuration,
                 repeat: Infinity, 
                 delay: randomDelay,
                 ease: "linear"
               }}
               style={{
                 left: `${Math.random() * 35}%`, // Start in top-left area
                 top: `${Math.random() * 35}%`,  // Start in top-left area
               }}
               className={`absolute rounded-full blur-[0.5px]
                 ${isCyan 
                   ? 'w-1.5 h-1.5 bg-cyan-400 dark:bg-cyan-300 shadow-[0_0_10px_rgba(34,211,238,0.8)]' 
                   : 'w-1 h-1 bg-zinc-500 dark:bg-white/80'
                 }`}
             />
           );
         })}
      </div>
    </div>
  );
}
