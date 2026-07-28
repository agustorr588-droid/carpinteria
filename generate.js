const fs = require('fs');
const path = require('path');

function write(file, content) {
  const dir = path.dirname(file);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(file, content, 'utf8');
  console.log('Created:', file);
}

// Hero section
write('app/sections/Hero.tsx', `"use client";

import { company } from "@/app/data/company";
import { motion } from "framer-motion";
import { ArrowRight, TreePine, Hammer, Ruler } from "lucide-react";

export function Hero() {
  const year = new Date().getFullYear();
  const years = year - company.founded;

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col justify-end overflow-hidden bg-[#faf8f5]"
    >
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: \`repeating-linear-gradient(90deg,#8b5e3c 0px,#8b5e3c 1px,transparent 1px,transparent 60px),repeating-linear-gradient(0deg,#a0704e 0px,#a0704e 1px,transparent 1px,transparent 60px)\`,
          }}
        />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#e8e0d6] to-transparent opacity-60" />
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#faf8f5] via-[#faf8f5]/80 to-transparent" />
      </div>
      <div className="fixed top-0 left-0 right-0 h-24 z-10 pointer-events-none bg-gradient-to-b from-[#faf8f5]/70 to-transparent" />
      <div className="relative z-10 px-4 sm:px-6 md:px-12 pb-12 md:pb-20 pt-32 max-w-7xl mx-auto w-full">
        <motion.div initial={{ opacity:0,y:20,filter:"blur(10px)" }} animate={{ opacity:1,y:0,filter:"blur(0px)" }} transition={{ duration:0.8,delay:0.3 }} className="mb-4">
          <span className="text-[11px] tracking-[0.34em] uppercase text-[#c9a87c] font-body font-medium">Carpintería Artesanal · Desde {company.founded}</span>
          <div className="hairline w-16 mt-3 animate-hairline-draw" />
        </motion.div>
        <motion.div initial={{ opacity:0,y:20,filter:"blur(10px)" }} animate={{ opacity:1,y:0,filter:"blur(0px)" }} transition={{ duration:0.8,delay:0.38 }} className="flex flex-wrap gap-x-6 gap-y-2 mb-6 md:mb-8">
          {[{icon:TreePine,label:"Madera Sustentable"},{icon:Hammer,label:"Hecho a Mano"},{icon:Ruler,label:"Diseño a Medida"}].map(({icon:Icon,label})=> (
            <span key={label} className="flex items-center gap-2 text-[11px] tracking-[0.22em] uppercase text-[#1c1917]/50">
              <Icon size={14} strokeWidth={1.5} />{label}
            </span>
          ))}
        </motion.div>
        <motion.h1 initial={{ opacity:0,y:30,filter:"blur(15px)" }} animate={{ opacity:1,y:0,filter:"blur(0px)" }} transition={{ duration:1,delay:0.45 }} className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light leading-[0.98] tracking-[-0.01em] text-[#1c1917] mb-5 max-w-4xl">
          <span className="block">Artesanía que</span>
          <span className="block italic gild">perdura generaciones</span>
        </motion.h1>
        <motion.p initial={{ opacity:0,y:20,filter:"blur(10px)" }} animate={{ opacity:1,y:0,filter:"blur(0px)" }} transition={{ duration:0.8,delay:0.56 }} className="font-body text-base sm:text-lg md:text-xl text-[#1c1917]/65 max-w-xl mb-8 leading-relaxed">
          Más de {years} años transformando madera en muebles que cuentan historias. Cada pieza es única, cada detalle importa.
        </motion.p>
        <motion.div initial={{ opacity:0,y:20,filter:"blur(10px)" }} animate={{ opacity:1,y:0,filter:"blur(0px)" }} transition={{ duration:0.8,delay:0.66 }} className="flex flex-wrap gap-3 sm:gap-4">
          <a href={\`https://wa.me/\${company.contact.phoneRaw}?text=\${encodeURIComponent(company.social.whatsappMessage)}\`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#8b5e3c] text-[#faf8f5] font-medium px-6 sm:px-8 py-2.5 sm:py-3 text-sm hover:bg-[#6d4a2f] transition-colors shadow-lg shadow-[#8b5e3c]/20">Contactar</a>
          <a href="#catalogo" className="inline-flex items-center gap-2 rounded-full font-medium liquid-glass px-6 sm:px-8 py-2.5 sm:py-3 text-sm text-[#1c1917] hover:bg-white/50 transition-colors">Ver Catálogo<ArrowRight size={16} /></a>
        </motion.div>
        <motion.p initial={{ opacity:0,y:10 }} animate={{ opacity:1,y:0 }} transition={{ duration:0.8,delay:0.86 }} className="mt-8 md:mt-0 md:absolute md:bottom-12 md:right-4 md:sm:right-6 md:md:right-12 flex items-center gap-2 text-[10px] tracking-[0.28em] uppercase text-[#1c1917]/35">
          <span>Montevideo, Uruguay</span>
        </motion.p>
      </div>
    </section>
  );
}
`);

console.log('Done generating files');
