export const repeatedWork = {
  title: "Cambia el número.\nEl trabajo se repite.",
  introduction: "Nuevos artículos, nuevas publicaciones. Las mismas idas y vueltas entre documentos, hojas de cálculo y correos.",
  tasks: [
    { task: "Revisar publicaciones", transfer: "De una revista a otra", selected: true },
    { task: "Cruzar información", transfer: "De la publicación a la hoja de cálculo", selected: true },
    { task: "Organizar los datos", transfer: "De una hoja a otra", selected: true },
    { task: "Retomar un contacto", transfer: "De las notas al correo", selected: false },
    { task: "Preparar la newsletter", transfer: "De los artículos al envío", selected: false },
    { task: "Reutilizar un contenido", transfer: "De la revista a otro canal", selected: false },
  ],
  steps: [
    { label: "Un número", title: "El trabajo de cada edición.", note: "Revisar, copiar, cruzar. La información va pasando de un sitio a otro.", progress: 0 },
    { label: "Otro número", title: "Y vuelta a empezar.", note: "Llega el siguiente cierre. Se acumula información y se repiten los pasos.", progress: 0.68 },
    { label: "Poner orden", title: "Un punto de partida común.", note: "Identificar lo que se repite. Reunir la información antes de volver a trabajar sobre ella.", progress: 1 },
  ],
} as const;
