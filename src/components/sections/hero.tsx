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
                {hero.title.map((line) => <span key={line}><span>{line}{" "}</span></span>)}
              </h1>
              <p className={styles.lead}>Analizamos por encargo la revista que elija tu empresa. Identificamos <strong>todos sus anunciantes</strong> y entregamos un informe con la información disponible sobre cada negocio.</p>
              <div className={styles.actions}>
                <ActionLink href="#contacto">Solicitar prueba gratis</ActionLink>
                <ActionLink href="#informe-muestra" variant="text">Ver informe de muestra</ActionLink>
              </div>
              <p className={styles.offer}>El primer análisis es gratis.</p>
            </div>
            <figure className={styles.figure}>
              <div className={styles.scene} data-scene aria-hidden="true">
                <div className={styles.sceneGrid} />
                <span className={styles.coordinate}>NEVO / DE LA REVISTA AL INFORME</span>
                <span className={styles.registration}>+</span>
                <div className={styles.stack}>
                  <div className={styles.backPage}><span>REVISIÓN / PÁGINA A PÁGINA</span><i /><i /><i /></div>
                  <div className={styles.cover}>
                    <div className={styles.coverMasthead}><span>REVISTA DE MUESTRA</span><span>N.º 01</span></div>
                    <div className={styles.coverTitle}>CADA<br />ANUNCIO<span>↗</span></div>
                    <div className={styles.coverArt}><i /><i /><i /><i /><i /><span>n.</span></div>
                    <div className={styles.coverFoot}><span>UN NEGOCIO.<br />INFORMACIÓN POR REUNIR.</span><span>↗</span></div>
                  </div>
                  <div className={styles.extract}><span>01 / ANUNCIANTES</span><strong>Cada empresa.<br />Cada comercio.</strong><div className={styles.textLines}><i /><i /><i /></div></div>
                  <div className={styles.context}><span>02 / INFORMACIÓN</span><strong>Datos reunidos.<br />Y organizados.</strong><div className={styles.connections}><i /><i /><i /><i /></div></div>
                  <div className={styles.record}><span>03 / INFORME</span><strong>Todos juntos.<br />Para tu equipo.</strong><span className={styles.recordArrow}>↗</span></div>
                </div>
                <span className={styles.sceneFolio}>REVISTA → ANUNCIANTES → INFORME</span>
              </div>
              <div className={styles.sceneControls} data-controls>
                <label htmlFor="perspectiva">De la revista al informe <span aria-hidden="true">↔</span></label>
                <input id="perspectiva" type="range" min="0" max="100" defaultValue="0" aria-label="Explorar el paso de revista a informe" aria-describedby="scene-caption" />
                <div><span>Revista</span><span>Informe</span></div>
              </div>
              <figcaption id="scene-caption" className={styles.sceneCaption}>{hero.illustrationCaption}</figcaption>
            </figure>
          </div>
          <div className={styles.bottomLine}>
            <ActionLink href="#presentacion" direction="down" variant="text" className={styles.explore}>{hero.action}</ActionLink>
            <p>Tú eliges la revista.<br /><span>Nosotros reunimos la información.</span></p>
            <div className={styles.progress} aria-hidden="true"><span>01</span><i><b /></i><span>02</span></div>
          </div>
        </div>
      </section>
      <section id="presentacion" tabIndex={-1} className={styles.perspective} data-perspective aria-labelledby="perspective-title">
        <div className={styles.perspectiveTop}><span>NEVOSTUDIO / CÓMO TRABAJAMOS</span><span>ANÁLISIS POR ENCARGO</span></div>
        <div className={styles.perspectiveComposition}>
          <div className={styles.statement}>
            <p className={styles.perspectiveLabel}>De sus páginas a tu equipo.</p>
            <h2 id="perspective-title">TÚ ELIGES<br />LA REVISTA.<br /><span>NOSOTROS<br />LA ANALIZAMOS.</span></h2>
          </div>
          <div className={styles.nextPage} aria-hidden="true">
            <span className={styles.nextPageIndex}>NEVO / INFORME</span>
            <span className={styles.nextPageArrow}>↗</span>
            <span className={styles.nextPageNote}>ANUNCIANTES.<br />INFORMACIÓN.<br />UNA ENTREGA.</span>
            <div className={styles.nextPageLines}><i /><i /><i /><i /></div>
          </div>
          <div className={styles.perspectiveCopy}>
            <p>{hero.description}</p>
            <p>{hero.approach}</p>
            <span className={styles.signature}>Una revista → Todos sus anunciantes → Un informe</span>
          </div>
        </div>
        <div className={styles.perspectiveBottom}><span>EL PROCESO, PASO A PASO.</span><a href="#analisis-anunciantes">Ver un ejemplo de análisis ↓</a></div>
      </section>
    </HeroMotion>
  );
}
