import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ProsePage } from "@/components/prose-page";
import { getDictionary } from "@/lib/dictionary";
import { pageMetadata } from "@/lib/metadata";
import { isLocale, site } from "@/lib/site";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const page = getDictionary(locale).contact;
  return pageMetadata(locale, "/contact", page.title, page.intro);
}

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);
  return (
    <>
      <ProsePage title={dict.contact.title} intro={dict.contact.intro} sections={dict.contact.sections} />
      <p className="mx-auto -mt-4 w-full max-w-3xl px-5 pb-16">
        <a
          className="inline-flex h-14 items-center rounded-full bg-ink px-6 font-bold text-paper dark:bg-lime dark:text-ink"
          href={`mailto:${site.contactEmail}`}
        >
          {dict.contact.emailLabel}: <span dir="ltr" className="ms-2">{site.contactEmail}</span>
        </a>
      </p>
    </>
  );
}
