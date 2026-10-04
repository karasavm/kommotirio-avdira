import { Container, Heading, Stack, Table, Text } from '@chakra-ui/react';
import { RichText } from '@/components/RichText';
import type { PageContent } from '@/content/types';

type Props = {
  content: PageContent;
};

export function Hours({ content }: Props) {
  const { hours } = content;

  return (
    <Container as="section" id="hours" py="12" aria-labelledby="hours-heading">
      <Stack gap="6">
        <Heading as="h2" id="hours-heading" size="xl">
          {hours.title}
        </Heading>

        <Table.Root>
          <Table.Caption>{hours.caption}</Table.Caption>
          <Table.Body>
            {hours.rows.map((row) => (
              <Table.Row key={row.day}>
                <Table.Cell>{row.day}</Table.Cell>
                <Table.Cell>{row.hours}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>

        <Text>
          <RichText parts={hours.note} />
        </Text>
      </Stack>
    </Container>
  );
}
