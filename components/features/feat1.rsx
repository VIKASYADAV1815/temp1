"use client";

import { motion } from "framer-motion";

export default function Feat1() {
  return (
    <div className="relative w-full h-[450px] p-10 flex flex-col group overflow-hidden bg-white">
      
      {/* 1. SIGNATURE BACKGROUND: TIGHT DOTS + RADIAL FADE */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.08]"
        style={{ 
          backgroundImage: `radial-gradient(#000 1px, transparent 0)`, 
          backgroundSize: '14px 14px',
          maskImage: 'radial-gradient(circle at center, black 10%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(circle at center, black 10%, transparent 80%)'
        }} 
      />

      {/* 2. TEXT CONTENT: LEFT ALIGNED & CLEAN */}
      <div className="relative z-20 max-w-[320px] space-y-4">
        <div className="flex items-center gap-2">
           <div className="w-1.5 h-1.5 rounded-full bg-indigo-600 shadow-[0_0_10px_rgba(79,70,229,0.5)]" />
           <span className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em]">Neural Engine v4.0</span>
        </div>
        
        <h3 className="text-4xl font-bold text-zinc-900 tracking-tighter leading-[0.9]">
          Agentic <br />
          <span className="text-zinc-300">Orchestration.</span>
        </h3>
        
        <p className="text-[14px] text-zinc-500 font-medium leading-relaxed">
          Automate complex multi-step workflows with autonomous agents that learn from every interaction.
        </p>

        {/* Mini Stats Detail */}
        <div className="flex gap-4 pt-2">
           <div className="flex flex-col">
              <span className="text-[9px] font-black text-zinc-300 uppercase">Uptime</span>
              <span className="text-xs font-bold text-zinc-900 italic">99.99%</span>
           </div>
           <div className="w-[1px] h-8 bg-zinc-100" />
           <div className="flex flex-col">
              <span className="text-[9px] font-black text-zinc-300 uppercase">Response</span>
              <span className="text-xs font-bold text-zinc-900 italic">12ms</span>
           </div>
        </div>
      </div>

      {/* 3. THE OVERFLOW MOCKUP (Attached to Bottom & Right) */}
      <motion.div 
        initial={{ x: 100, y: 100, opacity: 0 }}
        whileInView={{ x: 20, y: 20, opacity: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="absolute bottom-0 right-0 w-[85%] h-[70%] bg-zinc-50 border-t border-l border-zinc-200 rounded-tl-[2.5rem] shadow-[-20px_-20px_60px_-15px_rgba(0,0,0,0.05)] overflow-hidden"
      >
        {/* Mockup Toolbar */}
        <div className="h-10 border-b border-zinc-200 bg-zinc-100/50 flex items-center px-6 gap-1.5">
           <div className="w-2 h-2 rounded-full bg-zinc-300" />
           <div className="w-2 h-2 rounded-full bg-zinc-300" />
           <div className="w-2 h-2 rounded-full bg-zinc-300" />
           <div className="ml-4 h-5 w-40 bg-white rounded-md border border-zinc-200 flex items-center px-2">
              <div className="w-full h-[2px] bg-zinc-100 rounded-full" />
           </div>
        </div>

        {/* Mockup Content (Detailed Activity) */}
        <div className="p-6 space-y-4 bg-white h-full">
           <div className="flex justify-between items-center pb-2 border-b border-zinc-50">
              <span className="text-[10px] font-black text-zinc-900 uppercase">Recent Activity</span>
              <div className="flex -space-x-2">
                 {[1,2,3].map(i => (
                   <img key={i} src={`https://i.pravatar.cc/100?u=${i+40}`} className="w-6 h-6 rounded-full border-2 border-white shadow-sm" alt="avatar" />
                 ))}
              </div>
           </div>

           {/* Animated Rows */}
           {[1, 2, 3].map((i) => (
             <motion.div 
               key={i}
               initial={{ opacity: 0, x: 20 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ delay: 0.5 + i * 0.1 }}
               className="flex items-center justify-between p-3 rounded-xl border border-zinc-100 bg-zinc-50/50"
             >
                <div className="flex items-center gap-3">
                   <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs shadow-sm 
                     ${i === 1 ? 'bg-indigo-600 text-white' : i === 2 ? 'bg-emerald-500 text-white' : 'bg-zinc-900 text-white'}`}>
                      {i === 1 ? 'AI' : i === 2 ? '✓' : '⚡'}
                   </div>
                   <div className="space-y-1">
                      <div className="h-2 w-24 bg-zinc-200 rounded-full" />
                      <div className="h-1.5 w-16 bg-zinc-100 rounded-full" />
                   </div>
                </div>
                <div className={`px-2 py-0.5 rounded text-[8px] font-bold tracking-tighter 
                  ${i === 2 ? 'bg-emerald-50 text-emerald-600' : 'bg-zinc-100 text-zinc-500'}`}>
                  {i === 2 ? 'COMPLETED' : 'PROCESSING'}
                </div>
             </motion.div>
           ))}
        </div>
      </motion.div>

      {/* Subtle Floating Detail on top of Mockup */}
      <motion.div 
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 right-[70%] z-30 p-4 bg-white/90 backdrop-blur-md border border-zinc-200 rounded-2xl shadow-2xl flex items-center gap-4"
      >
        <div className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-white text-lg">🤖</div>
        <div className="flex flex-col">
           <span className="text-[10px] font-black text-zinc-400 uppercase">Agent Status</span>
           <span className="text-xs font-bold text-zinc-900 italic">Thinking...</span>
        </div>
      </motion.div>

    </div>
  );
}