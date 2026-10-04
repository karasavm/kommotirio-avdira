import { Card, Container, Heading, SimpleGrid, Stack, Text } from '@chakra-ui/react';
import { RichText } from '@/components/RichText';
import type { PageContent } from '@/content/types';

type Props = {
  content: PageContent;
};

export function Services({ content }: Props) {
  const { services } = content;

  return (
    <Container as="section" id="services" py="12" aria-labelledby="services-heading">
      <Stack gap="8">
        <Stack gap="3">
          <Heading as="h2" id="services-heading" size="xl">
            {services.title}
          </Heading>
          <Text>{services.intro}</Text>
        </Stack>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap="4">
          {services.items.map((item) => (
            <Card.Root key={item.title}>
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Description>{item.body}</Card.Description>
              </Card.Body>
            </Card.Root>
          ))}
        </SimpleGrid>

        <Text>
          <RichText parts={services.note} />
        </Text>
      </Stack>
    </Container>
  );
}
