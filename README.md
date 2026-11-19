# Bardia Riahi — personal website

Bilingual English and Persian portfolio built with Next.js and statically exported for Cloudflare Pages. The production domain is `bardiariahi.ir`.

## Development

Use a supported Node.js version (Node 22.13 or later is recommended), then run:

```sh
npm ci
npm run dev
```

English is at `/en/`, Persian at `/fa/`. The root redirects to English on Cloudflare Pages; the generated root page also provides a browser fallback. Theme preference is saved locally.

## Cloudflare Pages

Connect the Git repository and use:

- Build command: `npm run build`
- Build output directory: `out`
- Production domain: `bardiariahi.ir`

The static export includes `_redirects`, `_headers`, `robots.txt`, and `sitemap.xml`. Check the production custom-domain and HTTPS configuration in Cloudflare before deployment. No application server is required.

Each language has separate `/about/`, `/experience/`, `/expertise/`, and `/contact/` pages. The language switch keeps the current page. The selected language is reflected in the URL and stored in the browser; the root remains the requested English redirect.
