
"use client";

import { useThemeStore } from "@/store/useThemeStore";

export default function ThemeSwitcher() {
  const themes = useThemeStore((state) => state.themes);
  const activeThemeId = useThemeStore(
    (state) => state.activeThemeId
  );
  const setTheme = useThemeStore((state) => state.setTheme);

  return (
    <div className="flex flex-col gap-2 w-full max-w-xs">
      <label htmlFor="theme-select" className="text-sm font-medium">
        انتخاب تم سایت
      </label>

      <select
        id="theme-select"
        className="select select-md w-full"
        value={activeThemeId}
        onChange={(event) => setTheme(event.target.value)}
      >
        {themes.map((theme) => (
          <option key={theme.id} value={theme.id}>
            {theme.name}
          </option>
        ))}
      </select>
    </div>
  );
}
