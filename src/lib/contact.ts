/**
 * Single source of truth for Himadri Creation contact details.
 * Mirrors the number already used by the legacy site footer/WhatsApp buttons.
 */
export const WHATSAPP_NUMBER = "918327482228";
export const PHONE_NUMBER = "+918327482228";

export function whatsappLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}