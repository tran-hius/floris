"use client";

import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";
import { ShoppingCart, User, Search, Menu, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const iconClass = "w-5 h-5";

const Header = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false); // State cho thanh search dài
  const [showUserModal, setShowUserModal] = useState(false); // State cho modal login

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
      setShowUserModal(false); // Đóng modal khi cuộn
    } else {
      setHidden(false);
    }
  });

  const navLinks = [
    { path: "/products", label: "Cửa hàng" },
    { path: "/about", label: "Về chúng tôi" },
    { path: "/contact", label: "Liên hệ" },
  ];

  return (
    <>
      {/* --- DESKTOP HEADER --- */}
      <motion.header
        variants={{
          visible: { y: 20, opacity: 1 },
          hidden: { y: -100, opacity: 0 },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
        className={cn(
          "fixed top-0 left-1/2 -translate-x-1/2 z-[100]",
          "hidden md:flex w-[95%] max-w-[850px] h-16 items-center justify-between px-8 rounded-full",
          "border shadow-2xl bg-primary border-primary text-background transition-all duration-300",
          showSearch && "rounded-b-none", // Phẳng đáy khi hiện search
        )}
      >
        <Link href="/" className="text-2xl font-serif italic tracking-tight">
          Floris
        </Link>

        <nav className="flex items-center gap-8 text-[12px] uppercase tracking-[0.2em] font-sans font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className="hover:text-secondary transition-colors relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-secondary transition-all group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-5 relative">
          {/* SEARCH TRIGGER */}
          <button
            onMouseEnter={() => setShowSearch(true)}
            className="hover:text-secondary transition-colors"
          >
            <Search className={iconClass} />
          </button>

          <Link href="/cart" className="relative hover:text-secondary">
            <ShoppingCart className={iconClass} />
            <span className="absolute -top-2 -right-2 bg-secondary text-[8px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
              0
            </span>
          </Link>

          {/* USER TRIGGER */}
          <div
            className="relative"
            onMouseEnter={() => setShowUserModal(true)}
            onMouseLeave={() => setShowUserModal(false)}
          >
            <Link
              href="/login"
              className="hover:text-secondary transition-colors block py-2"
            >
              <User className={iconClass} />
            </Link>

            {/* USER MODAL (Hover) */}
            <AnimatePresence>
              {showUserModal && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute right-0 top-full pt-2 w-48 z-[110]"
                >
                  <div className="bg-primary/80 border border-background/20 rounded-2xl shadow-2xl p-4 flex flex-col gap-3">
                    <Link
                      href="/login"
                      className="text-[11px] uppercase tracking-widest hover:text-secondary flex items-center justify-between group"
                    >
                      Đăng nhập{" "}
                      <ArrowRight
                        size={12}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </Link>
                    <div className="h-[1px] bg-background/10 w-full" />
                    <Link
                      href="/register"
                      className="text-[11px] uppercase tracking-widest hover:text-secondary flex items-center justify-between group"
                    >
                      Đăng ký{" "}
                      <ArrowRight
                        size={12}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* --- EXPANDABLE SEARCH BAR --- */}
        <AnimatePresence>
          {showSearch && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 60, opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              onMouseLeave={() => setShowSearch(false)}
              className="absolute top-full left-0 w-full bg-primary/80 border-t border-background/10 overflow-hidden rounded-b-[32px] shadow-2xl"
            >
              <div className="flex items-center px-8 h-full gap-4">
                <Search className="text-background/50 w-4 h-4" />
                <input
                  autoFocus
                  placeholder="Bạn đang tìm đóa hoa nào?..."
                  className="bg-transparent border-none outline-none text-background w-full font-sans text-sm placeholder:text-background/30"
                />
                <button onClick={() => setShowSearch(false)}>
                  <X className="w-4 h-4 text-background/50 hover:text-secondary" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* --- MOBILE BURGER BUTTON --- */}
      <div className="fixed top-6 right-6 z-[110] md:hidden">
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.9 }}
          className="w-12 h-12 bg-primary text-background rounded-full flex items-center justify-center shadow-xl border border-primary"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      {/* --- MOBILE FULLSCREEN MENU (Giữ nguyên hoặc cập nhật tương tự) --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            className="fixed inset-0 bg-primary z-[105] md:hidden flex flex-col p-8"
          >
            <div className="mb-12">
              <span className="text-3xl font-serif italic text-background">
                Floris
              </span>
            </div>
            <nav className="flex flex-col gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={() => setIsOpen(false)}
                  className="text-4xl font-serif italic text-background/90 hover:text-secondary"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="mt-auto border-t border-background/10 pt-8 grid grid-cols-3 gap-4 text-background/70">
              <Link href="/login" className="flex flex-col items-center gap-2">
                <User size={20} />
                <span className="text-[10px] uppercase">Tài khoản</span>
              </Link>
              <Link href="/cart" className="flex flex-col items-center gap-2">
                <ShoppingCart size={20} />
                <span className="text-[10px] uppercase">Giỏ hàng</span>
              </Link>
              <button
                onClick={() => {
                  setIsOpen(false);
                  setShowSearch(true);
                }}
                className="flex flex-col items-center gap-2"
              >
                <Search size={20} />
                <span className="text-[10px] uppercase">Tìm kiếm</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
