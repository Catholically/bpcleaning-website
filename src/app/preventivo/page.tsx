import { Metadata } from "next";
import QuoteCalculator from "@/components/QuoteCalculator";
import ContactForm from "@/components/ContactForm";
import { Calculator, MessageSquare, Phone, Clock, Shield, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Richiedi Preventivo Gratuito | BP Cleaning",
  description: "Richiedi un preventivo gratuito per pulizie professionali. Calcola online il costo stimato o compila il form. Risposta entro 2 ore.",
};

export default function PreventivePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1e3a5f] to-[#0f172a] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Richiedi un Preventivo Gratuito
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Scegli come vuoi procedere: calcola subito una stima online
            oppure compila il form per una richiesta personalizzata.
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
      </section>

      {/* Forms Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Calculator */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#0d9488] rounded-lg flex items-center justify-center">
                  <Calculator className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Calcola Preventivo</h2>
                  <p className="text-gray-600">Ottieni subito una stima del costo</p>
                </div>
              </div>
              <QuoteCalculator />
            </div>

            {/* Contact Form */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#1e3a5f] rounded-lg flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Richiesta Personalizzata</h2>
                  <p className="text-gray-600">Descrivi le tue esigenze specifiche</p>
                </div>
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Call Section */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Preferisci parlare con noi?
          </h3>
          <p className="text-gray-600 mb-6">
            Siamo disponibili dal lunedi al venerdi, dalle 8:00 alle 18:00
          </p>
          <a
            href="tel:+393467483943"
            className="inline-flex items-center gap-3 bg-[#0d9488] hover:bg-[#0f766e] text-white px-8 py-4 rounded-lg font-semibold transition text-lg"
          >
            <Phone className="w-6 h-6" />
            Chiama 346 748 3943
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Domande Frequenti
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "Quanto costa il preventivo?",
                a: "Il preventivo e sempre gratuito e senza impegno. Anche il sopralluogo, se necessario, e completamente gratuito.",
              },
              {
                q: "Quanto tempo ci vuole per ricevere il preventivo?",
                a: "Rispondiamo a tutte le richieste entro 2 ore lavorative. Per preventivi complessi che richiedono sopralluogo, fisseremo un appuntamento entro 48 ore.",
              },
              {
                q: "I prezzi del calcolatore sono definitivi?",
                a: "Il calcolatore fornisce una stima indicativa. Il prezzo finale viene confermato dopo aver valutato le specifiche esigenze e, se necessario, dopo un sopralluogo.",
              },
              {
                q: "Quali zone servite?",
                a: "Operiamo in tutta la provincia di Varese e Milano, oltre che nel Canton Ticino (Svizzera). Contattaci per verificare la copertura nella tua zona.",
              },
              {
                q: "Posso richiedere una pulizia urgente?",
                a: "Si, offriamo anche servizi di pulizia urgente con intervento entro 24-48 ore, compatibilmente con la disponibilita del nostro team.",
              },
            ].map((faq, i) => (
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
