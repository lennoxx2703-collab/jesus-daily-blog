import type { CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'posts'>;
export type Slot = 'morning' | 'midday' | 'evening';

export const SLOT_RANK: Record<Slot, number> = {
  morning: 1,
  midday: 2,
  evening: 3,
};

export const SLOT_LABEL: Record<Slot, string> = {
  morning: 'Morning',
  midday: 'Midday',
  evening: 'Evening',
};

export function isSlot(value: string | undefined): value is Slot {
  return value === 'morning' || value === 'midday' || value === 'evening';
}

export function slotRank(slot: string | undefined): number {
  return isSlot(slot) ? SLOT_RANK[slot] : 0;
}

export function slotLabel(slot: string | undefined): string | undefined {
  return isSlot(slot) ? SLOT_LABEL[slot] : undefined;
}

/** Latest first: newer pubDate, then evening > midday > morning on the same day. */
export function comparePostsLatestFirst(a: Post, b: Post): number {
  const dateDiff = b.data.pubDate.valueOf() - a.data.pubDate.valueOf();
  if (dateDiff !== 0) return dateDiff;
  return slotRank(b.data.slot) - slotRank(a.data.slot);
}

/** Day order: morning, then midday, then evening. */
export function comparePostsDayOrder(a: Post, b: Post): number {
  const dateDiff = a.data.pubDate.valueOf() - b.data.pubDate.valueOf();
  if (dateDiff !== 0) return dateDiff;
  return slotRank(a.data.slot) - slotRank(b.data.slot);
}

export function isoDate(date: Date): string {
  return date.toISOString().slice(0, 10);
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  });
}

export function formatMonth(date: Date): string {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    timeZone: 'UTC',
  });
}

export function monthKey(date: Date): string {
  return date.toISOString().slice(0, 7);
}

export function slugifyTag(tag: string): string {
  return tag
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^\w\s-]/g, '')
    .trim()
    .replace(/[\s_]+/g, '-')
    .replace(/-+/g, '-');
}

export function relatedPosts(current: Post, all: Post[], limit = 3): Post[] {
  const others = all.filter((post) => post.id !== current.id);
  const tags = new Set((current.data.tags ?? []).map((tag) => tag.toLowerCase()));

  const shared = others
    .map((post) => {
      const overlap = (post.data.tags ?? []).filter((tag) => tags.has(tag.toLowerCase())).length;
      return { post, overlap };
    })
    .filter((entry) => entry.overlap > 0)
    .sort((a, b) => {
      if (b.overlap !== a.overlap) return b.overlap - a.overlap;
      return comparePostsLatestFirst(a.post, b.post);
    })
    .map((entry) => entry.post);

  const picked = shared.slice(0, limit);
  if (picked.length < limit) {
    const taken = new Set(picked.map((post) => post.id));
    taken.add(current.id);
    const fill = others
      .filter((post) => !taken.has(post.id))
      .sort(comparePostsLatestFirst);
    picked.push(...fill.slice(0, limit - picked.length));
  }
  return picked;
}

export function neighbors(current: Post, sortedLatestFirst: Post[]): {
  older: Post | undefined;
  newer: Post | undefined;
} {
  const index = sortedLatestFirst.findIndex((post) => post.id === current.id);
  if (index < 0) return { older: undefined, newer: undefined };
  return {
    newer: index > 0 ? sortedLatestFirst[index - 1] : undefined,
    older: index < sortedLatestFirst.length - 1 ? sortedLatestFirst[index + 1] : undefined,
  };
}

export function groupPostsByMonth(posts: Post[]): { key: string; label: string; posts: Post[] }[] {
  const groups = new Map<string, Post[]>();
  for (const post of posts) {
    const key = monthKey(post.data.pubDate);
    const list = groups.get(key) ?? [];
    list.push(post);
    groups.set(key, list);
  }
  return [...groups.entries()]
    .sort((a, b) => b[0].localeCompare(a[0]))
    .map(([key, monthPosts]) => ({
      key,
      label: formatMonth(monthPosts[0].data.pubDate),
      posts: monthPosts,
    }));
}

export function collectTagCounts(posts: Post[]): { tag: string; slug: string; count: number }[] {
  const counts = new Map<string, { tag: string; count: number }>();
  for (const post of posts) {
    for (const tag of post.data.tags ?? []) {
      const slug = slugifyTag(tag);
      if (!slug) continue;
      const existing = counts.get(slug);
      if (existing) {
        existing.count += 1;
      } else {
        counts.set(slug, { tag, count: 1 });
      }
    }
  }
  return [...counts.entries()]
    .map(([slug, value]) => ({ slug, tag: value.tag, count: value.count }))
    .sort((a, b) => a.tag.localeCompare(b.tag, 'en', { sensitivity: 'base' }));
}

export function prayerForPost(post: Post): string {
  if (post.data.prayer?.trim()) return post.data.prayer.trim();
  const scripture = post.data.scripture;
  const verseNote = scripture
    ? ` Meet me in ${scripture}, and let Your word rest in my heart.`
    : ' Meet me in today’s Scripture, and let Your word rest in my heart.';
  switch (post.data.slot) {
    case 'morning':
      return `Lord Jesus, as this day begins, draw me near.${verseNote} Teach me to walk with You in trust and joy.`;
    case 'midday':
      return `Jesus, I bring You the weight of this hour.${verseNote} Give rest to my soul and strength for what remains.`;
    case 'evening':
      return `Stay with us, Lord, for it is toward evening.${verseNote} Remain with us through the night, and keep our hearts burning.`;
    default:
      return `Lord Jesus, I come to You now.${verseNote} Speak, for Your servant is listening, and lead me in Your love.`;
  }
}
