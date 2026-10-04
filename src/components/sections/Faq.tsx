import { Box, Card, Container, Heading, Stack, Text } from '@chakra-ui/react';
import { RichText } from '@/components/RichText';
import type { PageContent } from '@/content/types';

type Props = {
  content: PageContent;
};

export function Faq({ content }: Props) {
  const { faq } = content;

  return (
    <Box as="section" id="faq" py="12" aria-labelledby="faq-heading">
      <Container>
        <Stack gap="6">
          <Heading as="h2" id="faq-heading" size="xl">
            {faq.title}
          </Heading>

          <Stack gap="3">
            {faq.items.map((item) => (
              <Card.Root key={item.question} as="details">
                <Card.Body>
                  <Text as="summary">{item.question}</Text>
                  <Box pt="3">
                    <RichText parts={item.answer} />
                  </Box>
                </Card.Body>
              </Card.Root>
            ))}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
