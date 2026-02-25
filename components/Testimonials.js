import { siteConfig } from '@/lib/config';

export default function Testimonials() {
  const { testimonials } = siteConfig;

  if (!testimonials || testimonials.length === 0) return null;

  return (
    <section className="py-16 md:py-24 px-6 md:px-12 bg-white border-t border-border" id="testimonials">
      <div className="text-[0.68rem] font-medium tracking-[0.2em] uppercase text-text-light mb-12 text-center reveal">
        Client Testimonials
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1200px] mx-auto">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className={`reveal ${i > 0 ? `reveal-d${Math.min(i, 4)}` : ''}`}
          >
            <blockquote className="text-[0.92rem] leading-[1.85] text-text-light font-light italic mb-6">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <div className="text-[0.78rem] text-black font-medium">
              {t.name}
            </div>
            {t.detail && (
              <div className="text-[0.68rem] text-text-lighter mt-0.5">
                {t.detail}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
