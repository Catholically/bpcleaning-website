"use client";

import { useState } from "react";
import { Building2, Home, Building, Factory, Calculator, Send, CheckCircle } from "lucide-react";

type ServiceType = "casa" | "ufficio" | "condominio" | "industriale" | null;
type Frequency = "una_tantum" | "settimanale" | "quindicinale" | "mensile" | null;

interface FormData {
  serviceType: ServiceType;
  sqm: number;
  frequency: Frequency;
  cap: string;
  name: string;
  phone: string;
  email: string;
}

const serviceTypes = [
  { id: "casa" as const, label: "Casa", icon: Home, pricePerSqm: 2.5 },
  { id: "ufficio" as const, label: "Ufficio", icon: Building2, pricePerSqm: 2.0 },
  { id: "condominio" as const, label: "Condominio", icon: Building, pricePerSqm: 1.8 },
  { id: "industriale" as const, label: "Industriale", icon: Factory, pricePerSqm: 1.5 },
];

const frequencies = [
  { id: "una_tantum" as const, label: "Una tantum", discount: 0 },
  { id: "settimanale" as const, label: "Settimanale", discount: 0.25 },
  { id: "quindicinale" as const, label: "Quindicinale", discount: 0.15 },
  { id: "mensile" as const, label: "Mensile", discount: 0.10 },
];

const coveredCAPs = ["21100", "21013", "21052", "21053", "20121", "20122", "20123", "20124", "20125", "20126", "20127", "20128", "20129", "20131", "20132", "20133", "20134", "20135", "20136", "20137", "20138", "20139", "20141", "20142", "20143", "20144", "20145", "20146", "20147", "20148", "20149", "20151", "20152", "20153", "20154", "20155", "20156", "20157", "20158", "20159", "20161", "20162"];

export default function QuoteCalculator() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    serviceType: null,
    sqm: 80,
    frequency: null,
    cap: "",
    name: "",
    phone: "",
    email: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [capError, setCapError] = useState("");

  const calculatePrice = (): { min: number; max: number } | null => {
    if (!formData.serviceType || !formData.frequency) return null;

    const service = serviceTypes.find(s => s.id === formData.serviceType);
    const freq = frequencies.find(f => f.id === formData.frequency);

    if (!service || !freq) return null;

    const basePrice = formData.sqm * service.pricePerSqm;
    const discountedPrice = basePrice * (1 - freq.discount);

    return {
      min: Math.round(discountedPrice * 0.85),
      max: Math.round(discountedPrice * 1.15),
    };
  };

  const validateCAP = (cap: string): boolean => {
    if (cap.length !== 5) return false;
    // Per semplicità, accettiamo tutti i CAP che iniziano con 21 (Varese) o 20 (Milano)
    return cap.startsWith("21") || cap.startsWith("20");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Simulazione invio - in produzione connettere a Supabase/API
    console.log("Submitted:", formData);
    setSubmitted(true);
  };

  const price = calculatePrice();

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Richiesta Inviata!</h3>
        <p className="text-gray-600 mb-4">
          Ti contatteremo entro 2 ore con un preventivo dettagliato.
        </p>
        {price && (
          <div className="bg-[#0d9488]/10 rounded-lg p-4 mb-4">
            <p className="text-sm text-gray-600">Stima indicativa:</p>
            <p className="text-2xl font-bold text-[#0d9488]">€{price.min} - €{price.max}</p>
          </div>
        )}
        <button
          onClick={() => {
            setSubmitted(false);
            setStep(1);
            setFormData({
              serviceType: null,
              sqm: 80,
              frequency: null,
              cap: "",
              name: "",
              phone: "",
              email: "",
            });
          }}
          className="text-[#0d9488] hover:underline"
        >
          Nuova richiesta
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
      {/* Progress bar */}
      <div className="bg-gray-100 h-2">
        <div
          className="bg-[#0d9488] h-full transition-all duration-300"
          style={{ width: `${(step / 4) * 100}%` }}
        />
      </div>

      <div className="p-6 md:p-8">
        {/* Step 1: Service Type */}
        {step === 1 && (
          <div className="animate-fade-in-up">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Che tipo di pulizia ti serve?</h3>
            <p className="text-gray-600 mb-6">Seleziona il tipo di ambiente</p>

            <div className="grid grid-cols-2 gap-4">
              {serviceTypes.map((service) => {
                const Icon = service.icon;
                return (
                  <button
                    key={service.id}
                    onClick={() => {
                      setFormData(prev => ({ ...prev, serviceType: service.id }));
                      setStep(2);
                    }}
                    className={`p-6 rounded-xl border-2 transition-all hover:border-[#0d9488] hover:bg-[#0d9488]/5 ${
                      formData.serviceType === service.id
                        ? "border-[#0d9488] bg-[#0d9488]/10"
                        : "border-gray-200"
                    }`}
                  >
                    <Icon className="w-8 h-8 text-[#0d9488] mx-auto mb-2" />
                    <span className="font-medium text-gray-900">{service.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Step 2: Size & Frequency */}
        {step === 2 && (
          <div className="animate-fade-in-up">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Dimensioni e frequenza</h3>
            <p className="text-gray-600 mb-6">Aiutaci a stimare il preventivo</p>

            <div className="space-y-6">
              {/* Size slider */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Metratura: <span className="text-[#0d9488] font-bold">{formData.sqm} mq</span>
                </label>
                <input
                  type="range"
                  min="20"
                  max="500"
                  step="10"
                  value={formData.sqm}
                  onChange={(e) => setFormData(prev => ({ ...prev, sqm: parseInt(e.target.value) }))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#0d9488]"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>20 mq</span>
                  <span>500+ mq</span>
                </div>
              </div>

              {/* Frequency */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Frequenza
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {frequencies.map((freq) => (
                    <button
                      key={freq.id}
                      onClick={() => setFormData(prev => ({ ...prev, frequency: freq.id }))}
                      className={`p-3 rounded-lg border-2 transition-all text-sm ${
                        formData.frequency === freq.id
                          ? "border-[#0d9488] bg-[#0d9488]/10"
                          : "border-gray-200 hover:border-[#0d9488]"
                      }`}
                    >
                      <span className="font-medium">{freq.label}</span>
                      {freq.discount > 0 && (
                        <span className="block text-xs text-[#0d9488]">
                          -{Math.round(freq.discount * 100)}%
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <button
                onClick={() => setStep(1)}
                className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition"
              >
                Indietro
              </button>
              <button
                onClick={() => formData.frequency && setStep(3)}
                disabled={!formData.frequency}
                className="flex-1 px-6 py-3 bg-[#0d9488] text-white rounded-lg font-semibold hover:bg-[#0f766e] transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Continua
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Location */}
        {step === 3 && (
          <div className="animate-fade-in-up">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Dove ti trovi?</h3>
            <p className="text-gray-600 mb-6">Verifichiamo la copertura nella tua zona</p>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                CAP
              </label>
              <input
                type="text"
                maxLength={5}
                placeholder="Es. 21100"
                value={formData.cap}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, "");
                  setFormData(prev => ({ ...prev, cap: value }));
                  setCapError("");
                }}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0d9488] focus:border-transparent transition"
              />
              {capError && (
                <p className="text-red-500 text-sm mt-1">{capError}</p>
              )}
            </div>

            {/* Price preview */}
            {price && formData.cap.length === 5 && validateCAP(formData.cap) && (
              <div className="mt-6 bg-[#0d9488]/10 rounded-xl p-6 text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Calculator className="w-5 h-5 text-[#0d9488]" />
                  <span className="text-sm font-medium text-gray-600">Stima indicativa</span>
                </div>
                <p className="text-3xl font-bold text-[#0d9488]">
                  €{price.min} - €{price.max}
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  Prezzo finale dopo sopralluogo gratuito
                </p>
              </div>
            )}

            <div className="flex gap-3 mt-6">
              <button
                onClick={() => setStep(2)}
                className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition"
              >
                Indietro
              </button>
              <button
                onClick={() => {
                  if (!validateCAP(formData.cap)) {
                    setCapError("Insereisci un CAP valido (province VA o MI)");
                    return;
                  }
                  setStep(4);
                }}
                disabled={formData.cap.length !== 5}
                className="flex-1 px-6 py-3 bg-[#0d9488] text-white rounded-lg font-semibold hover:bg-[#0f766e] transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Continua
              </button>
            </div>
          </div>
        )}

        {/* Step 4: Contact */}
        {step === 4 && (
          <form onSubmit={handleSubmit} className="animate-fade-in-up">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Ultimo passo!</h3>
            <p className="text-gray-600 mb-6">Lasciaci i tuoi contatti per ricevere il preventivo</p>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nome e Cognome *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0d9488] focus:border-transparent transition"
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
                  onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0d9488] focus:border-transparent transition"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0d9488] focus:border-transparent transition"
                />
              </div>
            </div>

            {/* Final price */}
            {price && (
              <div className="mt-6 bg-gradient-to-r from-[#0d9488] to-[#0f766e] rounded-xl p-6 text-white">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm opacity-90">La tua stima:</p>
                    <p className="text-3xl font-bold">€{price.min} - €{price.max}</p>
                  </div>
                  <div className="text-right text-sm opacity-90">
                    <p>{formData.sqm} mq</p>
                    <p>{frequencies.find(f => f.id === formData.frequency)?.label}</p>
                  </div>
                </div>
              </div>
            )}

            <div className="flex gap-3 mt-6">
              <button
                type="button"
                onClick={() => setStep(3)}
                className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition"
              >
                Indietro
              </button>
              <button
                type="submit"
                className="flex-1 px-6 py-3 bg-[#f97316] text-white rounded-lg font-semibold hover:bg-[#ea580c] transition flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Richiedi Preventivo
              </button>
            </div>

            <p className="text-xs text-gray-500 text-center mt-4">
              Cliccando accetti la nostra Privacy Policy. Ti contatteremo entro 2 ore.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
