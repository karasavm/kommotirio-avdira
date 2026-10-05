import type { ImageMetadata } from 'astro';

import hero from '@/assets/images/kommotirio-eleni-avdira-hero.webp';
import findYourStyle from '@/assets/images/kommotirio-eleni-avdira-find-your-style.webp';
import salon from '@/assets/images/kommotirio-eleni-avdira.webp';
import serviceWoman from '@/assets/images/services/kommotirio-eleni-avdira-services-for-woman.webp';
import serviceMan from '@/assets/images/services/kommotirio-eleni-avdira-services-for-man.webp';
import serviceKids from '@/assets/images/services/kommotirio-eleni-avdira-services-for-boys-and-kids.webp';
import serviceColor from '@/assets/images/services/kommotirio-eleni-avdira-services-color.webp';
import serviceStyling from '@/assets/images/services/kommotirio-eleni-avdira-services-styling.webp';
import serviceCare from '@/assets/images/services/kommotirio-eleni-avdira-services-care.webp';
import brandRedken from '@/assets/images/brands/kommotirio-eleni-avdira-redken.webp';
import brandKerastase from '@/assets/images/brands/kommotirio-eleni-avdira-kerastase.webp';
import brandWella from '@/assets/images/brands/kommotirio-eleni-avdira-wella.webp';

/** Local assets for `astro:assets` `<Image />` / `getImage()`. */
export const siteImages = {
  hero,
  findYourStyle,
  salon,
  services: {
    woman: serviceWoman,
    man: serviceMan,
    kids: serviceKids,
    color: serviceColor,
    styling: serviceStyling,
    care: serviceCare,
  },
  brands: {
    redken: brandRedken,
    kerastase: brandKerastase,
    wella: brandWella,
  },
} as const;

/** Legacy public paths → asset (content still uses path keys until optimized). */
export const imageByPublicPath: Record<string, ImageMetadata> = {
  '/images/kommotirio-eleni-avdira-hero.webp': siteImages.hero,
  '/images/kommotirio-eleni-avdira-find-your-style.webp': siteImages.findYourStyle,
  '/images/kommotirio-eleni-avdira.webp': siteImages.salon,
  '/images/services/kommotirio-eleni-avdira-services-for-woman.webp': siteImages.services.woman,
  '/images/services/kommotirio-eleni-avdira-services-for-man.webp': siteImages.services.man,
  '/images/services/kommotirio-eleni-avdira-services-for-boys-and-kids.webp': siteImages.services.kids,
  '/images/services/kommotirio-eleni-avdira-services-color.webp': siteImages.services.color,
  '/images/services/kommotirio-eleni-avdira-services-styling.webp': siteImages.services.styling,
  '/images/services/kommotirio-eleni-avdira-services-care.webp': siteImages.services.care,
  '/images/brands/kommotirio-eleni-avdira-redken.webp': siteImages.brands.redken,
  '/images/brands/kommotirio-eleni-avdira-kerastase.webp': siteImages.brands.kerastase,
  '/images/brands/kommotirio-eleni-avdira-wella.webp': siteImages.brands.wella,
};
