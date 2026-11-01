"use client";

import { useEffect, type ReactNode } from "react";
import { useThemeStore } from "@/store/useThemeStore";

interface ThemeProviderProps {
  children: ReactNode;
}

export default function ThemeProvider({ children }: ThemeProviderProps) {
  const activeThemeId = useThemeStore((state) => state.activeThemeId);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", activeThemeId);
  }, [activeThemeId]);

  return <>{children}</>;
}
