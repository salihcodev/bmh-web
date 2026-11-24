import type { Dictionary } from "@/content/types";
import { site } from "@/lib/site";
import Image from "next/image";

export function DownloadButtons({ download, align = "start" }: { download: Dictionary["download"]; align?: "start" | "center" }) {
  return (
    <div className={`flex flex-wrap gap-3 ${align === "center" ? "justify-center" : ""}`}>
      <StoreLink href={site.iosStoreUrl} label="App Store" soon={download.soon} platform="apple" />
      <StoreLink href={site.androidStoreUrl} label="Google Play" soon={download.soon} platform="google" />
    </div>
  );
}

function StoreLink({ href, label, soon, platform }: { href: string; label: string; soon: string; platform: "apple" | "google" }) {
  const icon = platform === "apple" ? <AppleIcon /> : <PlayIcon />;
  const classes = "inline-flex h-16 min-w-48 items-center gap-3 rounded-full border border-line bg-paper px-6 text-sm font-bold text-ink shadow-sm transition-[background-color,border-color,box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:border-ink/30 hover:bg-canvas hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink dark:border-white/25 dark:bg-panel dark:text-[#f3f4f6] dark:hover:border-white/35 dark:hover:bg-[#34383f] dark:hover:text-white dark:focus-visible:outline-white";

  if (!href) {
    return (
      <span
        aria-disabled="true"
        className={`${classes} cursor-not-allowed opacity-80`}
      >
        {icon}
        <span className="flex flex-col items-start"><span>{label}</span><span className="text-xs font-normal text-muted dark:text-[#b4b8be]">{soon}</span></span>
      </span>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={classes}
    >
      {icon}
      {label}
    </a>
  );
}

function AppleIcon() {
  return <Image aria-hidden="true" alt="" src="/icons/store/app-store.svg" width={40} height={40} className="size-9 shrink-0 object-contain" />;
}

function PlayIcon() {
  return <Image aria-hidden="true" alt="" src="/icons/store/google-play.svg" width={37} height={40} className="h-9 w-8 shrink-0 object-contain" />;
}
