export const projects = [
  {
    code: " 01",
    slug: "djassabbot",
    title: "Djassabbot",
    subtitle: "Assistant conversationnel IA pour e-commerce",
    level: "ISE 2",
    context:
      "Projet de groupe (5 membres). Conception d'un assistant conversationnel destiné à un site e-commerce, avec code complet et documentation à rendre.",
    problem:
      "Concevoir une application capable de comprendre le langage naturel pour effectuer des opérations e-commerce (recherche produit, achat, suivi, annulation de commande) sans passer par une interface classique à clics.",
    data: "Base de données fictive simulée via fichiers CSV/JSON : clients, catalogue produits, commandes et détails de commandes, avec relations clé primaire / clé étrangère entre les 4 entités.",
    methodology:
      "Architecture fullstack : logique conversationnelle, interface de chat, intégration de l'API Gemini pour la compréhension du langage naturel.",
    results:
      "Assistant fonctionnel capable de traiter les principales opérations e-commerce en langage naturel, du catalogue à la commande.",
    skills: ["NLP", "Python", "Intégration API IA", "Développement fullstack"],
    role: "Développement fullstack: backend, frontend et intégration API Gemini",
    tags: ["IA conversationnelle", "E-commerce", "Python"],
  },
  {
    code: " 02",
    slug: "sante-seniors-daloa",
    title: "Santé des seniors à Daloa",
    subtitle: "Analyse de l'état de santé des personnes âgées",
    level: "ISE 1",
    context:
      "Mémoire de statistique descriptive réalisé en groupe de 3 (avec Kone Augustin et Balima Yannel).",
    problem:
      "Décrire et caractériser l'état de santé des populations seniors de la ville de Daloa à partir de données d'enquête.",
    data: "Données d'enquête sur les seniors de Daloa (variables sociodémographiques et de santé).",
    methodology:
      "Statistique descriptive univariée et bivariée : tableaux croisés, tests d'association, mesures de liaison entre variables.",
    results:
      "Mise en évidence des profils de vulnérabilité sanitaire selon les caractéristiques sociodémographiques croisées.",
    skills: ["Statistique descriptive", "Analyse bivariée", "Enquêtes"],
    role: "Croisement des variables corrélées / analyse bivariée",
    tags: ["Statistique descriptive", "Santé publique"],
  },
  {
    code: " 03",
    slug: "pauvrete-privation-ehcvm",
    title: "Pauvreté & privation matérielle",
    subtitle: "ACP / ACM / AFC sur la privation en biens et équipements",
    level: "ISE 1",
    context: "Étude de cas individuelle, cours d'Analyse des données I, ENSEA.",
    problem:
      "Comparer la privation en biens et équipements des ménages à la pauvreté monétaire classique, à partir de données d'enquête nationale.",
    data: "EHCVM 2021, Côte d'Ivoire : Enquête Harmonisée sur les Conditions de Vie des Ménages.",
    methodology:
      "Analyse en Composantes Principales (ACP), Analyse des Correspondances Multiples (ACM), Analyse Factorielle des Correspondances (AFC).",
    results:
      "Construction d'un indice de privation matérielle et mise en évidence des écarts avec les classements de pauvreté monétaire usuels.",
    skills: ["ACP", "ACM", "AFC", "Analyse factorielle", "R / Python"],
    role: "Réalisé intégralement seul",
    tags: ["Analyse factorielle", "Pauvreté", "EHCVM"],
  },
  {
    code: " 04",
    slug: "pauvrete-inegalites-afrique-sud",
    title: "Pauvreté & inégalités en Afrique du Sud",
    subtitle: "Analyse économétrique des déterminants de la pauvreté",
    level: "ISE 2",
    context:
      "Projet de groupe (3 membres : BOKA, TOTON Nicodème et lui-même), données IES 2022/23 Afrique du Sud.",
    problem:
      "Identifier les déterminants de la pauvreté et mesurer les inégalités au sein des ménages sud-africains.",
    data: "Income and Expenditure Survey (IES) 2022/23, Afrique du Sud.",
    methodology:
      "Modèle Logit et effets marginaux moyens (AME), indices FGT par milieu/province/genre/éducation, indices de Gini par province, courbes de Lorenz.",
    results:
      "Cartographie des profils de pauvreté et d'inégalité selon la province, le genre et le niveau d'éducation, avec pistes de ciblage des politiques sociales.",
    skills: ["Économétrie", "Modèle Logit", "Indices FGT", "Gini", "Stata / R"],
    role: "Contribution transversale sur l'ensemble du projet",
    tags: ["Économétrie", "Pauvreté", "Inégalités"],
  },
  {
    code: " 05",
    slug: "dise-cotisations",
    title: "DISE Cotisations",
    subtitle: "Application web de gestion des cotisations associatives",
    level: "ISE 2",
    context:
      "Projet intégré de base de données, en binôme (avec Camara Alpha Oumar), sous la supervision de M. Télesphore Kanga.",
    problem:
      "Centraliser et automatiser la gestion des cotisations, paiements et membres de l'association étudiante DISE, en réponse aux limites du suivi manuel par tableurs.",
    data: "Base relationnelle PostgreSQL (5 entités : Membres, Cotisations, Paiements, Demandes d'inscription, Demandes de paiement).",
    methodology:
      "Architecture MVC complète : Flask, psycopg2, Jinja2, Tailwind CSS / DaisyUI, Chart.js. Sécurité : hachage bcrypt, requêtes paramétrées, décorateurs d'accès par rôle.",
    results:
      "Application fonctionnelle à deux espaces (membre / trésorier), workflow de validation, tableau de bord temps réel, export Excel.",
    skills: ["PostgreSQL", "Flask", "MVC", "Sécurité applicative", "Chart.js"],
    role: "Développement fullstack: backend PostgreSQL/Flask + frontend Tailwind/Chart.js",
    tags: ["Bases de données", "Flask", "Fullstack"],
  },
  {
    code: " 06",
    slug: "scoring-credit-solaire",
    title: "Scoring de risque crédit",
    subtitle: "Offre d'énergie solaire rurale",
    level: "ISE 2",
    context:
      "Projet en binôme (avec Souleymane Arzika Mohamed), cours de Machine Learning I, sous la supervision de M. Raymond Coulibaly Moussa, pour une entreprise de télécommunications.",
    problem:
      "Construire un modèle de scoring de risque crédit pour une offre de financement d'équipements solaires en zone rurale.",
    data: "Données clients anonymisées d'une entreprise partenaire (contexte confidentiel).",
    methodology:
      "Analyse exploratoire des données (EDA), modélisation par Explainable Boosting Machine (EBM) et transformation Weight of Evidence / Information Value (WoE-IV).",
    results:
      "Modèle de scoring interprétable, exploitable pour la décision d'octroi de crédit en microfinance rurale.",
    skills: ["Machine Learning", "EBM", "WoE-IV", "Scoring crédit"],
    role: "Contribution équitable : analyse exploratoire (EDA) et modélisation",
    tags: ["Machine Learning", "Finance", "Scoring"],
  },
  {
    code: " 07",
    slug: "enquete-sante-scolaire",
    title: "Enquête santé scolaire",
    subtitle: "Application de saisie de données terrain",
    level: "ISE 2",
    context: "Projet en binôme (avec Tchuidjang Kwoimoi Jorexe Ivan).",
    problem:
      "Concevoir un outil de collecte de données fiable pour une enquête de santé en milieu scolaire.",
    data: "Données collectées sur le terrain auprès d'établissements scolaires.",
    methodology:
      "Conception du questionnaire et collecte via KoboToolbox, structuration et contrôle de saisie via CSPro.",
    results:
      "Chaîne de collecte opérationnelle, de la conception du formulaire à la base de données structurée exploitable pour analyse.",
    skills: ["KoboToolbox", "CSPro", "Collecte de données", "Contrôle qualité"],
    role: "KoboToolbox + CSPro",
    tags: ["Collecte de données", "Santé scolaire"],
  },
  {
    code: " 08",
    slug: "bceao-politique-monetaire-uemoa",
    title: "Politique monétaire de la BCEAO",
    subtitle: "Efficacité sur l'inflation dans l'UEMOA (2010–2024)",
    level: "ISE 2",
    context:
      "Mini-mémoire d'économie monétaire, groupe de 3 (avec Bouiti Banza Marc Olivier et Zoh Zrampieu Arthur Dieudonné), sous la supervision du Pr Bello.",
    problem:
      "Évaluer l’éfficacité de la politique monétaire de la BCEAO sur l’inflation dans l’UEMOA sur la période 2010–2024.",
    data: "Données mensuelles janvier 2010 – décembre 2024 : taux directeur, crédit à l'économie, taux EUR/USD, IHPC, indice FAO des prix alimentaires.",
    methodology:
      "Tests de stationnarité (ADF, Phillips-Perron), cointégration de Johansen, modèle VECM, identification structurelle par décomposition de Cholesky, IRF et FEVD, sous Stata.",
    results:
      "Relation de cointégration confirmée mais canal du taux directeur statistiquement inefficace : le taux directeur n'explique que 0,8 % de la variance de l'inflation à 24 mois.",
    skills: ["VAR / VECM", "Cointégration", "Économétrie des séries temporelles", "Stata"],
    role: "Cadre théorique et revue de littérature, appui aux analyses économétriques",
    tags: ["Économétrie", "Politique monétaire", "Séries temporelles"],
  },
  {
    code: " 09",
    slug: "cadrage-budgetaire-ia",
    title: "Cadrage Budgétaire IA",
    subtitle: "Application de bureau assistée par IA,Stage DGPE",
    level: "ISE 2 Stage",
    context:
      "Stage à la DGPE, Direction du Portefeuille du Secteur Primaire et Secondaire (DPSPS), sous-direction Électricité, Hydrocarbures, Eau et Assainissement. En binôme avec Balima Wendlassida Franck Aimerick Yannel, sous la supervision de M. Yeo Kibouni, chef du service Énergie.",
    problem:
      "Automatiser les tâches répétitives d'extraction et de mise en forme des données budgétaires des sociétés d'État, pour libérer du temps d'analyse aux agents.",
    data: "Documents budgétaires réels de sociétés d'État (liasses fiscales OHADA/SYSCOHADA, budgets annuels, rapports de gestion).",
    methodology:
      "Application desktop : React + Tailwind (frontend), Flask + SQLAlchemy + SQLite (backend), Electron (packaging Windows), API Claude (Anthropic) en appels séquentiels avec mise en cache.",
    results:
      "Application produisant en un clic un classeur Excel d'analyse budgétaire et une note de cadrage Word, avec historique complet des générations et mode hors ligne.",
    skills: ["React", "Flask", "Electron", "API Claude", "SQLite"],
    role: "Développement fullstack",
    tags: ["IA appliquée", "Fullstack", "Secteur public"],
  },
];

export const getProjectBySlug = (slug) => projects.find((p) => p.slug === slug);
