import { Provider } from '@/components/ui/provider';
import { Faq } from '@/components/sections/Faq';
import type { PageContent } from '@/content/types';

type Props = {
  content: Pick<PageContent, 'faq'>;
};

export function FaqIsland({ content }: Props) {
  return (
    <Provider>
      <Faq content={content} />
    </Provider>
  );
}
