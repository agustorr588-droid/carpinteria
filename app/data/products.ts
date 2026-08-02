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
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: "silla-eames-madera",
    name: "Silla Nórdica Eames",
    category: "Sillas",
    description: "Silla de diseño escandinavo en madera de haya con asiento ergonómico.",
    price: 7850,
    image: "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: "escritorio-nordico",
    name: "Escritorio Nórdico",
    category: "Escritorios",
    description: "Escritorio con cajonera integrada, patas de roble y tapa de nogal.",
    price: 35600,
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: "placar-corrido",
    name: "Placar Corredizo Premium",
    category: "Placares",
    description: "Placar de tres cuerpos con frente de madera maciza y correderas de aluminio anodizado.",
    price: 68900,
    image: "https://images.unsplash.com/photo-1558997519-83ea9252edf8?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: "cocina-isla",
    name: "Isla de Cocina",
    category: "Cocina",
    description: "Isla central con mesada de roble, estantes abiertos y cajones de guías soft-close.",
    price: 52300,
    image: "https://images.unsplash.com/photo-1556912167-f556f1f39fdf?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: "rack-tv-nogal",
    name: "Rack para TV Nogal",
    category: "Racks",
    description: "Rack flotante para TV hasta 65 pulgadas, con compartimentos ocultos para cables.",
    price: 28700,
    image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: "biblioteca-alta",
    name: "Biblioteca Alta Vintage",
    category: "Bibliotecas",
    description: "Biblioteca de piso a techo con cinco estantes regulables y escalera móvil.",
    price: 45600,
    image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: "mesa-luz-minimal",
    name: "Mesa de Luz Minimal",
    category: "Dormitorio",
    description: "Mesa de luz de una sola pieza en roble, con cajón oculto y base flotante.",
    price: 12400,
    image: "https://images.unsplash.com/photo-1616627989532-6a7c7b5a98f4?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: "cama-king-encino",
    name: "Cama King Encino",
    category: "Dormitorio",
    description: "Cama king-size con respaldo tapizado en lino y estructura de encino sólido.",
    price: 57800,
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: "caballete-arte",
    name: "Caballete de Artista",
    category: "A medida",
    description: "Caballete plegable de haya con regulación de altura y apoyabrazos de cuero.",
    price: 15600,
    image: "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: "matera-eucalipto",
    name: "Matera Eucaliptus",
    category: "A medida",
    description: "Matera con divisores para macetas y compartimento para herramientas de jardín.",
    price: 8900,
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: "pizarra-madera",
    name: "Pizarra de Madera Doble",
    category: "A medida",
    description: "Pizarra de doble cara con marco de roble, ideal para restaurantes y cafeterías.",
    price: 11200,
    image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=900&q=85",
  },
];

export function formatPrice(price: number): string {
  return `$ ${price.toLocaleString("es-UY")}`;
}
