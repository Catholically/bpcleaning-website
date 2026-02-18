import { Metadata } from "next";
import Link from "next/link";
import {
  Sparkles,
  Building2,
  Wind,
  Bug,
  TreePine,
  Layers,
  ArrowRight,
  CheckCircle,
  Droplets,
  Gem,
} from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Servizi di Pulizia Professionale | BP Cleaning",
  description: "Scopri tutti i servizi di pulizia professionale: pulizie civili, industriali, sanificazioni, disinfestazioni, trattamento pavimenti. Preventivo gratuito.",
};

const services = [
  {
    icon: Sparkles,
    title: "Pulizie Civili",
    description: "Servizi completi per case, appartamenti e condomini. Pulizie ordinarie, straordinarie e post-cantiere.",
    href: "/servizi/pulizie-civili",
    features: ["Pulizia ordinaria", "Pulizia straordinaria", "Post-cantiere", "Fine locazione"],
  },
  {
    icon: Building2,
    title: "Pulizie Industriali",
    description: "Soluzioni professionali per uffici, aziende, banche, studi medici e spazi commerciali.",
    href: "/servizi/pulizie-industriali",
    features: ["Uffici e studi", "Negozi e showroom", "Banche e assicurazioni", "Studi medici"],
  },
  {
    icon: Wind,
    title: "Sanificazioni",
    description: "Sanificazione certificata con perossido di idrogeno atomizzato. Dispositivi conformi alle normative europee.",
    href: "/servizi/sanificazioni",
    features: ["Perossido di idrogeno", "Certificazione intervento", "Ambienti di lavoro", "Strutture sanitarie"],
  },
  {
    icon: Bug,
    title: "Disinfestazioni",
    description: "Interventi professionali contro insetti, roditori e volatili. Allontanamento piccioni e bonifica.",
    href: "/servizi/disinfestazioni",
    features: ["Insetti striscianti", "Roditori", "Allontanamento volatili", "Zanzare e vespe"],
  },
  {
    icon: Layers,
    title: "Trattamento Pavimenti",
    description: "Pulizia, lucidatura e trattamento di cotto, pietra, gres e ceramica.",
    href: "/servizi/trattamento-pavimenti",
    features: ["Cotto e pietra", "Gres e ceramica", "Trattamento protettivo", "Lucidatura"],
  },
  {
    icon: TreePine,
    title: "Aree Verdi",
    description: "Manutenzione giardini, potature, taglio erba e pulizia spazi esterni.",
    href: "/servizi/aree-verdi",
    features: ["Taglio erba", "Potature", "Pulizia foglie", "Irrigazione"],
  },
  {
    icon: Droplets,
    title: "Lavaggio Facciate",
    description: "Lavaggio facciate con idropulitrice professionale ad alta pressione per condomini e aziende.",
    href: "/servizi/lavaggio-facciate",
    features: ["Facciate condominiali", "Edifici commerciali", "Pietra e mattoni", "Trattamento anti-muffa"],
  },
  {
    icon: Droplets,
    title: "Lavaggio Pavimenti Esterni",
    description: "Pulizia pavimenti esterni: porfido, autobloccanti, cemento, pietra e gres con idropulitrice.",
    href: "/servizi/lavaggio-pavimenti-esterni",
    features: ["Porfido e cubetti", "Autobloccanti", "Cemento e calcestruzzo", "Pietra naturale"],
  },
  {
    icon: Gem,
    title: "Trattamento Marmo Esterno",
    description: "Pulizia e trattamento di marmo, granito e pietre naturali per scalinate, facciate e pavimenti esterni.",
    href: "/servizi/trattamento-marmo-esterno",
    features: ["Scalinate in marmo", "Facciate in pietra", "Monumenti e fontane", "Trattamento protettivo"],
  },
];

export default function ServiziPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1e3a5f] to-[#0f172a] text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <Breadcrumb items={[
            { label: "Home", href: "/" },
            { label: "Servizi" },
          ]} />
          <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">I Nostri Servizi</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Soluzioni complete di pulizia e sanificazione per privati e aziende.
            Qualità professionale e affidabilità garantita.
          </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className="p-6">
                    <div className="w-14 h-14 bg-[#0d9488]/10 rounded-xl flex items-center justify-center mb-4">
                      <Icon className="w-7 h-7 text-[#0d9488]" />
                    </div>
                    <h2 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h2>
                    <p className="text-gray-600 mb-4">{service.description}</p>

                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-[#0d9488]" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div className="flex items-center justify-between pt-4 border-t">
                      <Link
                        href="/preventivo"
                        className="text-[#0d9488] font-semibold hover:underline"
                      >
                        Richiedi Preventivo
                      </Link>
                      <Link
                        href={service.href}
                        className="inline-flex items-center gap-1 text-[#1e3a5f] font-medium hover:text-[#0d9488] transition"
                      >
                        Dettagli
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Non trovi quello che cerchi?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Contattaci per richiedere un servizio personalizzato.
            Valutiamo ogni richiesta e troviamo la soluzione migliore per te.
          </p>
          <Link
            href="/preventivo"
            className="inline-flex items-center gap-2 bg-[#f97316] hover:bg-[#ea580c] text-white px-8 py-4 rounded-lg font-semibold transition"
          >
            Richiedi Preventivo
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
