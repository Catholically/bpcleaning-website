export interface BlogPost {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  date: string;
  category: "guide" | "normativa" | "consigli-pratici";
  excerpt: string;
  readingTime: number;
  sections: { heading: string; content: string; list?: string[] }[];
  faqs: { q: string; a: string }[];
  internalLinks: { text: string; href: string }[];
}

export const categoryLabels: Record<BlogPost["category"], string> = {
  guide: "Guide",
  normativa: "Normativa",
  "consigli-pratici": "Consigli Pratici",
};

export const blogPosts: BlogPost[] = [
  {
    slug: "come-scegliere-impresa-pulizie",
    title: "Come scegliere un'impresa di pulizie professionale",
    metaTitle: "Come scegliere un'impresa di pulizie",
    metaDescription:
      "Guida completa per scegliere l'impresa di pulizie giusta: certificazioni, assicurazioni, referenze e contratti. Consigli pratici per privati e aziende.",
    date: "2026-02-18",
    category: "guide",
    excerpt:
      "Scegliere l'impresa di pulizie giusta non è semplice. Certificazioni, assicurazione, referenze: ecco i criteri fondamentali per fare la scelta migliore.",
    readingTime: 7,
    sections: [
      {
        heading: "Perché affidarsi a un'impresa di pulizie professionale",
        content:
          "Gestire la pulizia di un ufficio, un condominio o un'azienda richiede competenze specifiche, attrezzature professionali e prodotti adeguati. Un'impresa qualificata garantisce risultati costanti, rispetto delle normative igieniche e un risparmio di tempo significativo rispetto al fai-da-te o al personale non specializzato.",
      },
      {
        heading: "Le certificazioni da verificare",
        content:
          "Il primo aspetto da controllare sono le certificazioni. Un'impresa seria possiede almeno la certificazione ISO 9001 per la qualità del servizio. La ISO 45001 garantisce l'attenzione alla sicurezza dei lavoratori. Per ambienti sanitari o alimentari, verificate anche le certificazioni specifiche di settore.",
        list: [
          "ISO 9001 — Sistema di gestione della qualità",
          "ISO 45001 — Salute e sicurezza sul lavoro",
          "Iscrizione alla Camera di Commercio",
          "DURC regolare (Documento Unico di Regolarità Contributiva)",
        ],
      },
      {
        heading: "Assicurazione e coperture",
        content:
          "Un'impresa professionale deve avere una polizza RC (Responsabilità Civile) che copra eventuali danni durante il servizio. Chiedete sempre copia della polizza e verificate i massimali. Questo vi tutela da danni accidentali a pavimenti, arredi o attrezzature.",
      },
      {
        heading: "Referenze e esperienza nel settore",
        content:
          "Richiedete referenze da clienti simili al vostro caso. Un'impresa che opera da molti anni e serve clienti nel vostro settore conosce già le problematiche specifiche. BP Cleaning, ad esempio, vanta oltre 18 anni di esperienza con clienti che spaziano da condomini a strutture sanitarie.",
      },
      {
        heading: "Contratto e trasparenza dei costi",
        content:
          "Diffidate da preventivi troppo vaghi. Un buon contratto specifica nel dettaglio le attività incluse, la frequenza degli interventi, i prodotti utilizzati e le condizioni di recesso. Il prezzo più basso non è sempre il migliore: valutate il rapporto qualità-prezzo complessivo.",
        list: [
          "Elenco dettagliato delle attività",
          "Frequenza e orari degli interventi",
          "Prodotti e attrezzature utilizzati",
          "Clausole di recesso e rinnovo",
        ],
      },
      {
        heading: "Il sopralluogo: un passaggio fondamentale",
        content:
          "Un'impresa seria effettua sempre un sopralluogo gratuito prima di formulare il preventivo. Questo permette di valutare le superfici, le problematiche specifiche e di proporre la soluzione più adatta. Diffidate da chi fa preventivi solo telefonicamente per ambienti complessi.",
      },
    ],
    faqs: [
      {
        q: "Quanto costa un'impresa di pulizie professionale?",
        a: "I costi variano in base alla metratura, al tipo di servizio e alla frequenza. Per un ufficio di 100 mq con pulizia bisettimanale, i prezzi partono da circa 300-400€ al mese. Il modo migliore è richiedere un preventivo personalizzato gratuito.",
      },
      {
        q: "Come verifico se un'impresa di pulizie è affidabile?",
        a: "Controllate le certificazioni ISO, la polizza assicurativa RC, il DURC regolare e le referenze di clienti esistenti. Un'impresa trasparente fornisce tutta questa documentazione senza esitazioni.",
      },
      {
        q: "Meglio un'impresa di pulizie o una colf?",
        a: "Per piccoli appartamenti una colf può bastare. Per uffici, condomini o attività commerciali, un'impresa garantisce personale formato, attrezzature professionali, sostituzione in caso di assenza e copertura assicurativa completa.",
      },
    ],
    internalLinks: [
      { text: "Scopri tutti i nostri servizi", href: "/servizi" },
      { text: "Soluzioni per aziende", href: "/aziende" },
      { text: "Richiedi un preventivo gratuito", href: "/preventivo" },
    ],
  },
  {
    slug: "costo-pulizia-condominio",
    title: "Quanto costa la pulizia di un condominio nel 2026",
    metaTitle: "Quanto costa la pulizia di un condominio",
    metaDescription:
      "Scopri quanto costa la pulizia condominiale nel 2026: prezzi medi, fattori che influenzano il costo e come risparmiare senza rinunciare alla qualità.",
    date: "2026-02-15",
    category: "guide",
    excerpt:
      "I costi della pulizia condominiale dipendono da metratura, numero di piani e frequenza. Ecco una guida completa ai prezzi 2026 e come ottimizzare la spesa.",
    readingTime: 6,
    sections: [
      {
        heading: "Fattori che influenzano il costo",
        content:
          "Il prezzo della pulizia condominiale non è standard: dipende da diversi fattori specifici del vostro edificio. Comprendere questi elementi vi aiuterà a valutare meglio i preventivi e a confrontare le offerte in modo consapevole.",
        list: [
          "Numero di piani e scale",
          "Metratura totale delle aree comuni",
          "Presenza di ascensore e garage",
          "Frequenza degli interventi (settimanale, bisettimanale, mensile)",
          "Servizi extra: pulizia vetri, lavaggio cortile, cura giardino",
        ],
      },
      {
        heading: "Prezzi medi nel 2026",
        content:
          "Per un condominio medio di 6-8 appartamenti con 3 piani, i costi indicativi per la pulizia delle parti comuni sono: pulizia settimanale da 200 a 350€ al mese, bisettimanale da 150 a 250€, mensile da 80 a 150€. Condomini più grandi o con aree esterne hanno costi proporzionalmente superiori.",
      },
      {
        heading: "Cosa include la pulizia condominiale",
        content:
          "Un servizio completo di pulizia condominiale copre tutte le aree comuni dell'edificio. La pulizia ordinaria prevede un ciclo regolare di interventi che mantengono l'igiene e il decoro degli spazi condivisi.",
        list: [
          "Scale e pianerottoli: scopatura e lavaggio",
          "Androne e ingresso: pulizia pavimenti e vetri portone",
          "Ascensore: pulizia interna, specchi e pulsantiera",
          "Ringhiere e corrimano: spolveratura e igienizzazione",
          "Casellari postali e citofoni: pulizia e sanificazione",
        ],
      },
      {
        heading: "Come risparmiare senza perdere qualità",
        content:
          "Potete ottimizzare i costi scegliendo la frequenza giusta per le vostre esigenze reali. Un condominio con pochi residenti può optare per una pulizia bisettimanale anziché settimanale. Potete anche prevedere interventi stagionali per i servizi extra come la pulizia delle aree esterne o il lavaggio vetri.",
      },
      {
        heading: "Ripartizione delle spese tra condomini",
        content:
          "Le spese di pulizia vengono generalmente ripartite in base ai millesimi di proprietà o, in alcuni condomini, in parti uguali. Il regolamento condominiale stabilisce le modalità di ripartizione. Un preventivo chiaro aiuta l'amministratore a presentare la spesa in assemblea con trasparenza.",
      },
    ],
    faqs: [
      {
        q: "Quanto costa la pulizia scale di un condominio?",
        a: "Per un condominio di 3 piani con 6-8 appartamenti, la pulizia settimanale delle scale costa mediamente 200-350€ al mese. Il costo varia in base alla metratura e ai servizi inclusi.",
      },
      {
        q: "Con quale frequenza si puliscono le parti comuni?",
        a: "La frequenza ideale è settimanale per condomini con molti residenti, bisettimanale per edifici medi. In ogni caso, almeno una volta al mese è consigliata una pulizia più approfondita di ascensore e androni.",
      },
      {
        q: "Chi decide quale impresa di pulizie assumere per il condominio?",
        a: "La decisione spetta all'assemblea condominiale, spesso su proposta dell'amministratore. Si confrontano più preventivi e si vota a maggioranza. L'amministratore gestisce poi il contratto e i pagamenti.",
      },
    ],
    internalLinks: [
      { text: "Servizio pulizie civili e condominiali", href: "/servizi/pulizie-civili" },
      { text: "Richiedi un preventivo gratuito", href: "/preventivo" },
    ],
  },
  {
    slug: "sanificazione-uffici-quando-perche",
    title: "Sanificazione uffici: quando farla e perché è importante",
    metaTitle: "Sanificazione uffici: quando e perché",
    metaDescription:
      "Quando e perché sanificare l'ufficio: obblighi normativi, frequenze consigliate e tecniche professionali. Guida completa alla sanificazione ambienti di lavoro.",
    date: "2026-02-12",
    category: "normativa",
    excerpt:
      "La sanificazione degli uffici non è solo una buona pratica: in molti casi è un obbligo. Scopri quando è necessaria, con quale frequenza e quali tecniche utilizzare.",
    readingTime: 6,
    sections: [
      {
        heading: "Differenza tra pulizia e sanificazione",
        content:
          "Molti confondono pulizia e sanificazione, ma sono interventi diversi. La pulizia rimuove lo sporco visibile, la sanificazione elimina batteri, virus e agenti patogeni invisibili. Un ufficio può sembrare pulito ma non essere sanificato: le superfici di contatto come tastiere, maniglie e telefoni possono ospitare migliaia di microrganismi.",
      },
      {
        heading: "Quando la sanificazione è obbligatoria",
        content:
          "Il D.Lgs. 81/2008 (Testo Unico sulla Sicurezza) impone al datore di lavoro di garantire ambienti salubri. La sanificazione diventa obbligatoria in specifiche circostanze e per determinati settori.",
        list: [
          "Dopo casi di malattie infettive tra i dipendenti",
          "Strutture sanitarie e studi medici (obbligo continuativo)",
          "Attività alimentari e ristorazione",
          "A seguito di infestazioni o contaminazioni",
          "Periodicamente, come previsto dal DVR aziendale",
        ],
      },
      {
        heading: "Frequenza consigliata per tipo di ufficio",
        content:
          "Per uffici standard con 10-20 dipendenti, si consiglia una sanificazione trimestrale. Per studi medici e ambulatori, la frequenza deve essere almeno mensile. Open space con alto afflusso di persone richiedono interventi più frequenti, idealmente mensili. Durante periodi influenzali, è consigliato intensificare gli interventi.",
      },
      {
        heading: "Tecniche di sanificazione professionale",
        content:
          "Le tecniche più efficaci utilizzano il perossido di idrogeno atomizzato, che raggiunge ogni superficie comprese quelle non accessibili manualmente. Questo metodo è sicuro, non lascia residui chimici e permette di rientrare nei locali dopo poche ore dall'intervento.",
        list: [
          "Nebulizzazione con perossido di idrogeno",
          "Trattamento con ozono (per ambienti chiusi)",
          "Sanificazione UV-C per superfici specifiche",
          "Disinfezione manuale delle superfici di contatto",
        ],
      },
      {
        heading: "Certificato di sanificazione",
        content:
          "Al termine di ogni intervento, l'impresa rilascia un certificato di sanificazione che documenta la data, le tecniche utilizzate e i prodotti impiegati. Questo documento è fondamentale per dimostrare la conformità normativa in caso di ispezioni e tutela il datore di lavoro.",
      },
    ],
    faqs: [
      {
        q: "Quanto costa la sanificazione di un ufficio?",
        a: "Il costo dipende dalla metratura: per un ufficio di 100 mq si parte da 150-250€ per intervento. Con contratti periodici il costo per singolo intervento si riduce significativamente.",
      },
      {
        q: "Quanto tempo serve per sanificare un ufficio?",
        a: "Un ufficio di 100-200 mq viene sanificato in 1-2 ore. I locali sono agibili dopo circa 2-3 ore dall'intervento con perossido di idrogeno. Spesso si programma nel weekend o in orario serale.",
      },
      {
        q: "La sanificazione è detraibile fiscalmente?",
        a: "Sì, le spese di sanificazione degli ambienti di lavoro sono deducibili come costo aziendale. Sono stati anche previsti crediti d'imposta specifici in passato. Consultate il vostro commercialista per le agevolazioni in vigore.",
      },
    ],
    internalLinks: [
      { text: "Servizio sanificazione professionale", href: "/servizi/sanificazioni" },
      { text: "Soluzioni per aziende", href: "/aziende" },
    ],
  },
  {
    slug: "pulizie-post-cantiere-cosa-includono",
    title: "Pulizie post cantiere: cosa includono e perché servono",
    metaTitle: "Pulizie post cantiere: cosa includono",
    metaDescription:
      "Cosa includono le pulizie post cantiere professionali: fasi di intervento, attrezzature necessarie e perché il fai-da-te non basta dopo una ristrutturazione.",
    date: "2026-02-10",
    category: "guide",
    excerpt:
      "Dopo una ristrutturazione, la polvere edile si annida ovunque. Le pulizie post cantiere richiedono attrezzature e competenze specifiche. Ecco cosa includono.",
    readingTime: 5,
    sections: [
      {
        heading: "Perché le pulizie post cantiere sono diverse",
        content:
          "Dopo una ristrutturazione, gli ambienti presentano residui molto diversi dallo sporco quotidiano: polvere di cemento, calce, stucco, residui di vernice, colla per piastrelle e silicone. Questi materiali richiedono prodotti specifici e tecniche particolari per non danneggiare le superfici appena posate.",
      },
      {
        heading: "Le 3 fasi della pulizia post cantiere",
        content:
          "Un intervento professionale si articola in tre fasi successive, ciascuna con obiettivi specifici. Saltare una fase compromette il risultato finale.",
        list: [
          "Fase 1 — Sgrossatura: rimozione di calcinacci, polvere grossolana, residui di materiali edili e protezioni di cantiere",
          "Fase 2 — Pulizia approfondita: lavaggio pavimenti con detergenti specifici, pulizia vetri e infissi, rimozione macchie di vernice e colla",
          "Fase 3 — Finitura: lucidatura superfici, pulizia di dettaglio (interruttori, maniglie, battiscopa), controllo finale",
        ],
      },
      {
        heading: "Attrezzature professionali necessarie",
        content:
          "Le pulizie post cantiere richiedono attrezzature che vanno oltre quelle domestiche. Aspiratori industriali con filtro HEPA trattengono la polvere sottile di cemento. Lavasciuga pavimenti professionali garantiscono risultati impossibili con il mocio tradizionale. Raschietti e prodotti chimici specifici rimuovono residui senza graffiare.",
      },
      {
        heading: "Tempistiche e costi indicativi",
        content:
          "Per un appartamento di 80-100 mq dopo ristrutturazione completa, servono in media 2-3 giornate di lavoro con una squadra di 2 operatori. I costi partono da 4-6€ al metro quadro per interventi standard, con variazioni in base alla complessità dei lavori effettuati e al tipo di superfici da trattare.",
      },
      {
        heading: "Errori da evitare nel fai-da-te",
        content:
          "Il fai-da-te post cantiere presenta rischi concreti. Usare prodotti sbagliati può opacizzare il marmo appena posato o graffiare il parquet. La polvere di cemento, se non aspirata con filtri adeguati, si ridistribuisce nell'aria e si deposita nuovamente. Senza attrezzature professionali, il risultato è spesso insoddisfacente e richiede comunque un intervento professionale successivo.",
      },
    ],
    faqs: [
      {
        q: "Quanto tempo dopo la ristrutturazione si fanno le pulizie?",
        a: "Idealmente si inizia 1-2 giorni dopo la fine dei lavori, quando le superfici sono asciutte. Per pavimenti appena posati (resine, stucchi) attendere i tempi di asciugatura indicati dal posatore.",
      },
      {
        q: "Le pulizie post cantiere danneggiano i pavimenti nuovi?",
        a: "No, se eseguite da professionisti. Utilizziamo prodotti specifici per ogni tipo di superficie e testiamo sempre su una piccola area prima di procedere. Il rischio è semmai nel fai-da-te con prodotti inadatti.",
      },
      {
        q: "Il costo delle pulizie post cantiere è detraibile?",
        a: "Se le pulizie rientrano nelle spese di ristrutturazione, possono beneficiare delle detrazioni fiscali previste (bonus ristrutturazione). Conservate la fattura e verificate con il vostro commercialista.",
      },
    ],
    internalLinks: [
      { text: "Servizio pulizie post cantiere", href: "/servizi/pulizie-post-cantiere" },
      { text: "Richiedi un preventivo gratuito", href: "/preventivo" },
    ],
  },
  {
    slug: "trattamento-pavimenti-marmo-guida",
    title: "Trattamento pavimenti in marmo: guida completa",
    metaTitle: "Trattamento pavimenti in marmo: guida",
    metaDescription:
      "Come trattare i pavimenti in marmo: levigatura, lucidatura, cristallizzazione e manutenzione. Guida ai trattamenti professionali e ai costi.",
    date: "2026-02-08",
    category: "consigli-pratici",
    excerpt:
      "Il marmo è elegante ma delicato. Levigatura, lucidatura e cristallizzazione lo riportano a nuovo. Ecco come funzionano i trattamenti professionali.",
    readingTime: 6,
    sections: [
      {
        heading: "Perché il marmo richiede trattamenti specifici",
        content:
          "Il marmo è una pietra naturale porosa e relativamente morbida, sensibile ad acidi, graffi e usura. Pavimenti in marmo in zone di passaggio perdono lucidità nel tempo, sviluppano micro-graffi e possono macchiarsi. I normali detergenti non bastano: servono trattamenti meccanici professionali per ripristinare l'aspetto originale.",
      },
      {
        heading: "Levigatura: quando è necessaria",
        content:
          "La levigatura è il trattamento più invasivo e si rende necessario quando il pavimento presenta graffi profondi, avvallamenti o dislivelli tra le piastrelle. Si esegue con macchine a dischi diamantati che asportano uno strato superficiale di marmo (frazioni di millimetro), eliminando imperfezioni e rigenerando la superficie.",
      },
      {
        heading: "Lucidatura e cristallizzazione",
        content:
          "Dopo la levigatura, o come intervento autonomo su pavimenti in buone condizioni, si procede con la lucidatura. La cristallizzazione è un trattamento chimico-meccanico che crea uno strato protettivo sulla superficie, aumentando durezza e brillantezza.",
        list: [
          "Lucidatura meccanica: dischi a grana fine che lisciano la superficie",
          "Cristallizzazione: reazione chimica tra acido ossalico e carbonato di calcio del marmo",
          "Risultato: superficie più dura, brillante e resistente alle macchie",
          "Durata del trattamento: 1-3 anni in base al traffico",
        ],
      },
      {
        heading: "Costi dei trattamenti professionali",
        content:
          "La levigatura completa con lucidatura costa tra 15 e 30€ al metro quadro, a seconda delle condizioni del pavimento e della superficie totale. La sola cristallizzazione parte da 8-12€ al mq. Per grandi superfici (condomini, uffici) si applicano tariffe decrescenti. Il trattamento è un investimento che protegge il pavimento per anni.",
      },
      {
        heading: "Manutenzione quotidiana del marmo",
        content:
          "Tra un trattamento professionale e l'altro, la manutenzione corretta allunga la vita del pavimento. Piccole accortezze quotidiane fanno la differenza.",
        list: [
          "Usare detergenti neutri specifici per marmo (pH 7-8)",
          "Mai usare aceto, limone o detergenti acidi",
          "Asciugare subito eventuali liquidi versati",
          "Usare zerbini agli ingressi per ridurre l'abrasione",
          "Evitare scope dure: preferire panni in microfibra",
        ],
      },
    ],
    faqs: [
      {
        q: "Ogni quanto va lucidato il pavimento in marmo?",
        a: "In ambienti domestici ogni 2-3 anni è sufficiente. Per hall di condomini, uffici e negozi con alto passaggio, si consiglia un intervento annuale o anche semestrale.",
      },
      {
        q: "La levigatura rovina il marmo?",
        a: "No, la levigatura professionale asporta frazioni di millimetro. Un pavimento in marmo può essere levigato diverse volte nel corso della sua vita. L'importante è affidarsi a professionisti con attrezzature adeguate.",
      },
      {
        q: "Posso lucidare il marmo da solo?",
        a: "Esistono prodotti fai-da-te, ma i risultati non sono paragonabili a un trattamento professionale. Per piccoli graffi superficiali si possono usare paste lucidanti, ma per un risultato uniforme e duraturo serve attrezzatura industriale.",
      },
    ],
    internalLinks: [
      { text: "Servizio trattamento pavimenti", href: "/servizi/trattamento-pavimenti" },
      { text: "Richiedi un preventivo gratuito", href: "/preventivo" },
    ],
  },
  {
    slug: "checklist-pulizia-condominio",
    title: "Checklist pulizia condominio: cosa controllare ogni mese",
    metaTitle: "Checklist pulizia condominio mensile",
    metaDescription:
      "Checklist completa per la pulizia del condominio: attività settimanali, mensili e stagionali. Scarica la lista e verifica la qualità del servizio.",
    date: "2026-02-05",
    category: "consigli-pratici",
    excerpt:
      "Come verificare che la pulizia del condominio sia fatta bene? Ecco una checklist pratica con tutte le attività da controllare ogni settimana e ogni mese.",
    readingTime: 5,
    sections: [
      {
        heading: "Perché serve una checklist",
        content:
          "Una checklist di pulizia condominiale è lo strumento più semplice ed efficace per garantire la qualità del servizio. Permette all'amministratore di verificare che tutte le attività previste dal contratto vengano eseguite, e ai condomini di segnalare eventuali carenze in modo oggettivo.",
      },
      {
        heading: "Attività settimanali",
        content:
          "Queste sono le attività che devono essere eseguite ad ogni intervento settimanale di pulizia ordinaria. Rappresentano il servizio base che mantiene il decoro delle parti comuni.",
        list: [
          "Scopatura e lavaggio scale e pianerottoli",
          "Pulizia pavimento androne e ingresso",
          "Pulizia ascensore: pavimento, pareti, specchio e pulsantiera",
          "Svuotamento cestini nelle aree comuni",
          "Spolveratura ringhiere e corrimano",
          "Pulizia casellari postali (esterno)",
        ],
      },
      {
        heading: "Attività mensili",
        content:
          "Una volta al mese si aggiungono interventi più approfonditi che mantengono il condominio in condizioni ottimali nel lungo periodo.",
        list: [
          "Lavaggio vetri portone d'ingresso",
          "Pulizia plafoniere e punti luce scale",
          "Lavaggio a fondo pavimento garage (se incluso)",
          "Pulizia citofoni e pulsantiere ai piani",
          "Rimozione ragnatele da soffitti e angoli",
          "Pulizia davanzali e soglie finestre comuni",
        ],
      },
      {
        heading: "Attività stagionali",
        content:
          "Alcune attività vanno programmate in specifici periodi dell'anno per mantenere tutte le aree del condominio in perfetto stato.",
        list: [
          "Primavera: pulizia cortile, lavaggio marciapiedi, pulizia griglie di scolo",
          "Estate: trattamento antizanzare aree esterne, pulizia aree verdi",
          "Autunno: raccolta foglie, pulizia grondaie accessibili, lavaggio pensiline",
          "Inverno: trattamento antighiaccio ingressi, pulizia zerbini profondi",
        ],
      },
      {
        heading: "Come usare la checklist con l'impresa di pulizie",
        content:
          "Condividete la checklist con l'impresa di pulizie all'inizio del contratto. Può diventare parte integrante del capitolato. L'impresa può firmare il registro ad ogni intervento, creando uno storico verificabile. In caso di contestazioni, la checklist offre un riferimento oggettivo.",
      },
    ],
    faqs: [
      {
        q: "Chi controlla che le pulizie condominiali siano fatte bene?",
        a: "L'amministratore di condominio è il responsabile della supervisione. Può delegare a un condomino referente. Una checklist condivisa rende il controllo oggettivo e semplice per tutti.",
      },
      {
        q: "Cosa fare se l'impresa di pulizie non rispetta il programma?",
        a: "Documentate le mancanze con la checklist e segnalatele all'amministratore per iscritto. Se il problema persiste, l'amministratore può contestare formalmente e, nei casi gravi, recedere dal contratto.",
      },
      {
        q: "Ogni quanto cambiare impresa di pulizie del condominio?",
        a: "Non c'è una regola fissa. Se il servizio è soddisfacente, la continuità è un vantaggio. Consigliamo di richiedere preventivi comparativi ogni 2-3 anni per verificare la competitività del servizio attuale.",
      },
    ],
    internalLinks: [
      { text: "Servizio pulizie civili e condominiali", href: "/servizi/pulizie-civili" },
      { text: "Richiedi un preventivo personalizzato", href: "/preventivo" },
    ],
  },
  {
    slug: "pulizia-studi-medici-normativa",
    title: "Pulizia studi medici: normativa e obblighi nel 2026",
    metaTitle: "Pulizia studi medici: normativa 2026",
    metaDescription:
      "Normativa sulla pulizia di studi medici e ambulatori nel 2026: obblighi igienici, frequenze, protocolli e sanzioni. Guida per titolari di studi medici.",
    date: "2026-02-02",
    category: "normativa",
    excerpt:
      "Gli studi medici hanno obblighi igienici stringenti. Dalla normativa vigente ai protocolli da seguire, ecco tutto quello che il titolare deve sapere.",
    readingTime: 7,
    sections: [
      {
        heading: "Il quadro normativo di riferimento",
        content:
          "La pulizia e sanificazione degli studi medici è regolata da diverse normative che impongono standard igienici elevati. Il mancato rispetto può comportare sanzioni e, nei casi gravi, la sospensione dell'attività.",
        list: [
          "D.Lgs. 81/2008 — Testo Unico sulla Sicurezza sul Lavoro",
          "D.Lgs. 152/2006 — Gestione rifiuti sanitari",
          "Linee guida ISPESL per la sicurezza negli studi medici",
          "Normative regionali specifiche (variano per regione)",
          "Protocolli delle ASL competenti per territorio",
        ],
      },
      {
        heading: "Obblighi specifici per studi medici",
        content:
          "Rispetto a un normale ufficio, uno studio medico deve rispettare standard igienici più elevati. Il titolare è responsabile della conformità e deve poter dimostrare di aver adottato procedure adeguate in caso di ispezione.",
        list: [
          "Pulizia quotidiana di tutte le superfici di contatto",
          "Sanificazione periodica degli ambienti (minimo mensile)",
          "Gestione separata dei rifiuti sanitari speciali",
          "Registro delle pulizie e sanificazioni effettuate",
          "Utilizzo di prodotti conformi (presidi medico-chirurgici)",
          "Formazione del personale addetto alle pulizie",
        ],
      },
      {
        heading: "Aree critiche e protocolli",
        content:
          "Alcune aree dello studio richiedono attenzione particolare. Le sale visita devono essere sanificate tra un paziente e l'altro per le superfici di contatto diretto. Le sale d'attesa, con alto afflusso, necessitano di pulizia e areazione frequente. I servizi igienici per i pazienti vanno puliti più volte al giorno.",
      },
      {
        heading: "Frequenze minime consigliate",
        content:
          "Le frequenze variano in base al tipo di ambulatorio e al volume di pazienti. Uno studio di medicina generale con 20-30 pazienti al giorno richiede standard diversi da un poliambulatorio specialistico.",
        list: [
          "Quotidiana: pulizia pavimenti, superfici, bagni, sale d'attesa",
          "Dopo ogni paziente: disinfezione lettino, superfici di contatto in sala visita",
          "Settimanale: pulizia approfondita, lavaggio vetri, spolveratura completa",
          "Mensile: sanificazione ambientale completa con certificazione",
          "Semestrale: pulizia straordinaria (soffitti, bocchette aria, punti luce)",
        ],
      },
      {
        heading: "Sanzioni per inadempienza",
        content:
          "Le sanzioni per il mancato rispetto degli standard igienici possono essere significative. Le ASL effettuano ispezioni periodiche e su segnalazione. Le multe vanno da alcune centinaia a diverse migliaia di euro. Nei casi più gravi, come carenze igieniche che mettono a rischio la salute dei pazienti, è prevista la sospensione dell'attività fino alla conformità.",
      },
      {
        heading: "Perché affidarsi a un'impresa specializzata",
        content:
          "Un'impresa specializzata nella pulizia di ambienti sanitari conosce le normative, utilizza prodotti conformi e rilascia la documentazione necessaria. BP Cleaning ha esperienza specifica con studi medici e ambulatori, garantendo protocolli certificati e il registro degli interventi richiesto dalla normativa.",
      },
    ],
    faqs: [
      {
        q: "È obbligatorio tenere un registro delle pulizie nello studio medico?",
        a: "Sì, è fortemente raccomandato e in alcune regioni obbligatorio. Il registro documenta data, tipo di intervento e prodotti usati. È il primo documento richiesto in caso di ispezione ASL.",
      },
      {
        q: "Quanto costa la pulizia di uno studio medico?",
        a: "Per uno studio medico di 60-80 mq, la pulizia quotidiana con sanificazione mensile costa mediamente 500-800€ al mese. Il costo varia in base al numero di ambulatori e ai servizi specifici richiesti.",
      },
      {
        q: "Lo studio medico può usare personale interno per le pulizie?",
        a: "Sì, ma il personale deve essere formato sui protocolli igienici specifici per ambienti sanitari e sui prodotti da utilizzare. Un'impresa specializzata garantisce formazione continua e sostituzione in caso di assenza.",
      },
    ],
    internalLinks: [
      { text: "Servizio pulizia studi medici", href: "/servizi/pulizie-studi-medici" },
      { text: "Servizio sanificazione professionale", href: "/servizi/sanificazioni" },
    ],
  },
  {
    slug: "errori-pulizia-uffici",
    title: "5 errori nella pulizia degli uffici da evitare assolutamente",
    metaTitle: "5 errori pulizia uffici da evitare",
    metaDescription:
      "I 5 errori più comuni nella pulizia degli uffici che compromettono igiene e immagine aziendale. Scopri come evitarli e migliorare la qualità del servizio.",
    date: "2026-01-28",
    category: "consigli-pratici",
    excerpt:
      "Pulizie frettolose, prodotti sbagliati, punti ciechi ignorati: ecco i 5 errori più comuni nella pulizia degli uffici e come evitarli per un ambiente davvero pulito.",
    readingTime: 5,
    sections: [
      {
        heading: "Errore 1: Trascurare le superfici di contatto",
        content:
          "Maniglie, interruttori, pulsantiere dell'ascensore, tastiere e telefoni sono le superfici più toccate e meno pulite. Uno studio dell'Università dell'Arizona ha dimostrato che una scrivania da ufficio ospita 400 volte più batteri di un WC. Queste superfici vanno igienizzate quotidianamente con prodotti specifici, non solo spolverate.",
      },
      {
        heading: "Errore 2: Usare lo stesso panno ovunque",
        content:
          "Usare un unico panno per bagno, cucina e scrivanie significa trasferire batteri da una superficie all'altra. Il protocollo corretto prevede panni con codice colore diverso per ogni area: rosso per bagni, blu per vetri, verde per cucina, giallo per superfici generiche. I panni in microfibra devono essere lavati a 60°C dopo ogni utilizzo.",
      },
      {
        heading: "Errore 3: Pulizia solo estetica",
        content:
          "Concentrarsi solo sullo sporco visibile (pavimenti, cestini) trascurando la pulizia profonda è un errore frequente. Sotto le scrivanie, dietro i mobili, sopra gli armadi, nelle bocchette dell'aria condizionata si accumulano polvere e allergeni. Una pulizia approfondita settimanale di queste aree è essenziale per la qualità dell'aria indoor.",
      },
      {
        heading: "Errore 4: Sbagliare prodotti e dosaggi",
        content:
          "Più detergente non significa più pulito. Dosaggi eccessivi lasciano residui appiccicosi che attraggono più sporco. Prodotti acidi su marmo lo rovinano, candeggina su acciaio lo corrode. Ogni superficie richiede il detergente corretto al dosaggio indicato. Le imprese professionali formano il personale sull'uso corretto dei prodotti.",
        list: [
          "Detergenti neutri (pH 7) per pavimenti in marmo e pietra",
          "Sgrassatori alcalini per cucine e superfici unte",
          "Disinfettanti specifici per bagni e aree sanitarie",
          "Prodotti antistatici per schermi e apparecchiature elettroniche",
        ],
      },
      {
        heading: "Errore 5: Pulizia a orari sbagliati",
        content:
          "Pulire durante l'orario lavorativo disturba i dipendenti e non permette interventi approfonditi. Pulire il venerdì sera lascia l'ufficio per due giorni senza interventi, con accumulo di polvere. L'orario ideale dipende dalle esigenze specifiche: la mattina presto o la sera tardi sono spesso le soluzioni migliori. Per uffici con turni, pianificate gli interventi nelle fasce di minor presenza.",
      },
      {
        heading: "Come migliorare: la soluzione professionale",
        content:
          "Un'impresa professionale elimina questi errori con protocolli standardizzati, personale formato e prodotti adeguati. Il capitolato definisce le attività in dettaglio, la frequenza e gli standard qualitativi. Ispezioni periodiche garantiscono il mantenimento della qualità nel tempo.",
      },
    ],
    faqs: [
      {
        q: "Quanto spesso vanno puliti gli uffici?",
        a: "Per uffici con 10+ persone, la pulizia giornaliera è consigliata. Piccoli studi con 2-3 persone possono optare per 3 volte a settimana. Bagni e cucina vanno sempre puliti quotidianamente.",
      },
      {
        q: "Quali sono i punti più sporchi di un ufficio?",
        a: "In ordine: tastiere e mouse, maniglie delle porte, pulsanti dell'ascensore, rubinetti del bagno e microonde della cucina. Queste superfici vanno igienizzate ogni giorno.",
      },
      {
        q: "Come valutare la qualità delle pulizie in ufficio?",
        a: "Controllate le superfici di contatto (non solo i pavimenti), verificate gli angoli e le aree nascoste, osservate se i bagni sono riforniti. Una checklist mensile condivisa con l'impresa è lo strumento più efficace.",
      },
    ],
    internalLinks: [
      { text: "Servizio pulizie industriali e uffici", href: "/servizi/pulizie-industriali" },
      { text: "Soluzioni per aziende", href: "/aziende" },
    ],
  },
];

export function getAllPosts(): BlogPost[] {
  return blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getPostsByCategory(category: BlogPost["category"]): BlogPost[] {
  return getAllPosts().filter((p) => p.category === category);
}
