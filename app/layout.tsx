import type { Metadata } from "next";
import "./globals.css";
import "./intelligence-model.css";

export const metadata: Metadata = {
  title: "Sterling Health Technologies | Responsible Healthcare Intelligence",
  description: "Sterling Health Technologies develops clinician-led systems combining deterministic clinical logic with probabilistic intelligence.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
