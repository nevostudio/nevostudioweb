import { ActionLink } from "@/components/ui/action-link";
import { EditorialLabel } from "@/components/ui/editorial-label";

export default function NotFound() {
  return (
    <main id="contenido" tabIndex={-1} className="container-shell py-24">
      <EditorialLabel number="404">NEVOSTUDIO</EditorialLabel>
      <h1 className="type-title mt-8 mb-6">Página no encontrada.</h1>
      <p className="type-body text-muted mb-8">La dirección que buscas no está disponible.</p>
      <ActionLink href="/">Volver al inicio</ActionLink>
    </main>
  );
}
