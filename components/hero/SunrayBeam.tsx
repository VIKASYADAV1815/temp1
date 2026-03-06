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
           maskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 80%)",
           WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 80%)"
         }}
    >
      {/* THE RAY - Perspective Locked 
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
          color: "var(--beam-color, #71717a)", // Darker base color for light mode
          maskImage: "radial-gradient(circle at 5% 5%, black 0%, transparent 60%)",
          WebkitMaskImage: "radial-gradient(circle at 5% 5%, black 0%, transparent 60%)"
        }}
      >
        <div className="hidden dark:block" style={{ color: "rgba(255,255,255,0.15)" }} />
        <div className="block dark:hidden" style={{ color: "rgba(82, 82, 91, 0.6)" }} /> {/* Darker ray in light mode */}
      </motion.div>

      {/* DUST PARTICLES - Reduced Quantity & Diagonal Movement 
      */}
      <div className="absolute inset-0 z-10 pointer-events-none">
         {mounted && [...Array(60)].map((_, i) => {
           const randomDelay = Math.random() * 12;
           // Very slow: 15 to 25 seconds for that "floating" feel
           const randomDuration = 15 + Math.random() * 10; 
           const size = Math.random() * 1.5 + 0.5; // Sharper and smaller
           
           // Diagonal Trajectory Logic
           // Increased distance to reach the landing image area
           const driftDist = 350 + Math.random() * 250;
           
           return (
             <motion.div
               key={i}
               initial={{ opacity: 0, x: 0, y: 0 }}
               animate={{ 
                 opacity: [0, 0.8, 0.8, 0],
                 // Diagonal travel: x moves proportionally to y
                 x: [0, driftDist * 0.4], 
                 y: [
                   0, 
                   driftDist, 
                   driftDist - 40 // Stronger bounce back up
                 ],
                 scale: [0, 1.2, 1.2, 0]
               }}
               transition={{ 
                 duration: randomDuration,
                 repeat: Infinity, 
                 delay: randomDelay,
                 ease: "linear",
                 times: [0, 0.1, 0.85, 1] 
               }}
               style={{
                 // Clustered near the beam source
                 left: `${Math.random() * 20}%`, 
                 top: `${Math.random() * 15}%`,
                 width: `${size}px`,
                 height: `${size}px`,
               }}
               className={`absolute rounded-full
                 /* Light Mode: Much darker/visible dust */
                 bg-zinc-600/80 shadow-[0_0_2px_rgba(0,0,0,0.2)]
                 /* Dark Mode: Crisp White/Cyan Mix */
                 dark:bg-white dark:shadow-[0_0_3px_rgba(255,255,255,0.2)]
                 ${i % 2 === 0 ? 'dark:bg-cyan-200/80' : ''}
               `}
             />
           );
         })}
      </div>
    </div>
  );
}