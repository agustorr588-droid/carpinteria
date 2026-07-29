"use client";

import { navLinks } from "@/app/data/navigation";
import { Animated } from "./Animated";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <div
      className={`absolute top-[72px] left-0 right-0 z-40 bg-[#050505]/95 backdrop-blur-lg border-t border-b border-[#f3efe9]/10 shadow-2xl lg:hidden transition-all duration-500 ease-out ${
        isOpen
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 -translate-y-4 pointer-events-none"
      }`}
    >
      <nav className="flex flex-col px-6 py-6 gap-2" aria-label="Navegación móvil">
        {navLinks.map((link, i) => (
          <Animated key={link.href} delay={isOpen ? i * 50 : 0}>
            <a
              href={link.href}
              onClick={onClose}
              className="py-3 px-3 rounded-lg text-[#f3efe9] font-medium hover:bg-[#f3efe9]/5 hover:text-[#caa24f] transition-colors"
            >
              {link.label}
            </a>
          </Animated>
        ))}
      </nav>
    </div>
  );
}
