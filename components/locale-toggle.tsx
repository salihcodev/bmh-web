"use client";

import { usePathname, useSearchParams } from "next/navigation";

import type { Locale } from "@/lib/site";

export function LocaleToggle({
  locale,
  label,
  ar,
  en,
}: {
  locale: Locale;
  label: string;
  ar: string;
  en: string;
}) {
  const pathname = usePathname() || "/";
  const query = useSearchParams().toString();

  function hrefFor(next: Locale) {
    const bare = pathname.replace(/^\/(ar|en)/, "") || "/";
    const path = bare === "/" ? `/${next}` : `/${next}${bare}`;
    return query ? `${path}?${query}` : path;
  }

  function choose(event: React.MouseEvent<HTMLAnchorElement>, next: Locale) {
    document.cookie = `locale=${next}; Path=/; Max-Age=31536000; SameSite=Lax`;
    const bare = pathname.replace(/^\/(ar|en)/, "") || "/";
    if (bare === "/join" || bare.startsWith("/bag/")) {
      event.preventDefault();
      window.location.assign(hrefFor(next));
    }
  }

  return (
    <div className="flex h-11 items-center rounded-full border border-line bg-paper p-1 text-sm dark:border-white/10 dark:bg-panel" role="group" aria-label={label}>
      <LocaleLink current={locale === "ar"} href={hrefFor("ar")} onClick={(event) => choose(event, "ar")}>
        {ar}
      </LocaleLink>
      <LocaleLink current={locale === "en"} href={hrefFor("en")} onClick={(event) => choose(event, "en")}>
        {en}
      </LocaleLink>
    </div>
  );
}

function LocaleLink({
  current,
  href,
  onClick,
  children,
}: {
  current: boolean;
  href: string;
  onClick: (event: React.MouseEvent<HTMLAnchorElement>) => void;
  children: string;
}) {
  return (
    <a
      href={href}
      hrefLang={children === "English" ? "en" : "ar"}
      aria-current={current ? "true" : undefined}
      onClick={onClick}
      className={`grid h-9 min-w-11 place-items-center rounded-full px-3 font-medium ${
        current ? "bg-ink text-paper dark:bg-lime dark:text-ink" : "text-muted hover:text-ink dark:hover:text-[#f3f4f6]"
      }`}
    >
      {children}
    </a>
  );
}
