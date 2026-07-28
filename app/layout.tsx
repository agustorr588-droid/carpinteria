import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { seo } from "./data/seo";
import { company } from "./data/company";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { WhatsAppFAB } from "./components/WhatsAppFAB";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: [...seo.keywords],
  openGraph: {
    title: seo.openGraph.title,
    description: seo.openGraph.description,
    type: "website",
    locale: seo.openGraph.locale,
    siteName: seo.openGraph.siteName,
  },
  twitter: {
    card: "summary_large_image",
    title: seo.twitter.title,
    description: seo.twitter.description,
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: seo.openGraph.url,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${cormorant.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: company.name,
              description: seo.description,
              url: seo.openGraph.url,
              telephone: company.contact.phone,
              email: company.contact.email,
              address: {
                "@type": "PostalAddress",
                streetAddress: company.contact.address.street,
                addressLocality: company.contact.address.city,
                addressCountry: company.contact.address.country,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  opens: "09:00",
                  closes: "18:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Saturday",
                  opens: "09:00",
                  closes: "13:00",
                },
              ],
            }),
          }}
        />
      </head>
      <body className="antialiased">
        <div className="paper-grain" aria-hidden="true" />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFAB />
      </body>
    </html>
  );
}
