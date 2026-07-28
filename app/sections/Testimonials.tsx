"use client";

import { testimonials } from "@/app/data/testimonials";
import { SectionReveal } from "@/app/components/SectionReveal";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

export function Testimonials() {
  return (
    <section id="testimonios" className="py-20 md:py-28 bg-[#f3efe9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <SectionReveal>
          <div className="text-center mb-16">
            <span className="text-[11px] tracking-[0.34em] uppercase text-[#caa24f] font-medium block mb-3">
              Testimonios
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-light text-[#24211c] mb-4">
              Lo que dicen <span className="italic gild">nuestros clientes</span>
            </h2>
            <div className="hairline w-20 mx-auto" />
          </div>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative p-6 md:p-8 rounded-2xl bg-[#f6f1e7] border border-[#24211c]/5 shadow-sm hover:shadow-lg transition-shadow duration-500"
            >
              <Quote
                size={32}
                className="text-[#caa24f]/30 mb-4"
                strokeWidth={1}
              />
              <p className="text-[#57534e] leading-relaxed mb-6 text-sm md:text-base">
                "{t.comment}"
              </p>
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: 5 }).map((_, ri) => (
                  <Star
                    key={ri}
                    size={14}
                    className={
                      ri < t.rating
                        ? "text-[#caa24f] fill-[#caa24f]"
                        : "text-[#e8e0d6]"
                    }
                  />
                ))}
              </div>
              <div className="border-t border-[#24211c]/5 pt-4">
                <p className="font-medium text-[#24211c] text-sm">{t.name}</p>
                <p className="text-xs text-[#57534e]">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
