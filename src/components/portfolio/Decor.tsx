import { css } from "../../lib/css";

/** Procedural film-grain used as a multiply overlay (data-URI SVG noise). */
const GRAIN_URI =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

interface DecorProps {
  /** Opacity of the grain overlay (0 = off). */
  grainOpacity: number;
}

/**
 * Fixed, full-screen decoration that sits behind (paper tint) and in front
 * (grain) of the content, plus the SVG filter definitions referenced by
 * `filter:url(#rough)` throughout the poster.
 */
export default function Decor({ grainOpacity }: DecorProps) {
  return (
    <>
      <svg width="0" height="0" style={css("position:absolute")} aria-hidden="true">
        <filter id="rough">
          <feTurbulence type="fractalNoise" baseFrequency="0.012 0.016" numOctaves={2} seed={7} result="n" />
          <feDisplacementMap in="SourceGraphic" in2="n" scale={7} xChannelSelector="R" yChannelSelector="G" />
        </filter>
        <filter id="roughS">
          <feTurbulence type="fractalNoise" baseFrequency="0.02 0.028" numOctaves={2} seed={11} result="n" />
          <feDisplacementMap in="SourceGraphic" in2="n" scale={4} xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </svg>

      {/* aged-paper tint blobs */}
      <div
        style={css(
          "position:fixed;inset:0;z-index:0;pointer-events:none;background:radial-gradient(60% 50% at 12% 8%, rgba(122,75,39,.10), transparent 60%),radial-gradient(50% 45% at 92% 80%, rgba(122,75,39,.12), transparent 60%),radial-gradient(40% 40% at 78% 12%, rgba(184,134,11,.08), transparent 55%)",
        )}
      />

      {/* grain */}
      <div
        style={{
          ...css("position:fixed;inset:0;z-index:60;pointer-events:none;mix-blend-mode:multiply"),
          backgroundImage: GRAIN_URI,
          opacity: grainOpacity,
        }}
      />
    </>
  );
}
