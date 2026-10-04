import { Box, Button, Heading, HStack, Stack, Text } from '@chakra-ui/react';
import { LuPhone } from 'react-icons/lu';
import { site } from '@/data/site';
import type { PageContent } from '@/content/types';

type Props = {
  content: PageContent;
};

export function Cta({ content }: Props) {
  const { cta } = content;

  return (
    <Box
      as="section"
      id="booking"
      aria-labelledby="cta-heading"
      position="relative"
      minH={{ base: '50vh', md: '60vh' }}
      bgImage={`url(${cta.imageSrc})`}
      bgSize="cover"
      bgPos="center"
      bgColor="bg.inverted"
      display="flex"
      alignItems="center"
      justifyContent="center"
      px="6"
      py="16"
    >
      <Box position="absolute" inset="0" layerStyle="photoBand" />
      <Stack
        gap="5"
        align="center"
        textAlign="center"
        maxW="2xl"
        position="relative"
        zIndex="1"
        color="fg.inverted"
      >
        <Heading as="h2" id="cta-heading" textStyle="sectionTitle" color="fg.inverted">
          {cta.title}
        </Heading>
        <Text fontSize={{ base: 'md', md: 'lg' }} color="fg.inverted">
          {cta.text}
        </Text>
        <HStack gap="3" flexWrap="wrap" justify="center">
          <Button asChild size="lg" variant="minimalInverse">
            <a href={`tel:${site.phone}`}>
              <LuPhone aria-hidden />
              {cta.buttonLabel}
            </a>
          </Button>
          <Button asChild size="lg" variant="minimalInverse">
            <a href={site.googleMaps} target="_blank" rel="noopener noreferrer">
              {cta.secondaryLabel}
            </a>
          </Button>
        </HStack>
      </Stack>
    </Box>
  );
}
