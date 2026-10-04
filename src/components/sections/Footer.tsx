import { Box, Container, HStack, Link, SimpleGrid, Stack, Text } from '@chakra-ui/react';
import { LuFacebook } from 'react-icons/lu';
import { site } from '@/data/site';
import type { PageContent } from '@/content/types';

type Props = {
  content: PageContent;
};

export function Footer({ content }: Props) {
  const { footer } = content;
  const year = new Date().getFullYear();

  return (
    <Box as="footer" py="10">
      <Container>
        <SimpleGrid columns={{ base: 1, md: 3 }} gap="8" mb="8">
          <Stack gap="2">
            <Text fontWeight="bold">{footer.name}</Text>
            <Text as="address" fontStyle="normal">
              {footer.address}
            </Text>
            <Link href={`tel:${site.phone}`}>{footer.phoneLabel}</Link>
          </Stack>

          <Stack as="nav" aria-label={footer.navAria} gap="2">
            {footer.nav.map((item) => (
              <Link key={`${item.href}-${item.label}`} href={item.href}>
                {item.label}
              </Link>
            ))}
          </Stack>

          <HStack>
            <Link
              href={site.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={footer.facebookAria}
            >
              <LuFacebook />
            </Link>
          </HStack>
        </SimpleGrid>

        <Text>
          &copy; {year} {footer.copyright}
        </Text>
      </Container>
    </Box>
  );
}
