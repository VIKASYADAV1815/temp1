"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

export default function AuraMailAgency() {
  const notifications = [
    { id: 1, title: "Priority: Smart Contract Audit", time: "Just now", status: "unread", desc: "Aura AI detected 2 vulnerabilities in the deployment script." },
    { id: 2, title: "Node Synchronization", time: "2m ago", status: "unread", desc: "Global mesh nodes in Singapore are now fully operational." },
    { id: 3, title: "Weekly Efficiency Report", time: "1h ago", status: "read", desc: "System performance improved by 14% compared to last week." },
  ];

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 }
    }
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  return (
    <div className="relative w-full h-full flex flex-col bg-background overflow-hidden select-none">
      
      {/* 1. MINIMAL TEXT HEADER */}
      <div className="relative z-20 p-6 md:p-12 pb-2">
        <motion.h3 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold tracking-tighter leading-none mb-4"
        >
          Agentic <span className="text-zinc-300 dark:text-zinc-500">Queue.</span>
        </motion.h3>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-sm md:text-[15px] text-zinc-400 dark:text-zinc-400 font-medium max-w-[300px]"
        >
          Manage autonomous actions and pending intelligence streams.
        </motion.p>
      </div>

      {/* 2. THE IOS MOCKUP */}
      <div className="flex-1 relative px-4 md:px-12 mt-6">
        <motion.div 
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          className="w-full h-full max-w-4xl ml-auto group/mockup"
        >
          {/* BEZEL FRAME */}
          <div className="w-full h-full bg-zinc-50 dark:bg-black border-[1.5px] border-zinc-200/60 dark:border-zinc-800 rounded-t-xl p-[2px] shadow-2xl shadow-zinc-200/40 dark:shadow-none">
            {/* INNER GLASS SCREEN */}
            <div className="w-full h-full bg-[#F2F2F7] dark:bg-zinc-950 rounded-t-[0.6rem] overflow-hidden flex flex-col border border-white dark:border-zinc-800">
              
              {/* SYSTEM BAR */}
              <div className="h-12 px-6 flex items-center justify-between">
                <span className="text-[12px] font-bold text-zinc-900 dark:text-zinc-200">Notifications</span>
                <motion.span 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-[10px] cursor-pointer font-semibold text-indigo-600 bg-indigo-50 dark:bg-indigo-900/30 dark:text-indigo-400 px-2 py-0.5 rounded-full"
                >
                  3 New
                </motion.span>
              </div>

              {/* NOTIFICATION STACK */}
              <motion.div 
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="px-4 space-y-3 overflow-y-auto no-scrollbar"
              >
                {notifications.map((note) => (
                  <motion.div
                    key={note.id}
                    variants={item}
                    whileHover={{ 
                      scale: 1.02,
                      x: 4
                    }}
                    whileTap={{ scale: 0.98 }}
                    className={`relative p-4 rounded-[1.2rem] border cursor-pointer transition-all duration-300 group/note shadow-[0_16px_40px_-18px_rgba(0,0,0,0.25)] ${
                      note.status === "unread"
                        ? "bg-white/95 border-zinc-200 text-zinc-900 dark:bg-zinc-800/90 dark:border-zinc-700 dark:text-zinc-100"
                        : "bg-zinc-50 border-zinc-200 text-zinc-700 dark:bg-zinc-900/70 dark:border-zinc-800 dark:text-zinc-300"
                    }`}
                  >
                    <div className="flex justify-between items-start mb-1">
                      <div className="flex items-center gap-2">
                        {note.status === "unread" && (
                          <motion.div 
                            animate={{ opacity: [1, 0.5, 1], scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.6)]" 
                          />
                        )}
                        <span className={`text-[11px] font-bold ${note.status === "unread" ? "text-zinc-900 dark:text-zinc-100" : "text-zinc-700 dark:text-zinc-300"}`}>{note.title}</span>
                      </div>
                      <span className="text-[9px] font-medium text-zinc-500 dark:text-zinc-400 tracking-tighter">{note.time}</span>
                    </div>
                    <p className={`text-[10px] leading-snug line-clamp-2 transition-colors ${note.status === "unread" ? "text-zinc-600 dark:text-zinc-300" : "text-zinc-600 dark:text-zinc-400"}`}>
                      {note.desc}
                    </p>

                    {/* INTERACTION DOTS */}
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-1 opacity-0 group-hover/note:opacity-100 transition-opacity">
                        <div className="w-1 h-1 rounded-full bg-zinc-300" />
                        <div className="w-1 h-1 rounded-full bg-zinc-300" />
                    </div>
                  </motion.div>
                ))}

                {/* GHOST CARD */}
                <motion.div 
                  variants={item}
                  className="h-16 w-full rounded-[1.2rem] border border-dashed border-zinc-300/50 bg-transparent flex items-center justify-center relative overflow-hidden group/ghost"
                >
                   <motion.div 
                    animate={{ x: ['-100%', '200%'] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none"
                   />
                   <span className="text-[9px] font-bold text-zinc-300 uppercase tracking-widest group-hover/ghost:text-zinc-400 transition-colors">
                     Listening for events...
                   </span>
                </motion.div>
              </motion.div>

            </div>
          </div>
        </motion.div>
      </div>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
}
