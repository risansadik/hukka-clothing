"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function WhatsAppCTA() {
  const phoneNumber = "YOUR_NUMBER_HERE"; // Placeholder as requested
  const message = "Hi, I'm interested in HUKKA products. Can you send me the catalog?";
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0, y: 20 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 200, damping: 20, delay: 1 }}
      className="fixed bottom-6 right-6 z-[99] flex items-center justify-center w-14 h-14 bg-[#0D0D0D] text-[#4ADE80] border border-[#4ADE80]/30 hover:border-[#4ADE80] rounded-full shadow-[0_0_20px_rgba(74,222,128,0.15)] hover:shadow-[0_0_30px_rgba(74,222,128,0.4)] transition-all duration-300 hover:scale-110 hover:-translate-y-1 group"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="w-6 h-6 group-hover:drop-shadow-[0_0_8px_rgba(74,222,128,0.8)] transition-all" />
    </motion.a>
  );
}
