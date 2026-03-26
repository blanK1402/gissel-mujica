export var generateSitemap = function () {
    var baseUrl = 'https://gisselmujica.com';
    var today = new Date().toISOString().split('T')[0];
    var urls = [
        { loc: baseUrl, priority: '1.0', changefreq: 'yearly' },
        { loc: "".concat(baseUrl, "/services"), priority: '0.9', changefreq: 'yearly' },
        { loc: "".concat(baseUrl, "/about"), priority: '0.8', changefreq: 'yearly' },
        { loc: "".concat(baseUrl, "/contact"), priority: '0.8', changefreq: 'monthly' },
        { loc: "".concat(baseUrl, "/faq"), priority: '0.8', changefreq: 'yearly' },
    ];
    var sitemap = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<urlset xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\">\n".concat(urls
        .map(function (url) { return "  <url>\n    <loc>".concat(url.loc, "</loc>\n    <lastmod>").concat(today, "</lastmod>\n    <changefreq>").concat(url.changefreq, "</changefreq>\n    <priority>").concat(url.priority, "</priority>\n  </url>"); })
        .join('\n'), "\n</urlset>");
    return sitemap;
};
