import { Box, Button, Heading, Stack, Text } from '@chakra-ui/react';
import { site } from '@/data/site';
import type { PageContent } from '@/content/types';

type Props = {
  content: PageContent;
};

export function Hero({ content }: Props) {
  const { hero } = content;

  return (
    <Box
      as="section"
      aria-labelledby="hero-heading"
      position="relative"
      minH={{ base: '85vh', md: '100vh' }}
      bgColor="bg.inverted"
      display="flex"
      alignItems="center"
      justifyContent="center"
      px="6"
      py="16"
      clipPath={{ md: 'inset(0)' }}
    >
      <Box
        position={{ base: 'absolute', md: 'fixed' }}
        inset="0"
        zIndex="0"
        bgImage={`url(${hero.imageSrc})`}
        bgSize="cover"
        bgPos="center"
        filter="grayscale(1)"
        role="img"
        aria-label={hero.imageAlt}
      />
      <Box
        position={{ base: 'absolute', md: 'fixed' }}
        inset="0"
        zIndex="0"
        layerStyle="heroOverlay"
      />
      <Stack
        gap={{ base: '5', md: '6' }}
        align="center"
        textAlign="center"
        maxW="3xl"
        color="fg.inverted"
        position="relative"
        zIndex="1"
        textShadow="0 1px 2px rgba(0, 0, 0, 0.55), 0 4px 18px rgba(0, 0, 0, 0.35)"
      >
        <Heading
          as="h1"
          id="hero-heading"
          textStyle="heroTitle"
          color="fg.inverted"
          maxW="3xl"
        >
          {hero.title}{' '}
          <Text as="span" fontWeight="bold" letterSpacing="0.12em">
            {hero.titleEmphasis}
          </Text>
        </Heading>

        <Text textStyle="heroTagline" color="fg.inverted" maxW="2xl">
          {hero.tagline}
        </Text>

        <Text
          fontSize={{ base: 'sm', md: 'md' }}
          lineHeight="1.7"
          maxW="2xl"
          color="fg.inverted"
        >
          {hero.text}
        </Text>

        <Button asChild size="lg" variant="minimalInverse" mt="2">
          <a href={`tel:${site.phone}`}>{hero.callLabel}</a>
        </Button>
      </Stack>
    </Box>
  );
}
