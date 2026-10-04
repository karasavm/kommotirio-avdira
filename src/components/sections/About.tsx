import { Container, Heading, Stack, Text } from '@chakra-ui/react';
import type { PageContent } from '@/content/types';

type Props = {
  content: PageContent;
};

export function About({ content }: Props) {
  const { about } = content;

  return (
    <Container as="section" id="about" py="12" aria-labelledby="about-heading">
      <Stack gap="4">
        <Heading as="h2" id="about-heading" size="xl">
          {about.title}
        </Heading>
        {about.paragraphs.map((paragraph) => (
          <Text key={paragraph.slice(0, 24)}>{paragraph}</Text>
        ))}
      </Stack>
    </Container>
  );
}
