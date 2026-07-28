"use client";

import { useState } from "react";
import { navLinks } from "@/app/data/navigation";
import { company } from "@/app/data/company";
import { useScrollPosition } from "@/app/hooks/useScrollPosition";
import { MobileMenu } from "./MobileMenu";
import { Menu, X, Phone } from "lucide-react";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const scrollY = useScrollPosition();
  const isScrolled = scrollY > 50;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#faf8f5]/90 backdrop-blur-md shadow-sm border-b border-[#1c1917]/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a
            href="#inicio"
            className="flex items-baseline gap-2"
            aria-label="Madera Noble - Inicio"
          >
            <span className="font-display text-2xl tracking-[0.04em] text-[#1c1917]">
              MADERA NOBLE
            </span>
            <span className="hidden sm:inline font-body text-[10px] tracking-[0.3em] text-[#c9a87c] uppercase">
              / Carpintería
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-8" aria-label="Navegación principal">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-[#1c1917]/70 hover:text-[#1c1917] transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={`https://wa.me/${company.contact.phoneRaw}?text=${encodeURIComponent(
                company.social.whatsappMessage
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 rounded-full bg-[#8b5e3c] text-[#faf8f5] px-5 py-2 text-sm font-medium hover:bg-[#6d4a2f] transition-colors"
              aria-label="Contactar por WhatsApp"
            >
              <Phone size={16} />
              <span>Contactar</span>
            </a>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden w-10 h-10 rounded-full flex items-center justify-center border border-[#1c1917]/10 hover:bg-[#1c1917]/5 transition-colors"
              aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}
