"use client";
import React, { useState } from "react";
import { Search } from "lucide-react";

const categories = ["Tất cả", "Hoa bó", "Hoa giỏ", "Hoa khô", "Sự kiện"];

type FilterSidebarProps = {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
};

const FilterSidebar = ({
  activeCategory,
  setActiveCategory,
}: FilterSidebarProps) => {
  // State cho thanh kéo giá (Ví dụ từ 0 đến 5 triệu)
  const [priceRange, setPriceRange] = useState(5000000);

  return (
    <aside className="w-full md:w-1/4 space-y-12">
      {/* Search */}
      <div className="relative border-b border-primary/20 pb-2 group">
        <Search className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 text-primary/40 group-focus-within:text-primary transition-colors" />
        <input
          type="text"
          placeholder="Tìm nhành hoa..."
          className="w-full bg-transparent pl-8 focus:outline-none font-serif italic text-primary placeholder:text-primary/30"
        />
      </div>

      {/* Categories */}
      <div className="space-y-6">
        <h4 className="font-sans uppercase tracking-[0.2em] text-[10px] font-bold text-primary">
          Loài hoa
        </h4>
        <ul className="space-y-4">
          {categories.map((cat) => (
            <li key={cat}>
              <button
                onClick={() => setActiveCategory(cat)}
                className={`font-serif italic text-lg transition-all hover:pl-2 ${
                  activeCategory === cat
                    ? "text-primary pl-2 border-l-2 border-secondary"
                    : "text-primary/40 hover:text-primary"
                }`}
              >
                {cat}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Price Slider (Mới bổ sung) */}
      <div className="space-y-6">
        <div className="flex justify-between items-end">
          <h4 className="font-sans uppercase tracking-[0.2em] text-[10px] font-bold text-primary">
            Giá tối đa
          </h4>
          <span className="font-serif italic text-primary text-sm">
            {Number(priceRange).toLocaleString("vi-VN")}đ
          </span>
        </div>

        <div className="relative pt-2">
          <input
            type="range"
            min="0"
            max="5000000"
            step="100000"
            value={priceRange}
            onChange={(e) => setPriceRange(Number(e.target.value))}
            className="w-full h-[2px] bg-primary/10 appearance-none cursor-pointer accent-secondary transition-all"
            style={{
              // Custom giao diện slider cho các trình duyệt
              background: `linear-gradient(to right, #C5A25D 0%, #C5A25D ${(priceRange / 5000000) * 100}%, rgba(28, 45, 38, 0.1) ${(priceRange / 5000000) * 100}%, rgba(28, 45, 38, 0.1) 100%)`,
            }}
          />
          <div className="flex justify-between mt-2 text-[10px] font-sans text-primary/40 uppercase tracking-widest">
            <span>0đ</span>
            <span>5M+</span>
          </div>
        </div>
      </div>

      {/* Quick Price Selection */}
      <div className="space-y-4">
        <h4 className="font-sans uppercase tracking-[0.2em] text-[10px] font-bold text-primary">
          Khoảng giá nhanh
        </h4>
        <div className="space-y-3">
          {[
            { label: "Dưới 500k", value: 500000 },
            { label: "Dưới 1tr", value: 1000000 },
            { label: "Dưới 2tr", value: 2000000 },
          ].map((item) => (
            <label
              key={item.label}
              className="flex items-center gap-3 cursor-pointer group"
              onClick={() => setPriceRange(item.value)}
            >
              <div
                className={`w-3 h-3 border rounded-full transition-all ${priceRange === item.value ? "bg-secondary border-secondary" : "border-primary/30 group-hover:border-secondary"}`}
              />
              <span
                className={`font-serif italic text-base transition-colors ${priceRange === item.value ? "text-primary" : "text-primary/60 group-hover:text-primary"}`}
              >
                {item.label}
              </span>
            </label>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default FilterSidebar;
