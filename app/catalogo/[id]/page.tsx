import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Phone, Star } from "lucide-react";
import { ProductGallery } from "@/app/components/ProductGallery";
import { company } from "@/app/data/company";
import { getProductDetail } from "@/app/data/productDetails";
import { formatPrice, products } from "@/app/data/products";

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return products.map((product) => ({ id: product.id }));
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = products.find((item) => item.id === id);

  if (!product) notFound();

  const detail = getProductDetail(product.id);
  const waUrl = `https://wa.me/${company.contact.phoneRaw}?text=${encodeURIComponent(
    `Hola, quisiera consultar por el producto: ${product.name}`
  )}`;
  const averageRating = detail.reviews.reduce((sum, review) => sum + review.rating, 0) / detail.reviews.length;

  return (
    <main className="bg-[#050505] pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <Link href="/#catalogo" className="inline-flex items-center gap-2 text-sm text-[#a8a29e] hover:text-[#e8c87a] transition-colors mb-10">
          <ArrowLeft size={16} />
          Volver al catálogo
        </Link>

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-16 items-start">
          <ProductGallery name={product.name} images={detail.gallery} />

          <div>
            <p className="text-[11px] tracking-[0.34em] uppercase text-[#caa24f] font-medium mb-4">{product.category}</p>
            <h1 className="font-display text-4xl md:text-6xl font-light leading-tight text-[#f3efe9] mb-5">{product.name}</h1>
            <p className="text-[#a8a29e] text-base leading-relaxed mb-7">{product.description}</p>
            <div className="flex items-center gap-4 mb-8">
              <span className="font-display text-3xl text-[#e8c87a]">{formatPrice(product.price)}</span>
              <span className="h-5 w-px bg-[#f3efe9]/15" />
              <span className="inline-flex items-center gap-1.5 text-sm text-[#f3efe9]/70">
                <Star size={15} fill="#caa24f" className="text-[#caa24f]" />
                {averageRating.toFixed(1)} ({detail.reviews.length} reseñas)
              </span>
            </div>

            <a href={waUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#e8c87a] text-[#050505] font-medium px-7 py-3.5 hover:bg-[#efd692] transition-colors shadow-lg shadow-[#caa24f]/20">
              <Phone size={17} />
              Consultar disponibilidad
            </a>

            <div className="grid grid-cols-2 gap-x-6 gap-y-5 border-y border-[#f3efe9]/10 py-7 mt-10">
              <DetailItem label="Materiales" value={detail.materials} />
              <DetailItem label="Medidas" value={detail.dimensions} />
              <DetailItem label="Terminación" value={detail.finish} />
              <DetailItem label="Entrega estimada" value={detail.delivery} />
            </div>
          </div>
        </div>

        <section className="mt-24 grid lg:grid-cols-[0.8fr_1.2fr] gap-12 border-t border-[#f3efe9]/10 pt-12">
          <div>
            <p className="text-[11px] tracking-[0.34em] uppercase text-[#caa24f] font-medium mb-3">Experiencias</p>
            <h2 className="font-display text-4xl font-light text-[#f3efe9] mb-4">Lo que dicen de esta pieza</h2>
            <p className="text-sm leading-relaxed text-[#a8a29e]">Reseñas ilustrativas de clientes que eligieron muebles de Madera Noble.</p>
          </div>
          <div className="space-y-5">
            {detail.reviews.map((review) => (
              <article key={review.name} className="rounded-2xl border border-[#f3efe9]/10 bg-[#0a0a0a] p-6">
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-[#f3efe9] font-medium">{review.name}</h3>
                    <p className="text-xs text-[#a8a29e] mt-1">{review.date}</p>
                  </div>
                  <div className="flex gap-0.5" aria-label={`${review.rating} de 5 estrellas`}>
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star key={index} size={14} fill={index < review.rating ? "#caa24f" : "transparent"} className={index < review.rating ? "text-[#caa24f]" : "text-[#5b554d]"} />
                    ))}
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-[#c8c1b8]">“{review.comment}”</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

function DetailItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[10px] tracking-[0.25em] uppercase text-[#a8a29e] mb-1.5">{label}</p>
      <p className="text-sm text-[#f3efe9] leading-relaxed">{value}</p>
    </div>
  );
}
