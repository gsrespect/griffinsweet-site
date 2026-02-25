import { siteConfig } from '@/lib/config';
import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import SoldProperties from '@/components/SoldProperties';
import Neighborhoods from '@/components/Neighborhoods';
import Testimonials from '@/components/Testimonials';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import RevealObserver from '@/components/RevealObserver';

// Section component map — add new sections here
const sectionComponents = {
  Hero,
  SoldProperties,
  Neighborhoods,
  Testimonials,
  About,
  Contact,
};

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        {siteConfig.homepageSections.map((sectionName) => {
          const Component = sectionComponents[sectionName];
          if (!Component) return null;
          return <Component key={sectionName} />;
        })}
      </main>
      <Footer />
      <RevealObserver />
    </>
  );
}
