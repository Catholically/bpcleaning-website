import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle, Shield, Droplets, Phone, Gem, SprayCan } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import { generateFAQSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Pulizia Marmo Esterno Varese | BP Cleaning",
  description:
    "Trattamento e pulizia marmo esterno con idropulitrice professionale a Varese e provincia. Scalinate, facciate, pavimenti in marmo, granito e pietra naturale.",
};

const serviceTypes = [
  {
    title: "Scalinate in Marmo",
    description:
      "Pulizia e restauro di scalinate esterne in marmo, granito e pietra. Rimozione macchie, muschio e incrostazioni per restituire brillantezza",
    includes: [
      "Pulizia gradini e alzate",
      "Rimozione macchie di ruggine e calcare",
      "Eliminazione muschio e alghe",
      "Lucidatura superficiale",
      "Trattamento anti-scivolo opzionale",
    ],
  },
  {
    title: "Facciate in Marmo e Granito",
    description:
      "Lavaggio delicato di rivestimenti esterni in marmo, granito e pietra naturale con pressione calibrata",
    includes: [
      "Rimozione depositi atmosferici",
      "Pulizia venature e superfici lucide",
      "Eliminazione macchie biologiche",
      "Trattamento idrorepellente protettivo",
      "Ripristino brillantezza naturale",
    ],
  },
  {
    title: "Pavimenti in Marmo Esterno",
    description:
      "Pulizia professionale di pavimentazioni esterne in marmo, travertino e pietra per terrazze, portici e ingressi",
    includes: [
      "Lavaggio con pressione regolata",
      "Rimozione macchie organiche e minerali",
      "Pulizia fughe e giunti",
      "Trattamento anti-macchia",
      "Protezione contro agenti atmosferici",
    ],
  },
  {
    title: "Monumenti e Elementi Decorativi",
    description:
      "Pulizia specializzata di elementi decorativi, fontane, colonne e manufatti in marmo e pietra",
    includes: [
      "Pulizia delicata a bassa pressione",
      "Rimozione incrostazioni biologiche",
      "Trattamento superfici scolpite",
      "Protezione anti-degrado",
      "Consulenza per manutenzione periodica",
    ],
  },
];

const faqs = [
  {
    q: "L'idropulitrice può rovinare il marmo?",
    a: "No, a patto di utilizzare la giusta pressione. Il marmo è una pietra relativamente delicata: i nostri operatori regolano l'idropulitrice con pressioni più basse rispetto ad altri materiali e utilizzano ugelli specifici per superfici pregiate.",
  },
  {
    q: "Quali tipi di marmo esterno trattate?",
    a: "Trattiamo tutti i tipi di marmo e pietre naturali: marmo bianco di Carrara, Botticino, travertino, granito, pietra di Luserna, ardesia e molti altri. Ogni pietra riceve un trattamento specifico.",
  },
  {
    q: "Quanto dura il trattamento protettivo sul marmo?",
    a: "Il trattamento idrorepellente e anti-macchia ha una durata media di 2-3 anni, a seconda dell'esposizione agli agenti atmosferici. Consigliamo un ciclo di manutenzione per mantenere la protezione nel tempo.",
  },
  {
    q: "Operate su condomini di pregio a Varese e Como?",
    a: "Sì, lavoriamo regolarmente su condomini di pregio, ville storiche e edifici residenziali a Varese, Gallarate, Busto Arsizio, Como e in tutta la Brianza. Contattaci per un sopralluogo gratuito.",
  },
  {
    q: "Rimuovete anche le macchie di ruggine dal marmo?",
    a: "Sì, le macchie di ruggine sono tra gli interventi più richiesti. Utilizziamo prodotti specifici abbinati all'azione dell'idropulitrice per rimuoverle efficacemente senza danneggiare la superficie.",
  },
];

export default function TrattamentoMarmoEsternoPage() {
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
                { label: "Trattamento Marmo Esterno" },
              ]}
            />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Trattamento Marmo Esterno
            </h1>
            <p className="text-xl text-gray-300 mb-6">
              Pulizia e trattamento professionale di marmo, granito e pietra naturale con
              idropulitrice a pressione calibrata. Restituiamo brillantezza a scalinate, facciate e
              pavimenti esterni a Varese, Gallarate, Busto Arsizio e Como.
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
              { icon: Gem, text: "Superfici di pregio" },
              { icon: Droplets, text: "Pressione calibrata" },
              { icon: SprayCan, text: "Trattamento protettivo" },
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
            Perché affidarsi a professionisti per il marmo esterno?
          </h2>
          <div className="prose prose-lg text-gray-600 space-y-4">
            <p>
              Il marmo esterno è un materiale pregiato che richiede cure specifiche. Esposto agli
              agenti atmosferici, tende a perdere lucentezza, macchiarsi e ricoprirsi di depositi
              biologici come muschio, alghe e licheni.
            </p>
            <p>
              Un trattamento professionale con idropulitrice a pressione calibrata permette di
              rimuovere sporco e incrostazioni senza aggredire la superficie. I nostri operatori,
              esperti nel trattamento di pietre naturali, servono condomini, ville e strutture di
              pregio in provincia di Varese, Como, Saronno e Monza.
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
            Trattamento marmo e pietre naturali in tutta la provincia di Varese e zone limitrofe.
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
            Contattaci per un sopralluogo senza impegno. Valutiamo il tipo di marmo e ti
            proponiamo il trattamento più adatto.
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
