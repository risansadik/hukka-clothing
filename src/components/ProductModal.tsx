"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MessageCircle } from "lucide-react";

interface Product {
  id: number;
  name: string;
  category: string;
  sub?: string;
  price: string;
  image: string;
  description?: string;
}

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

const basePath = process.env.NODE_ENV === "production" ? "/hukka-clothing" : "";

export default function ProductModal({ product, isOpen, onClose }: ProductModalProps) {
  // Retain the last valid product in state so the exit animation doesn't crash on null
  const [displayedProduct, setDisplayedProduct] = useState<Product | null>(product);

  useEffect(() => {
    if (product) {
      setDisplayedProduct(product);
    }
  }, [product]);

  const phoneNumber = "YOUR_NUMBER_HERE"; // Placeholder
  const message = `Hi, I'm interested in this HUKKA ${product.name}`;
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <AnimatePresence>
      {isOpen && displayedProduct && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 opacity-0 animate-[fadeIn_0.3s_forwards]">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#0B0B0B]/90 backdrop-blur-md"
          />

          {/* Modal Content - Smaller & Cleaner */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ type: "spring", damping: 25, stiffness: 350 }}
            className="relative w-full max-w-[800px] bg-[#141414] shadow-2xl rounded flex flex-col md:flex-row border border-white/5 overflow-hidden"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-3 right-3 z-10 w-9 h-9 bg-black/60 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-brand-primary transition-all duration-300"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Image Side */}
            <div className="w-full md:w-[45%] h-[350px] md:h-auto bg-gradient-to-b from-[#1c1c1c] to-[#111] relative shrink-0">
              <img
                src={`${basePath}${displayedProduct.image}`}
                alt={displayedProduct.name}
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* Info Side */}
            <div className="w-full md:w-[55%] p-6 md:p-10 flex flex-col justify-center">
              <span className="text-brand-primary uppercase tracking-widest text-[10px] font-bold mb-2 flex items-center gap-2">
                {displayedProduct.category} {displayedProduct.sub && <><span className="text-gray-600">/</span> {displayedProduct.sub}</>}
              </span>
              <h2 className="text-2xl md:text-3xl font-black text-white mb-2 leading-tight uppercase tracking-tight">
                {displayedProduct.name}
              </h2>
              <p className="text-xl font-medium text-gray-300 mb-5">
                {displayedProduct.price}
              </p>

              <p className="text-gray-400 text-sm mb-8 leading-relaxed max-w-[90%]">
                {displayedProduct.description ||
                  "A core essential from our premium collection. Designed with precision and crafted from high-quality materials for the modern man."}
              </p>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center w-full px-6 py-3.5 text-xs font-bold text-black uppercase tracking-[0.2em] bg-brand-primary overflow-hidden transition-all duration-500 hover:scale-[1.01] hover:shadow-[0_0_20px_rgba(193,154,107,0.4)] rounded-sm"
              >
                <span className="relative flex items-center">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Order via WhatsApp
                </span>
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
