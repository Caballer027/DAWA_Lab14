// src/app/blog/page.tsx

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog - Mi Sitio Optimizado',
  description: 'Lee los últimos artículos sobre desarrollo web, SEO y optimización.',
  keywords: ['blog', 'desarrollo web', 'SEO', 'artículos'],
  openGraph: {
    title: 'Blog de Desarrollo Web',
    description: 'Explora temas avanzados de optimización y SEO.',
    images: ['/images/blog-image.png'],
    type: 'website',
  },
};

export default function BlogPage() {
  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">Nuestro Blog</h1>
      <p>Aquí encontrarás nuestros últimos artículos y publicaciones.</p>
      {/* Contenido del blog... */}
    </main>
  );
}