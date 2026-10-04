import { Provider } from '@/components/ui/provider';
import { Services } from '@/components/sections/Services';
import type { PageContent } from '@/content/types';

type Props = {
  content: Pick<PageContent, 'services'>;
};

export function ServicesIsland({ content }: Props) {
  return (
    <Provider>
      <Services content={content} />
    </Provider>
  );
}
