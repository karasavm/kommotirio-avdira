import { Box, Card, Container, Heading, SimpleGrid, Stack, Text } from '@chakra-ui/react';
import type { PageContent } from '@/content/types';

type Props = {
  content: PageContent;
};

export function Gallery({ content }: Props) {
  const { gallery } = content;

  return (
    <Box as="section" id="gallery" py="12" aria-labelledby="gallery-heading">
      <Container>
        <Stack gap="8">
          <Stack gap="3">
            <Heading as="h2" id="gallery-heading" size="xl">
              {gallery.title}
            </Heading>
            <Text>{gallery.intro}</Text>
          </Stack>

          <SimpleGrid
            columns={{ base: 1, sm: 2, lg: 4 }}
            gap="4"
            role="list"
            aria-label={gallery.listAria}
          >
            {gallery.items.map((item, index) => (
              <Card.Root key={item.src} role="listitem">
                <Card.Body>
                  <Card.Description>{item.alt || `Gallery ${index + 1}`}</Card.Description>
                </Card.Body>
              </Card.Root>
            ))}
          </SimpleGrid>
        </Stack>
      </Container>
    </Box>
  );
}
