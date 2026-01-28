import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle, Clock, Shield, Leaf, Phone, Hammer, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Pulizie Post Cantiere - Fine Lavori | BP Cleaning Varese",
  description: "Servizio di pulizie post cantiere e fine ristrutturazione a Varese e Milano. Rimozione polvere edile, residui di vernice e materiali. Preventivo gratuito.",
};

const serviceTypes = [
  {
    title: "Post Ristrutturazione",
    description: "Pulizia dopo lavori di ristrutturazione",
    includes: [
      "Rimozione polvere edile da tutte le superfici",
      "Pulizia residui di stucco e cemento",
      "Rimozione schizzi di vernice",
      "Lavaggio vetri e infissi",
      "Sgrassatura pavimenti",
      "Pulizia sanitari e rubinetteria",
    ],
  },
  {
    title: "Post Costruzione",
    description: "Pulizia di nuove costruzioni",
    includes: [
      "Rimozione materiali di scarto",
      "Pulizia approfondita tutti gli ambienti",
      "Rimozione etichette e adesivi",
      "Lavaggio vetri interni/esterni",
      "Trattamento pavimenti nuovi",
      "Sanificazione finale",
    ],
  },
  {
    title: "Post Lavori Edili",
    description: "Pulizia dopo interventi murari",
    includes: [
      "Aspirazione polvere fine",
      "Pulizia residui malta",
      "Sgrassatura superfici",
      "Pulizia impianti elettrici",
      "Lavaggio radiatori",
      "Pulizia cassonetti tapparelle",
    ],
  },
  {
    title: "Post Imbiancatura",
    description: "Pulizia dopo lavori di pittura",
    includes: [
      "Rimozione teli protettivi",
      "Pulizia schizzi di vernice",
      "Lavaggio pavimenti",
      "Pulizia battiscopa",
      "Lavaggio vetri",
      "Rimozione nastro adesivo",
    ],
  },
];

const faqs = [
  {
    q: "Quando posso prenotare la pulizia post cantiere?",
    a: "Consigliamo di contattarci qualche giorno prima della fine dei lavori per programmare l'intervento al momento opportuno. Possiamo intervenire anche con urgenza.",
  },
  {
    q: "Quanto tempo richiede la pulizia post cantiere?",
    a: "Dipende dalla metratura e dal tipo di lavori effettuati. Per un appartamento di 100mq dopo ristrutturazione, prevediamo circa 6-8 ore di lavoro.",
  },
  {
    q: "Smaltite anche i rifiuti edili?",
    a: "Sì, possiamo occuparci dello smaltimento dei rifiuti edili secondo la normativa vigente. Contattaci per maggiori informazioni.",
  },
  {
    q: "Usate attrezzature professionali?",
    a: "Sì, utilizziamo aspiratori industriali con filtri HEPA, idropulitrici, levigatrici e prodotti specifici per la rimozione di residui edili.",
  },
];

export default function PuliziePostCantierePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1e3a5f] to-[#0f172a] text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <nav className="text-sm text-gray-400 mb-4">
              <Link href="/servizi" className="hover:text-white">Servizi</Link>
              <span className="mx-2">/</span>
              <span className="text-white">Pulizie Post Cantiere</span>
            </nav>
            <div className="flex items-center gap-2 text-[#f97316] mb-4">
              <Hammer className="w-6 h-6" />
              <span className="font-medium">Servizio Specializzato</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Pulizie Post Cantiere</h1>
            <p className="text-xl text-gray-300 mb-6">
              Pulizia professionale dopo lavori di ristrutturazione, costruzione e interventi edili.
              Rimuoviamo polvere, residui e materiali per restituirti un ambiente pulito e abitabile.
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
              { icon: Clock, text: "Intervento rapido" },
              { icon: Shield, text: "Attrezzature professionali" },
              { icon: Sparkles, text: "Risultato garantito" },
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
            Tipologie di Intervento
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

      {/* Process */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Come Lavoriamo
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Sopralluogo", desc: "Valutiamo l'entità dei lavori e le esigenze specifiche" },
              { step: "2", title: "Preventivo", desc: "Rispondiamo entro 2 ore" },
              { step: "3", title: "Intervento", desc: "Il nostro team esegue la pulizia completa" },
              { step: "4", title: "Verifica", desc: "Controlliamo insieme il risultato finale" },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-12 h-12 bg-[#0d9488] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
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
          <h2 className="text-3xl font-bold mb-4">Hai Appena Finito i Lavori?</h2>
          <p className="text-xl text-white/80 mb-8">
            Contattaci per un preventivo gratuito. Interveniamo rapidamente per restituirti un ambiente pulito e vivibile.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/preventivo"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#0d9488] px-8 py-4 rounded-lg font-semibold transition hover:bg-gray-100"
            >
              Richiedi Preventivo Gratuito
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
