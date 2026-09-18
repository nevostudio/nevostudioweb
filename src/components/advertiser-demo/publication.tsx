import type { ReactNode } from "react";
import { demoAdvertisers, demoPublication, type DemoAdvertiser } from "@/content/advertiser-demo";
import styles from "./advertiser-demo.module.css";

export function MagazineCover() {
  return (
    <div className={styles.magazineCover}>
      <div className={styles.coverMasthead}>{demoPublication.name}<span>{demoPublication.issue}</span></div>
      <p className={styles.coverStory}>Habitar<br />lo cotidiano.</p>
      <div className={styles.coverArtwork} aria-hidden="true"><i /><i /><i /></div>
      <p className={styles.coverTheme}>{demoPublication.theme}</p>
      <span className={styles.coverDisclosure}>Publicación ficticia</span>
    </div>
  );
}

export function Advertisement({ advertiser }: { advertiser: DemoAdvertiser }) {
  return (
    <div className={styles.advertisement} data-brand={advertiser.id}>
      <span className={styles.adLabel}>Publicidad ficticia</span>
      <strong className={styles.adName}>{advertiser.name}</strong>
      <div className={styles.adArtwork} aria-hidden="true"><i /><i /><i /></div>
      <p className={styles.adHeadline}>{advertiser.headline}</p>
    </div>
  );
}

export function MagazinePage({ advertiser, children }: { advertiser: DemoAdvertiser; children?: ReactNode }) {
  return (
    <div className={styles.magazinePage}>
      <div className={styles.pageRunningHead}><span>{demoPublication.name}</span><span>{advertiser.category}</span></div>
      <div className={styles.editorialContent}><h4>{advertiser.editorial}</h4><p>{advertiser.excerpt}</p></div>
      {children}
      <span className={styles.pageNumber}>Página {advertiser.page}</span>
    </div>
  );
}

export function Publication() {
  return (
    <figure className={styles.publication}>
      <MagazineCover />
      <div className={styles.pageList}>
        <h3>Recorrer. Identificar. Reunir.</h3>
        <p>Abre las páginas de esta muestra. Cada una contiene un anunciante.</p>
        {demoAdvertisers.map((advertiser, index) => (
          <details key={advertiser.id} open={index === 0}>
            <summary><span>Página {advertiser.page}</span><strong>{advertiser.name}</strong></summary>
            <MagazinePage advertiser={advertiser}><Advertisement advertiser={advertiser} /></MagazinePage>
          </details>
        ))}
      </div>
      <figcaption>Todos los anunciantes de esta revista ficticia aparecen en el informe de muestra, con su página de origen e información ilustrativa.</figcaption>
    </figure>
  );
}
