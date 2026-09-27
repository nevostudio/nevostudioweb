import { ActionLink } from "@/components/ui/action-link";
import { EditorialLabel } from "@/components/ui/editorial-label";
import { StatusLabel } from "@/components/ui/status-label";

const palette = [
  { name: "Blanco", code: "#FFFFFF", role: "El espacio para leer.", className: "swatch--paper" },
  { name: "Negro", code: "#0A0A0A", role: "La voz principal.", className: "swatch--ink" },
  { name: "Naranja", code: "#FF4B00", role: "Una señal con intención.", className: "swatch--accent" },
  { name: "Gris 50", code: "#F4F4F2", role: "Fondos sutiles.", className: "swatch--secondary" },
  { name: "Gris 400", code: "#9A9A97", role: "Detalles y elementos auxiliares.", className: "swatch--neutral" },
  { name: "Gris 800", code: "#2A2A28", role: "El segundo nivel.", className: "swatch--muted" },
  { name: "Gris 100", code: "#ECECEA", role: "Separar sin interrumpir.", className: "swatch--line" },
] as const;

export function FoundationSheet() {
  return (
    <main id="contenido" tabIndex={-1} className="container-shell foundation-sheet">
      <div className="sheet-heading editorial-grid">
        <div className="sheet-heading__title">
          <EditorialLabel>Cuaderno de diseño / Fase 01</EditorialLabel>
          <h1 className="type-title">Sistema visual<span className="text-accent">.</span></h1>
        </div>
        <p className="sheet-heading__note">Tipografía, color y espacio.<br />Una base editorial para<br />lo que viene después.</p>
      </div>

      <section id="tipografia" tabIndex={-1} aria-labelledby="type-heading" className="specimen-section">
        <div className="section-heading">
          <EditorialLabel number="01">Tipografía</EditorialLabel>
          <p className="specimen-note">Archivo + IBM Plex Mono</p>
        </div>
        <div className="type-specimen editorial-grid">
          <div className="type-specimen__sample" aria-hidden="true">Aa<span className="text-accent">.</span></div>
          <div className="type-specimen__description">
            <h2 id="type-heading" className="type-heading">Carácter editorial.<br />Lectura clara.</h2>
            <p className="type-body text-muted reading-width">Una voz firme en los titulares. Una lectura tranquila en los textos. Y la precisión justa para acompañar los datos.</p>
            <div className="font-specification">
              <span>Archivo</span><span className="specimen-note">400 / 600 / 800</span>
              <span>IBM Plex Mono</span><span className="specimen-note">400</span>
            </div>
          </div>
        </div>
        <div className="type-row">
          <span className="specimen-note">Titular / 800</span>
          <p className="type-display">Edición.</p>
        </div>
        <div className="type-row">
          <span className="specimen-note">Encabezado / 600</span>
          <p className="type-heading">Un orden que se entiende.</p>
        </div>
        <div className="type-row">
          <span className="specimen-note">Lectura / 400</span>
          <p className="type-body reading-width">Una publicación se construye con criterio: qué contar, cómo organizarlo y dónde poner el foco. El espacio también forma parte del mensaje.</p>
        </div>
        <div className="type-row type-row--last">
          <span className="specimen-note">Anotación / 400</span>
          <p className="font-mono text-caption glyph-sample">ÁÉÍÓÚ · áéíóú · Ññ · Üü · ¿? · ¡!<br />0123456789 / 01—09 / 1.250,00 €</p>
        </div>
      </section>

      <section id="color" tabIndex={-1} aria-labelledby="color-heading" className="specimen-section">
        <div className="section-heading">
          <EditorialLabel number="02">Color</EditorialLabel>
          <p className="specimen-note">Paleta NEVO · Brand Book v1.0</p>
        </div>
        <div className="section-intro editorial-grid">
          <h2 id="color-heading" className="type-heading">Blanco. Negro.<br /><span>Un punto de atención.</span></h2>
          <p className="type-body text-muted">Blanco y neutros para los fondos. Negro para la estructura. Naranja para acciones y momentos clave. El gris oscuro mantiene la legibilidad del texto secundario.</p>
        </div>
        <ul className="palette" aria-label="Paleta de color">
          {palette.map((color, index) => (
            <li key={color.name}>
              <div className={`swatch ${color.className}`}><span className="font-mono text-caption">0{index + 1}</span></div>
              <div className="swatch-caption"><h3>{color.name}</h3><span className="specimen-note">{color.code}</span></div>
              <p className="text-small text-muted">{color.role}</p>
            </li>
          ))}
        </ul>
      </section>

      <section id="reticula" tabIndex={-1} aria-labelledby="grid-heading" className="specimen-section">
        <div className="section-heading">
          <EditorialLabel number="03">Retícula y espacio</EditorialLabel>
          <p className="specimen-note">Ritmo base / 8 px</p>
        </div>
        <div className="section-intro editorial-grid">
          <h2 id="grid-heading" className="type-heading">Cada elemento,<br />su lugar.</h2>
          <p className="type-body text-muted">Una estructura común que permite cambiar de ritmo. Márgenes amplios, columnas flexibles y una medida cómoda para leer.</p>
        </div>
        <div className="grid-ruler editorial-grid" aria-hidden="true">
          {Array.from({ length: 12 }, (_, index) => <div key={index}><span>{String(index + 1).padStart(2, "0")}</span></div>)}
        </div>
        <p className="grid-caption specimen-note"><span className="grid-caption__desktop">12 columnas · Escritorio</span><span className="grid-caption__tablet">8 columnas · Tableta</span><span className="grid-caption__mobile">4 columnas · Móvil</span><span>Contenedor máximo / 1.600 px</span></p>
        <div className="spacing-scale" role="group" aria-label="Escala de espacio en píxeles">
          {[8, 16, 24, 32, 48, 64, 96].map((space) => (
            <div key={space}><div className="spacing-scale__bar" style={{ height: `${space / 16}rem` }} /><span className="specimen-note">{space}</span></div>
          ))}
        </div>
      </section>

      <section id="interfaz" tabIndex={-1} aria-labelledby="ui-heading" className="specimen-section specimen-section--last">
        <div className="section-heading">
          <EditorialLabel number="04">Interfaz</EditorialLabel>
          <p className="specimen-note">Lo esencial, bien resuelto</p>
        </div>
        <div className="section-intro editorial-grid">
          <h2 id="ui-heading" className="type-heading">Señales claras.<br />Acciones concretas.</h2>
          <p className="type-body text-muted">Enlaces que llevan a un destino. Etiquetas que sitúan. Una navegación que funciona con ratón, teclado y pantalla táctil.</p>
        </div>
        <div className="interface-specimens editorial-grid">
          <div className="interface-specimens__actions">
            <span className="specimen-note">Acción principal y enlace</span>
            <div className="action-group"><ActionLink href="#tipografia">Revisar la tipografía</ActionLink><ActionLink href="#color" variant="text">Ver la paleta</ActionLink></div>
          </div>
          <div className="interface-specimens__labels">
            <span className="specimen-note">Estado y anotación</span>
            <StatusLabel>En desarrollo</StatusLabel>
            <EditorialLabel number="01">Nota editorial</EditorialLabel>
          </div>
        </div>
        <p className="sheet-endnote"><span aria-hidden="true">↳</span> Muestras del sistema visual. Esta página es un cuaderno de trabajo, previo al diseño de la portada.</p>
      </section>
    </main>
  );
}
