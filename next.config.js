/** @type {import('next').NextConfig} */
const nextConfig = {
  // Image optimization for property photos
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.homes.com' },
      { protocol: 'https', hostname: 'imagescdn.homes.com' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
    ],
  },
  // SEO: trailing slashes for consistent URLs
  trailingSlash: false,
  // Performance
  poweredByHeader: false,
  compress: true,
  // Headers for security & caching
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          { key: 'Referrer-Policy', value: 'origin-when-cross-origin' },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
