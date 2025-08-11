"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var path = require("path");
var fs_1 = require("fs");
var jsonPath = path.resolve(__dirname, '../data/spawanie_zachodniopomorskie_uslugi.json');
var rawDescriptions = JSON.parse((0, fs_1.readFileSync)(jsonPath, 'utf-8'));
var BASE_URL = process.env.APP_URL || 'https://bienkowski.dev';
var descriptions = rawDescriptions;
function generateSitemap() {
    var urls = descriptions.map(function (entry) {
        var slugCityParam = "".concat(entry.service_slug, "~").concat(entry.slugCity);
        return "".concat(BASE_URL, "/").concat(slugCityParam);
    });
    var sitemap = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<urlset xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\">\n".concat(urls
        .map(function (url) { return "\n  <url>\n    <loc>".concat(url, "</loc>\n    <lastmod>").concat(new Date().toISOString(), "</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.8</priority>\n  </url>\n"); })
        .join(''), "\n</urlset>");
    var sitemapPath = path.join(process.cwd(), 'public', 'sitemap.xml');
    fs.writeFileSync(sitemapPath, sitemap);
    console.log('Sitemap.xml wygenerowany pod:', sitemapPath);
}
generateSitemap();
