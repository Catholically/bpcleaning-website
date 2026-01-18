import Link from "next/link";
import QuoteCalculator from "@/components/QuoteCalculator";
import {
  Shield,
  Clock,
  Leaf,
  Award,
  Star,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Building2,
  Bug,
  Wind,
  TreePine,
  Layers,
} from "lucide-react";

const services = [
  {
    icon: Sparkles,
    title: "Pulizie Civili",
    description: "Case, appartamenti e condomini. Pulizie ordinarie e straordinarie.",
    href: "/servizi/pulizie-civili",
  },
  {
    icon: Building2,
    title: "Pulizie Industriali",
    description: "Uffici, aziende, banche, studi medici e spazi commerciali.",
    href: "/servizi/pulizie-industriali",
  },
  {
    icon: Wind,
    title: "Sanificazioni",
    description: "Sanificazione certificata con perossido di idrogeno atomizzato.",
    href: "/servizi/sanificazioni",
  },
  {
    icon: Bug,
    title: "Disinfestazioni",
    description: "Insetti, roditori, allontanamento piccioni e volatili.",
    href: "/servizi/disinfestazioni",
  },
  {
    icon: Layers,
    title: "Trattamento Pavimenti",
    description: "Pulizia, levigatura e lucidatura marmo, granito, parquet.",
    href: "/servizi/trattamento-pavimenti",
  },
  {
    icon: TreePine,
    title: "Aree Verdi",
    description: "Manutenzione giardini, potature e pulizia spazi esterni.",
    href: "/servizi/aree-verdi",
  },
];

const stats = [
  { value: "10+", label: "Anni di esperienza" },
  { value: "500+", label: "Clienti soddisfatti" },
  { value: "2h", label: "Tempo risposta preventivo" },
  { value: "4.8/5", label: "Valutazione media" },
];

const features = [
  {
    icon: Shield,
    title: "Assicurazione Completa",
    description: "Copertura fino a 2.000.000",
  },
  {
    icon: Clock,
    title: "Preventivo in 2 Ore",
    description: "Rispondiamo rapidamente",
  },
  {
    icon: Leaf,
    title: "Prodotti BIO Certificati",
    description: "Opzione ecologica",
  },
  {
    icon: Award,
    title: "Personale Formato",
    description: "Qualificato D.L. 81/2008",
  },
];

const testimonials = [
  {
    name: "Marco R.",
    role: "Amministratore Condominio",
    text: "Collaboriamo con BP Cleaning da 3 anni per il nostro condominio. Puntuali, professionali e prezzi onesti.",
    rating: 5,
  },
  {
    name: "Laura B.",
    role: "Titolare Studio Dentistico",
    text: "La sanificazione del nostro studio e impeccabile. Certificazioni sempre in regola e personale discreto.",
    rating: 5,
  },
  {
    name: "Giuseppe M.",
    role: "Responsabile Ufficio",
    text: "Finalmente una impresa di pulizie affidabile. Il preventivo e stato rispettato al centesimo.",
    rating: 5,
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1e3a5f] to-[#0f172a] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-8 lg:py-12 relative">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left content */}
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full text-sm mb-4">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span>Preventivo gratuito entro 2 ore</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
                Pulizie Professionali in provincia di{" "}
                <span className="text-[#0d9488]">Varese</span> e{" "}
                <span className="text-[#0d9488]">Milano</span>
              </h1>
              <p className="text-lg text-gray-300 mb-6 max-w-xl">
                Oltre 10 anni di esperienza al servizio di privati e aziende.
                Pulizie, sanificazioni e disinfestazioni con standard certificati.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <Link
                  href="/preventivo"
                  className="inline-flex items-center justify-center gap-2 bg-[#f97316] hover:bg-[#ea580c] text-white px-8 py-4 rounded-lg font-semibold transition shadow-lg hover:shadow-xl"
                >
                  Richiedi Preventivo
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <a
                  href="tel:+393467483943"
                  className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:bg-white/10 text-white px-8 py-4 rounded-lg font-semibold transition"
                >
                  Chiama Ora
                </a>
              </div>

              {/* Quick stats */}
              <div className="grid grid-cols-4 gap-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-[#0d9488]">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Calculator */}
            <div className="lg:pl-8">
              <QuoteCalculator />
            </div>
          </div>
        </div>
      </section>

      {/* Trust badges */}
      <section className="bg-gray-50 py-8 border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.title} className="flex items-center gap-3">
                  <Icon className="w-8 h-8 text-[#0d9488]" />
                  <div>
                    <p className="font-semibold text-gray-900">{feature.title}</p>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              I Nostri Servizi
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Soluzioni complete per ogni esigenza di pulizia e sanificazione
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.title}
                  href={service.href}
                  className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#0d9488]/30"
                >
                  <div className="w-12 h-12 bg-[#0d9488]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#0d9488] transition-colors">
                    <Icon className="w-6 h-6 text-[#0d9488] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-[#0d9488] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <span className="inline-flex items-center text-[#0d9488] font-medium">
                    Scopri di piu
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/servizi"
              className="inline-flex items-center gap-2 bg-[#1e3a5f] hover:bg-[#162d4d] text-white px-8 py-4 rounded-lg font-semibold transition"
            >
              Vedi Tutti i Servizi
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Perche Scegliere BP Cleaning?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Da oltre 10 anni siamo il punto di riferimento per le pulizie
                professionali nelle province di Varese e Milano.
              </p>

              <div className="space-y-4">
                {[
                  "Preventivo gratuito e senza impegno entro 2 ore",
                  "Personale qualificato e assicurato",
                  "Prodotti professionali e opzione BIO certificata",
                  "Flessibilita oraria (anche weekend e festivi)",
                  "Contratti personalizzati per aziende",
                  "Certificazioni D.L. 81/2008 e normative europee",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[#0d9488] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Link
                  href="/chi-siamo"
                  className="inline-flex items-center gap-2 text-[#0d9488] font-semibold hover:underline"
                >
                  Scopri chi siamo
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>

            {/* Stats card */}
            <div className="relative">
              <div className="bg-gradient-to-br from-[#0d9488] to-[#0f766e] rounded-2xl p-8 text-white">
                <div className="text-center">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Il Multiservice a Portata di Tutti</h3>
                  <p className="text-white/80 mb-6">
                    Qualita professionale a prezzi accessibili
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="text-3xl font-bold">99%</div>
                      <div className="text-sm text-white/80">Clienti soddisfatti</div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="text-3xl font-bold">48h</div>
                      <div className="text-sm text-white/80">Intervento rapido</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Cosa Dicono di Noi
            </h2>
            <p className="text-xl text-gray-600">
              La soddisfazione dei nostri clienti e la nostra priorita
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">&ldquo;{testimonial.text}&rdquo;</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#1e3a5f] to-[#0f172a] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pronto per un Ambiente Impeccabile?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Richiedi un preventivo gratuito e senza impegno.
            Ti rispondiamo entro 2 ore.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/preventivo"
              className="inline-flex items-center justify-center gap-2 bg-[#f97316] hover:bg-[#ea580c] text-white px-8 py-4 rounded-lg font-semibold transition shadow-lg hover:shadow-xl"
            >
              Calcola Preventivo Online
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:+393467483943"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:bg-white/10 text-white px-8 py-4 rounded-lg font-semibold transition"
            >
              Preferisci Chiamare?
            </a>
          </div>
        </div>
      </section>

      {/* Areas Served */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Zone Servite</h2>
            <p className="text-gray-600">Operiamo in tutta la Lombardia e Canton Ticino</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Varese",
              "Milano",
              "Gallarate",
              "Busto Arsizio",
              "Saronno",
              "Legnano",
              "Como",
              "Lugano",
              "Mendrisio",
            ].map((city) => (
              <span
                key={city}
                className="px-4 py-2 bg-white rounded-full text-gray-700 border border-gray-200 hover:border-[#0d9488] hover:text-[#0d9488] transition cursor-pointer"
              >
                {city}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
