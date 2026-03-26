import { useEffect } from 'react';
import { generateSitemap } from '../utils/sitemap';

export const SitemapPage: React.FC = () => {
  useEffect(() => {
    const sitemapContent = generateSitemap();
    const blob = new Blob([sitemapContent], { type: 'application/xml' });
    const url = URL.createObjectURL(blob);
    window.location.href = url;
  }, []);

  return null;
};
