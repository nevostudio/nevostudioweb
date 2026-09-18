import { site } from "@/content/site";

export function SiteFooter({ specimen = false }: { specimen?: boolean }) {
  return (
    <footer className={`site-footer container-shell${specimen ? "" : " site-footer--contact"}`}>
      <p className="font-semibold">{site.name}</p>
      {specimen && <p className="font-mono text-caption text-muted">Cuaderno de diseño · Fase 01</p>}
      <a href="#inicio" className="footer-link">Volver arriba <span aria-hidden="true">↑</span></a>
    </footer>
  );
}
