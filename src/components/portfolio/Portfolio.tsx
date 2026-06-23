import { useCallback, useEffect, useMemo, useState } from "react";
import { css } from "../../lib/css";
import { translate, type Lang, type Localized } from "../../lib/i18n";
import { projects } from "../../data/projects";
import { PortfolioContext, type PortfolioContextValue } from "./context";
import Decor from "./Decor";
import Nav from "./Nav";
import Hero from "./sections/Hero.tsx";
import Marquee from "./Marquee";
import Works from "./sections/Works.tsx";
import About from "./sections/About.tsx";
import Contact from "./sections/Contact.tsx";
import ProjectDetail from "./ProjectDetail";

/** Sections tracked by the scroll-spy, in document order. */
const SECTION_IDS = ["top", "works", "about", "contact"] as const;

/** Sticky-nav offset (px) applied when scrolling to a section. */
const NAV_OFFSET = 72;

const GRAIN_OPACITY: Record<Grain, number> = { off: 0, medium: 0.085, heavy: 0.16 };

export type Grain = "off" | "medium" | "heavy";

export interface PortfolioProps {
  /** Initial language. */
  lang?: Lang;
  /** Amount of film grain over the page. */
  grain?: Grain;
  /** Whether the ambient gears slowly rotate. */
  ambientMotion?: boolean;
}

/**
 * Root interactive island for the portfolio. Owns the cross-cutting state
 * (language, scroll-spy, the open project) and composes the sections. Rendered
 * to static HTML by Astro for SEO, then hydrated on the client.
 */
export default function Portfolio({ lang: initialLang = "ru", grain = "medium", ambientMotion = true }: PortfolioProps) {
  const [lang, setLang] = useState<Lang>(initialLang === "en" ? "en" : "ru");
  const [activeId, setActiveId] = useState<string | null>(null);
  const [active, setActive] = useState<string>("top");

  const t = useMemo(
    () => <T,>(value: Localized<T>): T => translate(value, lang),
    [lang],
  );

  const ambientA = ambientMotion ? "spin 60s linear infinite" : "none";
  const ambientB = ambientMotion ? "spinrev 44s linear infinite" : "none";

  const ctx: PortfolioContextValue = useMemo(
    () => ({ lang, t, ambientA, ambientB }),
    [lang, t, ambientA, ambientB],
  );

  // Scroll-spy: highlight the section currently under the top third of the viewport.
  useEffect(() => {
    if (activeId) return; // detail page open — nothing to spy on
    const onScroll = () => {
      const y = window.scrollY + window.innerHeight * 0.34;
      let current: string = "top";
      for (const id of SECTION_IDS) {
        const el = document.getElementById("sec-" + id);
        if (el && el.offsetTop <= y) current = id;
      }
      setActive((prev) => (prev === current ? prev : current));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [activeId]);

  const goTo = useCallback((id: string) => {
    setActiveId(null);
    setActive(id);
    requestAnimationFrame(() => {
      const el = document.getElementById("sec-" + id);
      window.scrollTo({ top: id === "top" || !el ? 0 : el.offsetTop - NAV_OFFSET, behavior: "smooth" });
    });
  }, []);

  const toggleLang = useCallback(() => setLang((l) => (l === "ru" ? "en" : "ru")), []);

  const openProject = useCallback((id: string) => {
    setActiveId(id);
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  const closeProject = useCallback(() => {
    setActiveId(null);
    setActive("works");
    requestAnimationFrame(() => {
      const el = document.getElementById("sec-works");
      window.scrollTo({ top: el ? el.offsetTop - NAV_OFFSET : 0, behavior: "auto" });
    });
  }, []);

  const step = useCallback((delta: number) => {
    setActiveId((current) => {
      const i = projects.findIndex((p) => p.id === current);
      const n = (i + delta + projects.length) % projects.length;
      return projects[n].id;
    });
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  const activeIndex = projects.findIndex((p) => p.id === activeId);
  const activeProject = activeIndex >= 0 ? projects[activeIndex] : null;

  return (
    <PortfolioContext.Provider value={ctx}>
      <Decor grainOpacity={GRAIN_OPACITY[grain] ?? GRAIN_OPACITY.medium} />

      <Nav
        active={active}
        detailOpen={!!activeProject}
        langLabel={lang === "ru" ? "EN" : "RU"}
        onNavigate={goTo}
        onToggleLang={toggleLang}
      />

      {activeProject ? (
        <ProjectDetail
          project={activeProject}
          index={activeIndex + 1}
          total={projects.length}
          onBack={closeProject}
          onPrev={() => step(-1)}
          onNext={() => step(1)}
        />
      ) : (
        <main style={css("position:relative;z-index:1")}>
          <Hero onOpenWorks={() => goTo("works")} />
          <Marquee />
          <Works onOpenProject={openProject} />
          <About />
          <Contact />
        </main>
      )}
    </PortfolioContext.Provider>
  );
}
