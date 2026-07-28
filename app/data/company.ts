export const company = {
  name: "Madera Noble",
  tagline: "Donde la madera encuentra su alma",
  founded: 1987,
  history: {
    founded: 1987,
    location: "Montevideo, Uruguay",
    story: `Madera Noble nació en 1987 como un pequeño taller familiar en el barrio de Palermo, Montevideo. Don Carlos Rodríguez, maestro carpintero de tercera generación, abrió las puertas con una simple convicción: que cada mueble debía contar una historia.

Lo que comenzó con mesas y sillas para vecinos del barrio, creció con los años gracias a una combinación inquebrantable de artesanía tradicional y maquinaria moderna. Hoy, más de tres décadas después, Madera Noble es referente en diseño de interiores, atendiendo a hogares, restaurantes y hoteles de todo el país.

Cada pieza que sale de nuestro taller lleva consigo el legado de tres generaciones: la mano experta del ebanista, la visión del diseñador y la pasión de quienes entienden que la madera viva merece respeto.`,
    values: [
      "Artesanía consciente y sostenible",
      "Materiales premium seleccionados pieza por pieza",
      "Diseño funcional y atemporal",
      "Atención personalizada en cada proyecto",
    ],
  },
  contact: {
    phone: "+598 99 123 456",
    phoneRaw: "59899123456",
    email: "contacto@maderanoble.uy",
    address: {
      street: "Av. Rivera 2847",
      city: "Montevideo",
      department: "Montevideo",
      country: "Uruguay",
      full: "Av. Rivera 2847, Montevideo, Uruguay",
    },
    hours: {
      weekday: "Lunes a Viernes: 9:00 - 18:00",
      saturday: "Sábados: 9:00 - 13:00",
      sunday: "Domingos: Cerrado",
    },
  },
  social: {
    instagram: "https://instagram.com/maderanoble",
    facebook: "https://facebook.com/maderanoble",
    whatsappMessage: "Hola, quisiera consultar por uno de sus muebles.",
  },
} as const;
