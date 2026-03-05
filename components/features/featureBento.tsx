"use client";

import Feat1 from "./feat1";
import Feat2 from "./feat2";
import Feat3 from "./feat3";
import Feat4 from "./feat4";

export default function FeatureBento() {
  return (
    <section className="w-full bg-background text-foreground py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header Section - Project: AURA AI */}
        <div className="mb-16 space-y-3">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">
            Aura <span className="text-zinc-500 dark:text-zinc-400">Intelligence.</span>
          </h2>
          <p className="text-lg max-w-xl font-medium tracking-tight text-zinc-600 dark:text-zinc-300">
            Next‑gen autonomous agents orchestrate complex workflows with guardrails for speed and safety.
          </p>
        </div>

        {/* --- SEAMLESS BENTO GRID (Outer Borders Removed) --- */}
        {/* Sirf andar ki lines dikhengi, group-hover effects ke saath */}
        <div className="grid grid-cols-1 md:grid-cols-12">
          
          {/* Box 1: Large (Top Left) */}
          <div className="md:col-span-8 border-b border-r border-zinc-200 dark:border-zinc-800 h-[440px]">
            <Feat1 />
          </div>

          {/* Box 2: Small (Top Right) */}
          <div className="md:col-span-4 border-b border-zinc-200 dark:border-zinc-800 h-[440px]">
            <Feat2 />
          </div>

          {/* Box 3: Small (Bottom Left) - Border-r removed from last column in mobile logic if needed, but here we keep it for grid consistency */}
          <div className="md:col-span-4 border-r border-zinc-200 dark:border-zinc-800 h-[440px]">
            <Feat3 />
          </div>

          {/* Box 4: Large (Bottom Right) */}
          <div className="md:col-span-8 h-[440px]">
            <Feat4 />
          </div>

        </div>
      </div>
    </section>
  );
}
