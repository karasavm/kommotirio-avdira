import { Provider } from '@/components/ui/provider';
import { Header, type HeaderContent } from '@/components/sections/Header';

type Props = {
  content: HeaderContent;
};

export function HeaderIsland({ content }: Props) {
  return (
    <Provider>
      <Header content={content} />
    </Provider>
  );
}
