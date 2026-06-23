import { css } from "../../lib/css";

const TICKER = "★ FRONTEND ★ BACKEND ★ C++ ★ ENGINES ";

/** The diagonal red ticker strip that separates the hero from the works grid. */
export default function Marquee() {
  return (
    <div
      style={css(
        "height:54px;background:#C1272D;border-top:3px solid #1A1A1A;border-bottom:3px solid #1A1A1A;transform:rotate(-1.2deg) scale(1.04);margin:10px 0 40px;display:flex;align-items:center;overflow:hidden",
      )}
    >
      <div
        style={css(
          "white-space:nowrap;font-family:Oswald;font-weight:700;text-transform:uppercase;letter-spacing:.3em;color:#EFE4CC;font-size:15px;opacity:.85",
        )}
      >
        {TICKER.repeat(4) + "★"}
      </div>
    </div>
  );
}
