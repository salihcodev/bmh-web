import Link from "next/link";

import { getDictionary } from "@/lib/dictionary";

export default function NotFound() {
  const dict = getDictionary("ar");
  const english = getDictionary("en");
  return (
    <article className="mx-auto grid max-w-xl gap-4 px-5 py-20">
      <h1 className="text-4xl font-bold">{dict.notFound.title}</h1>
      <p className="leading-7 text-muted dark:text-[#c5c8ce]">{dict.notFound.body}</p>
      <p className="leading-7 text-muted dark:text-[#c5c8ce]" dir="ltr">{english.notFound.body}</p>
      <Link href="/ar" className="inline-flex h-14 w-fit items-center rounded-full bg-ink px-6 font-bold text-paper dark:bg-lime dark:text-ink">
        {dict.notFound.home}
      </Link>
    </article>
  );
}
