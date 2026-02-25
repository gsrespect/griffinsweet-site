import { siteConfig } from '@/lib/config';

export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${siteConfig.seo.siteUrl}/sitemap.xml`,
  };
}
