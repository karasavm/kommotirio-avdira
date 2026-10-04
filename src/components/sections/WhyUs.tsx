import { Box, Card, Container, Heading, SimpleGrid, Stack } from '@chakra-ui/react';
import type { PageContent } from '@/content/types';

type Props = {
  content: PageContent;
};

export function WhyUs({ content }: Props) {
  const { whyUs } = content;

  return (
    <Box as="section" id="why-us" py="12" aria-labelledby="why-us-heading">
      <Container>
        <Stack gap="8">
          <Heading as="h2" id="why-us-heading" size="xl">
            {whyUs.title}
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} gap="4">
            {whyUs.items.map((item) => (
              <Card.Root key={item.title}>
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Description>{item.body}</Card.Description>
                </Card.Body>
              </Card.Root>
            ))}
          </SimpleGrid>
        </Stack>
      </Container>
    </Box>
  );
}
