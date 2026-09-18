import { demoAdvertisers, demoPublication } from "@/content/advertiser-demo";
import { AdvertiserRecords } from "./advertiser-records";
import styles from "./advertiser-demo.module.css";

export function ReportDocument() {
  return (
    <article className={styles.reportDocument} aria-label="Informe ilustrativo de anunciantes de PLIEGO">
      <header className={styles.reportCover}>
        <span className={styles.reportImprint}>NEVOSTUDIO</span>
        <h3>Informe de<br />anunciantes</h3>
        <p className={styles.reportPublication}>{demoPublication.name}<span>{demoPublication.issue}</span></p>
        <p className={styles.reportDisclosure}>{demoPublication.disclosure}</p>
      </header>
      <div className={styles.reportInterior}>
        <div className={styles.reportRunningHead}><span>Anunciantes de la publicación</span><span>Muestra</span></div>
        <AdvertiserRecords />
        <footer className={styles.reportFoot}>
          <p>{demoAdvertisers.length} anunciantes ficticios · Una revista de muestra</p>
          <p>Representación conceptual del informe. Los bloques de información son ilustrativos.</p>
        </footer>
      </div>
    </article>
  );
}
