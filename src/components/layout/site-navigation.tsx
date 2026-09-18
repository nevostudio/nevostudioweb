"use client";

import { useRef } from "react";
import type { NavigationItem } from "@/content/site";

export function SiteNavigation({ items, label = "Navegación principal" }: { items: readonly NavigationItem[]; label?: string }) {
  const disclosure = useRef<HTMLDetailsElement>(null);

  function closeAndFocusTarget(href: string) {
    if (disclosure.current) disclosure.current.open = false;
    document.getElementById(href.slice(1))?.focus({ preventScroll: true });
  }

  return (
    <>
      <nav className="desktop-navigation" aria-label={label}>
        {items.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
      </nav>
      <details
        className="mobile-navigation"
        ref={disclosure}
        onKeyDown={(event) => {
          if (event.key === "Escape" && disclosure.current?.open) {
            disclosure.current.open = false;
            disclosure.current.querySelector("summary")?.focus();
            event.preventDefault();
          }
        }}
      >
        <summary>Índice <span aria-hidden="true" className="menu-symbol" /></summary>
        <nav aria-label={`${label} en móvil`}>
          {items.map((item) => (
            <a key={item.href} href={item.href} onClick={() => closeAndFocusTarget(item.href)}>
              <span className="font-mono text-caption text-muted">{item.number}</span>
              {item.label}
              <span aria-hidden="true">↗</span>
            </a>
          ))}
        </nav>
      </details>
    </>
  );
}
