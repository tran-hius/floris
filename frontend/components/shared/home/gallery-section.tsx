"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const images = [
  {
    id: 1,
    // Ảnh đóa hoa khổ lớn - Tone màu trầm sang trọng
    src: "https://i.pinimg.com/736x/34/8c/0b/348c0b0a8fa599d16936c8d6841424cd.jpg",
    alt: "Bó hoa nghệ thuật khổ lớn",
    size: "md:col-span-2 md:row-span-2 col-span-2 row-span-2",
  },
  {
    id: 2,
    src: "https://i.pinimg.com/736x/36/e0/4e/36e04efefd5e0a49ef5c4ba62817fcbf.jpg",
    alt: "Chi tiết hoa Tulip trắng",
    size: "col-span-1 row-span-1",
  },
  {
    id: 3,
    src: "https://i.pinimg.com/1200x/41/46/61/414661e84c35225c56b8005624dd1bee.jpg",
    alt: "Không gian tiệm hoa tối giản",
    size: "col-span-1 row-span-1",
  },
  {
    id: 4,
    // Ảnh hoa cưới cầm tay - Link mới cực nét
    src: "https://i.pinimg.com/736x/0c/2c/4b/0c2c4b9834e5cee6d2d9934bd07598ad.jpg",
    alt: "Hoa cưới cầm tay",
    size: "col-span-1 row-span-1",
  },
  {
    id: 5,
    src: "https://i.pinimg.com/1200x/fa/7c/c6/fa7cc63fdcfe453e5e57379e350bb2e8.jpg",
    alt: "Cánh hoa khô nghệ thuật",
    size: "col-span-1 row-span-1",
  },
];

const GallerySection = () => {
  return (
    <section className="bg-[#efebcf] py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <header className="text-center mb-16 space-y-4">
          <h2 className="text-5xl md:text-7xl font-serif italic text-primary leading-tight">
            Gallery
          </h2>
          <div className="w-24 h-[1px] bg-secondary/40 mx-auto" />
          <p className="text-primary/60 font-sans text-xs uppercase tracking-[0.4em]">
            Cảm hứng từ những nhành hoa
          </p>
        </header>

        {/* GRID - Fix lỗi không hiện ảnh bằng cách set height cụ thể */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[150px] md:auto-rows-[250px]">
          {images.map((img, index) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`relative overflow-hidden group z-0 ${img.size} 
                ${
                  index % 2 === 0
                    ? "rounded-[2.5rem] md:rounded-[4.5rem]"
                    : "rounded-3xl md:rounded-[3.5rem] md:rounded-tr-none"
                }`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                priority={index === 0} // Ảnh lớn nhất ưu tiên load trước
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />

              {/* Overlay: Chỉ hiện khi hover, không đè chữ lên ảnh ban đầu */}
              <div className="absolute inset-0 bg-primary/30 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center backdrop-blur-[2px]">
                <span className="text-background font-serif italic text-lg border-b border-background/50 pb-1">
                  View Detail
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
