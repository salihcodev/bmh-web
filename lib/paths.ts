export const productPaths = [
  { href: "/#features", key: "features" },
  { href: "/#how", key: "how" },
  { href: "/#store", key: "store" },
  { href: "/#faq", key: "faq" },
] as const;

export const infoPaths = [
  { href: "/about", key: "about" },
  { href: "/help", key: "help" },
  { href: "/contact", key: "contact" },
] as const;

export const legalPaths = [
  { href: "/legal/terms", key: "terms" },
  { href: "/legal/privacy", key: "privacy" },
  { href: "/legal/cookies", key: "cookies" },
  { href: "/legal/deletion", key: "deletion" },
  { href: "/legal/guidelines", key: "guidelines" },
  { href: "/legal/disclaimer", key: "disclaimer" },
] as const;

export type LegalKey = (typeof legalPaths)[number]["key"];

export const sitemapPaths = [
  "",
  ...infoPaths.map((item) => item.href),
  ...legalPaths.map((item) => item.href),
] as const;
