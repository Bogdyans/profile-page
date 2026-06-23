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
    id: "perekusov",
    num: "№ 01",
    year: "2026",
    rot: -1.6,
    accent: "#C1272D",
    title: { ru: "ПЕРЕКУСОВ.НЕТ", en: "PEREKUSOV.NET" },
    kind: { ru: "Мобильное приложение · Дневник питания", en: "Mobile app · Nutrition diary" },
    short: {
      ru: "Дневник питания с распознаванием блюд по фото и AI-рекомендациями.",
      en: "A nutrition diary with photo dish recognition and AI recommendations.",
    },
    desc: {
      ru: "Полноценное приложение «Дневник питания»: учёт приёмов пищи с составом, граммовкой и фото, распознавание блюд по фотографии, аналитика калорий и БЖУ, динамика веса, семейные группы и чат. На основе собранных данных AI формирует персональные рекомендации. Дипломный проект (ВКР) — спроектировал и собрал клиент и сервер с нуля.",
      en: "A full nutrition-diary app: meal logging with composition, grams and photos, dish recognition from a photo, calorie & macro analytics, weight dynamics, family groups and chat. An AI builds personalized recommendations from the collected data. My thesis project — I designed and built both the client and the server from scratch.",
    },
    role: { ru: "Fullstack — клиент, сервер, БД, AI", en: "Fullstack — client, server, database, AI" },
    stack: ["React Native", "NestJS", "Prisma", "PostgreSQL", "AI"],
  },
  {
    id: "voxel",
    num: "№ 02",
    year: "2024",
    rot: 1.4,
    accent: "#7A4B27",
    title: { ru: "ВОКСЕЛЬ", en: "VOXEL GAME" },
    kind: { ru: "Игра · Воксельная песочница · C++", en: "Game · Voxel sandbox · C++" },
    short: {
      ru: "Воксельная песочница в духе Minecraft: чанки, блоки, физика, мобы.",
      en: "A Minecraft-like voxel sandbox: chunks, blocks, physics, mobs.",
    },
    desc: {
      ru: "Воксельная песочница в духе Minecraft, написанная с нуля на C++ и OpenGL: мир из чанков, ломание и постановка текстурных блоков, игрок от первого лица с физикой и коллизиями, хотбар, мобы и меню миров. Делал, чтобы разобраться, как всё устроено под капотом — рендер, генерация мира и игровой цикл.",
      en: "A Minecraft-like voxel sandbox written from scratch in C++ and OpenGL: a chunked world, breaking and placing textured blocks, a first-person player with physics and collisions, a hotbar, mobs and a world menu. I built it to understand how it all works under the hood — rendering, world generation and the game loop.",
    },
    role: { ru: "Движок и геймплей с нуля", en: "Engine and gameplay from scratch" },
    stack: ["C++", "OpenGL", "GLFW", "GLM"],
  },
  {
    id: "garden",
    num: "№ 03",
    year: "2023",
    rot: -1.2,
    accent: "#C1272D",
    title: { ru: "ОБОРОНА ОГОРОДА", en: "GARDEN DEFENSE" },
    kind: { ru: "Игра · Tower Defense · C++", en: "Game · Tower defense · C++" },
    short: {
      ru: "Клон Plants vs Zombies на raylib с честной механикой волн.",
      en: "A Plants vs Zombies clone in raylib with authentic wave mechanics.",
    },
    desc: {
      ru: "Клон Plants vs Zombies на C++ и raylib: 9 растений, зомби с послойной бронёй и статус-эффектами (яд, заморозка), экономика солнца и кампания из уровней. Волны идут не по таймеру, а по «бюджету угрозы» и HP-гейтингу — порт оригинального алгоритма PvZ. Архитектура развязана: сущности общаются с миром только через небольшой API.",
      en: "A Plants vs Zombies clone in C++ and raylib: 9 plants, zombies with layered armor and status effects (poison, chill), a sun economy and a level campaign. Waves run on a threat budget and HP-gated pacing rather than a fixed timer — a port of PvZ's original algorithm. The architecture is decoupled: entities talk to the world only through a small API.",
    },
    role: { ru: "Вся игровая логика, баланс и система волн", en: "All game logic, balance and the wave system" },
    stack: ["C++", "raylib", "CMake"],
  },
  {
    id: "archi",
    num: "№ 04",
    year: "2025",
    rot: 1.8,
    accent: "#B8860B",
    title: { ru: "АРХИ·БЮРО", en: "ARCHI STUDIO" },
    kind: { ru: "Сайт · Архитектурное бюро", en: "Website · Architecture studio" },
    short: {
      ru: "Анимированный сайт-витрина архитектурной мастерской.",
      en: "An animated showcase site for an architecture studio.",
    },
    desc: {
      ru: "Сайт-витрина для архитектурной мастерской с инновационным подходом: проекты, секция технологий (3D-сканирование, алгоритмическое проектирование, VR), анимации на скролле, анимированные счётчики и кастомный курсор. Собрал весь фронтенд и анимации с нуля на Next.js.",
      en: "A showcase site for an architecture studio with an innovative approach: projects, a technology section (3D scanning, algorithmic design, VR), scroll-driven animations, animated counters and a custom cursor. I built the whole frontend and its animations from scratch in Next.js.",
    },
    role: { ru: "Весь фронтенд и анимации", en: "The whole frontend and animations" },
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
];
