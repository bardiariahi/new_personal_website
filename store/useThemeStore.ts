
import { create } from "zustand";

export type ThemeMode = "light" | "dark" | "custom";

export interface WebsiteTheme {
  id: string;
  name: string;
  mode: ThemeMode;
  colors?: {
    primary?: string;
    background?: string;
    foreground?: string;
    secondary?: string;
  };
}

interface WebsiteThemeState {
  themes: WebsiteTheme[];
  activeThemeId: string;

  setTheme: (themeId: string) => void;
  addNewTheme: (theme: WebsiteTheme) => void;
  updateTheme: (themeId: string, updates: Partial<WebsiteTheme>) => void;
  removeTheme: (themeId: string) => void;
}

const defaultThemes: WebsiteTheme[] = [
  {
    id: "light",
    name: "Light",
    mode: "light",
  },
  {
    id: "dark",
    name: "Dark",
    mode: "dark",
  },
];

export const useThemeStore = create<WebsiteThemeState>((set) => ({
  themes: defaultThemes,
  activeThemeId: "light",

  setTheme: (themeId) =>
    set((state) => {
      const exists = state.themes.some((theme) => theme.id === themeId);

      if (!exists) return state;

      return { activeThemeId: themeId };
    }),

  addNewTheme: (theme) =>
    set((state) => {
      if (state.themes.some((item) => item.id === theme.id)) {
        return state;
      }

      return {
        themes: [...state.themes, theme],
      };
    }),

  updateTheme: (themeId, updates) =>
    set((state) => ({
      themes: state.themes.map((theme) =>
        theme.id === themeId
          ? { ...theme, ...updates, id: theme.id }
          : theme
      ),
    })),

  removeTheme: (themeId) =>
    set((state) => {
      if (themeId === "light" || themeId === "dark") {
        return state;
      }

      return {
        themes: state.themes.filter((theme) => theme.id !== themeId),
        activeThemeId:
          state.activeThemeId === themeId
            ? "light"
            : state.activeThemeId,
      };
    }),
}));
