import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/node_modules/",
    },
    sitemap: "https://maderanoble.uy/sitemap.xml",
  };
}
