import {
  Box,
  Button,
  Container,
  Drawer,
  Flex,
  HStack,
  IconButton,
  Link,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import { LuMenu, LuPhone, LuX } from 'react-icons/lu';
import { site } from '@/data/site';
import type { PageContent } from '@/content/types';

export type HeaderContent = Pick<
  PageContent,
  | 'locale'
  | 'homePath'
  | 'otherLocalePath'
  | 'otherLocaleLabel'
  | 'otherLocaleAria'
  | 'header'
>;

type Props = {
  content: HeaderContent;
};

export function Header({ content }: Props) {
  const { header, homePath, otherLocalePath, otherLocaleLabel, otherLocaleAria } =
    content;

  return (
    <Box as="header" position="sticky" top="0" zIndex="sticky" bg="bg">
      <Container py="3">
        <Flex align="center" justify="space-between" gap="4">
          <Link href={homePath} aria-label={header.logoAria}>
            <VStack align="start" gap="0">
              <Text>
                {header.logoPrimary}{' '}
                <Text as="span" fontWeight="bold">
                  {header.logoStrong}
                </Text>
              </Text>
              <Text>{header.logoLocation}</Text>
            </VStack>
          </Link>

          <HStack as="nav" aria-label={header.navAria} gap="4" display={{ base: 'none', lg: 'flex' }}>
            {header.nav.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </HStack>

          <HStack gap="2">
            <Button asChild display={{ base: 'none', md: 'inline-flex' }}>
              <a href={`tel:${site.phone}`} aria-label={header.phoneAria}>
                <LuPhone />
                {header.phoneLabel}
              </a>
            </Button>
            <Button asChild variant="ghost">
              <a
                href={otherLocalePath}
                aria-label={otherLocaleAria}
                lang={content.locale === 'el' ? 'en' : 'el'}
              >
                {otherLocaleLabel}
              </a>
            </Button>

            <Drawer.Root>
              <Drawer.Trigger asChild>
                <IconButton
                  aria-label={header.menuAria}
                  display={{ base: 'inline-flex', lg: 'none' }}
                >
                  <LuMenu />
                </IconButton>
              </Drawer.Trigger>
              <Drawer.Backdrop />
              <Drawer.Positioner>
                <Drawer.Content>
                  <Drawer.Header>
                    <Drawer.Title>{header.logoStrong}</Drawer.Title>
                    <Drawer.CloseTrigger asChild>
                      <IconButton aria-label="Close" variant="ghost">
                        <LuX />
                      </IconButton>
                    </Drawer.CloseTrigger>
                  </Drawer.Header>
                  <Drawer.Body>
                    <Stack gap="4">
                      {header.nav.map((item) => (
                        <Drawer.CloseTrigger key={item.href} asChild>
                          <Link href={item.href}>{item.label}</Link>
                        </Drawer.CloseTrigger>
                      ))}
                      <Link href={`tel:${site.phone}`}>
                        <HStack>
                          <LuPhone />
                          <span>{header.mobileCallLabel}</span>
                        </HStack>
                      </Link>
                      <Link
                        href={otherLocalePath}
                        lang={content.locale === 'el' ? 'en' : 'el'}
                      >
                        {header.mobileLangLabel}
                      </Link>
                    </Stack>
                  </Drawer.Body>
                </Drawer.Content>
              </Drawer.Positioner>
            </Drawer.Root>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
}
