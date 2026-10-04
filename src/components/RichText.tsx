import { Link, Text } from '@chakra-ui/react';
import type { RichPart } from '@/content/types';

type Props = {
  parts: RichPart[];
};

export function RichText({ parts }: Props) {
  return (
    <Text as="span">
      {parts.map((part, index) => {
        if (typeof part === 'string') {
          return <span key={index}>{part}</span>;
        }

        return (
          <Link
            key={index}
            href={part.href}
            target={part.external ? '_blank' : undefined}
            rel={part.external ? 'noopener noreferrer' : undefined}
          >
            {part.label}
          </Link>
        );
      })}
    </Text>
  );
}
