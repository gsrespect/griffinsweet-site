import { siteConfig } from '@/lib/config';
import ContactForm from './ContactForm';

export default function Contact() {
    const { agent } = siteConfig;

  return (
        <section className="py-16 md:py-24 px-6 md:px-12 bg-offwhite">
          <div className="max-w-[960px] mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-[clamp(1.8rem,3vw,2.5rem)] text-black mb-4 reveal">
                Have a Question? Say Hi
    </h2>
              <p className="text-[0.88rem] text-text-light font-light max-w-[480px] mx-auto leading-[1.7] reveal reveal-d1">
                Whether you are selling, investing, buying or exploring — I would love to hear from you.
    </p>
    </div>

  {/* Contact Form */}
          <div className="mb-14 reveal reveal-d2">
                      <ContactForm />
            </div>

  {/* Direct Contact Info */}
          <div className="flex justify-center gap-8 md:gap-12 flex-wrap pt-10 border-t border-border reveal reveal-d3">
                      <div className="text-center">
                        <div className="text-[0.62rem] tracking-[0.15em] uppercase text-text-lighter font-medium mb-1">
                          Phone
            </div>
              <a href={`tel:${agent.phoneTel}`} className="text-[0.9rem] text-black hover:text-text-light transition-colors">
{agent.phone}
  </a>
  </div>
          <div className="text-center">
              <div className="text-[0.62rem] tracking-[0.15em] uppercase text-text-lighter font-medium mb-1">
                Email
  </div>
            <a href={`mailto:${agent.email}`} className="text-[0.9rem] text-black hover:text-text-light transition-colors">
{agent.email}
  </a>
  </div>
          <div className="text-center">
              <div className="text-[0.62rem] tracking-[0.15em] uppercase text-text-lighter font-medium mb-1">
                Office
  </div>
            <span className="text-[0.9rem] text-black">{agent.office}</span>
  </div>
  </div>
  </div>
  </section>
  );
}
