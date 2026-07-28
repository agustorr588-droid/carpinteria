"use client";

import { useState, FormEvent } from "react";
import { company } from "@/app/data/company";
import { SectionReveal } from "@/app/components/SectionReveal";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "El nombre es obligatorio";
    if (!formData.email.trim()) newErrors.email = "El correo es obligatorio";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Correo inválido";
    if (!formData.phone.trim()) newErrors.phone = "El teléfono es obligatorio";
    if (!formData.message.trim()) newErrors.message = "El mensaje es obligatorio";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validate()) setSubmitted(true);
  };

  return (
    <section id="contacto" className="py-20 md:py-28 bg-[#f6f1e7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <SectionReveal>
          <div className="text-center mb-16">
            <span className="text-[11px] tracking-[0.34em] uppercase text-[#caa24f] font-medium block mb-3">
              Contacto
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-light text-[#24211c] mb-4">
              Hablemos de tu <span className="italic gild">proyecto</span>
            </h2>
            <div className="hairline w-20 mx-auto" />
          </div>
        </SectionReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <SectionReveal>
            <div className="space-y-8">
              <div>
                <h3 className="font-display text-2xl text-[#24211c] mb-4">Información de contacto</h3>
                <p className="text-[#57534e] leading-relaxed">
                  Estamos listos para escuchar tu idea y transformarla en un mueble único. Contactanos por cualquier medio.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#caa24f]/10 flex items-center justify-center shrink-0">
                    <Phone size={18} className="text-[#caa24f]" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[#24211c]">Teléfono</p>
                    <p className="text-sm text-[#57534e]">{company.contact.phone}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#caa24f]/10 flex items-center justify-center shrink-0">
                    <Mail size={18} className="text-[#caa24f]" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[#24211c]">Email</p>
                    <p className="text-sm text-[#57534e]">{company.contact.email}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#caa24f]/10 flex items-center justify-center shrink-0">
                    <MapPin size={18} className="text-[#caa24f]" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[#24211c]">Dirección</p>
                    <p className="text-sm text-[#57534e]">{company.contact.address.full}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#caa24f]/10 flex items-center justify-center shrink-0">
                    <Clock size={18} className="text-[#caa24f]" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[#24211c]">Horarios</p>
                    <p className="text-sm text-[#57534e]">{company.contact.hours.weekday}</p>
                  </div>
                </div>
              </div>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.1}>
            {submitted ? (
              <div className="p-8 rounded-2xl bg-[#faf8f5] border border-[#24211c]/5 text-center">
                <CheckCircle size={48} className="mx-auto mb-4 text-[#caa24f]" />
                <h3 className="font-display text-2xl text-[#24211c] mb-2">Mensaje enviado</h3>
                <p className="text-[#57534e]">Gracias por contactarnos. Te responderemos a la brevedad.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-6 md:p-8 rounded-2xl bg-[#faf8f5] border border-[#24211c]/5 shadow-sm space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#24211c] mb-1.5">Nombre</label>
                  <input id="name" type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className={`w-full px-4 py-2.5 rounded-lg border bg-[#f6f1e7] text-sm focus:outline-none focus:ring-2 focus:ring-[#caa24f]/30 transition-all ${errors.name ? "border-red-300" : "border-[#24211c]/10"}`} aria-invalid={!!errors.name} aria-describedby={errors.name ? "name-error" : undefined} />
                  {errors.name && <p id="name-error" className="text-xs text-red-500 mt-1">{errors.name}</p>}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#24211c] mb-1.5">Correo</label>
                    <input id="email" type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className={`w-full px-4 py-2.5 rounded-lg border bg-[#f6f1e7] text-sm focus:outline-none focus:ring-2 focus:ring-[#caa24f]/30 transition-all ${errors.email ? "border-red-300" : "border-[#24211c]/10"}`} aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-error" : undefined} />
                    {errors.email && <p id="email-error" className="text-xs text-red-500 mt-1">{errors.email}</p>}
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-[#24211c] mb-1.5">Teléfono</label>
                    <input id="phone" type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className={`w-full px-4 py-2.5 rounded-lg border bg-[#f6f1e7] text-sm focus:outline-none focus:ring-2 focus:ring-[#caa24f]/30 transition-all ${errors.phone ? "border-red-300" : "border-[#24211c]/10"}`} aria-invalid={!!errors.phone} aria-describedby={errors.phone ? "phone-error" : undefined} />
                    {errors.phone && <p id="phone-error" className="text-xs text-red-500 mt-1">{errors.phone}</p>}
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#24211c] mb-1.5">Mensaje</label>
                  <textarea id="message" rows={4} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className={`w-full px-4 py-2.5 rounded-lg border bg-[#f6f1e7] text-sm focus:outline-none focus:ring-2 focus:ring-[#caa24f]/30 transition-all resize-none ${errors.message ? "border-red-300" : "border-[#24211c]/10"}`} aria-invalid={!!errors.message} aria-describedby={errors.message ? "message-error" : undefined} />
                  {errors.message && <p id="message-error" className="text-xs text-red-500 mt-1">{errors.message}</p>}
                </div>
                <button type="submit" className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#e8c87a] text-[#24211c] font-medium px-6 py-3 text-sm hover:bg-[#efd692] transition-colors shadow-lg shadow-[#caa24f]/20">
                  <Send size={16} /> Enviar mensaje
                </button>
              </form>
            )}
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
