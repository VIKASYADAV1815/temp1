"use client";

import { motion } from "framer-motion";

export default function NeuralRaybeam() {
  return (
    <div className="relative w-full h-full p-10 flex flex-col group overflow-hidden bg-background">
      
      {/* 1. SUBTLE BACKGROUND (removed dots for cleaner surface) */}
      <motion.div 
        aria-hidden 
        className="absolute inset-0 pointer-events-none"
        animate={{ opacity: [0.2, 0.35, 0.2] }}
        transition={{ duration: 8, repeat: Infinity }}
        style={{ background: "radial-gradient(600px circle at 40% 35%, rgba(99,102,241,0.10), transparent 60%)" }}
      />

      {/* 2. HEADER */}
      <div className="relative z-10 flex flex-col">
        <motion.div 
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2 mb-1"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-indigo-600 shadow-[0_0_8px_rgba(79,70,229,0.8)]" />
          <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.3em]">Neural Mesh v4</span>
        </motion.div>
        
        <h3 className="text-4xl font-bold tracking-tighter leading-[0.85]">
          Autonomous <br />
          <span className="text-zinc-300 dark:text-zinc-400 group-hover:text-indigo-500/50 transition-colors duration-1000">Inference.</span>
        </h3>
        <p className="mt-2 text-[13px] max-w-[280px] font-medium text-zinc-600 dark:text-zinc-300">
          Neural mesh orchestrates signals and converges actions with auditability.
        </p>
      </div>

      {/* 3. CENTER PIECE: THE RAYBEAM SYSTEM */}
      <div className="relative flex-1 flex items-center justify-center -mt-4">
        
        {/* Central Ambient Glow */}
        <div className="absolute w-80 h-80 bg-indigo-50/40 rounded-full blur-[100px] -z-10" />

        <div className="relative flex items-center justify-between w-full max-w-2xl px-2">
          
          {/* USER NODE */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="relative z-20 p-1 bg-white/90 backdrop-blur-sm border border-zinc-100 rounded-xl shadow-[0_24px_60px_-20px_rgba(0,0,0,0.25)]"
          >
            <div className="w-12 h-12 rounded-[10px] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
              <img 
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=120" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* THE RAYBEAM SVG */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none px-12">
            <svg width="100%" height="100%" viewBox="0 0 500 100" preserveAspectRatio="none" className="overflow-visible">
              <path d="M 0 50 L 500 50" stroke="#f1f5f9" strokeWidth="1" />
              <motion.path
                d="M 0 50 L 500 50"
                stroke="url(#raybeamGradient)"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <defs>
                <motion.linearGradient 
                  id="raybeamGradient" 
                  gradientUnits="userSpaceOnUse"
                  initial={{ x1: "-20%", x2: "0%" }}
                  animate={{ x1: ["-20%", "120%"], x2: ["0%", "140%"] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <stop offset="0%" stopColor="#6366f1" stopOpacity="0" />
                  <stop offset="50%" stopColor="#6366f1" stopOpacity="1" />
                  <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
                </motion.linearGradient>
              </defs>
            </svg>
          </div>

          {/* BRAIN HUB (The "A" with Effects) */}
          <div className="relative flex items-center justify-center">
            {/* Outer Pulsing Aura */}
            <motion.div 
              animate={{ scale: [1, 1.15, 1], opacity: [0.1, 0.3, 0.1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute w-24 h-24 bg-indigo-500 rounded-full blur-xl"
            />
            
            {/* Rotating Dashed Ring */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute w-24 h-24 border border-zinc-200 border-dashed rounded-full"
            />
            
            {/* The Core Container */}
            <div className="w-16 h-16 bg-zinc-950 rounded-2xl flex items-center justify-center shadow-[0_30px_80px_-20px_rgba(0,0,0,0.5)] relative z-10 overflow-hidden ring-1 ring-white/10">
              {/* Shimmering "A" */}
              <motion.span 
                animate={{ opacity: [0.7, 1, 0.7], scale: [0.98, 1, 0.98] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="text-white font-bold text-2xl tracking-tighter drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]"
              >
                A
              </motion.span>

              {/* Vertical Scan Effect */}
              <motion.div 
                animate={{ top: ["-100%", "100%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="absolute left-0 right-0 h-1/2 bg-gradient-to-b from-transparent via-indigo-400/20 to-transparent pointer-events-none"
              />

              {/* Energy Flash on Ray Entry */}
              <motion.div 
                animate={{ opacity: [0, 0.4, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: 1.25 }}
                className="absolute inset-0 bg-indigo-500" 
              />
            </div>
          </div>

          {/* RESPONSE NODE */}
          <motion.div 
            whileHover={{ y: -2 }}
            className="relative z-20 p-3 bg-white/90 backdrop-blur-sm border border-zinc-100 rounded-xl shadow-[0_24px_60px_-20px_rgba(0,0,0,0.25)] min-w-[130px]"
          >
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <div className="h-1 w-6 bg-zinc-900 rounded-full" />
                <div className="flex gap-0.5">
                    {[1,2,3].map(i => <div key={i} className="w-1 h-1 bg-zinc-100 rounded-full" />)}
                </div>
              </div>
              <div className="h-[1px] w-full bg-zinc-50" />
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_5px_#10b981]" />
                <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-tight">Process_Done</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* 4. FOOTER */}
      <div className="relative z-10 mt-auto flex items-center justify-between border-t border-zinc-50 pt-6 opacity-60 group-hover:opacity-100 transition-opacity">
        <div className="flex items-center gap-4 text-[10px] font-bold text-zinc-500 tracking-widest uppercase">
          <span className="flex items-center gap-1.5">
            <span className="w-1 h-1 rounded-full bg-emerald-500" />
            Reliability 99.9%
          </span>
        </div>
        <span className="text-[10px] font-black text-zinc-900 tracking-tighter uppercase">Cluster_v4.2</span>
      </div>

    </div>
  );
}
