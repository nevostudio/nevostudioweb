"use client";

import { useEffect, useRef, type ReactNode } from "react";
import styles from "./hero.module.css";

// Server-rendered content stays readable without this progressive enhancement.
export function HeroMotion({ children }: { children: ReactNode }) {
  const root = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const element = root.current;
    if (!element) return;
    const journey = element.querySelector<HTMLElement>("[data-journey]");
    const screen = element.querySelector<HTMLElement>("[data-screen]");
    const scene = element.querySelector<HTMLElement>("[data-scene]");
    const perspective = element.querySelector<HTMLElement>("[data-perspective]");
    const range = element.querySelector<HTMLInputElement>("input[type=range]");
    if (!journey || !screen || !scene || !perspective || !range) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const desktop = window.matchMedia("(min-width: 64rem) and (min-height: 42rem)");
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    let frame = 0;
    let manual = false;
    const clamp = (value: number) => Math.max(0, Math.min(1, value));
    function setProgress(value: number) {
      element!.style.setProperty("--reading", value.toFixed(4));
      range!.value = String(Math.round(value * 100));
      range!.setAttribute("aria-valuetext", value < 0.3 ? "Revista" : value > 0.7 ? "Informe de anunciantes" : "Anunciantes e información");
    }
    function update() {
      frame = 0;
      if (reduced.matches || !desktop.matches) return;
      if (!manual) {
        const rect = journey!.getBoundingClientRect();
        const progress = clamp(-rect.top / Math.max(1, journey!.offsetHeight - screen!.offsetHeight));
        setProgress(progress);
      }
      const reveal = clamp((window.innerHeight - perspective!.getBoundingClientRect().top) / (window.innerHeight * 0.8));
      element!.style.setProperty("--perspective", reveal.toFixed(4));
    }
    function schedule() { if (!frame && !reduced.matches && desktop.matches) frame = window.requestAnimationFrame(update); }
    function onScroll() { manual = false; schedule(); }
    function onInput() { manual = true; setProgress(Number(range!.value) / 100); }
    function onPointer(event: PointerEvent) {
      if (reduced.matches || !desktop.matches || !finePointer.matches) return;
      const rect = scene!.getBoundingClientRect();
      scene!.style.setProperty("--pointer-x", ((event.clientX - rect.left) / rect.width - 0.5).toFixed(3));
      scene!.style.setProperty("--pointer-y", ((event.clientY - rect.top) / rect.height - 0.5).toFixed(3));
    }
    function resetPointer() {
      scene!.style.setProperty("--pointer-x", "0");
      scene!.style.setProperty("--pointer-y", "0");
    }
    function configure() {
      element!.dataset.motion = reduced.matches ? "reduced" : "full";
      if (reduced.matches || !desktop.matches) {
        cancelAnimationFrame(frame);
        frame = 0;
        setProgress(1);
        element!.style.setProperty("--perspective", "1");
        resetPointer();
      } else schedule();
    }
    element.dataset.enhanced = "true";
    configure();
    // Enhancement changes the sticky scene height; preserve direct fragment links.
    const fragmentFrame = requestAnimationFrame(() => {
      const fragment = window.location.hash.slice(1);
      if (fragment) document.getElementById(fragment)?.scrollIntoView();
    });
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", schedule, { passive: true });
    reduced.addEventListener("change", configure);
    desktop.addEventListener("change", configure);
    range.addEventListener("input", onInput);
    scene.addEventListener("pointermove", onPointer, { passive: true });
    scene.addEventListener("pointerleave", resetPointer);
    const observer = new ResizeObserver(schedule);
    observer.observe(journey);
    return () => {
      cancelAnimationFrame(frame);
      cancelAnimationFrame(fragmentFrame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", schedule);
      reduced.removeEventListener("change", configure);
      desktop.removeEventListener("change", configure);
      range.removeEventListener("input", onInput);
      scene.removeEventListener("pointermove", onPointer);
      scene.removeEventListener("pointerleave", resetPointer);
      observer.disconnect();
      delete element.dataset.enhanced;
      delete element.dataset.motion;
    };
  }, []);
  return <div ref={root} className={styles.experience}>{children}</div>;
}
