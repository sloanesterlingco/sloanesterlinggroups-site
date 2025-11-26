import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./Footer";

export const metadata: Metadata = {
  title: "Sloane Sterling — Healthcare Redefined",
  description:
    "Sloane Sterling, PA-C — Clinical expertise, AI innovation, patient-centered design, and performance engineering.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-white">
        <Navbar />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
