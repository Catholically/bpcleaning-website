import { jsPDF } from 'jspdf';
import fs from 'fs';

// Colori BP Cleaning
const teal = [13, 148, 136];
const darkBlue = [30, 58, 95];
const orange = [249, 115, 22];
const gray = [71, 85, 105];

const doc = new jsPDF();
let y = 20;

function addHeader() {
  // Header background
  doc.setFillColor(...teal);
  doc.rect(0, 0, 210, 45, 'F');

  // Title
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(24);
  doc.setFont('helvetica', 'bold');
  doc.text('Calcolatore Preventivi', 105, 22, { align: 'center' });

  doc.setFontSize(14);
  doc.setFont('helvetica', 'normal');
  doc.text('Guida Completa - BP Cleaning', 105, 32, { align: 'center' });

  y = 55;
}

function addSection(title) {
  if (y > 250) {
    doc.addPage();
    y = 20;
  }

  doc.setFillColor(...teal);
  doc.rect(15, y - 5, 180, 10, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text(title, 20, y + 2);

  y += 15;
  doc.setTextColor(...gray);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(11);
}

function addSubsection(title) {
  if (y > 260) {
    doc.addPage();
    y = 20;
  }

  doc.setTextColor(...darkBlue);
  doc.setFontSize(12);
  doc.setFont('helvetica', 'bold');
  doc.text(title, 20, y);
  y += 8;
  doc.setTextColor(...gray);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
}

function addParagraph(text) {
  const lines = doc.splitTextToSize(text, 170);
  if (y + lines.length * 5 > 280) {
    doc.addPage();
    y = 20;
  }
  doc.text(lines, 20, y);
  y += lines.length * 5 + 5;
}

function addBullet(text) {
  if (y > 275) {
    doc.addPage();
    y = 20;
  }
  doc.setFillColor(...teal);
  doc.circle(23, y - 1.5, 1.5, 'F');
  const lines = doc.splitTextToSize(text, 160);
  doc.text(lines, 28, y);
  y += lines.length * 5 + 2;
}

function addTable(headers, rows) {
  if (y > 220) {
    doc.addPage();
    y = 20;
  }

  const colWidths = [50, 30, 90];
  const startX = 20;
  let currentX = startX;

  // Header
  doc.setFillColor(...darkBlue);
  doc.rect(startX, y - 5, 170, 8, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(10);
  doc.setFont('helvetica', 'bold');

  headers.forEach((header, i) => {
    doc.text(header, currentX + 2, y);
    currentX += colWidths[i];
  });

  y += 6;
  doc.setTextColor(...gray);
  doc.setFont('helvetica', 'normal');

  // Rows
  rows.forEach((row, rowIndex) => {
    if (y > 275) {
      doc.addPage();
      y = 20;
    }

    currentX = startX;
    if (rowIndex % 2 === 0) {
      doc.setFillColor(248, 250, 252);
      doc.rect(startX, y - 4, 170, 7, 'F');
    }

    row.forEach((cell, i) => {
      if (i === 1 && cell.includes('€')) {
        doc.setTextColor(...teal);
        doc.setFont('helvetica', 'bold');
      } else if (cell.includes('%')) {
        doc.setTextColor(...orange);
        doc.setFont('helvetica', 'bold');
      } else {
        doc.setTextColor(...gray);
        doc.setFont('helvetica', 'normal');
      }
      doc.text(cell, currentX + 2, y);
      currentX += colWidths[i];
    });
    y += 7;
  });

  y += 5;
}

function addHighlightBox(text, type = 'info') {
  if (y > 250) {
    doc.addPage();
    y = 20;
  }

  const colors = {
    info: teal,
    warning: [245, 158, 11],
    orange: orange
  };

  const bgColors = {
    info: [240, 253, 250],
    warning: [254, 243, 199],
    orange: [255, 237, 213]
  };

  doc.setFillColor(...bgColors[type]);
  doc.rect(20, y - 3, 170, 18, 'F');
  doc.setFillColor(...colors[type]);
  doc.rect(20, y - 3, 3, 18, 'F');

  doc.setTextColor(...gray);
  doc.setFontSize(10);
  const lines = doc.splitTextToSize(text, 160);
  doc.text(lines, 27, y + 3);

  y += 22;
}

function addFormulaBox() {
  if (y > 230) {
    doc.addPage();
    y = 20;
  }

  doc.setFillColor(30, 41, 59);
  doc.rect(20, y, 170, 35, 'F');

  doc.setTextColor(255, 255, 255);
  doc.setFontSize(10);
  doc.setFont('courier', 'normal');

  const formulas = [
    '1. Prezzo Base = Metri Quadri x Prezzo/mq',
    '2. Prezzo Scontato = Prezzo Base x (1 - Sconto)',
    '3. Range Minimo = Prezzo Scontato x 0.85',
    '4. Range Massimo = Prezzo Scontato x 1.15'
  ];

  formulas.forEach((f, i) => {
    doc.setFillColor(...teal);
    doc.rect(25, y + 5 + i * 8, 2, 6, 'F');
    doc.text(f, 32, y + 10 + i * 8);
  });

  y += 45;
  doc.setFont('helvetica', 'normal');
}

function addExampleBox() {
  if (y > 200) {
    doc.addPage();
    y = 20;
  }

  // Box border
  doc.setDrawColor(226, 232, 240);
  doc.setLineWidth(0.5);
  doc.rect(20, y, 170, 50, 'S');

  doc.setTextColor(...darkBlue);
  doc.setFontSize(11);
  doc.setFont('helvetica', 'bold');
  doc.text('Esempio: Ufficio 100 mq, pulizia settimanale', 25, y + 8);

  doc.setTextColor(...gray);
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');

  doc.text('Input:', 25, y + 18);
  doc.text('- Tipo: Ufficio (€2.00/mq)', 30, y + 24);
  doc.text('- Metratura: 100 mq', 30, y + 30);
  doc.text('- Frequenza: Settimanale (-25%)', 30, y + 36);

  doc.text('Calcolo:', 110, y + 18);
  doc.text('Base: 100 x €2.00 = €200', 115, y + 24);
  doc.text('Scontato: €200 x 0.75 = €150', 115, y + 30);
  doc.text('Range: €127 - €172', 115, y + 36);

  // Result box
  doc.setFillColor(...teal);
  doc.rect(25, y + 42, 160, 12, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(12);
  doc.setFont('helvetica', 'bold');
  doc.text('Prezzo mostrato: €127 - €172', 105, y + 50, { align: 'center' });

  y += 60;
}

// ===== GENERATE PDF =====

addHeader();

addSection('Come Funziona');
addParagraph('Il calcolatore guida il cliente in 4 semplici step per ottenere una stima immediata:');
addBullet('Step 1: Tipo di servizio - Casa, Ufficio, Condominio o Industriale');
addBullet('Step 2: Metratura e frequenza - Slider 20-500 mq + scelta frequenza');
addBullet('Step 3: Localita - Inserimento CAP per verifica copertura');
addBullet('Step 4: Contatti - Nome, telefono, email per ricevere il preventivo');

addHighlightBox('Importante: Il calcolatore fornisce una stima indicativa. Il prezzo finale viene confermato dopo sopralluogo gratuito.', 'info');

addSection('Prezzi Base per Metro Quadro');
addTable(
  ['Tipo Servizio', 'Prezzo/mq', 'Perche questo prezzo'],
  [
    ['Casa', '€2.50', 'Maggiore attenzione ai dettagli, mobili'],
    ['Ufficio', '€2.00', 'Standard, spazi aperti, meno ostacoli'],
    ['Condominio', '€1.80', 'Spazi comuni ripetitivi (scale, androni)'],
    ['Industriale', '€1.50', 'Grandi superfici, economia di scala']
  ]
);

addSection('Sconti per Contratto Continuativo');
addTable(
  ['Frequenza', 'Sconto', 'Strategia'],
  [
    ['Una tantum', '0%', 'Prezzo pieno, costi fissi di avvio'],
    ['Mensile', '-10%', 'Sconto minimo per contratto base'],
    ['Quindicinale', '-15%', 'Buon compromesso qualita/prezzo'],
    ['Settimanale', '-25%', 'Massimo sconto per fidelizzazione']
  ]
);

addHighlightBox('Perche -25% settimanale? Fidelizza il cliente, riduce i costi di acquisizione, permette di organizzare meglio i turni.', 'warning');

doc.addPage();
y = 20;

addSection('La Formula del Calcolo');
addFormulaBox();

addParagraph('Il prezzo viene mostrato come range ±15% per permettere flessibilita:');
addBullet('Stato dell\'immobile (pulito vs trascurato)');
addBullet('Difficolta di accesso (scale, parcheggio)');
addBullet('Richieste speciali del cliente');
addBullet('Margine di negoziazione commerciale');

addSubsection('Esempio Pratico');
addExampleBox();

addSection('Come Modificare i Parametri');
addParagraph('File da modificare: src/components/QuoteCalculator.tsx');

addSubsection('Modificare i Prezzi (righe 19-24)');
addParagraph('pricePerSqm: 2.5 → Casa | 2.0 → Ufficio | 1.8 → Condominio | 1.5 → Industriale');

addSubsection('Modificare gli Sconti (righe 26-31)');
addParagraph('discount: 0 → Una tantum | 0.25 → Settimanale | 0.15 → Quindicinale | 0.10 → Mensile');
addParagraph('Nota: 0.25 significa 25%, 0.10 significa 10%');

addSubsection('Modificare il Range (righe 60-63)');
addParagraph('Cambia 0.85/1.15 per range piu stretto o largo (es. 0.90/1.10 per ±10%)');

addSection('Checklist per il Cliente');
addHighlightBox('Domande da verificare: I prezzi €/mq sono realistici? Lo sconto 25% e sostenibile? Il range ±15% da abbastanza margine?', 'orange');

addSection('Zone Coperte (CAP)');
addBullet('21xxx - Provincia di Varese');
addBullet('20xxx - Provincia di Milano');
addParagraph('Per aggiungere province (es. Como 22xxx), modificare la funzione validateCAP nel file.');

// Footer
doc.setFillColor(241, 245, 249);
doc.rect(0, 280, 210, 17, 'F');
doc.setTextColor(...gray);
doc.setFontSize(9);
doc.text('BP Cleaning - Documento interno - Per modifiche contattare il team tecnico', 105, 288, { align: 'center' });

// Save
const pdfOutput = doc.output('arraybuffer');
fs.writeFileSync('docs/calcolatore-preventivi-guida.pdf', Buffer.from(pdfOutput));
console.log('PDF generato: docs/calcolatore-preventivi-guida.pdf');
