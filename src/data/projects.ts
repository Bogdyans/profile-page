import type { Localized } from "../lib/i18n";

export interface Project {
  /** Stable id used for routing/selection. */
  id: string;
  /** Catalogue number shown on the card, e.g. "№ 01". */
  num: string;
  year: string;
  /** Rest rotation of the card, in degrees. */
  rot: number;
  /** Accent colour used by the card. */
  accent: string;
  title: Localized;
  kind: Localized;
  /** One-line summary on the card. */
  short: Localized;
  /** Full description on the blueprint detail page. */
  desc: Localized;
  /** My role on the project. */
  role: Localized;
  stack: string[];
}

export const projects: Project[] = [
  {
    id: "provision",
    num: "№ 01",
    year: "2025",
    rot: -1.6,
    accent: "#C1272D",
    title: { ru: "ПРОВИАНТ", en: "PROVISION" },
    kind: { ru: "Мобильное приложение · Питание", en: "Mobile app · Nutrition" },
    short: { ru: "Дневник питания и расчёт рациона по целям.", en: "A nutrition diary and meal planning by goals." },
    desc: {
      ru: "Приложение для учёта питания: дневник приёмов пищи, расчёт КБЖУ, цели по весу и подбор рациона. Спроектировал и собрал клиент и сервер, придумал логику расчётов и синхронизацию между устройствами.",
      en: "A nutrition tracking app: a meal diary, calorie & macro calculation, weight goals and meal planning. I designed and built both client and server, the calculation logic and cross-device sync.",
    },
    role: { ru: "Fullstack — клиент, сервер, база", en: "Fullstack — client, server, database" },
    stack: ["React Native", "Node.js", "PostgreSQL", "REST"],
  },
  {
    id: "voxel",
    num: "№ 02",
    year: "2024",
    rot: 1.4,
    accent: "#7A4B27",
    title: { ru: "ВОКСЕЛЬ", en: "VOXEL ENGINE" },
    kind: { ru: "Графический движок · C++", en: "Graphics engine · C++" },
    short: { ru: "Собственный движок воксельных миров с бесконечной генерацией.", en: "A custom engine for voxel worlds with infinite generation." },
    desc: {
      ru: "Собственный графический движок для воксельных миров: чанковая генерация, бесконечный ландшафт, динамическое освещение и оптимизация рендера. Написан с нуля на C++ и OpenGL, чтобы разобраться, как всё устроено под капотом.",
      en: "A custom graphics engine for voxel worlds: chunked generation, infinite terrain, dynamic lighting and render optimization. Written from scratch in C++ and OpenGL to understand how everything works under the hood.",
    },
    role: { ru: "Архитектура и рендер с нуля", en: "Architecture and renderer, from zero" },
    stack: ["C++", "OpenGL", "GLSL", "CMake"],
  },
  {
    id: "garden",
    num: "№ 03",
    year: "2023",
    rot: -1.2,
    accent: "#C1272D",
    title: { ru: "ОБОРОНА ОГОРОДА", en: "GARDEN DEFENSE" },
    kind: { ru: "Игра · Tower Defense", en: "Game · Tower Defense" },
    short: { ru: "Игра в духе Plants vs Zombies с собственной логикой и волнами.", en: "A Plants vs Zombies–style game with custom logic and waves." },
    desc: {
      ru: "Игра в духе Plants vs Zombies: волны противников, оборонительные «растения», экономика солнца и собственная игровая логика. Сделал игровой цикл, баланс, анимации и систему уровней.",
      en: 'A Plants vs Zombies–style game: enemy waves, defensive "plants", a sun economy and custom game logic. I built the game loop, balance, animations and the level system.',
    },
    role: { ru: "Геймдизайн и движок игры", en: "Game design and game engine" },
    stack: ["C++", "SFML", "ECS"],
  },
  {
    id: "archi",
    num: "№ 04",
    year: "2025",
    rot: 1.8,
    accent: "#B8860B",
    title: { ru: "АРХИ·БЮРО", en: "ARCHI STUDIO" },
    kind: { ru: "Сайт · Архитектурное бюро", en: "Website · Architecture studio" },
    short: { ru: "Сайт-витрина для архитектурной мастерской.", en: "A showcase website for an architecture studio." },
    desc: {
      ru: "Сайт-витрина для архитектурной мастерской: проекты, портфолио, плавная подача и внимание к деталям. Сверстал и оживил интерфейс, настроил CMS, чтобы команда сама редактировала контент.",
      en: "A showcase website for an architecture studio: projects, portfolio, smooth presentation and attention to detail. I built and animated the interface and set up a CMS so the team can edit content themselves.",
    },
    role: { ru: "Frontend и интеграция CMS", en: "Frontend and CMS integration" },
    stack: ["Next.js", "TypeScript", "GSAP", "CMS"],
  },
];
