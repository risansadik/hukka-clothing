"use client";

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

export default function ProductModal({ product, isOpen, onClose }: ProductModalProps) {
  if (!product) return null;

  const phoneNumber = "YOUR_NUMBER_HERE"; // Placeholder
  const message = `Hi, I'm interested in this HUKKA ${product.name}`;
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-brand-bg/80 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-brand-surface shadow-2xl rounded-sm flex flex-col md:flex-row border border-brand-surface-light"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-brand-bg/50 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-brand-primary transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Image Side */}
            <div className="w-full md:w-1/2 aspect-[4/5] object-cover max-h-[40vh] md:max-h-none md:h-[500px] bg-brand-surface-light relative shrink-0">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Info Side */}
            <div className="w-full md:w-1/2 p-6 sm:p-8 md:p-12 flex flex-col justify-center bg-brand-surface relative shrink-0">
              <span className="text-brand-primary uppercase tracking-widest text-xs font-bold mb-3 block flex items-center gap-2">
                {product.category} {product.sub && <><span className="text-gray-600">/</span> {product.sub}</>}
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-2 leading-tight uppercase">
                {product.name}
              </h2>
              <p className="text-2xl font-medium text-gray-300 mb-6">
                {product.price}
              </p>

              <p className="text-gray-400 mb-8 leading-relaxed">
                {product.description ||
                  "A core essential from our premium collection. Designed with precision and crafted from high-quality materials for the modern man. Experience true comfort and uncompromised style."}
              </p>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center w-full px-8 py-4 text-sm font-bold text-white uppercase tracking-widest bg-green-600 overflow-hidden transition-all hover:scale-[1.02] hover:bg-green-500 rounded-sm"
              >
                <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-full group-hover:h-56 opacity-10"></span>
                <span className="relative flex items-center">
                  <MessageCircle className="w-5 h-5 mr-3" />
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
