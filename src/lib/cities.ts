export interface City {
  slug: string;
  name: string;
  provincia: 'VA' | 'CO' | 'MB';
  tier: 1 | 2 | 3;
}

export interface CityService {
  slug: string;
  name: string;
  description: string;
}

export const cities: City[] = [
  // Tier 1 - Città Principali (>15.000 abitanti)
  { slug: 'varese', name: 'Varese', provincia: 'VA', tier: 1 },
  { slug: 'busto-arsizio', name: 'Busto Arsizio', provincia: 'VA', tier: 1 },
  { slug: 'gallarate', name: 'Gallarate', provincia: 'VA', tier: 1 },
  { slug: 'saronno', name: 'Saronno', provincia: 'VA', tier: 1 },
  { slug: 'tradate', name: 'Tradate', provincia: 'VA', tier: 1 },
  { slug: 'cassano-magnago', name: 'Cassano Magnago', provincia: 'VA', tier: 1 },

  // Tier 2 - Città Medie
  { slug: 'gavirate', name: 'Gavirate', provincia: 'VA', tier: 2 },
  { slug: 'besozzo', name: 'Besozzo', provincia: 'VA', tier: 2 },
  { slug: 'sesto-calende', name: 'Sesto Calende', provincia: 'VA', tier: 2 },
  { slug: 'malnate', name: 'Malnate', provincia: 'VA', tier: 2 },
  { slug: 'induno-olona', name: 'Induno Olona', provincia: 'VA', tier: 2 },
  { slug: 'arcisate', name: 'Arcisate', provincia: 'VA', tier: 2 },
  { slug: 'somma-lombardo', name: 'Somma Lombardo', provincia: 'VA', tier: 2 },
  { slug: 'bisuschio', name: 'Bisuschio', provincia: 'VA', tier: 2 },
  { slug: 'vedano-olona', name: 'Vedano Olona', provincia: 'VA', tier: 2 },
  { slug: 'azzate', name: 'Azzate', provincia: 'VA', tier: 2 },
  { slug: 'castellanza', name: 'Castellanza', provincia: 'VA', tier: 2 },
  { slug: 'albizzate', name: 'Albizzate', provincia: 'VA', tier: 2 },
  { slug: 'cairate', name: 'Cairate', provincia: 'VA', tier: 2 },
  { slug: 'venegono-inferiore', name: 'Venegono Inferiore', provincia: 'VA', tier: 2 },
  { slug: 'venegono-superiore', name: 'Venegono Superiore', provincia: 'VA', tier: 2 },
  { slug: 'lavena-ponte-tresa', name: 'Lavena Ponte Tresa', provincia: 'VA', tier: 2 },
  { slug: 'viggiu', name: 'Viggiu', provincia: 'VA', tier: 2 },
  { slug: 'castronno', name: 'Castronno', provincia: 'VA', tier: 2 },
  { slug: 'valganna', name: 'Valganna', provincia: 'VA', tier: 2 },
  { slug: 'samarate', name: 'Samarate', provincia: 'VA', tier: 2 },
  { slug: 'cardano-al-campo', name: 'Cardano al Campo', provincia: 'VA', tier: 2 },
  { slug: 'olgiate-olona', name: 'Olgiate Olona', provincia: 'VA', tier: 2 },
  { slug: 'fagnano-olona', name: 'Fagnano Olona', provincia: 'VA', tier: 2 },
  { slug: 'lonate-pozzolo', name: 'Lonate Pozzolo', provincia: 'VA', tier: 2 },
  { slug: 'gorla-minore', name: 'Gorla Minore', provincia: 'VA', tier: 2 },
  { slug: 'marnate', name: 'Marnate', provincia: 'VA', tier: 2 },

  // Tier 3 - Como (solo capoluogo)
  { slug: 'como', name: 'Como', provincia: 'CO', tier: 3 },

  // Tier 3 - Monza Brianza
  { slug: 'monza', name: 'Monza', provincia: 'MB', tier: 1 },
  { slug: 'seregno', name: 'Seregno', provincia: 'MB', tier: 2 },
  { slug: 'desio', name: 'Desio', provincia: 'MB', tier: 2 },
  { slug: 'lissone', name: 'Lissone', provincia: 'MB', tier: 2 },
  { slug: 'cesano-maderno', name: 'Cesano Maderno', provincia: 'MB', tier: 2 },
  { slug: 'limbiate', name: 'Limbiate', provincia: 'MB', tier: 2 },
  { slug: 'meda', name: 'Meda', provincia: 'MB', tier: 2 },
  { slug: 'giussano', name: 'Giussano', provincia: 'MB', tier: 2 },
  { slug: 'nova-milanese', name: 'Nova Milanese', provincia: 'MB', tier: 2 },
  { slug: 'muggio', name: 'Muggio', provincia: 'MB', tier: 2 },
];

export const cityServices: CityService[] = [
  {
    slug: 'pulizie-uffici',
    name: 'Pulizie Uffici',
    description: 'Servizio di pulizia professionale per uffici, studi professionali e spazi commerciali'
  },
  {
    slug: 'pulizie-condomini',
    name: 'Pulizie Condomini',
    description: 'Pulizia scale, androni e parti comuni condominiali'
  },
  {
    slug: 'sanificazione',
    name: 'Sanificazione',
    description: 'Sanificazione certificata con perossido di idrogeno atomizzato'
  },
  {
    slug: 'pulizie-post-cantiere',
    name: 'Pulizie Post Cantiere',
    description: 'Pulizia professionale dopo lavori di ristrutturazione e costruzione'
  },
  {
    slug: 'trattamento-pavimenti',
    name: 'Trattamento Pavimenti',
    description: 'Levigatura, lucidatura e trattamento di marmo, granito e parquet'
  },
  {
    slug: 'pulizia-vetri',
    name: 'Pulizia Vetri',
    description: 'Pulizia vetrate, vetrine e finestre per privati e aziende'
  },
  {
    slug: 'pulizie-negozi',
    name: 'Pulizie Negozi',
    description: 'Servizio di pulizia per negozi, showroom e punti vendita'
  },
  {
    slug: 'aree-verdi',
    name: 'Manutenzione Aree Verdi',
    description: 'Cura giardini, potature e manutenzione spazi esterni'
  },
];

export function getCityBySlug(slug: string): City | undefined {
  return cities.find(city => city.slug === slug);
}

export function getServiceBySlug(slug: string): CityService | undefined {
  return cityServices.find(service => service.slug === slug);
}

export function getAllCitySlugs(): string[] {
  return cities.map(city => city.slug);
}

export function getAllServiceSlugs(): string[] {
  return cityServices.map(service => service.slug);
}
