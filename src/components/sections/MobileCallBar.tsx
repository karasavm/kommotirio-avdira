import { Box, Button } from '@chakra-ui/react';
import { LuPhone } from 'react-icons/lu';
import { site } from '@/data/site';
import type { PageContent } from '@/content/types';

type Props = {
  content: PageContent;
};

export function MobileCallBar({ content }: Props) {
  const { mobileCall } = content;

  return (
    <Box
      position="fixed"
      bottom="0"
      insetInline="0"
      p="3"
      bg="bg"
      display={{ base: 'block', md: 'none' }}
      zIndex="banner"
    >
      <Button asChild width="full">
        <a href={`tel:${site.phone}`} aria-label={mobileCall.aria}>
          <LuPhone />
          {mobileCall.label}
        </a>
      </Button>
    </Box>
  );
}
