'use client';

import { useState, useEffect } from 'react';
import { siteConfig } from '@/lib/config';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Sold', href: '#sold' },
    { label: 'Neighborhoods', href: '#neighborhoods' },
    { label: 'About', href: '#about' },
    { label: 'Properties', href: '/properties' },
    { label: 'Contact', href: '#contact' },
  ];

  const smoothScroll = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) {
        window.scrollTo({ top: el.offsetTop - 70, behavior: 'smooth' });
        setMobileOpen(false);
      }
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center transition-all duration-400
          ${scrolled
            ? 'bg-white/95 backdrop-blur-xl border-b border-border px-6 md:px-12 py-4'
            : 'px-6 md:px-12 py-7'
          }`}
      >
        <a
          href="#"
          className={`font-serif text-lg tracking-wide transition-colors duration-300
            ${scrolled ? 'text-black' : 'text-white'}`}
        >
          {siteConfig.agent.name}
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-10">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={(e) => smoothScroll(e, link.href)}
                className={`text-[0.7rem] font-medium tracking-[0.14em] uppercase transition-colors duration-300
                  ${scrolled
                    ? 'text-text-light hover:text-black'
                    : 'text-white/60 hover:text-white'
                  }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] z-[101]"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          <span className={`block w-[22px] h-[1.5px] transition-transform duration-300 ${scrolled ? 'bg-black' : 'bg-white'} ${mobileOpen ? 'rotate-45 translate-y-[6.5px]' : ''}`} />
          <span className={`block w-[22px] h-[1.5px] transition-opacity duration-300 ${scrolled ? 'bg-black' : 'bg-white'} ${mobileOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-[22px] h-[1.5px] transition-transform duration-300 ${scrolled ? 'bg-black' : 'bg-white'} ${mobileOpen ? '-rotate-45 -translate-y-[6.5px]' : ''}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      <div className={`fixed inset-0 z-40 bg-white flex flex-col items-center justify-center gap-8 transition-transform duration-500 ease-out ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            onClick={(e) => smoothScroll(e, link.href)}
            className="font-serif text-3xl text-black"
          >
            {link.label}
          </a>
        ))}
      </div>
    </>
  );
}
