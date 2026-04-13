"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import ProductModal from "./ProductModal";

// Use the newly generated assets
const featuredProducts = [
  {
    id: 101,
    name: "Modern Formal Shirt",
    category: "Shirts",
    price: "$95",
    image: "/images/formal_shirt.png",
    description: "Crisp white formal shirt engineered for the modern man. Impeccable tailoring meets luxury fabric.",
  },
  {
    id: 102,
    name: "Oversized Clay Tee",
    category: "T-Shirts",
    price: "$55",
    image: "/images/oversized_tshirt.png",
    description: "Heavyweight drop-shoulder tee. A streetwear essential that commands attention through its minimal silhouette.",
  },
  {
    id: 103,
    name: "Sand Linen Shirt",
    category: "Shirts",
    price: "$85",
    image: "/images/linen_shirt.png",
    description: "Lightweight breathable linen perfect for elevated casual wear. Neutral tones to compliment any wardrobe.",
  },
  {
    id: 104,
    name: "Signature Dark Denim",
    category: "Pants",
    price: "$110",
    image: "/images/pants_1.png",
    description: "Washed black structured denim with a relaxed straight leg fit. Durable hardware and luxury stitching.",
  },
];

const basePath = process.env.NODE_ENV === "production" ? "/hukka-clothing" : "";

export default function ShopSection() {
  const [selectedProduct, setSelectedProduct] = useState<typeof featuredProducts[0] | null>(null);

  return (
    <section id="shop" className="py-40 bg-gradient-to-b from-brand-bg to-[#0A0A0A] relative z-10 transition-colors duration-1000">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="text-brand-primary text-sm tracking-[0.4em] uppercase block mb-4 font-bold">
              Highlights
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight mb-4">
              Featured Products
            </h2>
            <p className="text-gray-400 text-lg">The core essentials defining modern confidence.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <Link
              href="/shop"
              className="hidden md:flex items-center text-sm font-bold text-brand-primary uppercase tracking-[0.2em] hover:text-white transition-colors group pb-2 border-b border-transparent hover:border-brand-primary"
            >
              View Full Collection 
              <ArrowUpRight className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: index * 0.1, ease: "easeOut" }}
              className="group cursor-pointer flex flex-col"
              onClick={() => setSelectedProduct(product)}
            >
              {/* Image Container with Custom Dept */}
              <div className="relative aspect-[3/4] bg-gradient-to-b from-[#1F1F1F] to-[#111111] rounded-sm overflow-hidden mb-6 border border-white/5 shadow-md shadow-black/40 group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.8)] group-hover:-translate-y-2 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 opacity-60 group-hover:opacity-80 transition-opacity duration-300 pointer-events-none" />
                <img
                  src={`${basePath}${product.image}`}
                  alt={product.name}
                  className="w-full h-full object-cover object-center brightness-95 contrast-[1.05] group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                {/* Overlay Action Button */}
                <div className="absolute inset-x-0 bottom-0 p-4 z-20 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                  <button className="w-full py-3.5 bg-brand-primary text-black font-black uppercase tracking-[0.2em] text-xs hover:bg-[#EAEAEA] shadow-[0_0_20px_rgba(193,154,107,0.3)] transition-all flex items-center justify-center">
                    Quick View <ArrowUpRight className="ml-1 w-4 h-4" />
                  </button>
                </div>
              </div>
              
              {/* Product Typography Information */}
              <div className="flex flex-col flex-1 pb-4">
                <div className="flex justify-between items-start mb-2 gap-4">
                  <h3 className="text-lg font-bold text-white tracking-wide group-hover:text-brand-primary transition-colors duration-300">
                    {product.name}
                  </h3>
                  <span className="text-gray-300 font-bold whitespace-nowrap">{product.price}</span>
                </div>
                <p className="text-brand-primary/80 text-[11px] uppercase tracking-[0.25em] font-semibold">
                  {product.category}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Mobile View All Button */}
        <div className="mt-12 flex justify-center md:hidden">
          <Link
            href="/shop"
            className="flex items-center text-sm font-bold text-white bg-brand-surface border border-white/10 px-8 py-4 uppercase tracking-widest"
          >
            View Full Collection
          </Link>
        </div>
      </div>

      <ProductModal 
        product={selectedProduct} 
        isOpen={!!selectedProduct} 
        onClose={() => setSelectedProduct(null)} 
      />
    </section>
  );
}
