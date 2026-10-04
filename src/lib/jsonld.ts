import { site } from '@/data/site';
import type { PageContent } from '@/content/types';

function faqAnswerText(parts: PageContent['faq']['items'][number]['answer']): string {
  return parts
    .map((part) => (typeof part === 'string' ? part : part.label))
    .join('');
}

export function buildJsonLd(content: PageContent) {
  const canonical = `${site.domain}${content.seo.canonicalPath}`;
  const isGreek = content.locale === 'el';

  const graph: Record<string, unknown>[] = [
    {
      '@type': 'ImageObject',
      '@id': `${site.domain}/#primaryimage`,
      url: `${site.domain}/og-image.jpg`,
      width: 1200,
      height: 630,
    },
    {
      '@type': 'WebPage',
      '@id': `${canonical}#webpage`,
      url: canonical,
      name: content.seo.title,
      description: content.seo.description,
      inLanguage: content.seo.inLanguage,
      isPartOf: { '@id': `${site.domain}/#website` },
      about: { '@id': `${site.domain}/#business` },
      primaryImageOfPage: { '@id': `${site.domain}/#primaryimage` },
    },
    {
      '@type': 'FAQPage',
      '@id': `${canonical}#faq`,
      mainEntity: content.faq.items.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faqAnswerText(item.answer),
        },
      })),
    },
  ];

  if (isGreek) {
    graph.unshift(
      {
        '@type': 'HairSalon',
        '@id': `${site.domain}/#business`,
        name: site.name,
        alternateName: site.nameEn,
        description:
          'Κομμωτήριο στα Άβδηρα Ξάνθης. Γυναικεία, ανδρικά και παιδικά κουρέματα, βαφές, ανταύγειες, χτενίσματα για γάμους και περιποίηση μαλλιών.',
        url: `${site.domain}/`,
        telephone: site.phone,
        image: { '@id': `${site.domain}/#primaryimage` },
        address: {
          '@type': 'PostalAddress',
          addressLocality: site.locality,
          addressRegion: site.region,
          addressCountry: site.country,
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: site.lat,
          longitude: site.lng,
        },
        hasMap: site.googleMaps,
        openingHoursSpecification: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: [
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
            'Sunday',
          ],
          opens: site.opens,
          closes: site.closes,
        },
        sameAs: [site.facebook],
      },
      {
        '@type': 'WebSite',
        '@id': `${site.domain}/#website`,
        url: `${site.domain}/`,
        name: site.name,
        alternateName: site.nameEn,
      },
    );
  }

  return {
    '@context': 'https://schema.org',
    '@graph': graph,
  };
}
