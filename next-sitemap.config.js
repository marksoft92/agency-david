/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.APP_URL || "https://bienkowski.dev",
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: "daily",
  priority: 0.7,
  exclude: ['/secret', '/api/*'],
  additionalSitemaps: [
    `${process.env.APP_URL || 'https://bienkowski.dev'}/sitemap-blog.xml`,
    `${process.env.APP_URL || 'https://bienkowski.dev'}/sitemap-city.xml`,
  ],
  alternateRefs: [
    {
      href: `${process.env.APP_URL || 'https://bienkowski.dev'}/pl`,
      hreflang: "pl",
    },
    {
      href: `${process.env.APP_URL || 'https://bienkowski.dev'}/en`,
      hreflang: "en",
    },
    {
      href: `${process.env.APP_URL || 'https://bienkowski.dev'}/de`,
      hreflang: "de",
    },
  ],
};
