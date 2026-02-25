import { siteConfig } from '@/lib/config';

export default function Neighborhoods() {
  // Duplicate the list for seamless looping
  const items = [...siteConfig.neighborhoods, ...siteConfig.neighborhoods];

  return (
    <section
      className="py-14 border-t border-b border-border overflow-hidden bg-offwhite"
      id="neighborhoods"
    >
      <div className="text-[0.68rem] font-medium tracking-[0.2em] uppercase text-text-light text-center mb-8">
        Neighborhoods Served
      </div>

      <div className="marquee-track">
        {items.map((name, i) => (
          <div
            key={`${name}-${i}`}
            className="font-serif text-[clamp(1.5rem,3vw,2.2rem)] text-black whitespace-nowrap px-8 flex items-center gap-8"
          >
            <span className={i % 2 === 1 ? 'italic text-text-light' : ''}>
              {name}
            </span>
            <span className="text-text-lighter">·</span>
          </div>
        ))}
      </div>
    </section>
  );
}
