import type { Locale } from '@/data/site';

export type RichPart =
  | string
  | { href: string; label: string; external?: boolean };

export type NavItem = {
  href: string;
  label: string;
};

export type CardItem = {
  title: string;
  body: string;
};

export type FaqItem = {
  question: string;
  answer: RichPart[];
};

export type HourRow = {
  day: string;
  hours: string;
};

export type GalleryItem = {
  src: string;
  alt: string;
};

export type PageContent = {
  locale: Locale;
  homePath: string;
  otherLocalePath: string;
  otherLocaleLabel: string;
  otherLocaleAria: string;
  seo: {
    title: string;
    description: string;
    ogDescription: string;
    ogLocale: string;
    ogLocaleAlternate: string;
    siteName: string;
    imageAlt: string;
    applicationName: string;
    inLanguage: string;
    canonicalPath: string;
  };
  header: {
    logoAria: string;
    logoPrimary: string;
    logoStrong: string;
    logoLocation: string;
    navAria: string;
    phoneAria: string;
    phoneLabel: string;
    menuAria: string;
    mobileCallLabel: string;
    mobileLangLabel: string;
    nav: NavItem[];
  };
  hero: {
    title: string;
    location: string;
    tagline: string;
    callLabel: string;
    directionsLabel: string;
    imageAlt: string;
  };
  services: {
    title: string;
    intro: string;
    items: CardItem[];
    note: RichPart[];
  };
  whyUs: {
    title: string;
    items: CardItem[];
  };
  about: {
    title: string;
    paragraphs: string[];
  };
  gallery: {
    title: string;
    intro: string;
    listAria: string;
    items: GalleryItem[];
  };
  location: {
    title: string;
    businessName: string;
    addressLines: string[];
    phoneLabel: string;
    mapsLabel: string;
    note: string;
    mapTitle: string;
  };
  hours: {
    title: string;
    caption: string;
    rows: HourRow[];
    note: RichPart[];
  };
  faq: {
    title: string;
    items: FaqItem[];
  };
  cta: {
    title: string;
    text: string;
    buttonLabel: string;
  };
  footer: {
    name: string;
    address: string;
    phoneLabel: string;
    navAria: string;
    nav: NavItem[];
    facebookAria: string;
    copyright: string;
  };
  mobileCall: {
    label: string;
    aria: string;
  };
};
