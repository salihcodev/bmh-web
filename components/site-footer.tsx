import type { Dictionary } from "@/content/types";
import { infoPaths, legalPaths, productPaths } from "@/lib/paths";
import type { Locale } from "@/lib/site";
import { site } from "@/lib/site";

export function SiteFooter({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <footer className="mt-20 border-t border-line bg-paper dark:border-white/10 dark:bg-panel">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-bold">{site.name}</p>
          <p className="mt-2 max-w-xs text-sm leading-6 text-muted dark:text-[#b4b8be]">{dict.footer.rights}</p>
        </div>
        <LinkColumn title={dict.footer.product} locale={locale} items={productPaths.map((item) => ({ href: item.href, label: dict.nav[item.key] }))} />
        <LinkColumn title={dict.footer.company} locale={locale} items={infoPaths.map((item) => ({ href: item.href, label: dict.nav[item.key] }))} />
        <LinkColumn title={dict.footer.legal} locale={locale} items={legalPaths.map((item) => ({ href: item.href, label: dict.legalNav[item.key] }))} />
      </div>
    </footer>
  );
}

function LinkColumn({
  title,
  locale,
  items,
}: {
  title: string;
  locale: Locale;
  items: { href: string; label: string }[];
}) {
  return (
    <nav aria-label={title}>
      <p className="text-sm font-bold">{title}</p>
      <ul className="mt-3 grid gap-2 text-sm text-muted dark:text-[#b4b8be]">
        {items.map((item) => (
          <li key={item.href}>
            <a className="hover:text-ink dark:hover:text-[#f3f4f6]" href={`/${locale}${item.href}`}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
