import { css } from "../../../lib/css.ts";
import { uiStrings as s } from "../../../data/strings.ts";
import { contacts, mailHref } from "../../../data/contacts.ts";
import { usePortfolio } from "../context.ts";

/** The "Contact" section, styled as an urgent dispatch / letter. */
export default function Contact() {
  const { t } = usePortfolio();

  return (
    <section id="sec-contact" style={css("max-width:1140px;margin:70px auto 0;padding:0 22px 90px")}>
      <div style={css("position:relative;max-width:720px;margin:0 auto;transform:rotate(-1deg)")}>
        <div style={css("position:absolute;inset:0;background:#EFE4CC;border:3px solid #1A1A1A;filter:url(#roughS) drop-shadow(8px 10px 0 rgba(26,26,26,.18));background-image:repeating-linear-gradient(90deg,transparent 0 5px,rgba(122,75,39,.05) 5px 6px)")} />

        <div style={css("position:relative;padding:26px 28px 30px;z-index:2")}>
          <div style={css("display:flex;justify-content:space-between;align-items:flex-start;border-bottom:2px dashed #1A1A1A;padding-bottom:12px;flex-wrap:wrap;gap:10px")}>
            <div>
              <div style={css("font-family:'Special Elite',monospace;font-size:12px;letter-spacing:.16em;color:#C1272D")}>{t(s.contactKicker)}</div>
              <h2 style={css("margin:3px 0 0;font-family:Oswald;font-weight:700;text-transform:uppercase;font-size:clamp(36px,5vw,56px);line-height:.9")}>{t(s.contactTitle)}</h2>
            </div>
            {/* postmark */}
            <div style={css("text-align:center;border:2.5px solid #7A4B27;border-radius:50%;width:92px;height:92px;display:flex;flex-direction:column;align-items:center;justify-content:center;color:#7A4B27;transform:rotate(9deg);opacity:.85")}>
              <span style={css("font-family:'Special Elite',monospace;font-size:9px;letter-spacing:.1em;line-height:1.3;text-align:center")}>{t(s.postmark)}</span>
              <span style={css("font-family:Oswald;font-weight:700;font-size:11px;letter-spacing:.1em;margin-top:2px")}>★ POST ★</span>
            </div>
          </div>

          <div style={css("font-family:'Special Elite',monospace;font-size:13px;letter-spacing:.06em;color:#1A1A1A;margin:14px 0 6px")}>{t(s.contactTo)}</div>
          <p style={css("font-family:Oswald;font-weight:400;font-size:18px;line-height:1.5;color:#241a10;margin:0 0 22px;max-width:48ch;text-wrap:pretty")}>{t(s.contactBody)}</p>

          <div style={css("display:grid;grid-template-columns:repeat(auto-fit,minmax(190px,1fr));gap:12px")}>
            {contacts.map((c) => (
              <a key={c.label} href={c.href} className="pvz-link" style={css("text-decoration:none;display:flex;flex-direction:column;gap:3px;border:2px solid #1A1A1A;padding:10px 13px")}>
                <span style={css("font-family:'Special Elite',monospace;font-size:10px;letter-spacing:.14em;color:#7A4B27")}>{c.label}</span>
                <span style={css("font-family:Oswald;font-weight:600;font-size:15px;color:#1A1A1A;word-break:break-all")}>{c.val}</span>
              </a>
            ))}
          </div>

          <div style={css("display:flex;align-items:center;justify-content:space-between;margin-top:24px;flex-wrap:wrap;gap:16px")}>
            <a href={mailHref} className="pvz-cta" style={css("text-decoration:none;display:inline-flex;align-items:center;gap:12px;background:#C1272D;border:3px solid #1A1A1A;padding:11px 20px;font-family:Oswald;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:#EFE4CC;font-size:15px", { "--edge": "rgba(26,26,26,.3)" })}>
              ✉ {t(s.contactSend)}
            </a>
            {/* wax seal */}
            <div style={css("position:relative;width:84px;height:84px;border-radius:50%;background:radial-gradient(circle at 38% 32%,#d6453b,#97171c);border:2px solid #6e1014;display:flex;align-items:center;justify-content:center;box-shadow:0 3px 6px rgba(0,0,0,.3);transform:rotate(-8deg)")}>
              <span style={css("position:absolute;inset:8px;border:2px dashed rgba(239,228,204,.6);border-radius:50%")} />
              <span style={css("font-family:Oswald;font-weight:700;font-size:30px;color:#EFE4CC;text-shadow:0 1px 1px rgba(0,0,0,.4)")}>ББ</span>
            </div>
          </div>
        </div>
      </div>

      <div style={css("text-align:center;font-family:'Special Elite',monospace;font-size:12px;letter-spacing:.1em;color:#7A4B27;margin-top:46px")}>{t(s.footer)}</div>
    </section>
  );
}
