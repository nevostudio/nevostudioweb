import { demoAdvertisers } from "@/content/advertiser-demo";
import styles from "./report-document.module.css";

export function AdvertiserRecords() {
  return (
    <ul className={styles.records} aria-label="Anunciantes ficticios y sus datos de ejemplo">
      {demoAdvertisers.map((advertiser, index) => (
        <li key={advertiser.id}>
          <details className={styles.record} open={index === 0}>
            <summary>
              <span className={styles.recordNumber} aria-hidden="true">0{index + 1}</span>
              <span className={styles.recordIdentity}><strong>{advertiser.name}</strong><span>{advertiser.sector}</span></span>
              <span className={styles.recordPage}>Pág. {advertiser.page}</span>
              <span className={styles.toggle} aria-hidden="true" />
            </summary>
            <dl className={styles.fields}>
              <div><dt>Web</dt><dd>{advertiser.web ?? "No disponible"}</dd></div>
              <div><dt>Email</dt><dd>{advertiser.email ?? "No disponible"}</dd></div>
              <div><dt>Teléfono</dt><dd>{advertiser.phone ?? "No disponible"}</dd></div>
              <div><dt>Páginas en la revista</dt><dd>{advertiser.page}</dd></div>
              <div><dt>Tamaño del anuncio</dt><dd>{advertiser.size}</dd></div>
              <div><dt>Confianza de detección</dt><dd>{advertiser.confidence} % <span className={styles.exampleLabel}>· ejemplo</span></dd></div>
            </dl>
          </details>
        </li>
      ))}
    </ul>
  );
}
