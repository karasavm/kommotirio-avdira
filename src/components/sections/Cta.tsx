import { Button, Container, Heading, Stack, Text } from '@chakra-ui/react';
import { LuPhone } from 'react-icons/lu';
import { site } from '@/data/site';
import type { PageContent } from '@/content/types';

type Props = {
  content: PageContent;
};

export function Cta({ content }: Props) {
  const { cta } = content;

  return (
    <Container as="section" id="contact" py="12" aria-labelledby="cta-heading">
      <Stack gap="4" align="center" textAlign="center">
        <Heading as="h2" id="cta-heading" size="xl">
          {cta.title}
        </Heading>
        <Text>{cta.text}</Text>
        <Button asChild>
          <a href={`tel:${site.phone}`}>
            <LuPhone />
            {cta.buttonLabel}
          </a>
        </Button>
      </Stack>
    </Container>
  );
}
