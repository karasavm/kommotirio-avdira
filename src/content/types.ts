import type { Locale } from '@/data/site';

export type RichPart =
  | string
  | { href: string; label: string; external?: boolean };

export type NavItem = {
  href: string;
  label: string;
};

export type ServiceItem = {
  title: string;
  body: string;
  imageSrc: string;
  imageAlt: string;
};

export type FaqItem = {
  question: string;
  answer: RichPart[];
};

export type HourRow = {
  day: string;
  hours: string;
};

export type PhotoFeatureAction = {
  label: string;
  href: string;
  external?: boolean;
};

export type PhotoFeatureContent = {
  id: string;
  title: string;
  text: string;
  imageSrc: string;
  imageAlt: string;
  imagePosition?: string;
  /** Horizontal placement of the text block */
  align?: 'start' | 'end';
  mono?: boolean;
  actions: PhotoFeatureAction[];
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
    servicesCtaLabel: string;
    callCtaLabel: string;
    menuAria: string;
    closeAria: string;
    mobileCallLabel: string;
    mobileLangLabel: string;
    nav: NavItem[];
  };
  hero: {
    title: string;
    titleEmphasis: string;
    tagline: string;
    text: string;
    callLabel: string;
    imageSrc: string;
    imageAlt: string;
  };
  photoFeatures: PhotoFeatureContent[];
  services: {
    title: string;
    intro: string;
    items: ServiceItem[];
    note: RichPart[];
  };
  about: {
    title: string;
    paragraphs: string[];
    highlights: string[];
    imageSrc: string;
    imageAlt: string;
  };
  treatments: {
    title: string;
    text: string;
    imageSrc: string;
    imageAlt: string;
    brands: Array<{
      name: string;
      imageSrc: string;
      imageAlt: string;
    }>;
    actions: PhotoFeatureAction[];
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
    dayLabel: string;
    hoursLabel: string;
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
    secondaryLabel: string;
    imageSrc: string;
    imageAlt: string;
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
