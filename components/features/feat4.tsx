"use client";

import React from "react";
import { motion } from "framer-motion";
import { ChevronRight, Calculator, ArrowUpRight, Sparkles } from "lucide-react";

export default function NeuralRaybeam() {
  return (
    <div className="w-full py-8 px-4 flex flex-col items-center justify-center bg-transparent">
      {/* Tightened Container */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full max-w-5xl">
        <BudgetPlanCard />
        <VariableModelCard />
      </div>
    </div>
  );
}

// Styled Premium Button
const PremiumButton = ({ children, icon: Icon }: { children: React.ReactNode, icon?: any }) => (
  <motion.button
    whileHover={{ scale: 1.02, translateY: -1 }}
    whileTap={{ scale: 0.98 }}
    className="relative group overflow-hidden px-4 py-2 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 text-[12px] font-bold rounded-lg shadow-sm transition-all"
  >
    {/* Internal Texture */}
    <div className="absolute inset-0 pointer-events-none opacity-[0.1] scale-[0.4] z-10">
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="dense-dots-btn" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
            <circle cx="1.5" cy="1.5" r="0.8" fill="currentColor" fillOpacity="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dense-dots-btn)" />
      </svg>
    </div>

    {/* The Beam */}
    <div className="absolute bottom-0 left-0 right-0 h-[1.5px] w-full flex justify-center z-30">
      <div className="w-[85%] h-full bg-gradient-to-r from-transparent via-cyan-400 dark:via-indigo-500 to-transparent opacity-90" />
    </div>

    {/* Top Bevel */}
    <div className="absolute inset-x-0 top-0 h-[1px] bg-white/20 z-20" />

    {/* Hover Sweep */}
    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/10 to-transparent z-20" />

    <span className="relative z-30 flex items-center gap-2">
      {children}
      {Icon && <Icon className="w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />}
    </span>
  </motion.button>
);

function BudgetPlanCard() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col space-y-4"
    >
      <div className="space-y-3">
        <p className="text-zinc-500 text-[12px] leading-relaxed max-w-[320px]">
          Compare models side-by-side with automated variance tracking and audit logs.
        </p>
        <PremiumButton icon={ArrowUpRight}>Start Budget Template</PremiumButton>
      </div>

      <div className="border border-zinc-200/60 dark:border-zinc-800 rounded-xl bg-white/50 dark:bg-zinc-950/50 backdrop-blur-sm p-1 shadow-sm overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-zinc-100 dark:border-zinc-800">
              <th className="p-3 text-[10px] font-black text-zinc-400 uppercase tracking-widest">Q1 2023</th>
              <th className="p-3 text-[10px] font-black text-zinc-400 uppercase tracking-widest text-right">Plan</th>
              <th className="p-3 text-[10px] font-black text-zinc-400 uppercase tracking-widest text-right">Actuals</th>
              <th className="p-3 text-[10px] font-black text-zinc-400 uppercase tracking-widest text-right">Var</th>
            </tr>
          </thead>
          <tbody className="text-[12px]">
            <DataRow label="Advertising" plan="120k" actual="105k" variance="-12%" trend="down" index={1} />
            <DataRow label="Software" plan="12k" actual="14k" variance="+16%" trend="up" index={2} />
            <DataRow label="Payroll" plan="248k" actual="250k" variance="+1%" trend="neutral" index={3} />
            <DataRow label="Total" plan="394k" actual="383k" variance="-3%" trend="down" isTotal index={4} />
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}

function VariableModelCard() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="flex flex-col space-y-4"
    >
      <div className="space-y-3">
        <p className="text-zinc-500 text-[12px] leading-relaxed max-w-[320px]">
          Build credible bottom-up plans with our predictive SaaS modeling engine.
        </p>
        <PremiumButton icon={Sparkles}>View SaaS Revenue</PremiumButton>
      </div>

      <div className="border border-zinc-200/60 dark:border-zinc-800 rounded-xl bg-white/50 dark:bg-zinc-950/50 backdrop-blur-sm p-1 shadow-sm">
        <div className="p-3 border-b border-zinc-100 dark:border-zinc-800 flex justify-between items-center">
          <span className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">Logic Variables</span>
          <div className="flex gap-4">
             <span className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">Feb</span>
             <span className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">Mar</span>
          </div>
        </div>
        
        <div className="p-1.5 space-y-0.5">
          <VariableRow icon="#" label="Churn Rate" value="6%" />
          <VariableRow icon="#" label="Conv %" hasChart />
          
          <motion.div 
            whileHover={{ scale: 1.005, backgroundColor: "rgba(99, 102, 241, 0.04)" }}
            className="group relative bg-indigo-50/30 dark:bg-indigo-500/5 border border-indigo-100/50 dark:border-indigo-500/10 rounded-lg p-2.5 my-1.5 transition-colors"
          >
            <div className="flex items-center gap-2 mb-1.5">
              <Calculator className="w-3 h-3 text-indigo-500" />
              <span className="text-[11px] font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-tighter">Inference Logic</span>
            </div>
            <div className="flex flex-wrap gap-1 items-center font-mono text-[10px]">
              <span className="text-zinc-400">if</span>
              <span className="text-orange-500">Product</span>
              <span className="text-zinc-400">==</span>
              <span className="text-emerald-500">SaaS</span>
              <ChevronRight className="w-2.5 h-2.5 text-zinc-300" />
              <span className="text-indigo-500">Apply_Growth</span>
            </div>
          </motion.div>

          <VariableRow icon="f" label="Churned MRR" value="$2.4k" hasChart />
          <VariableRow icon="f" label="Total MRR" value="$1.24M" isBold />
        </div>
      </div>
    </motion.div>
  );
}

function DataRow({ label, plan, actual, variance, trend, isTotal, index }: any) {
  const isUp = trend === "up";
  return (
    <motion.tr 
      initial={{ opacity: 0, x: -4 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ backgroundColor: "rgba(0,0,0,0.02)" }}
      className={`group border-b border-zinc-50 dark:border-zinc-900/50 last:border-0 ${isTotal ? 'bg-zinc-50/50 dark:bg-zinc-900/20 font-bold' : ''}`}
    >
      <td className="p-3 text-zinc-700 dark:text-zinc-300">{label}</td>
      <td className="p-3 text-right text-zinc-400">$ {plan}</td>
      <td className="p-3 text-right text-zinc-900 dark:text-zinc-100">{actual}</td>
      <td className="p-3 text-right">
        <span className={`px-1.5 py-0.5 rounded text-[10px] font-bold ${
          isUp ? 'text-rose-500 bg-rose-500/10' : trend === "down" ? 'text-emerald-500 bg-emerald-500/10' : 'text-zinc-400 bg-zinc-100'
        }`}>
          {variance}
        </span>
      </td>
    </motion.tr>
  );
}

function VariableRow({ icon, label, value, hasChart, isBold }: any) {
  return (
    <motion.div 
      whileHover={{ x: 2 }}
      className="flex items-center justify-between p-2 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-900/30 transition-all group cursor-default"
    >
      <div className="flex items-center gap-2.5">
        <span className="w-4 h-4 flex items-center justify-center rounded bg-zinc-100 dark:bg-zinc-800 text-[9px] font-mono font-black text-zinc-400 group-hover:text-indigo-500 transition-colors">
          {icon}
        </span>
        <span className={`text-[12px] ${isBold ? 'font-bold text-zinc-900 dark:text-white' : 'text-zinc-500'}`}>
          {label}
        </span>
      </div>
      <div className="flex items-center gap-4">
        {hasChart && (
          <div className="flex items-end gap-0.5 h-3 w-10">
            {[40, 70, 45, 90, 65].map((h, i) => (
              <motion.div key={i} initial={{ height: 0 }} animate={{ height: `${h}%` }} className="w-1 bg-indigo-500/20 rounded-t-[1px]" />
            ))}
          </div>
        )}
        <span className="text-[12px] font-mono font-bold text-zinc-800 dark:text-zinc-200 min-w-[50px] text-right">
          {value || "—"}
        </span>
      </div>
    </motion.div>
  );
}