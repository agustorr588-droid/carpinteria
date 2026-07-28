"use client";

import { navLinks } from "@/app/data/navigation";
import { motion, AnimatePresence } from "framer-motion";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="absolute top-[72px] left-0 right-0 z-40 bg-[#faf8f5]/95 backdrop-blur-lg border-t border-b border-[#1c1917]/10 shadow-2xl lg:hidden"
        >
          <nav className="flex flex-col px-6 py-6 gap-2" aria-label="Navegación móvil">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={onClose}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                className="py-3 px-3 rounded-lg text-[#1c1917] font-medium hover:bg-[#1c1917]/5 transition-colors"
              >
                {link.label}
              </motion.a>
            ))}
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
