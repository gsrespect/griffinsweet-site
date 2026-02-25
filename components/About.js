import { siteConfig } from '@/lib/config';

export default function About() {
  const { agent, stats, bio, awards, education } = siteConfig;

  return (
    <section className="py-20 md:py-28 px-6 md:px-12 bg-white" id="about">
      <div className="max-w-[1100px] mx-auto">
        <div className="text-[0.68rem] font-medium tracking-[0.2em] uppercase text-text-light mb-12 reveal">
          About
        </div>

        {/* Photo + Name row */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-14 items-start mb-12 reveal reveal-d1">
          <img
            src={agent.photo}
            alt={agent.name}
            className="w-full md:w-[400px] aspect-[3/4] object-cover object-top flex-shrink-0"
            loading="lazy"
          />
          <div className="pt-2">
            <h2 className="font-serif text-[clamp(2rem,3.5vw,3rem)] text-black leading-[1.1] mb-2">
              {agent.name}
            </h2>
            <div className="font-serif text-lg italic text-text-light mb-8">
              Sweet Real Estate
            </div>

            {bio.map((paragraph, i) => (
              <p
                key={i}
                className="text-[0.92rem] leading-[1.85] text-text-light font-light mb-5"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Stats — shown when populated */}
        {stats && stats.length > 0 && (
          <div className="flex gap-8 md:gap-12 py-8 my-8 border-t border-b border-border reveal reveal-d2">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="font-serif text-2xl md:text-3xl text-black leading-none mb-1">
                  {stat.number}
                </div>
                <div className="text-[0.65rem] tracking-[0.12em] uppercase text-text-lighter font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Awards & Education */}
        <div className="text-[0.78rem] text-text-light leading-[1.8] font-light pt-8 border-t border-border reveal reveal-d2">
          <span className="text-text-primary font-medium">Awards:</span>{' '}
          {awards.join(' · ')}
          <br />
          <span className="text-text-primary font-medium">Education:</span>{' '}
          {education.join(' · ')}
          <br />
          <span className="text-text-primary font-medium">License:</span>{' '}
          DRE# {agent.dre}
        </div>

        {/* CTA */}
        <div className="mt-10 reveal reveal-d3">
          <a
            href="#contact"
            className="inline-block text-[0.7rem] font-medium tracking-[0.16em] uppercase text-black border border-black px-8 py-3.5 transition-all duration-300 hover:bg-black hover:text-white"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
