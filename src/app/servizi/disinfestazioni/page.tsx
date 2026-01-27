import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle, Shield, Bug, Phone, AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: "Disinfestazioni e Derattizzazioni | BP Cleaning Varese",
  description: "Servizio di disinfestazione professionale contro insetti, roditori e volatili a Varese e Milano. Interventi rapidi e soluzioni durature.",
};

const serviceTypes = [
  {
    title: "Disinfestazione Insetti",
    description: "Eliminazione di insetti striscianti e volanti",
    includes: [
      "Blatte e scarafaggi",
      "Formiche",
      "Zanzare e mosche",
      "Cimici dei letti",
      "Vespe e calabroni",
      "Tarme e tarli",
    ],
  },
  {
    title: "Derattizzazione",
    description: "Eliminazione e prevenzione roditori",
    includes: [
      "Topi e ratti",
      "Analisi punti di accesso",
      "Posizionamento esche",
      "Monitoraggio continuo",
      "Sigillatura accessi",
      "Contratti di prevenzione",
    ],
  },
  {
    title: "Allontanamento Volatili",
    description: "Soluzioni per piccioni e altri uccelli",
    includes: [
      "Piccioni e colombi",
      "Gabbiani",
      "Installazione dissuasori",
      "Reti anti-intrusione",
      "Sistemi a ultrasuoni",
      "Pulizia guano",
    ],
  },
  {
    title: "Trattamenti Preventivi",
    description: "Prevenzione per ambienti a rischio",
    includes: [
      "Analisi ambientale",
      "Piano di prevenzione",
      "Monitoraggio periodico",
      "Interventi programmati",
      "Report e documentazione",
      "Consulenza HACCP",
    ],
  },
];

const faqs = [
  {
    q: "I trattamenti sono sicuri per persone e animali domestici?",
    a: "Utilizziamo prodotti professionali a basso impatto ambientale. Vi indicheremo le precauzioni da seguire, generalmente bastano poche ore prima di riutilizzare gli ambienti.",
  },
  {
    q: "Quanto tempo ci vuole per eliminare il problema?",
    a: "Dipende dal tipo di infestazione. Per insetti solitamente bastano 1-2 interventi, per roditori consigliamo un ciclo di monitoraggio di almeno 30 giorni.",
  },
  {
    q: "Offrite servizi per aziende alimentari?",
    a: "Sì, siamo specializzati in interventi per attività soggette a normativa HACCP. Rilasciamo tutta la documentazione necessaria per le ispezioni.",
  },
  {
    q: "Intervenite anche in emergenza?",
    a: "Sì, per infestazioni gravi offriamo interventi rapidi entro 24-48 ore. Contattaci telefonicamente per emergenze.",
  },
];

export default function DisinfestazioniPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1e3a5f] to-[#0f172a] text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <nav className="text-sm text-gray-400 mb-4">
              <Link href="/servizi" className="hover:text-white">Servizi</Link>
              <span className="mx-2">/</span>
              <span className="text-white">Disinfestazioni</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Disinfestazioni e Derattizzazioni</h1>
            <p className="text-xl text-gray-300 mb-6">
              Eliminazione professionale di insetti, roditori e volatili.
              Interventi rapidi e soluzioni durature per privati e aziende.
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
              { icon: AlertTriangle, text: "Interventi urgenti 24-48h" },
              { icon: Shield, text: "Prodotti sicuri" },
              { icon: Bug, text: "Garanzia risultato" },
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
                <h4 className="text-sm font-semibold text-gray-700 mb-3">Cosa trattiamo:</h4>
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
          <h2 className="text-3xl font-bold mb-4">Hai un Problema di Infestazione?</h2>
          <p className="text-xl text-white/80 mb-8">
            Contattaci per un sopralluogo gratuito e un preventivo senza impegno.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/preventivo"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#0d9488] px-8 py-4 rounded-lg font-semibold transition hover:bg-gray-100"
            >
              Richiedi Sopralluogo
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
