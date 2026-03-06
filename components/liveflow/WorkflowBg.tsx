"use client";

import { motion } from "framer-motion";

// Combined and expanded data for a denser look
const ALL_ITEMS = [
  { id: 1, name: "Manu Arora", role: "Tech Innovator", text: "AI made it so easy to use." },
  { id: 2, name: "Sarah Chen", role: "DevOps Lead", text: "Deployment time cut by 60%." },
  { id: 3, name: "Alex Rivera", role: "Designer", text: "Automated workflows are a lifesaver." },
  { id: 4, name: "James Kim", role: "Founder", text: "Scaled to 10k users in a week." },
  { id: 5, name: "Maria Garcia", role: "CTO", text: "Best decision for our infra." },
  { id: 6, name: "Tyler Durden", role: "Director", text: "Revolutionized my model." },
  { id: 7, name: "David Wright", role: "Scientist", text: "Capabilities are unmatched." },
  { id: 8, name: "Emma Watson", role: "Marketing", text: "ROI increased by 3x instantly." },
];

const Card = ({ data }: { data: typeof ALL_ITEMS[0] }) => (
  <div className="mb-3 md:mb-5 p-2 md:p-4 rounded-lg md:rounded-xl border border-zinc-200/40 dark:border-zinc-800/40 bg-white/20 dark:bg-zinc-900/20 backdrop-blur-[1px] shadow-sm">
    <p className="text-[9px] md:text-[11px] font-medium text-zinc-600 dark:text-zinc-400 mb-2 leading-tight">
      &quot;{data.text}&quot;
    </p>
    <div className="flex items-center gap-2">
      <div className="w-5 h-5 md:w-7 md:h-7 rounded-full bg-zinc-200 dark:bg-zinc-800 overflow-hidden">
         <img src={`https://i.pravatar.cc/100?u=${data.id + 50}`} alt={data.name} className="w-full h-full object-cover grayscale opacity-70" />
      </div>
      <div className="min-w-0">
        <h5 className="text-[8px] md:text-[10px] font-bold text-zinc-900 dark:text-zinc-200 truncate">{data.name}</h5>
        <p className="text-[7px] md:text-[8px] text-zinc-500 uppercase font-bold truncate">{data.role}</p>
      </div>
    </div>
  </div>
);

const MarqueeColumn = ({ items, reverse = false, duration = 30 }: { items: typeof ALL_ITEMS, reverse?: boolean, duration?: number }) => (
  <motion.div 
    initial={{ y: reverse ? -1200 : 0 }}
    animate={{ y: reverse ? 0 : -1200 }}
    transition={{ repeat: Infinity, duration: duration, ease: "linear" }}
    className="flex flex-col px-1 md:px-2"
  >
    {/* Quadrupled items to fill the height and prevent gaps */}
    {[...items, ...items, ...items, ...items].map((item, idx) => (
      <Card key={`${item.id}-${idx}`} data={item} />
    ))}
  </motion.div>
);

export default function WorkflowBg() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none flex w-full h-full opacity-40 dark:opacity-20 transition-opacity">
        
        {/* Stronger fade at top and bottom to make the "flow" look infinite */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-background via-transparent to-background" />
        
        {/* Container for Columns: Forces full edge-to-edge width */}
        <div className="flex w-full justify-between items-start">
            
            {/* Column 1 */}
            <div className="flex-1 pt-10">
               <MarqueeColumn items={ALL_ITEMS} duration={45} />
            </div>

            {/* Column 2 */}
            <div className="flex-1 -mt-20">
               <MarqueeColumn items={ALL_ITEMS.slice().reverse()} reverse duration={55} />
            </div>

            {/* Column 3 */}
            <div className="flex-1 pt-24">
               <MarqueeColumn items={ALL_ITEMS} duration={50} />
            </div>

            {/* Column 4: Hidden on very small mobile, visible on sm and up */}
            <div className="hidden sm:block flex-1 -mt-10">
               <MarqueeColumn items={ALL_ITEMS} reverse duration={60} />
            </div>

            {/* Column 5: Visible on desktop */}
            <div className="hidden md:block flex-1 pt-16">
               <MarqueeColumn items={ALL_ITEMS.slice().reverse()} duration={48} />
            </div>
        </div>
    </div>
  );
}