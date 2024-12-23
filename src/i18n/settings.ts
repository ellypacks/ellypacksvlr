// elly-site/src/i18n/settings.ts

// Lista de locais possíveis
export const locales = ['pt-BR', 'en'] as const;

// Local padrão
export const defaultLocale = 'pt-BR' as const;

// O tipo "Locale" vira "pt-BR" | "en"
export type Locale = (typeof locales)[number];

// Função type guard: garante no runtime que "value" é realmente um Locale
export function isLocale(value: string): value is Locale {
  return (locales as ReadonlyArray<string>).includes(value);
}
