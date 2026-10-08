import fs from 'node:fs';
import path from 'node:path';

/**
 * Looks for a logo file in public/images/logos/<slug>.(svg|png|webp|jpg).
 * Returns its URL, or null so the page can show a clean text name instead.
 */
export function logoFor(slug: string): string | null {
  for (const ext of ['svg', 'png', 'webp', 'jpg']) {
    if (fs.existsSync(path.join(process.cwd(), 'public', 'images', 'logos', `${slug}.${ext}`))) {
      return `/images/logos/${slug}.${ext}`;
    }
  }
  return null;
}
