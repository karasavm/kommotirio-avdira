import { getImage } from 'astro:assets';
import type { PageContent } from '@/content/types';
import { imageByPublicPath, siteImages } from '@/lib/site-images';

async function optimizedSrc(
  publicPath: string,
  opts: { width: number; quality?: number },
): Promise<string> {
  const src = imageByPublicPath[publicPath];
  if (!src) return publicPath;
  const img = await getImage({
    src,
    width: opts.width,
    format: 'webp',
    quality: opts.quality ?? 80,
  });
  return img.src;
}

async function optimizedBrand(publicPath: string): Promise<{
  src: string;
  srcSet: string;
  sizes: string;
  width: number;
  height: number;
}> {
  const src = imageByPublicPath[publicPath] ?? siteImages.brands.redken;
  const img = await getImage({
    src,
    widths: [280, 400, 560],
    format: 'webp',
    quality: 85,
  });
  const width = Number(img.attributes.width) || 560;
  const height = Number(img.attributes.height) || Math.round((width * 450) / 800);
  return {
    src: img.src,
    srcSet: img.srcSet.attribute,
    sizes: '(max-width: 48em) 160px, 200px',
    width,
    height,
  };
}

export type BrandImage = {
  src: string;
  srcSet: string;
  sizes: string;
  width: number;
  height: number;
};

export type OptimizedPage = {
  content: PageContent;
  brands: BrandImage[];
  heroPreloadSrc: string;
};

/**
 * Server-only: rewrite page content image URLs through Astro `getImage()`
 * (responsive widths where useful). Call from `.astro` frontmatter only.
 */
export async function optimizePageImages(content: PageContent): Promise<OptimizedPage> {
  const heroPreload = await getImage({
    src: siteImages.hero,
    width: 1280,
    format: 'webp',
    quality: 80,
  });

  const [
    findYourStyle,
    about,
    treatmentsBg,
    ...serviceSrcs
  ] = await Promise.all([
    optimizedSrc(content.photoFeatures[0]?.imageSrc ?? '', { width: 1600, quality: 80 }),
    optimizedSrc(content.about.imageSrc, { width: 800, quality: 80 }),
    optimizedSrc(content.treatments.imageSrc, { width: 1600, quality: 75 }),
    ...content.services.items.map((item) =>
      optimizedSrc(item.imageSrc, { width: 700, quality: 80 }),
    ),
  ]);

  const brands = await Promise.all(
    content.treatments.brands.map((b) => optimizedBrand(b.imageSrc)),
  );

  const next: PageContent = {
    ...content,
    hero: {
      ...content.hero,
      // Used only as fallback; real LCP markup comes from Astro `<Image />`
      imageSrc: heroPreload.src,
    },
    photoFeatures: content.photoFeatures.map((feature, i) =>
      i === 0
        ? { ...feature, imageSrc: findYourStyle }
        : feature,
    ),
    services: {
      ...content.services,
      items: content.services.items.map((item, i) => ({
        ...item,
        imageSrc: serviceSrcs[i] ?? item.imageSrc,
      })),
    },
    about: {
      ...content.about,
      imageSrc: about,
    },
    treatments: {
      ...content.treatments,
      imageSrc: treatmentsBg,
      brands: content.treatments.brands.map((brand, i) => ({
        ...brand,
        imageSrc: brands[i]?.src ?? brand.imageSrc,
      })),
    },
  };

  return {
    content: next,
    brands,
    heroPreloadSrc: heroPreload.src,
  };
}
