import {
  AspectRatio,
  Box,
  Container,
  List,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react';
import { SectionHeader } from '@/components/SectionHeader';
import type { PageContent } from '@/content/types';

type Props = {
  content: PageContent;
};

export function About({ content }: Props) {
  const { about } = content;

  return (
    <Box as="section" id="about" layerStyle="sectionAbout" aria-labelledby="about-heading">
      <Container maxW="6xl" position="relative" zIndex="1">
        <SimpleGrid columns={{ base: 1, lg: 2 }} gap={{ base: '10', lg: '16' }} alignItems="center">
          <Stack gap="6">
            <SectionHeader id="about-heading" title={about.title} />
            <Stack gap="4">
              {about.paragraphs.map((paragraph) => (
                <Text key={paragraph.slice(0, 24)} color="fg.muted" fontSize={{ base: 'md', md: 'lg' }}>
                  {paragraph}
                </Text>
              ))}
            </Stack>
            <List.Root gap="2" variant="plain" ps="0">
              {about.highlights.map((item) => (
                <List.Item key={item} display="flex" alignItems="center" gap="3">
                  <Box w="2" h="2" bg="brand.solid" flexShrink="0" />
                  <Text fontWeight="medium">{item}</Text>
                </List.Item>
              ))}
            </List.Root>
          </Stack>

          <AspectRatio ratio={4 / 5}>
            <Box
              layerStyle="mediaTile"
              bgImage={about.imageSrc ? `url(${about.imageSrc})` : undefined}
              bgSize="cover"
              bgPos="center"
              data-src={about.imageSrc}
              aria-label={about.imageAlt}
              role="img"
            />
          </AspectRatio>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
