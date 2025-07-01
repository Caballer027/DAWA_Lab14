// src/app/contacto/page.tsx

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contacto - Mi Sitio Optimizado',
  description: 'Ponte en contacto con nosotros para cualquier consulta o colaboración.',
  keywords: ['contacto', 'formulario', 'soporte'],
  openGraph: {
    title: 'Contáctanos',
    description: 'Estamos aquí para ayudarte.',
    images: ['/images/contact-image.png'], // Asegúrate de tener esta imagen en /public/images/
    type: 'website', // Usado 'website' para compatibilidad con Next.js Metadata
  },
};

export default function ContactoPage() {
  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">Contáctanos</h1>
      <p>Envíanos un mensaje y te responderemos a la brevedad.</p>
      {/* Formulario de contacto u otra información... */}
    </main>
  );
}