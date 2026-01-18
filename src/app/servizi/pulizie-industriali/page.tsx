import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle, Clock, Shield, Building2, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Pulizie Industriali - Uffici e Aziende | BP Cleaning Varese",
  description: "Servizio di pulizie industriali per uffici, aziende, banche e spazi commerciali a Varese e Milano. Contratti personalizzati e servizio continuativo.",
};

const serviceTypes = [
  {
    title: "Uffici e Studi Professionali",
    description: "Pulizia quotidiana o periodica per ambienti di lavoro",
    includes: [
      "Pulizia scrivanie e postazioni",
      "Aspirazione e lavaggio pavimenti",
      "Pulizia bagni e aree comuni",
      "Svuotamento cestini",
      "Pulizia vetrate interne",
      "Sanificazione tastiere e telefoni",
    ],
  },
  {
    title: "Aziende e Capannoni",
    description: "Servizi per spazi industriali e produttivi",
    includes: [
      "Pulizia aree produttive",
      "Lavaggio pavimenti industriali",
      "Pulizia magazzini",
      "Sanificazione spogliatoi",
      "Pulizia mense aziendali",
      "Gestione rifiuti speciali",
    ],
  },
  {
    title: "Banche e Istituti",
    description: "Servizi per ambienti ad alta sicurezza",
    includes: [
      "Pulizia sportelli e uffici",
      "Sanificazione aree pubbliche",
      "Pulizia caveau (su richiesta)",
      "Interventi notturni",
      "Personale con certificazioni",
      "Massima riservatezza",
    ],
  },
  {
    title: "Negozi e Showroom",
    description: "Pulizia per spazi commerciali e vendita",
    includes: [
      "Pulizia vetrine",
      "Lucidatura pavimenti",
      "Pulizia camerini",
      "Spolveratura espositori",
      "Sanificazione casse",
      "Interventi pre/post apertura",
    ],
  },
];

const faqs = [
  {
    q: "Offrite contratti continuativi?",
    a: "Si, offriamo contratti settimanali, bisettimanali o mensili con tariffe agevolate. Il contratto viene personalizzato in base alle vostre esigenze.",
  },
  {
    q: "Lavorate fuori orario ufficio?",
    a: "Assolutamente si. La maggior parte dei nostri clienti business preferisce interventi serali, notturni o nel weekend per non interferire con le attivita lavorative.",
  },
  {
    q: "Il personale e formato e assicurato?",
    a: "Tutto il nostro personale e regolarmente assunto, formato secondo D.L. 81/2008 e coperto da assicurazione RC fino a 2 milioni di euro.",
  },
  {
    q: "Possiamo richiedere sempre lo stesso operatore?",
    a: "Si, per i contratti continuativi garantiamo la stessa squadra o operatore, per una migliore conoscenza degli ambienti e delle vostre preferenze.",
  },
];

export default function PulizieIndustrialiPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1e3a5f] to-[#0f172a] text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <nav className="text-sm text-gray-400 mb-4">
              <Link href="/servizi" className="hover:text-white">Servizi</Link>
              <span className="mx-2">/</span>
              <span className="text-white">Pulizie Industriali</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Pulizie Industriali</h1>
            <p className="text-xl text-gray-300 mb-6">
              Servizi professionali per uffici, aziende, banche e spazi commerciali.
              Contratti personalizzati e massima affidabilita.
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
              { icon: Clock, text: "Interventi H24" },
              { icon: Shield, text: "Assicurazione 2M" },
              { icon: Building2, text: "Contratti flessibili" },
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
            Settori Serviti
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
            Contattaci per un sopralluogo gratuito e un preventivo personalizzato.
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
