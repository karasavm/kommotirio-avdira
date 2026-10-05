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

  return (
    <Box as="section" id="services" layerStyle="section" aria-labelledby="services-heading">
      <Container maxW="6xl">
        <Stack gap="10">
          <SectionHeader id="services-heading" title={services.title} intro={services.intro} align="center" />

          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap="6">
            {services.items.map((item) => (
              <Stack key={item.title} gap="3" align="center" textAlign="center">
                <AspectRatio ratio={3 / 4} w="full">
                  <Box
                    layerStyle="mediaTile"
                    bgImage={`url(${item.imageSrc})`}
                    bgSize="cover"
                    bgPos="center"
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

          <Text textAlign="center" color="fg.muted" maxW="2xl" mx="auto">
            <RichText parts={services.note} />
          </Text>
        </Stack>
      </Container>
    </Box>
  );
}
