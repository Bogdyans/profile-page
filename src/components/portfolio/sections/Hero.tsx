import { css } from "../../../lib/css.ts";
import { GEARS } from "../../../lib/gear.ts";
import { uiStrings as s } from "../../../data/strings.ts";
import { usePortfolio } from "../context.ts";

interface HeroProps {
  /** Jump to the works section (hero CTA). */
  onOpenWorks: () => void;
}

/** Landing hero: name, role, tagline, CTA and the decorative gear collage. */
export default function Hero({ onOpenWorks }: HeroProps) {
  const { t, ambientA, ambientB } = usePortfolio();

  return (
    <section
      id="sec-top"
      style={css(
        "position:relative;max-width:1140px;margin:0 auto;padding:120px 22px 60px;display:grid;grid-template-columns:repeat(auto-fit,minmax(330px,1fr));gap:30px;align-items:center;min-height:96vh",
      )}
    >
      {/* left column */}
      <div style={css("position:relative;z-index:2")}>
        <div style={css("display:inline-block;font-family:'Special Elite',monospace;font-size:13px;letter-spacing:.16em;color:#C1272D;border-bottom:2px solid #C1272D;padding-bottom:4px;margin-bottom:22px;transform:rotate(-1deg)")}>
          {t(s.heroKicker)}
        </div>
        <h1 style={css("margin:0;font-family:Oswald;font-weight:700;text-transform:uppercase;line-height:.86;letter-spacing:-.01em;font-size:clamp(54px,9vw,118px)")}>
          <span style={css("display:block;transform:rotate(-1.5deg)")}>{t(s.heroName1)}</span>
          <span style={css("display:block;color:#C1272D;transform:translateX(6px) rotate(1deg);text-shadow:3px 3px 0 #1A1A1A")}>{t(s.heroName2)}</span>
        </h1>
        <div style={css("display:inline-block;margin-top:18px;background:#1A1A1A;color:#EFE4CC;font-family:Oswald;font-weight:600;font-size:clamp(13px,1.6vw,17px);letter-spacing:.14em;padding:7px 15px;transform:rotate(-.6deg)")}>
          {t(s.heroRole)}
        </div>
        <p style={css("font-family:Caveat;font-weight:500;font-size:clamp(22px,2.6vw,30px);line-height:1.25;color:#3a2a18;max-width:30ch;margin:24px 0 0;text-wrap:pretty")}>
          {t(s.heroTagline)}
        </p>
        <button
          onClick={onOpenWorks}
          className="pvz-cta"
          style={css(
            "margin-top:30px;display:inline-flex;align-items:center;gap:14px;background:linear-gradient(#8a5a30,#6a4120);border:3px solid #1A1A1A;border-radius:6px;padding:12px 22px 12px 13px;cursor:pointer;font-family:Oswald;font-weight:600;letter-spacing:.07em;color:#EFE4CC;text-transform:uppercase;font-size:15px",
            { "--edge": "rgba(26,26,26,.32)" },
          )}
        >
          <span style={css("width:27px;height:27px;border-radius:50%;background:radial-gradient(circle at 34% 28%,#e8675c,#C1272D);border:3px solid #1A1A1A;box-shadow:inset 0 -3px 0 rgba(0,0,0,.32)")} />
          {t(s.heroCta)}
        </button>
      </div>

      {/* right column: collage */}
      <div style={css("position:relative;height:clamp(380px,46vw,540px);z-index:1")}>
        <div style={css("position:absolute;top:6%;left:8%;right:2%;bottom:10%;background:#C1272D;background-image:radial-gradient(rgba(26,26,26,.22) 1.3px,transparent 1.4px);background-size:8px 8px;border:3px solid #1A1A1A;transform:rotate(-4deg);filter:url(#rough);box-shadow:8px 10px 0 rgba(26,26,26,.18)")} />
        <div style={css("position:absolute;top:4%;right:6%;width:38%;aspect-ratio:1;border-radius:50%;background:#1A1A1A;transform:rotate(3deg)")} />
        <div style={css("position:absolute;top:14%;right:-2%;background:#EFE4CC;border:2.5px solid #1A1A1A;font-family:'Special Elite',monospace;font-size:12px;letter-spacing:.12em;padding:6px 12px;transform:rotate(7deg);box-shadow:3px 3px 0 rgba(26,26,26,.25);z-index:5")}>
          {t(s.heroBadge)}
        </div>

        {/* big black gear (ambient) */}
        <svg viewBox="0 0 100 100" style={css(`position:absolute;left:14%;top:26%;width:48%;animation:${ambientA};transform-origin:50% 50%;filter:drop-shadow(5px 6px 0 rgba(26,26,26,.22))`)}>
          <path d={GEARS.c} fill="#1A1A1A" />
          <circle cx="50" cy="50" r="20" fill="#EFE4CC" stroke="#1A1A1A" strokeWidth={3} />
          <circle cx="50" cy="50" r="7" fill="#C1272D" stroke="#1A1A1A" strokeWidth={2.5} />
        </svg>

        {/* brass gear (ambient reverse) */}
        <svg viewBox="0 0 100 100" style={css(`position:absolute;right:8%;bottom:6%;width:34%;animation:${ambientB};transform-origin:50% 50%;filter:drop-shadow(4px 5px 0 rgba(26,26,26,.2))`)}>
          <path d={GEARS.a} fill="#B8860B" />
          <circle cx="50" cy="50" r="15" fill="#E8D9B5" stroke="#1A1A1A" strokeWidth={3} />
          <circle cx="50" cy="50" r="5" fill="#1A1A1A" />
        </svg>

        {/* small red gear (hover) */}
        <svg viewBox="0 0 100 100" className="pvz-rotate" style={css("position:absolute;left:6%;bottom:14%;width:20%;cursor:pointer;filter:drop-shadow(3px 4px 0 rgba(26,26,26,.2))", { "--deg": "180deg" })}>
          <path d={GEARS.b} fill="#C1272D" stroke="#1A1A1A" strokeWidth={2.5} />
          <circle cx="50" cy="50" r="13" fill="#EFE4CC" stroke="#1A1A1A" strokeWidth={2.5} />
        </svg>

        {/* bolts */}
      </div>
    </section>
  );
}
