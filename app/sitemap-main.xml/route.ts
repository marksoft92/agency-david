// app/api/sitemap-main/route.ts
import { NextResponse } from 'next/server';

const baseUrl = 'https://bienkowski.dev';

const pages = [
    'aplikacje-mobilne',
    'aplikacje-webowe',
    'sklepy-internetowe',
    'seo-marketing',
    'kontakt',
    'oferta',
    'blog',
    'polityka-prywatności',
    'cookies',
    'smart-home-panele',
    'strony-internetowe',
    'automatyzacje',
    'monitoring',
    'smart-home',
    'smart-home-panele'
];





export async function GET() {
    const urls: any = [];


    for (const path of pages) {
        urls.push(`${baseUrl}/${path}`);
    }


    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
            .map(
                (url: any) => `
  <url>
    <loc>${url}</loc>
    <changefreq>daily</changefreq>
    <priority>0.7</priority>
  </url>
`
            )
            .join('')}
</urlset>`;

    return new NextResponse(sitemap, {
        headers: {
            'Content-Type': 'application/xml',
        },
    });
}
