import {
  Box,
  Button,
  Container,
  Drawer,
  Flex,
  HStack,
  IconButton,
  Link,
  Portal,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import { LuFacebook, LuMenu, LuPhone, LuX } from 'react-icons/lu';
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
  | 'footer'
>;

type Props = {
  content: HeaderContent;
};

function BrandMark({
  primary,
  strong,
  location,
  href,
  ariaLabel,
}: {
  primary: string;
  strong: string;
  location: string;
  href: string;
  ariaLabel: string;
}) {
  return (
    <Link href={href} aria-label={ariaLabel} _hover={{ textDecoration: 'none' }}>
      <VStack gap="0.5" align="center" lineHeight="1.1">
        <Text textStyle="logoSub">{primary}</Text>
        <Text textStyle="logo">{strong}</Text>
        <Text
          fontFamily="body"
          fontSize={{ base: 'sm', md: 'md' }}
          fontWeight="bold"
          letterSpacing="0.14em"
          textTransform="uppercase"
          color="fg"
        >
          {location}
        </Text>
      </VStack>
    </Link>
  );
}

export function Header({ content }: Props) {
  const { header, homePath, otherLocalePath, otherLocaleAria, locale, footer } = content;
  const isGreek = locale === 'el';

  return (
    <Box as="header" bg="bg" borderBottomWidth="1px" borderColor="border">
      <Container maxW="6xl" py={{ base: '5', md: '6' }}>
        <Flex align="center" justify="space-between" gap="3" position="relative" minH="14">
          <HStack gap="3" zIndex="1">
            <Drawer.Root size="full" placement="top">
              <Drawer.Trigger asChild>
                <IconButton aria-label={header.menuAria} variant="ghost" rounded="none">
                  <LuMenu aria-hidden />
                </IconButton>
              </Drawer.Trigger>
              <Portal>
                <Drawer.Backdrop />
                <Drawer.Positioner>
                  <Drawer.Content bg="bg.subtle" rounded="none">
                    <Drawer.CloseTrigger asChild>
                      <IconButton
                        aria-label={header.closeAria}
                        variant="ghost"
                        rounded="none"
                        position="absolute"
                        top="4"
                        insetEnd="4"
                        zIndex="1"
                      >
                        <LuX aria-hidden />
                      </IconButton>
                    </Drawer.CloseTrigger>
                    <Drawer.Body
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      minH="100dvh"
                      py="16"
                    >
                      <Stack gap="10" align="center" textAlign="center" maxW="3xl">
                        <BrandMark
                          primary={header.logoPrimary}
                          strong={header.logoStrong}
                          location={header.logoLocation}
                          href={homePath}
                          ariaLabel={header.logoAria}
                        />
                        <Drawer.Context>
                          {(drawer) => (
                            <Stack
                              as="nav"
                              aria-label={header.navAria}
                              gap="4"
                              align="center"
                              direction={{ base: 'column', md: 'row' }}
                              flexWrap="wrap"
                              justify="center"
                            >
                              {header.nav.map((item) => (
                                <Link
                                  key={item.href}
                                  href={item.href}
                                  textStyle="eyebrow"
                                  fontSize="sm"
                                  onClick={() => drawer.setOpen(false)}
                                  _hover={{ textDecoration: 'none', color: 'brand.fg' }}
                                >
                                  {item.label}
                                </Link>
                              ))}
                            </Stack>
                          )}
                        </Drawer.Context>
                        <HStack gap="6" color="fg">
                          <Link href={`tel:${site.phone}`} aria-label={header.phoneAria}>
                            <LuPhone size={20} aria-hidden />
                          </Link>
                          <Link
                            href={site.facebook}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={footer.facebookAria}
                          >
                            <LuFacebook size={20} aria-hidden />
                          </Link>
                        </HStack>
                      </Stack>
                    </Drawer.Body>
                  </Drawer.Content>
                </Drawer.Positioner>
              </Portal>
            </Drawer.Root>

            <HStack gap="2" fontSize="sm" fontWeight="medium" letterSpacing="0.08em">
              {isGreek ? (
                <>
                  <Text>EL</Text>
                  <Text aria-hidden>|</Text>
                  <Link
                    href={otherLocalePath}
                    aria-label={otherLocaleAria}
                    lang="en"
                    opacity={0.5}
                    _hover={{ textDecoration: 'none', opacity: 1 }}
                  >
                    EN
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    href={otherLocalePath}
                    aria-label={otherLocaleAria}
                    lang="el"
                    opacity={0.5}
                    _hover={{ textDecoration: 'none', opacity: 1 }}
                  >
                    EL
                  </Link>
                  <Text aria-hidden>|</Text>
                  <Text>EN</Text>
                </>
              )}
            </HStack>
          </HStack>

          <Box
            position={{ base: 'static', sm: 'absolute' }}
            left={{ sm: '50%' }}
            transform={{ sm: 'translateX(-50%)' }}
          >
            <BrandMark
              primary={header.logoPrimary}
              strong={header.logoStrong}
              location={header.logoLocation}
              href={homePath}
              ariaLabel={header.logoAria}
            />
          </Box>

          <HStack gap="2" zIndex="1">
            <Button
              asChild
              size="sm"
              variant="minimal"
              display={{ base: 'none', md: 'inline-flex' }}
            >
              <a href="#services">{header.servicesCtaLabel}</a>
            </Button>
            <Button
              asChild
              size="sm"
              variant="minimal"
              display={{ base: 'none', md: 'inline-flex' }}
            >
              <a href={`tel:${site.phone}`} aria-label={header.phoneAria}>
                <LuPhone aria-hidden />
                {header.callCtaLabel}
              </a>
            </Button>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
}
