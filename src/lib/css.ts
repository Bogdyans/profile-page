import type { CSSProperties } from "react";

/**
 * Parse an inline CSS declaration string into a React style object.
 *
 * The original portfolio was a hand-crafted poster built almost entirely from
 * one-off inline styles. Rewriting every declaration into camelCased object
 * literals (or Tailwind arbitrary values) would hurt both fidelity and
 * readability, so instead we keep the original CSS verbatim and parse it here.
 *
 * @param style CSS text, e.g. `"position:absolute;top:6px;border:2px solid #1A1A1A"`.
 * @param vars  Optional CSS custom properties (e.g. `{ "--edge": "#7c151a" }`)
 *              merged in — used to drive the :hover/:active classes.
 */
export function css(
  style: string,
  vars?: Record<string, string | number>,
): CSSProperties {
  const out: Record<string, string | number> = {};

  for (const decl of style.split(";")) {
    const sep = decl.indexOf(":");
    if (sep === -1) continue;

    const prop = decl.slice(0, sep).trim();
    const value = decl.slice(sep + 1).trim();
    if (!prop || !value) continue;

    // Keep custom properties as-is; camelCase everything else (background-color → backgroundColor).
    const key = prop.startsWith("--")
      ? prop
      : prop.replace(/-([a-z])/g, (_, c: string) => c.toUpperCase());
    out[key] = value;
  }

  if (vars) Object.assign(out, vars);
  return out as CSSProperties;
}
