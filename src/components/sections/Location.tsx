import {
  Box,
  Button,
  Container,
  SimpleGrid,
  Stack,
  Table,
  Text,
} from '@chakra-ui/react';
import { LuMapPin, LuPhone } from 'react-icons/lu';
import { SectionHeader } from '@/components/SectionHeader';
import { RichText } from '@/components/RichText';
import { site } from '@/data/site';
import type { PageContent } from '@/content/types';

type Props = {
  content: PageContent;
};

export function Location({ content }: Props) {
  const { location, hours } = content;

  return (
    <Box as="section" id="contact" layerStyle="section" aria-labelledby="location-heading">
      <Container maxW="6xl">
        <Stack gap="10">
          <SectionHeader id="location-heading" title={location.title} intro={location.note} />

          <SimpleGrid columns={{ base: 1, lg: 2 }} gap="10">
            <Stack gap="6">
              <Stack direction="row" align="start" gap="3">
                <Box as="span" aria-hidden pt="1" color="brand.fg">
                  <LuMapPin />
                </Box>
                <Box as="address" fontStyle="normal">
                  <Text fontWeight="bold">{location.businessName}</Text>
                  {location.addressLines.map((line) => (
                    <Text key={line} color="fg.muted">
                      {line}
                    </Text>
                  ))}
                </Box>
              </Stack>

              <Stack direction={{ base: 'column', sm: 'row' }} gap="3">
                <Button asChild variant="minimal">
                  <a href={`tel:${site.phone}`}>
                    <LuPhone aria-hidden />
                    {location.phoneLabel}
                  </a>
                </Button>
                <Button asChild variant="minimal">
                  <a href={site.googleMaps} target="_blank" rel="noopener noreferrer">
                    <LuMapPin aria-hidden />
                    {location.mapsLabel}
                  </a>
                </Button>
              </Stack>

              <Stack gap="4">
                <Text textStyle="eyebrow">{hours.title}</Text>
                <Table.Root size="sm">
                  <Table.Caption>{hours.caption}</Table.Caption>
                  <Table.Header>
                    <Table.Row>
                      <Table.ColumnHeader>{hours.dayLabel}</Table.ColumnHeader>
                      <Table.ColumnHeader>{hours.hoursLabel}</Table.ColumnHeader>
                    </Table.Row>
                  </Table.Header>
                  <Table.Body>
                    {hours.rows.map((row) => (
                      <Table.Row key={row.day}>
                        <Table.Cell fontWeight="medium">{row.day}</Table.Cell>
                        <Table.Cell>{row.hours}</Table.Cell>
                      </Table.Row>
                    ))}
                  </Table.Body>
                </Table.Root>
                <Text color="fg.muted" fontSize="sm">
                  <RichText parts={hours.note} />
                </Text>
              </Stack>
            </Stack>

            <Box
              borderWidth="1px"
              borderColor="border"
              rounded="md"
              shadow="sm"
              overflow="hidden"
              minH="360px"
              h="100%"
            >
              <iframe
                src={site.mapsEmbed}
                title={location.mapTitle}
                width="100%"
                height="100%"
                style={{ minHeight: '360px', border: 0, display: 'block' }}
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </Box>
          </SimpleGrid>
        </Stack>
      </Container>
    </Box>
  );
}
