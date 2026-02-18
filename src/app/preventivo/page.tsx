import { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { MessageSquare, Phone, Clock, Shield, CheckCircle } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import { generateFAQSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Richiedi Preventivo Gratuito | BP Cleaning",
  description: "Richiedi un preventivo gratuito per pulizie professionali. Compila il form e ricevi risposta entro 2 ore. Sopralluogo gratuito.",
};

const preventivoFaqs = [
  {
    q: "Quanto costa il preventivo?",
    a: "Il preventivo è sempre gratuito e senza impegno. Anche il sopralluogo, se necessario, è completamente gratuito.",
  },
  {
    q: "Quanto tempo ci vuole per ricevere il preventivo?",
    a: "Rispondiamo a tutte le richieste entro 2 ore lavorative. Per preventivi complessi che richiedono sopralluogo, fisseremo un appuntamento entro 48 ore.",
  },
  {
    q: "Quali zone servite?",
    a: "Operiamo in tutta la provincia di Varese, Milano e Monza Brianza, oltre che nel Canton Ticino (Svizzera). Contattaci per verificare la copertura nella tua zona.",
  },
  {
    q: "Posso richiedere una pulizia urgente?",
    a: "Sì, offriamo anche servizi di pulizia urgente con intervento entro 24-48 ore, compatibilmente con la disponibilità del nostro team.",
  },
];

export default function PreventivePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema(preventivoFaqs)) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1e3a5f] to-[#0f172a] text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <Breadcrumb items={[
            { label: "Home", href: "/" },
            { label: "Preventivo" },
          ]} />
          <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Richiedi un Preventivo Gratuito
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Compila il form per ricevere un preventivo personalizzato.
            Ti ricontattiamo entro 2 ore!
          </p>
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-[#0d9488]" />
              <span>Risposta entro 2 ore</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-[#0d9488]" />
              <span>Senza impegno</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-[#0d9488]" />
              <span>Sopralluogo gratuito</span>
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-[#0d9488] rounded-lg flex items-center justify-center">
              <MessageSquare className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Richiedi Preventivo</h2>
              <p className="text-gray-600">Descrivi le tue esigenze e ti ricontattiamo</p>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>

      {/* Call Section */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Preferisci parlare con noi?
          </h3>
          <p className="text-gray-600 mb-6">
            Siamo disponibili dal lunedì al venerdì, dalle 8:00 alle 18:00
          </p>
          <a
            href="tel:+393467483943"
            className="sm:hidden inline-flex items-center gap-3 bg-[#0d9488] hover:bg-[#0f766e] text-white px-8 py-4 rounded-lg font-semibold transition text-lg"
          >
            <Phone className="w-6 h-6" />
            Chiama 346 748 3943
          </a>
          <p className="hidden sm:block text-lg text-gray-800">
            <Phone className="w-5 h-5 inline-block mr-2 text-[#0d9488]" />
            346 748 3943
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Domande Frequenti
          </h2>
          <div className="space-y-6">
            {preventivoFaqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
