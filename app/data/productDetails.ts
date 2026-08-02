export interface ProductReview {
  name: string;
  date: string;
  rating: number;
  comment: string;
}

export interface ProductDetail {
  materials: string;
  dimensions: string;
  finish: string;
  delivery: string;
  gallery: string[];
  reviews: ProductReview[];
}

const galleryImages = [
  "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1200&q=85",
];

const reviews = [
  {
    name: "Martina S.",
    date: "Hace 2 semanas",
    rating: 5,
    comment: "La calidad de la madera y los detalles del acabado superaron nuestras expectativas. Es una pieza hermosa.",
  },
  {
    name: "Diego R.",
    date: "Hace 1 mes",
    rating: 5,
    comment: "Excelente atención desde el primer contacto y entrega en fecha. Se nota el trabajo artesanal.",
  },
  {
    name: "Sofía M.",
    date: "Hace 2 meses",
    rating: 4,
    comment: "Muy lindo mueble, sólido y funcional. El equipo nos ayudó a elegir el acabado ideal para casa.",
  },
];

const details: Record<string, ProductDetail> = {
  "mesa-comedor-roble": {
    materials: "Roble macizo seleccionado",
    dimensions: "180–240 × 95 × 76 cm",
    finish: "Aceite natural satinado",
    delivery: "4 a 6 semanas",
    gallery: ["/images/mesa.svg", ...galleryImages],
    reviews,
  },
  "silla-eames-madera": {
    materials: "Haya maciza y asiento tapizado",
    dimensions: "48 × 52 × 82 cm",
    finish: "Laca mate al agua",
    delivery: "2 a 3 semanas",
    gallery: ["/images/silla.svg", ...galleryImages],
    reviews,
  },
  "escritorio-nordico": {
    materials: "Nogal y roble macizos",
    dimensions: "140 × 65 × 76 cm",
    finish: "Cera de abeja natural",
    delivery: "3 a 5 semanas",
    gallery: ["/images/escritorio.svg", ...galleryImages],
    reviews,
  },
  "placar-corrido": {
    materials: "Roble macizo y aluminio anodizado",
    dimensions: "240 × 60 × 220 cm",
    finish: "Barniz protector ultramate",
    delivery: "6 a 8 semanas",
    gallery: ["/images/placar.svg", ...galleryImages],
    reviews,
  },
  "cocina-isla": {
    materials: "Roble macizo y herrajes soft-close",
    dimensions: "180 × 90 × 92 cm",
    finish: "Aceite resistente a manchas",
    delivery: "5 a 7 semanas",
    gallery: ["/images/cocina.svg", ...galleryImages],
    reviews,
  },
  "rack-tv-nogal": {
    materials: "Nogal macizo y estructura de acero",
    dimensions: "180 × 40 × 45 cm",
    finish: "Laca mate de alta resistencia",
    delivery: "3 a 4 semanas",
    gallery: ["/images/rack.svg", ...galleryImages],
    reviews,
  },
  "biblioteca-alta": {
    materials: "Eucalipto macizo y herrajes de latón",
    dimensions: "100 × 35 × 240 cm",
    finish: "Envejecido suave con cera",
    delivery: "5 a 7 semanas",
    gallery: ["/images/biblioteca.svg", ...galleryImages],
    reviews,
  },
  "mesa-luz-minimal": {
    materials: "Roble macizo",
    dimensions: "45 × 38 × 52 cm",
    finish: "Aceite natural",
    delivery: "2 a 3 semanas",
    gallery: ["/images/mesaluz.svg", ...galleryImages],
    reviews,
  },
  "cama-king-encino": {
    materials: "Encino sólido y lino natural",
    dimensions: "198 × 218 × 105 cm",
    finish: "Barniz mate ecológico",
    delivery: "6 a 8 semanas",
    gallery: ["/images/cama.svg", ...galleryImages],
    reviews,
  },
  "caballete-arte": {
    materials: "Haya maciza y cuero natural",
    dimensions: "65 × 60 × 180 cm",
    finish: "Aceite protector satinado",
    delivery: "2 a 4 semanas",
    gallery: ["/images/caballete.svg", ...galleryImages],
    reviews,
  },
  "matera-eucalipto": {
    materials: "Eucalipto macizo",
    dimensions: "90 × 35 × 75 cm",
    finish: "Protector exterior al agua",
    delivery: "2 a 3 semanas",
    gallery: ["/images/matera.svg", ...galleryImages],
    reviews,
  },
  "pizarra-madera": {
    materials: "Roble macizo y pizarra lavable",
    dimensions: "80 × 8 × 120 cm",
    finish: "Cera natural para interiores",
    delivery: "2 a 3 semanas",
    gallery: ["/images/pizarra.svg", ...galleryImages],
    reviews,
  },
};

export function getProductDetail(id: string): ProductDetail {
  return details[id] ?? details["mesa-comedor-roble"];
}
