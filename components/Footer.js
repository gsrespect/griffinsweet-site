import { siteConfig } from '@/lib/config';

export default function Footer() {
  const { agent, socials } = siteConfig;

  return (
    <footer className="px-6 md:px-12 py-10 border-t border-border bg-white">
      {/* Social Links */}
      <div className="flex justify-center gap-6 mb-10">
        {socials.instagram && (
          <a href={socials.instagram} target="_blank" rel="noopener noreferrer" className="text-[0.68rem] font-medium tracking-[0.1em] uppercase text-text-light hover:text-black transition-colors">
            Instagram
          </a>
        )}
        {socials.linkedin && (
          <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-[0.68rem] font-medium tracking-[0.1em] uppercase text-text-light hover:text-black transition-colors">
            LinkedIn
          </a>
        )}
        {socials.tiktok && (
          <a href={socials.tiktok} target="_blank" rel="noopener noreferrer" className="text-[0.68rem] font-medium tracking-[0.1em] uppercase text-text-light hover:text-black transition-colors">
            TikTok
          </a>
        )}
      </div>

      {/* Logos — Maltman | divider | Agency */}
      <div className="flex items-center justify-center gap-6 mb-8">
        <img
          src="/images/maltman-logo.png"
          alt="Griffin Sweet — Maltman Logo"
          className="h-10 md:h-12 w-auto object-contain"
        />
        <div className="w-px h-10 bg-border" />
        <a href={socials.agencyProfile} target="_blank" rel="noopener noreferrer">
          <img
            src="/images/agency-logo.jpg"
            alt="The Agency"
            className="h-8 md:h-10 w-auto object-contain"
          />
        </a>
      </div>

      {/* Legal */}
      <div className="text-center text-[0.62rem] text-text-lighter leading-[1.8]">
        © {new Date().getFullYear()} {agent.name} · {agent.brokerage}
        <br />
        DRE# {agent.dre} · Equal Housing Opportunity
      </div>
    </footer>
  );
}
