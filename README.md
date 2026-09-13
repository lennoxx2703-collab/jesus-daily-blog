# Walking with Jesus

Daily Christian reflections on the life, teaching, and love of Jesus Christ.

**Live site:** https://lennoxx2703-collab.github.io/jesus-daily-blog/

**Tagline:** Daily reflections on His life, teaching, and love.

## Stack

Astro (static site) with Markdown content collections.

**Publishing today:** the built site is committed under `docs/` and GitHub Pages serves from the `/docs` folder on `main` (works without Actions `workflow` scope).

**Preferred later:** `.github/workflows/deploy.yml` builds and deploys via `actions/deploy-pages` on every push to `main`. Pushing that workflow requires a GitHub token with the `workflow` scope (`gh auth refresh -s workflow`). After the workflow is active, switch Pages source to **GitHub Actions**.

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

Then write the article body in Markdown.

### Publish (docs/ method — current)

```bash
npm install
npm run build
rm -rf docs && cp -r dist docs && touch docs/.nojekyll
git add src/content/posts docs
git commit -m "Add daily post YYYY-MM-DD"
git push origin main
```

### Local development

```bash
npm install
npm run dev
npm run build
```

## Pages

- **Home** — list of posts (title, date, excerpt)
- **Post detail** — full article
- **About** — short statement about the blog
- **RSS** — `/jesus-daily-blog/rss.xml`

## License

Content and code for personal / ministry use. Scripture quotations cite book, chapter, and verse in each post.
