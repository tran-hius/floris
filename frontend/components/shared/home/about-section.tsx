"use client";

import React from "react";
import Image from "next/image";
import Link from "next/image";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section className="relative w-full flex flex-col md:flex-row min-h-[600px] overflow-hidden">
      {/* --- COL TRÁI: ẢNH TRÀN LỀ --- */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="relative w-full md:w-1/2 h-[500px] md:h-[700px] lg:h-[800px]" // Tăng chiều cao khung để ảnh đứng đẹp hơn
      >
        <Image
          src="/about-florist.png"
          alt="About Floris"
          fill
          className="object-cover object-top" // QUAN TRỌNG: Lấy từ đỉnh ảnh xuống để không mất đầu
          priority
        />
      </motion.div>

      {/* --- COL PHẢI: NỀN XANH TRÀN LỀ --- */}
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full md:w-1/2 bg-primary flex items-center justify-center md:justify-start px-8 py-16 md:px-20 lg:px-32"
      >
        <div className="max-w-xl space-y-8">
          <header className="space-y-4">
            <p className="text-secondary font-sans text-xs md:text-sm uppercase tracking-[0.4em] font-bold">
              The Story of Floris
            </p>
            <h2 className="text-4xl md:text-6xl font-serif italic text-background leading-tight">
              About Me
            </h2>
          </header>

          <div className="space-y-6">
            <p className="text-background/90 font-sans text-sm md:text-lg leading-relaxed italic border-l-2 border-secondary pl-6">
              Hoa không chỉ để ngắm, hoa là ngôn ngữ của tâm hồn.
            </p>
            <p className="text-background/80 font-sans text-sm md:text-base leading-loose tracking-wide">
              Tại Floris, chúng tôi tin rằng mỗi đóa hoa đều mang trong mình một
              câu chuyện riêng biệt. Khởi đầu từ niềm đam mê với vẻ đẹp hoang sơ
              của thiên nhiên, Floris đã ra đời để mang nghệ thuật sắp đặt hoa
              thiết kế độc bản đến gần hơn với không gian sống của bạn.
            </p>
          </div>

          <div className="pt-6">
            <button className="group relative px-10 py-4 border border-background/30 rounded-full text-background transition-all duration-500 overflow-hidden">
              <span className="relative z-10 text-xs uppercase tracking-[0.2em] font-bold">
                Tìm hiểu thêm
              </span>
              <div className="absolute inset-0 bg-background translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              <span className="absolute inset-0 flex items-center justify-center text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 text-xs uppercase tracking-[0.2em] font-bold">
                Tìm hiểu thêm
              </span>
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
