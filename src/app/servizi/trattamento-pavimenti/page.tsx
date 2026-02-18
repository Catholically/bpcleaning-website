import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle, Sparkles, Shield, Phone, Layers } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import { generateFAQSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Trattamento Pavimenti Interni Varese | BP Cleaning",
  description: "Pulizia e trattamento professionale pavimenti in cotto, pietra, gres e ceramica a Varese e provincia. Lucidatura, protezione e manutenzione.",
};

const serviceTypes = [
  {
    title: "Cotto e Pietra",
    description: "Recupero e protezione materiali porosi",
    includes: [
      "Pulizia profonda",
      "Rimozione efflorescenze",
      "Trattamento idrorepellente",
      "Cera naturale",
      "Ravvivamento colore",
      "Protezione duratura",
    ],
  },
  {
    title: "Gres e Ceramica",
    description: "Pulizia e protezione piastrelle",
    includes: [
      "Deceratura",
      "Pulizia fughe",
      "Rimozione calcare",
      "Trattamento antiscivolo",
      "Protezione superfici",
      "Lucidatura gres lappato",
    ],
  },
];

const faqs = [
  {
    q: "Ogni quanto va trattato un pavimento in cotto?",
    a: "Dipende dal traffico e dall'esposizione. Per abitazioni private consigliamo un trattamento ogni 3-5 anni, per attività commerciali anche ogni 1-2 anni. La manutenzione ordinaria può essere più frequente.",
  },
  {
    q: "Trattate anche scale e davanzali?",
    a: "Certamente, trattiamo tutte le superfici: pavimenti, scale, davanzali, rivestimenti in cotto, pietra e gres.",
  },
  {
    q: "Quanto tempo richiede il trattamento?",
    a: "Per un trattamento standard di un appartamento servono 1-2 giorni. Forniamo sempre una stima precisa dopo il sopralluogo.",
  },
  {
    q: "Il trattamento protettivo è duraturo?",
    a: "Sì, i nostri trattamenti idrorepellenti e antimacchia durano diversi anni. Offriamo anche programmi di manutenzione periodica per mantenere i pavimenti in condizioni ottimali.",
  },
];

export default function TrattamentoPavimentiPage() {
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
            <Breadcrumb items={[
              { label: "Home", href: "/" },
              { label: "Servizi", href: "/servizi" },
              { label: "Trattamento Pavimenti" },
            ]} />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Trattamento Pavimenti</h1>
            <p className="text-xl text-gray-300 mb-6">
              Pulizia, lucidatura e trattamento professionale per pavimenti in cotto,
              pietra, gres e ceramica. Riportiamo i tuoi pavimenti allo splendore originale.
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
              { icon: Sparkles, text: "Risultato garantito" },
              { icon: Shield, text: "Prodotti professionali" },
              { icon: Layers, text: "Tutti i materiali" },
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
            Materiali Trattati
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {serviceTypes.map((type) => (
              <div key={type.title} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{type.title}</h3>
                <p className="text-gray-600 mb-4">{type.description}</p>
                <h4 className="text-sm font-semibold text-gray-700 mb-3">Servizi disponibili:</h4>
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
          <h2 className="text-3xl font-bold mb-4">Richiedi un Sopralluogo Gratuito</h2>
          <p className="text-xl text-white/80 mb-8">
            Valutiamo lo stato del tuo pavimento e ti proponiamo la soluzione migliore.
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
