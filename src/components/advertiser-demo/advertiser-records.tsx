import { demoAdvertisers, demoPublication } from "@/content/advertiser-demo";
import styles from "./advertiser-demo.module.css";

export function AdvertiserRecords() {
  return (
    <div className={styles.records}>
      <div className={styles.recordHeading} aria-hidden="true"><span>Anunciante</span><span>Información recopilada</span><span>Fuente en la muestra</span></div>
      <ul>
        {demoAdvertisers.map(advertiser => (
          <li key={advertiser.id}>
            <strong>{advertiser.name}</strong>
            <span className={styles.informationSample}><span className={styles.mobileField}>Información recopilada</span>Contenido ilustrativo<span className={styles.informationLines} aria-hidden="true"><i /><i /></span></span>
            <span><span className={styles.mobileField}>Fuente en la muestra</span>{demoPublication.name} · Página {advertiser.page}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
