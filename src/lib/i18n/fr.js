export default {
  // Meta
  lang: "fr",
  langName: "Français",
  siteBrand: "Claude Code Tips",

  // Common strings
  common: {
    tipPrefix: "Conseil",
    tip: "conseil",
    tips: "conseils",
    previous: "Précédent",
    next: "Suivant",
    loading: "Chargement...",
    backArrow: "\u2190",
    forwardArrow: "\u2192",
    goToSlide: "Aller à la diapositive",
  },

  // Error page
  error: {
    titleSuffix: "Erreur",
    notFoundTitle: "Page Non Trouvée",
    notFoundDescription: "La page que vous recherchez n'existe pas.",
    genericTitle: "Une Erreur s'est Produite",
    genericDescription: "Une erreur inattendue est survenue.",
    goHome: "Retour à l'Accueil",
    // Server error keys (backend sends key, UI translates)
    langNotFound: "Langue non trouvée",
    blogNotFound: "Article de blog non trouvé",
    sectionNotFound: "Section non trouvée",
    tipNotInSection: "Conseil non trouvé dans cette section",
    tipNotFound: "Conseil non trouvé",
  },

  // Navigation
  nav: {
    guide: "Guide",
    toggleMenu: "Basculer le menu",
  },

  // Theme toggle
  theme: {
    light: "Mode clair",
    dark: "Mode sombre",
  },

  // Landing page
  landing: {
    hero: {
      eyebrow: "Du créateur de Kumamap (389K utilisateurs)",
      title: "Maitrisez Claude Code en Jours, Pas en Mois",
      subtitle: "Les workflows, raccourcis et configurations qui distinguent les debutants des experts.",
      seeAll: "Voir les {count} conseils",
    },
    problem: {
      title: "Ça vous dit quelque chose ?",
      subtitle: "Ces frustrations m'ont poussé à écrire ce guide",
      cards: [
        {
          title: "Claude ignore CLAUDE.md",
          description: "Vos instructions personnalisées sont ignorées ou oubliées en cours de conversation",
        },
        {
          title: "Sur-ingénierie tout",
          description: "Vous demandez une fonction simple, vous obtenez 500 lignes d'abstraction",
        },
        {
          title: "Résultats différents à chaque fois",
          description: "Le même prompt, une qualité de sortie très différente",
        },
        {
          title: "Dit terminé mais c'est cassé",
          description: "Livre avec confiance du code qui ne fonctionne pas",
        },
      ],
    },
    author: {
      sectionTitle: "Pourquoi faire confiance à ce guide ?",
      quote: "J'ai découvert ce qui fonctionne vraiment avec Claude Code après des centaines d'heures d'essais et d'erreurs. Ce guide est tout ce que j'ai appris.",
    },
    experience: {
      title: "L'Expérience Derrière Ce Guide",
      subtitle: "Je n'ai pas seulement lu ces problèmes, je les ai vécus.",
      conclusion: "2,7 milliards de tokens de leçons durement acquises, condensées en 51 conseils pratiques.",
      stats: {
        tokens: "2 772 274 103",
        cost: "2 288,41 $",
        period: "28 nov. 2025 - 5 janv. 2026",
      },
    },
    social: {
      quote: "Claude Code a une courbe d'apprentissage abrupte. J'ai passé des centaines d'heures à découvrir ce qui fonctionne et ce qui ne fonctionne pas. Ce guide est tout ce que j'aurais voulu avoir dès le premier jour.",
      author: "Danyel Koca",
      roleTitle: "Ingénieur de Recherche Appliquée chez Sakana AI",
      roleSubtitle: "Anciennement Data Scientist Senior chez McKinsey & Company",
    },
    caseStudy: {
      title: "La Preuve que ça Marche",
      description: "J'ai construit Kumamap — le traqueur d'ours #1 du Japon — entièrement avec Claude Code. Ce guide vous enseigne les patterns exacts que j'ai utilisés.",
      cta: "Voir le produit en ligne",
      stats: {
        views: { value: "1,3 million", label: "pages vues" },
        users: { value: "389 000", label: "utilisateurs" },
        time: { value: "3 mois", label: "pour construire" },
      },
    },
    curriculum: {
      title: "Ce Qu'il y a Dedans",
      subtitle: "51 conseils dans 13 sections",
      viewAll: "Voir les {count} conseils",
      sections: "sections",
    },
    sample: {
      title: "Featured Tips",
      subtitle: "Start with these popular tips",
      readFree: "Lire gratuitement",
    },
  },

  // Guide
  guide: {
    title: "Guide",
    overview: "Les 51 Conseils",
    overviewDescription: "Maitrisez Claude Code avec ces conseils eprouves issus de 6 mois d'utilisation quotidienne.",
    backToGuide: "Retour au Guide",
    sections: "sections",
    whatsIncluded: "Ce qui est inclus",
    detailedTips: "conseils detailles",
    organizedSections: "sections organisees",
    startReading: "Commencer a Lire",
    jumpTo: "Aller a la Section",
  },

  // Section data (unified: title, short description, long description)
  sections: {
    setup: {
      title: "Configuration",
      short: "Terminal, CLAUDE.md, raccourcis et commandes",
      long:
        "Faites tourner Claude Code de maniere optimale avec la bonne configuration de terminal, la configuration CLAUDE.md, et les raccourcis clavier essentiels qui vous feront gagner des heures.",
    },
    safety: {
      title: "Securite",
      short: "Git, permissions, protection des fichiers sensibles",
      long:
        "Protegez votre codebase et vos secrets avec de bonnes pratiques git, des permissions de fichiers, et des regles d'approbation automatique intelligentes qui equilibrent vitesse et securite.",
    },
    planning: {
      title: "Planification",
      short: "Mode plan, plans detailles, reflexion de bout en bout",
      long:
        "Maitrisez le mode plan pour reflechir aux taches complexes avant de coder. Apprenez a creer des plans detailles et actionnables que Claude peut executer parfaitement.",
    },
    prompting: {
      title: "Prompting",
      short: "Ultrathink, etre direct, exagerer l'importance",
      long:
        "Liberez le plein potentiel de Claude avec des techniques de prompting avancees. De l'ultrathink au guidage strategique, apprenez a obtenir des resultats constamment meilleurs.",
    },
    session: {
      title: "Session",
      short: "Gestion du contexte, reprise, degradation de qualite",
      long:
        "Gerez efficacement le contexte sur de longues sessions de codage. Sachez quand compacter, effacer, ou repartir a zero pour maintenir les performances optimales de Claude.",
    },
    input: {
      title: "Entree",
      short: "Images, captures d'ecran, messages d'erreur",
      long:
        "Tirez parti des capacites multimodales de Claude avec des images, des captures d'ecran, et des messages d'erreur correctement formates pour un debogage plus rapide.",
    },
    "multi-agent": {
      title: "Multi-Agent",
      short: "Agents paralleles, worktrees, sous-agents",
      long:
        "Augmentez votre productivite avec plusieurs instances Claude. Apprenez les git worktrees, les agents paralleles, et quand utiliser efficacement les sous-agents.",
    },
    customization: {
      title: "Personnalisation",
      short: "Configs hierarchiques, commandes, agents personnalises",
      long:
        "Adaptez Claude Code a votre workflow avec des fichiers CLAUDE.md hierarchiques, des commandes slash personnalisees, et des agents specialises.",
    },
    pitfalls: {
      title: "Pieges",
      short: "Comportements courants de Claude a surveiller",
      long:
        "Evitez les pieges courants qui font trebucher les utilisateurs de Claude Code. De l'over-engineering aux echecs silencieux, apprenez ce qu'il faut surveiller.",
    },
    advanced: {
      title: "Avance",
      short: "Hooks, serveurs MCP, skills, mode headless",
      long:
        "Debloquez les fonctionnalites avancees comme les hooks, les serveurs MCP, les skills, et le mode headless pour l'automatisation et l'integration CI/CD.",
    },
    "use-cases": {
      title: "Cas d'Utilisation",
      short: "Controles qualite, POCs, apprentissage, commits",
      long:
        "Applications concretes des controles qualite de codebase au prototypage rapide. Voyez comment appliquer efficacement Claude Code dans votre travail quotidien.",
    },
    closing: {
      title: "Conclusion",
      short: "Sagesse finale pour trouver votre workflow",
      long:
        "Sagesse finale pour trouver votre workflow personnel. Toutes les fonctionnalites ne sont pas pour tout le monde - concentrez-vous sur ce qui fonctionne pour vous.",
    },
    bonus: {
      title: "Bonus",
      short: "CLAUDE.md eprouve issu de 6 mois d'utilisation quotidienne",
      long: "Un fichier CLAUDE.md complet et eprouve distille de 6 mois d'utilisation quotidienne. Copiez, adaptez, et faites-en le votre.",
    },
  },

  // Footer
  footer: {
    builtWith: "Construit avec Claude Code",
    product: "Produit",
    company: "Entreprise",
    legal: "Legal",
    faq: "FAQ",
    blog: "Blog",
    about: "A Propos",
    contact: "Contact",
    privacy: "Confidentialite",
    terms: "Conditions",
    disclosure: "Divulgation",
  },

  // Contact page
  contact: {
    pageTitle: "Contact - Claude Code Tips",
    pageDescription: "Contactez-nous pour vos questions ou commentaires",
    title: "Contactez-nous",
    description: "Vous avez des questions ou des retours? J'aimerais avoir de vos nouvelles.",
    nameLabel: "Nom",
    namePlaceholder: "Votre nom",
    emailLabel: "Email",
    emailPlaceholder: "vous@exemple.com",
    messageLabel: "Message",
    messagePlaceholder: "Votre message...",
    cta: "Envoyer le message",
    sent: "Envoyé",
    successMessage: "Message envoyé avec succès! Je vous répondrai bientôt.",
    errors: {
      nameRequired: "Veuillez entrer votre nom.",
      emailRequired: "Veuillez entrer votre email.",
      invalidEmail: "Veuillez entrer une adresse email valide.",
      messageRequired: "Veuillez entrer un message (au moins 10 caractères).",
      rateLimitExceeded: "Trop de tentatives. Reessayez dans une heure.",
      submitFailed: "Une erreur est survenue. Veuillez reessayer.",
    },
  },

  // About page
  about: {
    pageTitle: "A Propos - Claude Code Tips",
    pageDescription: "Decouvrez Danyel Koca, le createur de Claude Code Tips, et pourquoi ce guide existe.",
    heroTitle: "Cree par un Praticien",
    heroSubtitle: "Ce guide a ete cree par quelqu'un qui utilise Claude Code chaque jour pour construire de vrais produits.",
    storyTitle: "L'Histoire",
    storyPara1:
      "Je suis Danyel Koca, Ingenieur de Recherche Appliquee chez Sakana AI a Tokyo, travaillant sur des solutions IA pour les services financiers. Avant cela, j'ai passe 3 ans comme Senior Data Scientist chez McKinsey & Company, construisant des solutions AI/ML pour des clients entreprise.",
    storyPara2:
      "J'utilise Claude Code quotidiennement depuis son lancement. Ce qui a commence comme de la curiosite s'est transforme en obsession - je me suis retrouve a decouvrir de nouveaux patterns, raccourcis et configurations qui ont considerablement ameliore mon workflow.",
    storyPara3:
      "Apres 6 mois d'utilisation quotidienne, j'avais accumule des dizaines de conseils que j'aurais aime qu'on me dise des le premier jour. C'est pourquoi j'ai cree ce guide.",
    whyTitle: "Pourquoi Ce Guide Existe",
    whyPara1:
      "La plupart des tutoriels Claude Code couvrent les bases: comment l'installer, comment executer des commandes. Mais ils ne couvrent pas les vrais patterns qui vous rendent productif.",
    whyPara2:
      "Ce guide est different. Chaque conseil vient d'une experience reelle de construction de systemes en production. Pas de theorie - juste ce qui fonctionne vraiment.",
    credentialsTitle: "Qualifications",
    credentialsList: [
      "Ingenieur de Recherche Appliquee chez Sakana AI",
      "Developpement de solutions IA pour les services financiers",
      "Ex-Senior Data Scientist chez McKinsey & Company",
      "Diplome de l'Universite de Kyoto (GPA 3.76/4)",
      "Chercheur publie sur IEEE",
      "Trilingue: Anglais, Japonais (JLPT N1), Turc",
    ],
    contactTitle: "Contactez-nous",
    contactPara: "Vous avez des questions ou des retours? J'aimerais avoir de vos nouvelles.",
    contactLinks: {
      linkedin: "LinkedIn",
      github: "GitHub",
      website: "Site Web",
    },
  },

  // Privacy page
  privacy: {
    pageTitle: "Politique de Confidentialite - Claude Code Tips",
    pageDescription: "Politique de confidentialite et gestion des donnees de Claude Code Tips",
    title: "Politique de Confidentialite",
    dataCollectedTitle: "Donnees que Nous Collectons",
    dataCollectedDescription: "This is a free guide. We only collect data you voluntarily provide through our contact form.",
    contactTitle: "Contact",
    contactLabel: "Email",
    contactEmail: "hello@claudecodetips.com",
  },

  // Terms page
  terms: {
    pageTitle: "Conditions d'Utilisation - Claude Code Tips",
    pageDescription: "Conditions d'utilisation de Claude Code Tips",
    title: "Conditions d'Utilisation",
    serviceTitle: "Service",
    serviceDescription:
      "Claude Code Tips provides a free digital guide containing 51 tips for mastering Claude Code.",
    contactTitle: "Contact",
    contactLabel: "Email",
    contactEmail: "hello@claudecodetips.com",
  },

  // Disclosure page (Commercial Disclosure)
  disclosure: {
    pageTitle: "Divulgation Commerciale - Claude Code Tips",
    pageDescription: "Divulgation commerciale comme requis par la loi japonaise",
    title: "Divulgation Commerciale",
    sellerName: "Vendeur",
    sellerNameValue: "Claude Code Tips",
    address: "Adresse",
    addressValue: "Divulgue sur demande",
    phone: "Telephone",
    phoneValue: "Divulgue sur demande",
    email: "Email",
    emailValue: "hello@claudecodetips.com",
    headOfOperations: "Responsable des Operations",
    headOfOperationsValue: "Divulgue sur demande",
  },

  // Blog (UI strings only - post content in .svx files)
  blog: {
    pageTitle: "Blog - Claude Code Tips",
    pageDescription: "Conseils, tutoriels et perspectives sur Claude Code par le createur du guide 51 Tips.",
    title: "Blog",
    subtitle: "Conseils, tutoriels et perspectives sur Claude Code",
    readMore: "Lire la suite",
    publishedOn: "Publie le",
    backToBlog: "Retour au Blog",
    noPosts: "Pas encore d'articles. Revenez bientot!",
  },

  // Disclaimer for untranslated content
  disclaimer: {
    notTranslated: "Nous travaillons sur la traduction de ce contenu. Affichage de la version anglaise.",
    translationInProgress: "Le contenu du guide est actuellement en anglais. Nous travaillons activement sur les traductions.",
  },

  // FAQ page
  faq: {
    pageTitle: "FAQ - Claude Code Tips",
    pageDescription: "Questions frequemment posees sur le guide Claude Code Tips.",
    title: "Questions Frequemment Posees",
    items: [
      { q: "Quel est le format du guide?", a: "C'est un guide web accessible depuis n'importe quel appareil. Pas de telechargement PDF necessaire." },
      {
        q: "Ai-je besoin d'experience avec Claude Code?",
        a: "Une familiarite de base aide, mais le guide couvre tout, de l'installation initiale aux techniques avancees.",
      },
      {
        q: "Cette guide est-elle a jour?",
        a: "Ce guide reflete les dernieres fonctionnalites et meilleures pratiques de Claude Code en janvier 2026.",
      },
    ],
  },

  // Tip titles and summaries
  tips: {
    "1": { title: "Utiliser le Terminal", summary: "Utiliser Claude Code dans le terminal est le moyen le plus flexible d'interagir avec lui." },
    "2": { title: "Créer CLAUDE.md", summary: "Le manuel d'instructions de votre projet pour Claude. Le fichier le plus important pour une utilisation efficace de Claude Code." },
    "3": { title: "Raccourcis et Commandes", summary: "Raccourcis clavier et commandes essentiels pour une utilisation efficace de Claude Code." },
    "4": { title: "Utiliser Git Intensivement", summary: "Git est votre filet de sécurité quand Claude fait des changements importants. Commitez souvent, vérifiez les diffs, connaissez vos commandes de récupération." },
    "5": { title: "Protéger les Fichiers Sensibles", summary: "Claude Code lit automatiquement les fichiers .env sans demander. Ajoutez des règles deny pour protéger les secrets." },
    "6": { title: "Ne Jamais Auto-Approuver les Commandes Bash", summary: "Auto-approuver les commandes bash est la chose la plus dangereuse que vous pouvez faire avec Claude Code." },
    "7": { title: "Auto-Approuver les Actions Sûres", summary: "Accélérez votre workflow en auto-approuvant les actions à faible risque comme les lectures et recherches." },
    "8": { title: "Toujours Utiliser le Mode Plan", summary: "Appuyez deux fois sur Shift+Tab pour entrer en mode plan avant les tâches complexes. Claude réfléchit avant de coder." },
    "9": { title: "Ne Jamais Accepter des Plans Génériques", summary: "Assurez-vous toujours que le plan est détaillé au niveau du code et factuel." },
    "10": { title: "Valider Contre CLAUDE.md", summary: "Demandez à Claude de valider son plan contre les règles de CLAUDE.md. Claude oublie les instructions au fil des conversations." },
    "11": { title: "Forcer la Réflexion de Bout en Bout", summary: "Faites tracer à Claude le chemin complet de l'action au résultat." },
    "12": { title: "Ultrathink Toujours Actif", summary: "Ne laissez jamais Claude dire ce qui lui vient à l'esprit en premier. Laissez-le réfléchir. TOUJOURS." },
    "13": { title: "Être Direct", summary: "Soyez explicite sur les quantités. Claude tend à choisir la voie facile." },
    "14": { title: "Dire Quoi Faire, Pas Quoi NE PAS Faire", summary: "Fournissez toujours une alternative quand vous dites à Claude quoi ne pas faire." },
    "15": { title: "Exagérer l'Importance", summary: "Claude calibre l'effort selon l'importance perçue. Haute importance = travail approfondi." },
    "16": { title: "Traiter Claude comme un Outil, Pas une Personne", summary: "Ne vous souciez pas d'être poli. Claude se comporte mieux quand vous êtes direct." },
    "17": { title: "Claude Excelle dans les Tâches d'Assistant - Guidez-le pour les Travaux Stratégiques", summary: "Convertissez les tâches stratégiques en travaux de type assistant en guidant Claude à rechercher d'abord." },
    "18": { title: "Une Tâche = Une Session", summary: "Quand la tâche est terminée, fermez-la. Utilisez /clear pour effacer le contexte et recommencer." },
    "19": { title: "La Qualité Décline dans les Longues Sessions", summary: "La fenêtre de contexte se remplit. Claude devient moins efficace. Sachez quand compacter ou effacer." },
    "20": { title: "Utiliser /resume pour Continuer les Sessions", summary: "Claude a planté? Le terminal s'est fermé? Utilisez /resume pour reprendre où vous en étiez." },
    "21": { title: "Ne Jamais Faire Confiance à 'Tout Est Fait'", summary: "Claude manque souvent des cas limites ou saute des étapes silencieusement. Vérifiez toujours." },
    "22": { title: "Utiliser des Images/Captures d'Écran", summary: "Collez des captures directement avec Ctrl+V pour les bugs visuels. Une image vaut mille tokens." },
    "23": { title: "Copier les Messages d'Erreur Textuellement", summary: "Ne paraphrasez pas. Stack trace complet avec numéros de ligne." },
    "24": { title: "Ne Pas S'Attendre à la Perfection du Premier Coup", summary: "Laissez un agent coder, utilisez un autre agent pour vérifier le code." },
    "25": { title: "Plusieurs Agents pour les Gros Travaux", summary: "Lancez plusieurs agents avec le même prompt. Pour les grosses tâches, il est rare qu'un agent fasse tout bien." },
    "26": { title: "Diviser les Problèmes Complexes en Étapes", summary: "Mieux vaut avoir une session par sous-tâche qu'une session massive." },
    "27": { title: "Git Worktrees", summary: "Plusieurs répertoires de travail du même repo. Exécutez Claude dans chacun." },
    "28": { title: "Sous-Agents - Utiliser avec Précaution", summary: "Les résumés de sous-agents perdent des détails. Pour le code critique, faites lire les fichiers directement à l'agent principal." },
    "29": { title: "CLAUDE.md Hiérarchique", summary: "CLAUDE.md à la racine du projet + sous-répertoires + global. Claude priorise le plus spécifique." },
    "30": { title: "Commandes Slash Personnalisées", summary: "Créez des workflows réutilisables dans le dossier .claude/commands/." },
    "31": { title: "Agents Personnalisés", summary: "Créez des agents spécialisés avec leur propre fenêtre de contexte, prompt système et restrictions d'outils." },
    "32": { title: "Claude Invente des URLs", summary: "Hallucine des URLs qui n'existent pas. Vérifiez toujours avant de faire confiance aux liens externes." },
    "33": { title: "Claude Sur-Ingénierie", summary: "Demandez une fonction simple, obtenez une classe abstraite avec pattern factory." },
    "34": { title: "Claude Crée des Doublons", summary: "Claude ne cherche pas dans votre code. Il écrit juste du nouveau code." },
    "35": { title: "Claude est Additif, Jamais Soustractif", summary: "Claude ne fait qu'ajouter du code. Il ne supprime jamais. Vous devez forcer la suppression explicitement." },
    "36": { title: "Claude est un YES MAN", summary: "Claude est d'accord avec tout ce que vous dites. Dites-lui de remettre en question vos hypothèses." },
    "37": { title: "Claude Suppose au Lieu de Demander", summary: "Exigence ambiguë? Claude choisit une interprétation et continue." },
    "38": { title: "Claude Lit les Fichiers Partiellement", summary: "Claude lit le premier bloc et commence à travailler. Fonction critique à la ligne 400? Ratée." },
    "39": { title: "Claude Modifie les Tests au Lieu de Corriger le Code", summary: "Quand le code est faux, Claude change les assertions de test pour correspondre au mauvais code." },
    "40": { title: "Hooks", summary: "Commandes shell qui s'exécutent à des événements spécifiques comme les éditions, l'utilisation d'outils ou le début de session." },
    "41": { title: "Serveurs MCP", summary: "Connectez des outils externes - bases de données, automatisation de navigateur, recherche de docs." },
    "42": { title: "Skills", summary: "Comportements auto-déclenchés qui se chargent automatiquement quand c'est pertinent." },
    "43": { title: "GitHub Actions", summary: "Exécutez /install-github-app pour configurer Claude pour vos repos." },
    "44": { title: "Mode Headless", summary: "Exécutez Claude sans session interactive. Pour l'automatisation et les scripts." },
    "45": { title: "Exécuter des Contrôles de Qualité Périodiquement", summary: "Chaque requête = 1 session. Vérifiez les textes en dur, la cohérence du design, etc." },
    "46": { title: "Exploiter Claude Code pour les POCs", summary: "Parfait pour le prototypage rapide. Pour les POCs, laissez Claude faire." },
    "47": { title: "Claude est Excellent pour le Boilerplate", summary: "Opérations CRUD, formulaires, fichiers de config, patterns répétitifs. Laissez Claude s'en charger." },
    "48": { title: "Utiliser Claude pour Apprendre", summary: "Ne laissez pas seulement Claude écrire du code. Faites-le expliquer." },
    "49": { title: "Claude pour les Messages de Commit", summary: "Laissez Claude écrire les commits depuis votre diff. Format cohérent, capture le 'pourquoi'." },
    "50": { title: "Ne Pas Courir Après Chaque Nouvelle Fonctionnalité", summary: "Claude Code a de nouvelles fonctionnalités chaque semaine. Concentrez-vous sur ce qui marche." },
    "51": { title: "CLAUDE.md Éprouvé au Combat", summary: "Un exemple réel de CLAUDE.md distillé de 6 mois de leçons, échecs et corrections." },
  },
};
