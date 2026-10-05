import { Box, Button, Container, Heading, HStack, SimpleGrid, Stack, Text } from '@chakra-ui/react';
import type { PageContent } from '@/content/types';
import type { BrandImage } from '@/lib/optimize-page-images';

type Props = {
  content: Pick<PageContent, 'treatments'>;
  brandImages?: BrandImage[];
};

const clipStyle = {
  clipPath: 'inset(0)',
  WebkitClipPath: 'inset(0)',
} as const;

export function Treatments({ content, brandImages }: Props) {
  const { treatments } = content;

  return (
    <Box
      as="section"
      id="treatments"
      aria-labelledby="treatments-heading"
      position="relative"
      minH={{ base: '70vh', md: '100vh' }}
      bgColor="bg.inverted"
      display="flex"
      alignItems="center"
      py={{ base: '16', md: '20' }}
      style={clipStyle}
    >
      <Box
        position="fixed"
        inset="0"
        zIndex="0"
        bgImage={`url(${treatments.imageSrc})`}
        bgSize="cover"
        bgPos="center"
        role="img"
        aria-label={treatments.imageAlt}
      />
      <Box position="fixed" inset="0" zIndex="0" bg="blackAlpha.600" />

      <Container maxW="6xl" position="relative" zIndex="1">
        <SimpleGrid columns={{ base: 1, lg: 2 }} gap={{ base: '10', lg: '16' }} alignItems="center">
          <SimpleGrid columns={{ base: 1, sm: 3, lg: 1 }} gap={{ base: '6', lg: '8' }} justifyItems="center">
            {treatments.brands.map((brand, index) => {
              const optimized = brandImages?.[index];
              return (
                <Box key={brand.name} maxW={{ base: '160px', lg: '200px' }} w="full">
                  <Box
                    cursor="pointer"
                    transition="transform 0.55s cubic-bezier(0.16, 1, 0.3, 1), filter 0.55s ease"
                    transformOrigin="center"
                    _hover={{
                      transform: 'scale(1.18)',
                      filter: 'drop-shadow(0 8px 24px rgba(255, 255, 255, 0.22))',
                    }}
                    css={{
                      '@media (prefers-reduced-motion: reduce)': {
                        transition: 'none',
                        _hover: { transform: 'none', filter: 'none' },
                      },
                    }}
                  >
                    <img
                      src={optimized?.src ?? brand.imageSrc}
                      srcSet={optimized?.srcSet}
                      sizes={optimized?.sizes}
                      width={optimized?.width ?? 800}
                      height={optimized?.height ?? 450}
                      alt={brand.imageAlt}
                      loading="lazy"
                      decoding="async"
                      style={{
                        width: '100%',
                        height: 'auto',
                        objectFit: 'contain',
                        mixBlendMode: 'screen',
                        pointerEvents: 'none',
                        display: 'block',
                      }}
                    />
                  </Box>
                </Box>
              );
            })}
          </SimpleGrid>

          <Stack
            gap="5"
            align={{ base: 'center', lg: 'flex-start' }}
            textAlign={{ base: 'center', lg: 'start' }}
            color="fg.inverted"
          >
            <Heading as="h2" id="treatments-heading" textStyle="heroTitle" color="fg.inverted">
              {treatments.title}
            </Heading>
            <Text fontSize={{ base: 'sm', md: 'md' }} lineHeight="1.7" maxW="md">
              {treatments.text}
            </Text>
            <HStack gap="3" flexWrap="wrap" justify={{ base: 'center', lg: 'flex-start' }} pt="1">
              {treatments.actions.map((action) => (
                <Button
                  key={`${action.href}-${action.label}`}
                  asChild
                  size="md"
                  variant="minimalInverse"
                >
                  <a
                    href={action.href}
                    {...(action.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  >
                    {action.label}
                  </a>
                </Button>
              ))}
            </HStack>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
