export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  price: number;
  image: string;
}

export const categories = [
  "Todas",
  "Mesas",
  "Sillas",
  "Escritorios",
  "Placares",
  "Cocina",
  "Racks",
  "Bibliotecas",
  "Dormitorio",
  "A medida",
] as const;

export const products: Product[] = [
  {
    id: "mesa-comedor-roble",
    name: "Mesa de Comedor Roble",
    category: "Mesas",
    description: "Mesa extensible en roble macizo, acabado natural satinado. Capacidad para 6 a 10 comensales.",
    price: 42900,
    image: "/images/mesa.svg",
  },
  {
    id: "silla-eames-madera",
    name: "Silla Nórdica Eames",
    category: "Sillas",
    description: "Silla de diseño escandinavo en madera de haya con asiento ergonómico.",
    price: 7850,
    image: "/images/silla.svg",
  },
  {
    id: "escritorio-nordico",
    name: "Escritorio Nórdico",
    category: "Escritorios",
    description: "Escritorio con cajonera integrada, patas de roble y tapa de nogal.",
    price: 35600,
    image: "/images/escritorio.svg",
  },
  {
    id: "placar-corrido",
    name: "Placar Corredizo Premium",
    category: "Placares",
    description: "Placar de tres cuerpos con frente de madera maciza y correderas de aluminio anodizado.",
    price: 68900,
    image: "/images/placar.svg",
  },
  {
    id: "cocina-isla",
    name: "Isla de Cocina",
    category: "Cocina",
    description: "Isla central con mesada de roble, estantes abiertos y cajones de guías soft-close.",
    price: 52300,
    image: "/images/cocina.svg",
  },
  {
    id: "rack-tv-nogal",
    name: "Rack para TV Nogal",
    category: "Racks",
    description: "Rack flotante para TV hasta 65 pulgadas, con compartimentos ocultos para cables.",
    price: 28700,
    image: "/images/rack.svg",
  },
  {
    id: "biblioteca-alta",
    name: "Biblioteca Alta Vintage",
    category: "Bibliotecas",
    description: "Biblioteca de piso a techo con cinco estantes regulables y escalera móvil.",
    price: 45600,
    image: "/images/biblioteca.svg",
  },
  {
    id: "mesa-luz-minimal",
    name: "Mesa de Luz Minimal",
    category: "Dormitorio",
    description: "Mesa de luz de una sola pieza en roble, con cajón oculto y base flotante.",
    price: 12400,
    image: "/images/mesaluz.svg",
  },
  {
    id: "cama-king-encino",
    name: "Cama King Encino",
    category: "Dormitorio",
    description: "Cama king-size con respaldo tapizado en lino y estructura de encino sólido.",
    price: 57800,
    image: "/images/cama.svg",
  },
  {
    id: "caballete-arte",
    name: "Caballete de Artista",
    category: "A medida",
    description: "Caballete plegable de haya con regulación de altura y apoyabrazos de cuero.",
    price: 15600,
    image: "/images/caballete.svg",
  },
  {
    id: "matera-eucalipto",
    name: "Matera Eucaliptus",
    category: "A medida",
    description: "Matera con divisores para macetas y compartimento para herramientas de jardín.",
    price: 8900,
    image: "/images/matera.svg",
  },
  {
    id: "pizarra-madera",
    name: "Pizarra de Madera Doble",
    category: "A medida",
    description: "Pizarra de doble cara con marco de roble, ideal para restaurantes y cafeterías.",
    price: 11200,
    image: "/images/pizarra.svg",
  },
];

export function formatPrice(price: number): string {
  return `$ ${price.toLocaleString("es-UY")}`;
}
