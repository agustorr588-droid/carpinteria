"use client";

import { Product } from "@/app/data/products";
import { company } from "@/app/data/company";
import { formatPrice } from "@/app/data/products";
import { motion } from "framer-motion";
import { ArrowUpRight, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  product: Product;
  index: number;
}

export function ProductCard({ product, index }: ProductCardProps) {
  const waUrl = `https://wa.me/${company.contact.phoneRaw}?text=${encodeURIComponent(
    `Hola, quisiera consultar por el producto: ${product.name}`
  )}`;
  const isRemoteImage = product.image.startsWith("http");

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: "easeOut" }}
      className="group micro-lift bg-[#0a0a0a] rounded-2xl overflow-hidden border border-[#f3efe9]/5 shadow-sm hover:shadow-xl hover:shadow-[#caa24f]/10 transition-all duration-500"
    >
      <Link href={`/catalogo/${product.id}`} className="block">
        <div className="relative aspect-[4/3] overflow-hidden bg-[#1a1a1a]">
          {isRemoteImage ? (
            <img
              src={product.image}
              alt={product.name}
              className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          ) : (
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              loading="lazy"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
      </Link>
      <div className="p-5">
        <p className="text-[10px] tracking-[0.3em] uppercase text-[#caa24f] font-medium mb-2">
          {product.category}
        </p>
        <h3 className="font-display text-xl text-[#f3efe9] mb-2 leading-tight">
          <Link href={`/catalogo/${product.id}`} className="hover:text-[#e8c87a] transition-colors">
            {product.name}
          </Link>
        </h3>
        <p className="text-sm text-[#a8a29e] leading-relaxed mb-4 line-clamp-2">
          {product.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="font-display text-xl text-[#caa24f]">
            {formatPrice(product.price)}
          </span>
          <div className="flex items-center gap-3">
            <Link
              href={`/catalogo/${product.id}`}
              className="inline-flex items-center gap-1 text-sm font-medium text-[#f3efe9]/70 hover:text-[#e8c87a] transition-colors"
            >
              Ver detalle
              <ArrowUpRight size={15} />
            </Link>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#caa24f] hover:text-[#a07d3d] transition-colors"
              aria-label={`Consultar por ${product.name} por WhatsApp`}
            >
              <Phone size={16} />
              Consultar
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
