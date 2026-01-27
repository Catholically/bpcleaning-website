import { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Contatti | BP Cleaning - Pulizie Varese e Milano",
  description: "Contatta BP Cleaning per un preventivo gratuito. Telefono, email, WhatsApp. Sede a Varese, operiamo in Lombardia e Canton Ticino.",
};

const contactInfo = [
  {
    icon: Phone,
    title: "Telefono",
    value: "346 748 3943",
    href: "tel:+393467483943",
    description: "Lun-Ven 8:00-18:00",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "346 748 3943",
    href: "https://wa.me/393467483943",
    description: "Rispondiamo entro 2 ore",
  },
  {
    icon: Mail,
    title: "Email",
    value: "info@bpcleaning.it",
    href: "mailto:info@bpcleaning.it",
    description: "Per richieste e preventivi",
  },
  {
    icon: MapPin,
    title: "Sede Operativa",
    value: "Via Campagna 80A, Induno Olona (VA)",
    href: "https://maps.google.com/?q=Via+Campagna+80A+Induno+Olona+VA",
    description: "Riceve su appuntamento",
  },
];

const workingHours = [
  { day: "Lunedì - Venerdì", hours: "8:00 - 18:00" },
  { day: "Sabato", hours: "9:00 - 13:00" },
  { day: "Domenica", hours: "Chiuso" },
];

export default function ContattiPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1e3a5f] to-[#0f172a] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contattaci</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Siamo a tua disposizione per preventivi, informazioni o qualsiasi domanda.
            Rispondiamo entro 2 ore lavorative.
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.title}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:border-[#0d9488]/30 transition text-center group"
                >
                  <div className="w-14 h-14 bg-[#0d9488]/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-[#0d9488] transition-colors">
                    <Icon className="w-7 h-7 text-[#0d9488] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-[#0d9488] font-medium mb-1">{item.value}</p>
                  <p className="text-sm text-gray-500">{item.description}</p>
                </a>
              );
            })}
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Inviaci un Messaggio</h2>
              <ContactForm />
            </div>

            {/* Info + Map */}
            <div>
              {/* Working Hours */}
              <div className="bg-gray-50 rounded-xl p-6 mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-6 h-6 text-[#0d9488]" />
                  <h3 className="text-xl font-bold text-gray-900">Orari Ufficio</h3>
                </div>
                <div className="space-y-3">
                  {workingHours.map((item) => (
                    <div key={item.day} className="flex justify-between">
                      <span className="text-gray-600">{item.day}</span>
                      <span className="font-medium text-gray-900">{item.hours}</span>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-gray-500 mt-4">
                  Gli interventi di pulizia vengono effettuati anche fuori orario ufficio,
                  inclusi weekend e festivi.
                </p>
              </div>

              {/* Google Maps */}
              <div className="rounded-xl overflow-hidden h-64">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2779.5!2d8.8653!3d45.8481!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47867a0a0a0a0a0a%3A0x5e1e8c0b8d6c0e0a!2sVia%20Campagna%2080A%2C%2021056%20Induno%20Olona%20VA!5e0!3m2!1sit!2sit!4v1705600000000!5m2!1sit!2sit"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="BP Cleaning - Sede Operativa Induno Olona"
                />
              </div>

              {/* Areas */}
              <div className="mt-6">
                <h3 className="font-semibold text-gray-900 mb-3">Zone Operative</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Varese e provincia",
                    "Milano",
                    "Monza Brianza",
                    "Como",
                    "Svizzera",
                  ].map((city) => (
                    <span
                      key={city}
                      className="px-3 py-1 bg-white border border-gray-200 rounded-full text-sm text-gray-600"
                    >
                      {city}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency */}
      <section className="py-12 bg-[#f97316]">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Hai un&apos;urgenza?</h2>
          <p className="mb-4">Offriamo interventi rapidi entro 24-48 ore per emergenze.</p>
          <a
            href="tel:+393467483943"
            className="inline-flex items-center gap-2 bg-white text-[#f97316] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            <Phone className="w-5 h-5" />
            Chiama per Urgenze
          </a>
        </div>
      </section>
    </>
  );
}
