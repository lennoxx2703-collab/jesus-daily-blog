import { getCollection } from 'astro:content';
import { comparePostsLatestFirst, isoDate } from '../lib/posts';

export async function GET() {
  const posts = (await getCollection('posts')).sort(comparePostsLatestFirst);
  const index = posts.map((post) => ({
    title: post.data.title,
    description: post.data.description,
    tags: post.data.tags ?? [],
    scripture: post.data.scripture ?? '',
    slug: post.slug,
    date: isoDate(post.data.pubDate),
    slot: post.data.slot ?? '',
  }));

  return new Response(JSON.stringify(index), {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
  });
}
