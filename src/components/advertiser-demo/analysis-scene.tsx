import { demoAdvertisers, demoPublication } from "@/content/advertiser-demo";
import { Advertisement, MagazineCover, MagazinePage } from "./publication";
import styles from "./advertiser-demo.module.css";

// A visual explanation only; the readable, semantic report follows the scene.
export function AnalysisScene() {
  return (
    <div className={styles.canvas} aria-hidden="true">
      <div className={styles.sourceCover}><MagazineCover /></div>
      {demoAdvertisers.map((advertiser, index) => (
        <div className={styles.pageGhost} data-position={index} key={advertiser.id}><MagazinePage advertiser={advertiser} /></div>
      ))}
      <div className={styles.reportPaper}>
        <div className={styles.documentTitle}><span>NEVOSTUDIO · {demoPublication.name}</span><strong>Informe de anunciantes</strong><p><span>Anunciante</span><span>Información recopilada</span><span>Fuente</span></p></div>
        <p className={styles.documentFoot}>Todos los anunciantes de esta muestra.<span>Documento ilustrativo · Sin datos reales</span></p>
      </div>
      {demoAdvertisers.map((advertiser, index) => (
        <div className={styles.movingAdvertiser} data-position={index} key={advertiser.id}>
          <div className={styles.adCreative}><Advertisement advertiser={advertiser} /></div>
          <strong className={styles.actorName}>{advertiser.name}</strong>
          <span className={styles.selection}>Anunciante identificado</span>
          <span className={styles.sourceReference}>{demoPublication.name} · Página {advertiser.page}</span>
          <div className={styles.recordData}>
            <span>Información recopilada<small>Contenido ilustrativo</small></span>
            <span>{demoPublication.name}<small>Página {advertiser.page}</small></span>
          </div>
        </div>
      ))}
    </div>
  );
}
