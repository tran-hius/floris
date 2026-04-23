"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const services = [
  {
    id: 1,
    name: "Wedding Flowers",
    desc: "For your special day",
    image: "/product1.jpg",
  },
  {
    id: 2,
    name: "Everyday Bouquets",
    desc: "Brighten someone's day",
    image: "/product2.jpg",
  },
  {
    id: 3,
    name: "Event Florals",
    desc: "Corporate & private events",
    image: "/product3.jpg",
  },
];

const ServicesSection = () => {
  return (
    <section className="bg-[#efebcf] py-20 px-6 md:px-12 text-center">
      <header className="max-w-2xl mx-auto mb-16">
        <h2 className="text-4xl md:text-5xl font-serif italic text-primary mb-4">
          Our Services
        </h2>
        <p className="text-primary/60 font-sans text-sm uppercase tracking-widest">
          Khám phá những trải nghiệm hoa nghệ thuật
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 max-w-7xl mx-auto">
        {services.map((service) => (
          <Link key={service.id} href="#" className="group block h-full">
            <Card className="border-none shadow-none bg-transparent overflow-hidden rounded-[2.5rem] relative aspect-[3/4] flex flex-col justify-end">
              {/* IMAGE: Full chiều cao và rộng */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay để text luôn dễ đọc */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
              </div>

              {/* TEXT CONTENT: Nằm đè lên ảnh ở phía dưới */}
              <div className="relative z-10 p-8 pb-10 space-y-2 text-center translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-2xl md:text-3xl font-serif italic text-background">
                  {service.name}
                </h3>

                <div className="w-10 h-[1px] bg-secondary mx-auto transition-all duration-500 group-hover:w-20" />

                <p className="text-sm text-background/80 font-sans tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                  {service.desc}
                </p>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
