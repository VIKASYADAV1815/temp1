"use client";

import { motion } from "framer-motion";

const COLUMN_1 = [
  { id: 1, name: "Manu Arora", role: "Tech Innovator", text: "I made a soap with the help of AI, it was so easy to use." },
  { id: 2, name: "Sarah Chen", role: "DevOps Lead", text: "Deployment time cut by 60%. Incredible." },
  { id: 3, name: "Alex Rivera", role: "Product Designer", text: "The automated workflows are a lifesaver." },
  { id: 4, name: "James Kim", role: "Founder", text: "We scaled to 10k users in a week with this." },
  { id: 5, name: "Maria Garcia", role: "CTO", text: "Best decision we made for our infra." },
];

const COLUMN_2 = [
  { id: 6, name: "Tyler Durden", role: "Creative Director", text: "It revolutionized my entire business model." },
  { id: 7, name: "David Wright", role: "Research Scientist", text: "The data processing capabilities are unmatched." },
  { id: 8, name: "Emma Watson", role: "Marketing Head", text: "Campaign ROI increased by 3x instantly." },
  { id: 9, name: "Chris Paul", role: "Engineer", text: "Documentation is top notch. Love it." },
  { id: 10, name: "Sofia Davis", role: "Analyst", text: "Insights are deeper than any other tool." },
];

const COLUMN_3 = [
  { id: 11, name: "Alice Johnson", role: "Software Engineer", text: "Efficiency improved by 40% in just one week." },
  { id: 12, name: "Leo Carter", role: "Strategist", text: "A game changer for our quarterly planning." },
  { id: 13, name: "Michael Chang", role: "CTO", text: "Security and compliance are top-notch." },
  { id: 14, name: "Nina Patel", role: "HR Lead", text: "Onboarding new hires is now seamless." },
  { id: 15, name: "Robert Fox", role: "Sales VP", text: "Closed 3 deals faster thanks to the automation." },
];

const Card = ({ data }: { data: typeof COLUMN_1[0] }) => (
  <div className="mb-4 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white/40 dark:bg-zinc-900/40 backdrop-blur-sm shadow-sm hover:bg-white/60 dark:hover:bg-zinc-900/60 transition-colors">
    <p className="text-[11px] font-medium text-zinc-600 dark:text-zinc-300 mb-3 leading-relaxed">&quot;{data.text}&quot;</p>
    <div className="flex items-center gap-3">
      <div className="w-8 h-8 rounded-full bg-zinc-200 dark:bg-zinc-800 overflow-hidden ring-1 ring-zinc-100 dark:ring-zinc-700">
         <img src={`https://i.pravatar.cc/100?u=${data.id + 20}`} alt={data.name} className="w-full h-full object-cover grayscale opacity-80" />
      </div>
      <div>
        <h5 className="text-[11px] font-bold text-zinc-900 dark:text-zinc-100">{data.name}</h5>
        <p className="text-[9px] text-zinc-500 dark:text-zinc-500 uppercase tracking-wide font-bold">{data.role}</p>
      </div>
    </div>
  </div>
);

const MarqueeColumn = ({ items, reverse = false, duration = 20 }: { items: typeof COLUMN_1, reverse?: boolean, duration?: number }) => (
  <motion.div 
    initial={{ y: reverse ? -500 : 0 }}
    animate={{ y: reverse ? 0 : -500 }}
    transition={{ repeat: Infinity, duration: duration, ease: "linear" }}
    className="flex flex-col"
  >
    {items.map(item => <Card key={item.id} data={item} />)}
    {items.map(item => <Card key={`${item.id}-dup`} data={item} />)}
    {items.map(item => <Card key={`${item.id}-dup2`} data={item} />)}
  </motion.div>
);

export default function WorkflowBg() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none flex justify-center gap-4 px-4 opacity-50 dark:opacity-30 mask-linear-fade">
       {/* Mask to fade top and bottom */}
       <div className="absolute inset-0 z-10 bg-gradient-to-b from-background via-transparent to-background" />
       
       <div className="w-1/3 max-w-[260px] pt-10">
          <MarqueeColumn items={COLUMN_1} duration={25} />
       </div>
       <div className="w-1/3 max-w-[260px] -mt-20">
          <MarqueeColumn items={COLUMN_2} reverse duration={30} />
       </div>
       <div className="w-1/3 max-w-[260px] pt-20">
          <MarqueeColumn items={COLUMN_3} duration={28} />
       </div>
    </div>
  );
}
