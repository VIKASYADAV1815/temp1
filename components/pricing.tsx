"use client";

import { ArrowRight, Shield } from "lucide-react";

const Feature = ({ text }: { text: string }) => (
  <div className="flex items-center gap-3">
    <div className="w-1 h-1 rounded-full bg-indigo-500" />
    <span className="text-[12px] font-medium text-zinc-500 tracking-tight">{text}</span>
  </div>
);

export default function SaaSPrecisionPricing() {
  return (
    <section className="relative w-full py-32 bg-background text-foreground flex flex-col items-center overflow-hidden">

      <div className="relative z-10 text-center mb-24">
        <h2 className="text-5xl font-semibold tracking-[-0.03em] leading-tight">
          Simple <span className="text-zinc-500 dark:text-zinc-400 font-light italic">Infrastructure</span> Pricing.
        </h2>
        <p className="mt-3 text-zinc-600 dark:text-zinc-300 text-sm font-medium">
          Transparent tiers built for teams. Scale usage without hidden surprises.
        </p>
      </div>

      <div className="relative z-10 w-full max-w-6xl px-8 grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        
        {/* FREE TIER */}
        <div className="flex flex-col p-10 bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-[2rem] hover:border-zinc-200 dark:hover:border-zinc-700 transition-colors">
          <div className="mb-8">
            <h4 className="text-[11px] font-bold text-zinc-400 uppercase tracking-widest mb-4">Starter</h4>
            <div className="flex items-baseline gap-1">
              <span className="text-4xl font-medium">$0</span>
              <span className="text-zinc-400 dark:text-zinc-500 text-sm">/mo</span>
            </div>
          </div>
          <div className="space-y-4 mb-10 flex-1">
            <Feature text="3 Workflow Agents" />
            <Feature text="Basic Audit Logs" />
            <Feature text="Community Support" />
          </div>
          <button className="w-full py-3.5 rounded-xl border border-zinc-200 dark:border-zinc-700 text-[12px] font-semibold hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all">
            Start Free
          </button>
        </div>

        {/* PRO TIER (The Sun-Ray Effect) */}
        <div className="relative group flex flex-col p-10 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-[2.5rem] shadow-[0_30px_60px_rgba(0,0,0,0.02)] scale-105 z-10 overflow-hidden">
          
          {/* THE SUBTLE SUN-RAY GLOW */}
          <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
             <div className="absolute -top-[20%] -left-[20%] w-[140%] h-[140%] bg-[radial-gradient(circle_at_center,_#6366f1_0%,transparent_50%)] dark:bg-[radial-gradient(circle_at_center,_#22d3ee_0%,transparent_50%)] opacity-[0.04] group-hover:opacity-[0.07] transition-opacity duration-700" />
          </div>

          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
               <h4 className="text-[11px] font-bold text-indigo-600 uppercase tracking-widest">Professional</h4>
               <span className="px-2 py-0.5 rounded-md bg-indigo-50 text-indigo-600 text-[9px] font-bold uppercase tracking-tighter border border-indigo-100">Recommended</span>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-4xl font-medium">$49</span>
              <span className="text-zinc-400 dark:text-zinc-500 text-sm">/mo</span>
            </div>
          </div>
          <div className="space-y-4 mb-10 flex-1">
            <Feature text="Unlimited Workflow Agents" />
            <Feature text="Priority Response Time" />
            <Feature text="Advanced Admin Dashboard" />
            <Feature text="Custom Node Integration" />
            <Feature text="API Rate Limiting" />
          </div>
          <button className="w-full py-4 bg-zinc-900 text-white dark:bg-white dark:text-black rounded-xl text-[12px] font-semibold shadow-2xl shadow-indigo-100 hover:bg-black dark:hover:bg-zinc-200 transition-all flex items-center justify-center gap-2">
            Get Started <ArrowRight size={14} />
          </button>
        </div>

        {/* ENTERPRISE TIER */}
        <div className="flex flex-col p-10 bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-[2rem] hover:border-zinc-200 dark:hover:border-zinc-700 transition-colors">
          <div className="mb-8">
            <h4 className="text-[11px] font-bold text-zinc-400 uppercase tracking-widest mb-4">Enterprise</h4>
            <div className="flex items-baseline gap-1">
              <span className="text-4xl font-medium">Custom</span>
            </div>
          </div>
          <div className="space-y-4 mb-10 flex-1">
            <Feature text="Dedicated Infrastructure" />
            <Feature text="SLA & Security Audit" />
            <Feature text="Custom Contracts" />
            <Feature text="24/7 Phone Support" />
          </div>
          <button className="w-full py-3.5 rounded-xl border border-zinc-200 dark:border-zinc-700 text-[12px] font-semibold hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all">
            Contact Sales
          </button>
        </div>

      </div>

      {/* FOOTER ACCENT */}
      <div className="mt-20 flex items-center gap-4 px-6 py-2.5 bg-zinc-50 dark:bg-zinc-800 border border-zinc-100 dark:border-zinc-700 rounded-full">
         <Shield size={14} className="text-zinc-400 dark:text-zinc-300" />
         <span className="text-[10px] font-bold text-zinc-500 dark:text-zinc-300 uppercase tracking-widest">Secure Payments via Stripe — 256-bit Encryption</span>
      </div>

    </section>
  );
}
