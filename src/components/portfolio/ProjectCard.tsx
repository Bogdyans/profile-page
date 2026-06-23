import { css } from "../../lib/css";
import { GEARS } from "../../lib/gear";
import { uiStrings as s } from "../../data/strings";
import type { Project } from "../../data/projects";
import { usePortfolio } from "./context";

interface ProjectCardProps {
  project: Project;
  /** Open this project's blueprint detail page. */
  onOpen: () => void;
}

/** A single torn-paper project card in the works grid. */
export default function ProjectCard({ project: p, onOpen }: ProjectCardProps) {
  const { t } = usePortfolio();

  return (
    <div
      onClick={onOpen}
      className="pvz-card"
      style={css("position:relative;cursor:pointer", { "--rot": `${p.rot}deg` })}
    >
      {/* torn paper plate */}
      <div style={css("position:absolute;inset:0;background:#EFE4CC;border:3px solid #1A1A1A;filter:url(#rough) drop-shadow(6px 8px 0 rgba(26,26,26,.16))")} />
      {/* washi tape */}
      <span style={css("position:absolute;top:-9px;left:50%;width:64px;height:22px;transform:translateX(-50%) rotate(-3deg);background:rgba(184,134,11,.4);border-left:1px dashed rgba(26,26,26,.3);border-right:1px dashed rgba(26,26,26,.3);z-index:3")} />

      <div style={css("position:relative;padding:20px 18px 22px;z-index:2")}>
        <div style={css("display:flex;align-items:center;justify-content:space-between;margin-bottom:12px")}>
          <span style={css("background:#C1272D;color:#EFE4CC;font-family:'Special Elite',monospace;font-size:13px;letter-spacing:.08em;padding:4px 9px;border:2px solid #1A1A1A")}>
            {p.num}
          </span>
          <svg viewBox="0 0 100 100" width="34" height="34" className="pvz-rotate" style={css("", { "--deg": "150deg" })}>
            <path d={GEARS.b} fill="#B8860B" stroke="#1A1A1A" strokeWidth={3} />
            <circle cx="50" cy="50" r="13" fill="#EFE4CC" stroke="#1A1A1A" strokeWidth={3} />
          </svg>
        </div>

        {/* preview */}
        <div style={css("position:relative;height:152px;border:2.5px solid #1A1A1A;background:repeating-linear-gradient(45deg,#D9C49A,#D9C49A 9px,#E8D9B5 9px,#E8D9B5 18px);display:flex;align-items:center;justify-content:center;overflow:hidden")}>
          <span style={css("position:absolute;top:7px;left:8px;font-family:'Special Elite',monospace;font-size:10px;letter-spacing:.1em;color:#7A4B27")}>FIG. {p.num}</span>
          <span style={css("font-family:'Special Elite',monospace;font-size:11px;letter-spacing:.12em;color:#1A1A1A;background:#EFE4CC;border:1.5px solid #1A1A1A;padding:5px 10px")}>
            {t(s.previewLabel)}
          </span>
        </div>

        <div style={css("font-family:'Special Elite',monospace;font-size:11px;letter-spacing:.08em;color:#7A4B27;margin:14px 0 4px")}>
          {t(p.kind)} · {p.year}
        </div>
        <h3 style={css("margin:0 0 8px;font-family:Oswald;font-weight:700;text-transform:uppercase;font-size:clamp(22px,2.4vw,30px);line-height:.96")}>
          {t(p.title)}
        </h3>
        <p style={css("margin:0 0 14px;font-family:Caveat;font-size:20px;line-height:1.2;color:#3a2a18")}>{t(p.short)}</p>

        <div style={css("display:flex;flex-wrap:wrap;gap:6px;margin-bottom:14px")}>
          {p.stack.map((tag) => (
            <span key={tag} style={css("font-family:'Special Elite',monospace;font-size:10px;letter-spacing:.05em;border:1.5px solid #1A1A1A;padding:3px 8px;color:#1A1A1A")}>
              {tag}
            </span>
          ))}
        </div>

        <div style={css("display:inline-flex;align-items:center;gap:7px;font-family:Oswald;font-weight:600;text-transform:uppercase;font-size:13px;letter-spacing:.08em;color:#C1272D;border-bottom:2px solid #C1272D;padding-bottom:2px")}>
          {t(s.openLabel)} →
        </div>
      </div>
    </div>
  );
}
