import { useEffect, useRef, useState } from 'react';
import {
  AspectRatio,
  Box,
  Container,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react';
import { SectionHeader } from '@/components/SectionHeader';
import { RichText } from '@/components/RichText';
import type { PageContent } from '@/content/types';

type Props = {
  content: Pick<PageContent, 'services'>;
};

export function Services({ content }: Props) {
  const { services } = content;
  const gridRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = gridRef.current;
    if (!node) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.01, rootMargin: '0px 0px 20% 0px' },
    );

    observer.observe(node);

    // Mobile: tall stacked grids may never hit a high threshold — reveal if already on screen
    const rect = node.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.95) {
      setVisible(true);
      observer.disconnect();
    }

    return () => observer.disconnect();
  }, []);

  return (
    <Box as="section" id="services" layerStyle="section" aria-labelledby="services-heading">
      <Container maxW="6xl">
        <Stack gap="10">
          <SectionHeader id="services-heading" title={services.title} intro={services.intro} align="center" />

          <Box ref={gridRef}>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap="6">
              {services.items.map((item, index) => (
                <Stack
                  key={item.title}
                  gap="3"
                  align="center"
                  textAlign="center"
                  opacity={visible ? undefined : 0}
                  style={
                    visible
                      ? {
                          animation: `services-card-in 0.9s cubic-bezier(0.22, 1, 0.36, 1) ${index * 0.14}s both`,
                          willChange: 'transform, opacity',
                        }
                      : undefined
                  }
                >
                  <AspectRatio ratio={3 / 4} w="full">
                    <Box
                      layerStyle="mediaTile"
                      bgImage={`url(${item.imageSrc})`}
                      bgSize="cover"
                      bgPos="center"
                      data-src={item.imageSrc}
                      aria-label={item.imageAlt}
                      role="img"
                    />
                  </AspectRatio>
                  <Text textStyle="eyebrow">{item.title}</Text>
                  <Text color="fg.muted" fontSize="sm" maxW="xs">
                    {item.body}
                  </Text>
                </Stack>
              ))}
            </SimpleGrid>
          </Box>

          <Text textAlign="center" color="fg.muted" maxW="2xl" mx="auto">
            <RichText parts={services.note} />
          </Text>
        </Stack>
      </Container>
    </Box>
  );
}
