import type { Metadata } from "next";
import localFont from "next/font/local";
import { site } from "@/content/site";
import "./globals.css";

const archivo = localFont({
  src: "../../public/fonts/archivo-latin-variable.woff2",
  variable: "--font-archivo",
  weight: "100 900",
  display: "swap",
  declarations: [{ prop: "font-stretch", value: "62% 125%" }],
});

const plexMono = localFont({
  src: "../../public/fonts/ibm-plex-mono-latin-400.woff2",
  variable: "--font-plex-mono",
  weight: "400",
  display: "swap",
  preload: false,
  adjustFontFallback: false,
  fallback: ["Courier New", "monospace"],
});

export const metadata: Metadata = {
  title: `${site.name} — Encuentra tus próximos anunciantes`,
  description: site.description,
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-ES" className={`${archivo.variable} ${plexMono.variable}`}>
      <body>
        <a className="skip-link" href="#contenido">Saltar al contenido</a>
        {children}
      </body>
    </html>
  );
}
