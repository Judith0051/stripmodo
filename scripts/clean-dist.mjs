/**
 * Post-build cleanup: Astro's collection image pipeline can emit
 * unreferenced original-format copies of images (multi-MB PNGs) alongside
 * the optimized WebP variants actually used in markup.
 * This script deletes only assets that are provably unreferenced
 * anywhere in the build output. Referenced assets are never touched.
 */
import { readdirSync, readFileSync, unlinkSync, statSync } from 'node:fs';
import { join } from 'node:path';

const DIST = new URL('../dist/', import.meta.url).pathname;

function* walk(dir) {
  for (const entry of readdirSync(dir)) {
    const p = join(dir, entry);
    if (statSync(p).isDirectory()) yield* walk(p);
    else yield p;
  }
}

const files = [...walk(DIST)];
const textFiles = files.filter((f) => /\.(html|css|xml|txt|json|js|svg)$/.test(f));
const corpus = textFiles.map((f) => readFileSync(f, 'utf8')).join('\n');

let removed = 0;
for (const f of files) {
  if (!/\.(png|jpe?g)$/.test(f)) continue;
  const name = f.split('/').pop();
  if (!corpus.includes(name)) {
    unlinkSync(f);
    removed++;
    console.log(`removed unreferenced asset: ${name}`);
  }
}
console.log(`clean-dist: ${removed} unreferenced raster asset(s) removed`);
