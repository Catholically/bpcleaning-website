# CLAUDE.md - bpcleaning-website

> **Ultimo aggiornamento**: 2026-02-27

## Descrizione

Sito professionale per BP Cleaning SRL Multiservice (pulizie commerciali zona Varese/Como). Focus su lead generation.

## Stack

- Next.js 16, TypeScript, Tailwind CSS v4, Vercel
- **URL**: https://bpcleaning-website.vercel.app
- **Dominio**: bpcleaning.it (live)
- **Vercel teamId**: `team_qcj15fBleoIF0nR9jXp5WUHi`

## Funzionalità

- Calcolatore preventivi interattivo (tipo servizio, m², frequenza, CAP)
- Form multi-step per richiesta preventivi
- Pulsante WhatsApp floating con messaggio pre-compilato
- 15+ pagine SEO per città (Varese, Como, Gallarate, ecc.)
- 52+ redirect da vecchio sito WordPress per preservare SEO
- Sezione B2B per clienti corporate (`/aziende`)
- GA4 event tracking custom (`public/ga4-events.js`) + Microsoft Clarity

## Analytics & Tracking

- **GA4**: `G-PQZ2RSSQEB` — caricato via `next/script` in `layout.tsx`
- **Microsoft Clarity**: `v836wdtr8m` — caricato via `next/script` in `layout.tsx`
- **Custom GA4 Events** (`public/ga4-events.js`): Script esterno caricato con `afterInteractive`
  - `click_phone` — click su link tel:
  - `click_email` — click su link mailto:
  - `click_whatsapp` — click su link WhatsApp
  - `click_cta` — click su bottoni CTA (arancioni/teal)
  - `form_submit_contact` — submit form contatti
  - `form_submit_quote` — submit form preventivo
  - `view_service` — visita pagina `/servizi/*`
  - `scroll_50` — scroll al 50% della pagina
  - Include `observeRouteChanges()` per navigazione client-side Next.js

## Regole per la creazione di Blog Post

Quando si creano nuovi blog post, applicare SEMPRE queste regole fin dalla creazione:

1. **Titoli SEO-oriented (max 60 caratteri)**: I titoli devono essere ottimizzati per la SEO e non superare i 60 caratteri. Includere la keyword principale all'inizio del titolo. Verificare la lunghezza PRIMA di salvare.

2. **Alt text SEO per le immagini**: Ogni immagine deve avere un alt text descrittivo, in italiano, che includa keyword rilevanti per il post. Non usare alt text generici — devono descrivere il contenuto dell'immagine e includere termini di ricerca pertinenti.

3. **Internal linking (2-3 link per post)**: Ogni post deve includere 2-3 link ad altri post o pagine del sito tematicamente correlati. Questo migliora la SEO e la navigazione utente.

## File Chiave

- `PROPOSTA_COMMERCIALE.md` — Proposta commerciale con proiezioni ROI
