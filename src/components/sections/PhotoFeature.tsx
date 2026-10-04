import { Box, Button, Heading, HStack, Stack, Text } from '@chakra-ui/react';
import type { PhotoFeatureContent } from '@/content/types';

type Props = {
  feature: PhotoFeatureContent;
};

export function PhotoFeature({ feature }: Props) {
  const alignEnd = feature.align === 'end';

  return (
    <Box
      as="section"
      id={feature.id}
      aria-labelledby={`${feature.id}-heading`}
      position="relative"
      minH={{ base: '70vh', md: '100vh' }}
      bgColor="bg.inverted"
      display="flex"
      alignItems="center"
      justifyContent={alignEnd ? 'flex-end' : 'flex-start'}
      pl={{
        base: '6',
        md: alignEnd ? '8' : '10%',
        lg: alignEnd ? '8' : '12%',
        xl: alignEnd ? '8' : '14%',
      }}
      pr={{
        base: '6',
        md: alignEnd ? '8%' : '8',
        lg: alignEnd ? '10%' : '8',
        xl: alignEnd ? '12%' : '8',
      }}
      py="16"
      clipPath={{ md: 'inset(0)' }}
    >
      <Box
        position={{ base: 'absolute', md: 'fixed' }}
        inset="0"
        zIndex="0"
        bgImage={`url(${feature.imageSrc})`}
        bgSize="cover"
        bgPos={feature.imagePosition ?? 'center'}
        filter={feature.mono ? 'grayscale(1)' : undefined}
        role="img"
        aria-label={feature.imageAlt}
      />
      <Box
        position={{ base: 'absolute', md: 'fixed' }}
        inset="0"
        zIndex="0"
        bg="blackAlpha.400"
      />
      <Stack
        gap="5"
        align="center"
        textAlign="center"
        maxW="md"
        w={{ base: 'full', md: 'auto' }}
        color="fg.inverted"
        position="relative"
        zIndex="1"
      >
        <Heading
          as="h2"
          id={`${feature.id}-heading`}
          textStyle="heroTitle"
          color="fg.inverted"
        >
          {feature.title}
        </Heading>
        <Text fontSize={{ base: 'sm', md: 'md' }} lineHeight="1.7" color="fg.inverted">
          {feature.text}
        </Text>
        <HStack gap="3" flexWrap="wrap" justify="center" pt="1">
          {feature.actions.map((action) => (
            <Button
              key={`${action.href}-${action.label}`}
              asChild
              size="md"
              variant="minimalInverse"
            >
              <a
                href={action.href}
                {...(action.external
                  ? { target: '_blank', rel: 'noopener noreferrer' }
                  : {})}
              >
                {action.label}
              </a>
            </Button>
          ))}
        </HStack>
      </Stack>
    </Box>
  );
}
