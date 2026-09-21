# Stripmodo

Independent, safety-first guides about StripChat tokens — legitimate
free-token promotions, token prices, how tokens work, scam warnings and
account security. Static site built with [Astro](https://astro.build),
published via GitHub Pages at
**https://judith0051.github.io/stripmodo/**.

> 18+ informational project. Not affiliated with, endorsed by or sponsored by
> StripChat. See `src/content/info/disclaimer.md`.

## Tech

- **Astro 5 static build** — every URL is a complete HTML document (content,
  title, meta description, canonical, headings, JSON-LD) before any
  JavaScript runs. The site ships **zero client-side JavaScript** and works
  fully with JS disabled (mobile menu and TOC use `<details>`/`<summary>`).
- **Content collections** (`src/content/articles`, `src/content/info`) — new
  pages are markdown files; SEO tags, canonical, OG/Twitter, sitemap entry
  and JSON-LD are generated automatically from frontmatter.
- **Fonts**: self-hosted Geist + Geist Mono via Fontsource,
  `font-display: swap`, latin subset.
- **Images**: `astro:assets` → WebP with `srcset`, explicit `width`/`height`,
  lazy loading below the fold, eager hero.
- **Sitemap**: `@astrojs/sitemap` (excludes 404) + `public/robots.txt`.
  Real `dist/404.html` with 404 status for unknown routes.

## Commands

| command           | action                                   |
| ----------------- | ---------------------------------------- |
| `npm install`     | install dependencies                     |
| `npm run dev`     | dev server at `localhost:4321/stripmodo/` |
| `npm run build`   | build to `dist/` + drop unreferenced assets |
| `npm run preview` | preview the production build             |

## Adding a new page

1. Create `src/content/articles/my-page.md` with frontmatter (`title`,
   `description`, `h1`, `pubDate`, `updatedDate`, images, optional `faqs`).
2. Optional: register it in `GUIDES` in `src/consts.ts` to add it to
   navigation, cards and the HTML sitemap.
3. Done — route `/my-page/`, SEO tags, canonical, sitemap entry,
   Article/Video/Breadcrumb JSON-LD, video section, disclosure box, sticky
   bars and related cards are included automatically. FAQPage JSON-LD is
   emitted only when `faqs` are provided (and they must mirror the visible
   FAQ section).

## Structure

```
src/
  consts.ts              site config: nav, video, offer links, CTA
  components/            SEO, Header, Footer, StickyBar, VideoSection,
                         DisclosureBox, TOC, Breadcrumbs, AuthorBox, cards
  layouts/               Base, ArticleLayout, InfoLayout
  content/articles/      the 8 main guides (markdown)
  content/info/          policies: editorial, disclaimer, privacy, terms, contact
  pages/                 index, [slug], 404, HTML sitemap
  styles/global.css      design tokens + all styles
  utils/                 url/canonical helpers, JSON-LD builders, word count
.github/workflows/       GitHub Pages deploy (Actions)
scripts/clean-dist.mjs   deletes provably unreferenced build assets
public/                  robots.txt, favicon, OG image, .nojekyll
```

## Deployment

`.github/workflows/deploy.yml` builds on every push to `main` and deploys
`dist/` to GitHub Pages. One-time repo setup: **Settings → Pages → Source:
GitHub Actions**.

`astro.config.mjs` pins `site: https://judith0051.github.io` and
`base: /stripmodo` so canonicals, sitemaps and internal links resolve under
the project subpath.
