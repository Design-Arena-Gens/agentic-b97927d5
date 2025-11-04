"use client";

import { useTheme } from "@/components/theme-provider";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      className="theme-toggle"
      aria-label="Toggle color mode"
      onClick={toggleTheme}
    >
      <span className="toggle-track">
        <span className={`toggle-thumb ${theme === "dark" ? "thumb-dark" : "thumb-light"}`} />
      </span>
      <span className="toggle-text">{theme === "dark" ? "Switch to light" : "Switch to dark"}</span>
    </button>
  );
}
