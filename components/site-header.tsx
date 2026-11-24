import { Suspense } from "react";

import { BrandMark } from "@/components/brand-mark";
import { LocaleToggle } from "@/components/locale-toggle";
import { MobileNav } from "@/components/mobile-nav";
import { ThemeToggle } from "@/components/theme-toggle";
import type { Dictionary } from "@/content/types";
import { infoPaths, productPaths } from "@/lib/paths";
import type { Locale } from "@/lib/site";
import { site } from "@/lib/site";

export function SiteHeader({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const links = [
    ...productPaths.map((item) => ({
      href: `/${locale}${item.href}`,
      label: dict.nav[item.key],
    })),
    ...infoPaths.map((item) => ({
      href: `/${locale}${item.href}`,
      label: dict.nav[item.key],
    })),
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-paper/90 backdrop-blur-md dark:border-white/10 dark:bg-night/90">
      <div className="relative mx-auto flex h-16 max-w-6xl items-center gap-3 px-5">
        <a href={`/${locale}`} className="flex items-center gap-2 font-bold tracking-tight">
          <BrandMark size={36} tile title={site.name} />
          <span>{site.name}</span>
        </a>
        <nav className="ms-6 hidden items-center gap-5 text-sm font-medium text-muted md:flex" aria-label={dict.nav.features}>
          {productPaths.map((item) => (
            <a key={item.href} href={`/${locale}${item.href}`} className="hover:text-ink dark:hover:text-[#f3f4f6]">
              {dict.nav[item.key]}
            </a>
          ))}
        </nav>
        <div className="ms-auto flex items-center gap-2">
          <div className="hidden md:block">
            <Suspense fallback={<span className="inline-block h-11 min-w-28 rounded-full border border-line" />}>
              <LocaleToggle locale={locale} label={dict.locale.label} ar={dict.locale.ar} en={dict.locale.en} />
            </Suspense>
          </div>
          <ThemeToggle toLight={dict.theme.toLight} toDark={dict.theme.toDark} />
          <MobileNav
            links={links}
            openLabel={dict.nav.openMenu}
            closeLabel={dict.nav.closeMenu}
            locale={locale}
            localeLabel={dict.locale.label}
            arabic={dict.locale.ar}
            english={dict.locale.en}
          />
        </div>
      </div>
    </header>
  );
}
