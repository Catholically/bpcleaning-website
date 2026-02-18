import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle, Clock, Shield, Droplets, Phone, Building2, Sparkles } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import { generateFAQSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Lavaggio Facciate Varese | BP Cleaning",
  description:
    "Lavaggio facciate con idropulitrice professionale ad alta pressione a Varese, Gallarate, Busto Arsizio e Como. Pulizia facciate condomini, ville e edifici commerciali.",
};

const serviceTypes = [
  {
    title: "Facciate Condominiali",
    description:
      "Pulizia completa delle facciate di condomini e palazzi residenziali con idropulitrice ad alta pressione",
    includes: [
      "Rimozione smog e inquinamento atmosferico",
      "Eliminazione muschio, alghe e licheni",
      "Pulizia balconi e cornicioni",
      "Trattamento anti-muffa",
      "Lavaggio grondaie e pluviali",
    ],
  },
  {
    title: "Facciate Commerciali",
    description:
      "Lavaggio professionale per negozi, uffici e strutture commerciali: immagine impeccabile per la tua attività",
    includes: [
      "Pulizia insegne e vetrine esterne",
      "Lavaggio rivestimenti e pannelli",
      "Rimozione macchie e depositi",
      "Pulizia pensiline e tettoie",
      "Interventi programmati periodici",
    ],
  },
  {
    title: "Facciate in Pietra e Mattoni",
    description:
      "Trattamento specializzato per facciate in pietra naturale, mattoni a vista e materiali delicati",
    includes: [
      "Regolazione pressione per ogni materiale",
      "Pulizia pietra naturale e arenaria",
      "Lavaggio mattoni a vista",
      "Rimozione efflorescenze saline",
      "Trattamento protettivo finale",
    ],
  },
  {
    title: "Facciate Industriali",
    description:
      "Lavaggio capannoni, stabilimenti e strutture industriali con attrezzature professionali",
    includes: [
      "Pulizia pannelli sandwich e lamiera",
      "Lavaggio facciate in cemento",
      "Rimozione residui industriali",
      "Pulizia portoni e accessi",
      "Interventi su grandi superfici",
    ],
  },
];

const faqs = [
  {
    q: "Ogni quanto va lavata la facciata di un condominio?",
    a: "Consigliamo un lavaggio ogni 3-5 anni, a seconda dell'esposizione agli agenti atmosferici e dell'inquinamento della zona. Nelle aree più esposte di Varese e provincia, interventi più frequenti mantengono l'edificio in ottime condizioni.",
  },
  {
    q: "L'idropulitrice può danneggiare la facciata?",
    a: "No, utilizziamo idropulitrici professionali con pressione regolabile. I nostri operatori sono formati per adattare la pressione al tipo di superficie: intonaco, pietra, mattoni o cemento. Ogni materiale riceve il trattamento adeguato.",
  },
  {
    q: "Servono ponteggi per il lavaggio facciate?",
    a: "Dipende dall'altezza dell'edificio. Per facciate fino a 3-4 piani utilizziamo lance telescopiche professionali. Per edifici più alti, ci avvaliamo di piattaforme aeree o ponteggi, sempre nel rispetto delle normative di sicurezza.",
  },
  {
    q: "Operate anche in provincia di Como e Monza?",
    a: "Sì, oltre a Varese e provincia (Gallarate, Busto Arsizio, Saronno, Tradate), operiamo anche nelle province di Como e Monza Brianza. Contattaci per verificare la copertura nella tua zona.",
  },
  {
    q: "È possibile effettuare un trattamento protettivo dopo il lavaggio?",
    a: "Assolutamente sì. Offriamo trattamenti idrorepellenti e anti-muffa che proteggono la facciata dagli agenti atmosferici, rallentando la formazione di sporco, muschio e alghe.",
  },
];

export default function LavaggioFacciatePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema(faqs)) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1e3a5f] to-[#0f172a] text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <Breadcrumb
              items={[
                { label: "Home", href: "/" },
                { label: "Servizi", href: "/servizi" },
                { label: "Lavaggio Facciate" },
              ]}
            />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Lavaggio Facciate con Idropulitrice
            </h1>
            <p className="text-xl text-gray-300 mb-6">
              Pulizia professionale di facciate con idropulitrice ad alta pressione. Rimuoviamo
              smog, muschio, alghe e depositi atmosferici da condomini, ville e edifici commerciali
              a Varese, Gallarate, Busto Arsizio e Como.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/preventivo"
                className="inline-flex items-center gap-2 bg-[#f97316] hover:bg-[#ea580c] text-white px-6 py-3 rounded-lg font-semibold transition"
              >
                Richiedi Preventivo Gratuito
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
              { icon: Droplets, text: "Idropulitrice professionale" },
              { icon: Shield, text: "Personale assicurato" },
              { icon: Building2, text: "Condomini e aziende" },
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

      {/* Intro */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Perché scegliere il lavaggio facciate professionale?
          </h2>
          <div className="prose prose-lg text-gray-600 space-y-4">
            <p>
              Le facciate degli edifici sono esposte quotidianamente a smog, piogge acide, polveri
              sottili e agenti biologici come muschio, alghe e licheni. Con il tempo, questi
              elementi deteriorano l&apos;aspetto estetico e possono danneggiare i materiali.
            </p>
            <p>
              Il lavaggio con idropulitrice professionale ad alta pressione è il metodo più
              efficace per ripristinare l&apos;aspetto originale della facciata. I nostri operatori,
              attivi in tutta la provincia di Varese e nelle zone di Como, Saronno e Monza,
              utilizzano attrezzature di ultima generazione con pressione regolabile fino a 250 bar.
            </p>
          </div>
        </div>
      </section>

      {/* Service Types */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Tipologie di Intervento
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {serviceTypes.map((type) => (
              <div
                key={type.title}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
              >
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

      {/* Zone servite */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Zone Servite</h2>
          <p className="text-lg text-gray-600 mb-8">
            Effettuiamo lavaggio facciate con idropulitrice professionale in tutta la provincia di
            Varese e zone limitrofe.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Varese",
              "Gallarate",
              "Busto Arsizio",
              "Saronno",
              "Tradate",
              "Como",
              "Monza",
              "Induno Olona",
              "Arcisate",
              "Laveno",
              "Luino",
              "Sesto Calende",
            ].map((city) => (
              <span
                key={city}
                className="bg-[#0d9488]/10 text-[#0d9488] px-4 py-2 rounded-full font-medium"
              >
                {city}
              </span>
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
            Contattaci per un sopralluogo senza impegno. Valutiamo lo stato della facciata e ti
            proponiamo la soluzione migliore.
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
