"use client";

import { useEffect, useRef, type ReactNode } from "react";
import styles from "./scrollReveal.module.css";

export default function ScrollReveal({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!container || motion.matches || !("IntersectionObserver" in window)) return;

    const targets = Array.from(container.querySelectorAll<HTMLElement>("[data-scroll-reveal]"));
    const portfolio = container.closest<HTMLElement>("#portfolio");
    const experience = portfolio?.parentElement;
    let observing = false;

    const canReveal = () => !portfolio || experience?.dataset.entered === "true";

    const observer = new IntersectionObserver(
      (entries) => {
        if (!canReveal()) return;
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => targets.indexOf(a.target as HTMLElement) - targets.indexOf(b.target as HTMLElement));

        visible.forEach((entry, index) => {
          const target = entry.target as HTMLElement;
          target.style.setProperty("--reveal-delay", `${Math.min(index * 75, 225)}ms`);
          target.dataset.revealed = "true";
          observer.unobserve(target);
        });
      },
      {
        root: container.closest("main"),
        rootMargin: "0px 0px -24px 0px",
        threshold: 0.08,
      },
    );

    const observeWhenReady = () => {
      if (observing || !canReveal() || motion.matches) return;
      observing = true;
      targets.forEach((target) => observer.observe(target));
    };

    // Wait for the landing zoom to finish before revealing the first section.
    const landingObserver = new MutationObserver(observeWhenReady);
    if (experience) {
      landingObserver.observe(experience, { attributes: true, attributeFilter: ["data-entered"] });
    }
    container.dataset.scrollReady = "true";
    observeWhenReady();

    const onMotionChange = () => {
      if (!motion.matches) return;
      observer.disconnect();
      delete container.dataset.scrollReady;
    };

    // Reveal focused controls immediately, including when reached with Tab.
    const onFocus = (event: FocusEvent) => {
      const target = (event.target as HTMLElement).closest<HTMLElement>("[data-scroll-reveal]");
      if (!target || !container.contains(target)) return;
      target.style.setProperty("--reveal-delay", "0ms");
      target.dataset.revealed = "true";
      observer.unobserve(target);
    };

    motion.addEventListener("change", onMotionChange);
    container.addEventListener("focusin", onFocus);

    return () => {
      observer.disconnect();
      landingObserver.disconnect();
      motion.removeEventListener("change", onMotionChange);
      container.removeEventListener("focusin", onFocus);
      delete container.dataset.scrollReady;
      targets.forEach((target) => {
        delete target.dataset.revealed;
        target.style.removeProperty("--reveal-delay");
      });
    };
  }, []);

  return (
    <div ref={containerRef} className={`${styles.content} ${className}`}>
      {children}
    </div>
  );
}
