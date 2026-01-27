import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle, Phone, MapPin, Building2, Home, Sparkles } from "lucide-react";
import { cities, cityServices, getCityBySlug } from "@/lib/cities";

interface PageProps {
  params: Promise<{ city: string }>;
}

export async function generateStaticParams() {
  return cities.map((city) => ({
    city: city.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { city: citySlug } = await params;
  const city = getCityBySlug(citySlug);

  if (!city) {
    return {
      title: "Pagina non trovata",
    };
  }

  return {
    title: `Impresa di Pulizie ${city.name} | BP Cleaning - Pulizie Professionali`,
    description: `Impresa di pulizie professionali a ${city.name}. Pulizie civili, industriali, sanificazioni, disinfestazioni. Preventivo gratuito in 2 ore. Servizio rapido e affidabile.`,
    openGraph: {
      title: `Impresa di Pulizie ${city.name} | BP Cleaning`,
      description: `Servizi di pulizia professionale a ${city.name} e dintorni. Oltre 18 anni di esperienza.`,
    },
  };
}

const mainServices = [
  {
    slug: "pulizie-uffici",
    title: "Pulizie Uffici",
    description: "Pulizia professionale per uffici e studi professionali",
    icon: Building2,
  },
  {
    slug: "pulizie-condomini",
    title: "Pulizie Condomini",
    description: "Scale, androni e parti comuni sempre pulite",
    icon: Home,
  },
  {
    slug: "sanificazione",
    title: "Sanificazione",
    description: "Sanificazione certificata con perossido di idrogeno",
    icon: Sparkles,
  },
  {
    slug: "pulizie-post-cantiere",
    title: "Pulizie Post Cantiere",
    description: "Pulizia dopo ristrutturazioni e lavori edili",
    icon: Building2,
  },
  {
    slug: "trattamento-pavimenti",
    title: "Trattamento Pavimenti",
    description: "Levigatura e lucidatura marmo, granito, parquet",
    icon: Sparkles,
  },
  {
    slug: "pulizia-vetri",
    title: "Pulizia Vetri",
    description: "Vetrate, vetrine e finestre per privati e aziende",
    icon: Sparkles,
  },
];

const benefits = [
  "Preventivo gratuito entro 2 ore",
  "Personale qualificato e assicurato",
  "Prodotti professionali e BIO",
  "Orari flessibili, anche weekend",
  "Contratti personalizzati",
  "Assistenza dedicata",
];

export default async function CityPage({ params }: PageProps) {
  const { city: citySlug } = await params;
  const city = getCityBySlug(citySlug);

  if (!city) {
    notFound();
  }

  const provinciaName = city.provincia === 'VA' ? 'Varese' : city.provincia === 'CO' ? 'Como' : 'Monza e Brianza';

  // JSON-LD Schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `BP Cleaning - Pulizie ${city.name}`,
    "description": `Impresa di pulizie professionali a ${city.name}. Pulizie civili, industriali, sanificazioni.`,
    "url": `https://www.bpcleaning.it/${city.slug}`,
    "telephone": "+39 346 748 3943",
    "email": "info@bpcleaning.it",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Via Campagna 21",
      "addressLocality": "Induno Olona",
      "postalCode": "21056",
      "addressCountry": "IT"
    },
    "areaServed": {
      "@type": "City",
      "name": city.name
    },
    "priceRange": "$$",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "09:00",
        "closes": "13:00"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1e3a5f] to-[#0f172a] text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <nav className="text-sm text-gray-400 mb-4">
              <Link href="/" className="hover:text-white">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-white">{city.name}</span>
            </nav>
            <div className="flex items-center gap-2 text-[#0d9488] mb-4">
              <MapPin className="w-5 h-5" />
              <span className="font-medium">Provincia di {provinciaName}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Impresa di Pulizie a {city.name}
            </h1>
            <p className="text-xl text-gray-300 mb-6">
              BP Cleaning offre servizi professionali di pulizia a {city.name} e comuni limitrofi.
              Pulizie civili, industriali, sanificazioni e disinfestazioni con personale qualificato.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/preventivo"
                className="inline-flex items-center gap-2 bg-[#f97316] hover:bg-[#ea580c] text-white px-6 py-3 rounded-lg font-semibold transition"
              >
                Richiedi Preventivo
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:+393467483943"
                className="inline-flex items-center gap-2 border border-white/30 hover:bg-white/10 text-white px-6 py-3 rounded-lg font-semibold transition"
              >
                <Phone className="w-5 h-5" />
                346 748 3943
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">
            I Nostri Servizi a {city.name}
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Offriamo una gamma completa di servizi di pulizia professionale per privati, aziende e condomini a {city.name}.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mainServices.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.slug}
                  href={`/${city.slug}/${service.slug}`}
                  className="group bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-[#0d9488]/30 transition"
                >
                  <div className="w-12 h-12 bg-[#0d9488]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#0d9488]/20 transition">
                    <Icon className="w-6 h-6 text-[#0d9488]" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#0d9488] transition">
                    {service.title} {city.name}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                  <div className="mt-4 text-[#0d9488] font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                    Scopri di piu
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Perche Scegliere BP Cleaning a {city.name}
              </h2>
              <p className="text-gray-600 mb-8">
                Siamo un&apos;impresa di pulizie con oltre 18 anni di esperienza nel settore.
                Operiamo a {city.name} e in tutta la provincia di {provinciaName} con professionalita e puntualita.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#0d9488] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Zone Servite</h3>
              <p className="text-gray-600 mb-4">
                Oltre a {city.name}, operiamo in tutti i comuni limitrofi della provincia di {provinciaName}:
              </p>
              <div className="flex flex-wrap gap-2">
                {cities
                  .filter(c => c.provincia === city.provincia && c.slug !== city.slug)
                  .slice(0, 8)
                  .map(c => (
                    <Link
                      key={c.slug}
                      href={`/${c.slug}`}
                      className="text-sm bg-gray-100 hover:bg-[#0d9488]/10 hover:text-[#0d9488] px-3 py-1 rounded-full transition"
                    >
                      {c.name}
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Services */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Tutti i Servizi Disponibili a {city.name}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {cityServices.map((service) => (
              <Link
                key={service.slug}
                href={`/${city.slug}/${service.slug}`}
                className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 hover:border-[#0d9488]/30 hover:shadow-md transition group"
              >
                <h3 className="font-semibold text-gray-900 group-hover:text-[#0d9488] transition">
                  {service.name}
                </h3>
                <p className="text-sm text-gray-500 mt-1">{service.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-[#0d9488] to-[#0f766e] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Richiedi un Preventivo Gratuito a {city.name}
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Contattaci per un preventivo personalizzato. Sopralluogo gratuito e risposta entro 2 ore.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/preventivo"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#0d9488] px-8 py-4 rounded-lg font-semibold transition hover:bg-gray-100"
            >
              Calcola Preventivo Online
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:+393467483943"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:bg-white/10 text-white px-8 py-4 rounded-lg font-semibold transition"
            >
              <Phone className="w-5 h-5" />
              346 748 3943
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
