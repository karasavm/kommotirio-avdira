import { Box, Button, Container, Heading, HStack, Stack, Text } from '@chakra-ui/react';
import { LuMapPin, LuPhone } from 'react-icons/lu';
import { site } from '@/data/site';
import type { PageContent } from '@/content/types';

type Props = {
  content: PageContent;
};

export function Hero({ content }: Props) {
  const { hero } = content;

  return (
    <Box as="section" aria-labelledby="hero-heading" py="12">
      <Container>
        <Stack gap="6">
          <Heading as="h1" id="hero-heading" size="2xl">
            {hero.title}
            <Text as="span" display="block">
              {hero.location}
            </Text>
          </Heading>
          <Text>{hero.tagline}</Text>
          <HStack gap="3" flexWrap="wrap">
            <Button asChild>
              <a href={`tel:${site.phone}`}>
                <LuPhone />
                {hero.callLabel}
              </a>
            </Button>
            <Button asChild variant="outline">
              <a href={site.googleMaps} target="_blank" rel="noopener noreferrer">
                <LuMapPin />
                {hero.directionsLabel}
              </a>
            </Button>
          </HStack>
          <Text aria-label={hero.imageAlt}>{hero.imageAlt}</Text>
        </Stack>
      </Container>
    </Box>
  );
}
