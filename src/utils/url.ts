import { SITE } from '../consts';

/**
 * Build an internal URL that respects the Astro `base` (GitHub Pages subpath).
 * url('/stripchat-token-faq/') -> '/stripmodo/stripchat-token-faq/'
 */
export function url(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  if (!path.startsWith('/')) path = `/${path}`;
  const [pathname, hash] = path.split('#');
  const clean = `${base}${pathname}` || '/';
  return hash ? `${clean}#${hash}` : clean;
}

/**
 * Absolute canonical URL for a page path.
 * canonical('/stripchat-token-faq/') ->
 *   'https://judith0051.github.io/stripmodo/stripchat-token-faq/'
 */
export function canonical(path: string): string {
  const base = SITE.base.replace(/\/$/, '');
  if (!path.startsWith('/')) path = `/${path}`;
  const cleanPath = path === '/' ? `${base}/` : `${base}${path}`;
  return `${SITE.origin}${cleanPath}`;
}

/** Format an ISO date for visible dates and schema. */
export function formatDate(iso: string | Date): string {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  });
}

export function isoDate(iso: string | Date): string {
  return new Date(iso).toISOString().slice(0, 10);
}
