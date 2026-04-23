import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const HeroSection = () => {
  return (
    <section
      className={cn(
        "relative w-full overflow-hidden flex items-center justify-center",
        "min-h-[100vh] md:h-[85vh] lg:h-[90vh]",
      )}
    >
      {/* --- BACKGROUND LAYER --- */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/banner.jpg"
          alt="Floris - Cửa hàng hoa tươi nghệ thuật thiết kế độc bản"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Lớp phủ Gradient: Đậm ở dưới để nổi bật chữ, mờ ở trên để khoe ảnh hoa */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 z-10" />
        {/* Thêm một lớp phủ mờ nhẹ toàn phần để text dễ đọc hơn */}
        <div className="absolute inset-0 bg-primary/40 backdrop-blur-[1px] z-10" />
      </div>

      {/* --- CONTENT (NO CARD) --- */}
      <div className="relative z-20 w-full px-6 md:px-12 text-center">
        <header className="flex flex-col items-center space-y-6 md:space-y-8">
          <p className="text-[10px] md:text-xs tracking-[0.5em] uppercase text-background font-bold drop-shadow-md animate-fade-in">
            EST. 2024 • HANDCRAFTED DESIGN
          </p>

          {/* H1: Sử dụng text-background (màu kem) để cực kỳ nổi trên nền ảnh tối */}
          <h1
            className={cn(
              "text-5xl sm:text-7xl md:text-8xl lg:text-9xl",
              "font-serif italic text-background leading-[1] md:leading-[0.85]",
              "tracking-tighter drop-shadow-2xl",
            )}
          >
            Field <br className="md:hidden" />
            <span className="md:ml-20">Flowers</span>
          </h1>

          <div className="max-w-xl space-y-6">
            <p className="text-background/90 font-sans text-sm md:text-lg leading-relaxed opacity-90 uppercase tracking-[0.15em] drop-shadow-sm">
              An artistic floral experience where nature meets elegance. Each
              bouquet is designed with intention.
            </p>

            <div className="pt-6 flex justify-center items-center">
              {/* Nút bấm kiểu Minimalist (Viền mảnh) */}
              <button className="group relative px-12 py-4 border border-background/40 rounded-full text-background hover:border-background transition-all duration-500">
                <span className="relative z-10 text-xs md:text-sm uppercase tracking-[0.3em] font-medium">
                  Explore Collection
                </span>
                {/* Hiệu ứng fill màu khi hover */}
                <div className="absolute inset-0 bg-background scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full" />
                <span className="absolute inset-0 flex items-center justify-center text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 text-xs md:text-sm uppercase tracking-[0.3em] font-bold">
                  Explore Collection
                </span>
              </button>
            </div>
          </div>
        </header>
      </div>

      {/* --- DECORATIVE ELEMENT (SEO Friendly) --- */}
      <div className="absolute bottom-10 left-10 hidden lg:block z-20">
        <p className="text-background/50 text-[10px] tracking-widest vertical-text uppercase">
          Scroll to discover
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
