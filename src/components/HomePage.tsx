import type { ReactNode } from 'react';
import { Provider } from '@/components/ui/provider';
import type { PageContent } from '@/content/types';
import { Hero } from '@/components/sections/Hero';
import { PhotoFeature } from '@/components/sections/PhotoFeature';
import { About } from '@/components/sections/About';
import { Treatments } from '@/components/sections/Treatments';
import { Cta } from '@/components/sections/Cta';
import { Location } from '@/components/sections/Location';
import { Footer } from '@/components/sections/Footer';
import { MobileCallBar } from '@/components/sections/MobileCallBar';

type ContentProps = {
  content: PageContent;
};

type AfterProps = ContentProps & {
  children?: ReactNode;
};

/** Hero → PhotoFeatures → About → Treatments. Services island follows in Astro. */
export function HomePageBefore({ content }: ContentProps) {
  return (
    <Provider>
      <Hero content={content} />
      {content.photoFeatures.map((feature) => (
        <PhotoFeature key={feature.id} feature={feature} />
      ))}
      <About content={content} />
      <Treatments content={content} />
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
