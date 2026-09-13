import { getCollection } from 'astro:content';
import { comparePostsLatestFirst, isoDate } from '../lib/posts';
import { HARD_TIMES_VERSES, verseAnchor, verseSituation } from '../lib/hardTimes';
import { withBase } from '../lib/site';
import { quotes } from '../data/quotes';

export async function GET() {
  const posts = (await getCollection('posts')).sort(comparePostsLatestFirst);
  const readings = (await getCollection('readings')).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );
  const stories = (await getCollection('stories')).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );

  const postEntries = posts.map((post) => ({
    kind: 'post',
    title: post.data.title,
    description: post.data.description,
    tags: post.data.tags ?? [],
    scripture: post.data.scripture ?? '',
    slug: post.slug,
    href: withBase(`posts/${post.slug}/`),
    date: isoDate(post.data.pubDate),
    slot: post.data.slot ?? '',
  }));

  const readingEntries = readings.map((reading) => ({
    kind: 'reading',
    title: reading.data.title,
    description: reading.data.description,
    tags: reading.data.tags ?? [],
    scripture: `${reading.data.book} ${reading.data.chapterRange}`,
    slug: reading.slug,
    href: withBase(`readings/${reading.slug}/`),
    date: isoDate(reading.data.pubDate),
    slot: '',
  }));

  const storyEntries = stories.map((story) => ({
    kind: 'story',
    title: story.data.title,
    description: `${story.data.description} Source: ${story.data.source}`,
    tags: story.data.tags ?? [],
    scripture: story.data.scripture ?? '',
    slug: story.slug,
    href: withBase(`stories/${story.slug}/`),
    date: isoDate(story.data.pubDate),
    slot: story.data.kind,
  }));

  const verseEntries = HARD_TIMES_VERSES.map((verse) => ({
    kind: 'verse',
    title: verse.reference,
    description: verseSituation(verse),
    tags: verse.tags,
    scripture: verse.text,
    slug: verseAnchor(verse),
    href: `${withBase('hard-times/')}#${verseAnchor(verse)}`,
    date: '',
    slot: '',
  }));


  const quoteEntries = quotes.map((q) => ({
    kind: 'quote',
    title: `${q.person}${q.year != null ? ` (${q.year})` : ''}`,
    description: q.quote,
    tags: ['quotes', 'faith', q.person],
    scripture: '',
    slug: q.id,
    href: `${withBase('quotes/')}#${q.id}`,
    date: q.year != null ? String(q.year) : '',
    slot: 'quote',
  }));

  const index = [...postEntries, ...readingEntries, ...storyEntries, ...verseEntries, ...quoteEntries];

  return new Response(JSON.stringify(index), {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
  });
}
