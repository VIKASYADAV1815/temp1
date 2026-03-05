 "use client";
 
 import { useEffect, useState } from "react";
 import { Moon, Sun } from "lucide-react";
 
 export default function ThemeToggle() {
   const [dark, setDark] = useState<boolean>(false);
 
   useEffect(() => {
     try {
       const stored = localStorage.getItem("theme");
       const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
       const initialDark = stored ? stored === "dark" : prefersDark;
       setDark(initialDark);
     } catch {
       setDark(false);
     }
   }, []);
 
   useEffect(() => {
     const root = document.documentElement;
     root.classList.toggle("dark", dark);
     try {
       localStorage.setItem("theme", dark ? "dark" : "light");
     } catch {}
   }, [dark]);
 
   return (
     <button
       aria-label="Toggle theme"
       onClick={() => setDark((v) => !v)}
       className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-200 bg-white/70 backdrop-blur-md text-sm font-medium text-gray-700 hover:bg-gray-100 hover:border-gray-300 transition-colors dark:bg-zinc-900 dark:text-zinc-100 dark:border-zinc-800 dark:hover:bg-black"
     >
       {dark ? <Moon size={16} /> : <Sun size={16} />}
       <span className="hidden md:inline">{dark ? "Dark" : "Light"}</span>
     </button>
   );
 }
