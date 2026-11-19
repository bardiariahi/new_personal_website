import "../globals.css";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";

export const dynamicParams = false;
export function generateStaticParams() { return [{ locale: "en" }, { locale: "fa" }]; }

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const fa = locale === "fa";
  const title = fa ? "بردیا ریاحی | توسعه‌دهنده فرانت‌اند و طراح وب" : "Bardia Riahi | Front-end Developer & Web Designer";
  const description = fa ? "بردیا ریاحی، توسعه‌دهنده فرانت‌اند در تهران؛ طراحی و ساخت وب‌سایت‌ها و محصولات دیجیتال با React و Next.js." : "Bardia Riahi is a Tehran-based front-end developer building thoughtful websites and digital products with React and Next.js.";
  return { metadataBase: new URL("https://bardiariahi.ir"), title, description, alternates: { canonical: `/${locale}/`, languages: { en: "/en/", fa: "/fa/", "x-default": "/en/" } }, openGraph: { title, description, url: `/${locale}/`, siteName: "Bardia Riahi", type: "website", locale: fa ? "fa_IR" : "en_US" }, twitter: { card: "summary", title, description } };
}

export default async function LocaleLayout({ children, params }: { children: ReactNode; params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (locale !== "en" && locale !== "fa") notFound();
  return <html lang={locale} dir={locale === "fa" ? "rtl" : "ltr"} suppressHydrationWarning><head><script dangerouslySetInnerHTML={{ __html: `(function(){try{localStorage.setItem('language','${locale}');var t=localStorage.getItem('theme');document.documentElement.dataset.theme=t==='light'||t==='dark'?t:(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light')}catch(e){}})()` }} /></head><body>{children}</body></html>;
}
