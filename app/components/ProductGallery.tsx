"use client";

import { useState } from "react";
import Image from "next/image";

interface ProductGalleryProps {
  name: string;
  images: string[];
}

export function ProductGallery({ name, images }: ProductGalleryProps) {
  const [activeImage, setActiveImage] = useState(0);
  const currentImage = images[activeImage] ?? images[0];
  const isRemoteImage = currentImage.startsWith("http");

  return (
    <div>
      <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-[#f3efe9]/10 bg-[#151515]">
        {isRemoteImage ? (
          <img src={currentImage} alt={`${name} - vista ${activeImage + 1}`} className="h-full w-full object-cover" />
        ) : (
          <Image src={currentImage} alt={`${name} - vista ${activeImage + 1}`} fill className="object-cover" priority />
        )}
      </div>
      <div className="mt-4 grid grid-cols-4 gap-3">
        {images.map((image, index) => {
          const remote = image.startsWith("http");
          return (
            <button
              key={`${image}-${index}`}
              type="button"
              onClick={() => setActiveImage(index)}
              className={`relative aspect-square overflow-hidden rounded-xl border-2 bg-[#151515] transition-all ${
                activeImage === index ? "border-[#caa24f]" : "border-transparent opacity-60 hover:opacity-100"
              }`}
              aria-label={`Ver vista ${index + 1} de ${name}`}
              aria-pressed={activeImage === index}
            >
              {remote ? (
                <img src={image} alt="" className="h-full w-full object-cover" />
              ) : (
                <Image src={image} alt="" fill className="object-cover" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
