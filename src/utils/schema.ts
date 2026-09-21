import { SITE, VIDEO } from '../consts';
import { canonical, isoDate } from './url';

/** Organization + WebSite schema used site-wide on the homepage. */
export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE.name,
    url: canonical('/'),
    logo: {
      '@type': 'ImageObject',
      url: `${SITE.origin}${SITE.base}/favicon.svg`,
    },
    email: SITE.email,
    description: SITE.description,
  };
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE.name,
    url: canonical('/'),
    description: SITE.description,
    inLanguage: 'en',
    publisher: { '@type': 'Organization', name: SITE.name },
  };
}

export function breadcrumbSchema(items: { label: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.label,
      item: canonical(item.path),
    })),
  };
}

export function articleSchema(opts: {
  headline: string;
  description: string;
  path: string;
  pubDate: string | Date;
  updatedDate: string | Date;
  imageUrl?: string;
  wordCount?: number;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: opts.headline,
    description: opts.description,
    mainEntityOfPage: { '@type': 'WebPage', '@id': canonical(opts.path) },
    datePublished: isoDate(opts.pubDate),
    dateModified: isoDate(opts.updatedDate),
    inLanguage: 'en',
    author: { '@type': 'Organization', name: SITE.author, url: canonical('/') },
    publisher: {
      '@type': 'Organization',
      name: SITE.name,
      url: canonical('/'),
      logo: { '@type': 'ImageObject', url: `${SITE.origin}${SITE.base}/favicon.svg` },
    },
    ...(opts.imageUrl ? { image: opts.imageUrl } : {}),
    ...(opts.wordCount ? { wordCount: opts.wordCount } : {}),
    isAccessibleForFree: true,
  };
}

/**
 * VideoObject for the featured YouTube Shorts video. Only verified fields are
 * included (no contentUrl, no ratings/statistics claims).
 */
export function videoSchema(pageUrl: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: VIDEO.name,
    description: VIDEO.description,
    thumbnailUrl: VIDEO.thumbnailUrl,
    uploadDate: VIDEO.uploadDate,
    embedUrl: VIDEO.embedUrl,
    url: VIDEO.watchUrl,
    mainEntityOfPage: canonical(pageUrl),
    publisher: {
      '@type': 'Organization',
      name: VIDEO.publisherName,
    },
  };
}

/** FAQPage schema — only where the same Q&As are visibly rendered on the page. */
export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

export function webPageSchema(opts: { name: string; description: string; path: string; updatedDate?: string | Date }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: opts.name,
    description: opts.description,
    url: canonical(opts.path),
    inLanguage: 'en',
    ...(opts.updatedDate ? { dateModified: isoDate(opts.updatedDate) } : {}),
    isPartOf: { '@type': 'WebSite', name: SITE.name, url: canonical('/') },
  };
}
