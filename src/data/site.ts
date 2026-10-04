export const site = {
  domain: 'https://kommotirio-avdira.gr',
  name: 'Κομμωτήριο Ελένη',
  nameEn: 'Helen Haircut',
  phone: '+302541051109',
  phoneDisplay: '2541051109',
  phoneDisplayEn: '+30 2541051109',
  locality: 'Άβδηρα',
  localityEn: 'Avdira',
  region: 'Ξάνθη',
  regionEn: 'Xanthi',
  country: 'GR',
  countryName: 'Ελλάδα',
  countryNameEn: 'Greece',
  facebook: 'https://www.facebook.com/komot.eleni',
  googleMaps:
    'https://www.google.com/maps/place/%CE%9A%CE%BF%CE%BC%CE%BC%CF%89%CF%84%CE%AE%CF%81%CE%B9%CE%BF+%22%CE%95%CE%9B%CE%95%CE%9D%CE%97%22/@40.9811198,24.9496361,17z',
  mapsEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d192795.71442920945!2d24.8312098357351!3d40.97199762327274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ae7f789f16bf1b%3A0x3dbbb4be6d31d859!2zzprOv868zrzPic-Ezq7Pgc65zr8gIs6VzpvOlc6dzpci!5e0!3m2!1sen!2sgr!4v1787261112553!5m2!1sen!2sgr',
  lat: 40.9811198,
  lng: 24.952211,
  hours: {
    monday: '9.00-21.00',
    tuesday: '9.00-21.00',
    wednesday: '9.00-21.00',
    thursday: '9.00-21.00',
    friday: '9.00-21.00',
    saturday: '9.00-21.00',
    sunday: '9.00-21.00',
  },
  opens: '09:00',
  closes: '21:00',
} as const;

export type Locale = 'el' | 'en';
