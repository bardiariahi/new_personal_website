
"use client";

import { useEffect } from "react";
import { useLanguageStore } from "@/store/useLanguageStore";

export default function LanguageProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const language = useLanguageStore((state) => state.language);
  const hasHydrated = useLanguageStore((state) => state.hasHydrated);
  const initializeLanguage = useLanguageStore(
    (state) => state.initializeLanguage
  );

  useEffect(() => {
    initializeLanguage();
  }, [initializeLanguage]);

  useEffect(() => {
    if (!hasHydrated) return;

    document.documentElement.lang = language;
    document.documentElement.dir = language === "fa" ? "rtl" : "ltr";
  }, [language, hasHydrated]);

  return children;
}
