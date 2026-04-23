import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layouts/Header";

// Font tiêu đề: Sang trọng, nghệ thuật
const playfair = Playfair_Display({
  subsets: ["vietnamese"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
  style: ["italic", "normal"],
});

// Font nội dung: Thanh thoát, dễ đọc
const inter = Inter({
  subsets: ["vietnamese"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Floris | Tiệm Hoa Thủ Công & Quà Tặng Nghệ Thuật",
  description:
    "Khám phá thế giới hoa tươi đầy cảm hứng tại Floris. Chúng tôi mang đến những bó hoa thiết kế độc bản, giao hoa tận nơi nhanh chóng.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <body
        className="min-h-full flex flex-col font-sans"
        suppressHydrationWarning
      >
        {/* Bạn có thể bọc thêm một thẻ div ở đây nếu cần Navbar chung cho toàn web */}
        <div className="flex-1 flex flex-col">{children}</div>
      </body>
    </html>
  );
}
