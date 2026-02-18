import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle, Shield, Droplets, Phone, PaintBucket, Zap } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import { generateFAQSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Rimozione Graffiti Varese | BP Cleaning",
  description:
    "Rimozione graffiti professionale con idropulitrice e prodotti specifici a Varese e provincia. Pulizia muri, facciate, saracinesche e superfici imbrattate.",
};

const serviceTypes = [
  {
    title: "Graffiti su Intonaco e Muratura",
    description:
      "Rimozione di scritte e disegni da facciate intonacate, muri in mattoni e superfici murarie con tecniche combinate",
    includes: [
      "Applicazione solventi specifici anti-graffiti",
      "Lavaggio con idropulitrice a pressione regolata",
      "Pulizia senza danneggiare l'intonaco",
      "Trattamento anti-graffiti preventivo",
      "Eventuale ritocco pittura",
    ],
  },
  {
    title: "Graffiti su Metallo e Saracinesche",
    description:
      "Pulizia di saracinesche, portoni metallici, ringhiere e superfici in ferro o alluminio imbrattate",
    includes: [
      "Rimozione vernice spray da metallo",
      "Pulizia saracinesche e serrande",
      "Trattamento portoni e cancelli",
      "Sgrassatura e pulizia residui",
      "Applicazione protettivo anti-aderente",
    ],
  },
  {
    title: "Graffiti su Pietra e Marmo",
    description:
      "Intervento delicato su superfici pregiate in pietra naturale, marmo e granito con tecniche non aggressive",
    includes: [
      "Solventi specifici per pietre naturali",
      "Pressione calibrata per superfici delicate",
      "Rimozione senza alterare la pietra",
      "Test preventivo su area nascosta",
      "Trattamento protettivo post-pulizia",
    ],
  },
  {
    title: "Graffiti su Cemento e Calcestruzzo",
    description:
      "Pulizia di muri di cinta, sottopassi, parcheggi e superfici in cemento con idropulitrice ad alta pressione",
    includes: [
      "Lavaggio ad alta pressione (fino a 250 bar)",
      "Rimozione scritte e tag",
      "Pulizia muri perimetrali",
      "Trattamento sottopassi e garage",
      "Prevenzione con coating anti-graffiti",
    ],
  },
];

const faqs = [
  {
    q: "Riuscite a rimuovere completamente i graffiti?",
    a: "Nella maggior parte dei casi sì. Il risultato dipende dal tipo di superficie, dalla vernice utilizzata e da quanto tempo il graffito è presente. Su superfici lisce come metallo e pietra levigata otteniamo risultati eccellenti. Su intonaco poroso potrebbe essere necessario un ritocco di pittura.",
  },
  {
    q: "Cos'è il trattamento anti-graffiti?",
    a: "È un rivestimento trasparente che viene applicato sulla superficie dopo la pulizia. Crea una barriera protettiva che impedisce alla vernice spray di aderire al muro, rendendo eventuali graffiti futuri facilmente rimovibili con semplice acqua calda.",
  },
  {
    q: "Lavorate anche per Comuni e amministrazioni pubbliche?",
    a: "Sì, collaboriamo con Comuni, condomini, scuole e aziende in provincia di Varese (Gallarate, Busto Arsizio, Saronno, Tradate) e nelle zone di Como e Monza per interventi di rimozione graffiti e ripristino superfici.",
  },
  {
    q: "Quanto tempo richiede un intervento di rimozione graffiti?",
    a: "Un intervento standard su una superficie di 5-10 mq richiede in genere 2-4 ore, inclusa l'applicazione del solvente, il lavaggio e l'eventuale trattamento protettivo. Per superfici più estese, valutiamo caso per caso.",
  },
  {
    q: "Offrite un servizio di manutenzione periodica anti-graffiti?",
    a: "Sì, proponiamo contratti di manutenzione per edifici e strutture frequentemente soggetti ad atti vandalici. Il trattamento preventivo anti-graffiti riduce drasticamente tempi e difficoltà di rimozione.",
  },
];

export default function RimozioneGraffitiPage() {
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
                { label: "Rimozione Graffiti" },
              ]}
            />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Rimozione Graffiti</h1>
            <p className="text-xl text-gray-300 mb-6">
              Rimozione professionale di graffiti, scritte e tag con idropulitrice e prodotti
              specifici. Interveniamo su facciate, muri, saracinesche e ogni tipo di superficie a
              Varese, Gallarate, Busto Arsizio e Como.
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
              { icon: PaintBucket, text: "Solventi professionali" },
              { icon: Droplets, text: "Idropulitrice ad alta pressione" },
              { icon: Zap, text: "Intervento rapido" },
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
            Rimozione graffiti rapida e professionale
          </h2>
          <div className="prose prose-lg text-gray-600 space-y-4">
            <p>
              I graffiti e le scritte vandaliche deturpano l&apos;aspetto degli edifici e possono
              attirare ulteriori atti vandalici se non rimossi tempestivamente. Una rimozione
              rapida e professionale è fondamentale per preservare il decoro urbano e il valore
              degli immobili.
            </p>
            <p>
              Utilizziamo una combinazione di solventi specifici e idropulitrice professionale per
              rimuovere graffiti da qualsiasi superficie, senza danneggiare i materiali
              sottostanti. Operiamo in tutta la provincia di Varese, Como, Saronno, Tradate e
              Monza, con possibilità di intervento rapido entro 24-48 ore.
            </p>
          </div>
        </div>
      </section>

      {/* Service Types */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Superfici che Trattiamo
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
            Rimozione graffiti professionale in tutta la provincia di Varese e zone limitrofe.
            Intervento rapido entro 24-48 ore.
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
            Graffiti sul tuo edificio? Contattaci per un intervento rapido. Sopralluogo e
            preventivo senza impegno.
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
