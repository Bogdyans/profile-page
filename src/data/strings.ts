import type { Localized } from "../lib/i18n";


export const uiStrings = {
  heroKicker: { ru: "Мастерская изобретателя · Est. 2026", en: "Inventor's Workshop · Est. 2026" },
  heroName1: { ru: "БАРЫКИН", en: "BOGDAN" },
  heroName2: { ru: "БОГДАН", en: "BARYKIN" },
  heroRole: { ru: "РАЗРАБОТЧИК · ИЗОБРЕТАТЕЛЬ", en: "DEVELOPER · INVENTOR" },
  heroTagline: {
    ru: "Собираю интерфейсы и системы из шестерёнок кода — frontend, backend и немного C++.",
    en: "I assemble interfaces and systems out of code gears — frontend, backend, and a bit of C++.",
  },
  heroCta: { ru: "Открыть чертежи", en: "Open the blueprints" },
  heroBadge: { ru: "ЧЕРТЁЖ №1", en: "BLUEPRINT №1" },
  navTop: { ru: "ГЛАВНАЯ", en: "HOME" },
  navWorks: { ru: "ПРОЕКТЫ", en: "WORKS" },
  navAbout: { ru: "О СЕБЕ", en: "ABOUT" },
  navContact: { ru: "КОНТАКТЫ", en: "CONTACT" },
  worksKicker: { ru: "Папка с чертежами", en: "A folder of blueprints" },
  worksTitle: { ru: "ПРОЕКТЫ", en: "WORKS" },
  worksHint: { ru: "четыре механизма, собранных с нуля", en: "four mechanisms built from scratch" },
  openLabel: { ru: "Открыть чертёж", en: "Open blueprint" },
  aboutKicker: { ru: "Страница из блокнота", en: "A page from the notebook" },
  aboutTitle: { ru: "О СЕБЕ", en: "ABOUT" },
  aboutP1: {
    ru: "Меня зовут Богдан. Я разработчик — большую часть времени живу на frontend и backend, но люблю спускаться ниже и писать на C++, когда хочется собрать механизм с нуля.",
    en: "My name is Bogdan. I'm a developer — I spend most of my time across frontend and backend, but I like going lower and writing C++ when I want to build a mechanism from scratch.",
  },
  aboutP2: {
    ru: "Воксельный движок и собственную игру я делал из любопытства: интересно, как устроены вещи изнутри. Тот же подход — к интерфейсам: каждый экран как чертёж, где всё на своём месте.",
    en: "I built a voxel engine and my own game out of curiosity: I like knowing how things work inside. Same approach to interfaces — every screen is a blueprint where everything has its place.",
  },
  note1: { ru: "собираю с нуля", en: "built from scratch" },
  note2: { ru: "C++ под капотом", en: "C++ under the hood" },
  note3: { ru: "чертёж → код → механизм", en: "blueprint → code → mechanism" },
  skillsLabel: { ru: "ИНСТРУМЕНТЫ", en: "INSTRUMENTS" },
  contactKicker: { ru: "Срочная депеша", en: "Urgent dispatch" },
  contactTitle: { ru: "КОНТАКТЫ", en: "CONTACT" },
  contactTo: { ru: "КОМУ: тому, кто ищет разработчика", en: "TO: whoever needs a developer" },
  contactBody: {
    ru: "Готов обсудить проект, задачу или совместную авантюру. Пишите — отвечаю быстро и по делу.",
    en: "Happy to discuss a project, a task, or a joint venture. Write — I reply fast and to the point.",
  },
  contactSend: { ru: "Отправить письмо", en: "Send a letter" },
  postmark: { ru: "МАСТЕРСКАЯ 2026", en: "WORKSHOP 2026" },
  footer: { ru: "Собрано вручную из бумаги и кода · 2026", en: "Handcrafted from paper & code · 2026" },
  dBack: { ru: "← Назад к чертежам", en: "← Back to blueprints" },
  dPurpose: { ru: "Назначение", en: "Purpose" },
  dSpec: { ru: "Спецификация", en: "Specification" },
  dRole: { ru: "Роль в проекте", en: "My role" },
  dPrev: { ru: "Пред.", en: "Prev" },
  dNext: { ru: "След.", en: "Next" },
  dSheet: { ru: "ЧЕРТЁЖ", en: "SHEET" },
  dScale: { ru: "МАСШТАБ 1:1", en: "SCALE 1:1" },
  previewLabel: { ru: "превью проекта", en: "project preview" },
} satisfies Record<string, Localized>;

export type UIStringKey = keyof typeof uiStrings;
