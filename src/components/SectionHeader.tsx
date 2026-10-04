import { Heading, Stack, Text } from '@chakra-ui/react';

type Props = {
  id: string;
  title: string;
  intro?: string;
  align?: 'start' | 'center';
  inverted?: boolean;
};

export function SectionHeader({
  id,
  title,
  intro,
  align = 'start',
  inverted = false,
}: Props) {
  return (
    <Stack gap="3" textAlign={align} align={align === 'center' ? 'center' : 'stretch'}>
      <Heading as="h2" id={id} textStyle="sectionTitle" color={inverted ? 'fg.inverted' : 'fg'}>
        {title}
      </Heading>
      {intro ? (
        <Text
          color={inverted ? 'whiteAlpha.900' : 'fg.muted'}
          maxW="2xl"
          fontSize={{ base: 'md', md: 'lg' }}
        >
          {intro}
        </Text>
      ) : null}
    </Stack>
  );
}
