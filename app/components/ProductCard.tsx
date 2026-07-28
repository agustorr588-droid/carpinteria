"use client";

import { Product } from "@/app/data/products";
import { company } from "@/app/data/company";
import { formatPrice } from "@/app/data/products";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import Image from "next/image";

interface ProductCardProps {
  product: Product;
  index: number;
}

export function ProductCard({ product, index }: ProductCardProps) {
  const waUrl = `https://wa.me/${company.contact.phoneRaw}?text=${encodeURIComponent(
    `Hola, quisiera consultar por el producto: ${product.name}`
  )}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: "easeOut" }}
      className="group bg-white rounded-2xl overflow-hidden border border-[#1c1917]/5 shadow-sm hover:shadow-xl transition-all duration-500"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-[#f3efe9]">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
      <div className="p-5">
        <p className="text-[10px] tracking-[0.3em] uppercase text-[#c9a87c] font-medium mb-2">
          {product.category}
        </p>
        <h3 className="font-display text-xl text-[#1c1917] mb-2 leading-tight">
          {product.name}
        </h3>
        <p className="text-sm text-[#57534e] leading-relaxed mb-4 line-clamp-2">
          {product.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="font-display text-xl text-[#8b5e3c]">
            {formatPrice(product.price)}
          </span>
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#8b5e3c] hover:text-[#6d4a2f] transition-colors"
            aria-label={`Consultar por ${product.name} por WhatsApp`}
          >
            <Phone size={16} />
            Consultar
          </a>
        </div>
      </div>
    </motion.div>
  );
}
