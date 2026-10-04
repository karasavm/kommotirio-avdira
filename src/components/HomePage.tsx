import { Box } from '@chakra-ui/react';
import { Provider } from '@/components/ui/provider';
import type { PageContent } from '@/content/types';
import { Hero } from '@/components/sections/Hero';
import { Services } from '@/components/sections/Services';
import { WhyUs } from '@/components/sections/WhyUs';
import { About } from '@/components/sections/About';
import { Gallery } from '@/components/sections/Gallery';
import { Location } from '@/components/sections/Location';
import { Hours } from '@/components/sections/Hours';
import { Faq } from '@/components/sections/Faq';
import { Cta } from '@/components/sections/Cta';
import { Footer } from '@/components/sections/Footer';
import { MobileCallBar } from '@/components/sections/MobileCallBar';

type Props = {
  content: PageContent;
};

export function HomePage({ content }: Props) {
  return (
    <Provider>
      <Box pb={{ base: '20', md: '0' }}>
        <Box as="main" id="main-content">
          <Hero content={content} />
          <Services content={content} />
          <WhyUs content={content} />
          <About content={content} />
          <Gallery content={content} />
          <Location content={content} />
          <Hours content={content} />
          <Faq content={content} />
          <Cta content={content} />
        </Box>
        <Footer content={content} />
        <MobileCallBar content={content} />
      </Box>
    </Provider>
  );
}
