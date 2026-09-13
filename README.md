# Walking with Jesus

Daily Christian reflections on the life, teaching, and love of Jesus Christ.

**Live site:** https://lennoxx2703-collab.github.io/jesus-daily-blog/

**Tagline:** Daily reflections on His life, teaching, and love.

## Stack

Astro (static site) with Markdown content collections, deployed to GitHub Pages via GitHub Actions on every push to `main`.

## Adding a daily post

One new article per day. Create a Markdown file in:

```text
src/content/posts/YYYY-MM-DD-slug.md
```

Example: `src/content/posts/2026-09-14-abide-in-me.md`

### Frontmatter

```yaml
---
title: Your Title Here
description: One or two sentences for the home page excerpt and SEO.
pubDate: 2026-09-14
tags: [optional, tags]
---
```

Then write the article body in Markdown. Commit and push to `main`; the deploy workflow builds and publishes automatically.

### Local development

```bash
npm install
npm run dev
```

Build check:

```bash
npm run build
```

## Pages

- **Home** — list of posts (title, date, excerpt)
- **Post detail** — full article
- **About** — short statement about the blog
- **RSS** — `/jesus-daily-blog/rss.xml`

## License

Content and code for personal / ministry use. Scripture quotations are from common public translations; cite book, chapter, and verse in each post.
