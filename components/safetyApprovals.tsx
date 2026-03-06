"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Send, Star, MessageCircle, Quote, Bot, User, Sparkles, Zap } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const DottedTexture = ({ color = "#000", opacity = "0.2" }) => (
  <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="ultra-dense-dots-safety" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
        <circle cx="1.5" cy="1.5" r="0.8" fill={color} fillOpacity={opacity} />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#ultra-dense-dots-safety)" />
  </svg>
);

export default function SaaSPrecisionApproval() {
  return (
    <section className="relative w-full py-20 md:py-32 bg-white dark:bg-background text-zinc-900 dark:text-zinc-100 flex flex-col items-center overflow-hidden transition-colors duration-500">
      
      {/* Background Elements - Punchier & Unique */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] dark:opacity-[0.05]" 
             style={{ backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
        
        {/* Animated Blobs for Dark Mode */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] rounded-full bg-indigo-500/10 blur-[100px] dark:bg-indigo-500/20"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-[20%] -left-[10%] w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-[100px] dark:bg-cyan-500/20"
        />
      </div>

      <div className="max-w-7xl w-full px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
        
        {/* LEFT: CONTENT */}
        <div className="space-y-8 text-center lg:text-left">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="space-y-5"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-[10px] font-bold uppercase tracking-widest text-zinc-500 dark:text-zinc-400 mb-2">
              <Sparkles size={12} className="text-indigo-500" />
              Community First
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-[1] text-zinc-900 dark:text-white">
              Join the Aura UI <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-cyan-500">Dev Community</span> <br />
              today
            </h2>
            
            <p className="text-base md:text-lg font-medium text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-lg mx-auto lg:mx-0">
              Connect with top developers building autonomous agents. Share patterns, get feedback, and ship faster with Aura UI components.
            </p>

            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="group relative px-8 py-3.5 rounded-xl font-medium text-sm transition-all duration-500
                bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900
                shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)] dark:shadow-[0_10px_30px_-10px_rgba(255,255,255,0.3)]
                hover:-translate-y-1 hover:shadow-xl
                overflow-hidden inline-flex items-center gap-2"
            >
              {/* INTERNAL TEXTURE */}
              <div className="absolute inset-0 pointer-events-none opacity-[0.1] scale-[0.4] z-10">
                <DottedTexture color="currentColor" opacity="1" />
              </div>

              {/* THE BEAM: Thinner, Sharper, Side-aligned */}
              <div className="absolute bottom-0 left-0 right-0 h-[1.5px] w-full flex justify-center z-30">
                <div className="w-[85%] h-full bg-gradient-to-r from-transparent via-cyan-400 dark:via-indigo-500 to-transparent opacity-90" />
              </div>

              {/* TOP BEVEL */}
              <div className="absolute inset-x-0 top-0 h-[1px] bg-white/20 z-20" />

              {/* HOVER SWEEP */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/10 to-transparent z-20" />
              
              <span className="relative z-30 font-bold tracking-tight flex items-center gap-2">
                Join Discord <Zap size={14} className="fill-current" />
              </span>
            </motion.button>
          </motion.div>

          {/* Social Proof Logos */}
          <div className="space-y-4 pt-8 border-t border-zinc-200 dark:border-zinc-800">
             <p className="text-[10px] font-black text-zinc-400 dark:text-zinc-500 uppercase tracking-[0.2em]">Trusted by teams at</p>
             <div className="flex flex-wrap justify-center lg:justify-start items-center gap-8 opacity-60 grayscale dark:invert hover:grayscale-0 transition-all duration-500">
                <div className="flex items-center gap-2 group cursor-pointer">
                   <img src="https://raw.githubusercontent.com/lobehub/lobe-icons/refs/heads/master/packages/static-png/light/vercel-text.png" alt="Vercel" className="h-5 w-auto object-contain group-hover:scale-105 transition-transform" />
                </div>
                <div className="flex items-center gap-2 group cursor-pointer">
                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 127.964" className="h-5 w-auto fill-current text-zinc-900 group-hover:text-indigo-600 transition-colors">
                      <path d="m4.086 51.292l72.586 72.587c1.06 1.06.549 2.859-.924 3.134a64.097 64.097 0 0 1-7.508.947a1.89 1.89 0 0 1-1.46-.554L.558 61.184a1.89 1.89 0 0 1-.554-1.46c.17-2.546.489-5.051.948-7.507c.275-1.473 2.074-1.984 3.134-.925ZM2.04 80.682c-.484-1.806 1.65-2.946 2.973-1.623l43.893 43.893c1.322 1.322.183 3.457-1.624 2.972c-22.009-5.9-39.34-23.233-45.242-45.242Zm6.362-48.609c.616-1.067 2.073-1.23 2.945-.36l84.904 84.905c.871.871.708 2.328-.36 2.945a63.856 63.856 0 0 1-5.548 2.851a1.885 1.885 0 0 1-2.11-.394L5.945 39.732a1.885 1.885 0 0 1-.395-2.11a63.831 63.831 0 0 1 2.852-5.549ZM63.912 0c35.375 0 64.052 28.677 64.052 64.052c0 18.78-8.081 35.672-20.957 47.387c-.743.677-1.883.632-2.594-.079L16.604 23.551a1.88 1.88 0 0 1-.079-2.594C28.241 8.082 45.133 0 63.912 0Zm194.14 35.248c4.591 0 8.313-3.735 8.313-8.343c0-4.608-3.722-8.343-8.313-8.343c-4.59 0-8.312 3.735-8.312 8.343c0 4.507 3.561 8.18 8.014 8.338l.298.005Zm-71.202 72.761V18.567h14.773v76.356h39.83v13.086H186.85Zm105.144-36.497v36.497H277.7V44.62h14.115v10.865l.179-.12c1.435-3.401 3.748-6.243 6.938-8.524c3.189-2.321 7.256-3.482 12.201-3.482c4.386 0 8.372.981 11.961 2.942c3.589 1.92 6.459 4.742 8.612 8.464c2.153 3.722 3.23 8.284 3.23 13.686v39.56h-14.294V70.43c0-4.802-1.277-8.444-3.828-10.925c-2.511-2.52-5.88-3.782-10.108-3.782c-2.71 0-5.183.56-7.415 1.681c-2.233 1.12-4.007 2.842-5.323 5.163c-1.316 2.32-1.974 5.302-1.974 8.944Zm147.608-28.154c3.986 0 7.575.52 10.764 1.561c3.19 1 5.902 2.441 8.134 4.322c2.274 1.881 4.008 4.102 5.204 6.664c1.195 2.56 1.794 5.382 1.794 8.464v43.64h-13.696v-8.944h-.239c-.957 1.8-2.253 3.462-3.888 4.982c-1.595 1.521-3.627 2.742-6.1 3.662c-2.473.88-5.442 1.32-8.912 1.32c-4.225 0-7.973-.7-11.243-2.1c-3.27-1.44-5.861-3.562-7.775-6.363c-1.914-2.842-2.87-6.363-2.87-10.565c0-3.642.677-6.623 2.033-8.944a15.68 15.68 0 0 1 5.502-5.583c2.352-1.4 5.024-2.461 8.014-3.182c2.99-.72 6.1-1.26 9.33-1.62l2.647-.301c2.718-.315 4.945-.595 6.684-.84c2.311-.32 3.946-.82 4.904-1.5c.996-.681 1.495-1.742 1.495-3.182v-.48c0-1.921-.479-3.602-1.436-5.043c-.957-1.44-2.333-2.581-4.126-3.421c-1.755-.84-3.888-1.261-6.4-1.261c-2.512 0-4.724.42-6.638 1.26c-1.914.8-3.43 1.921-4.546 3.362a9.156 9.156 0 0 0-1.914 4.922h-13.816c.2-3.921 1.416-7.443 3.648-10.565c2.234-3.121 5.323-5.602 9.271-7.443c3.988-1.881 8.712-2.822 14.175-2.822Zm11.84 34.037c-.388.284-.983.553-1.783.806l-.31.094c-.916.28-2.032.56-3.348.84l-4.246.78c-1.516.241-3.071.481-4.666.721c-2.193.28-4.226.78-6.1 1.501c-1.874.72-3.388 1.7-4.546 2.941c-1.116 1.24-1.674 2.862-1.674 4.863c0 2.56 1.016 4.582 3.05 6.063c2.033 1.44 4.765 2.16 8.195 2.16c3.388 0 6.239-.62 8.552-1.86c2.312-1.28 4.026-2.942 5.142-4.983c1.157-2.08 1.735-4.362 1.735-6.843v-7.083Zm26.527 30.614V44.62h13.755v10.445h.18c1.157-3.602 2.97-6.343 5.442-8.224c2.512-1.92 5.802-2.881 9.869-2.881c.997 0 1.894.04 2.69.12l1.49.08c.217.013.419.027.605.04v12.906l-.322-.046a67.138 67.138 0 0 0-2.429-.254a46.15 46.15 0 0 0-4.187-.18c-2.353 0-4.505.54-6.46 1.62c-1.953 1.081-3.509 2.742-4.664 4.983c-1.117 2.201-1.675 4.982-1.675 8.344v36.437H477.97Zm-227.094 0V44.62h14.294v63.39h-14.294ZM374.38 43.18c4.506 0 8.592.8 12.26 2.4c3.71 1.601 6.879 3.882 9.51 6.844c2.631 2.921 4.665 6.403 6.1 10.445c1.435 4.002 2.154 8.444 2.154 13.326v3.842h-45.976c.11 3.308.763 6.269 1.957 8.884c1.316 2.842 3.23 5.063 5.742 6.663c2.551 1.601 5.602 2.402 9.15 2.402c2.632 0 4.944-.4 6.938-1.201c1.993-.8 3.649-1.901 4.963-3.302a12.89 12.89 0 0 0 2.932-4.982h13.456c-.797 4.122-2.532 7.764-5.203 10.925c-2.672 3.122-6.02 5.583-10.048 7.384c-3.987 1.76-8.413 2.641-13.277 2.641c-6.3 0-11.743-1.42-16.328-4.262c-4.584-2.841-8.114-6.743-10.585-11.706c-2.472-5.002-3.709-10.705-3.709-17.108c0-6.443 1.276-12.166 3.828-17.168c2.552-5.002 6.08-8.924 10.586-11.766c4.506-2.84 9.69-4.262 15.55-4.262Zm.179 11.525c-3.27 0-6.12.74-8.553 2.221c-2.39 1.48-4.265 3.582-5.62 6.303c-.968 1.97-1.58 4.212-1.836 6.723h32.078c-.256-2.511-.868-4.752-1.834-6.723c-1.316-2.721-3.19-4.822-5.622-6.303c-2.433-1.48-5.303-2.221-8.613-2.221Z"/></svg>
                </div>
                <div className="flex items-center gap-2 group cursor-pointer">
                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 126" className="h-5 w-auto fill-current text-zinc-900 group-hover:text-emerald-600 transition-colors"><path d="M365.131 49.074c-7.537 0-12.917 2.575-15.557 7.45l-1.42 2.64v-8.819H335.89v53.61h12.901V72.06c0-7.62 4.142-11.991 11.356-11.991c6.88 0 10.825 4.256 10.825 11.674v32.211h12.907V69.442c0-12.764-7.007-20.368-18.747-20.368Zm-62.565 0c-15.224 0-24.652 9.5-24.652 24.789v7.527c0 14.703 9.538 23.835 24.893 23.835c10.271 0 17.47-3.763 22-11.504l-7.998-4.602c-3.347 4.465-8.694 7.231-13.997 7.231c-7.773 0-12.413-4.798-12.413-12.84v-2.131h36.008v-8.891c0-14.243-9.352-23.414-23.83-23.414h-.011Zm12.1 23.638h-24.311v-1.287c0-8.825 4.333-13.695 12.2-13.695c7.576 0 12.101 4.798 12.101 12.84l.01 2.142ZM512 41.52V31.265h-44.625V41.52h15.646v52.157h-15.646v10.255H512V93.677h-15.651V41.52H512ZM173.638 29.786c-19.93 0-32.32 12.419-32.32 32.42v10.813c0 19.995 12.385 32.42 32.32 32.42c19.935 0 32.321-12.425 32.321-32.42V62.205c-.005-20.022-12.408-32.42-32.321-32.42Zm18.987 43.973c0 13.279-6.919 20.893-18.987 20.893c-12.068 0-18.982-7.614-18.982-20.893V61.46c0-13.279 6.925-20.893 18.988-20.893c12.062 0 18.987 7.614 18.987 20.893l-.006 12.299Zm53.856-24.685c-6.771 0-12.633 2.805-15.69 7.5l-1.386 2.136v-8.365h-12.27V122.4h12.906V96.3l1.38 2.049c2.904 4.306 8.574 6.875 15.17 6.875c11.125 0 22.35-7.27 22.35-23.518v-9.115c0-11.707-6.919-23.518-22.46-23.518Zm9.554 32.003c0 8.64-5.04 14.008-13.148 14.008c-7.56 0-12.835-5.675-12.835-13.794v-8.064c0-8.217 5.319-14.002 12.945-14.002c8.047 0 13.048 5.363 13.048 14.002l-.01 7.85ZM419.54 31.27l-26.037 72.684h13.109l4.985-15.58h29.932l.05.154l4.93 15.426h13.104l-26.082-72.69l-13.99.006Zm-4.744 46.855l11.745-36.748l11.625 36.748h-23.37ZM116.085 51.561a31.373 31.373 0 0 0-2.695-25.774a31.773 31.773 0 0 0-34.184-15.224A31.387 31.387 0 0 0 55.536.001a31.742 31.742 0 0 0-30.278 21.99A31.395 31.395 0 0 0 4.282 37.213a31.773 31.773 0 0 0 3.906 37.218a31.395 31.395 0 0 0 2.695 25.748a31.773 31.773 0 0 0 34.21 15.256a31.397 31.397 0 0 0 23.644 10.562a31.741 31.741 0 0 0 30.278-21.99a31.39 31.39 0 0 0 20.97-15.223a31.73 31.73 0 0 0-3.9-37.224Zm-47.348 66.22a23.518 23.518 0 0 1-15.108-5.478c.186-.104.548-.285.756-.422l25.09-14.484a4.07 4.07 0 0 0 2.06-3.567V58.453l10.6 6.119a.367.367 0 0 1 .208.296v29.28c0 13.041-10.564 23.618-23.606 23.633ZM18.015 96.12a23.556 23.556 0 0 1-2.82-15.821c.185.115.514.312.744.443l25.096 14.49a4.076 4.076 0 0 0 4.12 0L75.77 77.528v12.238a.367.367 0 0 1-.148.328L50.26 104.732c-11.292 6.502-25.716 2.637-32.245-8.64v.028Zm-6.573-54.782a23.512 23.512 0 0 1 12.287-10.354v29.823a4.081 4.081 0 0 0 2.06 3.567l30.623 17.683l-10.639 6.141a.373.373 0 0 1-.356.033L20.059 73.589c-11.282-6.527-15.148-20.957-8.64-32.25h.023Zm87.102 20.27L67.92 43.924l10.59-6.125a.378.378 0 0 1 .355-.033l25.359 14.643a23.61 23.61 0 0 1-3.649 42.598V65.191a4.076 4.076 0 0 0-2.049-3.583h.017ZM109.1 45.721a30.132 30.132 0 0 0-.745-.444L83.26 30.788a4.076 4.076 0 0 0-4.12 0L48.517 48.466V36.233a.4.4 0 0 1 .154-.328l25.358-14.638a23.61 23.61 0 0 1 35.06 24.46l.011-.005ZM42.738 67.546l-10.605-6.119a.4.4 0 0 1-.203-.295V31.85a23.605 23.605 0 0 1 38.714-18.155c-.186.105-.52.285-.756.422l-25.09 14.484a4.081 4.081 0 0 0-2.06 3.567v35.377Zm5.758-12.418l13.64-7.878l13.635 7.878v15.744l-13.64 7.877l-13.64-7.877l.005-15.744Z"/></svg>
                </div>
             </div>
          </div>
        </div>

        {/* RIGHT: TESTIMONIALS & CHATBOT */}
        <div className="relative flex flex-col gap-4 md:pl-10 w-full">
          <TestimonialCard 
            name="Sarah J." 
            image="https://i.pravatar.cc/150?u=sarah"
            text="Aura UI components are incredibly polished. The autonomous agent templates saved us weeks of dev time. Highly recommended!"
            delay={0.1}
            badge="Engineering"
          />
          <TestimonialCard 
            name="David Chen" 
            image="https://i.pravatar.cc/150?u=david"
            text="Finally a design system that feels 'native' to AI workflows. The micro-interactions on the safety module are just chef's kiss."
            dark
            delay={0.2}
            badge="Product"
          />
          <TestimonialCard 
            name="Elena R." 
            image="https://i.pravatar.cc/150?u=elena"
            text="Dark mode implementation is flawless. It integrates perfectly with our existing Tailwind setup. Love the glassmorphism effects!"
            delay={0.3}
            badge="Design"
          />

          {/* Chatbox Overlap - Hidden on Mobile */}
          <ChatBox />
        </div>

      </div>
    </section>
  );
}

function TestimonialCard({ name, image, text, dark, delay, badge }: { name: string, image: string, text: string, dark?: boolean, delay: number, badge?: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6 }}
      whileHover={{ scale: 1.02, x: -5, rotate: dark ? 1 : -1 }}
      className={`p-6 rounded-3xl shadow-sm border relative overflow-hidden ${
        dark 
          ? 'bg-zinc-900 dark:bg-zinc-800 text-white border-zinc-800 dark:border-zinc-700' 
          : 'bg-white dark:bg-zinc-900/50 text-zinc-600 dark:text-zinc-300 border-zinc-100 dark:border-zinc-800'
        } flex gap-4 items-start cursor-default transition-all duration-300 group`}
    >
      {/* Decorative gradient for dark mode */}
      {dark && <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />}

      <div className="relative flex-shrink-0">
        <img src={image} alt={name} className="w-10 h-10 rounded-full object-cover border-2 border-white/10 shadow-sm" />
        <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full flex items-center justify-center shadow-sm ${dark ? 'bg-indigo-500' : 'bg-indigo-100 text-indigo-600'}`}>
          <Star size={8} fill="currentColor" />
        </div>
      </div>
      <div className="space-y-1.5 relative z-10">
        <div className="flex items-center justify-between">
            <h4 className={`text-sm font-bold ${dark ? 'text-white' : 'text-zinc-900 dark:text-white'}`}>{name}</h4>
            {badge && (
                <span className={`text-[9px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider ${
                    dark ? 'bg-zinc-800 text-zinc-400' : 'bg-zinc-100 text-zinc-500'
                }`}>
                    {badge}
                </span>
            )}
        </div>
        <p className={`text-[12px] leading-relaxed font-medium opacity-90`}>
          {text}
        </p>
      </div>
    </motion.div>
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

    setTyping(true);
    setTimeout(() => {
      const randomReply = funnyReplies[Math.floor(Math.random() * funnyReplies.length)];
      setMessages(prev => [...prev, { role: "bot", text: randomReply }]);
      setTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  return (
    <motion.div 
      initial={{ y: 50, opacity: 0, scale: 0.9 }}
      whileInView={{ y: 0, opacity: 1, scale: 1 }}
      className="hidden md:flex absolute -bottom-24 -right-12 w-[320px] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl shadow-[0_20px_50px_-10px_rgba(0,0,0,0.2)] dark:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.5)] overflow-hidden z-20 flex-col"
    >
      {/* Header - Punchier */}
      <div className="px-5 py-4 bg-zinc-50 dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative">
             <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white dark:border-zinc-800 shadow-sm ring-2 ring-indigo-500/20">
                <img src="https://i.postimg.cc/3xgQH76g/Whats-App-Image-2026-02-19-at-8-23-43-PM.jpg" alt="user" className="w-full h-full object-cover" />
             </div>
             <div className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-white dark:border-zinc-900 rounded-full animate-pulse" />
          </div>
          <div className="flex flex-col">
             <span className="text-sm font-black text-zinc-900 dark:text-white tracking-tight">Aura Bot</span>
             <span className="text-[10px] font-bold text-indigo-500 dark:text-indigo-400 uppercase tracking-wider">{typing ? "Typing..." : "Online"}</span>
          </div>
        </div>
        <div className="flex gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-zinc-300 dark:bg-zinc-700" />
            <div className="w-1.5 h-1.5 rounded-full bg-zinc-300 dark:bg-zinc-700" />
            <div className="w-1.5 h-1.5 rounded-full bg-zinc-300 dark:bg-zinc-700" />
        </div>
      </div>

      {/* Messages */}
      <div 
        ref={scrollRef}
        className="h-[220px] p-5 space-y-4 overflow-y-auto bg-zinc-50/50 dark:bg-black/20 no-scrollbar"
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
                max-w-[85%] px-4 py-3 rounded-2xl text-[11px] font-bold leading-relaxed shadow-sm
                ${m.role === "user" 
                  ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 rounded-br-none shadow-lg" 
                  : "bg-white dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700 rounded-bl-none"}
              `}>
                {m.text}
              </div>
            </motion.div>
          ))}
          {typing && (
             <motion.div 
               initial={{ opacity: 0, y: 10 }}
               animate={{ opacity: 1, y: 0 }}
               className="flex justify-start"
             >
               <div className="px-4 py-3 rounded-2xl bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-bl-none shadow-sm">
                 <div className="flex gap-1">
                   <div className="w-1.5 h-1.5 bg-zinc-400 rounded-full animate-bounce" />
                   <div className="w-1.5 h-1.5 bg-zinc-400 rounded-full animate-bounce delay-75" />
                   <div className="w-1.5 h-1.5 bg-zinc-400 rounded-full animate-bounce delay-150" />
                 </div>
               </div>
             </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Input Area */}
      <div className="p-4 bg-white dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800 flex items-center gap-3">
        <div className="flex-1 relative">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Bakchodi shuru kare..."
              className="w-full bg-zinc-100 dark:bg-zinc-800 border-none rounded-xl px-4 py-2.5 text-[11px] text-zinc-900 dark:text-white placeholder:text-zinc-400 focus:ring-2 focus:ring-indigo-500/20 dark:focus:ring-indigo-500/40 outline-none transition-all font-bold"
            />
        </div>
        <motion.button 
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleSend}
          className="p-2.5 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-xl shadow-lg hover:shadow-xl transition-all"
        >
          <Send size={14} />
        </motion.button>
      </div>
      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </motion.div>
  );
}
