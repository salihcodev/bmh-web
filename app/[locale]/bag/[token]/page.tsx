import type { Metadata } from "next";
import { Suspense } from "react";

import { DownloadButtons } from "@/components/download-buttons";
import { getDictionary } from "@/lib/dictionary";
import { bagTarget } from "@/lib/links";
import { utilityMetadata } from "@/lib/metadata";
import { isLocale } from "@/lib/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const bag = getDictionary(locale).bag;
  return utilityMetadata("/bag", bag.title, bag.body);
}

export default function BagPage({ params }: { params: Promise<{ locale: string; token: string }> }) {
  return (
    <Suspense fallback={<div className="mx-auto min-h-64 max-w-xl px-5 py-16" />}>
      <BagContent params={params} />
    </Suspense>
  );
}

async function BagContent({ params }: { params: Promise<{ locale: string; token: string }> }) {
  const { locale, token } = await params;
  if (!isLocale(locale)) return null;
  const dict = getDictionary(locale);
  const href = bagTarget(token);

  return (
    <article className="mx-auto grid w-full max-w-xl gap-6 px-5 py-16">
      <h1 className="text-4xl font-bold">{dict.bag.title}</h1>
      <p className="text-lg leading-8 text-muted dark:text-[#c5c8ce]">{dict.bag.body}</p>
      <p className="leading-7">{dict.bag.private}</p>
      {href ? (
        <a href={href} className="inline-flex h-14 w-fit items-center rounded-full bg-ink px-6 font-bold text-paper dark:bg-lime dark:text-ink">
          {dict.download.openApp}
        </a>
      ) : null}
      <DownloadButtons download={dict.download} />
    </article>
  );
}
