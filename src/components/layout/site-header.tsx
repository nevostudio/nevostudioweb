import { SiteNavigation } from "@/components/layout/site-navigation";
import { homeNavigation, site, type NavigationItem } from "@/content/site";

export function SiteHeader({ items = homeNavigation, specimen = false }: { items?: readonly NavigationItem[]; specimen?: boolean }) {
  return (
    <header className={`site-header container-shell${specimen ? "" : " viewport-shell"}`}>
      <a className="wordmark" href="#inicio" aria-label={`${site.name}, inicio`}>
        NEVO<span>STUDIO</span><span className="wordmark__point" aria-hidden="true" />
      </a>
      <p className="header-caption">{specimen ? <>Tecnología para<br />revistas y medios.</> : <>Análisis de anunciantes.<br />Revistas e informes.</>}</p>
      <SiteNavigation items={items} label={specimen ? "Índice del cuaderno" : "Navegación principal"} />
    </header>
  );
}
