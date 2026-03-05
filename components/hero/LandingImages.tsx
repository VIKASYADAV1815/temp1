"use client";

import Image from "next/image";
import React from "react";

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

  const borderStyle = "border-[2px] border-slate-400/30 shadow-2xl rounded-3xl overflow-hidden";

  return (
    <div className="relative w-full h-[520px] md:h-[680px] lg:h-[750px] flex items-center justify-center overflow-hidden bg-transparent px-4">
      {/* Diagonal Ray Beam from nav bottom-left, striking across top-left of images */}
      {/* <div
        className="absolute -top-20 -left-64 w-[1000px] h-[250px] origin-top-left -rotate-[28deg] pointer-events-none z-30"
        style={{ maskImage: 'linear-gradient(to right, black 20%, transparent 80%)' }}
      >
        <div className="absolute inset-0 rounded-full blur-3xl mix-blend-screen bg-gradient-to-r from-indigo-500/30 via-transparent to-transparent dark:from-cyan-400/20" />
        <div className="absolute left-0 top-1/2 -translate-y-1/2 h-[6px] w-[120%] bg-gradient-to-r from-indigo-400/80 via-indigo-300/20 to-transparent blur-md dark:from-cyan-300/60 dark:via-cyan-200/10" />
        <div className="absolute left-0 top-1/2 -translate-y-1/2 h-[2px] w-[120%] bg-white/80 opacity-60 blur-[1px] dark:bg-cyan-100/80" />
      </div> */}
      {/* Container moved up slightly */}
      <div style={commonPerspectiveStyle} className="relative -mt-16 md:-mt-24 lg:-mt-32 scale-95 md:scale-100">
        
        {/* FRONT IMAGE - Top Layer */}
        <div
          style={{
            ...commonImageStyle,
            ...frontImageMask,
          }}
          className="relative z-20 left-4 md:left-10 lg:left-16" 
        >
          <div className={borderStyle}>
            <Image
              src="https://assets.aceternity.com/agenforce-demo-1.jpg"
              alt="Main Dashboard Mockup"
              width={1100}
              height={720}
              sizes="(max-width: 640px) 95vw, (max-width: 1024px) 75vw, 1100px"
              priority
              className="bg-white w-full h-auto"
            />
          </div>
        </div>

        {/* BACK IMAGE - Bottom-Left Layer with matched perspective and thicker border */}
        <div
          style={{
            ...commonImageStyle,
            ...backImageMask,
          }}
          className="absolute top-10 md:top-16 -left-6 md:-left-12 z-0" 
        >
          <div className={borderStyle}>
            <Image
              src="https://assets.aceternity.com/agenforce-demo-1.jpg"
              alt="Background Layer Mockup"
              width={1100}
              height={720}
              sizes="(max-width: 640px) 95vw, (max-width: 1024px) 75vw, 1100px"
              className="opacity-60 grayscale-[20%]" 
            />
          </div>
        </div>

      </div>
    </div>
  );
}
