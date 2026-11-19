"use client";

export default function ThemeSwitcher({ fa }: { fa: boolean }) {
  function toggle() {
    const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem("theme", next); } catch {}
  }
  return <button className="theme-toggle" type="button" onClick={toggle} aria-label={fa ? "تغییر تم روشن یا تیره" : "Toggle light or dark theme"} title={fa ? "تغییر تم" : "Change theme"}>
    <span className="theme-track" aria-hidden="true"><span className="theme-stars">✦</span><span className="theme-knob"><span className="theme-sun">☀</span><span className="theme-moon">☾</span></span></span>
  </button>;
}
