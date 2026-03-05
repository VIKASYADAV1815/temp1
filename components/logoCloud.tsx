"use client";

import { motion } from "framer-motion";

const LOGOS = [
  { name: "Stripe", url: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg" },
  { name: "Netflix", url: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" },
//   { name: "Vercel", url: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Vercel_logo_black.svg" },
//   { name: "Airbnb", url: "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_Bélo.svg" },
//   { name: "Microsoft", url: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg" },
  { name: "Amazon", url: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
  { name: "Google", url: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
  { name: "Meta", url: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg" },
];

export default function LogoCloud() {
  return (
    <div className="w-full bg-background py-10">
      {/* Even tighter container width */}
      <div className="max-w-5xl mx-auto px-6 relative">
        
        {/* Minimal Label */}
        <p className="text-center text-[10px] font-bold text-zinc-500 dark:text-zinc-400 mb-6 tracking-[0.35em] uppercase opacity-70">
          Trusted by Industry Giants
        </p>

        {/* --- TIGHT INFINITE SCROLL --- */}
        <div className="relative flex overflow-hidden border-y border-zinc-100/60 dark:border-zinc-800 py-5">
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-50%" }}
            transition={{
              duration: 20, // Faster scroll for more logos in small space
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex whitespace-nowrap gap-8 items-center flex-none"
          >
            {[...LOGOS, ...LOGOS].map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center h-6 md:h-8 w-auto flex-none 
                  grayscale brightness-110 dark:brightness-90 opacity-50 hover:opacity-100 hover:grayscale-0 
                  transition-all duration-500 px-2"
              >
                <img
                  src={logo.url}
                  alt={logo.name}
                  className="max-h-full w-auto object-contain scale-[0.9]"
                />
              </div>
            ))}
          </motion.div>

          {/* Masking for tight width */}
          <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background via-background/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background via-background/80 to-transparent z-10 pointer-events-none" />
        </div>

      </div>
    </div>
  );
}
