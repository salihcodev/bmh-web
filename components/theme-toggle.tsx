"use client";

import { MoonStar, Sun } from "lucide-react";

const SCRIPT = `(function(){try{var m=document.cookie.match(/(?:^|; )theme=(light|dark)/);var t=m?m[1]:"system";var d=t==="dark"||(t!=="light"&&window.matchMedia("(prefers-color-scheme: dark)").matches);var r=document.documentElement;r.classList.toggle("dark",d);r.style.colorScheme=d?"dark":"light";}catch(e){}})();`;

export function ThemeScript() {
  return <script dangerouslySetInnerHTML={{ __html: SCRIPT }} />;
}

export function ThemeToggle({ toLight, toDark }: { toLight: string; toDark: string }) {
  function toggle() {
    const next = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", next);
    document.documentElement.style.colorScheme = next ? "dark" : "light";
    document.cookie = `theme=${next ? "dark" : "light"}; Path=/; Max-Age=31536000; SameSite=Lax`;
  }

  return (
    <button
      type="button"
      onClick={toggle}
      className="theme-toggle grid size-11 place-items-center rounded-full border border-line bg-paper text-ink transition hover:bg-canvas dark:border-white/10 dark:bg-panel dark:text-[#f3f4f6] dark:hover:bg-white/5"
    >
      <span className="sr-only dark:hidden">{toDark}</span>
      <span className="sr-only hidden dark:inline">{toLight}</span>
      <span className="theme-icon-stack" aria-hidden="true">
        <span className="theme-icon theme-icon-moon"><MoonStar size={20} strokeWidth={2} /></span>
        <span className="theme-icon theme-icon-sun"><Sun size={20} strokeWidth={2} /></span>
      </span>
    </button>
  );
}
