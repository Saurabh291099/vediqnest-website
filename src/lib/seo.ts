interface JsonLdObject {
  '@context': string;
  '@type': string;
  [key: string]: unknown;
}

export const generateOrganizationSchema = (): JsonLdObject => ({
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: 'VedicNest',
  alternateName: 'VedicNest',
  description: 'Vedic learning and cultural experiences for children aged 6-12',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Noida',
    addressRegion: 'Uttar Pradesh',
    addressCountry: 'IN',
  },
  educationalLevel: 'Elementary',
  areaServed: 'Noida',
});

export const generateBreadcrumbSchema = (items: Array<{ name: string; url: string }>): JsonLdObject => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});
