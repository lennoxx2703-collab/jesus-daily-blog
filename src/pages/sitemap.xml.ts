import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { HARD_TIMES_TAGS } from '../lib/hardTimes';
import { collectTagCounts } from '../lib/posts';
import { absoluteUrl } from '../lib/site';

function urlEntry(loc: string, changefreq: string, priority: string): string {
  return `  <url>
    <loc>${loc}</loc>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

export const GET: APIRoute = async () => {
  const posts = await getCollection('posts');
  const readings = await getCollection('readings');
  const lessons = await getCollection('lessons');
  const stories = await getCollection('stories');
  const tags = collectTagCounts(posts);

  const entries: string[] = [
    urlEntry(absoluteUrl(), 'daily', '1.0'),
    urlEntry(absoluteUrl('about/'), 'monthly', '0.7'),
    urlEntry(absoluteUrl('archive/'), 'daily', '0.8'),
    urlEntry(absoluteUrl('tags/'), 'weekly', '0.6'),
    urlEntry(absoluteUrl('search/'), 'monthly', '0.5'),
    urlEntry(absoluteUrl('hard-times/'), 'weekly', '0.9'),
    urlEntry(absoluteUrl('readings/'), 'weekly', '0.9'),
    urlEntry(absoluteUrl('stories/'), 'weekly', '0.9'),
    urlEntry(absoluteUrl('share/'), 'monthly', '0.6'),
    urlEntry(absoluteUrl('start-here/'), 'monthly', '0.9'),
    urlEntry(absoluteUrl('learn/'), 'monthly', '0.9'),
    urlEntry(absoluteUrl('sit/'), 'daily', '0.9'),
    urlEntry(absoluteUrl('pray/'), 'monthly', '0.8'),
    urlEntry(absoluteUrl('faq/'), 'monthly', '0.7'),
    urlEntry(absoluteUrl('more/'), 'monthly', '0.7'),
    urlEntry(absoluteUrl('de/'), 'monthly', '0.8'),
    urlEntry(absoluteUrl('rss.xml'), 'daily', '0.5'),
  ];

  for (const tag of HARD_TIMES_TAGS) {
    entries.push(urlEntry(absoluteUrl(`hard-times/${tag}/`), 'weekly', '0.7'));
  }

  for (const entry of tags) {
    entries.push(urlEntry(absoluteUrl(`tags/${entry.slug}/`), 'weekly', '0.5'));
  }

  for (const reading of readings) {
    entries.push(urlEntry(absoluteUrl(`readings/${reading.slug}/`), 'monthly', '0.8'));
  }

  for (const lesson of lessons) {
    entries.push(urlEntry(absoluteUrl(`learn/${lesson.slug}/`), 'monthly', '0.8'));
  }

  for (const story of stories) {
    entries.push(urlEntry(absoluteUrl(`stories/${story.slug}/`), 'weekly', '0.8'));
  }

  for (const post of posts) {
    entries.push(urlEntry(absoluteUrl(`posts/${post.slug}/`), 'weekly', '0.8'));
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries.join('\n')}
</urlset>
`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};
