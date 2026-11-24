export type Block = {
  heading: string;
  paragraphs: string[];
};

export type Named = {
  title: string;
  body: string;
};

export type Dictionary = {
  skip: string;
  lawyerNote: string;
  meta: {
    title: string;
    description: string;
  };
  nav: {
    features: string;
    how: string;
    store: string;
    faq: string;
    about: string;
    help: string;
    contact: string;
    openMenu: string;
    closeMenu: string;
  };
  locale: {
    label: string;
    ar: string;
    en: string;
  };
  theme: {
    label: string;
    toLight: string;
    toDark: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    primary: string;
    secondary: string;
  };
  features: {
    title: string;
    intro: string;
    items: Named[];
  };
  how: {
    title: string;
    intro: string;
    steps: Named[];
  };
  store: {
    title: string;
    intro: string;
    items: Named[];
  };
  bags: {
    title: string;
    intro: string;
    points: string[];
  };
  screens: {
    title: string;
    intro: string;
    note: string;
    frames: {
      session: { label: string; title: string; rows: { name: string; state: string }[] };
      people: { label: string; title: string; query: string; names: string[] };
      bag: { label: string; title: string; lines: string[] };
    };
  };
  faq: {
    title: string;
    intro: string;
    items: { question: string; answer: string }[];
  };
  impact: {
    title: string;
    intro: string;
    items: Named[];
  };
  download: {
    title: string;
    intro: string;
    ios: string;
    android: string;
    soon: string;
    openApp: string;
  };
  footer: {
    product: string;
    company: string;
    legal: string;
    rights: string;
  };
  legalNav: {
    terms: string;
    privacy: string;
    cookies: string;
    deletion: string;
    guidelines: string;
    disclaimer: string;
  };
  about: {
    title: string;
    intro: string;
    sections: Block[];
  };
  contact: {
    title: string;
    intro: string;
    emailLabel: string;
    sections: Block[];
  };
  help: {
    title: string;
    intro: string;
    topics: Named[];
  };
  terms: { title: string; updated: string; sections: Block[] };
  privacy: { title: string; updated: string; sections: Block[] };
  cookies: { title: string; updated: string; sections: Block[] };
  deletion: { title: string; updated: string; sections: Block[] };
  guidelines: { title: string; updated: string; sections: Block[] };
  disclaimer: { title: string; updated: string; sections: Block[] };
  join: {
    title: string;
    body: string;
    codeLabel: string;
    copy: string;
    copied: string;
    missing: string;
    schemeHint: string;
  };
  bag: {
    title: string;
    body: string;
    private: string;
  };
  notFound: {
    title: string;
    body: string;
    home: string;
  };
};
