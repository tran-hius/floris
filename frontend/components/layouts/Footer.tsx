"use client";

import React from "react";
import Link from "next/link";
// Import các icon từ Simple Icons (si) hoặc Font Awesome (fa)
import { SiInstagram, SiFacebook } from "react-icons/si";
import { MoveUp } from "lucide-react"; // Giữ lại icon mũi tên của Lucide

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-primary text-background pt-24 pb-12 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 md:gap-8">
          {/* CỘT 1: GIỚI THIỆU */}
          <div className="col-span-1 md:col-span-1 space-y-6">
            <h3 className="font-serif italic text-3xl">Floris.</h3>
            <p className="text-background/60 font-serif italic text-lg leading-relaxed">
              Mang nghệ thuật hoa tươi vào không gian sống của bạn. Mỗi nhành
              hoa là một câu chuyện tình yêu.
            </p>
          </div>

          {/* CỘT 2: LINKS */}
          <div className="space-y-6">
            <h4 className="font-sans uppercase tracking-[0.2em] text-xs font-bold text-secondary">
              Khám phá
            </h4>
            <ul className="space-y-4 font-serif italic text-lg text-background/80">
              <li>
                <Link
                  href="#"
                  className="hover:text-secondary transition-colors"
                >
                  Về chúng tôi
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-secondary transition-colors"
                >
                  Bộ sưu tập
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-secondary transition-colors"
                >
                  Dịch vụ sự kiện
                </Link>
              </li>
            </ul>
          </div>

          {/* CỘT 3: SOCIAL MEDIA - ĐÃ SỬA ICON */}
          <div className="space-y-6">
            <h4 className="font-sans uppercase tracking-[0.2em] text-xs font-bold text-secondary">
              Kết nối
            </h4>
            <div className="flex gap-6">
              <Link
                href="#"
                className="hover:text-secondary transition-all hover:-translate-y-1"
              >
                <SiInstagram size={20} />
              </Link>
              <Link
                href="#"
                className="hover:text-secondary transition-all hover:-translate-y-1"
              >
                <SiFacebook size={20} />
              </Link>
            
            </div>
            <p className="text-background/60 text-sm font-sans tracking-widest uppercase">
              @floris.atelier
            </p>
          </div>

          {/* CỘT 4: BACK TO TOP */}
          <div className="flex flex-col justify-between items-start md:items-end">
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-3 font-sans text-[10px] uppercase tracking-[0.3em] font-bold border-b border-background/20 pb-2 hover:border-secondary transition-colors"
            >
              Trở về đầu trang{" "}
              <MoveUp className="w-3 h-3 transition-transform group-hover:-translate-y-1" />
            </button>
            <div className="mt-8 text-left md:text-right text-background/40 text-[10px] uppercase tracking-widest leading-loose">
              © 2026 Floris Atelier.
            </div>
          </div>
        </div>

    
      </div>
    </footer>
  );
};

export default Footer;
