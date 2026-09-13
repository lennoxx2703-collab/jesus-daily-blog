/** Always ends with a single trailing slash */
export const baseUrl = (import.meta.env.BASE_URL || '/').replace(/\/?$/, '/');

export function withBase(path = ''): string {
  const clean = path.replace(/^\//, '');
  return `${baseUrl}${clean}`;
}
