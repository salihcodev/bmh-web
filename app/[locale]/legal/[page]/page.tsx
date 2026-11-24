import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ProsePage } from "@/components/prose-page";
import type { Dictionary } from "@/content/types";
import { getDictionary } from "@/lib/dictionary";
import { pageMetadata } from "@/lib/metadata";
import { legalPaths, type LegalKey } from "@/lib/paths";
import { isLocale } from "@/lib/site";

function isLegal(value: string): value is LegalKey {
  return legalPaths.some((item) => item.key === value);
}

function documentFor(dict: Dictionary, key: LegalKey) {
  return dict[key];
}

export function generateStaticParams() {
  return legalPaths.map((item) => ({ page: item.key }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; page: string }>;
}): Promise<Metadata> {
  const { locale, page } = await params;
  if (!isLocale(locale) || !isLegal(page)) return {};
  const document = documentFor(getDictionary(locale), page);
  return pageMetadata(locale, `/legal/${page}`, document.title, document.sections[0]?.paragraphs[0] ?? document.title);
}

export default async function LegalPage({ params }: { params: Promise<{ locale: string; page: string }> }) {
  const { locale, page } = await params;
  if (!isLocale(locale) || !isLegal(page)) notFound();
  const dict = getDictionary(locale);
  const document = documentFor(dict, page);
  return (
    <ProsePage
      title={document.title}
      updated={document.updated}
      note={dict.lawyerNote}
      sections={document.sections}
    />
  );
}
