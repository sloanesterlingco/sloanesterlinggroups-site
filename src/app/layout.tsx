import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./Footer";

export const metadata: Metadata = {
  title: "Sloane Sterling, PA-C | Healthcare Innovation & AI Integration",
  description:
    "Sloane Sterling, PA-C blends clinical expertise with modern AI systems to elevate patient care, workflow efficiency, and intelligent medical data. Founder of Sloane Sterling Groups and MyHealthVaultAI.",

  metadataBase: new URL("https://sloanesterling.com"),

  openGraph: {
    title: "Sloane Sterling — Healthcare Redefined",
    description:
      "Leading healthcare innovation through AI-enhanced workflows, precision design, and intelligent patient experience.",
    url: "https://sloanesterling.com",
    siteName: "Sloane Sterling Groups",
    images: [
      {
        url: "/sloane-og-banner.png",
        width: 1200,
        height: 630,
        alt: "Sloane Sterling — Healthcare Innovation & AI Integration",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Sloane Sterling — Healthcare Redefined",
    description:
      "Healthcare experience elevated through clinical excellence and AI-driven clarity.",
    images: ["/sloane-og-banner.png"],
    creator: "@SloaneSterling",
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* --- PERSON SCHEMA --- */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Sloane Sterling, PA-C",
              alternateName: "Sloane Sterling",
              jobTitle: "Physician Associate | Healthcare AI Innovator",
              url: "https://sloanesterling.com",
              image: "https://sloanesterling.com/sloane-og-banner.png",
              worksFor: {
                "@type": "Organization",
                name: "Sloane Sterling Groups",
                url: "https://sloanesterling.com",
              },
              sameAs: [
                "https://www.linkedin.com/in/sloanesterling",
                "https://twitter.com/SloaneSterling",
                "https://www.instagram.com/sloanesterling",
              ],
            }),
          }}
        />

        {/* --- ORGANIZATION SCHEMA --- */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Sloane Sterling Groups",
              url: "https://sloanesterling.com",
              logo: "https://sloanesterling.com/sloane-og-banner.png",
              sameAs: [
                "https://twitter.com/SloaneSterling",
                "https://www.linkedin.com/company/sloane-sterling-groups",
              ],
            }),
          }}
        />

        {/* --- BREADCRUMB SCHEMA --- */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://sloanesterling.com",
                },
              ],
            }),
          }}
        />
      </head>

      <body className="antialiased bg-white">
        <Navbar />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
