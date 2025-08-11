import * as fs from 'fs';
import * as path from 'path';
import { readFileSync } from 'fs';



const jsonPath = path.resolve(__dirname, '../data/spawanie_zachodniopomorskie_uslugi.json');
const rawDescriptions = JSON.parse(readFileSync(jsonPath, 'utf-8'));



const BASE_URL = process.env.APP_URL || 'https://bienkowski.dev';

type ServiceEntry = {
    slugCity: string;
    city: string;
    service_slug: string;
    service_name: string;
    description: string;
    cta: string;
    seo: {
        title: string;
        description: string;
        keywords: string;
    };
};

const descriptions = rawDescriptions as ServiceEntry[];

function generateSitemap() {
    const urls = descriptions.map(entry => {
        const slugCityParam = `${entry.service_slug}~${entry.slugCity}`;
        return `${BASE_URL}/${slugCityParam}`;
    });

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
            .map(
                url => `
  <url>
    <loc>${url}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
`
            )
            .join('')}
</urlset>`;

    const sitemapPath = path.join(process.cwd(), 'public', 'sitemap.xml');
    fs.writeFileSync(sitemapPath, sitemap);

    console.log('Sitemap.xml wygenerowany pod:', sitemapPath);
}
generateSitemap();

