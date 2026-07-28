"use client";

import { company } from "@/app/data/company";
import { ArrowRight, TreePine, Hammer, Ruler, PenTool } from "lucide-react";
import { Animated } from "@/app/components/Animated";
import { useReducedMotion } from "@/app/hooks/useReducedMotion";

const metadata = [
  { icon: TreePine, label: "Madera Sustentable" },
  { icon: Hammer, label: "Hecho a Mano" },
  { icon: Ruler, label: "Diseño a Medida" },
];

export function Hero() {
  const year = new Date().getFullYear();
  const years = year - company.founded;
  const reduced = useReducedMotion();

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col justify-end overflow-hidden bg-[#f6f1e7]"
    >
      {/* Full-screen background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="fixed inset-0 w-full h-full object-cover z-0"
        poster=""
        aria-label="Video de fondo de papelería artesanal"
      >
        <source
          src="https://zxdefgavgwfxastwmmjm.supabase.co/storage/v1/object/public/assets/plume.mp4"
          type="video/mp4"
        />
      </video>

      {/* Ivory readability wash + light scrim */}
      <div className="absolute inset-0 z-[1] pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-[#f6f1e7]/90 via-[#f6f1e7]/40 to-transparent" />
        <div
          className="absolute bottom-0 left-0 w-full h-1/2"
          style={{
            background:
              "linear-gradient(to top, rgba(246,241,231,0.88) 0%, rgba(246,241,231,0.35) 42%, transparent 72%)",
          }}
        />
      </div>

      {/* Top scrim for navbar readability */}
      <div
        className="fixed top-0 left-0 right-0 h-24 z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(246,241,231,0.6), transparent 18%)",
        }}
      />

      <div className="relative z-10 px-4 sm:px-6 md:px-12 pb-12 md:pb-20 pt-32 max-w-7xl mx-auto w-full">
        {/* Eyebrow */}
        <Animated delay={300} className="mb-4">
          <span className="text-[11px] tracking-[0.34em] uppercase text-[#caa24f] font-body font-medium block mb-3">
            Carpintería Artesanal · Desde {company.founded}
          </span>
          <div
            className={`hairline w-16 mt-3 ${
              reduced ? "" : "animate-hairline-draw"
            }`}
          />
        </Animated>

        {/* Metadata row */}
        <Animated delay={380} className="flex flex-wrap gap-x-6 gap-y-2 mb-6 md:mb-8">
          {metadata.map(({ icon: Icon, label }) => (
            <span
              key={label}
              className="flex items-center gap-2 text-[11px] tracking-[0.22em] uppercase text-[#24211c]/50"
            >
              <Icon size={14} strokeWidth={1.5} />
              {label}
            </span>
          ))}
        </Animated>

        {/* Headline */}
        <Animated delay={450} className="max-w-4xl">
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light leading-[0.98] tracking-[-0.01em] text-[#24211c] mb-5">
            <span className="block">Artesanía que</span>
            <span className="block italic gild">perdura generaciones</span>
          </h1>
        </Animated>

        {/* Sub-line */}
        <Animated delay={560} className="max-w-xl mb-8">
          <p className="font-body text-base sm:text-lg md:text-xl text-[#24211c]/65 leading-relaxed">
            Más de {years} años transformando madera en muebles que cuentan
            historias. Cada pieza es única, cada detalle importa.
          </p>
        </Animated>

        {/* CTA row */}
        <Animated delay={660} className="flex flex-wrap gap-3 sm:gap-4">
          <a
            href={`https://wa.me/${company.contact.phoneRaw}?text=${encodeURIComponent(
              company.social.whatsappMessage
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#e8c87a] text-[#24211c] font-medium px-6 sm:px-8 py-2.5 sm:py-3 text-sm hover:bg-[#efd692] transition-colors shadow-lg shadow-[#caa24f]/20"
          >
            Contactar
          </a>
          <a
            href="#catalogo"
            className="inline-flex items-center gap-2 rounded-full font-medium liquid-glass px-6 sm:px-8 py-2.5 sm:py-3 text-sm text-[#24211c] hover:bg-white/50 transition-colors"
          >
            Ver Catálogo
            <ArrowRight size={16} />
          </a>
        </Animated>

        {/* Bottom hint */}
        <Animated
          delay={860}
          className="mt-8 md:mt-0 md:absolute md:bottom-12 md:right-4 md:sm:right-6 md:md:right-12 flex items-center gap-2 text-[10px] tracking-[0.28em] uppercase text-[#24211c]/35"
        >
          <PenTool size={12} />
          <span>Montevideo, Uruguay</span>
        </Animated>
      </div>
    </section>
  );
}
