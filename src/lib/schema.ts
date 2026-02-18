export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "BP Cleaning SRL",
    "alternateName": "BP Cleaning",
    "url": "https://www.bpcleaning.it",
    "logo": "https://www.bpcleaning.it/drop.png",
    "telephone": "+39 346 748 3943",
    "email": "info@bpcleaning.it",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Via Campagna 80A",
      "addressLocality": "Induno Olona",
      "postalCode": "21056",
      "addressRegion": "VA",
      "addressCountry": "IT",
    },
    "areaServed": [
      { "@type": "State", "name": "Provincia di Varese" },
      { "@type": "State", "name": "Provincia di Como" },
      { "@type": "State", "name": "Provincia di Monza e Brianza" },
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+39 346 748 3943",
      "contactType": "customer service",
      "availableLanguage": "Italian",
    },
  };
}

export function generateArticleSchema({
  title,
  description,
  url,
  datePublished,
  dateModified,
}: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "url": url,
    "datePublished": datePublished,
    "dateModified": dateModified || datePublished,
    "author": {
      "@type": "Organization",
      "name": "BP Cleaning SRL",
      "url": "https://www.bpcleaning.it",
    },
    "publisher": {
      "@type": "Organization",
      "name": "BP Cleaning SRL",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.bpcleaning.it/drop.png",
      },
    },
  };
}

export function generateFAQSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a,
      },
    })),
  };
}
