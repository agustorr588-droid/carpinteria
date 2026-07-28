"use client";

import { company } from "@/app/data/company";
import { footerLinks } from "@/app/data/navigation";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#24211c] text-[#f3efe9]" id="contacto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h3 className="font-display text-2xl tracking-[0.04em] mb-4">
              MADERA NOBLE
            </h3>
            <p className="text-sm text-[#f3efe9]/70 leading-relaxed mb-6">
              Carpintería artesanal con más de {year - company.founded} años de
              experiencia. Diseñamos y fabricamos muebles únicos que perduran generaciones.
            </p>
            <div className="flex gap-4">
              <a
                href={company.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-[#f3efe9]/20 flex items-center justify-center hover:border-[#caa24f] hover:text-[#caa24f] transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href={company.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-[#f3efe9]/20 flex items-center justify-center hover:border-[#caa24f] hover:text-[#caa24f] transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-medium text-sm tracking-[0.2em] uppercase text-[#caa24f] mb-6">
              Enlaces Rápidos
            </h4>
            <ul className="space-y-3">
              {footerLinks.quick.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-[#f3efe9]/70 hover:text-[#f3efe9] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-sm tracking-[0.2em] uppercase text-[#caa24f] mb-6">
              Productos
            </h4>
            <ul className="space-y-3">
              {footerLinks.products.map((product) => (
                <li key={product}>
                  <a
                    href="#catalogo"
                    className="text-sm text-[#f3efe9]/70 hover:text-[#f3efe9] transition-colors"
                  >
                    {product}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-sm tracking-[0.2em] uppercase text-[#caa24f] mb-6">
              Contacto
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-[#f3efe9]/70">
                <MapPin size={18} className="shrink-0 mt-0.5 text-[#caa24f]" />
                <span>{company.contact.address.full}</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-[#f3efe9]/70">
                <Phone size={18} className="shrink-0 text-[#caa24f]" />
                <span>{company.contact.phone}</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-[#f3efe9]/70">
                <Mail size={18} className="shrink-0 text-[#caa24f]" />
                <span>{company.contact.email}</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-[#f3efe9]/70">
                <Clock size={18} className="shrink-0 mt-0.5 text-[#caa24f]" />
                <div>
                  <p>{company.contact.hours.weekday}</p>
                  <p>{company.contact.hours.saturday}</p>
                  <p>{company.contact.hours.sunday}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-[#f3efe9]/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[#f3efe9]/50">
            © {year} Madera Noble. Todos los derechos reservados.
          </p>
          <p className="text-xs text-[#f3efe9]/50">
            Montevideo, Uruguay
          </p>
        </div>
      </div>
    </footer>
  );
}
