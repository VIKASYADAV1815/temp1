"use client";

import { motion } from "framer-motion";
import { Zap, GitBranch, Save, Bell, Plus, MoreHorizontal } from "lucide-react";
import WorkflowBg from "./liveflow/WorkflowBg";

const NODES = {
  trigger: { x: 150, y: 250 },
  logic:   { x: 500, y: 250 },
  action1: { x: 850, y: 120 },
  action2: { x: 850, y: 380 }
};

type NodeCardProps = {
  title: string;
  type: string;
  icon: React.ElementType;
  color: string;
  x: number;
  y: number;
  active?: boolean;
  children?: React.ReactNode;
  index: number;
};

const NodeCard = ({ title, type, icon: Icon, color, x, y, active, children, index }: NodeCardProps) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.9, x: "-50%", y: "-50%" }}
    animate={{ opacity: 1, scale: 1, x: "-50%", y: "-50%" }}
    transition={{ delay: index * 0.1, duration: 0.4 }}
    className="absolute z-10"
    style={{ left: x, top: y }}
  >
    <motion.div 
      whileHover={{ scale: 1.02, y: -2 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`
        relative w-64 bg-white dark:bg-zinc-900 border rounded-2xl p-4 shadow-[0_8px_30px_rgba(0,0,0,0.2)]
        ${active ? 'border-cyan-400 ring-4 ring-cyan-100/40 dark:ring-cyan-900/20' : 'border-zinc-100 dark:border-zinc-800'}
      `}
      style={{
        backgroundImage: 'radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)',
        backgroundSize: '16px 16px'
      }}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className={`p-2 rounded-xl ${color} bg-opacity-10`}>
            <Icon size={16} className={color.replace('bg-', 'text-')} />
          </div>
          <div>
            <h4 className="text-[12px] font-black leading-none">{title}</h4>
            <span className="text-[10px] text-zinc-400 dark:text-zinc-500 font-bold uppercase tracking-tighter">{type}</span>
          </div>
        </div>
        <Plus size={14} className="text-zinc-300" />
      </div>

      <div className="space-y-3">
        {children}
      </div>

      {/* SOCKETS - Perfectly centered on the card edges */}
      <div className="absolute -right-1.5 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white dark:bg-zinc-800 border-2 border-indigo-500 z-20" />
      <div className="absolute -left-1.5 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white dark:bg-zinc-800 border-2 border-zinc-200 dark:border-zinc-700 z-20" />
    </motion.div>
  </motion.div>
);

export default function StitchedAgenticFlow() {
  // Card width is 256px (w-64), so half is 128px for the connection points
  const offset = 128;

  return (
    <div className="relative w-full h-[800px] bg-background overflow-hidden flex flex-col items-center border-t border-zinc-100 dark:border-zinc-800">
      
      {/* Background with animated cards */}
      <WorkflowBg />

      <div className="relative z-20 text-center mt-20 mb-10">
         <h2 className="text-5xl font-black tracking-tighter uppercase">
            Build Smarter <span className="text-zinc-200 dark:text-zinc-400 italic font-black">Workflows.</span>
         </h2>
         <p className="mt-3 text-zinc-600 dark:text-zinc-300 text-sm font-medium">
           Compose triggers, logic, and actions into reliable flows. Visualize execution in real time.
         </p>
      </div>

      <div className="relative w-[1000px] h-[500px]">
        <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
          {/* Path 1: Trigger to Logic */}
          <motion.path
            d={`M ${NODES.trigger.x + offset} ${NODES.trigger.y} L ${NODES.logic.x - offset} ${NODES.logic.y}`}
            stroke="#6366f1" strokeWidth="2" fill="none"
            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
          />
          {/* Moving Flow Dot */}
          <motion.circle r="3" fill="#6366f1">
            <animateMotion 
              dur="2s" repeatCount="indefinite" 
              path={`M ${NODES.trigger.x + offset} ${NODES.trigger.y} L ${NODES.logic.x - offset} ${NODES.logic.y}`} 
            />
          </motion.circle>
          
          {/* Path 2: Logic to Action 1 */}
          <path 
            d={`M ${NODES.logic.x + offset} ${NODES.logic.y} C ${NODES.logic.x + 200} ${NODES.logic.y}, ${NODES.action1.x - 200} ${NODES.action1.y}, ${NODES.action1.x - offset} ${NODES.action1.y}`}
            stroke="#e2e8f0" strokeWidth="2" fill="none"
          />

          {/* Path 3: Logic to Action 2 */}
          <path 
            d={`M ${NODES.logic.x + offset} ${NODES.logic.y} C ${NODES.logic.x + 200} ${NODES.logic.y}, ${NODES.action2.x - 200} ${NODES.action2.y}, ${NODES.action2.x - offset} ${NODES.action2.y}`}
            stroke="#e2e8f0" strokeWidth="2" fill="none"
          />
        </svg>

        <NodeCard index={0} title="Form Submitted" type="Trigger" icon={Zap} color="bg-emerald-500" x={NODES.trigger.x} y={NODES.trigger.y} active>
          <div className="bg-zinc-50 dark:bg-zinc-800 border border-zinc-100 dark:border-zinc-700 rounded-xl p-3 flex justify-between items-center">
             <span className="text-[10px] font-bold text-zinc-400 uppercase">Source</span>
             <span className="text-[11px] font-black">FEEDBACK_APP</span>
          </div>
        </NodeCard>

        <NodeCard index={1} title="Validation" type="Logic" icon={GitBranch} color="bg-indigo-600" x={NODES.logic.x} y={NODES.logic.y} active>
          <div className="space-y-2">
             <div className="flex items-center gap-2 text-[11px] font-bold text-zinc-500">
                <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" /> If Valid → Send Email
             </div>
             <div className="flex items-center gap-2 text-[11px] font-bold text-zinc-300">
                <div className="w-1.5 h-1.5 rounded-full bg-zinc-200" /> Else → Log Error
             </div>
             <div className="mt-1 flex items-center gap-2">
               <span className="text-[10px] font-mono text-zinc-400 dark:text-zinc-500">Rules compiled</span>
               <motion.div 
                 animate={{ opacity: [0.4, 1, 0.4] }}
                 transition={{ duration: 1.2, repeat: Infinity }}
                 className="w-1.5 h-1.5 rounded-full bg-emerald-500" 
               />
               <span className="text-[10px] font-mono text-emerald-500">✓</span>
             </div>
          </div>
        </NodeCard>

        <NodeCard index={2} title="Send Email" type="Action" icon={Bell} color="bg-amber-500" x={NODES.action1.x} y={NODES.action1.y}>
           <div className="flex -space-x-2 items-center">
              {[
                "https://api.dicebear.com/7.x/avataaars/svg?seed=Felix",
                "https://api.dicebear.com/7.x/avataaars/svg?seed=Aneka",
                "https://api.dicebear.com/7.x/avataaars/svg?seed=Max"
              ].map((src, i) => (
                <img key={i} src={src} className="w-8 h-8 rounded-full border-2 border-white dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-800" alt="user" />
              ))}
              <div className="w-8 h-8 rounded-full bg-zinc-50 dark:bg-zinc-800 border-2 border-white dark:border-zinc-700 flex items-center justify-center">
                <MoreHorizontal size={10} className="text-zinc-300"/>
              </div>
           </div>
           <div className="mt-3 flex items-center gap-2">
             <span className="text-[10px] font-mono text-zinc-400 dark:text-zinc-500">Typing</span>
             <motion.div 
               animate={{ x: [0, 8, 0] }}
               transition={{ repeat: Infinity, duration: 1.2 }}
               className="flex items-center gap-1"
             >
               <span className="w-1 h-1 rounded-full bg-zinc-400" />
               <span className="w-1 h-1 rounded-full bg-zinc-400" />
               <span className="w-1 h-1 rounded-full bg-zinc-400" />
             </motion.div>
           </div>
        </NodeCard>

        <NodeCard index={3} title="Save Data" type="Database" icon={Save} color="bg-blue-600" x={NODES.action2.x} y={NODES.action2.y}>
           <div className="w-full bg-zinc-50 dark:bg-zinc-800 h-2 rounded-full overflow-hidden border border-zinc-100 dark:border-zinc-700">
              <motion.div 
                animate={{ x: [-100, 256] }} 
                transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                className="w-24 h-full bg-blue-500 opacity-40" 
              />
           </div>
           <div className="mt-2 flex items-center gap-2">
             <span className="text-[10px] font-mono text-zinc-400 dark:text-zinc-500">Write</span>
             <motion.span 
               animate={{ opacity: [0.4, 1, 0.4] }}
               transition={{ duration: 0.8, repeat: Infinity }}
               className="text-[10px] font-mono text-blue-500">100%</motion.span>
           </div>
        </NodeCard>
      </div>

      <div className="absolute bottom-10 right-10 bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 px-4 py-2 rounded-2xl shadow-sm flex items-center gap-3">
         <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
         <span className="text-[10px] font-black uppercase tracking-widest font-mono">System Live</span>
      </div>
    </div>
  );
}
