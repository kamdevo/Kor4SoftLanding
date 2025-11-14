import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kor4Soft - Landing Page",
  description: "Landing page de Kor4Soft",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}

