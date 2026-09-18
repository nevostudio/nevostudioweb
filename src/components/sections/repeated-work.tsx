import { repeatedWork } from "@/content/repeated-work";
import { WorkSequence } from "./work-sequence";
import styles from "./repeated-work.module.css";

export function RepeatedWork() {
  return (
    <section id="trabajo-repetido" tabIndex={-1} aria-labelledby="work-title" className={styles.section}>
      <WorkSequence>
        <div className={styles.stage} data-work-stage>
          <header className={styles.heading}>
            <h2 id="work-title">Cambia el número.<br /><span>El trabajo se repite.</span></h2>
            <p>{repeatedWork.introduction}</p>
          </header>

          <div className={styles.workspace}>
            <div className={styles.commentary}>
              <p className={styles.marginTitle}>Entre un cierre<br />y el siguiente.</p>
              <div className={styles.stepCopy}>
                {repeatedWork.steps.map((step, index) => (
                  <div key={step.label} data-step-copy={index} className={styles.stepText}>
                    <h3>{step.title}</h3><p>{step.note}</p>
                  </div>
                ))}
              </div>
              <div className={styles.controls} data-work-controls role="group" aria-label="Recorrer el trabajo de cada número">
                {repeatedWork.steps.map((step, index) => (
                  <button key={step.label} type="button" data-work-step={index} data-progress={step.progress} aria-pressed={index === 0}>{step.label}</button>
                ))}
              </div>
              <p className={styles.scrollHint}>Avanza con el scroll o elige un momento.</p>
            </div>

            <div className={styles.desk}>
              <div className={styles.deskHeading}><span>La mesa de trabajo de un medio</span><span className={styles.repeatNote}>Otra vez.</span></div>
              <div className={styles.sheets} data-work-sheets>
                {["Este número", "El siguiente número", "Y el siguiente"].map((edition, copy) => (
                  <div className={`${styles.sheet} ${copy === 1 ? styles.copyOne : copy === 2 ? styles.copyTwo : styles.original}`} key={edition} aria-hidden={copy > 0 ? true : undefined}>
                    <div className={styles.sheetHeading}><span>{edition}</span><span>Tareas habituales</span></div>
                    <ol className={styles.rows} aria-label={copy === 0 ? "Ejemplos de trabajo manual en revistas y medios" : undefined}>
                      {repeatedWork.tasks.map((task) => (
                        <li key={task.task} data-selected={task.selected ? "true" : "false"}>
                          <span className={styles.task}>{task.task}</span>
                          <span className={styles.transfer}>{task.transfer}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                ))}
              </div>
              <div className={styles.deskFoot}><span>Escena ilustrativa de tareas habituales.</span><span className={styles.orderNote}>La misma información, reunida.</span></div>
            </div>
          </div>
        </div>
      </WorkSequence>

      <div className={styles.handoff}>
        <p>El primer paso no es hacer más.</p>
        <h3>Es dejar de reconstruir<br />la misma información.</h3>
        <p className={styles.handoffNote}>Seleccionar lo relevante. Darle estructura.<br />Y, a partir de ahí, explorar qué se puede automatizar.</p>
      </div>
    </section>
  );
}
