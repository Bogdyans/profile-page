import { css } from "../../../lib/css.ts";
import { uiStrings as s } from "../../../data/strings.ts";
import { projects } from "../../../data/projects.ts";
import { usePortfolio } from "../context.ts";
import ProjectCard from "../ProjectCard.tsx";

interface WorksProps {
  /** Open the blueprint detail page for a project by id. */
  onOpenProject: (id: string) => void;
}

/** The "Works" section: a folder of project blueprints. */
export default function Works({ onOpenProject }: WorksProps) {
  const { t } = usePortfolio();

  return (
    <section id="sec-works" style={css("max-width:1140px;margin:0 auto;padding:30px 22px 60px")}>
      <div style={css("display:flex;align-items:flex-end;gap:18px;margin-bottom:34px;flex-wrap:wrap")}>
        <div>
          <div style={css("font-family:'Special Elite',monospace;font-size:13px;letter-spacing:.14em;color:#7A4B27;margin-bottom:6px")}>
            {t(s.worksKicker)}
          </div>
          <h2 style={css("margin:0;font-family:Oswald;font-weight:700;text-transform:uppercase;font-size:clamp(40px,6vw,72px);line-height:.9")}>
            {t(s.worksTitle)}
          </h2>
        </div>
        <div style={css("font-family:Caveat;font-size:24px;color:#C1272D;transform:rotate(-2deg);margin-bottom:10px")}>
          {t(s.worksHint)}
        </div>
      </div>

      <div style={css("display:grid;grid-template-columns:repeat(auto-fit,minmax(290px,1fr));gap:34px 30px")}>
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} onOpen={() => onOpenProject(p.id)} />
        ))}
      </div>
    </section>
  );
}
