import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getDictionary } from "@/lib/dictionary";
import { pageMetadata } from "@/lib/metadata";
import { isLocale } from "@/lib/site";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const page = getDictionary(locale).help;
  return pageMetadata(locale, "/help", page.title, page.intro);
}

export default async function HelpPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const page = getDictionary(locale).help;
  return (
    <article className="mx-auto grid w-full max-w-3xl gap-8 px-5 py-14">
      <header className="grid gap-3">
        <h1 className="text-4xl font-bold">{page.title}</h1>
        <p className="text-lg leading-8 text-muted dark:text-[#c5c8ce]">{page.intro}</p>
      </header>
      <div className="grid gap-4">
        {page.topics.map((topic) => (
          <section key={topic.title} className="rounded-3xl bg-paper p-6 dark:bg-panel">
            <h2 className="text-xl font-bold">{topic.title}</h2>
            <p className="mt-2 leading-7 text-muted dark:text-[#c5c8ce]">{topic.body}</p>
          </section>
        ))}
      </div>
    </article>
  );
}
