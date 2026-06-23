import { css } from "../../lib/css";
import { GEARS } from "../../lib/gear";
import { uiStrings as s } from "../../data/strings";
import type { Project } from "../../data/projects";
import { usePortfolio } from "./context";

interface ProjectDetailProps {
  project: Project;
  /** 1-based position within the project list. */
  index: number;
  total: number;
  onBack: () => void;
  onPrev: () => void;
  onNext: () => void;
}

/** A corner registration tick on the blueprint sheet. */
function CornerTick({ pos }: { pos: string }) {
  return <span style={css(`position:absolute;${pos};width:20px;height:20px`)} />;
}

/** The full-screen blueprint view for a single project. */
export default function ProjectDetail({ project: ap, index, total, onBack, onPrev, onNext }: ProjectDetailProps) {
  const { t } = usePortfolio();

  return (
    <main style={css("position:relative;z-index:1;max-width:1080px;margin:0 auto;padding:108px 22px 80px;animation:foldIn .5s cubic-bezier(.2,.8,.2,1) both;transform-origin:top center")}>
      <button onClick={onBack} className="pvz-cta" style={css("display:inline-flex;align-items:center;gap:8px;background:linear-gradient(#8a5a30,#6a4120);border:3px solid #1A1A1A;border-radius:5px;padding:9px 16px;cursor:pointer;font-family:Oswald;font-weight:600;text-transform:uppercase;letter-spacing:.06em;color:#EFE4CC;font-size:13px;margin-bottom:20px", { "--edge": "rgba(26,26,26,.3)" })}>
        {t(s.dBack)}
      </button>

      {/* blueprint sheet */}
      <div style={css("position:relative;background:#EFE4CC;border:3px solid #1A1A1A;box-shadow:8px 11px 0 rgba(26,26,26,.16);background-image:linear-gradient(rgba(122,75,39,.10) 1px,transparent 1px),linear-gradient(90deg,rgba(122,75,39,.10) 1px,transparent 1px);background-size:26px 26px")}>
        <CornerTick pos="top:8px;left:8px;border-left:2px solid #C1272D;border-top:2px solid #C1272D" />
        <CornerTick pos="top:8px;right:8px;border-right:2px solid #C1272D;border-top:2px solid #C1272D" />
        <CornerTick pos="bottom:8px;left:8px;border-left:2px solid #C1272D;border-bottom:2px solid #C1272D" />
        <CornerTick pos="bottom:8px;right:8px;border-right:2px solid #C1272D;border-bottom:2px solid #C1272D" />

        {/* faint gear watermark */}
        <svg viewBox="0 0 100 100" style={css("position:absolute;right:-40px;top:30px;width:280px;opacity:.06;pointer-events:none")}>
          <path d={GEARS.c} fill="#1A1A1A" />
          <circle cx="50" cy="50" r="20" fill="none" stroke="#1A1A1A" strokeWidth={3} />
        </svg>

        <div style={css("position:relative;padding:34px 34px 0;z-index:2")}>
          <div style={css("display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:14px")}>
            <div>
              <span style={css("background:#C1272D;color:#EFE4CC;font-family:'Special Elite',monospace;font-size:13px;letter-spacing:.1em;padding:4px 11px;border:2px solid #1A1A1A")}>{ap.num}</span>
              <h1 style={css("margin:14px 0 6px;font-family:Oswald;font-weight:700;text-transform:uppercase;font-size:clamp(40px,7vw,82px);line-height:.86")}>{t(ap.title)}</h1>
              <div style={css("font-family:'Special Elite',monospace;font-size:13px;letter-spacing:.06em;color:#7A4B27")}>{t(ap.kind)} · {ap.year}</div>
            </div>
            <svg viewBox="0 0 100 100" width="64" height="64" className="pvz-rotate" style={css("flex:none;cursor:pointer", { "--deg": "180deg" })}>
              <path d={GEARS.c} fill="#1A1A1A" />
              <circle cx="50" cy="50" r="18" fill="#EFE4CC" stroke="#1A1A1A" strokeWidth={3} />
              <circle cx="50" cy="50" r="6" fill="#C1272D" />
            </svg>
          </div>

          {/* big preview */}
          <div style={css("position:relative;height:clamp(220px,34vw,360px);border:3px solid #1A1A1A;margin:22px 0 6px;background:repeating-linear-gradient(45deg,#D9C49A,#D9C49A 11px,#E8D9B5 11px,#E8D9B5 22px);display:flex;align-items:center;justify-content:center")}>
            <span style={css("position:absolute;top:10px;left:12px;font-family:'Special Elite',monospace;font-size:11px;letter-spacing:.1em;color:#7A4B27")}>{t(s.dSheet)} {ap.num}</span>
            <span style={css("position:absolute;bottom:10px;right:12px;font-family:'Special Elite',monospace;font-size:11px;letter-spacing:.1em;color:#7A4B27")}>{t(s.dScale)}</span>
            <span style={css("font-family:'Special Elite',monospace;font-size:13px;letter-spacing:.1em;background:#EFE4CC;border:2px solid #1A1A1A;padding:8px 16px")}>{t(s.previewLabel)}</span>
          </div>

          <div style={css("display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:26px;padding:24px 0 30px")}>
            <div style={css("grid-column:1 / -1")}>
              <div style={css("font-family:'Special Elite',monospace;font-size:12px;letter-spacing:.14em;color:#C1272D;border-bottom:2px solid #1A1A1A;padding-bottom:5px;margin-bottom:10px;display:inline-block")}>{t(s.dPurpose)}</div>
              <p style={css("font-family:Oswald;font-weight:400;font-size:clamp(17px,2vw,21px);line-height:1.55;color:#241a10;margin:0;max-width:62ch;text-wrap:pretty")}>{t(ap.desc)}</p>
            </div>
            <div>
              <div style={css("font-family:'Special Elite',monospace;font-size:12px;letter-spacing:.14em;color:#C1272D;border-bottom:2px solid #1A1A1A;padding-bottom:5px;margin-bottom:12px;display:inline-block")}>{t(s.dSpec)}</div>
              <div style={css("display:flex;flex-wrap:wrap;gap:8px")}>
                {ap.stack.map((tag) => (
                  <span key={tag} style={css("font-family:'Special Elite',monospace;font-size:12px;letter-spacing:.04em;border:2px solid #1A1A1A;padding:5px 11px;background:#E8D9B5")}>{tag}</span>
                ))}
              </div>
            </div>
            <div>
              <div style={css("font-family:'Special Elite',monospace;font-size:12px;letter-spacing:.14em;color:#C1272D;border-bottom:2px solid #1A1A1A;padding-bottom:5px;margin-bottom:12px;display:inline-block")}>{t(s.dRole)}</div>
              <p style={css("font-family:Caveat;font-size:24px;line-height:1.25;color:#3a2a18;margin:0")}>{t(ap.role)}</p>
            </div>
          </div>
        </div>

        {/* title block / navigation strip */}
        <div style={css("position:relative;z-index:2;border-top:3px solid #1A1A1A;display:flex;align-items:stretch;flex-wrap:wrap")}>
          <button onClick={onPrev} className="pvz-hoverbg" style={css("flex:1;min-width:130px;display:flex;align-items:center;gap:8px;justify-content:center;padding:14px;border:0;border-right:2px solid #1A1A1A;cursor:pointer;font-family:Oswald;font-weight:600;text-transform:uppercase;letter-spacing:.06em;font-size:13px;color:#1A1A1A")}>◄ {t(s.dPrev)}</button>
          <div style={css("flex:1;min-width:130px;display:flex;align-items:center;justify-content:center;padding:14px;font-family:'Special Elite',monospace;font-size:12px;letter-spacing:.1em;color:#7A4B27;border-right:2px solid #1A1A1A")}>{index} / {total}</div>
          <button onClick={onNext} className="pvz-hoverbg" style={css("flex:1;min-width:130px;display:flex;align-items:center;gap:8px;justify-content:center;padding:14px;border:0;cursor:pointer;font-family:Oswald;font-weight:600;text-transform:uppercase;letter-spacing:.06em;font-size:13px;color:#1A1A1A")}>{t(s.dNext)} ►</button>
        </div>
      </div>
    </main>
  );
}
