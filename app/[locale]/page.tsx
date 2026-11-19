import { Site } from "./site";
export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return <Site locale={locale} section="home" />;
}
