"use client";

import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const notifications = [
  { id: 1, title: "Neural Link", msg: "State synchronized with EU-West", time: "Now", color: "bg-indigo-500", img: "https://i.pravatar.cc/150?u=11" },
  { id: 2, title: "Security", msg: "AES-256 handshake verified", time: "2m ago", color: "bg-emerald-500", img: "https://i.pravatar.cc/150?u=22" },
  { id: 3, title: "Automation", msg: "Workflow 'Data_Sync' completed", time: "5m ago", color: "bg-zinc-900", img: "https://i.pravatar.cc/150?u=33" },
  { id: 4, title: "Cloud Mesh", msg: "New node deployed in Mumbai", time: "10m ago", color: "bg-orange-500", img: "https://i.pravatar.cc/150?u=44" },
];

export default function Feat2() {
  const [index, setIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // --- LOGICAL MICRO-INTERACTION: MOUSE TRACKING ---
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseX = useSpring(x, { stiffness: 120, damping: 20 });
  const mouseY = useSpring(y, { stiffness: 120, damping: 20 });
  
  const rotateX = useTransform(mouseY, [-200, 200], [10, -10]);
  const rotateY = useTransform(mouseX, [-200, 200], [-10, 10]);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % notifications.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const getVisibleItems = () => {
    const items = [];
    for (let i = 0; i < 3; i++) {
      items.push(notifications[(index + i) % notifications.length]);
    }
    return items;
  };

  const visibleItems = getVisibleItems();

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full h-full p-8 flex flex-col group overflow-hidden bg-background select-none"
      style={{ perspective: "1200px" }}
    >
      
      {/* Subtle Background Glow */}
      <motion.div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        animate={{ opacity: [0.25, 0.4, 0.25] }}
        transition={{ duration: 6, repeat: Infinity }}
        style={{ 
          background: "radial-gradient(500px circle at 60% 40%, rgba(99,102,241,0.10), transparent 60%)"
        }}
      />

      {/* 2. HEADER WITH AURA AI TEXT */}
      <div className="relative z-10 mb-8 flex justify-between items-start">
        <div className="space-y-1">
          <h3 className="text-2xl font-bold tracking-tight">
            Live <span className="text-zinc-300 dark:text-zinc-400 font-medium font-serif">Activity.</span>
          </h3>
          <p className="text-[13px] font-medium max-w-[260px] leading-relaxed text-zinc-600 dark:text-zinc-300">
            Aura AI monitors autonomous actions and streams intelligence in real time.
          </p>
        </div>
        <div className="flex -space-x-2">
           {[1,2,3].map(i => (
             <motion.img 
              key={i} 
              layout
              src={`https://i.pravatar.cc/100?u=${i+20}`} 
              className="w-7 h-7 rounded-full border-2 border-white dark:border-zinc-700 grayscale hover:grayscale-0 transition-all cursor-pointer shadow-sm" 
              alt="user" 
             />
           ))}
        </div>
      </div>

      {/* 3. CENTER: ENHANCED WIDE STACK */}
      <motion.div 
        style={{ rotateX, rotateY }}
        className="relative flex-1 flex flex-col items-center justify-center"
      >
        <div className="relative w-full max-w-[380px] h-48 flex flex-col items-center">
          <AnimatePresence mode="popLayout">
            {visibleItems.map((notif, i) => (
              <motion.div
                key={notif.id}
                layout
                initial={{ opacity: 0, y: 60, scale: 0.8, filter: "blur(8px)" }}
                animate={{ 
                  opacity: 1 - i * 0.35, 
                  y: i * 36, // INCREASED HEIGHT GAP
                  scale: 1 - i * 0.05,
                  zIndex: 10 - i,
                  filter: "blur(0px)"
                }}
                exit={{ 
                  opacity: 0, 
                  y: -60, 
                  scale: 0.9,
                  filter: "blur(12px)" 
                }}
                whileHover={{ 
                  scale: 1.02,
                  backgroundColor: "rgba(255, 255, 255, 1)",
                  transition: { type: "spring", stiffness: 400, damping: 10 }
                }}
                className="absolute w-full bg-white/80 dark:bg-zinc-900/70 backdrop-blur-xl border border-zinc-100 dark:border-zinc-700 p-5 rounded-[1.6rem] shadow-[0_35px_80px_-20px_rgba(0,0,0,0.30)] flex items-center gap-5"
              >
                {/* LARGE AVATAR IMAGE */}
                <div className="relative shrink-0">
                  <img src={notif.img} className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-md" alt="avatar" />
                  <motion.div 
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className={`absolute -bottom-0.5 -right-0.5 w-4 h-4 ${notif.color} border-2 border-white rounded-full`} 
                  />
                </div>

                <div className="flex-1 overflow-hidden">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-[13px] font-bold tracking-tight leading-none">{notif.title}</span>
                    <span className="text-[10px] font-medium text-zinc-400 dark:text-zinc-500 italic">{notif.time}</span>
                  </div>
                  <p className="text-[11px] text-zinc-500 dark:text-zinc-300 font-medium leading-snug">
                    {notif.msg}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* 4. FOOTER */}
      <div className="relative z-10 mt-auto pt-6 border-t border-zinc-50 dark:border-zinc-800 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="flex gap-1 items-end h-3">
             {[0, 1, 2].map(i => (
               <motion.div 
                key={i}
                animate={{ height: [4, 12, 4] }}
                transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.2 }}
                className="w-0.5 bg-indigo-500 rounded-full"
               />
             ))}
          </div>
          <span className="text-[10px] font-black text-zinc-400 dark:text-zinc-300 uppercase tracking-widest">Aura Core Live</span>
        </div>
        <div className="px-2.5 py-1 bg-zinc-50 dark:bg-zinc-800 border border-zinc-100 dark:border-zinc-700 rounded-md text-[9px] font-mono text-zinc-500 dark:text-zinc-300 font-bold">
          LOG:AURA-SYNC
        </div>
      </div>
    </div>
  );
}
