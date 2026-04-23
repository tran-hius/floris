"use client";
import React, { useState } from "react";
import FilterSidebar from "@/components/shared/shop/FilterSidebar";
import ProductCard from "@/components/shared/shop/ProductCard";
import { AnimatePresence } from "framer-motion";

// Giả lập dữ liệu
const products = [
  {
    id: 1,
    name: "Le Printemps",
    price: 1200000,
    category: "Hoa bó",
    src: "https://i.pinimg.com/1200x/e7/60/b3/e760b3bfe38d355066bf63197670c3a6.jpg",
  },
  {
    id: 2,
    name: "L'Amour Rose",
    price: 850000,
    category: "Hoa giỏ",
    src: "https://i.pinimg.com/1200x/e7/60/b3/e760b3bfe38d355066bf63197670c3a6.jpg",
  },
  {
    id: 3,
    name: "Blanc Élégant",
    price: 990000,
    category: "Hoa bó",
    src: "https://i.pinimg.com/1200x/e7/60/b3/e760b3bfe38d355066bf63197670c3a6.jpg",
  },
  {
    id: 4,
    name: "Golden Bloom",
    price: 1100000,
    category: "Hoa giỏ",
    src: "https://i.pinimg.com/1200x/e7/60/b3/e760b3bfe38d355066bf63197670c3a6.jpg",
  },
  {
    id: 5,
    name: "Sakura Dream",
    price: 1350000,
    category: "Hoa bó",
    src: "https://i.pinimg.com/1200x/e7/60/b3/e760b3bfe38d355066bf63197670c3a6.jpg",
  },
  {
    id: 6,
    name: "Pastel Harmony",
    price: 760000,
    category: "Hoa khô",
    src: "https://i.pinimg.com/1200x/e7/60/b3/e760b3bfe38d355066bf63197670c3a6.jpg",
  },
  {
    id: 7,
    name: "Romantic Red",
    price: 980000,
    category: "Hoa bó",
    src: "https://i.pinimg.com/1200x/e7/60/b3/e760b3bfe38d355066bf63197670c3a6.jpg",
  },
  {
    id: 8,
    name: "Vintage Garden",
    price: 1500000,
    category: "Sự kiện",
    src: "https://i.pinimg.com/1200x/e7/60/b3/e760b3bfe38d355066bf63197670c3a6.jpg",
  },
  {
    id: 9,
    name: "Soft Whisper",
    price: 820000,
    category: "Hoa giỏ",
    src: "https://i.pinimg.com/1200x/e7/60/b3/e760b3bfe38d355066bf63197670c3a6.jpg",
  },
  {
    id: 10,
    name: "Sunset Bouquet",
    price: 1050000,
    category: "Hoa bó",
    src: "https://i.pinimg.com/1200x/e7/60/b3/e760b3bfe38d355066bf63197670c3a6.jpg",
  },
  {
    id: 11,
    name: "White Serenity",
    price: 1150000,
    category: "Hoa khô",
    src: "https://i.pinimg.com/1200x/e7/60/b3/e760b3bfe38d355066bf63197670c3a6.jpg",
  },
];

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState("Tất cả");

  const filteredProducts =
    activeCategory === "Tất cả"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <div className="bg-[#efebcf] min-h-screen pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <header className="mb-16 space-y-4">
          <h1 className="text-5xl md:text-7xl font-serif italic text-primary">
            Collections
          </h1>
          <p className="text-primary/60 font-sans text-xs uppercase tracking-[0.4em]">
            Tinh hoa từ thiên nhiên
          </p>
        </header>

        <div className="flex flex-col md:flex-row gap-12">
          {/* SIDEBAR SHARED - Giữ nguyên */}
          <FilterSidebar
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />

          {/* MAIN PRODUCT GRID - SỬA LẠI ĐỂ HIỆN 3 CỘT */}
          <main className="w-full md:w-3/4">
            {/* - Sửa thành lg:grid-cols-3 để hiện 3 sản phẩm/hàng trên máy tính
                - gap-x-6 và gap-y-12 giúp thu nhỏ khoảng cách để tổng thể ảnh trông bé lại
            */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
              <AnimatePresence mode="popLayout">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </AnimatePresence>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
