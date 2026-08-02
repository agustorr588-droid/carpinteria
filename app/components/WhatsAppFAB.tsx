"use client";

import { company } from "@/app/data/company";
import { MessageCircle } from "lucide-react";

export function WhatsAppFAB() {
  const waUrl = `https://wa.me/${company.contact.phoneRaw}?text=${encodeURIComponent(
    company.social.whatsappMessage
  )}`;

  return (
    <a
      href={waUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="micro-lift fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#caa24f] text-[#050505] shadow-lg hover:scale-110 transition-transform duration-300"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle size={28} fill="#050505" />
    </a>
  );
}
