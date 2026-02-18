import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle, Clock, Shield, Heart, Phone, Stethoscope, FileCheck } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import { generateFAQSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Pulizie Studi Medici e Dentistici | BP Cleaning Varese",
  description: "Servizio di pulizia e sanificazione per studi medici, dentistici, poliambulatori e cliniche a Varese e Milano. Personale formato, certificazioni incluse.",
};

const serviceTypes = [
  {
    title: "Studi Dentistici",
    description: "Pulizia e sanificazione sale odontoiatriche",
    includes: [
      "Sanificazione riuniti dentali",
      "Pulizia e disinfezione superfici",
      "Sterilizzazione aree operative",
      "Pulizia sale d'attesa",
      "Gestione rifiuti speciali",
      "Pulizia strumentazione",
    ],
  },
  {
    title: "Studi Medici",
    description: "Pulizia ambulatori e studi specialistici",
    includes: [
      "Sanificazione sale visite",
      "Pulizia lettini e attrezzature",
      "Disinfezione superfici di contatto",
      "Pulizia reception e attesa",
      "Sanificazione bagni",
      "Pulizia pavimenti con disinfettanti",
    ],
  },
  {
    title: "Poliambulatori",
    description: "Pulizia strutture multi-specialistiche",
    includes: [
      "Pulizia aree comuni",
      "Sanificazione sale operatorie minori",
      "Pulizia laboratori",
      "Disinfezione punti prelievo",
      "Gestione aree sterili",
      "Pulizia zone degenza",
    ],
  },
  {
    title: "Cliniche Private",
    description: "Servizio completo per strutture sanitarie",
    includes: [
      "Pulizia camere degenza",
      "Sanificazione sale operatorie",
      "Pulizia aree critiche",
      "Gestione biancheria",
      "Pulizia cucine/mense",
      "Manutenzione aree esterne",
    ],
  },
];

const certifications = [
  "Personale formato secondo protocolli sanitari",
  "Utilizzo prodotti PMC (Presidi Medico Chirurgici)",
  "Rilascio certificazione di avvenuta sanificazione",
  "Protocolli conformi alle normative ASL",
  "Tracciabilità completa degli interventi",
  "Assicurazione RC specifica per settore sanitario",
];

const faqs = [
  {
    q: "Il vostro personale è formato per ambienti sanitari?",
    a: "Sì, il nostro personale riceve formazione specifica sui protocolli di pulizia e sanificazione in ambito sanitario, incluse procedure per la gestione dei rifiuti speciali.",
  },
  {
    q: "Rilasciate certificazioni di sanificazione?",
    a: "Sì, al termine di ogni intervento rilasciamo certificazione di avvenuta sanificazione valida per le normative sanitarie e assicurative.",
  },
  {
    q: "Quali prodotti utilizzate?",
    a: "Utilizziamo esclusivamente prodotti PMC (Presidi Medico Chirurgici) registrati al Ministero della Salute, specifici per ambienti sanitari.",
  },
  {
    q: "Lavorate anche di domenica?",
    a: "Sì, operiamo 7 giorni su 7 per garantire la massima flessibilità. Gli interventi possono essere programmati anche durante i giorni di chiusura dello studio.",
  },
];

export default function PulizieStudiMediciPage() {
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
              { label: "Pulizie Studi Medici" },
            ]} />
            <div className="flex items-center gap-2 text-[#0d9488] mb-4">
              <Stethoscope className="w-6 h-6" />
              <span className="font-medium">Settore Sanitario</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Pulizie Studi Medici e Dentistici</h1>
            <p className="text-xl text-gray-300 mb-6">
              Servizio professionale di pulizia e sanificazione per studi medici, dentistici, poliambulatori e cliniche.
              Personale formato, prodotti certificati e protocolli conformi alle normative sanitarie.
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
              { icon: Shield, text: "Personale formato" },
              { icon: FileCheck, text: "Certificazioni incluse" },
              { icon: Heart, text: "Prodotti PMC" },
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
            Tipologie di Strutture
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

      {/* Certifications */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">
            Garanzie e Certificazioni
          </h2>
          <p className="text-gray-600 text-center mb-12">
            Il nostro servizio per strutture sanitarie include tutte le garanzie necessarie
          </p>
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
            <ul className="grid md:grid-cols-2 gap-4">
              {certifications.map((cert) => (
                <li key={cert} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#0d9488] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{cert}</span>
                </li>
              ))}
            </ul>
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
          <h2 className="text-3xl font-bold mb-4">Hai uno Studio Medico o Dentistico?</h2>
          <p className="text-xl text-white/80 mb-8">
            Contattaci per un preventivo personalizzato. Offriamo contratti flessibili con fatturazione mensile.
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
