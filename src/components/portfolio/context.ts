import { createContext, useContext } from "react";
import type { Lang, Localized } from "../../lib/i18n";

/** Cross-cutting state shared by every portfolio section. */
export interface PortfolioContextValue {
  /** Active language. */
  lang: Lang;
  /** Translate a {@link Localized} value into the active language. */
  t: <T>(value: Localized<T>) => T;
  /** CSS `animation` value for the slow forward-spinning ambient gears. */
  ambientA: string;
  /** CSS `animation` value for the slow reverse-spinning ambient gears. */
  ambientB: string;
}

export const PortfolioContext = createContext<PortfolioContextValue | null>(null);

/** Read the portfolio context; throws if used outside `<Portfolio>`. */
export function usePortfolio(): PortfolioContextValue {
  const ctx = useContext(PortfolioContext);
  if (!ctx) throw new Error("usePortfolio must be used inside <Portfolio>");
  return ctx;
}
