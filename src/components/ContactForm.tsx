"use client";

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
  privacy: boolean;
}

const services = [
  "Pulizie civili (casa/appartamento)",
  "Pulizie condominio",
  "Pulizie ufficio/azienda",
  "Pulizie industriali",
  "Sanificazione",
  "Disinfestazione",
  "Trattamento pavimenti",
  "Manutenzione aree verdi",
  "Altro",
];

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
    privacy: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulazione invio - in produzione connettere a API/Supabase
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Form submitted:", formData);

    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Richiesta Inviata!</h3>
        <p className="text-gray-600 mb-4">
          Grazie per averci contattato. Ti risponderemo entro 2 ore lavorative.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setFormData({
              name: "",
              email: "",
              phone: "",
              company: "",
              service: "",
              message: "",
              privacy: false,
            });
          }}
          className="text-[#0d9488] hover:underline"
        >
          Invia un&apos;altra richiesta
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
      <div className="space-y-5">
        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Nome e Cognome *
          </label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0d9488] focus:border-transparent transition"
            placeholder="Mario Rossi"
          />
        </div>

        {/* Email & Phone */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email *
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0d9488] focus:border-transparent transition"
              placeholder="mario@esempio.it"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Telefono *
            </label>
            <input
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0d9488] focus:border-transparent transition"
              placeholder="333 1234567"
            />
          </div>
        </div>

        {/* Company (optional) */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Azienda <span className="text-gray-400">(opzionale)</span>
          </label>
          <input
            type="text"
            value={formData.company}
            onChange={(e) => setFormData((prev) => ({ ...prev, company: e.target.value }))}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0d9488] focus:border-transparent transition"
            placeholder="Nome azienda"
          />
        </div>

        {/* Service */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Servizio richiesto *
          </label>
          <select
            required
            value={formData.service}
            onChange={(e) => setFormData((prev) => ({ ...prev, service: e.target.value }))}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0d9488] focus:border-transparent transition bg-white"
          >
            <option value="">Seleziona un servizio</option>
            {services.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Descrivi le tue esigenze
          </label>
          <textarea
            rows={4}
            value={formData.message}
            onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0d9488] focus:border-transparent transition resize-none"
            placeholder="Descrivi il tipo di pulizia, la metratura, la frequenza desiderata o altre informazioni utili..."
          />
        </div>

        {/* Privacy */}
        <div className="flex items-start gap-3">
          <input
            type="checkbox"
            id="privacy"
            required
            checked={formData.privacy}
            onChange={(e) => setFormData((prev) => ({ ...prev, privacy: e.target.checked }))}
            className="mt-1 w-4 h-4 text-[#0d9488] border-gray-300 rounded focus:ring-[#0d9488]"
          />
          <label htmlFor="privacy" className="text-sm text-gray-600">
            Accetto la{" "}
            <a href="/privacy" className="text-[#0d9488] hover:underline">
              Privacy Policy
            </a>{" "}
            e acconsento al trattamento dei miei dati per ricevere un preventivo. *
          </label>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#f97316] hover:bg-[#ea580c] text-white px-6 py-4 rounded-lg font-semibold transition flex items-center justify-center gap-2 disabled:opacity-50"
        >
          {loading ? (
            <span>Invio in corso...</span>
          ) : (
            <>
              <Send className="w-5 h-5" />
              Invia Richiesta
            </>
          )}
        </button>
      </div>
    </form>
  );
}
