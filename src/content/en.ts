import { site } from '@/data/site';
import type { PageContent } from '@/content/types';

const tel = `tel:${site.phone}`;

export const en: PageContent = {
  locale: 'en',
  homePath: '/en/',
  otherLocalePath: '/',
  otherLocaleLabel: 'ΕΛ',
  otherLocaleAria: 'Ελληνικά',
  seo: {
    title: 'Helen Haircut | Hair Salon in Avdira, Xanthi',
    description:
      'Helen Haircut in Avdira, Xanthi. Haircuts for women, men and children, coloring, highlights and special-occasion styling. Call +30 25410 51109.',
    ogDescription:
      'Hair salon in Avdira, Xanthi, Greece. Haircuts, coloring, highlights, balayage, wedding updos and hair care. Call: +30 2541051109.',
    ogLocale: 'en_US',
    ogLocaleAlternate: 'el_GR',
    siteName: site.nameEn,
    imageAlt: 'Helen Haircut hair salon in Avdira, Xanthi',
    applicationName: site.nameEn,
    inLanguage: 'en',
    canonicalPath: '/en/',
  },
  header: {
    logoAria: 'Helen Haircut — Home',
    logoPrimary: 'Hair Salon',
    logoStrong: 'Helen',
    logoLocation: 'in Avdira',
    navAria: 'Main navigation',
    phoneAria: `Call us: ${site.phoneDisplayEn}`,
    phoneLabel: site.phoneDisplayEn,
    servicesCtaLabel: 'Services',
    callCtaLabel: 'Call',
    menuAria: 'Open menu',
    closeAria: 'Close menu',
    mobileCallLabel: `Call: ${site.phoneDisplayEn}`,
    mobileLangLabel: 'Δείτε στα Ελληνικά',
    nav: [
      { href: '#about', label: 'The Salon' },
      { href: '#services', label: 'Services' },
      { href: '#booking', label: 'Book' },
      { href: '#contact', label: 'Contact' },
      { href: '#faq', label: 'FAQ' },
    ],
  },
  hero: {
    title: 'Hair salon in',
    titleEmphasis: 'Avdira, Xanthi',
    tagline: 'Haircuts, coloring and styling by Helen — with simplicity, care and respect.',
    text: 'At our salon in Avdira we offer women’s, men’s and children’s haircuts, coloring, styling and hair care for every age — with modern equipment and products from recognized brands.',
    callLabel: 'Call us now',
    imageSrc: '/images/kommotirio-eleni-avdira-hero.webp',
    imageAlt: 'Inside Helen Haircut salon in Avdira, Xanthi',
  },
  photoFeatures: [
    {
      id: 'style-feature',
      title: 'Find your style',
      text: 'From an everyday cut to a special-occasion look — explore our services and book your visit in Avdira.',
      imageSrc: '/images/kommotirio-eleni-avdira-find-your-style.webp',
      imageAlt: 'Find your style at Helen Haircut',
      imagePosition: '60% center',
      align: 'start',
      mono: false,
      actions: [
        { label: 'Services', href: '#services' },
        { label: 'Book', href: '#booking' },
        { label: 'Find us', href: '#contact' },
      ],
    },
  ],
  services: {
    title: 'Services',
    intro: 'Haircuts and care for the whole family in Avdira.',
    items: [
      {
        title: 'For her',
        body: 'Haircuts and styling tailored to your face and hair.',
        imageSrc: '/images/services/kommotirio-eleni-avdira-services-for-woman.webp',
        imageAlt: "Women's haircut",
      },
      {
        title: 'For him',
        body: "Men's cuts and beard care with a clean finish.",
        imageSrc: '/images/services/kommotirio-eleni-avdira-services-for-man.webp',
        imageAlt: "Men's haircut",
      },
      {
        title: 'Kids',
        body: 'A friendly space for quick, comfortable kids’ cuts.',
        imageSrc: '/images/services/kommotirio-eleni-avdira-services-for-boys-and-kids.webp',
        imageAlt: "Children's haircut",
      },
      {
        title: 'Color',
        body: 'Color, highlights and balayage with quality products.',
        imageSrc: '/images/services/kommotirio-eleni-avdira-services-color.webp',
        imageAlt: 'Hair coloring',
      },
      {
        title: 'Styling',
        body: 'Looks for weddings, christenings and special moments.',
        imageSrc: '/images/services/kommotirio-eleni-avdira-services-styling.webp',
        imageAlt: 'Special occasion styling',
      },
      {
        title: 'Care',
        body: 'Wash, blow-dry and everyday hair care.',
        imageSrc: '/images/services/kommotirio-eleni-avdira-services-care.webp',
        imageAlt: 'Hair care',
      },
    ],
    note: [
      'For pricing or to book, call ',
      { href: tel, label: site.phoneDisplayEn },
      '. Walk-ins welcome when a slot is free.',
    ],
  },
  about: {
    title: 'The salon',
    paragraphs: [
      'Helen Haircut is in Avdira, Xanthi, serving residents and visitors with haircuts, color and styling for every age.',
      'Trust grows from consistency and genuine care. Every visit is comfortable, with products and tools that respect your hair.',
    ],
    highlights: [
      'A local salon in Avdira',
      'Services for the whole family',
      'With or without an appointment',
    ],
    imageSrc: '/images/kommotirio-eleni-avdira.webp',
    imageAlt: 'Helen Haircut salon interior',
  },
  treatments: {
    title: 'Signature products',
    text: 'We use premium-quality products for colour, care and lasting results that respect your hair. The difference shows in every visit.',
    imageSrc: '/images/kommotirio-eleni-avdira.webp',
    imageAlt: 'Products and treatments at Helen Haircut',
    brands: [
      {
        name: 'Redken',
        imageSrc: '/images/brands/kommotirio-eleni-avdira-redken.webp',
        imageAlt: 'Redken',
      },
      {
        name: 'Kérastase',
        imageSrc: '/images/brands/kommotirio-eleni-avdira-kerastase.webp',
        imageAlt: 'Kérastase',
      },
      {
        name: 'Wella',
        imageSrc: '/images/brands/kommotirio-eleni-avdira-wella.webp',
        imageAlt: 'Wella',
      },
    ],
    actions: [
      { label: 'Services', href: '#services' },
      { label: 'Facebook', href: site.facebook, external: true },
      { label: 'Book', href: '#booking' },
    ],
  },
  location: {
    title: 'Contact',
    businessName: site.nameEn,
    addressLines: ['Avdira, Xanthi', 'Greece'],
    phoneLabel: site.phoneDisplayEn,
    mapsLabel: 'Open in Google Maps',
    note: "We're in Avdira, close to Xanthi. If you need help finding us, give us a call.",
    mapTitle: 'Map location of Helen Haircut, Avdira Xanthi',
  },
  hours: {
    title: 'Hours',
    caption: 'Opening hours for Helen Haircut',
    dayLabel: 'Day',
    hoursLabel: 'Hours',
    rows: [
      { day: 'Monday', hours: site.hours.monday },
      { day: 'Tuesday', hours: site.hours.tuesday },
      { day: 'Wednesday', hours: site.hours.wednesday },
      { day: 'Thursday', hours: site.hours.thursday },
      { day: 'Friday', hours: site.hours.friday },
      { day: 'Saturday', hours: site.hours.saturday },
      { day: 'Sunday', hours: site.hours.sunday },
    ],
    note: [
      'For confirmed hours or to book, call ',
      { href: tel, label: site.phoneDisplayEn },
      '.',
    ],
  },
  faq: {
    title: 'FAQ',
    items: [
      {
        question: 'Do I need an appointment?',
        answer: [
          'Booking is recommended, but walk-ins are welcome when a slot is free. Call ',
          { href: tel, label: site.phoneDisplayEn },
          '.',
        ],
      },
      {
        question: 'Where are you located?',
        answer: [
          "We're in Avdira, Xanthi. Find us on ",
          { href: site.googleMaps, label: 'Google Maps', external: true },
          ', or call for directions.',
        ],
      },
      {
        question: 'What services do you offer?',
        answer: [
          "Women's, men's and children's haircuts, coloring, highlights, balayage, wedding styling, perms, beard care and hair care.",
        ],
      },
      {
        question: 'Do you cut hair for men and children?',
        answer: ["Yes — men's and children's cuts, plus beard care."],
      },
      {
        question: 'Do you use well-known brands?',
        answer: ['Yes — coloring and care products from recognized brands.'],
      },
      {
        question: 'How can I contact you?',
        answer: [
          'Call ',
          { href: tel, label: site.phoneDisplayEn },
          ' or find us on ',
          { href: site.facebook, label: 'Facebook', external: true },
          '.',
        ],
      },
      {
        question: 'Is there parking nearby?',
        answer: ['Please contact us for parking information.'],
      },
    ],
  },
  cta: {
    title: 'Book an appointment',
    text: 'Call us and pick a time that works for you.',
    buttonLabel: 'Call now',
    secondaryLabel: 'Visit us',
    imageSrc: '/images/placeholders/cta.svg',
    imageAlt: 'Book an appointment at Helen Haircut',
  },
  footer: {
    name: site.nameEn,
    address: 'Avdira, Xanthi, Greece',
    phoneLabel: site.phoneDisplayEn,
    navAria: 'Footer navigation',
    nav: [
      { href: '#services', label: 'Services' },
      { href: '#contact', label: 'Contact' },
      { href: '#faq', label: 'FAQ' },
      { href: '/', label: 'Ελληνικά' },
    ],
    facebookAria: 'Find us on Facebook',
    copyright: 'Helen Haircut, Avdira. All rights reserved.',
  },
  mobileCall: {
    label: 'Call',
    aria: 'Call Helen Haircut on +30 25410 51109',
  },
};
