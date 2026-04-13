"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import ProductModal from "./ProductModal";

// Define structured categories
const structure = [
  {
    name: "All",
    subcategories: [],
  },
  {
    name: "Shirts",
    subcategories: ["All", "Formal", "Linen", "Casual"],
  },
  {
    name: "T-Shirts",
    subcategories: ["All", "Oversized", "Printed", "Plain"],
  },
  {
    name: "Pants",
    subcategories: ["All", "Formal", "Cargo", "Jeans"],
  },
];

// Expanded product database
const products = [
  { id: 1, name: "Classic White Dress Shirt", category: "Shirts", sub: "Formal", price: "$95", image: "/images/formal_shirt.png" },
  { id: 2, name: "Oxford Button Down", category: "Shirts", sub: "Formal", price: "$85", image: "/images/formal_shirt.png" },
  { id: 3, name: "Breeze Sand Linen", category: "Shirts", sub: "Linen", price: "$80", image: "/images/linen_shirt.png" },
  { id: 4, name: "Coastal White Linen", category: "Shirts", sub: "Linen", price: "$80", image: "/images/linen_shirt.png" },
  { id: 5, name: "Everyday Flannel", category: "Shirts", sub: "Casual", price: "$75", image: "/images/shirt_1.png" },
  
  { id: 6, name: "Heavyweight Boxy Tee", category: "T-Shirts", sub: "Oversized", price: "$55", image: "/images/oversized_tshirt.png" },
  { id: 7, name: "Washed Drop Shoulder Tee", category: "T-Shirts", sub: "Oversized", price: "$60", image: "/images/oversized_tshirt.png" },
  { id: 8, name: "Graphic Edge Backprint", category: "T-Shirts", sub: "Printed", price: "$45", image: "/images/shirt_1.png" }, 
  { id: 9, name: "Iconic Essential White", category: "T-Shirts", sub: "Plain", price: "$35", image: "/images/shirt_1.png" },
  { id: 10, name: "Signature Black Minimal", category: "T-Shirts", sub: "Plain", price: "$35", image: "/images/shirt_1.png" },
  
  { id: 11, name: "Tailored Wool Trouser", category: "Pants", sub: "Formal", price: "$120", image: "/images/pants_1.png" },
  { id: 12, name: "Pleated Dark Slate Trouser", category: "Pants", sub: "Formal", price: "$125", image: "/images/pants_1.png" },
  { id: 13, name: "Utility Olive Cargo", category: "Pants", sub: "Cargo", price: "$90", image: "/images/pants_1.png" },
  { id: 14, name: "Washed Black Denim", category: "Pants", sub: "Jeans", price: "$110", image: "/images/pants_1.png" },
];

export default function ShopClient() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeSub, setActiveSub] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);

  const handleCategoryClick = (cat: string) => {
    setActiveCategory(cat);
    setActiveSub("All"); // Reset subcategory when changing main category
  };

  // Filter Logic
  const filteredProducts = products.filter((product) => {
    // 1. Check Main Category
    const categoryMatch = activeCategory === "All" ? true : product.category === activeCategory;
    // 2. Check Subcategory
    const subMatch = activeSub === "All" ? true : product.sub === activeSub;

    return categoryMatch && subMatch;
  });

  const currentCategoryData = structure.find((c) => c.name === activeCategory);

  return (
    <div className="w-full bg-brand-bg min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="mb-12 text-center md:text-left">
          <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-4">
            The <span className="text-brand-primary">Collection</span>
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto md:mx-0 text-lg">
            Discover our entire range. Precision cut, expertly crafted, and engineered for those who own their style.
          </p>
        </div>

        {/* Categories Tab Bar */}
        <div className="mb-8 overflow-x-auto no-scrollbar border-b border-brand-surface pb-4">
          <div className="flex space-x-6 min-w-max px-2">
            {structure.map((cat) => (
              <button
                key={cat.name}
                onClick={() => handleCategoryClick(cat.name)}
                className={`relative px-4 py-2 text-sm md:text-base font-bold uppercase tracking-widest transition-colors ${
                  activeCategory === cat.name ? "text-brand-primary" : "text-gray-500 hover:text-white"
                }`}
              >
                {cat.name}
                {activeCategory === cat.name && (
                  <motion.div
                    layoutId="activeCategoryIndicator"
                    className="absolute -bottom-[17px] left-0 right-0 h-[2px] bg-brand-primary"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Subcategories Row */}
        <AnimatePresence mode="wait">
          {activeCategory !== "All" && currentCategoryData?.subcategories.length && (
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, height: 0, transition: { duration: 0.2 } }}
              className="flex flex-wrap gap-3 mb-10"
            >
              {currentCategoryData.subcategories.map((sub) => (
                <button
                  key={sub}
                  onClick={() => setActiveSub(sub)}
                  className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all border ${
                    activeSub === sub
                      ? "bg-brand-primary text-black border-brand-primary"
                      : "bg-brand-surface text-gray-400 border-brand-surface hover:border-gray-500 hover:text-white"
                  }`}
                >
                  {sub}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Product Grid Area WITH Layout Shifting */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          <AnimatePresence>
            {filteredProducts.map((product) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={product.id}
                className="group cursor-pointer"
                onClick={() => setSelectedProduct(product)}
              >
                <div className="relative aspect-[4/5] bg-brand-surface rounded-sm overflow-hidden mb-4 md:mb-6 shadow-lg shadow-black/50 group-hover:shadow-brand-primary/20 transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-bg/90 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover object-center group-hover:scale-110 group-hover:-rotate-1 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-4 left-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="bg-brand-bg/80 text-white text-[10px] font-bold px-2 py-1 uppercase tracking-widest backdrop-blur-sm rounded-sm">
                      {product.sub}
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 w-full p-4 z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <button className="w-full py-3 bg-brand-primary text-black font-bold uppercase tracking-wider text-xs hover:bg-brand-accent transition-colors flex items-center justify-center">
                      Quick View <ArrowUpRight className="ml-1 w-4 h-4" />
                    </button>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="text-lg font-bold text-white leading-tight group-hover:text-brand-primary transition-colors pr-2">
                      {product.name}
                    </h3>
                    <span className="text-gray-300 font-bold whitespace-nowrap">{product.price}</span>
                  </div>
                  <p className="text-brand-primary text-xs uppercase tracking-widest font-semibold flex items-center">
                    {product.category} <span className="text-gray-600 mx-2">/</span> {product.sub}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProducts.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-gray-500 text-lg uppercase tracking-widest">No products found in this category.</p>
          </div>
        )}
      </div>

      <ProductModal 
        product={selectedProduct} 
        isOpen={!!selectedProduct} 
        onClose={() => setSelectedProduct(null)} 
      />
    </div>
  );
}
