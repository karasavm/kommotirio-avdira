import { ChakraProvider } from '@chakra-ui/react';
import type { PropsWithChildren } from 'react';
import { system } from '@/theme/system';

export function Provider({ children }: PropsWithChildren) {
  return <ChakraProvider value={system}>{children}</ChakraProvider>;
}
