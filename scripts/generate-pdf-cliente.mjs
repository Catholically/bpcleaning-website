import { jsPDF } from 'jspdf';
import fs from 'fs';

// Colori BP Cleaning
const teal = [13, 148, 136];
const darkBlue = [30, 58, 95];
const orange = [249, 115, 22];
const gray = [71, 85, 105];
const lightGray = [100, 116, 139];

const doc = new jsPDF();
let y = 20;

function addHeader() {
  doc.setFillColor(...teal);
  doc.rect(0, 0, 210, 50, 'F');

  doc.setTextColor(255, 255, 255);
  doc.setFontSize(28);
  doc.setFont('helvetica', 'bold');
  doc.text('Calcolatore Preventivi', 105, 25, { align: 'center' });

  doc.setFontSize(14);
  doc.setFont('helvetica', 'normal');
  doc.text('Come funziona e come personalizzarlo', 105, 38, { align: 'center' });

  y = 65;
}

function addSection(title) {
  if (y > 250) {
    doc.addPage();
    y = 25;
  }

  doc.setFillColor(...darkBlue);
  doc.roundedRect(15, y - 6, 180, 12, 2, 2, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text(title, 20, y + 2);

  y += 18;
  doc.setTextColor(...gray);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(11);
}

function addParagraph(text) {
  const lines = doc.splitTextToSize(text, 170);
  if (y + lines.length * 6 > 280) {
    doc.addPage();
    y = 25;
  }
  doc.setTextColor(...gray);
  doc.setFontSize(11);
  doc.text(lines, 20, y);
  y += lines.length * 6 + 4;
}

function addBullet(text, indent = 0) {
  if (y > 275) {
    doc.addPage();
    y = 25;
  }
  const x = 20 + indent;
  doc.setFillColor(...teal);
  doc.circle(x + 3, y - 1.5, 2, 'F');
  const lines = doc.splitTextToSize(text, 160 - indent);
  doc.setTextColor(...gray);
  doc.text(lines, x + 10, y);
  y += lines.length * 6 + 3;
}

function addNumberedStep(num, text) {
  if (y > 270) {
    doc.addPage();
    y = 25;
  }

  doc.setFillColor(...teal);
  doc.circle(28, y, 8, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(12);
  doc.setFont('helvetica', 'bold');
  doc.text(String(num), 28, y + 4, { align: 'center' });

  doc.setTextColor(...gray);
  doc.setFontSize(11);
  doc.setFont('helvetica', 'normal');
  const lines = doc.splitTextToSize(text, 145);
  doc.text(lines, 42, y + 4);
  y += Math.max(lines.length * 6, 12) + 6;
}

function addPriceTable() {
  if (y > 180) {
    doc.addPage();
    y = 25;
  }

  const data = [
    { tipo: 'Casa / Appartamento', prezzo: '€2.50', motivo: 'Attenzione ai dettagli, mobili, oggetti' },
    { tipo: 'Ufficio / Studio', prezzo: '€2.00', motivo: 'Spazi standard, open space' },
    { tipo: 'Condominio', prezzo: '€1.80', motivo: 'Scale e androni, lavoro ripetitivo' },
    { tipo: 'Capannone / Industriale', prezzo: '€1.50', motivo: 'Grandi superfici, economia di scala' }
  ];

  // Header
  doc.setFillColor(...darkBlue);
  doc.roundedRect(20, y, 170, 12, 2, 2, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(10);
  doc.setFont('helvetica', 'bold');
  doc.text('Tipo di Ambiente', 25, y + 8);
  doc.text('Prezzo/mq', 95, y + 8);
  doc.text('Motivazione', 130, y + 8);
  y += 14;

  // Rows
  data.forEach((row, i) => {
    if (i % 2 === 0) {
      doc.setFillColor(248, 250, 252);
      doc.rect(20, y - 4, 170, 12, 'F');
    }

    doc.setTextColor(...gray);
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.text(row.tipo, 25, y + 4);

    doc.setTextColor(...teal);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(12);
    doc.text(row.prezzo, 95, y + 4);

    doc.setTextColor(...lightGray);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.text(row.motivo, 130, y + 4);

    y += 12;
  });

  y += 8;
}

function addDiscountTable() {
  if (y > 180) {
    doc.addPage();
    y = 25;
  }

  const data = [
    { freq: 'Intervento singolo', sconto: 'Prezzo pieno', badge: '0%', color: [100, 116, 139] },
    { freq: 'Contratto mensile', sconto: 'Sconto base', badge: '-10%', color: orange },
    { freq: 'Contratto quindicinale', sconto: 'Sconto intermedio', badge: '-15%', color: orange },
    { freq: 'Contratto settimanale', sconto: 'Massimo sconto', badge: '-25%', color: [220, 38, 38] }
  ];

  // Header
  doc.setFillColor(...darkBlue);
  doc.roundedRect(20, y, 170, 12, 2, 2, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(10);
  doc.setFont('helvetica', 'bold');
  doc.text('Frequenza', 25, y + 8);
  doc.text('Tipo', 100, y + 8);
  doc.text('Sconto', 155, y + 8);
  y += 14;

  // Rows
  data.forEach((row, i) => {
    if (i % 2 === 0) {
      doc.setFillColor(248, 250, 252);
      doc.rect(20, y - 4, 170, 12, 'F');
    }

    doc.setTextColor(...gray);
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.text(row.freq, 25, y + 4);
    doc.text(row.sconto, 100, y + 4);

    // Badge
    doc.setFillColor(...row.color);
    doc.roundedRect(150, y - 2, 30, 8, 2, 2, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    doc.text(row.badge, 165, y + 4, { align: 'center' });

    y += 12;
  });

  y += 8;
}

function addHighlightBox(title, text, color = teal) {
  if (y > 240) {
    doc.addPage();
    y = 25;
  }

  const bgColor = color === teal ? [240, 253, 250] :
                  color === orange ? [255, 237, 213] : [254, 243, 199];

  doc.setFillColor(...bgColor);
  doc.roundedRect(20, y, 170, 28, 3, 3, 'F');
  doc.setFillColor(...color);
  doc.rect(20, y, 4, 28, 'F');

  doc.setTextColor(...color);
  doc.setFontSize(11);
  doc.setFont('helvetica', 'bold');
  doc.text(title, 30, y + 10);

  doc.setTextColor(...gray);
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  const lines = doc.splitTextToSize(text, 155);
  doc.text(lines, 30, y + 18);

  y += 35;
}

function addExampleBox() {
  if (y > 180) {
    doc.addPage();
    y = 25;
  }

  // Box
  doc.setDrawColor(226, 232, 240);
  doc.setLineWidth(1);
  doc.roundedRect(20, y, 170, 65, 3, 3, 'S');

  // Title
  doc.setFillColor(...darkBlue);
  doc.roundedRect(25, y + 5, 160, 10, 2, 2, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(11);
  doc.setFont('helvetica', 'bold');
  doc.text('ESEMPIO: Ufficio 100 mq con contratto settimanale', 105, y + 12, { align: 'center' });

  // Calculation steps
  doc.setTextColor(...gray);
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');

  const steps = [
    '1. Prezzo base: 100 mq x €2.00 = €200',
    '2. Applico sconto settimanale (-25%): €200 x 0.75 = €150',
    '3. Calcolo range ±15%: da €127 a €172'
  ];

  steps.forEach((step, i) => {
    doc.text(step, 30, y + 25 + i * 8);
  });

  // Result
  doc.setFillColor(...teal);
  doc.roundedRect(30, y + 50, 150, 12, 3, 3, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('Il cliente vedra: €127 - €172', 105, y + 59, { align: 'center' });

  y += 75;
}

function addChecklistBox() {
  if (y > 180) {
    doc.addPage();
    y = 25;
  }

  doc.setFillColor(255, 237, 213);
  doc.roundedRect(20, y, 170, 55, 3, 3, 'F');
  doc.setFillColor(...orange);
  doc.rect(20, y, 4, 55, 'F');

  doc.setTextColor(...orange);
  doc.setFontSize(12);
  doc.setFont('helvetica', 'bold');
  doc.text('Domande da verificare insieme', 30, y + 12);

  doc.setTextColor(...gray);
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');

  const questions = [
    'I prezzi al mq sono corretti per il vostro mercato?',
    'Lo sconto del 25% per settimanale e sostenibile?',
    'Il range ±15% da abbastanza margine di manovra?',
    'Servono altri tipi di ambiente? (es. B&B, palestre)'
  ];

  questions.forEach((q, i) => {
    doc.setFillColor(...orange);
    doc.rect(30, y + 20 + i * 8, 3, 3, 'F');
    doc.text(q, 38, y + 23 + i * 8);
  });

  y += 65;
}

// ===== GENERATE PDF =====

addHeader();

addSection('Come funziona per il cliente');
addParagraph('Il calcolatore online guida il visitatore in 4 semplici passaggi:');

addNumberedStep(1, 'Sceglie il tipo di ambiente (casa, ufficio, condominio, industriale)');
addNumberedStep(2, 'Indica la metratura con uno slider e la frequenza desiderata');
addNumberedStep(3, 'Inserisce il CAP per verificare la copertura della zona');
addNumberedStep(4, 'Lascia i contatti e riceve subito una stima di prezzo');

addHighlightBox('Nota importante',
  'Il calcolatore fornisce una STIMA indicativa. Il prezzo finale viene sempre confermato dopo sopralluogo gratuito.',
  teal);

addSection('I prezzi impostati');
addParagraph('Ecco i prezzi base per metro quadro attualmente configurati:');
addPriceTable();

addSection('Gli sconti per contratti continuativi');
addParagraph('Per incentivare i contratti di lungo periodo, sono previsti questi sconti:');
addDiscountTable();

addHighlightBox('Strategia commerciale',
  'Lo sconto del 25% per settimanale sembra alto, ma fidelizza il cliente e riduce i costi di acquisizione nuovi clienti.',
  [245, 158, 11]);

doc.addPage();
y = 25;

addSection('Come viene calcolato il prezzo');
addParagraph('Il sistema calcola automaticamente un RANGE di prezzo (non un prezzo fisso) per lasciare margine di trattativa:');
addExampleBox();

addParagraph('Il range del ±15% permette di adattare il prezzo finale in base a:');
addBullet('Stato effettivo dell\'immobile (pulito vs. molto sporco)');
addBullet('Facilita di accesso (parcheggio, ascensore, scale)');
addBullet('Richieste particolari del cliente');
addBullet('Trattativa commerciale');

addSection('Zone attualmente coperte');
addParagraph('Il calcolatore accetta richieste da queste zone (basate sul CAP):');
addBullet('Provincia di Varese (CAP che iniziano con 21)');
addBullet('Provincia di Milano (CAP che iniziano con 20)');
addParagraph('Per aggiungere altre zone (Como, Monza, Canton Ticino...) basta comunicarlo.');

addSection('Cosa si puo modificare');
addChecklistBox();

addParagraph('Tutte le modifiche sono semplici e veloci da implementare. Basta indicare i nuovi valori desiderati.');

// Footer
y = 275;
doc.setDrawColor(226, 232, 240);
doc.line(20, y, 190, y);
doc.setTextColor(...lightGray);
doc.setFontSize(9);
doc.text('BP Cleaning - Documento riservato', 105, y + 8, { align: 'center' });

// Save
const pdfOutput = doc.output('arraybuffer');
fs.writeFileSync('docs/calcolatore-guida-cliente.pdf', Buffer.from(pdfOutput));
console.log('PDF generato: docs/calcolatore-guida-cliente.pdf');
