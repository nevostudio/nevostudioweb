import { StatusLabel } from "@/components/ui/status-label";
import { Publication } from "./publication";
import { ReportDocument } from "./report-document";
import { analysisSteps, demoPublication } from "@/content/advertiser-demo";
import { AnalysisJourney } from "./analysis-journey";
import { AnalysisScene } from "./analysis-scene";
import styles from "./advertiser-demo.module.css";

export function AdvertiserDemo() {
  return (
    <section id="analisis-anunciantes" tabIndex={-1} aria-labelledby="analysis-title" className={styles.section}>
      <header className={styles.introduction}>
        <div>
          <p className={styles.kicker}>Así pasa una revista a ser un informe.</p>
          <h2 id="analysis-title">Todos sus anunciantes.<br /><span>En un mismo informe.</span></h2>
        </div>
        <div className={styles.productNote}>
          <StatusLabel>Análisis por encargo</StatusLabel>
          <p>Este ejemplo muestra el recorrido: revisamos la revista, identificamos todos sus anunciantes y reunimos su información en un informe. La revista y los negocios de esta demostración son ficticios.</p>
        </div>
      </header>
      <AnalysisJourney>
        <div className={styles.stage} data-analysis-stage>
          <div className={styles.stageTop} data-analysis-size-probe><p>{demoPublication.disclosure}</p><span>Ejemplo del proceso</span></div>
          <div className={styles.controls} role="group" aria-label="Recorrer el análisis ilustrativo de la revista">
            {analysisSteps.map((step, index) => <button key={step.label} type="button" data-analysis-choice={index} data-progress={step.progress} aria-pressed={index === 0} aria-describedby="analysis-description">{step.label}</button>)}
          </div>
          <div className={styles.stepDescription} id="analysis-description">
            {analysisSteps.map((step, index) => <div key={step.label} data-analysis-copy={index}><h3>{step.title}</h3><p>{step.note}</p></div>)}
          </div>
          <AnalysisScene />
          <div className={styles.stageBottom}><p data-found-count>0 de 3 anunciantes de la muestra identificados</p><a className={styles.reportLink} href="#informe-muestra">Leer el informe de muestra</a><p>Avanza con el scroll o elige un paso.</p></div>
        </div>
        <div className={styles.readingPublication}>
          <p className={styles.disclosure}>{demoPublication.disclosure}</p>
          <details className={styles.sourceDetails}>
            <summary>Explorar la revista de muestra <span>4 páginas · 3 anunciantes ficticios</span></summary>
            <Publication />
          </details>
        </div>
      </AnalysisJourney>
      <div id="informe-muestra" tabIndex={-1} className={styles.collected}>
        <h3>Esto es lo que recibe tu equipo.</h3>
        <ReportDocument />
      </div>
    </section>
  );
}
