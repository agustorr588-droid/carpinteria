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

const galleryImages = {
  mesa: [
    "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85",
    "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=85",
    "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1200&q=85",
  ],
  silla: [
    "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=1200&q=85",
    "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=1200&q=85",
    "https://images.unsplash.com/photo-1551298370-9d3d53740c72?auto=format&fit=crop&w=1200&q=85",
  ],
  escritorio: [
    "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=85",
    "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=85",
    "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85",
  ],
  placar: [
    "https://images.unsplash.com/photo-1558997519-83ea9252edf8?auto=format&fit=crop&w=1200&q=85",
    "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=85",
    "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85",
  ],
  cocina: [
    "https://images.unsplash.com/photo-1556912167-f556f1f39fdf?auto=format&fit=crop&w=1200&q=85",
    "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1200&q=85",
    "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=85",
  ],
  rack: [
    "https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=1200&q=85",
    "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=85",
    "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=1200&q=85",
  ],
  biblioteca: [
    "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=85",
    "https://images.unsplash.com/photo-1594620302200-9a762244a156?auto=format&fit=crop&w=1200&q=85",
    "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1200&q=85",
  ],
  dormitorio: [
    "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=85",
    "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=85",
    "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85",
  ],
  cama: [
    "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=85",
    "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1200&q=85",
    "https://images.unsplash.com/photo-1615874694520-474822394e73?auto=format&fit=crop&w=1200&q=85",
  ],
  arte: [
    "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?auto=format&fit=crop&w=1200&q=85",
    "https://images.unsplash.com/photo-1561214115-f2f134cc4912?auto=format&fit=crop&w=1200&q=85",
    "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=1200&q=85",
  ],
  matera: [
    "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=1200&q=85",
    "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?auto=format&fit=crop&w=1200&q=85",
    "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1200&q=85",
  ],
  pizarra: [
    "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=85",
    "https://images.unsplash.com/photo-1516383607781-913a19294fd1?auto=format&fit=crop&w=1200&q=85",
    "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=85",
  ],
};

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
    gallery: ["https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85", ...galleryImages.mesa],
    reviews,
  },
  "silla-eames-madera": {
    materials: "Haya maciza y asiento tapizado",
    dimensions: "48 × 52 × 82 cm",
    finish: "Laca mate al agua",
    delivery: "2 a 3 semanas",
    gallery: ["https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=1200&q=85", ...galleryImages.silla],
    reviews,
  },
  "escritorio-nordico": {
    materials: "Nogal y roble macizos",
    dimensions: "140 × 65 × 76 cm",
    finish: "Cera de abeja natural",
    delivery: "3 a 5 semanas",
    gallery: ["https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85", ...galleryImages.escritorio],
    reviews,
  },
  "placar-corrido": {
    materials: "Roble macizo y aluminio anodizado",
    dimensions: "240 × 60 × 220 cm",
    finish: "Barniz protector ultramate",
    delivery: "6 a 8 semanas",
    gallery: ["https://images.unsplash.com/photo-1558997519-83ea9252edf8?auto=format&fit=crop&w=1200&q=85", ...galleryImages.placar],
    reviews,
  },
  "cocina-isla": {
    materials: "Roble macizo y herrajes soft-close",
    dimensions: "180 × 90 × 92 cm",
    finish: "Aceite resistente a manchas",
    delivery: "5 a 7 semanas",
    gallery: ["https://images.unsplash.com/photo-1556912167-f556f1f39fdf?auto=format&fit=crop&w=1200&q=85", ...galleryImages.cocina],
    reviews,
  },
  "rack-tv-nogal": {
    materials: "Nogal macizo y estructura de acero",
    dimensions: "180 × 40 × 45 cm",
    finish: "Laca mate de alta resistencia",
    delivery: "3 a 4 semanas",
    gallery: ["https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=1200&q=85", ...galleryImages.rack],
    reviews,
  },
  "biblioteca-alta": {
    materials: "Eucalipto macizo y herrajes de latón",
    dimensions: "100 × 35 × 240 cm",
    finish: "Envejecido suave con cera",
    delivery: "5 a 7 semanas",
    gallery: ["https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=85", ...galleryImages.biblioteca],
    reviews,
  },
  "mesa-luz-minimal": {
    materials: "Roble macizo",
    dimensions: "45 × 38 × 52 cm",
    finish: "Aceite natural",
    delivery: "2 a 3 semanas",
    gallery: ["https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=85", ...galleryImages.dormitorio],
    reviews,
  },
  "cama-king-encino": {
    materials: "Encino sólido y lino natural",
    dimensions: "198 × 218 × 105 cm",
    finish: "Barniz mate ecológico",
    delivery: "6 a 8 semanas",
    gallery: ["https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=85", ...galleryImages.cama],
    reviews,
  },
  "caballete-arte": {
    materials: "Haya maciza y cuero natural",
    dimensions: "65 × 60 × 180 cm",
    finish: "Aceite protector satinado",
    delivery: "2 a 4 semanas",
    gallery: ["https://images.unsplash.com/photo-1547891654-e66ed7ebb968?auto=format&fit=crop&w=1200&q=85", ...galleryImages.arte],
    reviews,
  },
  "matera-eucalipto": {
    materials: "Eucalipto macizo",
    dimensions: "90 × 35 × 75 cm",
    finish: "Protector exterior al agua",
    delivery: "2 a 3 semanas",
    gallery: ["https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=1200&q=85", ...galleryImages.matera],
    reviews,
  },
  "pizarra-madera": {
    materials: "Roble macizo y pizarra lavable",
    dimensions: "80 × 8 × 120 cm",
    finish: "Cera natural para interiores",
    delivery: "2 a 3 semanas",
    gallery: ["https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=85", ...galleryImages.pizarra],
    reviews,
  },
};

export function getProductDetail(id: string): ProductDetail {
  return details[id] ?? details["mesa-comedor-roble"];
}
