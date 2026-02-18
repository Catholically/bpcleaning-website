import { Metadata } from "next";
import Link from "next/link";
import {
  Building2,
  ArrowRight,
  CheckCircle,
  Shield,
  Clock,
  FileText,
  Users,
  Phone,
} from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Pulizie per Aziende | BP Cleaning - Servizi B2B",
  description: "Servizi di pulizia professionali per aziende, uffici, negozi e industrie. Contratti personalizzati, fatturazione mensile, personale dedicato.",
};

const sectors = [
  {
    title: "Uffici e Studi Professionali",
    description: "Avvocati, commercialisti, architetti, consulenti",
    features: ["Pulizia quotidiana o settimanale", "Orari flessibili (anche serali)", "Sanificazione postazioni"],
  },
  {
    title: "Negozi e Showroom",
    description: "Retail, boutique, esposizioni",
    features: ["Pulizia vetrine", "Trattamento pavimenti", "Pulizia pre/post evento"],
  },
  {
    title: "Strutture Sanitarie",
    description: "Studi medici, dentistici, ambulatori",
    features: ["Sanificazione certificata", "Interventi programmati", "Documentazione completa"],
  },
  {
    title: "Banche e Assicurazioni",
    description: "Filiali, agenzie, sedi direzionali",
    features: ["Personale verificato", "Massima riservatezza", "Pulizia aree clienti"],
  },
  {
    title: "Industrie e Magazzini",
    description: "Capannoni, logistica, produzione",
    features: ["Pulizia industriale", "Trattamento pavimenti", "Pulizia macchinari"],
  },
];

const benefits = [
  {
    icon: FileText,
    title: "Contratti Personalizzati",
    description: "Definiamo insieme frequenza, orari e servizi in base alle tue esigenze specifiche.",
  },
  {
    icon: Users,
    title: "Team Dedicato",
    description: "Personale fisso e formato per la tua azienda, con supervisore di riferimento.",
  },
  {
    icon: Clock,
    title: "Flessibilità Oraria",
    description: "Interventi in orario serale o weekend per non disturbare le attività.",
  },
  {
    icon: Shield,
    title: "Copertura Assicurativa",
    description: "Assicurazione RC fino a 2 milioni di euro per la massima tranquillità.",
  },
];

export default function AziendePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1e3a5f] to-[#0f172a] text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <Breadcrumb items={[
            { label: "Home", href: "/" },
            { label: "Aziende" },
          ]} />
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#0d9488]/20 px-4 py-2 rounded-full text-sm mb-6">
                <Building2 className="w-4 h-4" />
                <span>Soluzioni B2B</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Pulizie per Aziende
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Partner affidabile per la pulizia dei tuoi spazi di lavoro.
                Contratti su misura, fatturazione semplificata, personale qualificato.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/preventivo"
                  className="inline-flex items-center justify-center gap-2 bg-[#f97316] hover:bg-[#ea580c] text-white px-8 py-4 rounded-lg font-semibold transition"
                >
                  Richiedi Preventivo B2B
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <a
                  href="tel:+393467483943"
                  className="sm:hidden inline-flex items-center justify-center gap-2 border border-white/30 hover:bg-white/10 text-white px-8 py-4 rounded-lg font-semibold transition"
                >
                  <Phone className="w-5 h-5" />
                  Parla con un Consulente
                </a>
              </div>
            </div>

            {/* Stats */}
            <div className="bg-white/10 backdrop-blur rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-6">Perché sceglierci</h3>
              <div className="space-y-4">
                {[
                  "Oltre 100 aziende clienti attive",
                  "Personale selezionato e formato",
                  "Fatturazione mensile o trimestrale",
                  "Referente dedicato per ogni contratto",
                  "Intervento sostitutivo garantito",
                  "Report periodici su richiesta",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#0d9488] flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Vantaggi per la Tua Azienda
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div key={benefit.title} className="bg-white rounded-xl p-6 shadow-sm text-center">
                  <div className="w-14 h-14 bg-[#0d9488]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-[#0d9488]" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">
            Settori che Serviamo
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Esperienza specifica in diversi settori per garantire un servizio su misura.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sectors.map((sector) => (
              <div key={sector.title} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-1">{sector.title}</h3>
                <p className="text-gray-500 text-sm mb-4">{sector.description}</p>
                <ul className="space-y-2">
                  {sector.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-[#0d9488]" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Come Funziona
          </h2>
          <div className="space-y-6">
            {[
              {
                step: "1",
                title: "Sopralluogo Gratuito",
                description: "Visitiamo i tuoi spazi per capire le esigenze specifiche e preparare un preventivo dettagliato.",
              },
              {
                step: "2",
                title: "Proposta Personalizzata",
                description: "Ti presentiamo un piano di lavoro con frequenze, orari e servizi definiti. Nessuna sorpresa.",
              },
              {
                step: "3",
                title: "Avvio del Servizio",
                description: "Assegniamo un team dedicato e un supervisore di riferimento. Inizio interventi secondo programma.",
              },
              {
                step: "4",
                title: "Monitoraggio Continuo",
                description: "Verifiche periodiche della qualità e comunicazione costante per garantire la tua soddisfazione.",
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-[#0d9488] rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-[#1e3a5f] to-[#0f172a] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Pronto a Migliorare il Tuo Ambiente di Lavoro?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Richiedi un sopralluogo gratuito e ricevi un preventivo personalizzato
            entro 48 ore.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/preventivo"
              className="inline-flex items-center justify-center gap-2 bg-[#f97316] hover:bg-[#ea580c] text-white px-8 py-4 rounded-lg font-semibold transition"
            >
              Richiedi Sopralluogo Gratuito
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/contatti"
              className="inline-flex items-center justify-center gap-2 border border-white/30 hover:bg-white/10 text-white px-8 py-4 rounded-lg font-semibold transition"
            >
              Contattaci
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
