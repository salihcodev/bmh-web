import type { Block } from "@/content/types";
import { site } from "@/lib/site";

export function fillEmail(text: string) {
  return text.replaceAll("{email}", site.contactEmail);
}

export function LawyerNote({ children }: { children: string }) {
  return (
    <p className="rounded-3xl border border-line bg-lime/40 px-4 py-3 text-sm leading-6 text-ink dark:border-lime/30 dark:bg-lime/15">
      {children}
    </p>
  );
}

export function ProsePage({
  title,
  intro,
  updated,
  note,
  sections,
}: {
  title: string;
  intro?: string;
  updated?: string;
  note?: string;
  sections: Block[];
}) {
  return (
    <article className="mx-auto grid w-full max-w-3xl gap-8 px-5 py-14">
      <header className="grid gap-3">
        <h1 className="text-4xl font-bold tracking-tight">{title}</h1>
        {updated ? <p className="text-sm text-muted dark:text-[#b4b8be]">{updated}</p> : null}
        {intro ? <p className="text-lg leading-8 text-muted dark:text-[#c5c8ce]">{intro}</p> : null}
        {note ? <LawyerNote>{note}</LawyerNote> : null}
      </header>
      <div className="grid gap-8">
        {sections.map((section) => (
          <section key={section.heading} className="grid gap-3">
            <h2 className="text-2xl font-bold">{section.heading}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph} className="leading-8 text-ink/90 dark:text-[#e6e7ea]">
                {fillEmail(paragraph)}
              </p>
            ))}
          </section>
        ))}
      </div>
    </article>
  );
}
