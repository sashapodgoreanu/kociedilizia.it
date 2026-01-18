export const projects = [
  {
    slug: "rifacimento-tetto-magliano-in-toscana",
    title: "Rifacimento tetto a Magliano in Toscana",
    year: "2025",
    location: "Magliano in Toscana",
    summary:
      "Ripristino del manto in coppi con sistemazione dei colmi e dei punti di raccordo, per una copertura uniforme e resistente nel tempo.",
    lead:
      "Rifacimento del manto in coppi con ripristino delle falde e dei colmi, sistemazione dei punti di raccordo e cura dei dettagli perimetrali per garantire una copertura uniforme e resistente.",
    metrics: [
      { label: "Localita'", value: "Magliano in Toscana" },
      { label: "Intervento", value: "Manto in coppi, colmi, raccordi" },
      { label: "Anno", value: "2025" },
    ],
    scope: [
      "Ripristino del manto in coppi e dei colmi",
      "Sistemazione dei raccordi e delle linee di gronda",
      "Lavorazioni in quota con protezioni perimetrali",
    ],
    galleryFolder: "rifacimento-tetto-magliano-in-toscana",
    galleryAltBase: "Cantiere rifacimento tetto a Magliano in Toscana",
    gallerySort: "desc",
    featured: true,
    archived: false,
  },
  {
    slug: "ristrutturazione-viletta-magliano-in-toscana",
    title: "Ristrutturazione viletta a Magliano in Toscana",
    year: "2025",
    location: "Magliano in Toscana",
    summary:
      "Rinnovo facciate e spazi esterni con nuove pavimentazioni in cotto, sistemazione delle fioriere e finiture interne del bagno.",
    lead:
      "Intervento completo sulla viletta con ripristino e tinteggiatura delle facciate, posa di pavimentazioni esterne in cotto per portico e camminamenti, sistemazione delle fioriere e finiture interne del bagno con grandi formati effetto marmo e legno.",
    metrics: [
      { label: "Localita'", value: "Magliano in Toscana" },
      { label: "Intervento", value: "Facciate, esterni, finiture bagno" },
      { label: "Anno", value: "2025" },
    ],
    scope: [
      "Ripristino e tinteggiatura delle facciate con lavorazioni in quota",
      "Posa di pavimentazioni esterne in cotto per portico e camminamenti",
      "Sistemazione fioriere e rivestimenti bagno in grandi formati",
    ],
    galleryFolder: "ristrutturazione-viletta-magliano-in-toscana",
    galleryAltBase: "Cantiere ristrutturazione viletta a Magliano in Toscana",
    gallerySort: "asc",
    featured: false,
    archived: false,
  },
];

export const activeProjects = projects.filter((project) => !project.archived);

export const getProjectBySlug = (slug) =>
  projects.find((project) => project.slug === slug);
