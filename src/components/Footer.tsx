import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const services = [
  { name: "Pulizie Civili", href: "/servizi/pulizie-civili" },
  { name: "Pulizie Industriali", href: "/servizi/pulizie-industriali" },
  { name: "Sanificazioni", href: "/servizi/sanificazioni" },
  { name: "Disinfestazioni", href: "/servizi/disinfestazioni" },
  { name: "Trattamento Pavimenti", href: "/servizi/trattamento-pavimenti" },
  { name: "Aree Verdi", href: "/servizi/aree-verdi" },
];

const areas = [
  "Varese e provincia",
  "Milano",
  "Monza Brianza",
  "Svizzera",
  "Como",
];

export default function Footer() {
  return (
    <footer className="bg-[#1e3a5f] text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center p-2">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/drop.png"
                  alt="BP Cleaning"
                  className="h-10 w-auto"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-semibold text-white">BP Cleaning srl</span>
                <span className="text-sm text-gray-300">Multiservice</span>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Impresa di pulizie professionali con oltre 18 anni di esperienza.
              Serviamo privati e aziende nelle province di Varese e Milano.
            </p>
            <div className="flex items-center gap-2 text-[#0d9488] font-semibold">
              <Clock className="w-4 h-4" />
              <span>Preventivo entro 2 ore</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Servizi</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-gray-300 hover:text-[#0d9488] transition"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Zone Servite</h3>
            <ul className="space-y-2">
              {areas.map((area) => (
                <li key={area} className="text-gray-300">
                  {area}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contatti</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+393467483943"
                  className="flex items-center gap-2 text-gray-300 hover:text-[#0d9488] transition"
                >
                  <Phone className="w-4 h-4" />
                  <span>346 748 3943</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+390332143240"
                  className="flex items-center gap-2 text-gray-300 hover:text-[#0d9488] transition"
                >
                  <Phone className="w-4 h-4" />
                  <span>0332 1432406</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@bpcleaning.it"
                  className="flex items-center gap-2 text-gray-300 hover:text-[#0d9488] transition"
                >
                  <Mail className="w-4 h-4" />
                  <span>info@bpcleaning.it</span>
                </a>
              </li>
              <li className="flex items-start gap-2 text-gray-300">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <div className="text-sm">
                  <span className="block font-medium text-white">Sede Operativa</span>
                  <span className="block">Via Campagna 80</span>
                  <span className="block">21056 Induno Olona (VA)</span>
                  <span className="block text-xs mt-1 text-gray-400">Su appuntamento</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-600 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} BP Cleaning SRL - P.IVA 03661340129 - Sede Legale: Piazza Giovine Italia 4, 21100 Varese
          </p>
          <div className="flex gap-4 text-sm">
            <Link href="/privacy" className="text-gray-400 hover:text-white transition">
              Privacy Policy
            </Link>
            <Link href="/cookie" className="text-gray-400 hover:text-white transition">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
