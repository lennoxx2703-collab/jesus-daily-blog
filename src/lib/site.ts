/** Always ends with a single trailing slash */
export const baseUrl = (import.meta.env.BASE_URL || '/').replace(/\/?$/, '/');

export function withBase(path = ''): string {
  const clean = path.replace(/^\//, '');
  return `${baseUrl}${clean}`;
}

/** Canonical public origin for GitHub Pages (no trailing slash). */
export const siteOrigin = 'https://lennoxx2703-collab.github.io';

/** Absolute site root including base path, with trailing slash. */
export const siteRoot = `${siteOrigin}${baseUrl}`;

/** Build an absolute URL from a site-relative path (with or without leading slash / base). */
export function absoluteUrl(path = ''): string {
  const clean = path
    .replace(/^\//, '')
    .replace(/^jesus-daily-blog\//, '');
  return new URL(withBase(clean), siteOrigin).href;
}

export const siteName = 'Walking with Jesus';
export const defaultTagline =
  'Morning, midday, and evening reflections on His life, teaching, and love.';
export const defaultDescription =
  'Morning, midday, and evening Christian reflections on the life, teaching, and love of Jesus Christ.';
