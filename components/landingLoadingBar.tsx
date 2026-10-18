"use client";

import { useEffect, useState } from "react";
import styles from "./landingLoadingBar.module.css";

export default function LandingLoadingBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let active = true;
    let completed = 0;
    let frame = 0;

    const complete = () => {
      if (!active) return;
      completed += 1;
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => setProgress(completed / 2));
    };

    if (document.readyState === "complete") {
      complete();
    } else {
      window.addEventListener("load", complete, { once: true });
    }

    // Track font readiness separately so the bar covers the final typography.
    document.fonts.ready.then(complete, complete);

    return () => {
      active = false;
      window.cancelAnimationFrame(frame);
      window.removeEventListener("load", complete);
    };
  }, []);

  return (
    <div
      className={styles.track}
      role="progressbar"
      aria-label="Loading page"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(progress * 100)}
      data-loaded={progress === 1}
    >
      <span className={styles.fill} style={{ transform: `scaleX(${progress})` }} />
    </div>
  );
}
