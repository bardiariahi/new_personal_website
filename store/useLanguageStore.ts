
import { create } from "zustand";

export type Language = "fa" | "en";

interface LanguageState {
  language: Language;
  hasHydrated: boolean;
  setLanguage: (language: Language) => void;
  initializeLanguage: () => void;
}

const COOKIE_NAME = "website-language";

function getCookieLanguage(): Language {
  if (typeof document === "undefined") return "en";

  const cookie = document.cookie
    .split("; ")
    .find((item) => item.startsWith(`${COOKIE_NAME}=`));

  const value = cookie?.split("=")[1];

  return value === "fa" || value === "en" ? value : "en";
}

function saveLanguageCookie(language: Language) {
  document.cookie = `${COOKIE_NAME}=${language}; path=/; max-age=31536000; SameSite=Lax`;
}

export const useLanguageStore = create<LanguageState>((set) => ({
  language: "en",
  hasHydrated: false,

  setLanguage: (language) => {
    saveLanguageCookie(language);
    set({ language });
  },

  initializeLanguage: () => {
    const language = getCookieLanguage();

    set({
      language,
      hasHydrated: true,
    });
  },
}));
