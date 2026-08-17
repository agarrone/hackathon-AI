export type Challenge = {
  slug: string;
  number: string;
  category: string;
  title: string;
  shortTitle: string;
  summary: string;
  problem: string[];
  objective: string;
  tracks: string[];
  start: string[];
};

export const challenges: Challenge[] = [
  {
    slug: "decouvrabilite",
    number: "01",
    category: "Découvrabilité",
    title: "Assistant à la recherche",
    shortTitle: "Assistant à la recherche",
    summary: "Aider chacun à trouver les bonnes données à partir d’un besoin exprimé en langage naturel.",
    problem: [
      "Trouver les bonnes données reste difficile lorsque l’utilisateur ne connaît ni le vocabulaire du producteur, ni les bons filtres, ni l’organisation qui publie la donnée.",
      "L’enjeu concerne aussi de plus en plus la découvrabilité des données par les assistants et les agents.",
    ],
    objective: "Permettre à une personne d’exprimer son besoin en langage naturel, puis l’aider à identifier et préciser progressivement les données pertinentes sur data.gouv.fr.",
    tracks: ["Recherche conversationnelle ou sémantique", "Transformation d’une question en filtres data.gouv.fr", "Détection de lieux, périodes, organisations ou thèmes", "Recherche dans les métadonnées, le contenu et les colonnes", "Suggestions de reformulation ou de jeux complémentaires", "Intégration des sources data.gouv.fr dans les LLM du marché", "Exploitation du MCP ou de skills pour la recherche par des agents"],
    start: ["Choisir trois questions réelles auxquelles la recherche actuelle répond difficilement", "Explorer les métadonnées et filtres disponibles sur data.gouv.fr", "Prototyper un premier parcours de clarification en langage naturel"],
  },
  {
    slug: "qualite",
    number: "02",
    category: "Qualité",
    title: "Améliorer la qualité des données et des métadonnées avec l’IA",
    shortTitle: "Améliorer les données avec l’IA",
    summary: "Identifier les problèmes de qualité et accompagner les producteurs dans leur résolution.",
    problem: ["Les mêmes problèmes de qualité peuvent être rencontrés au moment de publier un jeu de données ou plusieurs mois après sa publication : métadonnées insuffisantes, ressources cassées, documentation incomplète, schéma non respecté ou données qui ne sont plus mises à jour.", "Comment construire des outils capables d’identifier ces problèmes et d’aider les producteurs à les résoudre ?"],
    objective: "Construire un ou plusieurs outils d’analyse capables de diagnostiquer un jeu de données et de proposer au producteur des améliorations concrètes, explicables et actionnables.",
    tracks: ["Générer ou améliorer les métadonnées", "Analyser un fichier et documenter ses colonnes", "Recommander ou contrôler un schéma", "Expliquer le score de qualité et proposer des améliorations", "Détecter les ressources cassées, les données obsolètes ou les incohérences", "Préparer un commentaire à destination du producteur", "Tester différents niveaux d’autonomie", "Rendre les ressources compréhensibles par des agents"],
    start: ["Sélectionner quelques jeux présentant des problèmes de qualité différents", "Définir les signaux que le prototype devra analyser", "Choisir le bon niveau d’autonomie : diagnostic, suggestion ou action"],
  },
  {
    slug: "reutilisation",
    number: "03",
    category: "Réutilisation",
    title: "Assistant d’exploration et de réutilisation des données",
    shortTitle: "Assistant d’exploration",
    summary: "Passer d’une question à une exploration, une analyse ou une visualisation des données.",
    problem: ["Une fois un jeu de données trouvé, il reste souvent difficile de comprendre sa structure, de l’interroger et d’en tirer rapidement une analyse."],
    objective: "Permettre de partir d’une question en langage naturel pour explorer réellement une ressource, produire une analyse vérifiable et la restituer sous une forme adaptée.",
    tracks: ["Comprendre automatiquement le schéma d’une ressource", "Générer et exécuter des requêtes SQL", "Utiliser DuckDB et Parquet pour explorer directement les données", "Proposer des analyses ou questions pertinentes", "Générer des graphiques adaptés aux données", "Détecter les dimensions géographiques et produire des cartes", "Trouver des jeux complémentaires et proposer des croisements", "Partager une analyse avec ses requêtes, graphiques et sources"],
    start: ["Choisir une ressource assez riche pour produire plusieurs analyses", "Formuler les questions qu’un utilisateur non expert poserait", "Prototyper la chaîne question, requête, résultat et restitution"],
  },
  {
    slug: "portails-thematiques",
    number: "04",
    category: "Portails thématiques",
    title: "Créer un portail thématique avec l’aide de l’IA",
    shortTitle: "Créer un portail avec l’IA",
    summary: "Transformer une intention simple en une première expérience éditoriale thématique.",
    problem: ["Créer un portail open data thématique demande aujourd’hui de sélectionner les bonnes données, configurer une recherche, construire une navigation et produire des contenus adaptés.", "Comment permettre à un acteur de partir d’une intention simple et de créer beaucoup plus facilement son propre portail à partir de data.gouv.fr ?"],
    objective: "Permettre à un acteur de décrire un besoin thématique, puis générer une première configuration de portail pertinente et personnalisable à partir de data.gouv.fr.",
    tracks: ["Identifier automatiquement les jeux et producteurs pertinents", "Proposer les thèmes, filtres et catégories du portail", "Générer une première arborescence", "Proposer des pages ou sélections éditoriales", "Générer des textes introductifs à partir des données sélectionnées", "Modifier la configuration en langage naturel", "Générer une interface personnalisable avec les composants data.gouv.fr"],
    start: ["Choisir un thème et décrire le public visé", "Définir les critères de sélection des données pertinentes", "Prototyper la configuration minimale générée par l’assistant"],
  },
];

export function getChallenge(slug: string) {
  return challenges.find((challenge) => challenge.slug === slug);
}
