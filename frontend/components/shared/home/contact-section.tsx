"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Send } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="bg-[#efebcf] py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          // CARD: Màu xanh Primary, bo góc lớn, đổ bóng sâu
          className="bg-primary text-background rounded-[3rem] md:rounded-[5rem] overflow-hidden shadow-[0_20px_50px_rgba(28,45,38,0.3)] border border-white/5"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
            {/* CỘT TRÁI: NỘI DUNG DẪN DẮT */}
            <div className="p-10 md:p-20 space-y-8 flex flex-col justify-center">
              <header className="space-y-4">
                <p className="text-secondary font-sans text-xs uppercase tracking-[0.5em] font-bold">
                  Get in touch
                </p>
                <h2 className="text-5xl md:text-7xl font-serif italic leading-[1] text-background">
                  Lets bloom <br /> together
                </h2>
              </header>

              <p className="text-background/70 font-serif italic text-xl leading-relaxed max-w-sm">
                Bạn đang tìm kiếm một bó hoa đặc biệt hay cần tư vấn trang trí
                sự kiện? Đừng ngần ngại liên hệ với Floris.
              </p>

              {/* Thông tin nhanh bổ trợ */}
              <div className="pt-4 space-y-2 text-sm font-sans tracking-widest text-secondary/60 uppercase">
                <p>Support: hello@floris.vn</p>
                <p>Hotline: +84 123 456 789</p>
              </div>
            </div>

            {/* CỘT PHẢI: FORM TRONG NỀN SÁNG NHẸ ĐỂ DỄ NHÌN */}
            <div className="bg-white/5 backdrop-blur-sm p-10 md:p-20 flex flex-col justify-center border-l border-white/10">
              <form className="space-y-10">
                <div className="relative group">
                  <label className="text-[10px] uppercase tracking-[0.3em] text-secondary font-bold">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Tên của bạn"
                    className="w-full bg-transparent border-b border-background/20 py-3 focus:outline-none focus:border-secondary transition-colors font-serif italic text-lg placeholder:text-background/20"
                  />
                </div>

                <div className="relative group">
                  <label className="text-[10px] uppercase tracking-[0.3em] text-secondary font-bold">
                    Contact Info
                  </label>
                  <input
                    type="text"
                    placeholder="Số điện thoại hoặc Email"
                    className="w-full bg-transparent border-b border-background/20 py-3 focus:outline-none focus:border-secondary transition-colors font-serif italic text-lg placeholder:text-background/20"
                  />
                </div>

                <div className="relative group">
                  <label className="text-[10px] uppercase tracking-[0.3em] text-secondary font-bold">
                    Your Message
                  </label>
                  <textarea
                    rows={1}
                    placeholder="Bạn muốn nhắn nhủ điều gì..."
                    className="w-full bg-transparent border-b border-background/20 py-3 focus:outline-none focus:border-secondary transition-colors font-serif italic text-lg placeholder:text-background/20 resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button className="group relative w-full md:w-auto px-12 py-5 bg-secondary text-primary rounded-full overflow-hidden transition-all duration-500">
                  <div className="relative z-10 flex items-center justify-center gap-3 font-sans uppercase tracking-[0.2em] text-xs font-bold transition-colors group-hover:text-primary">
                    <span>Gửi lời nhắn</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
                  </div>
                  {/* Hover effect bừng sáng */}
                  <div className="absolute inset-0 bg-background translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
