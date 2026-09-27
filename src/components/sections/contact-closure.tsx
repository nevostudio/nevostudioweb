import { site } from "@/content/site";
import styles from "./contact-closure.module.css";

export function ContactClosure() {
  return (
    <section id="contacto" tabIndex={-1} aria-labelledby="contact-title" className={styles.closure}>
      <p className={styles.bridge}>Un informe para tu empresa.<br /><strong>El primer análisis es gratis.</strong></p>
      <h2 id="contact-title" className={styles.question}>¿Qué revista quieres que analicemos?</h2>
      <div className={styles.contact}>
        <p id="contact-invitation">Solicita tu prueba gratis por email. Indícanos el nombre de la revista, la edición que te interesa y qué información necesitas sobre sus anunciantes. Concretamos contigo el alcance del informe.</p>
        <a className={styles.email} href={`mailto:${site.email}?subject=${encodeURIComponent("Prueba gratis · Análisis de anunciantes")}&body=${encodeURIComponent("Hola, me gustaría solicitar la primera prueba gratis de análisis de anunciantes.\n\nEmpresa:\nRevista y edición:\nInformación que necesitamos:\n")}`} aria-describedby="contact-invitation">
          {site.email.split("@")[0]}@<wbr />{site.email.split("@")[1]}
        </a>
      </div>
    </section>
  );
}
