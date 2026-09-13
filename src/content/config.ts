import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    tags: z.array(z.string()).optional(),
    scripture: z.string().optional(),
    slot: z.enum(['morning', 'midday', 'evening']).optional(),
    prayer: z.string().optional(),
  }),
});

const readings = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    book: z.string(),
    chapterRange: z.string(),
    translation: z.string(),
    tags: z.array(z.string()).optional(),
  }),
});

const lessons = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    order: z.number(),
    minutes: z.number(),
    tags: z.array(z.string()).optional(),
    goDeeper: z
      .array(
        z.object({
          label: z.string(),
          href: z.string(),
          note: z.string().optional(),
        })
      )
      .optional(),
  }),
});

const stories = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    kind: z.enum(['historical', 'modern', 'submitted']),
    source: z.string(),
    sourceUrl: z.string().url().optional(),
    tags: z.array(z.string()).optional(),
    scripture: z.string().optional(),
  }),
});

export const collections = { posts, readings, lessons, stories };
