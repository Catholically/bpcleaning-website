"use client";

import { MessageCircle } from "lucide-react";
import { trackWhatsAppClick } from "@/lib/analytics";

export default function WhatsAppButton() {
  const phoneNumber = "393467483943"; // BP Cleaning WhatsApp
  const message = encodeURIComponent("Ciao, vorrei richiedere un preventivo per i vostri servizi di pulizia.");

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      onClick={trackWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#128C7E] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
      aria-label="Contattaci su WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-white text-gray-800 px-3 py-2 rounded-lg shadow-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        Scrivici su WhatsApp
      </span>
    </a>
  );
}
