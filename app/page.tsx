"use client";

import Link from "next/link";
import { useLanguageStore } from "@/store/useLanguageStore";
import LanguageSwitcher from "@/components/language/languageSwitcher";
import ThemeSwitcher from "@/components/theme/ThemeSwitcher";
import DeveloperAnimation from "@/components/animation/DeveloperAnimation";

export default function HomePage() {
  const language = useLanguageStore((state) => state.language);
  const isFa = language === "fa";

  const content = {
    nav: {
      home: isFa ? "خانه" : "Home",
      about: isFa ? "درباره من" : "About",
      projects: isFa ? "نمونه‌کارها" : "Projects",
      contact: isFa ? "تماس با من" : "Contact",
    },
    badge: isFa
      ? "آماده همکاری روی پروژه‌های جدید"
      : "Available for new projects",
    title: isFa ? "ایده‌های شما را به" : "Turning your ideas into",
    highlight: isFa ? "تجربه‌های دیجیتال" : "Digital Experiences",
    subtitle: isFa ? "تبدیل می‌کنم." : "that make an impact.",
    description: isFa
      ? "من یک توسعه‌دهنده و طراح وب هستم که با ترکیب طراحی خلاقانه و تکنولوژی‌های مدرن، وب‌سایت‌هایی سریع، زیبا و کاربردی خلق می‌کنم."
      : "I'm a web developer and designer creating modern, fast, and user-friendly websites by combining creative design with powerful technologies.",
    projects: isFa ? "مشاهده نمونه‌کارها" : "Explore Projects",
    contact: isFa ? "شروع همکاری" : "Let's Work Together",
    scroll: isFa ? "برای آشنایی بیشتر اسکرول کنید" : "Scroll to explore",
  };

  return (
    <main
      dir={isFa ? "rtl" : "ltr"}
      className="min-h-screen overflow-hidden bg-base-100 text-base-content">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 left-1/4 h-96 w-96 rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute right-0 top-1/3 h-96 w-96 rounded-full bg-secondary/10 blur-[120px]" />
      </div>

      {/* Navbar */}
      <header className="relative z-20 border-b border-base-300/60">
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-5">
          <Link href="/" className="text-2xl font-black tracking-tight">
            <span className="text-primary">&lt;</span>
            Portfolio
            <span className="text-primary"> /&gt;</span>
          </Link>

          <div className="hidden items-center gap-8 text-sm font-medium md:flex">
            <a href="#home" className="transition-colors hover:text-primary">
              {content.nav.home}
            </a>
            <a href="#about" className="transition-colors hover:text-primary">
              {content.nav.about}
            </a>
            <a
              href="#projects"
              className="transition-colors hover:text-primary">
              {content.nav.projects}
            </a>
            <a href="#contact" className="transition-colors hover:text-primary">
              {content.nav.contact}
            </a>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-24 sm:w-32">
              <LanguageSwitcher />
            </div>
            <div className="w-24 sm:w-32">
              <ThemeSwitcher />
            </div>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section
        id="home"
        className="mx-auto grid min-h-[calc(100vh-85px)] max-w-7xl items-center gap-8 px-6 py-12 lg:grid-cols-2 lg:gap-12">
        {/* Text */}
        <div className="relative z-10 space-y-7">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm text-primary">
            <span className="h-2 w-2 animate-pulse rounded-full bg-success" />
            {content.badge}
          </div>

          <h1 className="text-4xl font-black leading-[1.35] tracking-tight sm:text-5xl lg:text-6xl">
            {content.title}
            <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {content.highlight}
            </span>
            {content.subtitle}
          </h1>

          <p className="max-w-xl text-base leading-8 text-base-content/65 sm:text-lg">
            {content.description}
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="#projects"
              className="btn btn-primary btn-lg shadow-lg shadow-primary/20">
              {content.projects}
              <span aria-hidden="true">{isFa ? "←" : "→"}</span>
            </a>

            <a href="#contact" className="btn btn-outline btn-lg">
              {content.contact}
            </a>
          </div>

          {/* Tech stack */}
          <div className="space-y-3 pt-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-base-content/40">
              Technologies I work with
            </p>

            <div className="flex flex-wrap gap-2">
              {[
                "Next.js",
                "React",
                "TypeScript",
                "Tailwind CSS",
                "Node.js",
              ].map((tech) => (
                <span
                  key={tech}
                  className="rounded-lg border border-base-300 bg-base-200/70 px-3 py-2 text-xs font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Animation */}
        <div className="relative flex items-center justify-center">
          <div className="absolute h-[75%] w-[75%] rounded-full bg-primary/10 blur-[90px]" />

          <div className="relative w-full">
            <DeveloperAnimation />
          </div>

          <div className="absolute left-0 top-10 hidden rounded-xl border border-base-300 bg-base-100/90 p-4 shadow-xl backdrop-blur-md sm:block">
            <p className="text-xs text-base-content/50">Development</p>
            <p className="mt-1 font-bold text-primary">Creative Code</p>
          </div>

          <div className="absolute bottom-10 right-0 hidden rounded-xl border border-base-300 bg-base-100/90 p-4 shadow-xl backdrop-blur-md sm:block">
            <p className="text-xs text-base-content/50">Design</p>
            <p className="mt-1 font-bold text-secondary">Pixel Perfect UI</p>
          </div>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="border-t border-base-300/60 bg-base-200/30">
        <div className="mx-auto max-w-7xl px-6 py-24 text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-primary">
            {isFa ? "درباره من" : "About Me"}
          </p>

          <h2 className="text-3xl font-bold sm:text-4xl">
            {isFa
              ? "طراحی خوب، فراتر از ظاهر زیباست."
              : "Good design is more than just looks."}
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-base-content/60">
            {isFa
              ? "هدف من ساخت تجربه‌های دیجیتالی است که علاوه بر ظاهر جذاب، سریع، قابل توسعه و متناسب با نیاز واقعی کسب‌وکار باشند."
              : "My goal is to build digital experiences that are not only visually appealing, but also fast, scalable, and tailored to real business needs."}
          </p>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="mx-auto max-w-7xl px-6 py-24">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-primary">
              {isFa ? "نمونه‌کارها" : "Selected Work"}
            </p>
            <h2 className="text-3xl font-bold">
              {isFa ? "پروژه‌های منتخب" : "Featured Projects"}
            </h2>
          </div>
          <span className="text-sm text-base-content/50">
            {isFa ? "به‌زودی..." : "Coming soon..."}
          </span>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            { title: "Web Development", icon: "⌘" },
            { title: "UI / UX Design", icon: "◈" },
            { title: "Creative Solutions", icon: "✳" },
          ].map((item) => (
            <div
              key={item.title}
              className="group rounded-2xl border border-base-300 bg-base-200/50 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-primary/50 hover:shadow-xl">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-3xl text-primary">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-base-content/60">
                {isFa
                  ? "راهکارهای مدرن و خلاقانه برای ساخت تجربه‌های دیجیتال بهتر."
                  : "Modern and creative solutions for better digital experiences."}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="border-t border-base-300/60 bg-base-200/30">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-primary">
            {isFa ? "تماس با من" : "Get In Touch"}
          </p>

          <h2 className="text-3xl font-black sm:text-5xl">
            {isFa ? "ایده‌ای برای ساختن دارید؟" : "Have an idea in mind?"}
          </h2>

          <p className="mx-auto mt-5 max-w-xl leading-8 text-base-content/60">
            {isFa
              ? "بیایید درباره پروژه بعدی شما صحبت کنیم و آن را به واقعیت تبدیل کنیم."
              : "Let's discuss your next project and turn your idea into reality."}
          </p>

          <a
            href="mailto:hello@example.com"
            className="btn btn-primary btn-lg mt-8">
            {isFa ? "شروع گفتگو" : "Start a Conversation"}
          </a>
        </div>
      </section>

      {/* Footer
      <footer className="border-t border-base-300 px-6 py-8 text-center text-sm text-base-content/50">
        © {new Date().getFullYear()} Portfolio.{" "}
        {isFa ? "تمام حقوق محفوظ است." : "All rights reserved."}
      </footer> */}
    </main>
  );
}
