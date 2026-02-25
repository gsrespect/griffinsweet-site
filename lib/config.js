// ═══════════════════════════════════════════════════
// SITE CONFIG — Edit this file to update all content
// This is the single source of truth for your site.
// For Sweet Sites: this becomes the per-agent config.
// ═══════════════════════════════════════════════════

export const siteConfig = {
  // ─── Agent Info ───
  agent: {
    name: 'Griffin Sweet',
    title: 'Real Estate',
    brokerage: 'The Agency',
    dre: '02078712',
    phone: '(310) 339-1171',
    phoneTel: '+13103391171',
    email: 'Griffin.Sweet@theagencyre.com',
    office: '11777 San Vicente Blvd #850, Los Angeles, CA 90049 · 12080 Ventura Place, Unit A-D, Studio City, CA',
    photo: '/images/griffin-headshot.jpg',
  },

  // ─── SEO ───
  seo: {
    siteUrl: 'https://www.griffinsweet.com',
    title: 'Griffin Sweet | Estates Agent at The Agency — Los Angeles Luxury Real Estate',
    description: 'Griffin Sweet is a top-producing Estates Agent at The Agency in Los Angeles, specializing in luxury homes across Mar Vista, Silver Lake, Hollywood Hills, Sherman Oaks, Studio City, Santa Monica, Beverly Hills and Brentwood. DRE# 02078712.',
    ogImage: '/og-image.jpg', // 1200x630 image for social shares
  },

  // ─── Follow Up Boss ───
  fub: {
    trackingCode: 'WT-FFQUWKYJ',
  },

  // ─── Social Links ───
  socials: {
    instagram: 'https://www.instagram.com/gsrespect/',
    linkedin: 'https://www.linkedin.com/in/griffin-sweet-a969282b/',
    tiktok: 'https://www.tiktok.com/@gsrespect',
    agencyProfile: 'https://www.theagencyre.com/agent/griffin-sweet',
  },

  // ─── Stats ───
  // Uncomment when ready to show stats
  stats: [],

  // ─── Sold Properties ───
  soldProperties: [
    {
      price: '$3,315,000',
      address: '4620 Morse Ave, Sherman Oaks',
      image: 'https://images.homes.com/listings/102/5946037374-095070412/4620-morse-ave-sherman-oaks-ca-primaryphoto.jpg',
    },
    {
      price: '$3,025,000',
      address: '5500 Vanalden Ave, Tarzana',
      image: 'https://images.homes.com/listings/102/9693538604-146120281/5500-vanalden-ave-tarzana-ca-primaryphoto.jpg',
    },
    {
      price: '$2,985,000',
      address: '2042 N Sycamore Ave, Los Angeles',
      image: 'https://images.homes.com/listings/102/8084889222-152530021/2042-n-sycamore-ave-los-angeles-ca-primaryphoto.jpg',
    },
    {
      price: '$2,750,000',
      address: '3504 Maplewood Ave, Los Angeles',
      image: 'https://images.homes.com/listings/102/7664005453-621394661/3504-maplewood-ave-los-angeles-ca-primaryphoto.jpg',
    },
    {
      price: '$2,690,000',
      address: '4425 Bellingham Ave, Studio City',
      image: 'https://images.homes.com/listings/102/1404037492-977999931/4425-bellingham-ave-studio-city-ca-primaryphoto.jpg',
    },
    {
      price: '$2,550,000',
      address: '3774 Boise Ave, Mar Vista',
      image: 'https://images.homes.com/listings/102/7721693234-008278791/3774-boise-ave-los-angeles-ca-primaryphoto.jpg',
    },
  ],

  // ─── Neighborhoods ───
  neighborhoods: [
    'Mar Vista',
    'Silver Lake',
    'Hollywood Hills',
    'Sherman Oaks',
    'Studio City',
    'Tarzana',
    'Santa Monica',
    'Venice',
    'Brentwood',
    'Beverly Hills',
  ],

  // ─── Bio ───
  bio: [
    'Los Angeles native and Estates Agent Griffin Sweet is known for his polished, strategic and highly personalized approach to representing luxury homes across the city. With deep roots in LA and a refined understanding of its architecture, micro-markets and lifestyle patterns, Griffin guides clients through complex transactions with clarity, discretion and exceptional attention to detail.',
    'Griffin\'s career has been shaped within The Agency\'s top-performing ranks, working alongside many of the firm\'s most accomplished agents on significant transactions across Los Angeles. His portfolio includes new construction, architecturally notable homes, and high-value estates — a depth of experience that reinforces his reputation as a trusted advisor for buyers, sellers and investors.',
    'A lifelong Angeleno, Griffin brings meaningful insight into the city\'s diverse neighborhoods from the beach communities to the canyons and hillside estates. His style blends precision, calm confidence and a tailored client-first approach.',
  ],

  // ─── Awards ───
  awards: ['All-Star Award', 'Rising Star Award', 'Top 1% of Agents Nationwide'],
  education: ['University of Arizona', 'Semester at Sea'],

  // ─── Testimonials (Real reviews from Zillow) ───
  testimonials: [
    {
      quote: 'Griffin is an incredibly hard-working individual. This guy quite literally went door-to-door in a neighborhood we liked, knocked, and asked people if they were willing to sell. That type of drive and dedication is rare to find.',
      name: 'Zillow Reviewer',
      detail: 'Buyer',
    },
    {
      quote: 'My husband and I had an exceptional experience working with Griffin. As an LA native, he is very knowledgeable of the area and has great relationships with local brokers. Griffin is also a very shrewd negotiator and our condo was under contract 3 days after listing it!',
      name: 'Zillow Reviewer',
      detail: 'Seller',
    },
    {
      quote: 'He navigated us through an incredibly complex purchase of our first home and we couldn\'t be happier. He\'s very easy to work with, responsive and excellent at what he does.',
      name: 'Zillow Reviewer',
      detail: 'Buyer',
    },
    {
      quote: 'He has one thing many other brokers don\'t and that is passion. If he takes on your project he will work hard for you too. My house sold pretty fast. Griffin is a friend for life.',
      name: 'Zillow Reviewer',
      detail: 'Seller',
    },
  ],

  // ─── Page Sections (reorder these to rearrange the homepage) ───
  // LAUNCH: Minimal — Hero + About + Contact
  // TO ADD BACK: Just uncomment the section name below and it appears.
  // 'SoldProperties'    — add back when you have your own professional property photos
  // 'Neighborhoods'     — add back anytime for the scrolling marquee
  // 'Testimonials'      — add back when you have real client quotes
  homepageSections: [
    'Hero',
    // 'SoldProperties',
    // 'Neighborhoods',
    'Testimonials',
    'About',
    'Contact',
  ],
};
