import type { MetadataRoute } from "next";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "about/", "experience/", "expertise/", "why/", "contact/"].flatMap((section) => ["en", "fa"].map((locale) => ({ url: `https://bardiariahi.ir/${locale}/${section}`, alternates: { languages: { en: `https://bardiariahi.ir/en/${section}`, fa: `https://bardiariahi.ir/fa/${section}`, "x-default": `https://bardiariahi.ir/en/${section}` } } })));
}
