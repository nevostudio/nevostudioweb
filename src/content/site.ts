export const site = {
  name: "NEVOSTUDIO",
  email: "info@nevostudio.net",
  description: "Encuentra potenciales anunciantes para tu medio. Analizamos las revistas de tu sector y reunimos información y contactos disponibles en un informe para tu equipo comercial. Primera prueba gratis.",
} as const;

export const hero = {
  eyebrow: "Oportunidades comerciales para medios",
  audience: "Revistas de tu sector → Potenciales anunciantes",
  title: ["ENCUENTRA", "TUS PRÓXIMOS", "ANUNCIANTES."],
  action: "Así hacemos el análisis",
  description: "Las revistas de tu sector muestran qué empresas están apostando por la publicidad. Analizamos sus páginas para identificar anunciantes que puedan encajar en tu medio.",
  approach: "Reunimos su actividad, dónde se anuncian y los contactos disponibles. Una base de potenciales clientes para que tu equipo comercial valore oportunidades y prepare el contacto.",
  illustrationCaption: "Ilustración conceptual · Sin datos reales",
} as const;

export const homeNavigation = [
  { href: "#presentacion", label: "Cómo trabajamos", number: "01" },
  { href: "#analisis-anunciantes", label: "Ver el análisis", number: "02" },
  { href: "#informe-muestra", label: "Informe de muestra", number: "03" },
  { href: "#contacto", label: "Prueba gratis ↗", number: "04" },
] as const;

// Preserved on /sistema-visual as a working reference for the existing foundations.
export const foundationNavigation = [
  { href: "#tipografia", label: "Tipografía", number: "01" },
  { href: "#color", label: "Color", number: "02" },
  { href: "#reticula", label: "Retícula", number: "03" },
  { href: "#interfaz", label: "Interfaz", number: "04" },
] as const;

export type NavigationItem = { href: `#${string}`; label: string; number: string };
