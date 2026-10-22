import { useEffect } from "react";

export function useParallax(triggerKey = "") {
  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduceMotion) return;

    let ticking = false;
    let nodes = [];

    const setup = () => {
      nodes = Array.from(document.querySelectorAll("[data-parallax]"));
      if (!nodes.length) return;
      update();
    };

    const update = () => {
      const viewH = window.innerHeight;
      nodes.forEach((el) => {
        const speed = Number(el.dataset.parallax) || 0.2;
        const rect = el.getBoundingClientRect();
        const center = rect.top + rect.height / 2;
        const offset = (center - viewH / 2) * speed * -1;
        el.style.setProperty("--parallax-y", `${offset.toFixed(2)}px`);
      });
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    const timeout = setTimeout(setup, 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [triggerKey]);
}
