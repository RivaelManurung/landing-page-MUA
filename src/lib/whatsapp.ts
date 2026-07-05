const WHATSAPP_BASE_URL = "https://wa.me";

/**
 * Builds a wa.me deep link with a URL-encoded prefilled message.
 * Strips non-digit characters so "0812-3456" and "+62812..." both work.
 */
export function buildWhatsAppLink(phone: string, message: string): string {
  const digits = phone.replace(/\D/g, "");
  return `${WHATSAPP_BASE_URL}/${digits}?text=${encodeURIComponent(message)}`;
}

export function buildPackageMessage(
  packageName: string,
  priceLabel: string,
): string {
  return [
    `Halo Lunée! Saya ingin booking *${packageName}* (${priceLabel}).`,
    "",
    "Nama: ",
    "Tanggal acara: ",
    "Lokasi: ",
    "",
    "Mohon info ketersediaannya ya, terima kasih!",
  ].join("\n");
}

export interface CustomBookingRequest {
  name: string;
  eventType: string;
  eventDate: string;
  location: string;
  notes: string;
}

export function buildCustomMessage(request: CustomBookingRequest): string {
  const lines = [
    "Halo Lunée! Saya ingin konsultasi *Paket Custom*.",
    "",
    `Nama: ${request.name}`,
    `Jenis acara: ${request.eventType}`,
    `Tanggal acara: ${request.eventDate}`,
    `Lokasi: ${request.location}`,
  ];

  if (request.notes.trim()) {
    lines.push(`Kebutuhan: ${request.notes.trim()}`);
  }

  lines.push("", "Mohon dibantu penawarannya ya, terima kasih!");
  return lines.join("\n");
}

export function buildGeneralMessage(): string {
  return "Halo Lunée! Saya ingin konsultasi kebutuhan makeup untuk acara saya. Boleh minta info paket dan ketersediaan jadwalnya?";
}
