import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle, TreePine, Shield, Phone, Leaf } from "lucide-react";

export const metadata: Metadata = {
  title: "Manutenzione Aree Verdi e Giardini | BP Cleaning Varese",
  description: "Servizio di manutenzione giardini, potature, pulizia aree verdi e spazi esterni a Varese e Milano. Per privati, condomini e aziende.",
};

const serviceTypes = [
  {
    title: "Manutenzione Giardini",
    description: "Cura completa degli spazi verdi",
    includes: [
      "Taglio erba e prato",
      "Potatura siepi",
      "Concimazione",
      "Diserbo",
      "Irrigazione",
      "Cura aiuole",
    ],
  },
  {
    title: "Potature",
    description: "Potatura professionale alberi e arbusti",
    includes: [
      "Potatura alberi",
      "Potatura siepi",
      "Potatura arbusti",
      "Abbattimenti controllati",
      "Rimozione rami secchi",
      "Smaltimento ramaglie",
    ],
  },
  {
    title: "Pulizia Aree Esterne",
    description: "Manutenzione spazi esterni e pertinenze",
    includes: [
      "Pulizia cortili",
      "Raccolta foglie",
      "Pulizia vialetti",
      "Lavaggio pavimentazioni",
      "Rimozione erbacce",
      "Pulizia grondaie",
    ],
  },
  {
    title: "Servizi Condominiali",
    description: "Gestione verde per condomini",
    includes: [
      "Contratti annuali",
      "Manutenzione programmata",
      "Gestione aree comuni",
      "Pulizia parcheggi",
      "Trattamenti fitosanitari",
      "Pronto intervento",
    ],
  },
];

const faqs = [
  {
    q: "Offrite contratti di manutenzione annuali?",
    a: "Si, proponiamo contratti personalizzati con interventi programmati (settimanali, quindicinali o mensili) a tariffe agevolate rispetto agli interventi singoli.",
  },
  {
    q: "Smaltite voi i rifiuti verdi?",
    a: "Si, il servizio include la raccolta e lo smaltimento presso centri autorizzati di tutti i residui di potatura, sfalcio e pulizia.",
  },
  {
    q: "Lavorate anche per aziende?",
    a: "Certamente, gestiamo aree verdi aziendali, parcheggi, aree di rappresentanza e spazi esterni di qualsiasi dimensione.",
  },
  {
    q: "Intervenite anche in inverno?",
    a: "Si, offriamo anche servizi invernali come rimozione foglie, potature invernali e, su richiesta, sgombero neve per vialetti e accessi.",
  },
];

export default function AreeVerdiPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1e3a5f] to-[#0f172a] text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <nav className="text-sm text-gray-400 mb-4">
              <Link href="/servizi" className="hover:text-white">Servizi</Link>
              <span className="mx-2">/</span>
              <span className="text-white">Aree Verdi</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Manutenzione Aree Verdi</h1>
            <p className="text-xl text-gray-300 mb-6">
              Cura professionale di giardini, potature, pulizia spazi esterni.
              Servizio completo per privati, condomini e aziende.
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
                Chiama Ora
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8">
            {[
              { icon: TreePine, text: "Personale specializzato" },
              { icon: Shield, text: "Attrezzature professionali" },
              { icon: Leaf, text: "Smaltimento incluso" },
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

      {/* Service Types */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            I Nostri Servizi
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {serviceTypes.map((type) => (
              <div key={type.title} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{type.title}</h3>
                <p className="text-gray-600 mb-4">{type.description}</p>
                <h4 className="text-sm font-semibold text-gray-700 mb-3">Cosa include:</h4>
                <ul className="space-y-2">
                  {type.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-gray-600">
                      <CheckCircle className="w-4 h-4 text-[#0d9488] mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Domande Frequenti
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-[#0d9488] to-[#0f766e] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Richiedi un Preventivo Gratuito</h2>
          <p className="text-xl text-white/80 mb-8">
            Contattaci per un sopralluogo e un preventivo personalizzato per il tuo giardino.
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
