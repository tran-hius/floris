"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface ProductProps {
  product: {
    id: number;
    name: string;
    price: number;
    category: string;
    src: string;
  };
}

const ProductCard = ({ product }: ProductProps) => {
  return (
    <motion.div layout className="group cursor-pointer">
      <div className="relative aspect-[3/4] overflow-hidden rounded-3xl mb-6 bg-primary/5">
        <Image
          src={product.src}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-1000 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-[2px]">
          <span className="bg-background text-primary px-8 py-3 rounded-full font-sans text-[10px] uppercase tracking-widest font-bold">
            Xem chi tiết
          </span>
        </div>
      </div>
      <div className="flex justify-between items-start">
        <div className="space-y-1">
          <p className="text-primary/40 text-[10px] uppercase tracking-widest">
            {product.category}
          </p>
          <h3 className="text-2xl font-serif italic text-primary">
            {product.name}
          </h3>
        </div>
        <p className="text-primary font-sans font-bold text-sm">
          {product.price.toLocaleString("vi-VN")}đ
        </p>
      </div>
    </motion.div>
  );
};

export default ProductCard;
