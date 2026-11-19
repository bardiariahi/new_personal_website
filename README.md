# Bardia Riahi — personal website

Bilingual English and Persian portfolio built with Next.js and statically exported for Cloudflare Pages. The production domain is `bardiariahi.ir`.

## Development

Use Node.js 24.22.1 (also pinned for Cloudflare Pages in `.node-version`), then run:

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

Each language has separate `/about/`, `/experience/`, `/expertise/`, `/why/`, and `/contact/` pages. The language switch keeps the current page. The selected language is reflected in the URL and stored in the browser; the root remains the requested English redirect.

The project uses TypeScript 7 for the command-line compiler alongside the TypeScript 6 compatibility API required by Next.js and typescript-eslint. ESLint is kept on its latest compatible 9.x release until the Next.js lint plugins support ESLint 10.
