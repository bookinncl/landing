import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bookinn — Reservas directas para hoteles boutique",
  description: "Más reservas directas, menos comisiones. Motor de disponibilidad + checkout sencillo.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
