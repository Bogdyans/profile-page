import { css } from "../../../lib/css.ts";
import { GEARS } from "../../../lib/gear.ts";
import { uiStrings as s } from "../../../data/strings.ts";
import { skills } from "../../../data/skills.ts";
import { usePortfolio } from "../context.ts";

/** A binding ring on the left edge of the notebook page. */
function Ring() {
  return <span style={css("width:14px;height:14px;border-radius:50%;background:#EFE4CC;border:2.5px solid #1A1A1A;box-shadow:inset 0 -2px 0 rgba(0,0,0,.2)")} />;
}

/** The "About" section, styled as a page torn from a sketch notebook. */
export default function About() {
  const { t, ambientB } = usePortfolio();

  return (
    <section id="sec-about" style={css("max-width:1140px;margin:60px auto 0;padding:0 22px")}>
      <div style={css("position:relative")}>
        <div style={css("position:absolute;inset:0;background:#E8D9B5;border:3px solid #1A1A1A;filter:url(#rough) drop-shadow(7px 9px 0 rgba(26,26,26,.16))")} />

        <div style={css("position:relative;display:grid;grid-template-columns:46px 1fr;min-height:380px")}>
          {/* ring binding */}
          <div style={css("border-right:2px dashed rgba(193,39,45,.5);display:flex;flex-direction:column;align-items:center;justify-content:space-around;padding:28px 0")}>
            <Ring />
            <Ring />
            <Ring />
            <Ring />
          </div>

          <div style={css("padding:34px 30px 38px;background-image:repeating-linear-gradient(transparent,transparent 37px,rgba(122,75,39,.18) 37px,rgba(122,75,39,.18) 38px)")}>
            <div style={css("display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:14px")}>
              <div>
                <div style={css("font-family:'Special Elite',monospace;font-size:13px;letter-spacing:.14em;color:#7A4B27")}>{t(s.aboutKicker)}</div>
                <h2 style={css("margin:4px 0 0;font-family:Oswald;font-weight:700;text-transform:uppercase;font-size:clamp(38px,5.5vw,64px);line-height:.9")}>{t(s.aboutTitle)}</h2>
              </div>
              <div style={css("font-family:Caveat;font-size:22px;color:#C1272D;transform:rotate(4deg);border:2px solid #C1272D;border-radius:50%;padding:10px 16px;text-align:center;line-height:1.05")}>{t(s.note1)}</div>
            </div>

            <div style={css("display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:26px;margin-top:26px;align-items:start")}>
              <div>
                <p style={css("font-family:Oswald;font-weight:400;font-size:18px;line-height:1.55;margin:0 0 16px;color:#241a10;text-wrap:pretty")}>{t(s.aboutP1)}</p>
                <p style={css("font-family:Oswald;font-weight:400;font-size:18px;line-height:1.55;margin:0;color:#241a10;text-wrap:pretty")}>{t(s.aboutP2)}</p>
              </div>

              <div style={css("position:relative")}>
                {/* sketch: a little automaton from simple shapes */}
                <div style={css("position:relative;height:200px;border:2.5px dashed #7A4B27;background:#EFE4CC;display:flex;align-items:center;justify-content:center")}>
                  <span style={css("position:absolute;top:6px;left:8px;font-family:'Special Elite',monospace;font-size:10px;color:#7A4B27;letter-spacing:.1em")}>SKETCH</span>
                  <div style={css("position:relative;width:120px;height:140px")}>
                    <div style={css("position:absolute;left:35px;top:0;width:50px;height:46px;border:3px solid #1A1A1A;background:#E8D9B5;border-radius:6px")} />
                    <span style={css("position:absolute;left:48px;top:16px;width:9px;height:9px;border-radius:50%;background:#C1272D;border:2px solid #1A1A1A")} />
                    <span style={css("position:absolute;left:64px;top:16px;width:9px;height:9px;border-radius:50%;background:#C1272D;border:2px solid #1A1A1A")} />
                    <div style={css("position:absolute;left:57px;top:-16px;width:3px;height:16px;background:#1A1A1A")} />
                    <span style={css("position:absolute;left:52px;top:-24px;width:12px;height:12px;border-radius:50%;background:#B8860B;border:2px solid #1A1A1A")} />
                    <div style={css("position:absolute;left:30px;top:50px;width:60px;height:54px;border:3px solid #1A1A1A;background:#C1272D;background-image:radial-gradient(rgba(26,26,26,.25) 1px,transparent 1.1px);background-size:7px 7px")} />
                    <svg viewBox="0 0 100 100" width="34" height="34" style={css(`position:absolute;left:43px;top:60px;animation:${ambientB};transform-origin:50% 50%`)}>
                      <path d={GEARS.b} fill="#E8D9B5" stroke="#1A1A1A" strokeWidth={4} />
                      <circle cx="50" cy="50" r="12" fill="#1A1A1A" />
                    </svg>
                    <div style={css("position:absolute;left:14px;top:58px;width:16px;height:6px;background:#7A4B27;border:2px solid #1A1A1A")} />
                    <div style={css("position:absolute;left:90px;top:58px;width:16px;height:6px;background:#7A4B27;border:2px solid #1A1A1A")} />
                    <div style={css("position:absolute;left:40px;top:104px;width:8px;height:24px;background:#7A4B27;border:2px solid #1A1A1A")} />
                    <div style={css("position:absolute;left:72px;top:104px;width:8px;height:24px;background:#7A4B27;border:2px solid #1A1A1A")} />
                  </div>
                  <span style={css("position:absolute;bottom:8px;right:10px;font-family:Caveat;font-size:20px;color:#C1272D;transform:rotate(-3deg)")}>{t(s.note2)}</span>
                </div>

                <div style={css("margin-top:18px")}>
                  <div style={css("font-family:'Special Elite',monospace;font-size:11px;letter-spacing:.14em;color:#7A4B27;margin-bottom:8px")}>{t(s.skillsLabel)}</div>
                  <div style={css("display:flex;flex-wrap:wrap;gap:8px")}>
                    {skills.map((skill, i) => (
                      <span key={i} style={css("font-family:Oswald;font-weight:600;font-size:13px;letter-spacing:.04em;text-transform:uppercase;background:#1A1A1A;color:#EFE4CC;padding:5px 11px;transform:rotate(-1deg)")}>
                        {t(skill)}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div style={css("text-align:right;font-family:Caveat;font-size:24px;color:#3a2a18;margin-top:18px;transform:rotate(-1.5deg)")}>— {t(s.note3)}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
