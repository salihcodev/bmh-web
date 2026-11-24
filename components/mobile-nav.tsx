"use client";

import { Suspense, useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";

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
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    function closeOnOutsidePointer(event: PointerEvent) {
      if (event.target instanceof Node && !menuRef.current?.contains(event.target)) {
        setOpen(false);
      }
    }

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    document.addEventListener("pointerdown", closeOnOutsidePointer);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("pointerdown", closeOnOutsidePointer);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [open]);

  return (
    <div className="relative md:hidden" ref={menuRef}>
      <button
        type="button"
        className="grid size-11 place-items-center rounded-full border border-line bg-paper dark:border-white/10 dark:bg-panel"
        aria-expanded={open}
        aria-controls="mobile-navigation"
        aria-label={open ? closeLabel : openLabel}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <X size={20} strokeWidth={1.8} aria-hidden="true" /> : <Menu size={20} strokeWidth={1.8} aria-hidden="true" />}
      </button>
      {open ? (
        <nav id="mobile-navigation" className="fixed inset-x-0 top-16 z-50 w-screen max-w-full min-w-0 border-b border-line bg-paper px-4 py-4 shadow-lg dark:border-white/10 dark:bg-night sm:px-5">
          <div className="mb-3 w-full">
            <Suspense fallback={null}>
              <LocaleToggle locale={locale} label={localeLabel} ar={arabic} en={english} fullWidth />
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
