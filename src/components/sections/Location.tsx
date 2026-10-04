import {
  Box,
  Button,
  Container,
  Heading,
  Link,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react';
import { LuMapPin, LuPhone } from 'react-icons/lu';
import { site } from '@/data/site';
import type { PageContent } from '@/content/types';

type Props = {
  content: PageContent;
};

export function Location({ content }: Props) {
  const { location } = content;

  return (
    <Box as="section" id="location" py="12" aria-labelledby="location-heading">
      <Container>
        <Stack gap="8">
          <Heading as="h2" id="location-heading" size="xl">
            {location.title}
          </Heading>

          <SimpleGrid columns={{ base: 1, lg: 2 }} gap="8">
            <Stack gap="4">
              <Stack direction="row" align="start" gap="3">
                <LuMapPin />
                <Box as="address" fontStyle="normal">
                  <Text fontWeight="bold">{location.businessName}</Text>
                  {location.addressLines.map((line) => (
                    <Text key={line}>{line}</Text>
                  ))}
                </Box>
              </Stack>

              <Link href={`tel:${site.phone}`}>
                <Stack direction="row" align="center" gap="2">
                  <LuPhone />
                  <span>{location.phoneLabel}</span>
                </Stack>
              </Link>

              <Button asChild alignSelf="start">
                <a href={site.googleMaps} target="_blank" rel="noopener noreferrer">
                  <LuMapPin />
                  {location.mapsLabel}
                </a>
              </Button>

              <Text>{location.note}</Text>
            </Stack>

            <Box
              as="iframe"
              src={site.mapsEmbed}
              title={location.mapTitle}
              width="100%"
              height="320"
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </SimpleGrid>
        </Stack>
      </Container>
    </Box>
  );
}
