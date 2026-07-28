"use client";

import { SectionReveal } from "@/app/components/SectionReveal";
import { motion } from "framer-motion";
import {
  Calendar,
  Gem,
  Paintbrush,
  Truck,
  HeadphonesIcon,
  ShieldCheck,
  Cog,
} from "lucide-react";

const advantages = [
  {
    icon: Calendar,
    title: "Más de 37 años de experiencia",
    description:
      "Tres generaciones perfeccionando el arte de la carpintería. Conocimiento que solo el tiempo puede dar.",
  },
  {
    icon: Gem,
    title: "Materiales premium",
    description:
      "Seleccionamos cada tabla de roble, nogal y encino de proveedores certificados y sostenibles.",
  },
  {
    icon: Paintbrush,
    title: "Diseños personalizados",
    description:
      "Tu espacio, tu estilo. Diseñamos y fabricamos muebles a medida que se adaptan a tu vida.",
  },
  {
    icon: Truck,
    title: "Entrega responsable",
    description:
      "Cuidamos cada pieza desde el taller hasta tu hogar. Embalaje profesional y puntualidad garantizada.",
  },
  {
    icon: HeadphonesIcon,
    title: "Atención personalizada",
    description:
      "Te acompañamos en cada etapa: desde la idea inicial hasta la instalación final en tu espacio.",
  },
  {
    icon: ShieldCheck,
    title: "Garantía de calidad",
    description:
      "Todos nuestros muebles cuentan con garantía de estructura y acabado. Tu tranquilidad es nuestra prioridad.",
  },
  {
    icon: Cog,
    title: "Artesanía con maquinaria moderna",
    description:
      "Combinamos técnicas artesanales tradicionales con maquinaria de precisión para resultados impecables.",
  },
];

export function WhyUs() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <SectionReveal>
          <div className="text-center mb-16">
            <span className="text-[11px] tracking-[0.34em] uppercase text-[#c9a87c] font-medium block mb-3">
              ¿Por qué elegirnos?
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-light text-[#1c1917] mb-4">
              La diferencia está en los <span className="italic gild">detalles</span>
            </h2>
            <div className="hairline w-20 mx-auto" />
          </div>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map(({ icon: Icon, title, description }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group p-6 rounded-2xl border border-[#1c1917]/5 bg-[#faf8f5] hover:bg-white hover:shadow-xl hover:border-[#c9a87c]/20 transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-xl bg-[#8b5e3c]/10 flex items-center justify-center mb-4 group-hover:bg-[#8b5e3c]/20 transition-colors">
                <Icon size={22} className="text-[#8b5e3c]" strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-xl text-[#1c1917] mb-2 leading-tight">
                {title}
              </h3>
              <p className="text-sm text-[#57534e] leading-relaxed">
                {description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
