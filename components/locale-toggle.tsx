"use client";

import { usePathname, useSearchParams } from "next/navigation";

import type { Locale } from "@/lib/site";

export function LocaleToggle({
  locale,
  label,
  ar,
  en,
  fullWidth = false,
}: {
  locale: Locale;
  label: string;
  ar: string;
  en: string;
  fullWidth?: boolean;
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
    <div className={`flex h-11 min-w-0 items-center rounded-full border border-line bg-paper p-1 text-sm dark:border-white/10 dark:bg-panel ${fullWidth ? "w-full" : "w-fit"}`} role="group" aria-label={label}>
      <LocaleLink fullWidth={fullWidth} language="ar" current={locale === "ar"} href={hrefFor("ar")} onClick={(event) => choose(event, "ar")}>
        {ar}
      </LocaleLink>
      <LocaleLink fullWidth={fullWidth} language="en" current={locale === "en"} href={hrefFor("en")} onClick={(event) => choose(event, "en")}>
        {en}
      </LocaleLink>
    </div>
  );
}

function LocaleLink({
  fullWidth,
  language,
  current,
  href,
  onClick,
  children,
}: {
  fullWidth: boolean;
  language: Locale;
  current: boolean;
  href: string;
  onClick: (event: React.MouseEvent<HTMLAnchorElement>) => void;
  children: string;
}) {
  return (
    <a
      href={href}
      hrefLang={language}
      lang={language}
      dir={language === "ar" ? "rtl" : "ltr"}
      aria-current={current ? "true" : undefined}
      onClick={onClick}
      className={`grid h-9 ${fullWidth ? "min-w-0 flex-1" : "min-w-11"} place-items-center rounded-full px-3 font-medium ${language === "ar" ? "font-arabic" : "font-sans"} ${
        current ? "bg-ink text-paper dark:bg-lime dark:text-ink" : "text-muted hover:text-ink dark:hover:text-[#f3f4f6]"
      }`}
    >
      {children}
    </a>
  );
}
