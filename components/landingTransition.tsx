"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { ArrowDown } from "lucide-react";
import Particles from "./Particles";
import TextType from "./TextType";
import LandingLoadingBar from "./landingLoadingBar";
import styles from "./landingTransition.module.css";

const smoothstep = (start: number, end: number, value: number) => {
  const progress = Math.min(1, Math.max(0, (value - start) / (end - start)));
  return progress * progress * (3 - 2 * progress);
};

export default function LandingTransition({ children }: { children: ReactNode }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const runwayRef = useRef<HTMLDivElement>(null);
  const landingRef = useRef<HTMLElement>(null);
  const portfolioRef = useRef<HTMLDivElement>(null);
  const focusOnEntry = useRef(false);
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    const root = rootRef.current;
    const runway = runwayRef.current;
    const landing = landingRef.current;
    const portfolio = portfolioRef.current;
    if (!root || !runway || !landing || !portfolio) return;

    let frame = 0;
    let previousProgress = -1;
    root.dataset.enhanced = "true";

    const update = () => {
      frame = 0;
      const distance = runway.offsetHeight;
      const progress = Math.min(1, Math.max(0, window.scrollY / Math.max(1, distance)));
      const eased = smoothstep(0, 1, progress);
      const complete = progress >= 0.999;

      // Keep the portfolio at the viewport origin until native scrolling reaches it.
      root.style.setProperty("--reveal-offset", `${-Math.max(0, distance - window.scrollY)}px`);
      root.style.setProperty("--reveal-scale", `${0.84 + eased * 0.16}`);
      root.style.setProperty("--reveal-blur", `${(1 - eased) * 16}px`);
      root.style.setProperty("--reveal-opacity", `${smoothstep(0.18, 0.85, progress)}`);
      root.style.setProperty("--landing-scale", `${1 + eased * 1.1}`);
      root.style.setProperty("--landing-blur", `${eased * 12}px`);
      root.style.setProperty("--landing-opacity", `${1 - smoothstep(0.12, 0.76, progress)}`);
      root.dataset.entered = String(complete);

      if (complete !== (previousProgress >= 0.999)) {
        portfolio.inert = !complete;
        landing.inert = complete;
        landing.setAttribute("aria-hidden", String(complete));
        setEntered(complete);
      }
      // The portfolio remains accessible when JavaScript is unavailable.
      if (previousProgress === -1) portfolio.inert = !complete;
      previousProgress = progress;

      if (complete && focusOnEntry.current) {
        portfolio.focus({ preventScroll: true });
        focusOnEntry.current = false;
      }
    };

    const schedule = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    schedule();
    const observer = new ResizeObserver(schedule);
    observer.observe(runway);
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    window.addEventListener("pageshow", schedule);

    return () => {
      window.cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      window.removeEventListener("pageshow", schedule);
      delete root.dataset.enhanced;
      portfolio.inert = false;
      landing.inert = false;
    };
  }, []);

  return (
    <div ref={rootRef} className={styles.experience}>
      <div ref={runwayRef} className={styles.runway} aria-hidden="true" />
      <div id="portfolio" ref={portfolioRef} className={styles.portfolio} tabIndex={-1}>
        {children}
      </div>
      <section ref={landingRef} className={styles.landing} aria-labelledby="landing-title">
        <LandingLoadingBar />
        <div className={styles.scene}>
          <div className={styles.particles} aria-hidden="true">
            <Particles
              particleColors={["#F5F5F5", "#1797FF"]}
              particleCount={200}
              particleSpread={10}
              speed={0.1}
              particleBaseSize={100}
              glow={0.5}
              twinkle={0.3}
              moveParticlesOnHover
              hoverEffect="parallax"
              paused={entered}
            />
          </div>
          <div className={styles.copy}>
            <TextType
              id="landing-title"
              as="h1"
              className={styles.title}
              text="Hi, I'm Niko."
              typingSpeed={75}
              initialDelay={300}
              typeEffect="fade"
              loop={false}
              cursorStyle="bar"
              cursorColor="var(--foreground)"
              cursorGlide
              showCursor={!entered}
            />
          </div>
        </div>
        <a
          className={styles.explore}
          href="#portfolio"
          onClick={(event) => {
            event.preventDefault();
            focusOnEntry.current = true;
            window.scrollTo({
              top: runwayRef.current?.offsetHeight ?? window.innerHeight,
              behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
                ? "instant"
                : "smooth",
            });
          }}
        >
          <span>Scroll to explore</span>
          <ArrowDown size={20} strokeWidth={1.5} aria-hidden="true" />
        </a>
      </section>
    </div>
  );
}
