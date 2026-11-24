import type { ReactNode } from "react";

import { BrandMark } from "@/components/brand-mark";
import { DownloadButtons } from "@/components/download-buttons";
import { JsonLd } from "@/components/json-ld";
import type { Dictionary } from "@/content/types";
import type { Locale } from "@/lib/site";
import { site } from "@/lib/site";

export function HomePage({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <>
      <JsonLd data={structuredData(dict)} />
      <Hero dict={dict} locale={locale} />
      <Features dict={dict} />
      <How dict={dict} />
      <Store dict={dict} />
      <Screens dict={dict} />
      <Impact dict={dict} />
      <Faq dict={dict} />
      <Closing dict={dict} />
    </>
  );
}

function structuredData(dict: Dictionary) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: site.name,
        url: site.url,
        email: site.contactEmail,
      },
      {
        "@type": "SoftwareApplication",
        name: site.name,
        applicationCategory: "BusinessApplication",
        operatingSystem: "Android, iOS",
        description: dict.meta.description,
        inLanguage: ["ar", "en"],
        url: site.url,
      },
      {
        "@type": "FAQPage",
        mainEntity: dict.faq.items.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      },
    ],
  };
}

function Hero({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  return (
    <section className="hero-section mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 lg:grid-cols-[1.2fr_0.8fr] lg:py-24">
      <div className="hero-copy grid gap-6">
        <p className="w-fit rounded-full bg-lime px-3 py-1 text-sm font-medium text-ink">{dict.hero.eyebrow}</p>
        <h1 className="max-w-xl text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">{dict.hero.title}</h1>
        <p className="max-w-xl text-lg leading-8 text-muted dark:text-[#c5c8ce]">{dict.hero.subtitle}</p>
        <div className="flex flex-wrap gap-3">
          <a href={`/${locale}#how`} className="inline-flex h-14 items-center rounded-full bg-ink px-6 font-bold text-paper dark:bg-lime dark:text-ink">
            {dict.hero.primary}
          </a>
          <a href={`/${locale}#download`} className="inline-flex h-14 items-center rounded-full border border-line px-6 font-bold dark:border-white/15">
            {dict.hero.secondary}
          </a>
        </div>
      </div>
      <div className="hero-mark relative mx-auto grid size-64 place-items-center sm:size-72">
        <span className="ripple" />
        <span className="ripple ripple-delay-1" />
        <span className="ripple ripple-delay-2" />
        <BrandMark size={132} tile title={site.name} />
      </div>
    </section>
  );
}

function Features({ dict }: { dict: Dictionary }) {
  return (
    <section id="features" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-8">
      <SectionTitle title={dict.features.title} intro={dict.features.intro} />
      <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {dict.features.items.map((item) => (
          <li key={item.title} className="rounded-3xl bg-paper p-6 dark:bg-panel">
            <h3 className="text-xl font-bold">{item.title}</h3>
            <p className="mt-2 leading-7 text-muted dark:text-[#c5c8ce]">{item.body}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

function How({ dict }: { dict: Dictionary }) {
  return (
    <section id="how" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-16">
      <SectionTitle title={dict.how.title} intro={dict.how.intro} />
      <ol className="mt-8 grid gap-4 md:grid-cols-2">
        {dict.how.steps.map((step, index) => (
          <li key={step.title} className="rounded-3xl border border-line bg-paper p-6 dark:border-white/10 dark:bg-panel">
            <p className="font-mono text-sm text-muted" dir="ltr">
              0{index + 1}
            </p>
            <h3 className="mt-3 text-xl font-bold">{step.title}</h3>
            <p className="mt-2 leading-7 text-muted dark:text-[#c5c8ce]">{step.body}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

function Store({ dict }: { dict: Dictionary }) {
  return (
    <section id="store" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-8">
      <div className="rounded-[2rem] bg-ink px-6 py-10 text-paper sm:px-10 dark:bg-panel">
        <SectionTitle title={dict.store.title} intro={dict.store.intro} inverse />
        <ul className="mt-8 grid gap-4 lg:grid-cols-3">
          {dict.store.items.map((item) => (
            <li key={item.title} className="rounded-3xl bg-white/10 p-5">
              <h3 className="text-lg font-bold text-lime">{item.title}</h3>
              <p className="mt-2 leading-7 text-paper/80">{item.body}</p>
            </li>
          ))}
        </ul>
        <div className="mt-8 rounded-3xl bg-lime p-6 text-ink">
          <h3 className="text-2xl font-bold">{dict.bags.title}</h3>
          <p className="mt-2 leading-7">{dict.bags.intro}</p>
          <ul className="mt-4 grid gap-2">
            {dict.bags.points.map((point) => (
              <li key={point} className="leading-7">
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Screens({ dict }: { dict: Dictionary }) {
  const frames = dict.screens.frames;
  return (
    <section className="mx-auto max-w-6xl px-5 py-16">
      <SectionTitle title={dict.screens.title} intro={dict.screens.intro} />
      <p className="mt-3 text-sm text-muted dark:text-[#b4b8be]">{dict.screens.note}</p>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        <Phone label={frames.session.label}>
          <p className="text-sm font-bold">{frames.session.title}</p>
          <ul className="mt-4 grid gap-2">
            {frames.session.rows.map((row) => (
              <li key={row.name} className="flex items-center justify-between rounded-2xl bg-canvas px-3 py-2 text-sm dark:bg-night">
                <span>{row.name}</span>
                <span className="rounded-full bg-lime px-2 py-0.5 text-xs font-medium text-ink">{row.state}</span>
              </li>
            ))}
          </ul>
        </Phone>
        <Phone label={frames.people.label}>
          <p className="text-sm font-bold">{frames.people.title}</p>
          <p className="mt-3 rounded-2xl bg-canvas px-3 py-2 text-sm text-muted dark:bg-night">{frames.people.query}</p>
          <ul className="mt-3 grid gap-2">
            {frames.people.names.map((name) => (
              <li key={name} className="rounded-2xl border border-line px-3 py-2 text-sm dark:border-white/10">
                {name}
              </li>
            ))}
          </ul>
        </Phone>
        <Phone label={frames.bag.label}>
          <p className="text-sm font-bold">{frames.bag.title}</p>
          <ul className="mt-4 grid gap-2">
            {frames.bag.lines.map((line) => (
              <li key={line} className="rounded-2xl bg-canvas px-3 py-2 text-sm dark:bg-night">
                {line}
              </li>
            ))}
          </ul>
        </Phone>
      </div>
    </section>
  );
}

function Phone({ label, children }: { label: string; children: ReactNode }) {
  return (
    <figure className="mx-auto w-full max-w-xs">
      <div className="rounded-[2rem] border border-line bg-paper p-3 shadow-none dark:border-white/10 dark:bg-panel">
        <div className="mb-3 flex items-center justify-between px-2 text-xs text-muted">
          <span>{label}</span>
          <span aria-hidden className="size-2 rounded-full bg-lime" />
        </div>
        <div className="min-h-64 rounded-[1.4rem] bg-paper p-3 dark:bg-[#17171a]">{children}</div>
      </div>
    </figure>
  );
}

function Impact({ dict }: { dict: Dictionary }) {
  return (
    <section className="mx-auto max-w-6xl px-5 py-8">
      <SectionTitle title={dict.impact.title} intro={dict.impact.intro} />
      <ul className="mt-8 grid gap-4 lg:grid-cols-3">
        {dict.impact.items.map((item) => (
          <li key={item.title} className="rounded-3xl bg-paper p-6 dark:bg-panel">
            <h3 className="text-xl font-bold">{item.title}</h3>
            <p className="mt-2 leading-7 text-muted dark:text-[#c5c8ce]">{item.body}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Faq({ dict }: { dict: Dictionary }) {
  return (
    <section id="faq" className="mx-auto max-w-3xl scroll-mt-20 px-5 py-16">
      <SectionTitle title={dict.faq.title} intro={dict.faq.intro} />
      <div className="mt-8 grid gap-3">
        {dict.faq.items.map((item) => (
          <details key={item.question} className="group rounded-3xl bg-paper p-5 dark:bg-panel">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-bold [&::-webkit-details-marker]:hidden">
              {item.question}
              <span aria-hidden className="text-2xl leading-none text-muted group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-3 leading-7 text-muted dark:text-[#c5c8ce]">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

function Closing({ dict }: { dict: Dictionary }) {
  return (
    <section id="download" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-8">
      <div className="rounded-[2rem] bg-lime px-6 py-12 text-ink sm:px-12">
        <h2 className="text-4xl font-bold tracking-tight">{dict.download.title}</h2>
        <p className="mt-3 max-w-2xl text-lg leading-8">{dict.download.intro}</p>
        <div className="mt-6">
          <DownloadButtons download={dict.download} />
        </div>
      </div>
    </section>
  );
}

function SectionTitle({ title, intro, inverse = false }: { title: string; intro: string; inverse?: boolean }) {
  return (
    <div className="max-w-2xl">
      <h2 className={`text-3xl font-bold tracking-tight sm:text-4xl ${inverse ? "text-paper" : ""}`}>{title}</h2>
      <p className={`mt-3 text-lg leading-8 ${inverse ? "text-paper/75" : "text-muted dark:text-[#c5c8ce]"}`}>{intro}</p>
    </div>
  );
}
