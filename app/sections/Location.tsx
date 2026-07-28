"use client";

import { company } from "@/app/data/company";
import { SectionReveal } from "@/app/components/SectionReveal";
import { MapPin, Clock, Phone, Mail } from "lucide-react";

export function Location() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <SectionReveal>
          <div className="text-center mb-16">
            <span className="text-[11px] tracking-[0.34em] uppercase text-[#c9a87c] font-medium block mb-3">
              Visítanos
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-light text-[#1c1917] mb-4">
              Nuestra <span className="italic gild">ubicación</span>
            </h2>
            <div className="hairline w-20 mx-auto" />
          </div>
        </SectionReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <SectionReveal>
            <div className="relative aspect-[4/3] lg:aspect-auto lg:h-full min-h-[320px] rounded-2xl overflow-hidden bg-[#e8e0d6] border border-[#1c1917]/5">
              <iframe
                title="Ubicación de Madera Noble"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-56.175%2C-34.905%2C-56.16%2C-34.895&layer=mapnik&marker=-34.9015%2C-56.165"
                className="absolute inset-0 w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <a
                href="https://www.openstreetmap.org/?mlat=-34.9015&mlon=-56.165#map=16/-34.9015/-56.165"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-3 left-3 right-3 px-4 py-3 rounded-xl bg-white/95 backdrop-blur-sm border border-[#1c1917]/5 text-sm text-[#1c1917] shadow-sm hover:bg-white transition-colors"
              >
                <span className="font-medium">{company.contact.address.street}</span>
                <span className="block text-[#57534e]">
                  {company.contact.address.city}, {company.contact.address.country}
                </span>
              </a>
            </div>
          </SectionReveal>

          <div className="flex flex-col gap-6">
            <SectionReveal delay={0.1}>
              <div className="p-6 rounded-2xl bg-[#faf8f5] border border-[#1c1917]/5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#8b5e3c]/10 flex items-center justify-center shrink-0">
                    <MapPin size={18} className="text-[#8b5e3c]" />
                  </div>
                  <div>
                    <h3 className="font-medium text-[#1c1917] mb-1">Dirección</h3>
                    <p className="text-sm text-[#57534e] leading-relaxed">{company.contact.address.full}</p>
                  </div>
                </div>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.15}>
              <div className="p-6 rounded-2xl bg-[#faf8f5] border border-[#1c1917]/5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#8b5e3c]/10 flex items-center justify-center shrink-0">
                    <Clock size={18} className="text-[#8b5e3c]" />
                  </div>
                  <div>
                    <h3 className="font-medium text-[#1c1917] mb-1">Horarios</h3>
                    <div className="text-sm text-[#57534e] leading-relaxed space-y-1">
                      <p>{company.contact.hours.weekday}</p>
                      <p>{company.contact.hours.saturday}</p>
                      <p>{company.contact.hours.sunday}</p>
                    </div>
                  </div>
                </div>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.2}>
              <div className="p-6 rounded-2xl bg-[#faf8f5] border border-[#1c1917]/5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#8b5e3c]/10 flex items-center justify-center shrink-0">
                    <Phone size={18} className="text-[#8b5e3c]" />
                  </div>
                  <div>
                    <h3 className="font-medium text-[#1c1917] mb-1">Teléfono</h3>
                    <p className="text-sm text-[#57534e]">{company.contact.phone}</p>
                  </div>
                </div>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.25}>
              <div className="p-6 rounded-2xl bg-[#faf8f5] border border-[#1c1917]/5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#8b5e3c]/10 flex items-center justify-center shrink-0">
                    <Mail size={18} className="text-[#8b5e3c]" />
                  </div>
                  <div>
                    <h3 className="font-medium text-[#1c1917] mb-1">Email</h3>
                    <p className="text-sm text-[#57534e]">{company.contact.email}</p>
                  </div>
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
