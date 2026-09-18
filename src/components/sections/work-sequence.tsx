"use client";

import { useEffect, useRef, type ReactNode } from "react";
import styles from "./repeated-work.module.css";

export function WorkSequence({ children }: { children: ReactNode }) {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = root.current;
    if (!element) return;
    const stage = element.querySelector<HTMLElement>("[data-work-stage]");
    const buttons = [...element.querySelectorAll<HTMLButtonElement>("[data-work-step]")];
    const copies = [...element.querySelectorAll<HTMLElement>("[data-step-copy]")];
    if (!stage) return;
    const reduced = matchMedia("(prefers-reduced-motion: reduce)");
    const spacious = matchMedia("(min-width: 64rem) and (min-height: 48rem)");
    let frame = 0;
    let inView = false;
    let manual = false;
    const clamp = (number: number) => Math.max(0, Math.min(1, number));
    const smooth = (number: number) => { const n = clamp(number); return n * n * (3 - 2 * n); };

    function render(progress: number) {
      const first = smooth((progress - 0.08) / 0.25);
      const second = smooth((progress - 0.33) / 0.27);
      const order = smooth((progress - 0.72) / 0.28);
      const step = progress < 0.28 ? 0 : progress < 0.82 ? 1 : 2;
      element!.style.setProperty("--copy-one", first.toFixed(4));
      element!.style.setProperty("--copy-two", second.toFixed(4));
      element!.style.setProperty("--order", order.toFixed(4));
      element!.dataset.step = String(step);
      buttons.forEach((button, index) => button.setAttribute("aria-pressed", String(index === step)));
      copies.forEach((copy, index) => { copy.hidden = index !== step; });
    }
    function update() {
      frame = 0;
      if (manual || element!.dataset.motion !== "scroll" || !inView) return;
      const rect = element!.getBoundingClientRect();
      const distance = Math.max(1, element!.offsetHeight - stage!.offsetHeight);
      render(clamp((window.innerHeight * 0.05 - rect.top) / distance));
    }
    function schedule() { if (!frame) frame = requestAnimationFrame(update); }
    function onScroll() {
      if (element!.dataset.motion !== "scroll") return;
      manual = false;
      delete element!.dataset.interaction;
      schedule();
    }
    function onChoice(event: Event) {
      const button = event.currentTarget as HTMLButtonElement;
      manual = true;
      element!.dataset.interaction = "manual";
      render(Number(button.dataset.progress));
    }
    function updateMode() {
      const fits = stage!.offsetHeight <= window.innerHeight * 0.95;
      element!.dataset.motion = !reduced.matches && spacious.matches && fits ? "scroll" : "manual";
      schedule();
    }
    function configure() {
      element!.dataset.enhanced = "true";
      manual = false;
      render(0);
      updateMode();
    }
    const observer = new IntersectionObserver(([entry]) => { inView = entry.isIntersecting; if (inView) schedule(); }, { rootMargin: "100px" });
    observer.observe(element);
    const sizeObserver = new ResizeObserver(updateMode);
    sizeObserver.observe(stage);
    buttons.forEach((button) => button.addEventListener("click", onChoice));
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", updateMode, { passive: true });
    reduced.addEventListener("change", configure);
    spacious.addEventListener("change", configure);
    configure();
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      sizeObserver.disconnect();
      buttons.forEach((button) => button.removeEventListener("click", onChoice));
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateMode);
      reduced.removeEventListener("change", configure);
      spacious.removeEventListener("change", configure);
    };
  }, []);

  return <div ref={root} className={styles.sequence}>{children}</div>;
}
