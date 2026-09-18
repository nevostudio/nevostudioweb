import { ActionLink } from "@/components/ui/action-link";
import { EditorialLabel } from "@/components/ui/editorial-label";
import { HeroMotion } from "@/components/sections/hero-motion";
import { hero } from "@/content/site";
import styles from "./hero.module.css";

export function Hero() {
  return (
    <HeroMotion>
      <section className={styles.journey} data-journey aria-labelledby="hero-title">
        <div className={styles.screen} data-screen>
          <div className={styles.masthead}>
            <EditorialLabel number="01">{hero.eyebrow}</EditorialLabel>
            <p>{hero.audience}</p>
          </div>
          <div className={styles.composition}>
            <div className={styles.message}>
              <h1 id="hero-title" className={styles.title}>
                {hero.title.map((line) => <span key={line}><span>{line}</span></span>)}
              </h1>
              <p className={styles.lead}>Herramientas propias.<br />Menos trabajo manual.<br /><strong>Más posibilidades para tu medio.</strong></p>
            </div>
            <figure className={styles.figure}>
              <div className={styles.scene} data-scene aria-hidden="true">
                <div className={styles.sceneGrid} />
                <span className={styles.coordinate}>NEVO / VISIÓN EDITORIAL</span>
                <span className={styles.registration}>+</span>
                <div className={styles.stack}>
                  <div className={styles.backPage}><span>CONTENIDO / CONTEXTO</span><i /><i /><i /></div>
                  <div className={styles.cover}>
                    <div className={styles.coverMasthead}><span>PUBLICACIÓN</span><span>N.º 01</span></div>
                    <div className={styles.coverTitle}>OTRA<br />LECTURA<span>↗</span></div>
                    <div className={styles.coverArt}><i /><i /><i /><i /><i /><span>n.</span></div>
                    <div className={styles.coverFoot}><span>EL CONTENIDO<br />ES SOLO EL PRINCIPIO.</span><span>↗</span></div>
                  </div>
                  <div className={styles.extract}><span>01 / CONTENIDO</span><strong>Una idea.<br />Más recorrido.</strong><div className={styles.textLines}><i /><i /><i /></div></div>
                  <div className={styles.context}><span>02 / CONTEXTO</span><strong>Conectar<br />lo relevante.</strong><div className={styles.connections}><i /><i /><i /><i /></div></div>
                  <div className={styles.record}><span>03 / POSIBILIDAD</span><strong>Información<br />para actuar.</strong><span className={styles.recordArrow}>↗</span></div>
                </div>
                <span className={styles.sceneFolio}>PAPEL → INFORMACIÓN</span>
              </div>
              <div className={styles.sceneControls} data-controls>
                <label htmlFor="perspectiva">Cambia la perspectiva <span aria-hidden="true">↔</span></label>
                <input id="perspectiva" type="range" min="0" max="100" defaultValue="0" aria-label="Transformar la publicación en información" aria-describedby="scene-caption" />
                <div><span>Publicación</span><span>Información</span></div>
              </div>
              <figcaption id="scene-caption" className={styles.sceneCaption}>{hero.illustrationCaption}</figcaption>
            </figure>
          </div>
          <div className={styles.bottomLine}>
            <ActionLink href="#presentacion" direction="down" variant="text" className={styles.explore}>{hero.action}</ActionLink>
            <p>De lo que publicas<br /><span>a lo que puedes hacer con ello.</span></p>
            <div className={styles.progress} aria-hidden="true"><span>01</span><i><b /></i><span>02</span></div>
          </div>
        </div>
      </section>
      <section id="presentacion" tabIndex={-1} className={styles.perspective} data-perspective aria-labelledby="perspective-title">
        <div className={styles.perspectiveTop}><span>NEVOSTUDIO / OTRA PERSPECTIVA</span><span>EN CONSTRUCCIÓN, CON DIRECCIÓN.</span></div>
        <div className={styles.perspectiveComposition}>
          <div className={styles.statement}>
            <p className={styles.perspectiveLabel}>De la página a la posibilidad.</p>
            <h2 id="perspective-title">EL VALOR<br />NO TERMINA<br />EN LA <span>ÚLTIMA<br />PÁGINA.</span></h2>
          </div>
          <div className={styles.nextPage} aria-hidden="true">
            <span className={styles.nextPageIndex}>N / 01</span>
            <span className={styles.nextPageArrow}>↗</span>
            <span className={styles.nextPageNote}>UNA NUEVA<br />LECTURA.</span>
            <div className={styles.nextPageLines}><i /><i /><i /><i /></div>
          </div>
          <div className={styles.perspectiveCopy}>
            <p>{hero.description}</p>
            <p>{hero.approach}</p>
            <span className={styles.signature}>Criterio editorial. Posibilidades digitales.</span>
          </div>
        </div>
        <div className={styles.perspectiveBottom}><span>REVISTAS. MEDIOS. EDITORIALES.</span><span>EL SIGUIENTE CAPÍTULO SE ESTÁ ESCRIBIENDO. ↗</span></div>
      </section>
    </HeroMotion>
  );
}
