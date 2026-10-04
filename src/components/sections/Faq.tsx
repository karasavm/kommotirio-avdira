import { Accordion, Box, Container, Span, Stack } from '@chakra-ui/react';
import { SectionHeader } from '@/components/SectionHeader';
import { RichText } from '@/components/RichText';
import type { PageContent } from '@/content/types';

type Props = {
  content: Pick<PageContent, 'faq'>;
};

export function Faq({ content }: Props) {
  const { faq } = content;

  return (
    <Box as="section" id="faq" layerStyle="sectionMuted" aria-labelledby="faq-heading">
      <Container maxW="3xl">
        <Stack gap="8">
          <SectionHeader id="faq-heading" title={faq.title} align="center" />

          <Accordion.Root collapsible multiple variant="plain">
            {faq.items.map((item, index) => (
              <Accordion.Item key={item.question} value={`item-${index}`} borderBottomWidth="1px" borderColor="border">
                <Accordion.ItemTrigger py="4">
                  <Span flex="1" fontWeight="medium" textAlign="start">
                    {item.question}
                  </Span>
                  <Accordion.ItemIndicator />
                </Accordion.ItemTrigger>
                <Accordion.ItemContent>
                  <Accordion.ItemBody pb="4" color="fg.muted">
                    <RichText parts={item.answer} />
                  </Accordion.ItemBody>
                </Accordion.ItemContent>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </Stack>
      </Container>
    </Box>
  );
}
