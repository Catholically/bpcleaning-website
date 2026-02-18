import { MetadataRoute } from 'next';
import { cities, cityServices } from '@/lib/cities';
import { getAllPosts } from '@/lib/blog/index';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.bpcleaning.it';

  // Pagine statiche principali
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/chi-siamo`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/servizi`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/preventivo`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contatti`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/aziende`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/cookie`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];

  // Pagine servizi statiche
  const servicePages: MetadataRoute.Sitemap = [
    'pulizie-civili',
    'pulizie-industriali',
    'sanificazioni',
    'disinfestazioni',
    'trattamento-pavimenti',
    'aree-verdi',
    'pulizie-post-cantiere',
    'pulizie-studi-medici',
    'pulizia-vetrine',
    'lavaggio-facciate',
    'lavaggio-pavimenti-esterni',
    'trattamento-marmo-esterno',
  ].map((service) => ({
    url: `${baseUrl}/servizi/${service}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // Pagine città (44 città)
  const cityPages: MetadataRoute.Sitemap = cities.map((city) => ({
    url: `${baseUrl}/${city.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: city.tier === 1 ? 0.9 : city.tier === 2 ? 0.7 : 0.6,
  }));

  // Pagine città + servizio (44 città x 8 servizi = 352 pagine)
  const cityServicePages: MetadataRoute.Sitemap = [];
  for (const city of cities) {
    for (const service of cityServices) {
      cityServicePages.push({
        url: `${baseUrl}/${city.slug}/${service.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: city.tier === 1 ? 0.7 : 0.5,
      });
    }
  }

  // Blog pages
  const blogListingPage: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ];

  const blogPostPages: MetadataRoute.Sitemap = getAllPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticPages, ...servicePages, ...blogListingPage, ...blogPostPages, ...cityPages, ...cityServicePages];
}
