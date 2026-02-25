import Script from 'next/script';
import { siteConfig } from '@/lib/config';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Search Properties | Los Angeles Homes for Sale',
  description: `Search homes for sale across Los Angeles with ${siteConfig.agent.name} at ${siteConfig.agent.brokerage}. Browse MLS listings in Mar Vista, Silver Lake, Hollywood Hills, Sherman Oaks, Studio City, Santa Monica and more. DRE# ${siteConfig.agent.dre}.`,
  alternates: {
    canonical: `${siteConfig.seo.siteUrl}/properties`,
  },
};

export default function PropertiesPage() {
  return (
    <>
      <Nav />
      <main className="min-h-screen bg-white">
        <div className="pt-28 pb-8 px-6 md:px-12">
          <div className="text-[0.68rem] font-medium tracking-[0.2em] uppercase text-text-light mb-4">
            Property Search
          </div>
          <h1 className="font-serif text-[clamp(2rem,4vw,3.5rem)] text-black leading-[1.1] mb-4">
            Find Your <em>Home</em>
          </h1>
          <p className="text-[0.92rem] text-text-light font-light max-w-[600px] leading-[1.7] mb-12">
            Browse available properties across Los Angeles. Use the search below to filter by
            neighborhood, price, beds, baths and more.
          </p>
        </div>

        {/* ═══ TheMLS idxcellent™ Integration ═══ */}
        <div className="px-6 md:px-12 pb-20">
          <div className="w-full max-w-[960px] mx-auto">
            <Script
              src="https://www.themls.com/IDXNET/Scripts/idxwidget.js"
              strategy="afterInteractive"
            />
            <iframe
              id="idxFrame"
              title="MLS Property Search — Los Angeles"
              style={{
                padding: 0,
                margin: 0,
                paddingTop: 0,
                border: '0px solid transparent',
                backgroundColor: 'transparent',
              }}
              frameBorder="0"
              scrolling="no"
              src="https://www.themls.com/IDXNET/Default.aspx?wid=b01Wje8lbgFKViKluuKgwPaRPXrW75VUeI0PW5ZawIsnJdPzvX6HugEQLEQL"
              width="100%"
              height="900px"
            />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
