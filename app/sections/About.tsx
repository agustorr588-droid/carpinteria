"use client";

import { company } from "@/app/data/company";
import { SectionReveal } from "@/app/components/SectionReveal";
import { motion } from "framer-motion";
import { Heart, Leaf, Award, Users } from "lucide-react";

export function About() {
  const year = new Date().getFullYear();
  const years = year - company.founded;

  const stats = [
    { icon: Award, value: `${years}+`, label: "Años de experiencia" },
    { icon: Users, value: "2,400+", label: "Clientes satisfechos" },
    { icon: Heart, value: "100%", label: "Hecho a mano" },
    { icon: Leaf, value: "Eco", label: "Madera sustentable" },
  ];

  return (
    <section id="nosotros" className="py-20 md:py-28 bg-[#faf8f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: visual placeholder */}
          <SectionReveal>
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-[#e8e0d6]">
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: `repeating-linear-gradient(
                    45deg,
                    #8b5e3c 0px,
                    #8b5e3c 2px,
                    transparent 2px,
                    transparent 24px
                  )`,
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <span className="font-display text-8xl md:text-9xl text-[#8b5e3c]/20 font-light">
                    {company.founded}
                  </span>
                  <p className="text-[#57534e] text-sm tracking-[0.2em] uppercase mt-2">
                    Fundación
                  </p>
                </div>
              </div>
              {/* Decorative border */}
              <div className="absolute inset-4 border border-[#c9a87c]/40 rounded-xl pointer-events-none" />
            </div>
          </SectionReveal>

          {/* Right: content */}
          <div>
            <SectionReveal>
              <span className="text-[11px] tracking-[0.34em] uppercase text-[#c9a87c] font-medium block mb-3">
                Sobre Nosotros
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-light text-[#1c1917] mb-6 leading-tight">
                Tres generaciones de <span className="italic gild">pasión</span> por la madera
              </h2>
            </SectionReveal>

            <SectionReveal delay={0.1}>
              <div className="prose prose-stone max-w-none">
                {company.history.story.split("\n\n").map((paragraph, i) => (
                  <p
                    key={i}
                    className="text-[#57534e] leading-relaxed mb-4 text-base"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </SectionReveal>

            <SectionReveal delay={0.2}>
              <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-6">
                {stats.map(({ icon: Icon, value, label }, i) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="text-center"
                  >
                    <Icon
                      size={24}
                      className="mx-auto mb-2 text-[#c9a87c]"
                      strokeWidth={1.5}
                    />
                    <p className="font-display text-2xl text-[#1c1917]">{value}</p>
                    <p className="text-xs text-[#57534e] tracking-wide">{label}</p>
                  </motion.div>
                ))}
              </div>
            </SectionReveal>

            <SectionReveal delay={0.3}>
              <div className="mt-8">
                <h3 className="font-medium text-sm tracking-[0.2em] uppercase text-[#c9a87c] mb-4">
                  Nuestros Valores
                </h3>
                <ul className="space-y-3">
                  {company.history.values.map((value) => (
                    <li
                      key={value}
                      className="flex items-start gap-3 text-[#57534e]"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#8b5e3c] mt-2 shrink-0" />
                      <span>{value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </SectionReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
