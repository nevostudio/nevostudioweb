// Synthetic data only. Field types follow the user-supplied June 2026 report.
// Never import the original report or its advertiser/contact data into this app.
export const demoPublication = {
  name: "PLIEGO",
  issue: "Edición de muestra",
  theme: "Objetos, espacios y otras formas de mirar.",
  disclosure: "Demostración con datos ficticios",
  pages: 4,
} as const;

export const demoAdvertisers = [
  { id: "norte", name: "NORTE STUDIO", page: 2, headline: "Espacio para otra mirada.", editorial: "La medida de un espacio", excerpt: "La luz cambia una habitación. Los objetos, la forma de habitarla. Una mirada a lo que nos rodea.", category: "Espacios", sector: "Arquitectura y diseño", web: "norte-studio.example", email: "hola@norte-studio.example", phone: null, size: "Media página", confidence: 98 },
  { id: "lumen", name: "LUMEN AUDIO", page: 3, headline: "Escuchar también es parar.", editorial: "El sonido de lo cotidiano", excerpt: "Hay sonidos que pasan inadvertidos. Detenerse a escucharlos es otra manera de conocer un lugar.", category: "Escucha", sector: "Equipamiento de audio", web: "lumen-audio.example", email: null, phone: "+34 XXX XXX XXX", size: "Media página", confidence: 95 },
  { id: "casa", name: "CASA FORMA", page: 4, headline: "Objetos que encuentran su lugar.", editorial: "Lo que elegimos conservar", excerpt: "Una forma, un material, un gesto. Las cosas cercanas cuentan historias de quienes las utilizan.", category: "Objetos", sector: "Mobiliario y decoración", web: null, email: null, phone: null, size: "Media página", confidence: 87 },
] as const;

export type DemoAdvertiser = (typeof demoAdvertisers)[number];

export const analysisSteps = [
  { label: "Revista", title: "Todo empieza en sus páginas.", note: "Una revista de muestra. Tres anunciantes repartidos en su interior.", progress: 0 },
  { label: "Análisis", title: "Recorremos la publicación.", note: "Identificamos las zonas publicitarias y los anunciantes que aparecen en ellas.", progress: 0.3 },
  { label: "Anunciantes", title: "Del primero al conjunto.", note: "Todos los anunciantes de esta muestra, reunidos con su página de origen.", progress: 0.52 },
  { label: "Información", title: "Cada anunciante, con su información.", note: "Sector, páginas, web y contacto cuando están disponibles. Los datos de esta muestra son ficticios.", progress: 0.8 },
  { label: "Informe", title: "Lo que estaba disperso, en un documento.", note: "Un informe reúne los anunciantes de la revista y la información disponible sobre ellos.", progress: 1 },
] as const;
