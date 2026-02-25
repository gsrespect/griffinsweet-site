import Link from 'next/link';
import { siteConfig } from '@/lib/config';

export const metadata = {
  title: 'Page Not Found',
};

export default function NotFound() {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center px-6">
      <div className="text-center">
        <div className="text-[0.68rem] font-medium tracking-[0.2em] uppercase text-text-lighter mb-6">
          404
        </div>
        <h1 className="font-serif text-[clamp(2rem,4vw,3.5rem)] text-black leading-[1.1] mb-4">
          Page Not Found
        </h1>
        <p className="text-[0.92rem] text-text-light font-light max-w-[400px] mx-auto leading-[1.7] mb-10">
          The page you&apos;re looking for doesn&apos;t exist. Let&apos;s get you back on track.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            href="/"
            className="inline-block text-[0.7rem] font-medium tracking-[0.16em] uppercase text-black border border-black px-8 py-3.5 transition-all duration-300 hover:bg-black hover:text-white"
          >
            Home
          </Link>
          <Link
            href="/properties"
            className="inline-block text-[0.7rem] font-medium tracking-[0.16em] uppercase text-text-light border border-border px-8 py-3.5 transition-all duration-300 hover:border-black hover:text-black"
          >
            Search Properties
          </Link>
        </div>
        <div className="mt-12 text-[0.78rem] text-text-light">
          Or call me directly:{' '}
          <a href={`tel:${siteConfig.agent.phoneTel}`} className="text-black hover:text-text-light transition-colors">
            {siteConfig.agent.phone}
          </a>
        </div>
      </div>
    </main>
  );
}
