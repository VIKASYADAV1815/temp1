"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function Feat2Premium() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // 1. ADVANCED MOUSE TRACKING
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for a "heavy" premium feel
  const smoothX = useSpring(mouseX, { stiffness: 100, damping: 30 });
  const smoothY = useSpring(mouseY, { stiffness: 100, damping: 30 });

  // 2. TILT & PARALLAX LOGIC
  const rotateX = useTransform(smoothY, [-200, 200], [15, -15]);
  const rotateY = useTransform(smoothX, [-200, 200], [-15, 15]);

  function handleMouseMove(e: React.MouseEvent) {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    // Normalize mouse position to the center of the card
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full h-full p-10 flex flex-col group overflow-hidden bg-background cursor-crosshair"
      style={{ perspective: "1200px" }}
    >
      
      {/* Background Glow */}
      <motion.div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        animate={{ opacity: [0.2, 0.35, 0.2] }}
        transition={{ duration: 6, repeat: Infinity }}
        style={{ background: "radial-gradient(480px circle at 55% 45%, rgba(34,197,94,0.10), transparent 60%)" }}
      />

      {/* --- MOUSE GLOW (The 'Aura' Detail) --- */}
      <motion.div 
        className="absolute inset-0 z-1 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: useTransform(
            [smoothX, smoothY],
            ([x, y]) => `radial-gradient(250px circle at calc(50% + ${x}px) calc(50% + ${y}px), rgba(99, 102, 241, 0.07), transparent 80%)`
          )
        }}
      />

      {/* --- CONTENT --- */}
      <div className="relative z-10">
        <motion.div style={{ translateZ: "40px" }}>
          <h3 className="text-xl font-bold tracking-tight">
            Instant <span className="text-zinc-500 dark:text-zinc-400 group-hover:text-indigo-500 transition-colors duration-700">Response.</span>
          </h3>
          <p className="text-[13px] mt-2 font-medium leading-relaxed max-w-[220px] text-zinc-600 dark:text-zinc-300">
            Sub‑millisecond latency keeps missions on track. Tuned for reliability under load.
          </p>
        </motion.div>
      </div>

      {/* --- CENTER PIECE: 3D SPEED RADAR --- */}
      <div className="relative flex-1 flex items-center justify-center">
        <motion.div 
          style={{ rotateX, rotateY, translateZ: "60px" }}
          className="relative w-32 h-32 flex items-center justify-center"
        >
          {/* Waves with dynamic opacity based on hover */}
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              animate={{ 
                scale: [1, 2.4], 
                opacity: [0, 0.3, 0],
                borderWidth: ["1px", "0.5px"] 
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                delay: i * 0.8,
                ease: "easeOut" 
              }}
              className="absolute inset-0 border border-indigo-200 rounded-full"
            />
          ))}

          {/* Central Speed Core with High-Fidelity Details */}
          <motion.div 
            className="relative z-10 w-14 h-14 bg-white dark:bg-zinc-900 rounded-2xl shadow-[0_30px_80px_-20px_rgba(0,0,0,0.35)] flex items-center justify-center overflow-hidden border border-zinc-100 dark:border-zinc-700"
          >
            {/* The "Internal Glow" */}
            <motion.div 
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 bg-indigo-50/50" 
            />
            
            {/* Moving Light Glare (The Premium Touch) */}
            <motion.div 
                style={{ 
                    x: useTransform(smoothX, [-100, 100], [-20, 20]),
                    y: useTransform(smoothY, [-100, 100], [-20, 20])
                }}
                className="absolute -inset-2 bg-gradient-to-br from-white via-transparent to-transparent opacity-60 rotate-45"
            />

            <div className="relative z-20 w-2.5 h-2.5 rounded-full bg-indigo-600 shadow-[0_0_15px_rgba(79,70,229,0.6)]" />
          </motion.div>

          {/* Orbiting Ring */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-6 border border-dashed border-zinc-200/60 dark:border-zinc-700 rounded-full"
          />
        </motion.div>
      </div>

      {/* --- FOOTER: LIVE DATA --- */}
      <div className="relative z-10 mt-auto flex items-end justify-between">
        <div className="flex flex-col gap-1">
          <span className="text-[9px] font-black text-zinc-300 uppercase tracking-[0.2em]">System State</span>
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-zinc-900 tracking-tighter">0.02ms</span>
            <motion.div 
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="w-1 h-1 rounded-full bg-emerald-500" 
            />
          </div>
        </div>
        
        {/* Animated Spectrum Meter */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-50 dark:bg-zinc-800 border border-zinc-100 dark:border-zinc-700">
           <div className="flex gap-0.5 items-end h-2.5">
             {[0.4, 0.8, 0.5, 0.9].map((h, i) => (
               <motion.div 
                key={i}
                animate={{ height: [`${h*100}%`, `${(1-h)*100}%`, `${h*100}%`] }}
                transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.1 }}
                className="w-[2px] bg-indigo-500 rounded-full"
               />
             ))}
           </div>
           <span className="text-[9px] font-bold text-zinc-500 uppercase tracking-tighter">Live</span>
        </div>
      </div>
    </div>
  );
}
