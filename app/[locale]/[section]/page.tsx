import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Site, type Section } from "../site";

const sections = ["about", "experience", "expertise", "why", "contact"] as const;
export const dynamicParams = false;
export function generateStaticParams() { return sections.map((section) => ({ section })); }
export async function generateMetadata({ params }: { params: Promise<{ locale: string; section: string }> }): Promise<Metadata> {
  const { locale, section } = await params;
  const labels: Record<string, [string, string]> = { about: ["About", "درباره من"], experience: ["Experience", "تجربه‌ها"], expertise: ["Expertise", "تخصص‌ها"], why: ["Why work with me", "چرا همکاری با من"], contact: ["Contact", "تماس"] };
  const label = labels[section]?.[locale === "fa" ? 1 : 0] ?? "Bardia Riahi";
  const title = `${label} | ${locale === "fa" ? "بردیا ریاحی" : "Bardia Riahi"}`;
  const description = locale === "fa" ? `${label} بردیا ریاحی، توسعه‌دهنده فرانت‌اند و طراح وب در تهران.` : `${label} — Bardia Riahi, front-end developer and web designer based in Tehran.`;
  return { title, description, alternates: { canonical: `/${locale}/${section}/`, languages: { en: `/en/${section}/`, fa: `/fa/${section}/`, "x-default": `/en/${section}/` } }, openGraph: { title, description, url: `/${locale}/${section}/`, type: "website" }, twitter: { card: "summary", title, description } };
}
export default async function SectionPage({ params }: { params: Promise<{ locale: string; section: string }> }) {
  const { locale, section } = await params;
  if (!sections.includes(section as typeof sections[number])) notFound();
  return <Site locale={locale} section={section as Section} />;
}
