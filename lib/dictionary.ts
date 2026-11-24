import { ar } from "@/content/ar";
import { en } from "@/content/en";
import type { Dictionary } from "@/content/types";
import type { Locale } from "@/lib/site";

const dictionaries: Record<Locale, Dictionary> = { ar, en };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
