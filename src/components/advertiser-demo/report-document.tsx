import { demoAdvertisers, demoPublication } from "@/content/advertiser-demo";
import { AdvertiserRecords } from "./advertiser-records";
import styles from "./report-document.module.css";

export function ReportDocument() {
  const stats = [
    { value: demoAdvertisers.length, label: "Anunciantes" },
    { value: demoAdvertisers.filter(ad => ad.web).length, label: "Con sitio web" },
    { value: demoAdvertisers.filter(ad => ad.email || ad.phone).length, label: "Con contacto" },
    { value: demoPublication.pages, label: "Páginas de revista" },
  ];
  const sectors = [...new Set(demoAdvertisers.map(ad => ad.sector))].map(sector => ({
    name: sector,
    count: demoAdvertisers.filter(ad => ad.sector === sector).length,
  }));

  return (
    <article className={styles.document} aria-labelledby="sample-report-title">
      <header className={styles.header}>
        <div>
          <p className={styles.imprint}>NEVOSTUDIO / INFORME DE MUESTRA</p>
          <h3 id="sample-report-title">Quién se anuncia.<br />Y qué sabemos de cada negocio.</h3>
        </div>
        <p className={styles.publication}><strong>{demoPublication.name}</strong><span>{demoPublication.issue}</span><span>Análisis visual · Ejemplo ficticio</span></p>
      </header>
      <p className={styles.disclosure}><strong>Estructura basada en un informe real. Todos los datos son ficticios.</strong> La revista, las empresas, los contactos y las cifras se han creado para esta muestra.</p>
      <dl className={styles.stats} aria-label="Resumen de esta revista ficticia">
        {stats.map(stat => <div key={stat.label}><dt>{stat.label}</dt><dd>{stat.value}</dd></div>)}
      </dl>
      <details className={styles.sectors}>
        <summary>Reparto por sector <span>{sectors.length} sectores en la muestra</span></summary>
        <ul>
          {sectors.map(sector => <li key={sector.name}><span>{sector.name}</span><span className={styles.bar} aria-hidden="true"><i style={{ width: `${sector.count / demoAdvertisers.length * 100}%` }} /></span><strong>{sector.count} de {demoAdvertisers.length}</strong></li>)}
        </ul>
      </details>
      <div className={styles.recordsHeading}><h4>Ficha de cada anunciante</h4><p>Abre una ficha para consultar sus datos.</p></div>
      <AdvertiserRecords />
      <footer className={styles.foot}>
        <p><strong>La información disponible varía.</strong> «No disponible» indica un campo sin dato. «Con contacto» cuenta las fichas con email o teléfono de ejemplo. Los dominios .example y el teléfono con X no son contactos operativos.</p>
        <p><strong>Revisión recomendada.</strong> La confianza se refiere a la detección automática; no verifica los datos de contacto ni garantiza su exactitud. Los porcentajes de esta muestra también son ficticios.</p>
      </footer>
    </article>
  );
}
