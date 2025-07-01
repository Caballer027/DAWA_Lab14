// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Importa Inter de Google Fonts
import "./globals.css";

// Configura la fuente Inter para optimización
const inter = Inter({ subsets: ["latin"] });

// Define los metadatos para la aplicación (los del laboratorio)
export const metadata: Metadata = {
  title: "Mi App", // Título de la aplicación
  description: "Aplicación con fuente optimizada", // Descripción de la aplicación
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es"> {/* Cambia el idioma a español (es) como en el ejemplo */}
      <body className={inter.className}> {/* Aplica la clase de la fuente Inter al body */}
        {children}
      </body>
    </html>
  );
}