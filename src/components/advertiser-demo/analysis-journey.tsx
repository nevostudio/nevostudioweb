"use client";

import { useEffect, useRef, type ReactNode } from "react";
import styles from "./advertiser-demo.module.css";

export function AnalysisJourney({ children }: { children: ReactNode }) {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = root.current;
    if (!element) return;
    const stage = element.querySelector<HTMLElement>("[data-analysis-stage]");
    const buttons = [...element.querySelectorAll<HTMLButtonElement>("[data-analysis-choice]")];
    const descriptions = [...element.querySelectorAll<HTMLElement>("[data-analysis-copy]")];
    const count = element.querySelector<HTMLElement>("[data-found-count]");
    if (!stage) return;
    const reduced = matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let tweenFrame = 0;
    let currentProgress = 0;
    let visible = false;
    let manual = false;
    let chosenScrollY: number | null = null;
    let previousStep = -1;
    let previousCount = -1;
    const clamp = (n: number) => Math.min(1, Math.max(0, n));
    const segment = (p: number, start: number, duration: number) => {
      const value = clamp((p - start) / duration);
      return value * value * (3 - 2 * value);
    };

    function render(p: number) {
      currentProgress = p;
      const values = {
        "--open": segment(p, 0.04, 0.18),
        "--extract": segment(p, 0.36, 0.16),
        "--flatten": segment(p, 0.53, 0.1),
        "--align": segment(p, 0.63, 0.1),
        "--structure": segment(p, 0.73, 0.07),
        "--report": segment(p, 0.83, 0.15),
        "--found-one": segment(p, 0.18, 0.05),
        "--found-two": segment(p, 0.26, 0.05),
        "--found-three": segment(p, 0.34, 0.05),
      };
      for (const [property, value] of Object.entries(values)) element!.style.setProperty(property, value.toFixed(4));
      const step = p < 0.18 ? 0 : p < 0.4 ? 1 : p < 0.6 ? 2 : p < 0.88 ? 3 : 4;
      if (step !== previousStep) {
        previousStep = step;
        element!.dataset.step = String(step);
        buttons.forEach((button, index) => button.setAttribute("aria-pressed", String(index === step)));
        descriptions.forEach((description, index) => { description.hidden = index !== step; });
      }
      const found = [values["--found-one"], values["--found-two"], values["--found-three"]].filter(value => value >= 0.8).length;
      if (count && found !== previousCount) {
        previousCount = found;
        count.textContent = `${found} de 3 anunciantes de la muestra identificados`;
      }
    }
    function update() {
      frame = 0;
      if (manual || !visible || element!.dataset.mode !== "scroll") return;
      const distance = Math.max(1, element!.offsetHeight - stage!.offsetHeight);
      render(clamp((innerHeight * 0.03 - element!.getBoundingClientRect().top) / distance));
    }
    function schedule() { if (!frame) frame = requestAnimationFrame(update); }
    function scroll() {
      if (!visible) return;
      if (chosenScrollY !== null && Math.abs(scrollY - chosenScrollY) < 2) return;
      chosenScrollY = null;
      cancelAnimationFrame(tweenFrame);
      delete element!.dataset.travelling;
      manual = false;
      schedule();
    }
    function choose(event: Event) {
      const button = event.currentTarget as HTMLButtonElement;
      manual = true;
      const progress = Number(button.dataset.progress);
      cancelAnimationFrame(tweenFrame);
      const from = currentProgress;
      const started = performance.now();
      const duration = Math.max(350, Math.abs(progress - from) * 1200);
      element!.dataset.travelling = "true";
      function travel(now: number) {
        const time = clamp((now - started) / duration);
        const eased = time * time * (3 - 2 * time);
        render(from + (progress - from) * eased);
        if (time < 1) tweenFrame = requestAnimationFrame(travel);
        else delete element!.dataset.travelling;
      }
      tweenFrame = requestAnimationFrame(travel);
      // A chosen step and its native scroll position share the same playhead.
      // Subsequent wheel, touch or keyboard scrolling continues from that point.
      const top = element!.getBoundingClientRect().top + scrollY - innerHeight * 0.03;
      const distance = Math.max(1, element!.offsetHeight - stage!.offsetHeight);
      chosenScrollY = Math.max(0, Math.min(top + distance * progress, document.documentElement.scrollHeight - innerHeight));
      window.scrollTo({ top: chosenScrollY, behavior: "instant" });
    }
    function configure() {
      // Enlarged text and short/narrow windows use the complete reading version.
      const fits = innerWidth >= 1100 && innerHeight >= 780 && parseFloat(getComputedStyle(document.documentElement).fontSize) <= 22;
      const mode = !reduced.matches && fits ? "scroll" : "reading";
      if (element!.dataset.mode !== mode) {
        cancelAnimationFrame(tweenFrame);
        delete element!.dataset.travelling;
        element!.dataset.mode = mode;
        manual = false;
        chosenScrollY = null;
        render(0);
      }
      schedule();
    }
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; if (visible) schedule(); }, { rootMargin: "100px" });
    observer.observe(element);
    const resize = new ResizeObserver(configure);
    resize.observe(element);
    // The fixed-height scene itself does not resize when only text is enlarged.
    const textProbe = element.querySelector<HTMLElement>("[data-analysis-size-probe]");
    if (textProbe) resize.observe(textProbe);
    buttons.forEach(button => button.addEventListener("click", choose));
    window.addEventListener("scroll", scroll, { passive: true });
    window.addEventListener("resize", configure, { passive: true });
    reduced.addEventListener("change", configure);
    configure();

    return () => {
      cancelAnimationFrame(frame);
      cancelAnimationFrame(tweenFrame);
      observer.disconnect();
      resize.disconnect();
      buttons.forEach(button => button.removeEventListener("click", choose));
      window.removeEventListener("scroll", scroll);
      window.removeEventListener("resize", configure);
      reduced.removeEventListener("change", configure);
    };
  }, []);

  return <div ref={root} className={styles.journey}>{children}</div>;
}
