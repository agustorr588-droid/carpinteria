import { MetadataRoute } from "next";
import { products } from "./data/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://maderanoble.uy";

  const staticRoutes = [
    { url: baseUrl, lastModified: new Date(), priority: 1.0 },
    { url: `${baseUrl}/#catalogo`, lastModified: new Date(), priority: 0.9 },
    { url: `${baseUrl}/#nosotros`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/#testimonios`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/#contacto`, lastModified: new Date(), priority: 0.8 },
  ];

  const productRoutes = products.map((product) => ({
    url: `${baseUrl}/#catalogo`,
    lastModified: new Date(),
    priority: 0.7,
  }));

  return [...staticRoutes, ...productRoutes];
}
