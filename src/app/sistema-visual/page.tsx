import type { Metadata } from "next";
import { FoundationSheet } from "@/components/foundations/foundation-sheet";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { foundationNavigation } from "@/content/site";

export const metadata: Metadata = {
  title: "Sistema visual — NEVOSTUDIO",
  description: "Cuaderno de comprobación del sistema visual de NEVOSTUDIO.",
};

export default function VisualSystem() {
  return (
    <div id="inicio" tabIndex={-1}>
      <SiteHeader items={foundationNavigation} specimen />
      <FoundationSheet />
      <SiteFooter specimen />
    </div>
  );
}
