"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Clock, MapPin, Phone } from "lucide-react";

const ShopSection = () => {
  return (
    <section className="relative w-full min-h-[700px] flex items-center justify-center overflow-hidden py-24">
      {/* --- BACKGROUND: ẢNH BANNER LỚN TRÀN MÀN HÌNH --- */}
      <div className="absolute inset-0 z-0">
        <Image
          // Bạn có thể đổi lại link ảnh banner khác nếu muốn
          src="https://i.pinimg.com/1200x/4f/ea/51/4fea51b444caa855e8c6a2e705ffaaf5.jpg"
          alt="Floris Shop Banner"
          fill
          className="object-cover"
          priority
        />
        {/* Lớp phủ tối (Overlay) để chữ trong Card nổi bật hơn */}
        <div className="absolute inset-0 bg-primary/20 backdrop-blur-[1px]" />
      </div>

      {/* --- CỘT GIỮA: CARD THÔNG TIN NỔI LÊN TRÊN --- */}
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        // Card: Nền xanh, bo góc lớn, shadow đậm, padding rộng
        className="relative z-10 w-[90%] max-w-2xl bg-primary/95 backdrop-blur-md text-background rounded-[3rem] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.5)] border border-secondary/10 px-8 py-16 md:px-16 md:py-20"
      >
        <div className="space-y-12">
          {/* Header trong Card */}
          <header className="space-y-4 text-center">
            <p className="text-secondary font-sans text-xs md:text-sm uppercase tracking-[0.5em] font-bold">
              Visit Our Space
            </p>
            <h2 className="text-5xl md:text-7xl font-serif italic text-background leading-tight">
              The Shop
            </h2>
            <div className="w-24 h-[1px] bg-secondary/40 mx-auto pt-4" />
          </header>

          {/* Chi tiết thông tin (Giữ nguyên logic của bạn) */}
          <div className="grid grid-cols-1 gap-10">
            {/* Giờ mở cửa */}
            <div className="flex items-start gap-5 group">
              <Clock className="w-6 h-6 text-secondary shrink-0 mt-1" />
              <div className="space-y-2">
                <h4 className="font-sans uppercase tracking-widest text-xs font-bold text-secondary/80">
                  Giờ mở cửa
                </h4>
                <div className="text-background/90 font-serif italic text-xl space-y-1">
                  <p>Thứ 2 - Thứ 6: 08:00 — 20:00</p>
                  <p>Thứ 7 - Chủ Nhật: 09:00 — 18:00</p>
                </div>
              </div>
            </div>

            {/* Địa chỉ */}
            <div className="flex items-start gap-5 group">
              <MapPin className="w-6 h-6 text-secondary shrink-0 mt-1" />
              <div className="space-y-2">
                <h4 className="font-sans uppercase tracking-widest text-xs font-bold text-secondary/80">
                  Địa chỉ
                </h4>
                <p className="text-background/90 font-serif italic text-xl leading-relaxed">
                  123 Đường Nghệ Thuật, Quận Hoa, <br /> TP. Hồ Chí Minh, Việt
                  Nam
                </p>
              </div>
            </div>

            {/* Liên hệ */}
            <div className="flex items-start gap-5 group">
              <Phone className="w-6 h-6 text-secondary shrink-0 mt-1" />
              <div className="space-y-2">
                <h4 className="font-sans uppercase tracking-widest text-xs font-bold text-secondary/80">
                  Liên hệ
                </h4>
                <p className="text-background/90 font-serif italic text-xl">
                  +84 123 456 789 <br />
                  hello@floris.vn
                </p>
              </div>
            </div>
          </div>

          {/* Nút bấm (Giữ nguyên) */}
          <div className="pt-6 text-center">
            <button className="group relative px-12 py-5 border border-background/20 rounded-full text-background transition-all duration-500 overflow-hidden w-full md:w-auto">
              <span className="relative z-10 text-xs uppercase tracking-[0.3em] font-bold">
                Chỉ đường tới tiệm
              </span>
              <div className="absolute inset-0 bg-background translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              <span className="absolute inset-0 flex items-center justify-center text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 text-xs uppercase tracking-[0.3em] font-bold">
                Mở Google Maps
              </span>
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ShopSection;
