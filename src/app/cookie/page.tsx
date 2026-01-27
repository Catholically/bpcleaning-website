import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cookie Policy | BP Cleaning",
  description: "Informativa sui cookie utilizzati dal sito BP Cleaning SRL in conformità al GDPR e alle linee guida del Garante Privacy.",
};

export default function CookiePage() {
  return (
    <>
      <section className="bg-gradient-to-br from-[#1e3a5f] to-[#0f172a] text-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold">Cookie Policy</h1>
          <p className="text-gray-300 mt-2">Ultimo aggiornamento: Gennaio 2026</p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 prose prose-gray max-w-none">

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Cosa sono i Cookie</h2>
          <p className="text-gray-600 mb-4">
            I cookie sono piccoli file di testo che i siti visitati inviano al browser dell'utente,
            dove vengono memorizzati, per poi essere ritrasmessi agli stessi siti alla visita successiva.
            I cookie sono utilizzati per diverse finalità, hanno caratteristiche diverse e possono essere
            utilizzati sia dal titolare del sito che si sta visitando, sia da terze parti.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Tipologie di Cookie Utilizzati</h2>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Cookie Tecnici (Necessari)</h3>
          <p className="text-gray-600 mb-4">
            Questi cookie sono essenziali per il corretto funzionamento del sito web. Permettono la
            navigazione e l'utilizzo delle funzionalità di base. Senza questi cookie, il sito non
            può funzionare correttamente. Non richiedono il consenso dell'utente.
          </p>
          <div className="bg-gray-50 rounded-lg p-4 mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2 text-gray-700">Nome</th>
                  <th className="text-left py-2 text-gray-700">Finalità</th>
                  <th className="text-left py-2 text-gray-700">Durata</th>
                </tr>
              </thead>
              <tbody className="text-gray-600">
                <tr className="border-b">
                  <td className="py-2">cookie_consent</td>
                  <td className="py-2">Memorizza le preferenze sui cookie</td>
                  <td className="py-2">1 anno</td>
                </tr>
                <tr>
                  <td className="py-2">session_id</td>
                  <td className="py-2">Gestione della sessione utente</td>
                  <td className="py-2">Sessione</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Cookie Analitici</h3>
          <p className="text-gray-600 mb-4">
            Questi cookie ci permettono di contare le visite e le fonti di traffico per misurare e
            migliorare le prestazioni del nostro sito. Ci aiutano a capire quali pagine sono più o
            meno popolari e a vedere come i visitatori si muovono nel sito.
          </p>
          <div className="bg-gray-50 rounded-lg p-4 mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2 text-gray-700">Nome</th>
                  <th className="text-left py-2 text-gray-700">Provider</th>
                  <th className="text-left py-2 text-gray-700">Finalità</th>
                  <th className="text-left py-2 text-gray-700">Durata</th>
                </tr>
              </thead>
              <tbody className="text-gray-600">
                <tr className="border-b">
                  <td className="py-2">_ga</td>
                  <td className="py-2">Google Analytics</td>
                  <td className="py-2">Distingue gli utenti</td>
                  <td className="py-2">2 anni</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2">_ga_*</td>
                  <td className="py-2">Google Analytics</td>
                  <td className="py-2">Mantiene lo stato della sessione</td>
                  <td className="py-2">2 anni</td>
                </tr>
                <tr>
                  <td className="py-2">_gid</td>
                  <td className="py-2">Google Analytics</td>
                  <td className="py-2">Distingue gli utenti</td>
                  <td className="py-2">24 ore</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Gestione dei Cookie</h2>
          <p className="text-gray-600 mb-4">
            Al primo accesso al sito, viene mostrato un banner che consente di:
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-4">
            <li>Accettare tutti i cookie</li>
            <li>Rifiutare i cookie non necessari</li>
            <li>Personalizzare le preferenze</li>
          </ul>
          <p className="text-gray-600 mb-4">
            È possibile modificare le proprie preferenze in qualsiasi momento attraverso le
            impostazioni del browser o contattandoci.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Disabilitazione dei Cookie tramite Browser</h2>
          <p className="text-gray-600 mb-4">
            È possibile gestire i cookie anche attraverso le impostazioni del proprio browser.
            Di seguito i link alle istruzioni dei principali browser:
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-4">
            <li>
              <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-[#0d9488]">
                Google Chrome
              </a>
            </li>
            <li>
              <a href="https://support.mozilla.org/it/kb/protezione-antitracciamento-avanzata-firefox-desktop" target="_blank" rel="noopener noreferrer" className="text-[#0d9488]">
                Mozilla Firefox
              </a>
            </li>
            <li>
              <a href="https://support.apple.com/it-it/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-[#0d9488]">
                Safari
              </a>
            </li>
            <li>
              <a href="https://support.microsoft.com/it-it/microsoft-edge/eliminare-i-cookie-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-[#0d9488]">
                Microsoft Edge
              </a>
            </li>
          </ul>
          <p className="text-gray-600 mb-4">
            <strong>Nota:</strong> La disabilitazione dei cookie tecnici potrebbe compromettere alcune funzionalità del sito.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Cookie di Terze Parti</h2>
          <p className="text-gray-600 mb-4">
            Questo sito utilizza servizi di terze parti che potrebbero installare cookie. Per maggiori
            informazioni, consulta le privacy policy dei rispettivi servizi:
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-4">
            <li>
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#0d9488]">
                Google Analytics - Privacy Policy
              </a>
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Titolare del Trattamento</h2>
          <p className="text-gray-600 mb-4">
            <strong>BP Cleaning SRL</strong><br />
            Sede Legale: Piazza Giovine Italia 4, 21100 Varese<br />
            P.IVA: 03661340129<br />
            Email: <a href="mailto:info@bpcleaning.it" className="text-[#0d9488]">info@bpcleaning.it</a>
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Riferimenti Normativi</h2>
          <p className="text-gray-600 mb-4">
            La presente cookie policy è redatta in conformità a:
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-4">
            <li>Regolamento (UE) 2016/679 (GDPR)</li>
            <li>Direttiva 2002/58/CE (Direttiva ePrivacy)</li>
            <li>Provvedimento del Garante Privacy del 10 giugno 2021 - "Linee guida cookie e altri strumenti di tracciamento"</li>
            <li>D.Lgs. 196/2003 (Codice Privacy)</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Aggiornamenti</h2>
          <p className="text-gray-600 mb-4">
            La presente Cookie Policy può essere soggetta a modifiche. Ti invitiamo a consultare
            periodicamente questa pagina per essere sempre informato su come utilizziamo i cookie.
          </p>

          <div className="mt-8 pt-8 border-t">
            <p className="text-gray-600">
              Per maggiori informazioni sul trattamento dei tuoi dati personali, consulta la nostra{" "}
              <Link href="/privacy" className="text-[#0d9488]">Privacy Policy</Link>.
            </p>
          </div>

        </div>
      </section>
    </>
  );
}
