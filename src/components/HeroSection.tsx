"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  const { scrollY } = useScroll();
  const smokeOpacity = useTransform(scrollY, [0, 800], [1, 0]);

  return (
    <section className="relative min-h-[100dvh] min-h-screen w-full flex items-center justify-center overflow-hidden bg-brand-bg pt-28 pb-24 md:pb-12 md:pt-24">

      {/* 1. Background Clean Dark Gradient */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, #111111 0%, #0B0B0B 100%)' }}
      ></div>

      {/* Smoke Layers Container */}
      <motion.div
        style={{ opacity: smokeOpacity }}
        className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none mix-blend-screen overflow-hidden"
      >
        {/* 2. Smoke Layer 1 (Slow) */}
        <div className="absolute w-[200vw] h-[120vh] animate-smoke-slow opacity-[0.10] mix-blend-screen blur-[6px]">
          <Image
            src="/images/Screenshot 2026-04-13 233531.png"
            alt="smoke layer 1"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* 3. Smoke Layer 2 (Faster) */}
        <div className="absolute w-[200vw] h-[130vh] animate-smoke-medium opacity-[0.05] mix-blend-screen blur-[8px] scale-x-[-1]">
          <Image
            src="/images/Screenshot 2026-04-13 233536.png"
            alt="smoke layer 2"
            fill
            className="object-cover"
            priority
          />
        </div>
      </motion.div>

      {/* 4. Dark Overlay Layer for Readability & Depth */}
      <div className="absolute inset-0 bg-black/60 pointer-events-none z-0"></div>

      {/* 5. Content Canvas (Typography Centered) */}
      <div className="relative z-10 flex flex-col w-full max-w-5xl mx-auto px-6 items-center justify-center text-center mt-[-4dvh]">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          {/* Increased Letter Spacing */}
          <span className="text-brand-primary text-sm tracking-[0.6em] uppercase mb-10 block font-bold drop-shadow-xl z-20">
            Premium Menswear
          </span>

          {/* Main Integrated Branding Heading */}
          <div className="flex flex-col items-center justify-center space-y-4 mb-14 drop-shadow-2xl z-20">
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[7rem] font-black text-white tracking-widest uppercase leading-none">
              Own Your Style
            </h1>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-bold text-[#C19A6B] tracking-[0.15em] uppercase leading-none">
              With Hukka
            </h2>
          </div>
        </motion.div>

        {/* Description: Delayed fade-in and increased bottom margin */}
        <motion.p
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
          className="text-gray-300 text-lg md:text-xl font-medium tracking-wide max-w-xl mb-16 leading-relaxed mix-blend-plus-lighter drop-shadow-2xl z-20"
        >
          Bold, modern, and minimal clothing built for men who define their own rules. Enter the era of elevated aesthetic.
        </motion.p>

        {/* CTA: Fade + Slight Scale, increased spacing, subtle default glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 1 }}
          className="z-20"
        >
          <a
            href="#shop"
            className="group relative inline-flex items-center justify-center px-12 py-5 text-sm font-bold text-black uppercase tracking-[0.25em] bg-[#C19A6B] overflow-hidden transition-all duration-500 shadow-[0_0_20px_rgba(193,154,107,0.3)] hover:-translate-y-1 hover:scale-105 hover:bg-[#EAEAEA] hover:shadow-[0_0_40px_rgba(193,154,107,0.7)]"
          >
            <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-black pointer-events-none transition-opacity group-hover:opacity-10"></span>
            <span className="relative z-10 transition-colors duration-300">Explore Collection</span>
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center z-20"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <span className="text-[10px] uppercase tracking-widest text-[#666] mb-4 mix-blend-plus-lighter font-bold">Scroll</span>
        <div className="w-[1px] h-12 bg-gray-800 overflow-hidden relative">
          <motion.div
            className="w-full h-1/2 bg-[#C19A6B] absolute top-0"
            animate={{ top: ["-50%", "100%"] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>

    </section>
  );
}
