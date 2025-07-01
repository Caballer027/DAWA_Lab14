// src/app/page.tsx
'use client';

import Image from "next/image";
import dynamic from "next/dynamic";

const DynamicComponent = dynamic(() => import("../app/components/LargeComponent"), {
  ssr: false,
  loading: () => <p>Cargando componente...</p>,
});

export default function Home() {
  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">Bienvenido a mi página optimizada</h1>
      <p>Aprende cómo mejorar el rendimiento y SEO en Next.js.</p>

      <h2 className="text-xl font-bold mt-8 mb-4">Optimización de Imágenes</h2>
      <Image
        src="/images/seo-image.png"
        width={400}
        height={200}
        alt="Ejemplo de imagen optimizada"
        priority
      />
      <p className="mt-2 text-sm">Esta imagen se carga de forma optimizada y adaptable gracias a next/image.</p>

      <h2 className="text-xl font-bold mt-8 mb-4">Carga Diferida de Componentes</h2>
      <DynamicComponent />
      <p className="mt-2 text-sm">Este es un componente que se carga solo cuando es necesario (lazy loading).</p>

      <h2 className="text-xl font-bold mt-8 mb-4">Optimización de Fuentes Web</h2>
      <h2 style={{ fontFamily: "sans-serif", fontSize: "24px", fontWeight: "bold" }}>
        Texto con <code>sans-serif</code> (sin Inter)
      </h2>
      <h2 style={{ fontSize: "24px", fontWeight: "bold" }}>
        Texto global con fuente Inter (debería verse distinta)
      </h2>
      <h2 style={{ fontFamily: "serif", fontSize: "24px", fontWeight: "bold" }}>
        Texto con <code>serif</code> (fuente con serifas)
      </h2>
      <p className="mt-2 text-sm">Next.js permite cargar fuentes de Google optimizadas para mejorar el rendimiento.</p>
    </main>
  );
}