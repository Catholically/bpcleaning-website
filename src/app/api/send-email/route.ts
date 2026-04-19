import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const TO_EMAIL = process.env.CONTACT_TO_EMAIL || "info@bpcleaning.it";
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || "BP Cleaning <onboarding@resend.dev>";

type ContactPayload = {
  type: "contact";
  name: string;
  email: string;
  phone: string;
  company?: string;
  service: string;
  message?: string;
};

type QuotePayload = {
  type: "quote";
  name: string;
  email: string;
  phone: string;
  serviceType: string | null;
  sqm: number;
  frequency: string | null;
  cap: string;
  priceMin?: number | null;
  priceMax?: number | null;
};

type Payload = ContactPayload | QuotePayload;

function escape(value: unknown): string {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function buildContactEmail(data: ContactPayload) {
  const subject = `Nuova richiesta da ${data.name} — ${data.service}`;
  const html = `
    <h2>Nuova richiesta dal sito</h2>
    <p><strong>Nome:</strong> ${escape(data.name)}</p>
    <p><strong>Email:</strong> ${escape(data.email)}</p>
    <p><strong>Telefono:</strong> ${escape(data.phone)}</p>
    ${data.company ? `<p><strong>Azienda:</strong> ${escape(data.company)}</p>` : ""}
    <p><strong>Servizio:</strong> ${escape(data.service)}</p>
    ${data.message ? `<p><strong>Messaggio:</strong><br>${escape(data.message).replace(/\n/g, "<br>")}</p>` : ""}
  `;
  return { subject, html };
}

function buildQuoteEmail(data: QuotePayload) {
  const subject = `Nuovo preventivo da ${data.name} — ${data.serviceType ?? "non specificato"}`;
  const priceLine =
    data.priceMin != null && data.priceMax != null
      ? `<p><strong>Stima calcolata:</strong> €${data.priceMin} - €${data.priceMax}</p>`
      : "";
  const html = `
    <h2>Nuova richiesta di preventivo</h2>
    <p><strong>Nome:</strong> ${escape(data.name)}</p>
    <p><strong>Email:</strong> ${escape(data.email)}</p>
    <p><strong>Telefono:</strong> ${escape(data.phone)}</p>
    <p><strong>Tipo servizio:</strong> ${escape(data.serviceType)}</p>
    <p><strong>Metratura:</strong> ${escape(data.sqm)} mq</p>
    <p><strong>Frequenza:</strong> ${escape(data.frequency)}</p>
    <p><strong>CAP:</strong> ${escape(data.cap)}</p>
    ${priceLine}
  `;
  return { subject, html };
}

export async function POST(request: Request) {
  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json(
      { error: "Email service not configured" },
      { status: 500 },
    );
  }

  let payload: Payload;
  try {
    payload = (await request.json()) as Payload;
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  if (!payload?.type || !payload.name || !payload.email || !payload.phone) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const { subject, html } =
    payload.type === "contact" ? buildContactEmail(payload) : buildQuoteEmail(payload);

  try {
    const { data, error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: [TO_EMAIL],
      replyTo: payload.email,
      subject,
      html,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: error.message }, { status: 502 });
    }

    return NextResponse.json({ ok: true, id: data?.id });
  } catch (err) {
    console.error("Send email failed:", err);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
