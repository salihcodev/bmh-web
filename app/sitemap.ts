import type { MetadataRoute } from "next";

import { sitemapPaths } from "@/lib/paths";
import { locales, site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-11-19");
  return locales.flatMap((locale) =>
    sitemapPaths.map((path) => ({
      url: `${site.url}/${locale}${path}`,
      lastModified,
      alternates: {
        languages: {
          ar: `${site.url}/ar${path}`,
          en: `${site.url}/en${path}`,
        },
      },
    })),
  );
}
