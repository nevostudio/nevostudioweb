export const site = {
  name: "NEVOSTUDIO",
  email: "info@nevostudio.net",
  description: "Desarrollamos herramientas y automatizaciones para revistas, medios y editoriales. Tecnología para dedicar menos tiempo al trabajo manual.",
} as const;

export const hero = {
  eyebrow: "Tecnología + automatización",
  audience: "Revistas / Medios / Editoriales",
  title: ["PENSADO", "PARA", "MEDIOS."],
  action: "Cambia de perspectiva",
  introduction: "El valor no termina en la última página.",
  description: "Estamos desarrollando herramientas y automatizaciones para que revistas y medios puedan hacer más con su información y dedicar menos tiempo al trabajo manual.",
  approach: "Unimos criterio editorial, tecnología e IA aplicada. El punto de partida: lo que tu equipo necesita resolver.",
  illustrationCaption: "Ilustración conceptual · Sin datos reales",
} as const;

// The introduction is part of the hero. Add other destinations only in their phase.
export const homeNavigation = [
  { href: "#presentacion", label: "Otra perspectiva ↗", number: "01" },
  { href: "#trabajo-repetido", label: "Trabajo que se repite", number: "02" },
  { href: "#analisis-anunciantes", label: "Análisis de anunciantes", number: "03" },
  { href: "#contacto", label: "Contacto", number: "04" },
] as const;

// Preserved on /sistema-visual as a working reference for the existing foundations.
export const foundationNavigation = [
  { href: "#tipografia", label: "Tipografía", number: "01" },
  { href: "#color", label: "Color", number: "02" },
  { href: "#reticula", label: "Retícula", number: "03" },
  { href: "#interfaz", label: "Interfaz", number: "04" },
] as const;

export type NavigationItem = { href: `#${string}`; label: string; number: string };
