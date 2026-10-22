import { useEffect } from "react";

export function useReveal(rootSelector = "body", triggerKey = "") {
  useEffect(() => {
    let observer;
    let frame;

    const setup = () => {
      const root = document.querySelector(rootSelector);
      if (!root) {
        frame = requestAnimationFrame(setup);
        return;
      }

      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      const targets = root.querySelectorAll("[data-reveal]");
      if (!targets.length) return;

      if (reduceMotion) {
        targets.forEach((el) => el.classList.add("is-visible"));
        return;
      }

      // Hero content should appear immediately after preload
      targets.forEach((el) => {
        if (el.closest("#home")) el.classList.add("is-visible");
      });

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
            } else if (!entry.target.closest("#home")) {
              entry.target.classList.remove("is-visible");
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: "0px 0px -4% 0px",
        }
      );

      targets.forEach((el) => observer.observe(el));
    };

    setup();

    return () => {
      if (frame) cancelAnimationFrame(frame);
      if (observer) observer.disconnect();
    };
  }, [rootSelector, triggerKey]);
}
