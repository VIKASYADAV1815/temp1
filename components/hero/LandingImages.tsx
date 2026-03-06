"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

export default function LandingImages() {
  const rotateX = 25;
  const rotateY = 20;
  const rotateZ = -8;

  const commonPerspectiveStyle: React.CSSProperties = {
    perspective: "2500px",
    transformStyle: "preserve-3d",
  };

  const commonImageStyle: React.CSSProperties = {
    transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`,
  };

  const backImageMask: React.CSSProperties = {
    WebkitMaskImage: "linear-gradient(to bottom, black 10%, transparent 45%), linear-gradient(to right, black 10%, transparent 45%)",
    WebkitMaskComposite: "source-in",
    maskComposite: "intersect",
  };

  const frontImageMask: React.CSSProperties = {
    WebkitMaskImage: "linear-gradient(to bottom, black 70%, transparent 95%), linear-gradient(to right, black 60%, transparent 90%)",
    WebkitMaskComposite: "source-in",
    maskComposite: "intersect",
  };

  const borderStyle = "border-[1px] md:border-[2px] border-slate-400/30 shadow-2xl rounded-2xl md:rounded-3xl overflow-hidden";

  return (
    /* Adjusted height for mobile to keep the layout tight */
    <div className="relative w-full h-[400px] sm:h-[500px] md:h-[750px] flex items-center justify-center overflow-hidden bg-transparent">
      
      {/* 1. -mt-48: Pulls images up to reduce the top gap.
          2. scale-[0.75]: Slightly smaller for mobile to prevent left-side clipping.
          3. items-center: Ensures the 3D origin is centered.
      */}
      <motion.div 
        style={commonPerspectiveStyle} 
        initial={{ x: 50, y: -30, opacity: 0 }}
        animate={{ x: 0, y: 0, opacity: 1 }}
        transition={{ 
          duration: 0.8, 
          ease: "easeOut",
          delay: 0.1
        }}
        className="relative flex items-center justify-center -mt-48 md:-mt-32 scale-[0.75] sm:scale-[0.85] md:scale-100 transition-all duration-500"
      >
        
        {/* FRONT IMAGE */}
        <div
          style={{
            ...commonImageStyle,
            ...frontImageMask,
          }}
          /* md:left-16 keeps the desktop offset, while mobile stays centered */
          className="relative z-20 md:left-16" 
        >
          <div className={borderStyle}>
            <Image
              src="https://assets.aceternity.com/agenforce-demo-1.jpg"
              alt="Main Dashboard Mockup"
              width={1100}
              height={720}
              priority
              /* Reduced from 130vw to 115vw for better mobile fit */
              className="bg-white w-[115vw] sm:w-[110vw] md:w-[1100px] h-auto max-w-none"
            />
          </div>
        </div>

        {/* BACK IMAGE */}
        <div
          style={{
            ...commonImageStyle,
            ...backImageMask,
          }}
          /* Positioned relative to the front image without forcing horizontal overflow */
          className="absolute top-8 md:top-20 -left-6 md:-left-12 z-0" 
        >
          <div className={borderStyle}>
            <Image
              src="https://assets.aceternity.com/agenforce-demo-1.jpg"
              alt="Background Layer Mockup"
              width={1100}
              height={720}
              className="opacity-60 grayscale-[20%] w-[115vw] sm:w-[110vw] md:w-[1100px] h-auto max-w-none" 
            />
          </div>
        </div>

      </motion.div>
    </div>
  );
}