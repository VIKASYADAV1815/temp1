"use client";

import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Check, Lock, Fingerprint, ChevronRight, Activity, Send, ShieldCheck, FileKey } from "lucide-react";
import { useState, useEffect, useRef } from "react";

export default function SaaSPrecisionApproval() {
  const areaRef = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 80, damping: 20 });
  const sy = useSpring(my, { stiffness: 80, damping: 20 });
  const rotateX = useTransform(sy, [-200, 200], [8, -8]);
  const rotateY = useTransform(sx, [-200, 200], [-8, 8]);

  function handleMove(e: React.MouseEvent) {
    if (!areaRef.current) return;
    const rect = areaRef.current.getBoundingClientRect();
    mx.set(e.clientX - rect.left - rect.width / 2);
    my.set(e.clientY - rect.top - rect.height / 2);
  }
  function handleLeave() {
    mx.set(0); my.set(0);
  }

  return (
    <section className="relative w-full py-32 bg-background text-foreground flex flex-col items-center overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.04] dark:opacity-[0.06]" 
             style={{ backgroundImage: 'radial-gradient(circle, #6366f1 1px, transparent 1px)', backgroundSize: '26px 26px' }} />
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[25%] -right-[10%] w-[640px] h-[640px] rounded-full bg-gradient-to-br from-indigo-400/10 via-transparent to-transparent"
        />
        <motion.div 
          style={{ x: sx, y: sy }}
          className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full blur-3xl bg-cyan-400/10"
        />
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-background to-transparent" />
      </div>

      <div 
        ref={areaRef}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        className="max-w-6xl w-full px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10"
      >
        
        {/* LEFT: MINIMAL TEXT */}
        <div className="space-y-8 text-center lg:text-left">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100/80 dark:bg-zinc-900/70 border border-zinc-200 dark:border-zinc-800 text-[10px] font-black text-zinc-600 dark:text-zinc-400 uppercase tracking-widest mx-auto lg:mx-0 shadow-[0_2px_12px_rgba(0,0,0,0.04)]"
          >
            <Activity size={12} className="text-cyan-400" />
            Security Layer v4.0
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-[900] tracking-tighter leading-[0.9] text-zinc-900 dark:text-white drop-shadow-[0_1px_0_rgba(255,255,255,0.2)]"
          >
            Safety & <br />
            <span className="text-zinc-400 dark:text-zinc-500 italic">Approvals.</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-lg font-medium leading-relaxed max-w-[420px] text-zinc-600 dark:text-zinc-300 mx-auto lg:mx-0"
          >
            The standard for autonomous control. Audit, authorize, and log sensitive actions with near‑zero latency.
          </motion.p>

          <div className="flex flex-col md:flex-row gap-4 pt-4 justify-center lg:justify-start">
             <div className="flex items-center gap-2 text-xs font-bold text-zinc-600 dark:text-zinc-300 bg-white/70 dark:bg-zinc-900/60 px-3 py-2 rounded-lg border border-zinc-100 dark:border-zinc-800 shadow-sm">
                <ShieldCheck size={16} className="text-emerald-500" />
                SOC2 Compliant
             </div>
             <div className="flex items-center gap-2 text-xs font-bold text-zinc-600 dark:text-zinc-300 bg-white/70 dark:bg-zinc-900/60 px-3 py-2 rounded-lg border border-zinc-100 dark:border-zinc-800 shadow-sm">
                <FileKey size={16} className="text-indigo-500" />
                End-to-End Encrypted
             </div>
          </div>
        </div>

        {/* RIGHT: THE COMPACT "VAULT" CARD */}
        <div className="relative flex justify-center lg:justify-end pr-0 lg:pr-8 pb-8">
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 260, damping: 24 }}
            style={{ rotateX, rotateY }}
            className="w-full max-w-[460px] bg-gradient-to-b from-white/95 to-white/90 dark:from-zinc-950/95 dark:to-zinc-900/90 border border-zinc-200 dark:border-zinc-800 rounded-3xl shadow-[0_30px_80px_-20px_rgba(0,0,0,0.25)] overflow-hidden relative z-10 group/vault"
          >
            {/* Animated Gradient Border */}
            <motion.div 
              aria-hidden
              animate={{ rotate: 360 }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
              className="pointer-events-none absolute -inset-[1px] rounded-[1.55rem] bg-[conic-gradient(from_0deg,transparent,rgba(99,102,241,0.25),transparent)]"
              style={{ maskImage: "linear-gradient(black, transparent 60%)", WebkitMaskImage: "linear-gradient(black, transparent 60%)" }}
            />
            {/* 1. Hairline Header */}
            <div className="relative px-6 py-4 border-b border-zinc-100 dark:border-zinc-800 bg-zinc-50/80 dark:bg-zinc-900/80 backdrop-blur-sm flex justify-between items-center">
               <div className="flex items-center gap-2.5">
                  <div className="w-2 h-2 rounded-full bg-amber-500 shadow-[0_0_8px_#f59e0b] animate-pulse" />
                  <span className="text-[11px] font-black uppercase tracking-tight text-zinc-700 dark:text-zinc-100">Pending Approval</span>
               </div>
               <span className="text-[10px] font-mono text-zinc-400 dark:text-zinc-500 font-bold uppercase tracking-tighter">04:32m left</span>
            </div>

            {/* 2. Compact Body */}
            <div className="p-6 md:p-8 space-y-6 md:space-y-8">
               <div className="flex justify-between items-start">
                  <div className="space-y-1.5">
                     <p className="text-[10px] font-black text-cyan-500 uppercase tracking-[0.15em]">Cloud Infrastructure</p>
                     <h3 className="text-xl font-black tracking-tight text-zinc-900 dark:text-white group-hover/vault:text-indigo-500 transition-colors">Sync Production Index</h3>
                  </div>
                  <motion.div 
                    whileHover={{ rotate: 15, scale: 1.08 }}
                    className="p-2.5 bg-white/80 dark:bg-zinc-900/70 border border-zinc-100 dark:border-zinc-800 rounded-xl shadow-sm cursor-pointer"
                  >
                     <Lock size={18} className="text-zinc-700 dark:text-zinc-300" />
                  </motion.div>
               </div>

               {/* Info Grid (Tight & Small) */}
               <div className="grid grid-cols-2 gap-3 md:gap-4">
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-100 dark:border-zinc-800 cursor-help transition-all shadow-[0_10px_24px_-12px_rgba(0,0,0,0.15)]"
                  >
                     <p className="text-[9px] font-black text-zinc-400 dark:text-zinc-500 uppercase mb-1.5">Risk Score</p>
                     <p className="text-xs font-black text-red-500 tracking-tighter italic">High Priority</p>
                  </motion.div>
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-100 dark:border-zinc-800 cursor-help transition-all shadow-[0_10px_24px_-12px_rgba(0,0,0,0.15)]"
                  >
                     <p className="text-[9px] font-black text-zinc-400 dark:text-zinc-500 uppercase mb-1.5">Signature</p>
                     <p className="text-xs font-black text-zinc-800 dark:text-zinc-200 tracking-tighter">PGP Verified</p>
                  </motion.div>
               </div>

               {/* 3. Tightly Packed Buttons */}
               <div className="flex gap-3">
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 py-3.5 rounded-xl border border-zinc-200 dark:border-zinc-700 text-[10px] font-black text-zinc-500 dark:text-zinc-300 hover:bg-red-50 dark:hover:bg-red-900/20 hover:text-red-500 hover:border-red-200 dark:hover:border-red-800 transition-all uppercase tracking-widest"
                  >
                    Reject
                  </motion.button>
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="relative overflow-hidden flex-[1.5] py-3.5 bg-zinc-900 dark:bg-white rounded-xl text-[10px] font-black text-white dark:text-black shadow-[0_12px_30px_-12px_rgba(0,0,0,0.5)] hover:bg-black dark:hover:bg-zinc-200 transition-all uppercase tracking-widest flex items-center justify-center gap-2"
                  >
                    <motion.span 
                      aria-hidden
                      animate={{ x: ['-120%', '120%'] }}
                      transition={{ repeat: Infinity, duration: 1.8, ease: "linear" }}
                      className="pointer-events-none absolute inset-y-0 -left-1 w-16 bg-gradient-to-r from-white/0 via-white/50 to-white/0 dark:from-black/0 dark:via-black/20 dark:to-black/0"
                    />
                    <Check size={14} className="text-emerald-400 dark:text-emerald-600" /> Approve Action
                  </motion.button>
               </div>
            </div>

            {/* 4. Mini Status Bar */}
            <div className="px-6 py-3 bg-zinc-50/80 dark:bg-zinc-900/60 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between group/status cursor-pointer hover:bg-zinc-100 dark:hover:bg-zinc-800/80 transition-colors">
               <div className="flex items-center gap-2">
                  <Fingerprint size={14} className="text-zinc-300 dark:text-zinc-600 group-hover/status:text-indigo-500 transition-colors" />
                  <span className="text-[10px] font-mono text-zinc-400 dark:text-zinc-500 font-bold uppercase tracking-widest italic group-hover/status:text-zinc-600 dark:group-hover/status:text-zinc-300 transition-colors">Encrypted Payload v2.4</span>
               </div>
               <ChevronRight size={14} className="text-zinc-200 dark:text-zinc-700 group-hover/status:translate-x-1 transition-transform" />
            </div>
          </motion.div>

          {/* Minimal Chatbot - Overlapping Bottom Right */}
          <ChatBox />
        </div>

      </div>
    </section>
  );
}

function ChatBox() {
  const [messages, setMessages] = useState([
    { role: "user", text: "Kya haal bhai? Kuch karle?" },
    { role: "bot", text: "Arre bhai, mai thoda busy hoon, thoda ruk." },
  ]);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);
  const [typing, setTyping] = useState(false);

  const funnyReplies = [
    "Jaa na yr.. dimag mat kha",
    "Aisa kuch funny nahi hai abhi",
    "Mai bzy hu.... baad me aana",
    "Kya bhai, fir aa gaye?",
    "System overload... chai peene gaya hu",
    "Deploy kar raha hu, shor mat macha",
    "Code fat gaya hai, baad me baat karte hai"
  ];

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;
    
    const userMsg = { role: "user", text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput("");

    // Simulate bot thinking and reply
    setTyping(true);
    setTimeout(() => {
      const randomReply = funnyReplies[Math.floor(Math.random() * funnyReplies.length)];
      setMessages(prev => [...prev, { role: "bot", text: randomReply }]);
      setTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <motion.div 
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="absolute -bottom-12 -right-12 md:-right-16 w-[280px] md:w-[320px] bg-white/95 dark:bg-zinc-950/95 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-[0_20px_60px_-20px_rgba(0,0,0,0.35)] overflow-hidden z-20 flex flex-col"
    >
      {/* Header */}
      <div className="px-4 py-3 border-b border-zinc-100 dark:border-zinc-800 bg-zinc-50/70 dark:bg-zinc-900/70 backdrop-blur-sm flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative">
             <div className="w-8 h-8 rounded-full overflow-hidden border border-white dark:border-zinc-700 shadow-sm">
                <img src="https://i.postimg.cc/3xgQH76g/Whats-App-Image-2026-02-19-at-8-23-43-PM.jpg" alt="user" className="w-full h-full object-cover" />
             </div>
             <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 border-2 border-white dark:border-zinc-900 rounded-full" />
          </div>
          <div className="flex flex-col">
             <span className="text-xs font-bold text-zinc-900 dark:text-white">Dev_Bot</span>
             <span className="text-[9px] font-medium text-zinc-400">{typing ? "Typing..." : "Online"}</span>
          </div>
        </div>
        <div className="flex gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-zinc-300 dark:bg-zinc-600" />
            <div className="w-1.5 h-1.5 rounded-full bg-zinc-300 dark:bg-zinc-600" />
        </div>
      </div>

      {/* Messages */}
      <div 
        ref={scrollRef}
        className="h-[220px] p-4 space-y-3 overflow-y-auto bg-zinc-50/40 dark:bg-black/30 no-scrollbar"
      >
        <AnimatePresence initial={false}>
          {messages.map((m, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div className={`
                max-w-[85%] px-3 py-2 rounded-2xl text-[11px] font-medium leading-relaxed shadow
                ${m.role === "user" 
                  ? "bg-zinc-900 text-white dark:bg-white dark:text-black rounded-br-none shadow-[0_12px_30px_-12px_rgba(0,0,0,0.4)]" 
                  : "bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-800 rounded-bl-none shadow-[0_8px_20px_-12px_rgba(0,0,0,0.35)]"}
              `}>
                {m.text}
              </div>
            </motion.div>
          ))}
          {typing && (
            <motion.div 
              key="typing"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="flex justify-start"
            >
              <div className="px-3 py-2 rounded-2xl text-[11px] font-medium leading-relaxed bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-800 rounded-bl-none shadow-[0_8px_20px_-12px_rgba(0,0,0,0.35)]">
                <span className="inline-flex items-center gap-1">
                  <span className="w-1 h-1 rounded-full bg-zinc-400 animate-pulse" />
                  <span className="w-1 h-1 rounded-full bg-zinc-400 animate-pulse [animation-delay:.15s]" />
                  <span className="w-1 h-1 rounded-full bg-zinc-400 animate-pulse [animation-delay:.3s]" />
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <style jsx global>{`
          .no-scrollbar::-webkit-scrollbar { display: none; }
          .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        `}</style>
      </div>

      {/* Input Area */}
      <div className="p-3 bg-white/95 dark:bg-zinc-950/95 border-t border-zinc-100 dark:border-zinc-800 flex items-center gap-2">
        <input 
          type="text" 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type a command..."
          className="flex-1 bg-zinc-100 dark:bg-zinc-900 border-none rounded-lg px-3 py-2 text-xs text-zinc-900 dark:text-white placeholder:text-zinc-400 focus:ring-1 focus:ring-zinc-300 dark:focus:ring-zinc-700 outline-none transition-all"
        />
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleSend}
          disabled={!input.trim()}
          className="p-2 bg-zinc-900 dark:bg-white text-white dark:text-black rounded-lg transition-colors shadow-lg hover:opacity-90 disabled:opacity-50"
        >
          <Send size={14} />
        </motion.button>
      </div>
    </motion.div>
  );
}
