import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { comparePostsLatestFirst } from '../lib/posts';

export async function GET(context) {
  const posts = (await getCollection('posts')).sort(comparePostsLatestFirst);
  return rss({
    title: 'Walking with Jesus',
    description:
      'Morning, midday, and evening reflections on His life, teaching, and love.',
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `/jesus-daily-blog/posts/${post.slug}/`,
      categories: post.data.tags,
    })),
    customData: `<language>en-us</language>`,
  });
}
