import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ProsePage } from "@/components/prose-page";
import { getDictionary } from "@/lib/dictionary";
import { pageMetadata } from "@/lib/metadata";
import { isLocale } from "@/lib/site";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const page = getDictionary(locale).about;
  return pageMetadata(locale, "/about", page.title, page.intro);
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const page = getDictionary(locale).about;
  return <ProsePage title={page.title} intro={page.intro} sections={page.sections} />;
}
