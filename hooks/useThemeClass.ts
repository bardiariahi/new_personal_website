"use client";

import { useThemeStore } from "@/store/useThemeStore";

type ThemeClasses = {
  light: string;
  dark: string;
  [themeId: string]: string;
};

export function useThemeClass(classes: ThemeClasses): string {
  const activeThemeId = useThemeStore((state) => state.activeThemeId);

  return classes[activeThemeId] ?? classes.light ?? "";
}
