/**
 * Build the SVG path `d` attribute for a cog/gear, ported 1:1 from the
 * original poster. Vertices alternate between an outer (tooth tip) and inner
 * (tooth root) radius around a fixed 100×100 viewBox centred at (50, 50).
 *
 * @param teeth Number of teeth.
 * @param outer Outer radius (tooth tip).
 * @param inner Inner radius (tooth root).
 */
export function gearPath(teeth: number, outer: number, inner: number): string {
  const cx = 50;
  const cy = 50;
  const points = teeth * 2;
  const step = Math.PI / teeth;
  let d = "";

  for (let i = 0; i < points; i++) {
    const r = i % 2 ? inner : outer;
    const angle = i * step - Math.PI / 2;
    const x = cx + Math.cos(angle) * r;
    const y = cy + Math.sin(angle) * r;
    d += (i ? "L" : "M") + x.toFixed(2) + " " + y.toFixed(2);
  }

  return d + "Z";
}

/** The three gear silhouettes reused across the poster (gA, gB, gC). */
export const GEARS = {
  a: gearPath(10, 47, 36),
  b: gearPath(8, 47, 34),
  c: gearPath(14, 48, 39),
} as const;
