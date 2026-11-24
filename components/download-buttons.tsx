import type { Dictionary } from "@/content/types";
import { site } from "@/lib/site";

export function DownloadButtons({ download, align = "start" }: { download: Dictionary["download"]; align?: "start" | "center" }) {
  return (
    <div className={`flex flex-wrap gap-3 ${align === "center" ? "justify-center" : ""}`}>
      <StoreLink href={site.iosStoreUrl} label={download.ios} soon={download.soon} />
      <StoreLink href={site.androidStoreUrl} label={download.android} soon={download.soon} />
    </div>
  );
}

function StoreLink({ href, label, soon }: { href: string; label: string; soon: string }) {
  if (!href) {
    return (
      <span
        aria-disabled="true"
        className="inline-flex h-14 min-w-44 flex-col items-start justify-center rounded-full border border-line px-5 text-sm dark:border-white/15"
      >
        <span className="font-bold text-ink dark:text-[#f3f4f6]">{label}</span>
        <span className="text-xs text-muted dark:text-[#b4b8be]">{soon}</span>
      </span>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex h-14 min-w-44 items-center justify-center rounded-full bg-ink px-5 text-sm font-bold text-paper dark:bg-lime dark:text-ink"
    >
      {label}
    </a>
  );
}
