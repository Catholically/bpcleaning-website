import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Award, Shield, Users, Clock, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Chi Siamo | BP Cleaning - Impresa di Pulizie Varese",
  description: "Scopri BP Cleaning: oltre 18 anni di esperienza nelle pulizie professionali a Varese e Milano. Personale qualificato, certificazioni e standard elevati.",
};

const timeline = [
  { year: "2008", event: "Nasce Belli & Puliti, la nostra prima impresa di pulizie" },
  { year: "2012", event: "Espansione servizi in provincia di Varese" },
  { year: "2018", event: "Costituzione di BP Cleaning SRL, evoluzione di Belli & Puliti" },
  { year: "2020", event: "Lancio servizi di sanificazione certificata" },
  { year: "2022", event: "Espansione nel Canton Ticino" },
  { year: "2024", event: "Oltre 500 clienti attivi" },
];

const values = [
  {
    icon: Award,
    title: "Qualita",
    description: "Standard elevati in ogni intervento. Utilizziamo prodotti professionali e attrezzature all'avanguardia.",
  },
  {
    icon: Shield,
    title: "Affidabilita",
    description: "Personale selezionato, formato e assicurato. Rispettiamo tempi e accordi presi.",
  },
  {
    icon: Users,
    title: "Professionalita",
    description: "Team dedicato e competente. Formazione continua secondo le normative vigenti.",
  },
  {
    icon: Clock,
    title: "Puntualita",
    description: "Rispetto degli orari concordati. Flessibilita per venire incontro alle tue esigenze.",
  },
];

const certifications = [
  "Conformita D.L. 81/2008 (Sicurezza sul lavoro)",
  "Prodotti conformi normative europee",
  "Assicurazione RC fino a 2.000.000 euro",
  "Dispositivi sanificazione certificati CE",
  "Formazione HACCP per settore alimentare",
  "Smaltimento rifiuti secondo normativa",
];

export default function ChiSiamoPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1e3a5f] to-[#0f172a] text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Chi Siamo</h1>
            <p className="text-xl text-gray-300">
              Dal 2008 siamo il punto di riferimento per le pulizie professionali
              nelle province di Varese e Milano. Il multiservice a portata di tutti.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">La Nostra Storia</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  La nostra storia inizia nel 2008 con <strong>Belli &amp; Puliti</strong>,
                  la prima impresa di pulizie fondata a Varese con una missione chiara: offrire
                  servizi di pulizia professionali di alta qualita a prezzi accessibili.
                </p>
                <p>
                  Nel 2018, dopo 10 anni di esperienza e crescita, nasce <strong>BP Cleaning SRL</strong>,
                  l&apos;evoluzione naturale di Belli &amp; Puliti. Con la nuova struttura abbiamo
                  ampliato la nostra offerta includendo sanificazioni, disinfestazioni e
                  trattamenti speciali, diventando un vero e proprio multiservice.
                </p>
                <p>
                  Oggi, con oltre 18 anni di esperienza nel settore, operiamo in tutta la
                  Lombardia e nel Canton Ticino, con un team di professionisti qualificati
                  e attrezzature all&apos;avanguardia.
                </p>
              </div>
            </div>

            {/* Timeline */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Il Nostro Percorso</h3>
              <div className="space-y-4">
                {timeline.map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-16 text-[#0d9488] font-bold">{item.year}</div>
                    <div className="flex-1 text-gray-600 pb-4 border-b border-gray-200 last:border-0">
                      {item.event}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">I Nostri Valori</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div key={value.title} className="bg-white rounded-xl p-6 shadow-sm text-center">
                  <div className="w-14 h-14 bg-[#0d9488]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-[#0d9488]" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-gradient-to-br from-[#0d9488] to-[#0f766e] rounded-2xl p-8 md:p-12 text-white">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              {[
                { value: "18+", label: "Anni di esperienza" },
                { value: "500+", label: "Clienti soddisfatti" },
                { value: "15+", label: "Collaboratori" },
                { value: "99%", label: "Tasso soddisfazione" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
                  <div className="text-white/80">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">
            Certificazioni e Standard
          </h2>
          <p className="text-gray-600 text-center mb-12">
            Operiamo nel rispetto delle normative vigenti e degli standard di qualita piu elevati.
          </p>

          {/* ISO Certifications */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-12 mb-12">
            <a
              href="/certifications/lochiecertificazioniiso/CIB_OD090101-20_9001_BP_Cleaning_IT.PDF"
              target="_blank"
              rel="noopener noreferrer"
              className="text-center group"
            >
              <div className="w-36 h-36 mx-auto mb-3 rounded-lg overflow-hidden shadow-md group-hover:shadow-lg transition">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/certifications/lochiecertificazioniiso/9001.jpg"
                  alt="ISO 9001 - Sistema di Gestione Qualita"
                  className="w-full h-full object-contain bg-white p-2"
                />
              </div>
              <h3 className="font-bold text-gray-900 group-hover:text-[#0d9488] transition">ISO 9001:2015</h3>
              <p className="text-sm text-gray-600">Sistema di Gestione Qualita</p>
              <p className="text-xs text-[#0d9488] mt-1">Visualizza certificato</p>
            </a>
            <a
              href="/certifications/lochiecertificazioniiso/CIB_OD090101-20_45001_BP_Cleaning_IT.PDF"
              target="_blank"
              rel="noopener noreferrer"
              className="text-center group"
            >
              <div className="w-36 h-36 mx-auto mb-3 rounded-lg overflow-hidden shadow-md group-hover:shadow-lg transition">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/certifications/lochiecertificazioniiso/45001.png"
                  alt="ISO 45001 - Salute e Sicurezza sul Lavoro"
                  className="w-full h-full object-contain bg-white p-2"
                />
              </div>
              <h3 className="font-bold text-gray-900 group-hover:text-[#0d9488] transition">ISO 45001:2018</h3>
              <p className="text-sm text-gray-600">Salute e Sicurezza sul Lavoro</p>
              <p className="text-xs text-[#0d9488] mt-1">Visualizza certificato</p>
            </a>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((cert) => (
              <div key={cert} className="flex items-start gap-3 bg-white rounded-lg p-4 shadow-sm">
                <CheckCircle className="w-5 h-5 text-[#0d9488] mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Vuoi Lavorare con Noi?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Contattaci per un preventivo gratuito o per candidarti al nostro team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/preventivo"
              className="inline-flex items-center justify-center gap-2 bg-[#f97316] hover:bg-[#ea580c] text-white px-8 py-4 rounded-lg font-semibold transition"
            >
              Richiedi Preventivo
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/contatti"
              className="inline-flex items-center justify-center gap-2 border-2 border-[#1e3a5f] text-[#1e3a5f] hover:bg-[#1e3a5f] hover:text-white px-8 py-4 rounded-lg font-semibold transition"
            >
              Contattaci
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
