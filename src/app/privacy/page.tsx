import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | BP Cleaning",
  description: "Informativa sulla privacy di BP Cleaning SRL. Come trattiamo i tuoi dati personali in conformità al GDPR.",
};

export default function PrivacyPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-[#1e3a5f] to-[#0f172a] text-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold">Privacy Policy</h1>
          <p className="text-gray-300 mt-2">Ultimo aggiornamento: Gennaio 2026</p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 prose prose-gray max-w-none">

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Titolare del Trattamento</h2>
          <p className="text-gray-600 mb-4">
            Il Titolare del trattamento dei dati personali è:<br />
            <strong>BP Cleaning SRL</strong><br />
            Sede Legale: Piazza Giovine Italia 4, 21100 Varese<br />
            P.IVA: 03661340129<br />
            Email: <a href="mailto:info@bpcleaning.it" className="text-[#0d9488]">info@bpcleaning.it</a><br />
            Telefono: 346 748 3943
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Tipologie di Dati Raccolti</h2>
          <p className="text-gray-600 mb-4">
            I dati personali raccolti dal sito, in modo autonomo o tramite terze parti, includono:
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-4">
            <li>Dati di navigazione (indirizzo IP, browser, sistema operativo)</li>
            <li>Dati forniti volontariamente dall'utente (nome, cognome, email, telefono, indirizzo)</li>
            <li>Cookie e dati di utilizzo</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Finalità del Trattamento</h2>
          <p className="text-gray-600 mb-4">
            I dati personali vengono trattati per le seguenti finalità:
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-4">
            <li>Rispondere alle richieste di preventivo e contatto</li>
            <li>Fornire i servizi richiesti</li>
            <li>Adempiere agli obblighi di legge</li>
            <li>Migliorare l'esperienza di navigazione sul sito</li>
            <li>Analisi statistiche anonime sull'utilizzo del sito</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Base Giuridica del Trattamento</h2>
          <p className="text-gray-600 mb-4">
            Il trattamento dei dati personali si basa su:
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-4">
            <li><strong>Consenso:</strong> per l'invio di comunicazioni commerciali e marketing</li>
            <li><strong>Esecuzione di un contratto:</strong> per la fornitura dei servizi richiesti</li>
            <li><strong>Obbligo legale:</strong> per adempiere a obblighi di legge</li>
            <li><strong>Interesse legittimo:</strong> per migliorare i nostri servizi</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Modalità di Trattamento</h2>
          <p className="text-gray-600 mb-4">
            I dati personali sono trattati con strumenti informatici e/o cartacei, con modalità organizzative
            e logiche strettamente correlate alle finalità indicate. Il trattamento avviene presso la sede
            del Titolare e in ogni altro luogo in cui le parti coinvolte nel trattamento siano localizzate.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Conservazione dei Dati</h2>
          <p className="text-gray-600 mb-4">
            I dati personali saranno conservati per il tempo necessario a conseguire le finalità per le quali
            sono stati raccolti e comunque per un periodo non superiore a quanto previsto dalla normativa vigente.
            In particolare:
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-4">
            <li>Dati contrattuali: 10 anni dalla cessazione del rapporto</li>
            <li>Dati di fatturazione: 10 anni come previsto dalla normativa fiscale</li>
            <li>Dati di contatto per marketing: fino alla revoca del consenso</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Diritti dell'Interessato</h2>
          <p className="text-gray-600 mb-4">
            Ai sensi degli artt. 15-22 del GDPR, l'interessato ha diritto di:
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-4">
            <li>Accedere ai propri dati personali</li>
            <li>Chiedere la rettifica o la cancellazione dei dati</li>
            <li>Chiedere la limitazione del trattamento</li>
            <li>Opporsi al trattamento</li>
            <li>Richiedere la portabilità dei dati</li>
            <li>Revocare il consenso in qualsiasi momento</li>
            <li>Proporre reclamo all'Autorità Garante per la protezione dei dati personali</li>
          </ul>
          <p className="text-gray-600 mb-4">
            Per esercitare i propri diritti, l'interessato può inviare una richiesta a{" "}
            <a href="mailto:info@bpcleaning.it" className="text-[#0d9488]">info@bpcleaning.it</a>
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. Comunicazione e Diffusione dei Dati</h2>
          <p className="text-gray-600 mb-4">
            I dati personali non saranno diffusi, ma potranno essere comunicati a:
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-4">
            <li>Soggetti che necessitano di accedervi per finalità ausiliarie al rapporto contrattuale</li>
            <li>Consulenti e professionisti</li>
            <li>Autorità competenti per adempimenti di obblighi di legge</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">9. Trasferimento dei Dati</h2>
          <p className="text-gray-600 mb-4">
            I dati personali non vengono trasferiti al di fuori dello Spazio Economico Europeo (SEE).
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">10. Cookie</h2>
          <p className="text-gray-600 mb-4">
            Per informazioni dettagliate sui cookie utilizzati da questo sito, consulta la nostra{" "}
            <Link href="/cookie" className="text-[#0d9488]">Cookie Policy</Link>.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">11. Modifiche alla Privacy Policy</h2>
          <p className="text-gray-600 mb-4">
            Il Titolare si riserva il diritto di apportare modifiche alla presente privacy policy in
            qualunque momento, dandone pubblicità agli utenti su questa pagina.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Riferimenti Normativi</h2>
          <p className="text-gray-600 mb-4">
            La presente informativa è redatta in conformità a:
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-4">
            <li>Regolamento (UE) 2016/679 (GDPR)</li>
            <li>D.Lgs. 196/2003 (Codice Privacy) come modificato dal D.Lgs. 101/2018</li>
            <li>Provvedimenti del Garante per la protezione dei dati personali</li>
          </ul>

        </div>
      </section>
    </>
  );
}
