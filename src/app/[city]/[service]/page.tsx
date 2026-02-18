import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle, Phone, MapPin, Clock, Shield, Leaf } from "lucide-react";
import { cities, cityServices, getCityBySlug, getServiceBySlug } from "@/lib/cities";
import Breadcrumb from "@/components/Breadcrumb";
import { generateFAQSchema } from "@/lib/schema";

interface PageProps {
  params: Promise<{ city: string; service: string }>;
}

export async function generateStaticParams() {
  const params: { city: string; service: string }[] = [];

  for (const city of cities) {
    for (const service of cityServices) {
      params.push({
        city: city.slug,
        service: service.slug,
      });
    }
  }

  return params;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { city: citySlug, service: serviceSlug } = await params;
  const city = getCityBySlug(citySlug);
  const service = getServiceBySlug(serviceSlug);

  if (!city || !service) {
    return {
      title: "Pagina non trovata",
    };
  }

  return {
    title: `${service.name} ${city.name} | BP Cleaning`,
    description: `${service.description} a ${city.name}. Risposta entro 2 ore. Personale qualificato e assicurato. BP Cleaning - La tua impresa di pulizie di fiducia.`,
    openGraph: {
      title: `${service.name} ${city.name} | BP Cleaning`,
      description: `${service.description} a ${city.name} e dintorni.`,
    },
  };
}

// Service-specific content
const serviceContent: Record<string, {
  heroText: string;
  features: string[];
  includes: string[];
  faqs: { q: string; a: string }[];
}> = {
  "pulizie-uffici": {
    heroText: "Pulizia professionale per uffici, studi professionali e spazi commerciali. Ambiente di lavoro pulito e igienizzato per una maggiore produttività.",
    features: ["Orari flessibili", "Personale dedicato", "Prodotti professionali"],
    includes: [
      "Pulizia e sanificazione scrivanie",
      "Aspirazione e lavaggio pavimenti",
      "Pulizia vetri interni",
      "Sanificazione bagni",
      "Svuotamento cestini",
      "Pulizia sale riunioni",
    ],
    faqs: [
      { q: "Con quale frequenza pulite gli uffici?", a: "Offriamo servizi giornalieri, settimanali o mensili in base alle vostre esigenze. La frequenza dipende dal numero di dipendenti e dal tipo di attività." },
      { q: "Lavorate fuori orario?", a: "Sì, operiamo anche in orari serali o notturni per non disturbare le attività lavorative." },
    ],
  },
  "pulizie-condomini": {
    heroText: "Servizio di pulizia scale, androni e parti comuni condominiali. Manteniamo pulito e accogliente il vostro condominio.",
    features: ["Contratti mensili", "Interventi regolari", "Preventivo gratuito"],
    includes: [
      "Pulizia scale e pianerottoli",
      "Lavaggio pavimenti androne",
      "Pulizia ascensore",
      "Spolveratura ringhiere",
      "Pulizia vetri ingresso",
      "Rimozione ragnatele",
    ],
    faqs: [
      { q: "Come richiedere un preventivo?", a: "Contattaci telefonicamente o via form. Valutiamo il numero di piani, la frequenza e i servizi richiesti per un preventivo personalizzato." },
      { q: "Firmate contratti con gli amministratori?", a: "Sì, lavoriamo regolarmente con amministratori condominiali offrendo contratti annuali con fatturazione mensile." },
    ],
  },
  "sanificazione": {
    heroText: "Sanificazione certificata con perossido di idrogeno atomizzato. Elimina virus, batteri e allergeni per ambienti sicuri e salubri.",
    features: ["Certificazione rilasciata", "Prodotti certificati", "Intervento rapido"],
    includes: [
      "Sanificazione ambienti completi",
      "Trattamento superfici",
      "Eliminazione virus e batteri",
      "Abbattimento allergeni",
      "Rilascio certificazione",
      "Trattamento condotti aria",
    ],
    faqs: [
      { q: "Quanto dura una sanificazione?", a: "Il tempo dipende dalla metratura. Per un ufficio medio (100mq) circa 1-2 ore. L'ambiente è agibile dopo 30 minuti." },
      { q: "Rilasciate certificazione?", a: "Sì, al termine dell'intervento rilasciamo certificazione di avvenuta sanificazione valida per normative sanitarie." },
    ],
  },
  "pulizie-post-cantiere": {
    heroText: "Pulizia professionale dopo lavori di ristrutturazione, costruzione o interventi edili. Rimuoviamo polvere, residui e materiali di scarto.",
    features: ["Attrezzature professionali", "Smaltimento rifiuti", "Risultato garantito"],
    includes: [
      "Rimozione polvere edile",
      "Pulizia residui cemento/stucco",
      "Rimozione adesivi e vernice",
      "Lavaggio vetri e infissi",
      "Sgrassatura pavimenti",
      "Pulizia sanitari e rubinetteria",
    ],
    faqs: [
      { q: "Quando posso prenotare?", a: "Consigliamo di contattarci qualche giorno prima della fine lavori per programmare l'intervento al momento giusto." },
      { q: "Smaltite anche i rifiuti?", a: "Sì, possiamo occuparci dello smaltimento dei rifiuti edili secondo normativa." },
    ],
  },
  "trattamento-pavimenti": {
    heroText: "Pulizia, lucidatura e trattamento professionale di pavimenti in cotto, pietra, gres e ceramica. Ridiamo splendore ai vostri pavimenti.",
    features: ["Macchinari professionali", "Trattamenti specifici", "Risultato duraturo"],
    includes: [
      "Pulizia e lucidatura cotto",
      "Lucidatura a specchio",
      "Cristallizzazione",
      "Trattamento cotto",
      "Trattamento gres e ceramica",
      "Applicazione protettivi",
    ],
    faqs: [
      { q: "Ogni quanto va rifatto il trattamento?", a: "Dipende dall'usura. Per ambienti domestici ogni 5-10 anni, per commerciali ogni 2-5 anni." },
      { q: "Si può camminare subito dopo?", a: "Per alcuni trattamenti sì, per altri (come la lucidatura a specchio) consigliamo di attendere 24 ore." },
    ],
  },
  "pulizia-vetri": {
    heroText: "Pulizia professionale di vetrate, vetrine commerciali e finestre per privati e aziende. Vetri impeccabili che valorizzano i vostri ambienti.",
    features: ["Attrezzature specifiche", "Lavori in quota", "Pulizia periodica"],
    includes: [
      "Pulizia vetri interni/esterni",
      "Pulizia vetrine negozi",
      "Lavaggio infissi",
      "Pulizia persiane",
      "Rimozione calcare",
      "Trattamento anti-alone",
    ],
    faqs: [
      { q: "Pulite anche vetri in altezza?", a: "Sì, siamo attrezzati per lavori in quota con aste telescopiche e piattaforme aeree." },
      { q: "Con che frequenza consigliate la pulizia?", a: "Per negozi consigliamo settimanale o quindicinale. Per abitazioni, mensile o stagionale." },
    ],
  },
  "pulizie-negozi": {
    heroText: "Servizio di pulizia professionale per negozi, showroom e punti vendita. Un ambiente pulito attrae più clienti.",
    features: ["Orari flessibili", "Pulizia vetrine", "Contratti personalizzati"],
    includes: [
      "Pulizia pavimenti e superfici",
      "Pulizia vetrine",
      "Spolveratura espositori",
      "Sanificazione camerini",
      "Pulizia bagni clienti",
      "Svuotamento cestini",
    ],
    faqs: [
      { q: "Pulite prima dell'apertura?", a: "Sì, operiamo anche nelle prime ore del mattino o dopo la chiusura per non disturbare l'attività." },
      { q: "Offrite contratti continuativi?", a: "Sì, offriamo contratti settimanali, quindicinali o mensili personalizzati." },
    ],
  },
  "aree-verdi": {
    heroText: "Manutenzione professionale di giardini, aree verdi e spazi esterni. Cura del verde per privati, condomini e aziende.",
    features: ["Attrezzature professionali", "Personale specializzato", "Interventi stagionali"],
    includes: [
      "Taglio prato",
      "Potatura siepi e piante",
      "Pulizia foglie",
      "Diserbo",
      "Concimazione",
      "Irrigazione",
    ],
    faqs: [
      { q: "Fate anche piccoli giardini?", a: "Sì, ci occupiamo di giardini di qualsiasi dimensione, dai piccoli cortili ai grandi parchi." },
      { q: "Offrite contratti annuali?", a: "Sì, offriamo contratti di manutenzione annuale con interventi programmati stagionali." },
    ],
  },
  "lavaggio-facciate": {
    heroText: "Lavaggio facciate con idropulitrice professionale ad alta pressione. Rimuoviamo smog, muschio, alghe e depositi atmosferici da condomini, ville e edifici commerciali.",
    features: ["Idropulitrice professionale", "Pressione regolabile", "Trattamento protettivo"],
    includes: [
      "Rimozione smog e depositi atmosferici",
      "Eliminazione muschio, alghe e licheni",
      "Pulizia balconi e cornicioni",
      "Lavaggio grondaie e pluviali",
      "Trattamento anti-muffa",
      "Trattamento idrorepellente opzionale",
    ],
    faqs: [
      { q: "Ogni quanto va lavata la facciata?", a: "Consigliamo un lavaggio ogni 3-5 anni, a seconda dell'esposizione agli agenti atmosferici e dell'inquinamento della zona." },
      { q: "Servono ponteggi per il lavaggio?", a: "Per facciate fino a 3-4 piani utilizziamo lance telescopiche. Per edifici più alti, piattaforme aeree o ponteggi nel rispetto delle normative di sicurezza." },
    ],
  },
  "lavaggio-pavimenti-esterni": {
    heroText: "Pulizia professionale di pavimenti esterni con idropulitrice ad alta pressione. Porfido, autobloccanti, cemento e pietra: restituiamo l'aspetto originale a cortili, vialetti e piazzali.",
    features: ["Pressione fino a 250 bar", "Ogni tipo di superficie", "Trattamento anti-muschio"],
    includes: [
      "Lavaggio porfido e cubetti",
      "Pulizia autobloccanti e betonelle",
      "Sgrassatura cemento e calcestruzzo",
      "Rimozione muschio ed erbacce dalle fughe",
      "Trattamento anti-muschio preventivo",
      "Applicazione idrorepellente opzionale",
    ],
    faqs: [
      { q: "Il lavaggio rimuove il muschio tra le fughe?", a: "Sì, l'idropulitrice ad alta pressione è particolarmente efficace nel rimuovere muschio ed erbacce dalle fughe. Possiamo anche applicare un trattamento preventivo." },
      { q: "Ogni quanto va lavato un pavimento esterno?", a: "Consigliamo almeno un lavaggio annuale in primavera. Per aree molto trafficate, un intervento semestrale mantiene le superfici in condizioni ottimali." },
    ],
  },
};

export default async function CityServicePage({ params }: PageProps) {
  const { city: citySlug, service: serviceSlug } = await params;
  const city = getCityBySlug(citySlug);
  const service = getServiceBySlug(serviceSlug);

  if (!city || !service) {
    notFound();
  }

  const content = serviceContent[serviceSlug] || {
    heroText: service.description,
    features: ["Personale qualificato", "Preventivo gratuito", "Massima affidabilità"],
    includes: ["Servizio completo", "Attrezzature professionali", "Prodotti certificati"],
    faqs: [],
  };

  const provinciaName = city.provincia === 'VA' ? 'Varese' : city.provincia === 'CO' ? 'Como' : 'Monza e Brianza';

  // JSON-LD Schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `${service.name} ${city.name}`,
    "description": `${service.description} a ${city.name}`,
    "provider": {
      "@type": "LocalBusiness",
      "name": "BP Cleaning",
      "telephone": "+39 346 748 3943",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Via Campagna 80A",
        "addressLocality": "Induno Olona",
        "postalCode": "21056",
        "addressCountry": "IT"
      }
    },
    "areaServed": {
      "@type": "City",
      "name": city.name
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {content.faqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema(content.faqs)) }}
        />
      )}

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1e3a5f] to-[#0f172a] text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <Breadcrumb items={[
              { label: "Home", href: "/" },
              { label: city.name, href: `/${city.slug}` },
              { label: service.name },
            ]} />
            <div className="flex items-center gap-2 text-[#0d9488] mb-4">
              <MapPin className="w-5 h-5" />
              <span className="font-medium">{city.name}, Provincia di {provinciaName}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {service.name} a {city.name}
            </h1>
            <p className="text-xl text-gray-300 mb-6">
              {content.heroText}
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
                className="sm:hidden inline-flex items-center gap-2 border border-white/30 hover:bg-white/10 text-white px-6 py-3 rounded-lg font-semibold transition"
              >
                <Phone className="w-5 h-5" />
                346 748 3943
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Bar */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8">
            {[
              { icon: Clock, text: content.features[0] || "Orari flessibili" },
              { icon: Shield, text: content.features[1] || "Personale assicurato" },
              { icon: Leaf, text: content.features[2] || "Prodotti BIO" },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.text} className="flex items-center gap-2">
                  <Icon className="w-5 h-5 text-[#0d9488]" />
                  <span className="font-medium text-gray-700">{item.text}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Cosa Include il Servizio
              </h2>
              <p className="text-gray-600 mb-8">
                Il nostro servizio di {service.name.toLowerCase()} a {city.name} comprende:
              </p>
              <ul className="space-y-4">
                {content.includes.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#0d9488] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Perché Scegliere BP Cleaning
              </h3>
              <ul className="space-y-4">
                {[
                  "Oltre 18 anni di esperienza",
                  "Personale qualificato e assicurato",
                  "Risposta entro 2 ore",
                  "Prodotti professionali certificati",
                  "Assistenza clienti dedicata",
                  "Preventivo gratuito e senza impegno",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#0d9488] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      {content.faqs.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Domande Frequenti
            </h2>
            <div className="space-y-6">
              {content.faqs.map((faq, i) => (
                <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
                  <p className="text-gray-600">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Other Services */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Altri Servizi a {city.name}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {cityServices
              .filter(s => s.slug !== serviceSlug)
              .map((s) => (
                <Link
                  key={s.slug}
                  href={`/${city.slug}/${s.slug}`}
                  className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 hover:border-[#0d9488]/30 hover:shadow-md transition group"
                >
                  <h3 className="font-semibold text-gray-900 group-hover:text-[#0d9488] transition">
                    {s.name}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">{s.description}</p>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-[#0d9488] to-[#0f766e] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Richiedi un Preventivo per {service.name} a {city.name}
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Contattaci oggi per un preventivo gratuito e senza impegno. Risposta garantita entro 2 ore.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/preventivo"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#0d9488] px-8 py-4 rounded-lg font-semibold transition hover:bg-gray-100"
            >
              Richiedi Preventivo
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:+393467483943"
              className="sm:hidden inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:bg-white/10 text-white px-8 py-4 rounded-lg font-semibold transition"
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
