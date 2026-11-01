
"use client";

import { useLanguageStore } from "@/store/useLanguageStore";

export default function LanguageSwitcher() {
  const language = useLanguageStore((state) => state.language);
  const setLanguage = useLanguageStore((state) => state.setLanguage);
  const hasHydrated = useLanguageStore((state) => state.hasHydrated);

  return (
    <select
      className="select select-bordered w-full"
      value={hasHydrated ? language : "en"}
      disabled={!hasHydrated}
      onChange={(event) =>
        setLanguage(event.target.value as "fa" | "en")
      }
      aria-label="Select language"
    >
      <option value="en">English</option>
      <option value="fa">فارسی</option>
    </select>
  );
}
