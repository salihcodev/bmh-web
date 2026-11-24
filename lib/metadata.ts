import type { Metadata } from "next";

import type { Locale } from "@/lib/site";
import { site } from "@/lib/site";

export function pageMetadata(
  locale: Locale,
  path: string,
  title: string,
  description: string,
): Metadata {
  const suffix = path ? path : "";
  const canonical = `${site.url}/${locale}${suffix}`;
  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        ar: `${site.url}/ar${suffix}`,
        en: `${site.url}/en${suffix}`,
        "x-default": `${site.url}/ar${suffix}`,
      },
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: site.name,
      locale: locale === "ar" ? "ar_EG" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export function utilityMetadata(path: string, title: string, description: string): Metadata {
  const canonical = `${site.url}${path}`;
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: site.name,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
