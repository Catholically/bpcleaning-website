# Piano Business: Servizi Idropulitrice Alta Pressione

> **Per BP Cleaning SRL** - Servizi specializzati pulizia esterna con idropulitrice
> **Data**: 2026-02-18

---

## Contesto

Il cugino ha la passione per la pulizia di facciate e pavimenti esterni con idropulitrice di alta potenza, incluso il marmo. Questi servizi vanno integrati nel sito BP Cleaning per catturare traffico SEO locale e generare lead.

### Competitor Locali
- **Magica Servizi** - 30 anni, Milano+Varese, contenuti generici
- **Cristal Group** - Leader provincia VA, poca SEO
- **Impresa Milani** - 20+ anni Varese, sito datato

**Nessun competitor ha contenuti SEO specifici per idropulitrice nella zona. C'è spazio enorme per rankare.**

---

## 10 Nicchie di Servizio

| # | Servizio | Target |
|---|----------|--------|
| 1 | Lavaggio facciate edifici | Condomini, amministratori |
| 2 | Pulizia pavimenti esterni (porfido, autobloccanti, cemento) | Privati, aziende |
| 3 | Trattamento marmo esterno (scalinate, facciate) | Condomini di pregio, ville |
| 4 | Lavaggio cortili e vialetti condominiali | Amministratori condominio |
| 5 | Pulizia muri perimetrali e recinzioni | Privati, aziende |
| 6 | Rimozione graffiti | Comuni, condomini, negozi |
| 7 | Lavaggio aree parcheggio e garage | Centri commerciali, aziende |
| 8 | Pulizia tetti e coperture | Privati, capannoni |
| 9 | Trattamento idrorepellente post-lavaggio | Upsell su tutti i servizi |
| 10 | Lavaggio piscine e bordo vasca | Hotel, privati, wellness |

---

## Keywords Target

### Principali (alta intenzione commerciale)
- `pulizia facciate Varese`
- `lavaggio pavimenti esterni Varese`
- `idropulitrice professionale Varese`
- `pulizia marmo esterno Varese`
- `lavaggio cortili condominiali Varese`
- `rimozione graffiti Varese`

### Long-tail (bassa competizione, alta conversione)
- `pulizia facciate condominio provincia di Varese`
- `lavaggio porfido esterno Gallarate`
- `pulizia scalinata marmo Como`
- `idropulitrice professionale facciate Busto Arsizio`
- `trattamento idrorepellente facciata Varese`
- `pulizia muri esterni autobloccanti Saronno`
- `rimozione muschio pavimenti Tradate`
- `lavaggio garage condominiale Varese`
- `pulizia pavimenti esterni Monza`
- `lavaggio facciate pietra Gallarate`

---

## Fase 1 - Nuove Pagine Servizio

Creare 4 nuove pagine servizio (stile identico alle pagine /servizi/ esistenti):

| Pagina | URL | Keyword principale |
|--------|-----|-------------------|
| Lavaggio Facciate con Idropulitrice | `/servizi/lavaggio-facciate` | pulizia facciate Varese |
| Lavaggio Pavimenti Esterni | `/servizi/lavaggio-pavimenti-esterni` | lavaggio pavimenti esterni Varese |
| Trattamento Marmo Esterno | `/servizi/trattamento-marmo-esterno` | pulizia marmo esterno Varese |
| Rimozione Graffiti | `/servizi/rimozione-graffiti` | rimozione graffiti Varese |

Ogni pagina deve avere:
- Hero con gradient blu (pattern esistente)
- Breadcrumb
- Sezioni descrittive del servizio (3-5)
- Lista "Cosa include il servizio"
- FAQ Schema (3-5 FAQ)
- CTA "Richiedi Preventivo Gratuito"
- Sezione "Zone servite" con città
- **ZERO riferimenti a prezzi/costi**
- Meta title max 60 char, keyword-first
- Canonical URL

### File da creare:
- `src/app/servizi/lavaggio-facciate/page.tsx`
- `src/app/servizi/lavaggio-pavimenti-esterni/page.tsx`
- `src/app/servizi/trattamento-marmo-esterno/page.tsx`
- `src/app/servizi/rimozione-graffiti/page.tsx`

### File da modificare:
- `src/app/servizi/page.tsx` - Aggiungere le 4 nuove card servizio
- `src/app/sitemap.ts` - Aggiungere i 4 nuovi URL
- `src/components/Footer.tsx` - Se serve, aggiungere link

---

## Fase 2 - Blog Posts Dedicati

Creare 10-15 blog post specifici per idropulitrice/pulizia esterna:

| # | Slug | Categoria | Argomento |
|---|------|-----------|-----------|
| 1 | `pulizia-facciata-condominio-guida` | guide | Come pulire la facciata del condominio |
| 2 | `lavaggio-porfido-guida` | guide | Lavaggio porfido: guida al trattamento professionale |
| 3 | `pulizia-marmo-esterno-tecniche` | consigli-pratici | Pulizia marmo esterno: tecniche e prodotti |
| 4 | `rimozione-graffiti-professionale` | guide | Rimozione graffiti: metodi e risultati |
| 5 | `trattamento-idrorepellente-facciate` | consigli-pratici | Trattamento idrorepellente: proteggere facciate e pavimenti |
| 6 | `pulizia-cortili-condominiali` | guide | Pulizia cortili condominiali con idropulitrice |
| 7 | `muschio-alghe-muri-eliminare` | consigli-pratici | Muschio e alghe sui muri: come eliminarli |
| 8 | `pulizia-tetti-grondaie` | guide | Pulizia tetti e grondaie: quando e perché |
| 9 | `lavaggio-garage-condominiale` | guide | Lavaggio garage condominiale: frequenza e metodi |
| 10 | `idropulitrice-professionale-vs-domestica` | consigli-pratici | Idropulitrice professionale vs domestica: le differenze |
| 11 | `pulizia-pavimenti-autobloccanti` | consigli-pratici | Come pulire i pavimenti in autobloccanti |
| 12 | `lavaggio-recinzioni-muri-perimetrali` | guide | Lavaggio recinzioni e muri perimetrali |

Ogni post con:
- 3-4 sezioni, 3 FAQ, 2-3 internal links
- Menzioni città (Varese, Gallarate, Busto Arsizio, Como, ecc.)
- **ZERO riferimenti a prezzi/costi**
- Immagini specifiche da scaricare

---

## Fase 3 - Pagine Programmatic SEO

Aggiungere i nuovi servizi alla matrice città x servizio in `src/lib/cities.ts`:

```typescript
// Aggiungere a cityServices:
{ slug: 'lavaggio-facciate', name: 'Lavaggio Facciate', description: 'Lavaggio facciate con idropulitrice professionale ad alta pressione' },
{ slug: 'lavaggio-pavimenti-esterni', name: 'Lavaggio Pavimenti Esterni', description: 'Pulizia pavimenti esterni, porfido, autobloccanti e cemento' },
```

Questo genera automaticamente: **44 città x 2 servizi = 88 nuove pagine SEO**

### File da modificare:
- `src/lib/cities.ts` - Aggiungere i 2 nuovi servizi
- `src/app/[city]/[service]/page.tsx` - Verificare che i nuovi slug funzionino

---

## Fase 4 - Contenuto Visuale (Ongoing)

- Foto "prima/dopo" reali dei lavori del cugino (contenuto originale = SEO gold)
- Video brevi degli interventi (per social + embed nel blog)
- Google Business Profile con foto dei lavori

---

## Regole

- **ZERO prezzi/costi** in tutto il sito
- CTA sempre "Richiedi Preventivo Gratuito"
- Città da menzionare: Varese, Gallarate, Busto Arsizio, Saronno, Como, Tradate, Monza + tier 2
- Alt text immagini con keyword + città
- Meta title max 60 caratteri

---

## Sequenza Implementazione

1. **Prima sessione**: Fase 1 (4 pagine servizio) + aggiornamento navigazione
2. **Seconda sessione**: Fase 2 (12 blog post) + download immagini specifiche
3. **Terza sessione**: Fase 3 (88 pagine programmatic) + verifica build
4. **Ongoing**: Fase 4 (foto reali, Google Business Profile)
