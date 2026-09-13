/** Always ends with a single trailing slash */
export const baseUrl = (import.meta.env.BASE_URL || '/').replace(/\/?$/, '/');

export function withBase(path = ''): string {
  const clean = path.replace(/^\//, '');
  return `${baseUrl}${clean}`;
}

export const siteName = 'Walking with Jesus';
export const defaultTagline =
  'Morning, midday, and evening reflections on His life, teaching, and love.';
export const defaultDescription =
  'Morning, midday, and evening Christian reflections on the life, teaching, and love of Jesus Christ.';
