import { site } from '@/data/site';
import type { PageContent } from '@/content/types';

const tel = `tel:${site.phone}`;

export const el: PageContent = {
  locale: 'el',
  homePath: '/',
  otherLocalePath: '/en/',
  otherLocaleLabel: 'EN',
  otherLocaleAria: 'Switch to English',
  seo: {
    title: 'Κομμωτήριο Ελένη | Άβδηρα Ξάνθης – Κούρεμα & Βαφές',
    description:
      'Κομμωτήριο Ελένη στα Άβδηρα Ξάνθης. Κουρέματα για γυναίκες, άνδρες και παιδιά, βαφές και χτενίσματα. Καλέστε στο 25410 51109.',
    ogDescription:
      'Κομμωτήριο στα Άβδηρα Ξάνθης. Κουρέματα, βαφές, ανταύγειες, χτενίσματα για γάμους και περιποίηση μαλλιών. Τηλ: 2541051109.',
    ogLocale: 'el_GR',
    ogLocaleAlternate: 'en_US',
    siteName: site.name,
    imageAlt: 'Κομμωτήριο Ελένη στα Άβδηρα, Ξάνθη',
    applicationName: site.name,
    inLanguage: 'el-GR',
    canonicalPath: '/',
  },
  header: {
    logoAria: 'Κομμωτήριο Ελένη — Αρχική',
    logoPrimary: 'Κομμωτήριο',
    logoStrong: 'Ελένη',
    logoLocation: 'στα Άβδηρα',
    navAria: 'Κύρια πλοήγηση',
    phoneAria: `Καλέστε μας: ${site.phoneDisplay}`,
    phoneLabel: site.phoneDisplay,
    servicesCtaLabel: 'Υπηρεσίες',
    callCtaLabel: 'Καλέστε',
    menuAria: 'Άνοιγμα μενού',
    closeAria: 'Κλείσιμο μενού',
    mobileCallLabel: `Κλήση: ${site.phoneDisplay}`,
    mobileLangLabel: 'View in English',
    nav: [
      { href: '#about', label: 'Κομμωτήριο' },
      { href: '#services', label: 'Υπηρεσίες' },
      { href: '#booking', label: 'Ραντεβού' },
      { href: '#contact', label: 'Επικοινωνία' },
      { href: '#faq', label: 'FAQ' },
    ],
  },
  hero: {
    title: 'Κομμωτήριο στα',
    titleEmphasis: 'Άβδηρα Ξάνθης',
    tagline: 'Κουρέματα, βαφές και χτενίσματα από την Ελένη — με απλότητα, προθυμία και σεβασμό.',
    text: 'Στο κομμωτήριό μας στα Άβδηρα προσφέρουμε γυναικεία, ανδρικά και παιδικά κουρέματα, βαφές, χτενίσματα και περιποίηση μαλλιών για κάθε ηλικία — με σύγχρονο εξοπλισμό και προϊόντα αναγνωρισμένων εταιρειών.',
    callLabel: 'Καλέστε μας τώρα',
    imageSrc: '/images/kommotirio-eleni-avdira-hero.webp',
    imageAlt: 'Εσωτερικό του κομμωτηρίου Ελένη στα Άβδηρα',
  },
  photoFeatures: [
    {
      id: 'style-feature',
      title: 'Βρείτε το στυλ σας',
      text: 'Από το καθημερινό κούρεμα μέχρι το χτένισμα για μια ξεχωριστή στιγμή — ανακαλύψτε τις υπηρεσίες μας και κλείστε ραντεβού στα Άβδηρα.',
      imageSrc: '/images/kommotirio-eleni-avdira-find-your-style.webp',
      imageAlt: 'Βρείτε το στυλ σας στο Κομμωτήριο Ελένη',
      imagePosition: 'left center',
      align: 'start',
      mono: false,
      actions: [
        { label: 'Υπηρεσίες', href: '#services' },
        { label: 'Ραντεβού', href: '#booking' },
        { label: 'Βρείτε μας', href: '#contact' },
      ],
    },
  ],
  services: {
    title: 'Υπηρεσίες',
    intro: 'Κουρέματα και περιποίηση για όλη την οικογένεια στα Άβδηρα.',
    items: [
      {
        title: 'Για εκείνη',
        body: 'Κουρέματα και χτενίσματα προσαρμοσμένα στο πρόσωπό σας.',
        imageSrc: '/images/services/kommotirio-eleni-avdira-services-for-woman.webp',
        imageAlt: 'Γυναικείο κούρεμα',
      },
      {
        title: 'Για εκείνον',
        body: 'Ανδρικά κουρέματα και περιποίηση γενειάδας.',
        imageSrc: '/images/services/kommotirio-eleni-avdira-services-for-man.webp',
        imageAlt: 'Ανδρικό κούρεμα',
      },
      {
        title: 'Παιδικά',
        body: 'Φιλικό περιβάλλον για γρήγορο και άνετο κούρεμα.',
        imageSrc: '/images/services/kommotirio-eleni-avdira-services-for-boys-and-kids.webp',
        imageAlt: 'Παιδικό κούρεμα',
      },
      {
        title: 'Βαφές',
        body: 'Χρώμα, ανταύγειες και balayage με ποιοτικά προϊόντα.',
        imageSrc: '/images/services/kommotirio-eleni-avdira-services-color.webp',
        imageAlt: 'Βαφή μαλλιών',
      },
      {
        title: 'Χτενίσματα',
        body: 'Για γάμους, βαφτίσια και κάθε ξεχωριστή στιγμή.',
        imageSrc: '/images/services/kommotirio-eleni-avdira-services-styling.webp',
        imageAlt: 'Χτένισμα για εκδήλωση',
      },
      {
        title: 'Περιποίηση',
        body: 'Λούσιμο, φορμάρισμα και φροντίδα της τρίχας.',
        imageSrc: '/images/services/kommotirio-eleni-avdira-services-care.webp',
        imageAlt: 'Περιποίηση μαλλιών',
      },
    ],
    note: [
      'Για τιμές ή ραντεβού, καλέστε στο ',
      { href: tel, label: site.phoneDisplay },
      '. Δεχόμαστε και χωρίς ραντεβού όταν υπάρχει διαθεσιμότητα.',
    ],
  },
  about: {
    title: 'Το κομμωτήριό μας',
    paragraphs: [
      'Το κομμωτήριο Ελένη βρίσκεται στα Άβδηρα Ξάνθης και εξυπηρετεί κατοίκους και επισκέπτες της περιοχής με κουρέματα, βαφές και χτενίσματα για κάθε ηλικία.',
      'Η εμπιστοσύνη χτίζεται με συνέπεια και αληθινό ενδιαφέρον. Κάθε επίσκεψη είναι άνετη, με προϊόντα και εξοπλισμό που σέβονται τα μαλλιά σας.',
    ],
    highlights: [
      'Τοπικό κομμωτήριο στα Άβδηρα',
      'Υπηρεσίες για όλη την οικογένεια',
      'Με ή χωρίς ραντεβού',
    ],
    imageSrc: '/images/kommotirio-eleni-avdira.webp',
    imageAlt: 'Ο χώρος του κομμωτηρίου Ελένη',
  },
  treatments: {
    title: 'Μοναδικά προϊόντα',
    text: 'Χρησιμοποιούμε προϊόντα κορυφαίας ποιότητας για χρώμα, περιποίηση και αντοχή που σέβονται τα μαλλιά σας. Η διαφορά φαίνεται στο αποτέλεσμα κάθε επίσκεψης.',
    imageSrc: '/images/kommotirio-eleni-avdira.webp',
    imageAlt: 'Προϊόντα και θεραπείες στο Κομμωτήριο Ελένη',
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
      { label: 'Υπηρεσίες', href: '#services' },
      { label: 'Facebook', href: site.facebook, external: true },
      { label: 'Ραντεβού', href: '#booking' },
    ],
  },
  location: {
    title: 'Επικοινωνία',
    businessName: site.name,
    addressLines: ['Άβδηρα, Ξάνθη', 'Ελλάδα'],
    phoneLabel: site.phoneDisplay,
    mapsLabel: 'Άνοιγμα στο Google Maps',
    note: 'Βρισκόμαστε στα Άβδηρα, κοντά στην Ξάνθη. Αν χρειάζεστε βοήθεια για να μας βρείτε, καλέστε μας.',
    mapTitle: 'Χάρτης τοποθεσίας Κομμωτήριο Ελένη, Άβδηρα Ξάνθη',
  },
  hours: {
    title: 'Ωράριο',
    caption: 'Ωράριο λειτουργίας Κομμωτήριο Ελένη',
    dayLabel: 'Ημέρα',
    hoursLabel: 'Ώρες',
    rows: [
      { day: 'Δευτέρα', hours: site.hours.monday },
      { day: 'Τρίτη', hours: site.hours.tuesday },
      { day: 'Τετάρτη', hours: site.hours.wednesday },
      { day: 'Πέμπτη', hours: site.hours.thursday },
      { day: 'Παρασκευή', hours: site.hours.friday },
      { day: 'Σάββατο', hours: site.hours.saturday },
      { day: 'Κυριακή', hours: site.hours.sunday },
    ],
    note: [
      'Για βεβαίωση ωραρίου ή ραντεβού, καλέστε στο ',
      { href: tel, label: site.phoneDisplay },
      '.',
    ],
  },
  faq: {
    title: 'Συχνές ερωτήσεις',
    items: [
      {
        question: 'Χρειάζεται ραντεβού;',
        answer: [
          'Μπορείτε να κλείσετε ραντεβού για να είστε σίγουροι, αλλά δεχόμαστε και χωρίς ραντεβού όταν υπάρχει διαθέσιμη ώρα. Καλέστε στο ',
          { href: tel, label: site.phoneDisplay },
          '.',
        ],
      },
      {
        question: 'Πού ακριβώς βρίσκεστε;',
        answer: [
          'Βρισκόμαστε στα Άβδηρα Ξάνθης. Βρείτε μας στο ',
          { href: site.googleMaps, label: 'Google Maps', external: true },
          ' ή καλέστε για οδηγίες.',
        ],
      },
      {
        question: 'Τι υπηρεσίες προσφέρετε;',
        answer: [
          'Γυναικεία, ανδρικά και παιδικά κουρέματα, βαφές, ανταύγειες, balayage, χτενίσματα για γάμους, περμανάντ, περιποίηση γενειάδας και φροντίδα μαλλιών.',
        ],
      },
      {
        question: 'Κάνετε κουρέματα για άνδρες και παιδιά;',
        answer: ['Ναι — ανδρικά και παιδικά κουρέματα, καθώς και περιποίηση γενειάδας.'],
      },
      {
        question: 'Χρησιμοποιείτε προϊόντα γνωστών εταιρειών;',
        answer: [
          'Ναι, προϊόντα χρωματισμού και περιποίησης από αναγνωρισμένες εταιρείες.',
        ],
      },
      {
        question: 'Πώς μπορώ να επικοινωνήσω;',
        answer: [
          'Καλέστε στο ',
          { href: tel, label: site.phoneDisplay },
          ' ή βρείτε μας στο ',
          { href: site.facebook, label: 'Facebook', external: true },
          '.',
        ],
      },
      {
        question: 'Υπάρχει χώρος στάθμευσης;',
        answer: ['Επικοινωνήστε μαζί μας για πληροφορίες στάθμευσης.'],
      },
    ],
  },
  cta: {
    title: 'Κλείστε ραντεβού',
    text: 'Καλέστε μας και κλείστε την ώρα που σας εξυπηρετεί.',
    buttonLabel: 'Καλέστε τώρα',
    secondaryLabel: 'Επισκεφτείτε μας',
    imageSrc: '/images/placeholders/cta.svg',
    imageAlt: 'Κλείστε ραντεβού στο Κομμωτήριο Ελένη',
  },
  footer: {
    name: site.name,
    address: 'Άβδηρα, Ξάνθη, Ελλάδα',
    phoneLabel: site.phoneDisplay,
    navAria: 'Δευτερεύουσα πλοήγηση',
    nav: [
      { href: '#services', label: 'Υπηρεσίες' },
      { href: '#contact', label: 'Επικοινωνία' },
      { href: '#faq', label: 'FAQ' },
      { href: '/en/', label: 'English' },
    ],
    facebookAria: 'Βρείτε μας στο Facebook',
    copyright: 'Κομμωτήριο Ελένη, Άβδηρα. Με επιφύλαξη παντός δικαιώματος.',
  },
  mobileCall: {
    label: 'Κλήση',
    aria: 'Καλέστε το Κομμωτήριο Ελένη στο 25410 51109',
  },
};
