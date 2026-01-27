import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // ============================================
      // REDIRECT ARTICOLI VECCHIO SITO (52 articoli)
      // ============================================

      // Febbraio 2025
      {
        source: '/2025/02/26/pulizia-uffici-varese-pulito-e-professionale',
        destination: '/varese/pulizie-uffici',
        permanent: true,
      },
      {
        source: '/2025/02/25/pulizie-condominiali-varese-servizi-professionali',
        destination: '/varese/pulizie-condomini',
        permanent: true,
      },
      {
        source: '/2025/02/24/impresa-di-pulizie-luino-servizi-professionali',
        destination: '/varese',
        permanent: true,
      },
      {
        source: '/2025/02/24/impresa-di-pulizie-villa-guardia-servizi-professionali',
        destination: '/como',
        permanent: true,
      },
      {
        source: '/2025/02/24/impresa-di-pulizie-olgiate-comasco-servizi-di-qualita',
        destination: '/como',
        permanent: true,
      },
      {
        source: '/2025/02/24/impresa-di-pulizie-besozzo-la-scelta-giusta',
        destination: '/besozzo',
        permanent: true,
      },
      {
        source: '/2025/02/24/impresa-di-pulizie-tradate-la-soluzione-professionale',
        destination: '/tradate',
        permanent: true,
      },
      {
        source: '/2025/02/24/impresa-di-pulizie-gallarate-servizi-professionali-e-su-misura',
        destination: '/gallarate',
        permanent: true,
      },
      {
        source: '/2025/02/24/impresa-di-pulizie-a-como-servizi-professionali',
        destination: '/como',
        permanent: true,
      },
      {
        source: '/2025/02/24/impresa-di-pulizie-induno-olona-servizi-professionali',
        destination: '/induno-olona',
        permanent: true,
      },

      // Marzo 2025
      {
        source: '/2025/03/29/preventivo-pulizie-varese-il-tuo-preventivo-con-bp-cleaning',
        destination: '/preventivo',
        permanent: true,
      },
      {
        source: '/2025/03/26/trattamento-pavimenti-como-soluzioni-per-pavimenti-perfetti',
        destination: '/como/trattamento-pavimenti',
        permanent: true,
      },
      {
        source: '/2025/03/23/trattamento-pavimenti-varese-soluzioni-per-pavimenti-impeccabili',
        destination: '/varese/trattamento-pavimenti',
        permanent: true,
      },
      {
        source: '/2025/03/22/pulizie-condomini-como-servizi-professionali',
        destination: '/como/pulizie-condomini',
        permanent: true,
      },
      {
        source: '/2025/03/21/pulizie-condomini-varese-servizi-professionali',
        destination: '/varese/pulizie-condomini',
        permanent: true,
      },
      {
        source: '/2025/03/20/pulizia-studi-professionali-como-servizi-di-igiene-e-sanificazione',
        destination: '/como/pulizie-uffici',
        permanent: true,
      },
      {
        source: '/2025/03/19/pulizia-studi-professionali-varese-servizi-di-igiene-e-sanificazione',
        destination: '/varese/pulizie-uffici',
        permanent: true,
      },
      {
        source: '/2025/03/18/pulizia-negozi-como-servizi-professionali',
        destination: '/como/pulizie-negozi',
        permanent: true,
      },
      {
        source: '/2025/03/17/pulizia-negozi-varese-servizi-per-il-tuo-punto-vendita',
        destination: '/varese/pulizie-negozi',
        permanent: true,
      },
      {
        source: '/2025/03/17/pulizia-uffici-como-servizi-professionali',
        destination: '/como/pulizie-uffici',
        permanent: true,
      },

      // Aprile 2025
      {
        source: '/2025/04/19/pulizia-condomini-malnate',
        destination: '/malnate/pulizie-condomini',
        permanent: true,
      },
      {
        source: '/2025/04/16/impresa-di-pulizie-a-malnate',
        destination: '/malnate',
        permanent: true,
      },
      {
        source: '/2025/04/13/impresa-di-pulizie-a-appiano-gentile',
        destination: '/como',
        permanent: true,
      },
      {
        source: '/2025/04/10/impresa-di-pulizie-a-gavirate-bp-cleaning-al-tuo-servizio',
        destination: '/gavirate',
        permanent: true,
      },
      {
        source: '/2025/04/07/pulizia-vetri-gavirate-servizio-professionale',
        destination: '/gavirate/pulizia-vetri',
        permanent: true,
      },
      {
        source: '/2025/04/04/pulizia-vetri-gallarate-servizio-professionale',
        destination: '/gallarate/pulizia-vetri',
        permanent: true,
      },
      {
        source: '/2025/04/01/preventivo-pulizie-como-il-tuo-preventivo-con-bp-cleaning',
        destination: '/preventivo',
        permanent: true,
      },

      // Maggio 2025
      {
        source: '/2025/05/31/pulizia-di-studi-medici-e-dentistici-igiene-e-sicurezza',
        destination: '/servizi/pulizie-studi-medici',
        permanent: true,
      },
      {
        source: '/2025/05/28/trattamento-superfici-varese-protezione-e-valorizzazione',
        destination: '/varese/trattamento-pavimenti',
        permanent: true,
      },
      {
        source: '/2025/05/25/sanificazione-ad-ozono-varese-aria-pulita-e-ambienti-sicuri',
        destination: '/varese/sanificazione',
        permanent: true,
      },
      {
        source: '/2025/05/23/interventi-di-pulizia-dopo-cantiere-varese-il-servizio-professionale-di-bp-cleaning',
        destination: '/varese/pulizie-post-cantiere',
        permanent: true,
      },

      // Giugno 2025
      {
        source: '/2025/06/03/manutenzione-aree-verdi-varese-cura-professionale-per-giardini',
        destination: '/varese/aree-verdi',
        permanent: true,
      },

      // Ottobre 2025
      {
        source: '/2025/10/31/pulizie-professionali-gallarate-servizi-affidabili-e-di-qualita',
        destination: '/gallarate',
        permanent: true,
      },
      {
        source: '/2025/10/28/impresa-di-pulizia-gallarate-servizi-professionali-e-affidabili',
        destination: '/gallarate',
        permanent: true,
      },
      {
        source: '/2025/10/26/impresa-di-pulizia-besozzo-risultati-garantiti',
        destination: '/besozzo',
        permanent: true,
      },
      {
        source: '/2025/10/24/impresa-di-pulizia-olgiate-comasco-qualita-e-professionalita',
        destination: '/como',
        permanent: true,
      },
      {
        source: '/2025/10/22/impresa-di-pulizia-tradate-professionalita-e-qualita-per-ambienti-impeccabili',
        destination: '/tradate',
        permanent: true,
      },
      {
        source: '/2025/10/20/impresa-di-pulizia-villa-guardia',
        destination: '/como',
        permanent: true,
      },
      {
        source: '/2025/10/18/impresa-di-pulizia-luino-servizi-professionali-impeccabili',
        destination: '/varese',
        permanent: true,
      },
      {
        source: '/2025/10/16/impresa-di-pulizie-a-induno-olona',
        destination: '/induno-olona',
        permanent: true,
      },

      // Novembre 2025
      {
        source: '/2025/11/27/disinfestazioni-complete-proteggi-la-tua-casa-e-la-tua-azienda',
        destination: '/servizi/disinfestazioni',
        permanent: true,
      },
      {
        source: '/2025/11/24/trattamento-marmo-fogliaro',
        destination: '/servizi/trattamento-pavimenti',
        permanent: true,
      },
      {
        source: '/2025/11/20/trattamento-marmo-arcisate-eleganza-e-protezione-duratura',
        destination: '/arcisate',
        permanent: true,
      },
      {
        source: '/2025/11/17/trattamento-marmo-como-la-soluzione-professionale-per-te',
        destination: '/como/trattamento-pavimenti',
        permanent: true,
      },
      {
        source: '/2025/11/13/trattamento-marmo-induno-olona-eleganza-e-protezione-totale',
        destination: '/induno-olona/trattamento-pavimenti',
        permanent: true,
      },
      {
        source: '/2025/11/10/trattamento-marmo-lucentezza-e-protezione-professionale',
        destination: '/servizi/trattamento-pavimenti',
        permanent: true,
      },
      {
        source: '/2025/11/08/sanificazione-ambientale-bisuschio-igiene-e-sicurezza-garantite',
        destination: '/bisuschio',
        permanent: true,
      },
      {
        source: '/2025/11/05/importanza-della-sanificazione-ambientale-sicurezza-e-igiene',
        destination: '/servizi/sanificazioni',
        permanent: true,
      },
      {
        source: '/2025/11/02/sanificazione-ambientale-induno-olona',
        destination: '/induno-olona/sanificazione',
        permanent: true,
      },

      // Dicembre 2025
      {
        source: '/2025/12/29/pulizia-uffici-villa-guardia-per-aziende-moderne-efficienti',
        destination: '/como/pulizie-uffici',
        permanent: true,
      },
      {
        source: '/2025/12/25/pulizia-uffici-besozzo-per-aziende-professionali-locali-sicure',
        destination: '/besozzo/pulizie-uffici',
        permanent: true,
      },
      {
        source: '/2025/12/22/pulizia-uffici-como-servizi-professionali-per-ambienti-di-lavoro-impeccabili',
        destination: '/como/pulizie-uffici',
        permanent: true,
      },
      {
        source: '/2025/12/18/pulizia-uffici-induno-olona',
        destination: '/induno-olona/pulizie-uffici',
        permanent: true,
      },
      {
        source: '/2025/12/15/sanificazione-ad-ozono',
        destination: '/servizi/sanificazioni',
        permanent: true,
      },
      {
        source: '/2025/12/11/sanificazione-ambientale-ed-ecologia-gallarate',
        destination: '/gallarate/sanificazione',
        permanent: true,
      },
      {
        source: '/2025/12/08/sanificazione-ambientale-ed-ecologia-induno-olona',
        destination: '/induno-olona/sanificazione',
        permanent: true,
      },
      {
        source: '/2025/12/04/sanificazione-ambientale-ed-ecologia-como-un-servizio-essenziale',
        destination: '/como/sanificazione',
        permanent: true,
      },
      {
        source: '/2025/12/01/sanificazione-ambientale-ed-ecologia-un-equilibrio-necessario',
        destination: '/servizi/sanificazioni',
        permanent: true,
      },

      // Gennaio 2026
      {
        source: '/2026/01/19/pulizie-aziendali-tradate-professionali-per-uffici-moderni-affidabili',
        destination: '/tradate/pulizie-uffici',
        permanent: true,
      },
      {
        source: '/2026/01/15/pulizie-aziendali-professionali-per-ambienti-di-lavoro-efficienti',
        destination: '/aziende',
        permanent: true,
      },
      {
        source: '/2026/01/12/il-multiservice-como-per-aziende-moderne-efficienti-affidabili',
        destination: '/como',
        permanent: true,
      },
      {
        source: '/2026/01/08/il-multiservice-varese-per-soluzioni-aziendali-complete-affidabili',
        destination: '/varese',
        permanent: true,
      },
      {
        source: '/2026/01/05/il-multiservice-a-portata-di-tutti-per-aziende-moderne',
        destination: '/aziende',
        permanent: true,
      },
      {
        source: '/2026/01/01/il-multiservice-induno-olona-per-aziende-ambienti-efficienti',
        destination: '/induno-olona',
        permanent: true,
      },

      // Catch-all per URL con trailing slash
      {
        source: '/2025/:path*/',
        destination: '/2025/:path*',
        permanent: true,
      },
      {
        source: '/2026/:path*/',
        destination: '/2026/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
