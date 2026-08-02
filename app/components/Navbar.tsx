"use client";

import { useState } from "react";
import { navLinks } from "@/app/data/navigation";
import { company } from "@/app/data/company";
import { useScrollPosition } from "@/app/hooks/useScrollPosition";
import { Animated } from "./Animated";
import { MobileMenu } from "./MobileMenu";
import { Menu, X, Phone } from "lucide-react";

const navStagger = [100, 150, 200, 250, 300];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const scrollY = useScrollPosition();
  const isScrolled = scrollY > 50;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#050505]/90 backdrop-blur-md shadow-sm border-b border-[#f3efe9]/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-4 md:py-6">
        <div className="flex items-center justify-between h-12">
          <Animated>
            <a
              href="#inicio"
              className="flex items-baseline gap-2"
              aria-label="Madera Noble - Inicio"
            >
              <span className="font-display text-2xl tracking-[0.04em] text-[#f3efe9]">
                MADERA NOBLE
              </span>
              <span className="hidden sm:inline font-body text-[10px] tracking-[0.3em] text-[#caa24f] uppercase">
                / Carpintería
              </span>
            </a>
          </Animated>

          <nav className="hidden lg:flex items-center gap-8" aria-label="Navegación principal">
            {navLinks.map((link, i) => (
              <Animated key={link.href} delay={navStagger[i] ?? 100}>
                <a
                  href={link.href}
                  className="link-underline text-sm text-[#f3efe9]/70 hover:text-[#f3efe9] transition-colors font-medium"
                >
                  {link.label}
                </a>
              </Animated>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Animated delay={350}>
              <a
                href={`https://wa.me/${company.contact.phoneRaw}?text=${encodeURIComponent(
                  company.social.whatsappMessage
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="micro-lift hidden md:inline-flex items-center gap-2 rounded-full liquid-glass px-5 py-2 text-sm font-medium text-[#f3efe9] hover:bg-white/10 transition-colors"
                aria-label="Contactar por WhatsApp"
              >
                <Phone size={16} />
                <span>Contactar</span>
              </a>
            </Animated>

            <Animated delay={350}>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden w-10 h-10 rounded-full liquid-glass flex items-center justify-center transition-colors hover:bg-white/10"
                aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
                aria-expanded={mobileOpen}
              >
                <span className="relative w-5 h-5">
                  <Menu
                    size={20}
                    className={`absolute inset-0 transition-all duration-500 ease-out ${
                      mobileOpen ? "opacity-0 rotate-180 scale-50" : "opacity-100 rotate-0 scale-100"
                    }`}
                  />
                  <X
                    size={20}
                    className={`absolute inset-0 transition-all duration-500 ease-out ${
                      mobileOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-180 scale-50"
                    }`}
                  />
                </span>
              </button>
            </Animated>
          </div>
        </div>
      </div>

      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}
