import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle, Clock, Shield, Droplets, Phone, Layers } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import { generateFAQSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Lavaggio Pavimenti Esterni Varese | BP Cleaning",
  description:
    "Lavaggio pavimenti esterni con idropulitrice professionale a Varese e provincia. Pulizia porfido, autobloccanti, cemento, pietra e gres per privati e aziende.",
};

const serviceTypes = [
  {
    title: "Porfido e Cubetti",
    description:
      "Pulizia approfondita di pavimentazioni in porfido, cubetti e sampietrini con rimozione completa di sporco, muschio e infestanti",
    includes: [
      "Rimozione muschio ed erbacce tra le fughe",
      "Pulizia con idropulitrice a pressione regolata",
      "Ripristino colore originale della pietra",
      "Trattamento anti-muschio post-lavaggio",
      "Eventuale risigillatura fughe",
    ],
  },
  {
    title: "Autobloccanti e Betonelle",
    description:
      "Lavaggio professionale di pavimenti in autobloccanti, betonelle e masselli per cortili, vialetti e parcheggi",
    includes: [
      "Rimozione macchie di olio e grasso",
      "Eliminazione alghe e annerimenti",
      "Pulizia profonda tra gli interstizi",
      "Ripristino aspetto estetico originale",
      "Trattamento idrorepellente opzionale",
    ],
  },
  {
    title: "Cemento e Calcestruzzo",
    description:
      "Lavaggio pavimentazioni industriali e civili in cemento, calcestruzzo e massetti lisci o stampati",
    includes: [
      "Rimozione macchie ostinate e residui",
      "Pulizia cemento stampato e decorativo",
      "Sgrassatura aree di carico/scarico",
      "Lavaggio marciapiedi e rampe",
      "Pulizia aree parcheggio esterne",
    ],
  },
  {
    title: "Pietra Naturale e Gres",
    description:
      "Trattamento delicato per superfici in pietra naturale, gres porcellanato e materiali pregiati",
    includes: [
      "Pressione calibrata per ogni materiale",
      "Pulizia pietra naturale e travertino",
      "Lavaggio gres porcellanato esterno",
      "Rimozione efflorescenze e depositi calcarei",
      "Trattamento protettivo finale",
    ],
  },
];

const faqs = [
  {
    q: "Quali pavimenti esterni si possono lavare con l'idropulitrice?",
    a: "Praticamente tutti: porfido, autobloccanti, cemento, pietra naturale, gres, cotto e mattoni. Per ogni materiale regoliamo la pressione dell'idropulitrice per garantire una pulizia efficace senza danneggiare la superficie.",
  },
  {
    q: "Ogni quanto va lavato un pavimento esterno?",
    a: "Consigliamo un lavaggio professionale almeno una volta all'anno, preferibilmente in primavera dopo l'inverno. Per aree molto trafficate o esposte, come cortili condominiali a Varese o parcheggi aziendali, può essere utile un intervento semestrale.",
  },
  {
    q: "Il lavaggio rimuove anche il muschio tra le fughe?",
    a: "Sì, l'idropulitrice ad alta pressione è particolarmente efficace nel rimuovere muschio, erbacce e depositi biologici dalle fughe. Possiamo anche applicare un trattamento anti-muschio per rallentarne la ricrescita.",
  },
  {
    q: "Lavorate anche per condomini e aziende?",
    a: "Certamente. Serviamo privati, condomini, aziende e attività commerciali in tutta la provincia di Varese (Gallarate, Busto Arsizio, Saronno, Tradate) e nelle zone di Como e Monza Brianza.",
  },
  {
    q: "È possibile fare un trattamento protettivo dopo il lavaggio?",
    a: "Sì, offriamo trattamenti idrorepellenti e anti-macchia che proteggono il pavimento e ne facilitano la pulizia futura. Il trattamento è particolarmente consigliato per porfido e autobloccanti.",
  },
];

export default function LavaggioPavimentiEsterniPage() {
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
                { label: "Lavaggio Pavimenti Esterni" },
              ]}
            />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Lavaggio Pavimenti Esterni
            </h1>
            <p className="text-xl text-gray-300 mb-6">
              Pulizia professionale di pavimenti esterni con idropulitrice ad alta pressione.
              Porfido, autobloccanti, cemento, pietra e gres: restituiamo l&apos;aspetto originale
              a cortili, vialetti e piazzali a Varese, Gallarate, Busto Arsizio e Como.
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
              { icon: Droplets, text: "Pressione fino a 250 bar" },
              { icon: Shield, text: "Personale assicurato" },
              { icon: Layers, text: "Ogni tipo di superficie" },
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
            Pavimenti esterni come nuovi
          </h2>
          <div className="prose prose-lg text-gray-600 space-y-4">
            <p>
              I pavimenti esterni sono sottoposti a usura continua: pioggia, gelo, sole, traffico
              pedonale e veicolare, foglie e depositi organici. Con il tempo si formano strati di
              sporco, muschio e alghe che rendono le superfici scivolose e antiestetiche.
            </p>
            <p>
              Il lavaggio con idropulitrice professionale è la soluzione più rapida ed efficace
              per ripristinare l&apos;aspetto originale di qualsiasi pavimento esterno. Operiamo
              in tutta la provincia di Varese e nelle zone di Como, Saronno, Tradate e Monza con
              attrezzature professionali a pressione regolabile.
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
            Lavaggio pavimenti esterni con idropulitrice professionale in tutta la provincia di
            Varese e aree limitrofe.
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
            Contattaci per un sopralluogo senza impegno. Valutiamo lo stato del pavimento e ti
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
