import type { ReactNode } from 'react';
import { Provider } from '@/components/ui/provider';
import type { PageContent } from '@/content/types';
import { Hero } from '@/components/sections/Hero';
import { PhotoFeature } from '@/components/sections/PhotoFeature';
import { About } from '@/components/sections/About';
import { Services } from '@/components/sections/Services';
import { Treatments } from '@/components/sections/Treatments';
import { Cta } from '@/components/sections/Cta';
import { Location } from '@/components/sections/Location';
import { Footer } from '@/components/sections/Footer';
import { MobileCallBar } from '@/components/sections/MobileCallBar';
import type { BrandImage } from '@/lib/optimize-page-images';

type ContentProps = {
  content: PageContent;
};

type BeforeProps = ContentProps & {
  /** Astro `<Image />` for LCP hero (passed as React children from `.astro`) */
  children?: ReactNode;
  brandImages?: BrandImage[];
};

type AfterProps = ContentProps & {
  children?: ReactNode;
};

/** Hero → PhotoFeatures → About → Services → Treatments (SSR, no client JS). */
export function HomePageBefore({ content, children, brandImages }: BeforeProps) {
  return (
    <Provider>
      <Hero content={content} image={children} />
      {content.photoFeatures.map((feature) => (
        <PhotoFeature key={feature.id} feature={feature} />
      ))}
      <About content={content} />
      <Services content={content} />
      <Treatments content={content} brandImages={brandImages} />
    </Provider>
  );
}

/** Cta → Location → FAQ (children). Footer chrome is separate. */
export function HomePageAfter({ content, children }: AfterProps) {
  return (
    <Provider>
      <Cta content={content} />
      <Location content={content} />
      {children}
    </Provider>
  );
}

export function HomePageChrome({ content }: ContentProps) {
  return (
    <Provider>
      <Footer content={content} />
      <MobileCallBar content={content} />
    </Provider>
  );
}
