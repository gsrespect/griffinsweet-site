import './globals.css';
import Script from 'next/script';
import { siteConfig } from '@/lib/config';

export const metadata = {
  metadataBase: new URL(siteConfig.seo.siteUrl),
  title: {
    default: siteConfig.seo.title,
    template: `%s | ${siteConfig.agent.name}`,
  },
  description: siteConfig.seo.description,
  keywords: [
    'Griffin Sweet',
    'Griffin Sweet real estate',
    'Griffin Sweet The Agency',
    'Los Angeles real estate agent',
    'LA luxury real estate',
    'The Agency Los Angeles',
    'Los Angeles homes for sale',
    'Mar Vista real estate',
    'Silver Lake real estate',
    'Hollywood Hills real estate',
    'Sherman Oaks real estate',
    'Studio City real estate',
    'Santa Monica real estate',
    'Beverly Hills real estate',
    'Brentwood real estate',
    'Venice real estate',
    'luxury homes Los Angeles',
    'estates agent Los Angeles',
  ],
  openGraph: {
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    url: siteConfig.seo.siteUrl,
    siteName: `${siteConfig.agent.name} — Los Angeles Real Estate`,
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: siteConfig.seo.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.agent.name} — Estates Agent at The Agency, Los Angeles`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: siteConfig.seo.siteUrl,
  },
  verification: {
    // Add your Google Search Console verification code here:
    // google: 'your-verification-code',
  },
};

// Structured Data for Google Rich Results
// Multiple schemas = more chances to appear in rich results
const structuredData = [
  // Schema 1: RealEstateAgent (primary — this is what shows in Google's knowledge panel)
  {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    '@id': `${siteConfig.seo.siteUrl}/#agent`,
    name: siteConfig.agent.name,
    jobTitle: siteConfig.agent.title,
    description: siteConfig.seo.description,
    image: siteConfig.agent.photo,
    worksFor: {
      '@type': 'RealEstateOrganization',
      name: siteConfig.agent.brokerage,
      url: 'https://www.theagencyre.com',
    },
    url: siteConfig.seo.siteUrl,
    telephone: siteConfig.agent.phoneTel,
    email: siteConfig.agent.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: '11777 San Vicente Blvd #850',
      addressLocality: 'Los Angeles',
      addressRegion: 'CA',
      postalCode: '90049',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 34.0536,
      longitude: -118.4654,
    },
    areaServed: siteConfig.neighborhoods.map((n) => ({
      '@type': 'City',
      name: `${n}, Los Angeles, CA`,
    })),
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '30',
      bestRating: '5',
    },
    sameAs: Object.values(siteConfig.socials),
    knowsAbout: [
      'Luxury Real Estate',
      'Los Angeles Real Estate',
      'Residential Sales',
      'Investment Properties',
      'New Construction',
      'Architectural Homes',
    ],
  },
  // Schema 2: Person (helps Google connect you as a real person across the web)
  {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: siteConfig.agent.name,
    jobTitle: `${siteConfig.agent.title} at ${siteConfig.agent.brokerage}`,
    url: siteConfig.seo.siteUrl,
    image: siteConfig.agent.photo,
    sameAs: Object.values(siteConfig.socials),
    worksFor: {
      '@type': 'Organization',
      name: siteConfig.agent.brokerage,
    },
    alumniOf: [
      { '@type': 'CollegeOrUniversity', name: 'University of Arizona' },
    ],
    knowsAbout: ['Real Estate', 'Los Angeles', 'Luxury Homes'],
  },
  // Schema 3: WebSite (enables sitelinks search box in Google)
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: `${siteConfig.agent.name} — Los Angeles Real Estate`,
    url: siteConfig.seo.siteUrl,
    description: siteConfig.seo.description,
    publisher: {
      '@type': 'Person',
      name: siteConfig.agent.name,
    },
  },
];

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Favicon — replace with your own */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* Follow Up Boss Pixel — fires on every page */}
        <Script id="fub-pixel" strategy="afterInteractive">
          {`
            (function(w,i,d,g,e,t){w["WidgetTrackerObject"]=g;(w[g]=w[g]||function()
            {(w[g].q=w[g].q||[]).push(arguments);}),(w[g].ds=1*new Date());(e="script"),
            (t=d.createElement(e)),(e=d.getElementsByTagName(e)[0]);t.async=1;t.src=i;
            e.parentNode.insertBefore(t,e);})
            (window,"https://widgetbe.com/agent",document,"widgetTracker");
            window.widgetTracker("create", "${siteConfig.fub.trackingCode}");
            window.widgetTracker("send", "pageview");
          `}
        </Script>

        {/* Google Analytics — uncomment and add your GA4 ID when ready */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
              `}
            </Script>
          </>
        )}

        {/* Structured Data for SEO — multiple schemas for maximum visibility */}
        {structuredData.map((schema, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      </head>
      <body className="font-sans text-text-primary bg-white">
        {children}
      </body>
    </html>
  );
}
