"use client";

import { useState } from "react";
import { products, categories, formatPrice } from "@/app/data/products";
import { company } from "@/app/data/company";
import { ProductCard } from "@/app/components/ProductCard";
import { SectionReveal } from "@/app/components/SectionReveal";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Search } from "lucide-react";

export function Catalog() {
  const [activeCategory, setActiveCategory] = useState("Todas");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = products.filter((p) => {
    const matchCategory = activeCategory === "Todas" || p.category === activeCategory;
    const matchSearch =
      searchQuery === "" ||
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <section id="catalogo" className="py-20 md:py-28 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <SectionReveal>
          <div className="text-center mb-12">
            <span className="text-[11px] tracking-[0.34em] uppercase text-[#caa24f] font-medium block mb-3">
              Nuestros Productos
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-light text-[#f3efe9] mb-4">
              Catálogo de Muebles
            </h2>
            <div className="hairline w-20 mx-auto mb-6" />
            <p className="text-[#a8a29e] max-w-2xl mx-auto leading-relaxed">
              Cada pieza está diseñada y fabricada en nuestro taller de
              Montevideo. Explorá nuestra colección o consultá por muebles a
              medida.
            </p>
          </div>
        </SectionReveal>

        {/* Search & Filter */}
        <SectionReveal delay={0.1}>
          <div className="flex flex-col sm:flex-row gap-4 mb-10 items-center justify-between">
            <div className="relative w-full sm:w-72">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#a8a29e]" />
              <input
                type="text"
                placeholder="Buscar muebles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-full border border-[#f3efe9]/10 bg-[#050505] text-sm focus:outline-none focus:ring-2 focus:ring-[#caa24f]/30 focus:border-[#caa24f]/30 transition-all"
                aria-label="Buscar productos"
              />
            </div>
            <a
              href={`https://wa.me/${company.contact.phoneRaw}?text=${encodeURIComponent(
                company.social.whatsappMessage
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="micro-lift inline-flex items-center gap-2 rounded-full bg-[#e8c87a] text-[#050505] px-5 py-2.5 text-sm font-medium hover:bg-[#efd692] transition-colors"
            >
              <Phone size={16} />
              Consultar por WhatsApp
            </a>
          </div>
        </SectionReveal>

        {/* Category pills */}
        <SectionReveal delay={0.15}>
          <div className="flex flex-wrap gap-2 mb-10 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`micro-lift px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-[#f3efe9] text-[#050505]"
                    : "bg-[#1a1a1a] text-[#a8a29e] hover:bg-[#262626]"
                }`}
                aria-pressed={activeCategory === cat}
              >
                {cat}
              </button>
            ))}
          </div>
        </SectionReveal>

        {/* Products grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory + searchQuery}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {filtered.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        {filtered.length === 0 && (
          <div className="text-center py-16">
            <p className="text-[#a8a29e]">No se encontraron productos.</p>
            <button
              onClick={() => {
                setActiveCategory("Todas");
                setSearchQuery("");
              }}
              className="mt-4 text-sm text-[#caa24f] hover:underline"
            >
              Limpiar filtros
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
