"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, Mail } from "lucide-react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Servizi", href: "/servizi" },
  { name: "Aziende", href: "/aziende" },
  { name: "Chi Siamo", href: "/chi-siamo" },
  { name: "Contatti", href: "/contatti" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Top bar */}
      <div className="bg-[#1e3a5f] text-white py-2 text-sm hidden md:block">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href="tel:+393467483943" className="flex items-center gap-2 hover:text-[#0d9488] transition">
              <Phone className="w-4 h-4" />
              <span>346 748 3943</span>
            </a>
            <a href="mailto:info@bpcleaning.it" className="flex items-center gap-2 hover:text-[#0d9488] transition">
              <Mail className="w-4 h-4" />
              <span>info@bpcleaning.it</span>
            </a>
          </div>
          <div className="text-[#0d9488] font-medium">
            Preventivo gratuito entro 2 ore!
          </div>
        </div>
      </div>

      {/* Main header */}
      <nav className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo.png"
              alt="BP Cleaning srl Multiservice"
              className="h-16 w-auto md:h-20"
            />
          </Link>

          {/* Desktop navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-[#0077b6] font-medium transition"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="/preventivo"
              className="bg-[#f97316] hover:bg-[#ea580c] text-white px-6 py-3 rounded-lg font-semibold transition shadow-lg hover:shadow-xl"
            >
              Preventivo Gratuito
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden p-2 text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t pt-4">
            <div className="flex flex-col gap-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-[#0077b6] font-medium transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/preventivo"
                className="bg-[#f97316] hover:bg-[#ea580c] text-white px-6 py-3 rounded-lg font-semibold transition text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Preventivo Gratuito
              </Link>
              <div className="flex flex-col gap-2 pt-4 border-t text-sm">
                <a href="tel:+393467483943" className="flex items-center gap-2 text-gray-600">
                  <Phone className="w-4 h-4" />
                  <span>346 748 3943</span>
                </a>
                <a href="mailto:info@bpcleaning.it" className="flex items-center gap-2 text-gray-600">
                  <Mail className="w-4 h-4" />
                  <span>info@bpcleaning.it</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
