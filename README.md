# Walking with Jesus

Morning, midday, and evening Christian reflections on the life, teaching, and love of Jesus Christ.

**Live site:** https://lennoxx2703-collab.github.io/jesus-daily-blog/

**Tagline:** Morning, midday, and evening reflections on His life, teaching, and love.

## Stack

Astro (static site) with Markdown content collections.

**Publishing today:** the built site is committed under `docs/` and GitHub Pages serves from the `/docs` folder on `main` (works without Actions `workflow` scope).

**Preferred later:** `.github/workflows/deploy.yml` builds and deploys via `actions/deploy-pages` on every push to `main`. Pushing that workflow requires a GitHub token with the `workflow` scope (`gh auth refresh -s workflow`). After the workflow is active, switch Pages source to **GitHub Actions**.

## Adding posts

You can publish several articles on the same day (typically morning, midday, and evening). Create Markdown files in:

```text
src/content/posts/YYYY-MM-DD-slug.md
```

Examples:

- `src/content/posts/2026-09-13-come-and-see.md`
- `src/content/posts/2026-09-13-take-my-yoke.md`
- `src/content/posts/2026-09-13-stay-with-us.md`

### Frontmatter

```yaml
---
title: Your Title Here
description: One or two sentences for the home page excerpt and SEO.
pubDate: 2026-09-13
tags: [gospel, invitation]   # optional; 2–4 from: gospel, discipleship, prayer, comfort, parable, invitation, rest, mercy
scripture: John 1:39         # optional primary verse
slot: morning                # optional: morning | midday | evening
prayer: Optional closing prayer text.
---
```

Then write the article body in Markdown (about 600–900 words).

## Longer readings

Create Markdown files in `src/content/readings/`:

```yaml
---
title: The Sermon on the Mount
description: One or two sentences.
pubDate: 2026-09-13
book: Matthew
chapterRange: "5–7"
translation: World English Bible
tags: [gospel, teaching]
---
```

Use **public-domain** English Bible text only (World English Bible or KJV). Do not paste NIV, ESV, NKJV, or other copyrighted translations.

## Hard times verses

The Hard times page is driven by `src/lib/hardTimesVerses.ts` (World English Bible, public domain). Tags: anxiety, fear, grief, loneliness, exhaustion, doubt, shame, waiting, sickness, money.

### Publish (docs/ method — current)

```bash
npm install
npm run build
rm -rf docs && cp -r dist docs && touch docs/.nojekyll
git add -A
git commit -m "Add reflections and site updates"
git push origin main
```

Do **not** commit `.github/workflows/*.yml` unless the token has `workflow` scope.

### Local development

```bash
npm install
npm run dev
npm run build
```

## Pages

- **Home** — today’s reflections, featured verse, paths to Hard times and Readings
- **Readings** — `/readings/` and `/readings/[slug]/` longer Scripture
- **Hard times** — `/hard-times/` all verses; `/hard-times/[tag]/` by need
- **Post detail** — full article, prayer, share links, prev/next, related posts
- **Archive** — `/archive/` all posts grouped by month
- **Tags** — `/tags/` and `/tags/[tag]/`
- **Search** — `/search/` client-side filter (posts, readings, verses)
- **About** — short statement about the blog
- **RSS** — `/jesus-daily-blog/rss.xml`

## Helpers

- `src/lib/readingTime.ts` — reading time (~200 wpm)
- `src/lib/posts.ts` — sorting, tags, neighbors, related posts, prayer defaults
- `src/lib/verses.ts` — stable day-of-year featured verse
- `src/lib/hardTimesVerses.ts` — Hard times WEB verse library
- `src/lib/hardTimes.ts` — tag counts, anchors, situation lines
- `src/lib/site.ts` — `withBase()` for GitHub Pages project paths

## License

Content and code for personal / ministry use. Scripture on readings and Hard times is quoted from the World English Bible (public domain).
