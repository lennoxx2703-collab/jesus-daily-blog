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

- **Home** — today’s reflections (by slot), featured verse, recent posts
- **Post detail** — full article, prayer, share links, prev/next, related posts
- **Archive** — `/archive/` all posts grouped by month
- **Tags** — `/tags/` and `/tags/[tag]/`
- **Search** — `/search/` client-side filter over a build-time JSON index
- **About** — short statement about the blog
- **RSS** — `/jesus-daily-blog/rss.xml`

## Helpers

- `src/lib/readingTime.ts` — reading time (~200 wpm)
- `src/lib/posts.ts` — sorting, tags, neighbors, related posts, prayer defaults
- `src/lib/verses.ts` — stable day-of-year featured verse
- `src/lib/site.ts` — `withBase()` for GitHub Pages project paths

## License

Content and code for personal / ministry use. Scripture quotations cite book, chapter, and verse in each post.
