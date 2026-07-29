"use client";

import { useRef } from "react";
import { company } from "@/app/data/company";
import { ArrowRight, TreePine, Hammer, Ruler, PenTool } from "lucide-react";
import { Animated } from "@/app/components/Animated";
import { useReducedMotion } from "@/app/hooks/useReducedMotion";
import { useScroll, useMotionValueEvent, useTransform, motion } from "framer-motion";

const metadata = [
  { icon: TreePine, label: "Madera Sustentable" },
  { icon: Hammer, label: "Hecho a Mano" },
  { icon: Ruler, label: "Diseño a Medida" },
];

export function Hero() {
  const year = new Date().getFullYear();
  const years = year - company.founded;
  const reduced = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.5], [0, -60]);
  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const video = videoRef.current;
    if (!video) return;
    if (reduced) return;
    if (video.readyState < 2) return;
    const duration = video.duration || 0;
    if (duration > 0) {
      video.currentTime = Math.min(latest * duration, duration - 0.01);
    }
  });

  return (
    <section
      id="inicio"
      ref={sectionRef}
      className="relative h-[200vh] bg-[#050505]"
    >
      {/* Sticky full-viewport video container */}
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Full-viewport background video */}
        <motion.div
          className="absolute inset-0 z-0"
          style={reduced ? undefined : { scale: videoScale }}
        >
          <video
            ref={videoRef}
            muted
            loop={reduced}
            autoPlay={reduced}
            playsInline
            preload="auto"
            className="w-full h-full object-cover"
            aria-label="Video de carpintería artesanal"
          >
            <source
              src="https://zxdefgavgwfxastwmmjm.supabase.co/storage/v1/object/public/assets/plume.mp4"
              type="video/mp4"
            />
          </video>
        </motion.div>

        {/* Gradient overlay for text readability */}
        <div
          className="absolute inset-0 z-[1] pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, rgba(5,5,5,0.5) 0%, rgba(5,5,5,0.15) 35%, rgba(5,5,5,0.55) 70%, rgba(5,5,5,0.9) 100%)",
          }}
        />

        {/* Top scrim for navbar readability */}
        <div
          className="absolute top-0 left-0 right-0 h-24 z-50 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, rgba(5,5,5,0.85), transparent 18%)",
          }}
        />

        {/* Hero text — fades out on scroll */}
        <motion.div
          className="absolute inset-0 z-10 flex flex-col justify-end px-4 sm:px-6 md:px-12 pb-12 md:pb-20 pt-32 max-w-7xl mx-auto w-full"
          style={reduced ? undefined : { opacity: textOpacity, y: textY }}
        >
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
                className="flex items-center gap-2 text-[11px] tracking-[0.22em] uppercase text-[#f3efe9]/50"
              >
                <Icon size={14} strokeWidth={1.5} />
                {label}
              </span>
            ))}
          </Animated>

          {/* Headline */}
          <Animated delay={450} className="max-w-4xl">
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light leading-[0.98] tracking-[-0.01em] text-[#f3efe9] mb-5">
              <span className="block">Artesanía que</span>
              <span className="block italic gild">perdura generaciones</span>
            </h1>
          </Animated>

          {/* Sub-line */}
          <Animated delay={560} className="max-w-xl mb-8">
            <p className="font-body text-base sm:text-lg md:text-xl text-[#f3efe9]/65 leading-relaxed">
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
              className="inline-flex items-center gap-2 rounded-full bg-[#e8c87a] text-[#050505] font-medium px-6 sm:px-8 py-2.5 sm:py-3 text-sm hover:bg-[#efd692] transition-colors shadow-lg shadow-[#caa24f]/20"
            >
              Contactar
            </a>
            <a
              href="#catalogo"
              className="inline-flex items-center gap-2 rounded-full font-medium liquid-glass px-6 sm:px-8 py-2.5 sm:py-3 text-sm text-[#f3efe9] hover:bg-white/10 transition-colors"
            >
              Ver Catálogo
              <ArrowRight size={16} />
            </a>
          </Animated>

          {/* Bottom hint */}
          <Animated
            delay={860}
            className="mt-8 md:mt-0 md:absolute md:bottom-12 md:right-4 md:sm:right-6 md:md:right-12 flex items-center gap-2 text-[10px] tracking-[0.28em] uppercase text-[#f3efe9]/35"
          >
            <PenTool size={12} />
            <span>Montevideo, Uruguay</span>
          </Animated>
        </motion.div>
      </div>
    </section>
  );
}
