export interface Contact {
  /** Short uppercase label, e.g. "E-MAIL". */
  label: string;
  /** Human-readable value shown to the visitor. */
  val: string;
  /** Link target. */
  href: string;
}

/** Primary email — reused for the "Send a letter" button. */
export const email = "BOGDYA2004@gmail.com";
export const mailHref = `mailto:${email}`;

export const contacts: Contact[] = [
  { label: "E-MAIL", val: email, href: mailHref },
  { label: "GITHUB", val: "github.com/Bogdyans", href: "https://github.com/Bogdyans" },
  { label: "TELEGRAM", val: "@Bogdyan2", href: "https://t.me/Bogdyan2" },
];
