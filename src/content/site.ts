export const site = {
  name: "NEVOSTUDIO",
  email: "info@nevostudio.net",
  description: "Analizamos por encargo todos los anunciantes de una revista y reunimos la información disponible sobre cada empresa o comercio en un informe para tu equipo.",
} as const;

export const hero = {
  eyebrow: "Análisis de anunciantes por encargo",
  audience: "Una revista → Todos sus anunciantes → Un informe",
  title: ["TODOS SUS", "ANUNCIANTES.", "EN UN INFORME."],
  action: "Así hacemos el análisis",
  description: "Tu empresa nos indica qué revista quiere analizar. Revisamos la publicación completa e identificamos todos los anunciantes que aparecen en ella.",
  approach: "Reunimos la información disponible sobre cada empresa o comercio y la organizamos en un informe para tu equipo.",
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
