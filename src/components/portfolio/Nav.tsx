import { css } from "../../lib/css";
import { GEARS } from "../../lib/gear";
import { uiStrings } from "../../data/strings";
import { usePortfolio } from "./context";
import type { Localized } from "../../lib/i18n";

/** Section anchors in display order, paired with their nav label. */
const NAV_DEFS: { id: string; label: Localized }[] = [
  { id: "top", label: uiStrings.navTop },
  { id: "works", label: uiStrings.navWorks },
  { id: "about", label: uiStrings.navAbout },
  { id: "contact", label: uiStrings.navContact },
];

interface NavProps {
  /** Currently visible section (from scroll-spy). */
  active: string;
  /** Whether a project detail page is open (suppresses nav highlight). */
  detailOpen: boolean;
  /** Label on the language knob ("EN" while RU is active, and vice versa). */
  langLabel: string;
  onNavigate: (id: string) => void;
  onToggleLang: () => void;
}

/** Corner bolt; `pos` places it in one of the four corners. */
function Bolt({ pos }: { pos: string }) {
  return (
    <span
      style={css(
        `position:absolute;${pos};width:10px;height:10px;border-radius:50%;background:radial-gradient(circle at 34% 30%,#f1d784,#946d14);border:1.5px solid #1A1A1A;box-shadow:inset 0 -1px 1px rgba(0,0,0,.4)`,
      )}
    />
  );
}

/** Fixed control-panel navigation bar. */
export default function Nav({ active, detailOpen, langLabel, onNavigate, onToggleLang }: NavProps) {
  const { t } = usePortfolio();

  return (
    <nav
      style={css(
        "position:fixed;top:0;left:0;right:0;z-index:50;display:flex;justify-content:center;padding:10px 12px;pointer-events:none",
      )}
    >
      <div
        style={css(
          "pointer-events:auto;position:relative;display:flex;align-items:center;gap:8px;width:100%;max-width:1040px;padding:9px 14px;background:linear-gradient(#9c6a3b,#6f4620 70%,#5d3a18);border:3px solid #1A1A1A;border-radius:7px;box-shadow:0 7px 0 rgba(26,26,26,.3),inset 0 2px 0 rgba(255,225,180,.22),inset 0 -4px 7px rgba(0,0,0,.32);background-image:repeating-linear-gradient(0deg,rgba(0,0,0,.045) 0 1px,transparent 1px 6px),repeating-linear-gradient(0deg,rgba(255,220,170,.05) 0 1px,transparent 1px 13px)",
        )}
      >
        <Bolt pos="top:6px;left:8px" />
        <Bolt pos="top:6px;right:8px" />
        <Bolt pos="bottom:6px;left:8px" />
        <Bolt pos="bottom:6px;right:8px" />

        {/* brand nameplate */}
        <button
          onClick={() => onNavigate("top")}
          className="pvz-nudge"
          style={css(
            "flex:none;display:flex;align-items:center;gap:9px;padding:8px 13px;background:#1A1A1A;border:2.5px solid #1A1A1A;border-radius:6px;cursor:pointer;box-shadow:0 3px 0 #000,inset 0 1px 0 rgba(255,255,255,.1);margin-left:10px",
          )}
        >
          <svg viewBox="0 0 100 100" width="28" height="28" className="pvz-rotate" style={css("flex:none", { "--deg": "140deg" })}>
            <path d={GEARS.b} fill="#C1272D" stroke="#EFE4CC" strokeWidth={3} />
            <circle cx="50" cy="50" r="13" fill="#1A1A1A" stroke="#EFE4CC" strokeWidth={3} />
          </svg>
          <span style={css("font-family:Oswald;font-weight:700;font-size:16px;letter-spacing:.12em;color:#EFE4CC;white-space:nowrap")}>
            {"БАРЫКИН Б."}
          </span>
        </button>

        {/* section key-switches */}
        <div style={css("display:flex;flex:1;justify-content:center;flex-wrap:wrap;gap:8px")}>
          {NAV_DEFS.map(({ id, label }) => {
            const on = active === id && !detailOpen;
            const face = on ? "#C1272D" : "#EFE4CC";
            const ink = on ? "#FBEFD6" : "#1A1A1A";
            const edge = on ? "#7c151a" : "#b3995f";
            const led = on ? "#ffd23f" : "#9a865a";
            const glow = on ? "8px" : "0px";
            return (
              <button
                key={id}
                onClick={() => onNavigate(id)}
                className="pvz-press"
                style={css(
                  `position:relative;display:flex;align-items:center;gap:8px;padding:8px 15px;border:2.5px solid #1A1A1A;border-radius:6px;background:${face};cursor:pointer`,
                  { "--edge": edge },
                )}
              >
                <span style={css(`width:9px;height:9px;border-radius:50%;border:1.5px solid #1A1A1A;background:${led};box-shadow:0 0 ${glow} rgba(255,90,70,.95)`)} />
                <span style={css(`font-family:Oswald;font-weight:700;font-size:14px;letter-spacing:.05em;color:${ink};white-space:nowrap`)}>
                  {t(label)}
                </span>
              </button>
            );
          })}
        </div>

        {/* language knob */}
        <button
          onClick={onToggleLang}
          title="RU / EN"
          className="pvz-press"
          style={css(
            "flex:none;display:flex;align-items:center;gap:9px;padding:8px 13px;background:#EFE4CC;border:2.5px solid #1A1A1A;border-radius:6px;cursor:pointer;margin-right:10px",
            { "--edge": "#b3995f" },
          )}
        >
          <span style={css("font-family:Oswald;font-weight:700;font-size:14px;letter-spacing:.1em;color:#1A1A1A")}>{langLabel}</span>
          <svg viewBox="0 0 100 100" width="26" height="26" className="pvz-rotate" style={css("flex:none", { "--deg": "-120deg" })}>
            <path d={GEARS.a} fill="#C1272D" stroke="#1A1A1A" strokeWidth={3} />
            <circle cx="50" cy="50" r="13" fill="#EFE4CC" stroke="#1A1A1A" strokeWidth={3} />
            <circle cx="50" cy="50" r="4" fill="#1A1A1A" />
          </svg>
        </button>
      </div>
    </nav>
  );
}
