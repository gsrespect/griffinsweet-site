# Griffin Sweet — Real Estate Website

Personal website for Griffin Sweet, Estates Agent at The Agency in Los Angeles.

**Stack:** Next.js 14 + Tailwind CSS + Vercel

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Architecture

```
lib/config.js          ← THE file. All content lives here. Change anything.

components/            ← Each section is its own file
  Hero.js              — Full-screen photo hero
  SoldProperties.js    — Photo grid of real sales
  Neighborhoods.js     — Scrolling marquee
  Testimonials.js      — Client reviews (social proof)
  About.js             — Bio, stats, awards, education
  Contact.js           — Form + direct contact info
  ContactForm.js       — Lead capture form → Follow Up Boss
  Nav.js               — Transparent → white on scroll
  Footer.js            — Copyright, social links

app/
  layout.js            ← Global: FUB pixel, Google Analytics, SEO, structured data
  page.js              ← Homepage: renders sections in order from config
  properties/page.js   ← TheMLS idxcellent™ property search (live)
  api/contact/route.js ← Serverless: form → Follow Up Boss API
  not-found.js         ← Custom 404 page
  sitemap.js           ← Auto-generated sitemap
  robots.js            ← SEO robots.txt
```

## How to Update Content

Edit `lib/config.js` — that's it. All content flows from there:
- Agent info, contact details
- Sold properties (add/remove/reorder)
- Neighborhoods list
- Bio paragraphs
- Stats, awards, education
- Testimonials
- Social links
- **Section order** — rearrange `homepageSections` array to reorder the homepage

## Integrations

| Integration | Status | How it works |
|---|---|---|
| **Follow Up Boss Pixel** | ✅ Live | Fires on every page via `layout.js` |
| **FUB Lead API** | ✅ Ready | Form submissions → FUB CRM (add API key in Vercel env vars) |
| **TheMLS IDX** | ✅ Live | idxcellent™ iframe on `/properties` |
| **Google Analytics** | 🔲 Ready | Add `NEXT_PUBLIC_GA_ID` env var to activate |
| **SEO** | ✅ Live | Structured data, sitemap, robots.txt, Open Graph |

## Environment Variables

Set these in **Vercel Dashboard → Settings → Environment Variables**:

| Variable | Required | Description |
|---|---|---|
| `FUB_API_KEY` | For lead capture | Follow Up Boss API key (Admin → API) |
| `NEXT_PUBLIC_GA_ID` | Optional | Google Analytics 4 ID (G-XXXXXXXXXX) |

## Deploy

Connected to Vercel via GitHub. Push to `main` = auto deploy.

---

DRE# 02078712 · The Agency · Los Angeles
