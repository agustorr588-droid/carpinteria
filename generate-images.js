const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, 'public', 'images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

const products = [
  { file: 'mesa', name: 'Mesa de Comedor Roble', category: 'Mesas' },
  { file: 'silla', name: 'Silla Nórdica Eames', category: 'Sillas' },
  { file: 'escritorio', name: 'Escritorio Nórdico', category: 'Escritorios' },
  { file: 'placar', name: 'Placar Corredizo Premium', category: 'Placares' },
  { file: 'cocina', name: 'Isla de Cocina', category: 'Cocina' },
  { file: 'rack', name: 'Rack para TV Nogal', category: 'Racks' },
  { file: 'biblioteca', name: 'Biblioteca Alta Vintage', category: 'Bibliotecas' },
  { file: 'mesaluz', name: 'Mesa de Luz Minimal', category: 'Dormitorio' },
  { file: 'cama', name: 'Cama King Encino', category: 'Dormitorio' },
  { file: 'caballete', name: 'Caballete de Artista', category: 'A medida' },
  { file: 'matera', name: 'Matera Eucaliptus', category: 'A medida' },
  { file: 'pizarra', name: 'Pizarra de Madera Doble', category: 'A medida' },
];

function svg({ name, category }) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600">
  <defs>
    <linearGradient id="wood" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#a0704e"/>
      <stop offset="100%" stop-color="#6d4a2f"/>
    </linearGradient>
    <pattern id="grain" x="0" y="0" width="120" height="24" patternUnits="userSpaceOnUse">
      <path d="M0 12 Q60 6 120 12" stroke="#8b5e3c" stroke-width="1.2" fill="none" opacity="0.25"/>
      <path d="M0 18 Q60 22 120 18" stroke="#5a3d26" stroke-width="0.8" fill="none" opacity="0.2"/>
    </pattern>
  </defs>
  <rect width="800" height="600" fill="url(#wood)"/>
  <rect width="800" height="600" fill="url(#grain)"/>
  <rect x="80" y="170" width="640" height="260" rx="20" fill="#faf8f5" opacity="0.10"/>
  <text x="400" y="275" font-family="Georgia, serif" font-size="38" font-weight="300" fill="#faf8f5" text-anchor="middle" dominant-baseline="middle">${name}</text>
  <text x="400" y="325" font-family="Inter, sans-serif" font-size="13" letter-spacing="4" fill="#c9a87c" text-anchor="middle" dominant-baseline="middle">${category.toUpperCase()}</text>
</svg>`;
}

products.forEach((p) => {
  const filePath = path.join(imagesDir, `${p.file}.svg`);
  fs.writeFileSync(filePath, svg(p), 'utf8');
  console.log('Created', filePath);
});

console.log('Done');
