"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="py-40 bg-gradient-to-b from-[#111111] to-brand-bg relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
        
        {/* Left Side: Massive Title Sliding Up */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="text-brand-primary text-sm tracking-[0.4em] uppercase font-bold mb-6 block">
            Our Identity
          </span>
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5rem] font-black uppercase tracking-tight leading-[1.05] text-white">
            Confidence <br /> Engineered.
          </h2>
        </motion.div>
        
        {/* Right Side: Text Description Sliding Up */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <p className="text-xl md:text-2xl text-gray-400 font-medium leading-loose tracking-wide">
            HUKKA is not just clothing. It is confidence engineered for the modern man. 
            Bold silhouettes, premium fabrics, and a relentless pursuit of perfection.
            We design for those who refuse to blend in.
          </p>
          <div className="mt-14 w-full h-[1px] bg-gradient-to-r from-[#C19A6B] via-[#C19A6B]/50 to-transparent opacity-70" />
        </motion.div>

      </div>
    </section>
  );
}
