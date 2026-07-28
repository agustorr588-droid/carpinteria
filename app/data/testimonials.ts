export interface Testimonial {
  id: string;
  name: string;
  comment: string;
  rating: number;
  role: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Laura Fernández",
    comment: "La mesa de comedor que encargamos superó todas nuestras expectativas. La calidad de la madera y el acabado son excepcionales. Cada vez que tenemos invitados, alguien pregunta dónde la compramos.",
    rating: 5,
    role: "Cliente residencial",
  },
  {
    id: "t2",
    name: "Martín Castillo",
    comment: "Trabajamos con Madera Noble para equipar nuestro restaurante. La isla de cocina y las mesas son el centro de atención. Profesionalismo, puntualidad y un resultado impecable.",
    rating: 5,
    role: "Dueño de restaurante",
  },
  {
    id: "t3",
    name: "Sofía Ramírez",
    comment: "Pedí un escritorio a medida para mi estudio de arquitectura. Capturaron exactamente lo que tenía en mente y lo hicieron realidad. La atención al detalle es admirable.",
    rating: 5,
    role: "Arquitecta",
  },
  {
    id: "t4",
    name: "Diego Acosta",
    comment: "Hace tres años compramos el placar y todavía luce como nuevo. La madera envejece hermosamente. Sin duda, una inversión que vale cada peso.",
    rating: 5,
    role: "Cliente residencial",
  },
  {
    id: "t5",
    name: "Valentina López",
    comment: "El equipo de Madera Noble diseñó la biblioteca para nuestro hotel boutique. Los huéspedes siempre la mencionan. Un trabajo artesanal de nivel internacional.",
    rating: 5,
    role: "Gerente de hotel",
  },
  {
    id: "t6",
    name: "Andrés Pérez",
    comment: "Encargamos muebles a medida para nuestra oficina. Desde la primera reunión hasta la entrega, el proceso fue impecable. Recomiendo sin reservas.",
    rating: 5,
    role: "CEO de startup",
  },
];
