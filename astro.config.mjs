// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const BASE = '/stripmodo';

/**
 * Markdown authors write root-absolute internal links ("/stripchat-token-faq/").
 * This rehype plugin prefixes them with the GitHub Pages base so deployed
 * links keep working — authors never have to think about it.
 */
function rehypeBaseLinks() {
  const walk = (node) => {
    if (node && node.type === 'element' && node.tagName === 'a' && node.properties?.href) {
      const href = String(node.properties.href);
      if (href.startsWith('/') && !href.startsWith('//') && !href.startsWith(`${BASE}/`) && href !== BASE) {
        node.properties.href = `${BASE}${href}`;
      }
    }
    (node?.children ?? []).forEach(walk);
  };
  return (tree) => walk(tree);
}

// https://astro.build/config
export default defineConfig({
  site: 'https://judith0051.github.io',
  base: '/stripmodo',
  trailingSlash: 'always',
  compressHTML: true,
  integrations: [
    sitemap({
      // The 404 page must not appear in the XML sitemap.
      filter: (page) => !page.includes('/404'),
      serialize(item) {
        const lastmod = '2026-09-17';
        if (item.url.endsWith('/stripmodo/')) {
          item.priority = 1.0;
        } else if (item.url.match(/\/stripmodo\/[^/]+\/$/)) {
          const infoPages = ['editorial-policy', 'privacy-policy', 'terms-of-use', 'contact', 'disclaimer', 'sitemap'];
          const seg = item.url.split('/').filter(Boolean).pop() ?? '';
          item.priority = infoPages.includes(seg) ? 0.3 : 0.8;
        }
        item.lastmod = lastmod;
        return item;
      },
    }),
  ],
  build: {
    format: 'directory',
  },
  markdown: {
    rehypePlugins: [rehypeBaseLinks],
  },
});
