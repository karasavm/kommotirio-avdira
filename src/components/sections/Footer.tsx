import { Box, Container, HStack, Link, Stack, Text } from '@chakra-ui/react';
import { LuFacebook, LuMapPin, LuPhone } from 'react-icons/lu';
import { site } from '@/data/site';
import type { PageContent } from '@/content/types';

type Props = {
  content: PageContent;
};

export function Footer({ content }: Props) {
  const { footer, header } = content;
  const year = new Date().getFullYear();

  return (
    <Box as="footer" py={{ base: '10', md: '12' }} borderTopWidth="1px" borderColor="border">
      <Container maxW="6xl">
        <Stack gap="8" align="center" textAlign="center">
          <HStack gap="8" justify="center" flexWrap="wrap">
            <Link href={`tel:${site.phone}`} aria-label={footer.phoneLabel} color="fg">
              <LuPhone size={18} aria-hidden />
            </Link>
            <Link
              href={site.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={footer.address}
              color="fg"
            >
              <LuMapPin size={18} aria-hidden />
            </Link>
            <Link
              href={site.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={footer.facebookAria}
              color="fg"
            >
              <LuFacebook size={18} aria-hidden />
            </Link>
          </HStack>

          <Stack gap="1" align="center" lineHeight="1.1">
            <Text textStyle="logoSub">{header.logoPrimary}</Text>
            <Text textStyle="logo" fontSize={{ base: '1.5rem', md: '1.75rem' }}>
              {header.logoStrong}
            </Text>
            <Text
              fontFamily="body"
              fontSize={{ base: 'xs', md: 'sm' }}
              fontWeight="bold"
              letterSpacing="0.14em"
              textTransform="uppercase"
              color="fg"
            >
              {header.logoLocation}
            </Text>
          </Stack>

          <HStack as="nav" aria-label={footer.navAria} gap="4" flexWrap="wrap" justify="center">
            {footer.nav.map((item) => (
              <Link
                key={`${item.href}-${item.label}`}
                href={item.href}
                fontSize="sm"
                color="fg.muted"
                _hover={{ color: 'fg', textDecoration: 'none' }}
              >
                {item.label}
              </Link>
            ))}
          </HStack>

          <Text color="fg.muted" fontSize="xs">
            &copy; {year} {footer.copyright}
          </Text>
        </Stack>
      </Container>
    </Box>
  );
}
