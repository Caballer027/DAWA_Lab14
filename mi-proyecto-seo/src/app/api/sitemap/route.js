// src/app/api/sitemap/route.js
const BASE_URL = "https://dawa-lab14.vercel.app"; 

export async function GET() {
  const urls = ["/", "/blog", "/contacto"]; 
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls
    .map((url) => `<url><loc>${BASE_URL}${url}</loc></url>`)
    .join("")}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "text/xml",
    },
  });
}