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
      className={`absolute top-[72px] left-0 right-0 z-40 bg-[#f6f1e7]/95 backdrop-blur-lg border-t border-b border-[#24211c]/10 shadow-2xl lg:hidden transition-all duration-500 ease-out ${
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
              className="py-3 px-3 rounded-lg text-[#24211c] font-medium hover:bg-[#24211c]/5 transition-colors"
            >
              {link.label}
            </a>
          </Animated>
        ))}
      </nav>
    </div>
  );
}
