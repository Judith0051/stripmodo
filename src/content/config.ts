import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      h1: z.string(),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date(),
      navLabel: z.string().optional(),
      cardTitle: z.string().optional(),
      cardDescription: z.string().optional(),
      featured: image().optional(),
      featuredAlt: z.string().optional(),
      featuredCaption: z.string().optional(),
      /** Visible FAQ entries; also used verbatim for FAQPage JSON-LD */
      faqs: z.array(z.object({ q: z.string(), a: z.string() })).optional(),
      /** Related guide slugs to feature in the "Keep reading" cards */
      related: z.array(z.string()).default([]),
    }),
});

const info = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/info' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    h1: z.string(),
    updatedDate: z.coerce.date(),
  }),
});

export const collections = { articles, info };
