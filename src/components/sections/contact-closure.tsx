import { site } from "@/content/site";
import styles from "./contact-closure.module.css";

export function ContactClosure() {
  return (
    <section id="contacto" tabIndex={-1} aria-labelledby="contact-title" className={styles.closure}>
      <p className={styles.bridge}>De una revista de muestra a las publicaciones de tu sector.</p>
      <h2 id="contact-title" className={styles.question}>¿Qué publicaciones te interesa analizar?</h2>
      <div className={styles.contact}>
        <p id="contact-invitation">Cuéntanos por email.</p>
        <a className={styles.email} href={`mailto:${site.email}`} aria-describedby="contact-invitation">
          {site.email.split("@")[0]}@<wbr />{site.email.split("@")[1]}
        </a>
      </div>
    </section>
  );
}
