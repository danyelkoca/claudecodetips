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

  // Checkout
  checkout: {
    productName: "51 Conseils pour Maîtriser Claude Code",
    productDescription: "Guide complet avec les 51 conseils - accès à vie",
  },

  // Navigation
  nav: {
    guide: "Guide",
    toggleMenu: "Basculer le menu",
  },

  // Landing page
  landing: {
    hero: {
      eyebrow: "Du créateur de Kumamap (389K utilisateurs)",
      title: "Maitrisez Claude Code en Jours, Pas en Mois",
      subtitle: "Les workflows, raccourcis et configurations qui distinguent les debutants des experts.",
      cta: "Obtenir le Guide - 29$",
      guarantee: "Garantie satisfait ou rembourse 7 jours",
    },
    social: {
      quote: "Claude Code a une courbe d'apprentissage abrupte. J'ai passé des centaines d'heures à découvrir ce qui fonctionne et ce qui ne fonctionne pas. Ce guide est tout ce que j'aurais voulu avoir dès le premier jour.",
      author: "Danyel Koca",
      role: "Ingénieur IA chez Sakana AI | Anciennement Data Scientist Senior chez McKinsey & Company",
    },
    caseStudy: {
      title: "Construit avec Claude Code",
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
    },
    sample: {
      title: "Essayez Avant d'Acheter",
      subtitle: "Lisez ces 4 conseils gratuitement. S'ils vous aident, imaginez 47 de plus.",
    },
    pricing: {
      title: "Achat Unique",
      price: "29$",
      subtitle: "Acces a vie aux 51 conseils",
      features: [
        "51 conseils detailles avec exemples de code",
        "Configs CLAUDE.md pret-a-copier",
        "13 sections organisees",
        "Mises a jour futures incluses",
      ],
      cta: "Obtenir un Acces Immediat",
      guarantee: "Garantie satisfait ou rembourse 7 jours. Sans questions.",
    },
    checkoutCanceled: "Paiement annule. Pret quand vous le serez.",
  },

  // Pricing page
  pricingPage: {
    pageTitle: "Paiement - Claude Code Tips",
    pageDescription: "Acces instantane aux 51 conseils pour 29$",
    emailLabel: "Adresse email",
    emailPlaceholder: "vous@exemple.com",
    cta: "Continuer vers le paiement",
    processing: "Traitement...",
    errors: {
      emailRequired: "Veuillez entrer votre email.",
      invalidEmail: "Veuillez entrer une adresse email valide.",
      checkoutFailed: "Une erreur est survenue. Veuillez reessayer.",
      rateLimitExceeded: "Trop de tentatives. Reessayez dans une heure.",
    },
  },

  // Guide
  guide: {
    title: "Guide",
    overview: "Les 51 Conseils",
    overviewDescription: "Maitrisez Claude Code avec ces conseils eprouves issus de 6 mois d'utilisation quotidienne.",
    backToGuide: "Retour au Guide",
    free: "Gratuit",
    freePreview: "Apercu Gratuit",
    locked: "Debloquer pour lire",
    lockedTitle: "Ce conseil est verrouille",
    lockedDescription: "Obtenez un acces complet aux 51 conseils avec un achat unique.",
    unlockCta: "Debloquer le Guide Complet - 29$",
    unlockAll: "Debloquer les 51 Conseils",
    sections: "sections",
    freeLabel: "apercus gratuits",
    whatsIncluded: "Ce qui est inclus",
    detailedTips: "conseils detailles",
    organizedSections: "sections organisees",
    freePreviews: "apercus gratuits",
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

  // Paywall
  paywall: {
    title: "Debloquez le Guide Complet",
    description: "Acces aux 51 conseils pour seulement 29$",
    cta: "Obtenir un Acces Complet",
    alreadyPurchased: "Déjà acheté ?",
    restoreAccess: "Restaurer l'accès",
  },

  // Success page
  success: {
    title: "Merci!",
    description: "Votre achat a reussi. Vous avez maintenant un acces complet aux 51 conseils.",
    cta: "Commencer la Lecture",
  },

  // Restore page
  restore: {
    pageTitle: "Restaurer l'accès - Claude Code Tips",
    title: "Restaurez votre accès",
    description: "Entrez l'email utilisé lors de l'achat pour restaurer l'accès sur cet appareil.",
    emailLabel: "Email d'achat",
    emailPlaceholder: "vous@exemple.com",
    cta: "Restaurer l'accès",
    successMessage: "Accès restauré avec succès !",
    redirecting: "Redirection vers le guide...",
    noAccount: "Pas encore acheté ?",
    buyNow: "Acheter maintenant",
    errors: {
      restoreFailed: "Échec de la restauration. Réessayez.",
      emailRequired: "L'email est requis.",
      invalidEmail: "Veuillez entrer une adresse email valide.",
      rateLimitExceeded: "Trop de tentatives. Reessayez dans une heure.",
    },
  },

  // Footer
  footer: {
    builtWith: "Construit avec Claude Code",
    guide: "Guide",
    company: "Entreprise",
    legal: "Legal",
    allTips: "Les 51 Conseils",
    faq: "FAQ",
    restoreAccess: "Restaurer l'accès",
    pricing: "Tarifs",
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
      "Je suis Danyel Koca, Ingenieur de Recherche Appliquee chez Sakana AI a Tokyo. Avant cela, j'ai passe 3 ans comme Senior Data Scientist chez McKinsey & Company, construisant des solutions AI/ML pour des clients entreprise.",
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
    dataCollectedDescription: "Lorsque vous achetez le guide:",
    dataEmail: "Email (pour la livraison et l'acces)",
    paymentTitle: "Traitement des Paiements",
    paymentDescription: "Tous les paiements sont traites de maniere securisee par Stripe. Nous ne stockons pas vos informations de paiement.",
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
      "Claude Code Tips fournit un guide numerique contenant 51 conseils pour maitriser Claude Code. A l'achat, vous recevez un acces a vie.",
    paymentTitle: "Paiement",
    paymentDescription: "Vous pouvez acheter l'acces au guide:",
    paymentOneTime: "Paiement unique de 29$ USD",
    paymentStripe: "Tous les paiements traites de maniere securisee via Stripe",
    refundTitle: "Remboursements",
    refundDescription:
      "Garantie de remboursement de 7 jours. Si vous n'etes pas satisfait, contactez-nous dans les 7 jours pour un remboursement complet.",
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
    additionalFees: "Frais Supplementaires",
    additionalFeesValue: "Aucun",
    refundPolicy: "Politique de Remboursement",
    refundServiceIssues: "Problemes de Service",
    refundServiceIssuesValue:
      "Si le service n'est pas fourni en raison de problemes systeme, contactez hello@claudecodetips.com. Nous examinerons et fournirons un remboursement complet.",
    refundCustomer: "Initie par le Client",
    refundCustomerValue:
      "Garantie de remboursement de 7 jours. Si vous n'etes pas satisfait de votre achat, contactez-nous dans les 7 jours pour un remboursement complet, sans questions.",
    deliveryTime: "Delai de Livraison",
    deliveryTimeValue: "Acces instantane apres paiement",
    paymentMethods: "Methodes de Paiement",
    paymentMethodsValue: "Cartes de credit (Visa, Mastercard, American Express, JCB)",
    paymentPeriod: "Periode de Paiement",
    paymentPeriodValue: "Traite immediatement lors du paiement par carte de credit",
    price: "Prix",
    priceValue: "29$ USD",
    priceTaxNote: "*Le prix inclut toutes les taxes applicables",
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
    notTranslated: "Ce contenu n'est pas encore disponible dans votre langue. Affichage de la version anglaise.",
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
        q: "Et si Claude Code est mis a jour?",
        a:
          "Le guide se concentre sur les workflows et patterns qui restent stables. Quand des fonctionnalites majeures changent, le guide est mis a jour aussi.",
      },
    ],
  },
};
