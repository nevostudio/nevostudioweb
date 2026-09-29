import { site } from "@/content/site";
import styles from "./contact-closure.module.css";

export function ContactClosure() {
  return (
    <section id="contacto" tabIndex={-1} aria-labelledby="contact-title" className={styles.closure}>
      <p className={styles.bridge}>Nuevas oportunidades para tu equipo comercial.<br /><strong>El primer análisis es gratis.</strong></p>
      <h2 id="contact-title" className={styles.question}>¿Buscas nuevos anunciantes para tu medio?</h2>
      <div className={styles.contact}>
        <p id="contact-invitation">Cuéntanos cuál es tu medio, en qué sector trabajas y qué tipo de anunciantes buscas. Concretamos contigo las revistas que analizar y el alcance de la primera prueba gratuita.</p>
        <a className={styles.email} href={`mailto:${site.email}?subject=${encodeURIComponent("Prueba gratis · Nuevos anunciantes")}&body=${encodeURIComponent("Hola, queremos encontrar nuevos anunciantes para nuestro medio y solicitar la primera prueba gratis.\n\nMedio o empresa:\nSector:\nTipo de anunciantes que buscamos:\nRevistas de referencia (opcional):\n")}`} aria-describedby="contact-invitation">
          {site.email.split("@")[0]}@<wbr />{site.email.split("@")[1]}
        </a>
      </div>
    </section>
  );
}
