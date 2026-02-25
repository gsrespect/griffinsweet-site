'use client';

import { useState } from 'react';
import { siteConfig } from '@/lib/config';

export default function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    offMarket: null,
  });
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus('sent');
        setForm({ name: '', email: '', phone: '', message: '', offMarket: null });

        // Also fire FUB tracking event for the form submission
        if (typeof window !== 'undefined' && window.widgetTracker) {
          window.widgetTracker('identify', form.email);
          window.widgetTracker('send', 'event', 'Contact', 'Form Submission');
        }
      } else {
        throw new Error('Failed');
      }
    } catch {
      // Fallback: open email client
      const subject = encodeURIComponent(`Website Inquiry from ${form.name}`);
      const body = encodeURIComponent(
        `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\n\n${form.message}`
      );
      window.location.href = `mailto:${siteConfig.agent.email}?subject=${subject}&body=${body}`;
      setStatus('sent');
    }
  };

  if (status === 'sent') {
    return (
      <div className="text-center py-12">
        <div className="font-serif text-2xl text-black mb-3">Thank you</div>
        <p className="text-[0.88rem] text-text-light font-light">
          I&apos;ll be in touch shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-[520px] mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-[0.62rem] tracking-[0.15em] uppercase text-text-lighter font-medium mb-2">
            Name *
          </label>
          <input
            type="text"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full border border-border bg-white px-4 py-3 text-[0.88rem] text-black font-light focus:outline-none focus:border-black transition-colors"
            placeholder="Your name"
          />
        </div>
        <div>
          <label className="block text-[0.62rem] tracking-[0.15em] uppercase text-text-lighter font-medium mb-2">
            Phone
          </label>
          <input
            type="tel"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="w-full border border-border bg-white px-4 py-3 text-[0.88rem] text-black font-light focus:outline-none focus:border-black transition-colors"
            placeholder="(310) 555-0000"
          />
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-[0.62rem] tracking-[0.15em] uppercase text-text-lighter font-medium mb-2">
          Email *
        </label>
        <input
          type="email"
          required
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full border border-border bg-white px-4 py-3 text-[0.88rem] text-black font-light focus:outline-none focus:border-black transition-colors"
          placeholder="you@email.com"
        />
      </div>
      <div className="mb-4">
        <label className="block text-[0.62rem] tracking-[0.15em] uppercase text-text-lighter font-medium mb-3">
          Interested in off-market properties?
        </label>
        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => setForm({ ...form, offMarket: true })}
            className={`px-5 py-2.5 text-[0.7rem] font-medium tracking-[0.1em] uppercase border transition-all duration-300 ${
              form.offMarket === true
                ? 'bg-black text-white border-black'
                : 'bg-white text-text-light border-border hover:border-black hover:text-black'
            }`}
          >
            Yes, please
          </button>
          <button
            type="button"
            onClick={() => setForm({ ...form, offMarket: false })}
            className={`px-5 py-2.5 text-[0.7rem] font-medium tracking-[0.1em] uppercase border transition-all duration-300 ${
              form.offMarket === false
                ? 'bg-black text-white border-black'
                : 'bg-white text-text-light border-border hover:border-black hover:text-black'
            }`}
          >
            Not right now
          </button>
        </div>
      </div>
      <div className="mb-6">
        <label className="block text-[0.62rem] tracking-[0.15em] uppercase text-text-lighter font-medium mb-2">
          Message
        </label>
        <textarea
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          rows={4}
          className="w-full border border-border bg-white px-4 py-3 text-[0.88rem] text-black font-light focus:outline-none focus:border-black transition-colors resize-none"
          placeholder="Tell me about what you're looking for..."
        />
      </div>
      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full text-[0.7rem] font-medium tracking-[0.16em] uppercase text-black border border-black px-8 py-3.5 transition-all duration-300 hover:bg-black hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'sending' ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}
