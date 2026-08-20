/**
 * site-config.js — Non-critical UI configuration
 * SEO-critical content lives in HTML, not here.
 * Update these values when business details change.
 */
const SITE_CONFIG = {
  business: {
    name: 'Κομμωτήριο Ελένη',
    nameEn: 'Helen Haircut',
    phone: '+302541051109',
    phoneDisplay: '2541051109',
    phoneDisplayEn: '+30 2541051109',
    locality: 'Άβδηρα',
    region: 'Ξάνθη',
    country: 'GR',
    facebook: 'https://www.facebook.com/komot.eleni',
    instagram: null, // [INSTAGRAM_URL] — add when available
    googleMaps: 'https://www.google.com/maps/place/%CE%9A%CE%BF%CE%BC%CE%BC%CF%89%CF%84%CE%AE%CF%81%CE%B9%CE%BF+%22%CE%95%CE%9B%CE%95%CE%9D%CE%97%22/@40.9811198,24.9496361,17z',
    lat: 40.9811198,
    lng: 24.952211,
  },
  // [OPENING_HOURS] — replace null values with actual hours, e.g. '09:00–19:00'
  hours: {
    monday:    null,
    tuesday:   null,
    wednesday: null,
    thursday:  null,
    friday:    null,
    saturday:  null,
    sunday:    'closed',
  },
  gallery: {
    // Add real photo filenames here when available
    // { src: '/images/gallery/photo-1.webp', alt: 'Descriptive alt text', width: 800, height: 600 }
    items: [],
  },
};
