"use client";

import { Twitter, Github, Zap, ArrowUpRight, Globe } from "lucide-react";

export default function AuraCompactFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full py-12 overflow-hidden border-t border-zinc-100 bg-white dark:bg-zinc-900 dark:border-zinc-800">
      
      {/* 1. THE PRECISION GRID (Still there, but subtle) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.02]" 
             style={{ backgroundImage: `linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />
        <div className="absolute inset-0 opacity-[0.05]" 
             style={{ backgroundImage: `radial-gradient(#000 0.5px, transparent 0.5px)`, backgroundSize: '40px 40px' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8">
        
        {/* 2. SLIM PRE-FOOTER (Horizontal flow to save height) */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pb-10 border-b border-zinc-50 dark:border-zinc-800">
          <div className="flex items-center gap-4">
            <h3 className="text-2xl font-semibold tracking-tighter">
              Deploy <span className="text-zinc-300 italic">Aura AI.</span>
            </h3>
            <div className="px-2 py-0.5 rounded bg-zinc-50 dark:bg-zinc-800 border border-zinc-100 dark:border-zinc-700 text-[8px] font-black text-zinc-400 uppercase tracking-widest">
               v1.0 Stable
            </div>
          </div>
          
          <button className="px-6 py-2.5 bg-zinc-900 text-white dark:bg-white dark:text-black rounded-lg text-[11px] font-bold hover:bg-black dark:hover:bg-zinc-200 transition-all shadow-lg shadow-zinc-100 flex items-center gap-2 group">
            Get Started <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* 3. COMPACT NAV & LINKS */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 py-10">
          {/* Brand Part */}
          <div className="space-y-4 max-w-xs">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-zinc-900 dark:bg-white rounded-md flex items-center justify-center">
                <Zap size={12} className="text-white dark:text-black" fill="currentColor" />
              </div>
              <span className="text-base font-black tracking-tighter uppercase">Aura AI</span>
            </div>
            <p className="text-zinc-400 dark:text-zinc-300 text-[12px] font-medium leading-relaxed">
              Autonomous agent governance and safety infrastructure.
            </p>
          </div>

          {/* Links Row (Reduced Vertical Space) */}
          <div className="flex flex-wrap gap-x-16 gap-y-8">
            {[
              { title: "Platform", links: ["Nodes", "Security", "Pricing"] },
              { title: "Company", links: ["About", "Careers", "Contact"] },
              { title: "Legal", links: ["Privacy", "Terms", "SLA"] }
            ].map((col, i) => (
              <div key={i} className="space-y-3">
                <h4 className="text-[9px] font-black uppercase tracking-widest">{col.title}</h4>
                <ul className="space-y-2">
                  {col.links.map(link => (
                    <li key={link}>
                      <a href="#" className="text-[12px] font-medium text-zinc-400 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* 4. MINIMAL COPYRIGHT BAR */}
        <div className="pt-8 border-t border-zinc-50 dark:border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[11px] font-medium text-zinc-300 dark:text-zinc-400">
            © {currentYear} Aura AI Protocol. Precision Engineered.
          </p>
          
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-3">
              <Twitter size={14} className="text-zinc-300 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors" />
              <Github size={14} className="text-zinc-300 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors" />
            </div>
            <div className="w-px h-3 bg-zinc-100 dark:bg-zinc-800" />
            <div className="flex items-center gap-1.5 text-[10px] font-bold text-zinc-400 dark:text-zinc-300 uppercase tracking-tighter cursor-pointer">
              <Globe size={12} /> EN-US
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
