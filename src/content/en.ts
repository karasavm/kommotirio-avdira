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
    logoPrimary: 'Helen',
    logoStrong: 'Haircut',
    logoLocation: 'Avdira, Xanthi, Greece',
    navAria: 'Main navigation',
    phoneAria: `Call us: ${site.phoneDisplayEn}`,
    phoneLabel: site.phoneDisplayEn,
    menuAria: 'Open menu',
    mobileCallLabel: `Call: ${site.phoneDisplayEn}`,
    mobileLangLabel: 'Δείτε στα Ελληνικά',
    nav: [
      { href: '#services', label: 'Services' },
      { href: '#why-us', label: 'Why us' },
      { href: '#about', label: 'About' },
      { href: '#gallery', label: 'Gallery' },
      { href: '#location', label: 'Location' },
      { href: '#faq', label: 'FAQ' },
      { href: '#contact', label: 'Contact' },
    ],
  },
  hero: {
    title: 'Helen Haircut',
    location: 'in Avdira, Xanthi, Greece',
    tagline:
      "We look after your hair with simplicity, willingness and respect. At our hair salon in Avdira, Xanthi, we offer women's, men's and children's haircuts, coloring, styling and hair care for all ages — using modern equipment and products from recognized brands.",
    callLabel: 'Call us',
    directionsLabel: 'Get directions',
    imageAlt: 'Inside Helen Haircut salon in Avdira, Xanthi',
  },
  services: {
    title: 'Hair Salon Services in Avdira, Xanthi',
    intro:
      "At Helen Haircut in Avdira, we cater to the whole family. From children's haircuts to wedding updos, we take care of every look with attention and quality products.",
    items: [
      {
        title: "Women's haircuts and styling",
        body: 'Haircuts and styling tailored to your face shape and hair type. From an everyday look to more elaborate updos for weddings, christenings and special events.',
      },
      {
        title: "Men's haircuts and beard care",
        body: "Classic and contemporary men's haircuts with a clean finish. We also provide beard care and shaping techniques for a neat, natural look.",
      },
      {
        title: "Children's haircuts",
        body: "A friendly environment and patient service for children. Kids' haircuts are done quickly and comfortably, with a smile.",
      },
      {
        title: 'Hair coloring and color techniques',
        body: 'Hair dyes, highlights and balayage using coloring products from major brands, respecting hair health and the result you want.',
      },
      {
        title: 'Perms and blow-dries',
        body: 'For lasting curls or extra volume, a perm is a classic option. We always discuss the condition of your hair before proceeding.',
      },
      {
        title: 'Wedding and special-occasion styling',
        body: 'Hairstyles that enhance your hair for weddings, christenings, parties or any important moment. You can book an appointment to discuss your preferred style in advance.',
      },
      {
        title: 'Wash and hair care',
        body: 'Every service includes a careful wash with hair care products that gently cleanse and look after the scalp.',
      },
    ],
    note: [
      'For pricing or to book an appointment, call us on ',
      { href: tel, label: site.phoneDisplayEn },
      '. We also accept walk-ins when a slot is available.',
    ],
  },
  whyUs: {
    title: 'Why Choose Helen Haircut in Avdira',
    items: [
      {
        title: 'Local hair salon in Avdira',
        body: 'We are a small, local hair salon in Avdira, Xanthi, and we know the people of the area well. Our goal is to serve you willingly, politely and simply.',
      },
      {
        title: 'Services for the whole family',
        body: "From children's haircuts to men's haircuts, dyes, wedding updos and beard care, our salon covers the needs of the whole family.",
      },
      {
        title: 'Modern equipment and quality products',
        body: 'We work with modern equipment and products from major brands for coloring, hair care and skin care, aiming for neat, natural results.',
      },
      {
        title: 'With or without an appointment',
        body: 'You can book an appointment at a time that suits you, but we also accept walk-ins when availability allows. Call us and we will let you know.',
      },
    ],
  },
  about: {
    title: 'Our Hair Salon in Avdira, Xanthi',
    paragraphs: [
      'Helen Haircut is located in Avdira, in the Xanthi area, and serves residents and visitors of the wider region. We offer haircuts, coloring, styling, perms and hair care for women, men and children.',
      'We believe trust is built through consistency, good service and genuine care for every customer. That is why we make sure every visit is comfortable, using products and equipment that respect your hair and skin.',
    ],
  },
  gallery: {
    title: 'Gallery — Helen Haircut, Avdira',
    intro: 'A look at our salon and our work.',
    listAria: 'Salon photos',
    items: [
      { src: '/images/placeholders/gallery-1.jpg', alt: 'Photo 1 — add description' },
      { src: '/images/placeholders/gallery-2.jpg', alt: 'Photo 2 — add description' },
      { src: '/images/placeholders/gallery-3.jpg', alt: 'Photo 3 — add description' },
      { src: '/images/placeholders/gallery-4.jpg', alt: 'Photo 4 — add description' },
    ],
  },
  location: {
    title: 'Find Our Salon in Avdira, Xanthi',
    businessName: site.nameEn,
    addressLines: ['Avdira, Xanthi', 'Greece'],
    phoneLabel: site.phoneDisplayEn,
    mapsLabel: 'Open in Google Maps',
    note: "We're in Avdira, close to Xanthi, and serve the surrounding area. Whether you live in Avdira, a nearby village or in Xanthi itself, Helen Haircut is easy to reach. If you need help finding us, give us a call.",
    mapTitle: 'Map location of Helen Haircut, Avdira Xanthi',
  },
  hours: {
    title: 'Salon Opening Hours — Avdira',
    caption: 'Opening hours for Helen Haircut',
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
      'For confirmed hours or to book an appointment, call ',
      { href: tel, label: site.phoneDisplayEn },
      '.',
    ],
  },
  faq: {
    title: 'Frequently Asked Questions',
    items: [
      {
        question: 'Do I need an appointment?',
        answer: [
          'You can book an appointment to be sure, but we also accept walk-ins when a slot is available. Call us on ',
          { href: tel, label: site.phoneDisplayEn },
          ' to check.',
        ],
      },
      {
        question: 'Where exactly are you located?',
        answer: [
          "We're in Avdira, Xanthi. You can find us easily via ",
          { href: site.googleMaps, label: 'Google Maps', external: true },
          ', or call us for directions.',
        ],
      },
      {
        question: 'What services do you offer?',
        answer: [
          "We offer women's, men's and children's haircuts, hair coloring, highlights, balayage, wedding updos, perms, beard care, washing and general hair care.",
        ],
      },
      {
        question: 'Do you cut hair for men and children?',
        answer: [
          "Yes, we do men's and children's haircuts, as well as beard care for men.",
        ],
      },
      {
        question: 'Do you use products from well-known brands?',
        answer: [
          'Yes, we use hair coloring and hair care products from major, recognized brands, respecting quality and hair health.',
        ],
      },
      {
        question: 'How can I contact you?',
        answer: [
          'Call us on ',
          { href: tel, label: site.phoneDisplayEn },
          '. You can also find us on ',
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
    title: 'Book an Appointment at Helen Haircut, Avdira',
    text: "For appointments or any questions, we're here to help.",
    buttonLabel: site.phoneDisplayEn,
  },
  footer: {
    name: site.nameEn,
    address: 'Avdira, Xanthi, Greece',
    phoneLabel: site.phoneDisplayEn,
    navAria: 'Footer navigation',
    nav: [
      { href: '#services', label: 'Services' },
      { href: '#location', label: 'Location' },
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
