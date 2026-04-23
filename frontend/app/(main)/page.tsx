import type { Metadata } from "next";
import Link from "next/link";
import { MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import HeroSection from "@/components/shared/home/hero-section";
import ServicesSection from "@/components/shared/home/service-section";
import AboutSection from "@/components/shared/home/about-section";
import GallerySection from "@/components/shared/home/gallery-section";
import ShopSection from "@/components/shared/home/shop-section";
import ContactSection from "@/components/shared/home/contact-section";

export const metadata: Metadata = {
  title: "Floris | Home - Nơi Những Đóa Hoa Kể Câu Chuyện Của Riêng Bạn",
  description: "Khám phá các dịch vụ hoa cưới, sự kiện, và bộ sưu tập hoa tươi thiết kế độc bản tại Floris.",
};

// Dữ liệu giả cho các dịch vụ (như trong ảnh mẫu)


export default function HomePage() {
  return (
    <main className="flex flex-col w-full">
      {/* --- HERO SECTION --- */}
      <HeroSection />

      {/* --- SERVICES SECTION --- */}
      <ServicesSection />
      <AboutSection />
      <GallerySection />
      <ShopSection />
      <ContactSection />
      {/* --- CÁC SECTION KHÁC SẼ THÊM SAU --- */}
      {/* - GALLERY: Hiển thị 3 bó hoa nổi bật.
        - ABOUT ME: Khối giới thiệu với hình ảnh.
        - v.v.
      */}
    </main>
  );
}