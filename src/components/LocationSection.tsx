"use client";

import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Clock } from "lucide-react";

export default function LocationSection() {
  return (
    <section id="location" className="py-40 bg-gradient-to-b from-brand-bg to-[#0a0a0a] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Info Side (Slides Up) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="text-brand-primary text-sm tracking-[0.4em] uppercase font-bold block mb-6">
              Visit Us
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight mb-10 leading-[1.1]">
              Experience <br />
              <span className="text-brand-primary drop-shadow-[0_0_15px_rgba(193,154,107,0.3)]">HUKKA</span>
            </h2>

            <div className="space-y-8">
              <motion.div 
                className="flex items-start group"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-12 h-12 rounded-full bg-brand-surface flex items-center justify-center mr-6 group-hover:bg-brand-primary group-hover:text-black transition-colors duration-300">
                  <MapPin className="w-5 h-5 text-gray-400 group-hover:text-black transition-colors" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white uppercase tracking-wider mb-1">Location</h4>
                  <p className="text-gray-400">Thalassery, Kannur<br />Kerala 670100, India</p>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-start group"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-12 h-12 rounded-full bg-brand-surface flex items-center justify-center mr-6 group-hover:bg-brand-primary group-hover:text-black transition-colors duration-300">
                  <Clock className="w-5 h-5 text-gray-400 group-hover:text-black transition-colors" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white uppercase tracking-wider mb-1">Hours</h4>
                  <p className="text-gray-400">Mon - Sat: 10 AM - 8 PM<br />Sun: 12 PM - 6 PM</p>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-start group"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-12 h-12 rounded-full bg-brand-surface flex items-center justify-center mr-6 group-hover:bg-brand-primary group-hover:text-black transition-colors duration-300">
                  <Phone className="w-5 h-5 text-gray-400 group-hover:text-black transition-colors" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white uppercase tracking-wider mb-1">Contact</h4>
                  <p className="text-gray-400">+1 (555) 123-4567<br />info@hukka.style</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Map Side (Slides Up) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="w-full h-[500px] bg-[#111] rounded-sm border border-white/5 overflow-hidden relative grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-700 shadow-2xl shadow-black/80"
          >
            <iframe 
              src="https://maps.google.com/maps?q=11.7481875,75.4936875&hl=en&z=17&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            {/* Overlay to give it a dark theme look default */}
            <div className="absolute inset-0 bg-brand-bg/20 pointer-events-none mix-blend-overlay" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
