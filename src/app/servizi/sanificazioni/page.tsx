import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle, Shield, Award, Phone, Wind } from "lucide-react";

export const metadata: Metadata = {
  title: "Sanificazioni Certificate | BP Cleaning Varese",
  description: "Servizio di sanificazione professionale con perossido di idrogeno atomizzato. Certificazioni per ambienti sanitari, uffici e attività commerciali a Varese e Milano.",
};

const serviceTypes = [
  {
    title: "Sanificazione Ambienti",
    description: "Trattamento completo con perossido di idrogeno",
    includes: [
      "Nebulizzazione perossido di idrogeno",
      "Trattamento superfici e aria",
      "Eliminazione batteri e virus",
      "Certificato di sanificazione",
      "Prodotti atossici e sicuri",
      "Nessun residuo chimico",
    ],
  },
  {
    title: "Sanificazione Studi Medici",
    description: "Protocolli specifici per ambienti sanitari",
    includes: [
      "Sanificazione sale visite",
      "Trattamento sale attesa",
      "Disinfezione attrezzature",
      "Interventi programmati",
      "Documentazione completa",
    ],
  },
  {
    title: "Sanificazione Uffici",
    description: "Per ambienti di lavoro sicuri",
    includes: [
      "Sanificazione open space",
      "Trattamento sale riunioni",
      "Disinfezione postazioni",
      "Sanificazione impianti HVAC",
      "Contratti periodici",
    ],
  },
];

const faqs = [
  {
    q: "Che prodotti utilizzate per la sanificazione?",
    a: "Utilizziamo perossido di idrogeno atomizzato al 6%, un disinfettante efficace contro virus, batteri e funghi, completamente atossico e senza residui.",
  },
  {
    q: "Rilasciate certificazione?",
    a: "Sì, al termine di ogni intervento rilasciamo un certificato di sanificazione valido ai fini legali e assicurativi.",
  },
  {
    q: "Quanto dura l'effetto della sanificazione?",
    a: "L'efficacia dipende dall'utilizzo dell'ambiente. Per uffici consigliamo interventi settimanali o bisettimanali, per studi medici anche giornalieri.",
  },
  {
    q: "È sicura per persone e animali?",
    a: "Assolutamente sì. Il perossido di idrogeno si decompone in acqua e ossigeno, senza lasciare residui tossici. L'ambiente è agibile dopo pochi minuti.",
  },
];

export default function SanificazioniPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1e3a5f] to-[#0f172a] text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <nav className="text-sm text-gray-400 mb-4">
              <Link href="/servizi" className="hover:text-white">Servizi</Link>
              <span className="mx-2">/</span>
              <span className="text-white">Sanificazioni</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Sanificazioni Certificate</h1>
            <p className="text-xl text-gray-300 mb-6">
              Sanificazione professionale con perossido di idrogeno atomizzato.
              Efficace contro virus, batteri e funghi. Certificazione inclusa.
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
              { icon: Award, text: "Certificazione rilasciata" },
              { icon: Shield, text: "Prodotti atossici" },
              { icon: Wind, text: "Perossido di idrogeno" },
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
            Tipologie di Sanificazione
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
            Contattaci per una sanificazione certificata del tuo ambiente.
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
