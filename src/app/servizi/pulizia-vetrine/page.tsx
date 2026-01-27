import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle, Clock, Shield, Sparkles, Phone, Store, Building } from "lucide-react";

export const metadata: Metadata = {
  title: "Pulizia Vetrine e Vetrate | BP Cleaning Varese",
  description: "Servizio di pulizia vetrine, vetrate e finestre per negozi, uffici e privati a Varese e Milano. Attrezzature professionali, anche lavori in quota.",
};

const serviceTypes = [
  {
    title: "Vetrine Negozi",
    description: "Pulizia vetrine commerciali e showroom",
    includes: [
      "Pulizia vetri interni ed esterni",
      "Rimozione adesivi e residui",
      "Pulizia cornici e telai",
      "Trattamento anti-alone",
      "Pulizia insegne luminose",
      "Pulizia porte automatiche",
    ],
  },
  {
    title: "Vetrate Uffici",
    description: "Pulizia vetrate di edifici commerciali",
    includes: [
      "Pulizia vetrate panoramiche",
      "Lavaggio facciate continue",
      "Pulizia lucernari",
      "Lavaggio vetri interni",
      "Pulizia divisori in vetro",
      "Trattamento idrorepellente",
    ],
  },
  {
    title: "Finestre Privati",
    description: "Pulizia vetri per abitazioni",
    includes: [
      "Pulizia vetri interni/esterni",
      "Lavaggio infissi",
      "Pulizia persiane e tapparelle",
      "Pulizia zanzariere",
      "Rimozione calcare",
      "Pulizia davanzali",
    ],
  },
  {
    title: "Lavori in Quota",
    description: "Pulizia vetrate in altezza",
    includes: [
      "Utilizzo aste telescopiche",
      "Piattaforme aeree",
      "Lavori su corda (rope access)",
      "Pulizia grattacieli",
      "Lavaggio facciate vetrate",
      "Interventi su edifici storici",
    ],
  },
];

const benefits = [
  {
    icon: Sparkles,
    title: "Risultato Impeccabile",
    desc: "Vetri senza aloni e striature grazie a tecniche professionali",
  },
  {
    icon: Clock,
    title: "Interventi Rapidi",
    desc: "Puliamo le tue vetrine prima dell'apertura o dopo la chiusura",
  },
  {
    icon: Shield,
    title: "Sicurezza Garantita",
    desc: "Personale formato per lavori in quota con tutte le certificazioni",
  },
  {
    icon: Building,
    title: "Qualsiasi Altezza",
    desc: "Attrezzature per raggiungere anche le vetrate più alte",
  },
];

const faqs = [
  {
    q: "Pulite anche vetri molto alti?",
    a: "Sì, siamo attrezzati per lavori in quota con aste telescopiche fino a 15 metri e piattaforme aeree per altezze superiori. Per edifici molto alti utilizziamo tecniche rope access.",
  },
  {
    q: "Con che frequenza consigliate la pulizia delle vetrine?",
    a: "Per negozi in zone trafficate consigliamo pulizia settimanale o quindicinale. Per vetrate di uffici, mensile o bimestrale. La frequenza dipende dall'esposizione agli agenti atmosferici.",
  },
  {
    q: "Lavorate anche di domenica?",
    a: "Sì, operiamo 7 giorni su 7. Per i negozi possiamo intervenire di domenica o nelle prime ore del mattino per non disturbare l'attività commerciale.",
  },
  {
    q: "Che prodotti usate?",
    a: "Utilizziamo prodotti professionali specifici per vetri che non lasciano aloni. Su richiesta applichiamo trattamenti idrorepellenti che mantengono i vetri puliti più a lungo.",
  },
];

export default function PuliziaVetrinePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1e3a5f] to-[#0f172a] text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <nav className="text-sm text-gray-400 mb-4">
              <Link href="/servizi" className="hover:text-white">Servizi</Link>
              <span className="mx-2">/</span>
              <span className="text-white">Pulizia Vetrine</span>
            </nav>
            <div className="flex items-center gap-2 text-[#0d9488] mb-4">
              <Store className="w-6 h-6" />
              <span className="font-medium">Per Negozi e Aziende</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Pulizia Vetrine e Vetrate</h1>
            <p className="text-xl text-gray-300 mb-6">
              Servizio professionale di pulizia vetrine, vetrate e finestre per negozi, uffici e privati.
              Vetri impeccabili che valorizzano la tua attività e i tuoi ambienti.
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
              { icon: Clock, text: "Orari flessibili" },
              { icon: Shield, text: "Lavori in quota certificati" },
              { icon: Sparkles, text: "Zero aloni garantito" },
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

      {/* Benefits Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Perché Sceglierci
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div key={benefit.title} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center">
                  <div className="w-12 h-12 bg-[#0d9488]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-[#0d9488]" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service Types */}
      <section className="py-16 bg-gray-50">
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
          <h2 className="text-3xl font-bold mb-4">Vuoi Vetrine Sempre Splendenti?</h2>
          <p className="text-xl text-white/80 mb-8">
            Contattaci per un preventivo gratuito. Offriamo contratti di pulizia periodica personalizzati.
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
