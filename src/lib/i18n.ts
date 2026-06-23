/** The two languages the site supports. */
export type Lang = "ru" | "en";

/**
 * A value that is either language-agnostic (a plain `T`, e.g. "C++") or a
 * `{ ru, en }` pair. Mirrors the data shape used throughout the original poster.
 */
export type Localized<T = string> = T | { ru: T; en: T };

function isPair<T>(value: Localized<T>): value is { ru: T; en: T } {
  return typeof value === "object" && value !== null && "ru" in value;
}

/** Resolve a {@link Localized} value for `lang`, falling back to Russian. */
export function translate<T>(value: Localized<T>, lang: Lang): T {
  if (!isPair(value)) return value;
  return value[lang] != null ? value[lang] : value.ru;
}
