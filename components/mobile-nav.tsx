"use client";

import { Suspense, useState } from "react";

import { LocaleToggle } from "@/components/locale-toggle";
import type { Locale } from "@/lib/site";

export function MobileNav({
  links,
  openLabel,
  closeLabel,
  locale,
  localeLabel,
  arabic,
  english,
}: {
  links: { href: string; label: string }[];
  openLabel: string;
  closeLabel: string;
  locale: Locale;
  localeLabel: string;
  arabic: string;
  english: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        className="grid size-11 place-items-center rounded-full border border-line bg-paper dark:border-white/10 dark:bg-panel"
        aria-expanded={open}
        aria-label={open ? closeLabel : openLabel}
        onClick={() => setOpen((value) => !value)}
      >
        <span className="flex w-4 flex-col gap-1" aria-hidden>
          <span className="h-px bg-current" />
          <span className="h-px bg-current" />
          <span className="h-px bg-current" />
        </span>
      </button>
      {open ? (
        <nav className="absolute inset-x-0 top-full border-b border-line bg-paper px-5 py-4 dark:border-white/10 dark:bg-night">
          <div className="mb-3">
            <Suspense fallback={null}>
              <LocaleToggle locale={locale} label={localeLabel} ar={arabic} en={english} />
            </Suspense>
          </div>
          <ul className="grid gap-1">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="flex min-h-11 items-center rounded-2xl px-3 text-base font-medium hover:bg-canvas dark:hover:bg-panel"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </div>
  );
}
