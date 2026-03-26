export const generateSitemap = (): string => {
  const baseUrl = 'https://gisselmujica.com';
  const today = new Date().toISOString().split('T')[0];

  const urls = [
    { loc: baseUrl, priority: '1.0', changefreq: 'yearly' },
    { loc: `${baseUrl}/servicios`, priority: '0.9', changefreq: 'yearly' },
    { loc: `${baseUrl}/nosotros`, priority: '0.8', changefreq: 'yearly' },
    { loc: `${baseUrl}/contacto`, priority: '0.8', changefreq: 'monthly' },
    { loc: `${baseUrl}/faq`, priority: '0.8', changefreq: 'yearly' },
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return sitemap;
};
