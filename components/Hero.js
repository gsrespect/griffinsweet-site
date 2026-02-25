'use client';

import { useState, useEffect } from 'react';

const heroImages = [
  'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1920&q=85',
  'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=85',
  'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=85',
  'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1920&q=85',
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="h-screen relative flex items-end overflow-hidden">
      {/* Rotating background images */}
      {heroImages.map((img, i) => (
        <div
          key={i}
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-[1.5s] ease-in-out"
          style={{
            backgroundImage: `url('${img}')`,
            opacity: i === current ? 1 : 0,
          }}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/5 to-transparent" />

      <div className="relative z-10 p-8 md:p-12 w-full animate-[fadeIn_1.2s_ease_forwards] opacity-0">
        <h1 className="font-serif text-[clamp(2.5rem,6vw,5rem)] font-normal leading-[1.05] text-white max-w-[700px]">
          Los Angeles<br /><em>Real Estate</em>
        </h1>
        <p className="text-[0.72rem] tracking-[0.18em] uppercase text-white/60 mt-6">
          Griffin Sweet &nbsp;·&nbsp; The Agency
        </p>
      </div>

      <style jsx>{`
        @keyframes fadeIn { to { opacity: 1; } }
      `}</style>
    </section>
  );
}
