import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="min-h-screen bg-[#efebcf] flex flex-col items-center justify-center p-4 relative">
      <Link
        href="/"
        className="absolute top-8 left-8 flex items-center gap-2 text-primary/60 hover:text-primary transition-colors font-sans text-sm uppercase tracking-widest"
      >
        <ChevronLeft size={16} />
        Quay lại trang chủ
      </Link>

      <div className="w-full max-w-[450px]">{children}</div>
    </section>
  );
}
