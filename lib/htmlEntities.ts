/** Decodifica entidades HTML comuns (conteúdo vindo do WordPress). */
export function decodeHtmlEntities(input: string) {
  return input
    .replace(/&#(\d+);/g, (_, dec) => String.fromCodePoint(Number(dec)))
    .replace(/&#x([0-9a-fA-F]+);/g, (_, hex) =>
      String.fromCodePoint(Number.parseInt(hex, 16)),
    )
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

export function htmlToPlainText(input: string | null | undefined) {
  if (!input) return "";

  const text = input
    .replace(/<br\s*\/?>\s*/gi, "\n")
    .replace(/<\/p>/gi, "\n\n")
    .replace(/<p[^>]*>/gi, "")
    .replace(/<[^>]+>/g, "");

  return decodeHtmlEntities(text).replace(/\n{2,}/g, "\n").trim();
}
