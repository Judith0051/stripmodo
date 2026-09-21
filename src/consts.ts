/**
 * Central site configuration. Everything that is reused across pages lives here
 * so new pages inherit correct SEO, navigation and structured data automatically.
 */

export const SITE = {
  name: 'Stripmodo',
  legalName: 'Stripmodo',
  tagline: 'Independent StripChat token safety guides',
  description:
    'Independent, safety-first guides about StripChat tokens: how legitimate free-token promotions work, token prices, how tokens are used, and how to avoid scams, fake hacks and mod APK malware.',
  origin: 'https://judith0051.github.io',
  base: '/stripmodo',
  lang: 'en',
  email: 'editorial@stripmodo.pages.dev',
  // Global "last reviewed" date shown as lastmod in the sitemap.
  updated: '2026-09-17',
  updatedLong: 'September 17, 2026',
  pricesChecked: 'September 17, 2026',
  author: 'Stripmodo Editorial Team',
  authorDescription:
    'Our editorial team researches how adult-platform virtual currencies work, documents common scam patterns and fact-checks every guide against primary sources. We do not sell tokens and we never ask readers for login credentials.',
};

/** YouTube Shorts embed featured at the top of every guide. Metadata verified Sept 2026. */
export const VIDEO = {
  id: '2vMvOf2tUj8',
  name: 'Stripchat Hack Mod on iOS & Android 😲 Watch This Before You Click (2026-2027)',
  watchUrl: 'https://www.youtube.com/shorts/2vMvOf2tUj8',
  embedUrl: 'https://www.youtube.com/embed/2vMvOf2tUj8',
  thumbnailUrl: 'https://i.ytimg.com/vi/2vMvOf2tUj8/hqdefault.jpg',
  uploadDate: '2026-09-17',
  publisherName: 'SMCRecordings',
  description:
    'A short safety video showing why “Stripchat token hack” and “mod APK” offers are usually scams built to steal login details, install malware or push fake surveys, and how to protect your account.',
};

/**
 * Third-party token-offer websites disclosed in the sticky bar and disclosure box.
 * They are NOT endorsed and NOT presented as official StripChat properties.
 */
export const OFFER_SITES = [
  { label: 'striptks.live', url: 'https://striptks.live/' },
  { label: 'stripfreetokens.com', url: 'https://stripfreetokens.com/' },
  { label: 'striptokens.live', url: 'https://striptokens.live/' },
];

export const OFFER_DRAW_LABEL = '50 tokens draw hourly';

/** Main content guides, in a fixed editorial order used for nav, sitemap page and cards. */
export const GUIDES = [
  { slug: 'stripchat-free-tokens', navLabel: 'Free Tokens' },
  { slug: 'stripchat-token-prices', navLabel: 'Token Prices' },
  { slug: 'how-stripchat-tokens-work', navLabel: 'How Tokens Work' },
  { slug: 'stripchat-token-scams', navLabel: 'Scam Warning' },
  { slug: 'stripchat-account-safety', navLabel: 'Safety Guide' },
  { slug: 'stripchat-beginners-guide', navLabel: 'Beginners Guide' },
  { slug: 'stripchat-token-faq', navLabel: 'FAQ' },
];

/** Links in the sticky bottom bar (order matters). */
export const STICKY_NAV = [
  { label: 'Home', path: '/' },
  { label: 'Free Tokens', path: '/stripchat-free-tokens/' },
  { label: 'Scam Warning', path: '/stripchat-token-scams/' },
  { label: 'FAQ', path: '/stripchat-token-faq/' },
  { label: 'Watch Video', path: '/#watch', anchor: true },
  { label: 'Safety Guide', path: '/stripchat-account-safety/' },
];

export const CTA = {
  label: 'Check Legitimate Token Offers',
  path: '/stripchat-free-tokens/',
  hash: '#evaluate',
};

export const INFO_PAGES = [
  { slug: 'editorial-policy', label: 'Editorial Policy' },
  { slug: 'disclaimer', label: 'Disclaimer' },
  { slug: 'privacy-policy', label: 'Privacy Policy' },
  { slug: 'terms-of-use', label: 'Terms of Use' },
  { slug: 'contact', label: 'Contact' },
];
