import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";

import { CopyButton } from "@/components/copy-button";
import { DownloadButtons } from "@/components/download-buttons";
import { getDictionary } from "@/lib/dictionary";
import { joinTarget } from "@/lib/links";
import { utilityMetadata } from "@/lib/metadata";
import { isLocale } from "@/lib/site";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const join = getDictionary(locale).join;
  return utilityMetadata("/join", join.title, join.body);
}

export default async function JoinPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ w?: string; c?: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);

  return (
    <article className="mx-auto grid w-full max-w-xl gap-6 px-5 py-16">
      <h1 className="text-4xl font-bold">{dict.join.title}</h1>
      <p className="text-lg leading-8 text-muted dark:text-[#c5c8ce]">{dict.join.body}</p>
      <Suspense fallback={<p className="text-muted">{dict.join.codeLabel}</p>}>
        <JoinCode searchParams={searchParams} copy={dict.join.copy} copied={dict.join.copied} codeLabel={dict.join.codeLabel} missing={dict.join.missing} schemeHint={dict.join.schemeHint} openApp={dict.download.openApp} />
      </Suspense>
      <DownloadButtons download={dict.download} />
    </article>
  );
}

async function JoinCode({
  searchParams,
  copy,
  copied,
  codeLabel,
  missing,
  schemeHint,
  openApp,
}: {
  searchParams: Promise<{ w?: string; c?: string }>;
  copy: string;
  copied: string;
  codeLabel: string;
  missing: string;
  schemeHint: string;
  openApp: string;
}) {
  const query = await searchParams;
  const target = joinTarget(query.w, query.c);
  if (!target) {
    return <p className="rounded-3xl bg-paper p-5 leading-7 dark:bg-panel">{missing}</p>;
  }

  return (
    <div className="grid gap-4 rounded-3xl bg-paper p-5 dark:bg-panel">
      <p className="text-sm font-medium text-muted dark:text-[#b4b8be]">{codeLabel}</p>
      <p dir="ltr" className="font-mono text-2xl font-bold text-ink dark:text-[#f3f4f6]">
        {target.code}
      </p>
      <div className="flex flex-wrap gap-3">
        <CopyButton value={target.code} label={copy} copied={copied} />
        <a href={target.app} className="inline-flex h-11 items-center rounded-full bg-ink px-4 text-sm font-bold text-paper dark:bg-lime dark:text-ink">
          {openApp}
        </a>
      </div>
      <p className="text-sm leading-6 text-muted dark:text-[#b4b8be]">{schemeHint}</p>
    </div>
  );
}
