import { el } from '@/content/el';
import { en } from '@/content/en';
import type { Locale } from '@/data/site';
import type { PageContent } from '@/content/types';

export function getContent(locale: Locale): PageContent {
  return locale === 'en' ? en : el;
}

export type { PageContent } from '@/content/types';
