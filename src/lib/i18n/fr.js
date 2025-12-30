export default {
	// Meta
	lang: 'fr',
	langName: 'Francais',
	siteBrand: 'Claude Code Tips',

	// Common strings
	common: {
		tipPrefix: 'Conseil',
		tip: 'conseil',
		tips: 'conseils',
		previous: 'Precedent',
		next: 'Suivant',
		loading: 'Chargement...',
		backArrow: '\u2190',
		forwardArrow: '\u2192'
	},

	// Error page
	error: {
		titleSuffix: 'Erreur',
		notFoundTitle: 'Page Non Trouvee',
		notFoundDescription: "La page que vous recherchez n'existe pas.",
		genericTitle: "Une Erreur s'est Produite",
		genericDescription: 'Une erreur inattendue est survenue.',
		goHome: "Retour a l'Accueil",
		// Server error keys (backend sends key, UI translates)
		langNotFound: 'Langue non trouvee',
		blogNotFound: 'Article de blog non trouve',
		sectionNotFound: 'Section non trouvee',
		tipNotInSection: 'Conseil non trouve dans cette section',
		tipNotFound: 'Conseil non trouve',
		emailRequired: "L'email est requis",
		checkoutFailed: 'Echec de la creation de la session de paiement'
	},

	// Checkout
	checkout: {
		productName: '50 Conseils pour Maitriser Claude Code',
		productDescription: 'Guide complet avec les 50 conseils - acces a vie'
	},

	// Navigation
	nav: {
		home: 'Accueil',
		guide: 'Guide',
		pricing: 'Tarifs',
		toggleMenu: 'Basculer le menu'
	},

	// Landing page
	landing: {
		hero: {
			eyebrow: 'De 6 mois d\'utilisation quotidienne',
			title: 'Maitrisez Claude Code en Jours, Pas en Mois',
			subtitle: 'Les workflows, raccourcis et configurations qui distinguent les debutants des experts.',
			cta: 'Obtenir le Guide - 29$',
			guarantee: 'Garantie satisfait ou rembourse 14 jours'
		},
		social: {
			quote: 'Apres plus de 500 heures a construire de vrais produits avec Claude Code, j\'ai documente tous les patterns qui fonctionnent vraiment.',
			author: 'Danyel Koca',
			role: 'Ingenieur de Recherche Appliquee chez Sakana AI | Ex-Senior Data Scientist chez McKinsey',
			benefits: ['Sautez des mois d\'essais et d\'erreurs', 'Configs CLAUDE.md pret-a-copier', 'Patterns qui fonctionnent avec tout projet']
		},
		curriculum: {
			title: 'Ce Qu\'il y a Dedans',
			subtitle: '50 conseils dans 12 sections + contenu bonus'
		},
		sample: {
			title: 'Voyez la Qualite',
			subtitle: 'Lisez ce conseil gratuitement. S\'il vous aide, imaginez 49 de plus.',
			readFull: 'Lire le conseil complet gratuitement'
		},
		pricing: {
			title: 'Achat Unique',
			price: '29$',
			subtitle: 'Acces a vie aux 50 conseils',
			features: [
				'50 conseils detailles avec exemples de code',
				'Configs CLAUDE.md pret-a-copier',
				'12 sections + contenu bonus',
				'Mises a jour futures incluses'
			],
			cta: 'Obtenir un Acces Immediat',
			anchor: "Sautez des mois d'essais et d'erreurs.",
			guarantee: 'Garantie satisfait ou rembourse 14 jours. Sans questions.'
		},
		faq: {
			title: 'Questions',
			items: [
				{
					q: 'Quel est le format du guide?',
					a: "C'est un guide web accessible depuis n'importe quel appareil. Pas de telechargement PDF necessaire."
				},
				{
					q: "Ai-je besoin d'experience avec Claude Code?",
					a: "Une familiarite de base aide, mais le guide couvre tout, de l'installation initiale aux techniques avancees."
				},
				{
					q: 'Et si Claude Code est mis a jour?',
					a: 'Le guide se concentre sur les workflows et patterns qui restent stables. Quand des fonctionnalites majeures changent, le guide est mis a jour aussi.'
				}
			]
		}
	},

	// Guide
	guide: {
		title: 'Guide',
		overview: 'Les 50 Conseils',
		overviewDescription:
			"Maitrisez Claude Code avec ces conseils eprouves issus de 6 mois d'utilisation quotidienne.",
		backToGuide: 'Retour au Guide',
		free: 'Gratuit',
		freePreview: 'Apercu Gratuit',
		locked: 'Debloquer pour lire',
		lockedTitle: 'Ce conseil est verrouille',
		lockedDescription: 'Obtenez un acces complet aux 50 conseils avec un achat unique.',
		unlockCta: 'Debloquer le Guide Complet - 29$',
		unlockAll: 'Debloquer les 50 Conseils'
	},

	// Section data (unified: title, short description, long description)
	sections: {
		title: 'Toutes les Sections',
		description:
			'Explorez 51 conseils organises en 13 sections. Chaque section se concentre sur un aspect specifique de la maitrise de Claude Code.',
		tipsInSection: 'dans cette section',
		setup: {
			title: 'Configuration',
			short: 'Terminal, CLAUDE.md, raccourcis et commandes',
			long: 'Faites tourner Claude Code de maniere optimale avec la bonne configuration de terminal, la configuration CLAUDE.md, et les raccourcis clavier essentiels qui vous feront gagner des heures.'
		},
		safety: {
			title: 'Securite',
			short: 'Git, permissions, protection des fichiers sensibles',
			long: "Protegez votre codebase et vos secrets avec de bonnes pratiques git, des permissions de fichiers, et des regles d'approbation automatique intelligentes qui equilibrent vitesse et securite."
		},
		planning: {
			title: 'Planification',
			short: 'Mode plan, plans detailles, reflexion de bout en bout',
			long: 'Maitrisez le mode plan pour reflechir aux taches complexes avant de coder. Apprenez a creer des plans detailles et actionnables que Claude peut executer parfaitement.'
		},
		prompting: {
			title: 'Prompting',
			short: "Ultrathink, etre direct, exagerer l'importance",
			long: "Liberez le plein potentiel de Claude avec des techniques de prompting avancees. De l'ultrathink au guidage strategique, apprenez a obtenir des resultats constamment meilleurs."
		},
		session: {
			title: 'Session',
			short: 'Gestion du contexte, reprise, degradation de qualite',
			long: 'Gerez efficacement le contexte sur de longues sessions de codage. Sachez quand compacter, effacer, ou repartir a zero pour maintenir les performances optimales de Claude.'
		},
		input: {
			title: 'Entree',
			short: "Images, captures d'ecran, messages d'erreur",
			long: "Tirez parti des capacites multimodales de Claude avec des images, des captures d'ecran, et des messages d'erreur correctement formates pour un debogage plus rapide."
		},
		'multi-agent': {
			title: 'Multi-Agent',
			short: 'Agents paralleles, worktrees, sous-agents',
			long: 'Augmentez votre productivite avec plusieurs instances Claude. Apprenez les git worktrees, les agents paralleles, et quand utiliser efficacement les sous-agents.'
		},
		customization: {
			title: 'Personnalisation',
			short: 'Configs hierarchiques, commandes, agents personnalises',
			long: 'Adaptez Claude Code a votre workflow avec des fichiers CLAUDE.md hierarchiques, des commandes slash personnalisees, et des agents specialises.'
		},
		pitfalls: {
			title: 'Pieges',
			short: 'Comportements courants de Claude a surveiller',
			long: "Evitez les pieges courants qui font trebucher les utilisateurs de Claude Code. De l'over-engineering aux echecs silencieux, apprenez ce qu'il faut surveiller."
		},
		advanced: {
			title: 'Avance',
			short: 'Hooks, serveurs MCP, skills, mode headless',
			long: "Debloquez les fonctionnalites avancees comme les hooks, les serveurs MCP, les skills, et le mode headless pour l'automatisation et l'integration CI/CD."
		},
		'use-cases': {
			title: "Cas d'Utilisation",
			short: 'Controles qualite, POCs, apprentissage, commits',
			long: 'Applications concretes des controles qualite de codebase au prototypage rapide. Voyez comment appliquer efficacement Claude Code dans votre travail quotidien.'
		},
		closing: {
			title: 'Conclusion',
			short: 'Sagesse finale pour trouver votre workflow',
			long: "Sagesse finale pour trouver votre workflow personnel. Toutes les fonctionnalites ne sont pas pour tout le monde - concentrez-vous sur ce qui fonctionne pour vous."
		},
		bonus: {
			title: 'Bonus',
			short: "CLAUDE.md eprouve issu de 6 mois d'utilisation quotidienne",
			long: "Un fichier CLAUDE.md complet et eprouve distille de 6 mois d'utilisation quotidienne. Copiez, adaptez, et faites-en le votre."
		}
	},

	// Paywall
	paywall: {
		title: 'Debloquez le Guide Complet',
		description: 'Acces aux 50 conseils pour seulement 29$',
		cta: 'Obtenir un Acces Complet'
	},

	// Success page
	success: {
		title: 'Merci!',
		description: 'Votre achat a reussi. Vous avez maintenant un acces complet aux 50 conseils.',
		cta: 'Commencer la Lecture'
	},

	// Footer
	footer: {
		builtWith: 'Construit avec Claude Code',
		guide: 'Guide',
		company: 'Entreprise',
		legal: 'Legal',
		allTips: 'Les 50 Conseils',
		faq: 'FAQ',
		blog: 'Blog',
		about: 'A Propos',
		privacy: 'Confidentialite',
		terms: 'Conditions',
		disclosure: 'Divulgation'
	},

	// About page
	about: {
		pageTitle: 'A Propos - Claude Code Tips',
		pageDescription:
			'Decouvrez Danyel Koca, le createur de Claude Code Tips, et pourquoi ce guide existe.',
		heroTitle: 'Cree par un Praticien',
		heroSubtitle:
			'Ce guide a ete cree par quelqu\'un qui utilise Claude Code chaque jour pour construire de vrais produits.',
		storyTitle: "L'Histoire",
		storyPara1:
			"Je suis Danyel Koca, Ingenieur de Recherche Appliquee chez Sakana AI a Tokyo. Avant cela, j'ai passe 3 ans comme Senior Data Scientist chez McKinsey & Company, construisant des solutions AI/ML pour des clients entreprise.",
		storyPara2:
			"J'utilise Claude Code quotidiennement depuis son lancement. Ce qui a commence comme de la curiosite s'est transforme en obsession - je me suis retrouve a decouvrir de nouveaux patterns, raccourcis et configurations qui ont considerablement ameliore mon workflow.",
		storyPara3:
			"Apres 6 mois d'utilisation quotidienne, j'avais accumule des dizaines de conseils que j'aurais aime qu'on me dise des le premier jour. C'est pourquoi j'ai cree ce guide.",
		whyTitle: 'Pourquoi Ce Guide Existe',
		whyPara1:
			"La plupart des tutoriels Claude Code couvrent les bases: comment l'installer, comment executer des commandes. Mais ils ne couvrent pas les vrais patterns qui vous rendent productif.",
		whyPara2:
			'Ce guide est different. Chaque conseil vient d\'une experience reelle de construction de systemes en production. Pas de theorie - juste ce qui fonctionne vraiment.',
		credentialsTitle: 'Qualifications',
		credentialsList: [
			'Ingenieur de Recherche Appliquee chez Sakana AI',
			'Ex-Senior Data Scientist chez McKinsey & Company',
			'Diplome de l\'Universite de Kyoto (GPA 3.76/4)',
			'Chercheur publie sur IEEE',
			'Trilingue: Anglais, Japonais (JLPT N1), Turc'
		],
		contactTitle: 'Contactez-nous',
		contactPara: 'Vous avez des questions ou des retours? J\'aimerais avoir de vos nouvelles.',
		contactLinks: {
			linkedin: 'LinkedIn',
			github: 'GitHub',
			website: 'Site Web'
		}
	},

	// Privacy page
	privacy: {
		pageTitle: 'Politique de Confidentialite - Claude Code Tips',
		pageDescription:
			'Decouvrez comment Claude Code Tips gere vos donnees et protege votre vie privee.',
		title: 'Politique de Confidentialite',
		lastUpdated: 'Derniere mise a jour: Decembre 2024',
		introTitle: 'Notre Engagement',
		introPara:
			'Nous croyons en la collecte minimale de donnees. Nous ne collectons que ce qui est absolument necessaire pour traiter votre achat et livrer le guide.',
		dataCollectedTitle: 'Donnees que Nous Collectons',
		dataCollectedPara: "Lorsque vous achetez le guide, nous collectons:",
		dataCollectedList: [
			"Adresse email (pour livrer l'acces)",
			'Informations de paiement (traitees de maniere securisee par Stripe)'
		],
		noTrackingTitle: 'Ce que Nous ne Faisons Pas',
		noTrackingList: [
			'Pas de scripts d\'analytique ou de suivi',
			'Pas de cookies publicitaires',
			'Pas de vente ou partage de vos donnees avec des tiers',
			'Pas de suivi comportemental'
		],
		stripeTitle: 'Traitement des Paiements',
		stripePara:
			'Tous les paiements sont traites de maniere securisee par Stripe. Nous ne voyons ni ne stockons jamais les details complets de votre carte de credit. La politique de confidentialite de Stripe s\'applique au traitement des paiements.',
		retentionTitle: 'Conservation des Donnees',
		retentionPara:
			'Nous conservons les enregistrements d\'achat pour vous fournir un acces continu au guide et gerer toute demande de support.',
		contactTitle: 'Questions?',
		contactPara: 'Pour toute question relative a la confidentialite, contactez-nous a:',
		contactEmail: 'privacy@claudecodeguide.com'
	},

	// Terms page
	terms: {
		pageTitle: 'Conditions d\'Utilisation - Claude Code Tips',
		pageDescription: 'Termes et conditions d\'utilisation de Claude Code Tips.',
		title: 'Conditions d\'Utilisation',
		lastUpdated: 'Derniere mise a jour: Decembre 2024',
		serviceTitle: 'Le Service',
		servicePara:
			'Claude Code Tips fournit un guide numerique contenant 50 conseils pour maitriser Claude Code. A l\'achat, vous recevez un acces a vie au guide web.',
		paymentTitle: 'Paiement',
		paymentList: [
			'Paiement unique de 29$ USD',
			'Acces a vie a tous les conseils actuels et futurs',
			'Pas de frais recurrents ni d\'abonnements'
		],
		refundTitle: 'Politique de Remboursement',
		refundPara:
			'Nous offrons une garantie satisfait ou rembourse de 14 jours. Si vous n\'etes pas satisfait du guide, contactez-nous dans les 14 jours suivant l\'achat pour un remboursement complet. Sans poser de questions.',
		licenseTitle: 'Licence',
		licensePara:
			'Votre achat vous accorde une licence personnelle et non transferable pour acceder et utiliser le guide. Vous ne pouvez pas:',
		licenseList: [
			'Partager votre compte ou votre acces avec d\'autres',
			'Copier, redistribuer ou republier le contenu du guide',
			'Utiliser le contenu a des fins commerciales sans autorisation'
		],
		disclaimerTitle: 'Avertissement',
		disclaimerPara:
			'Ce guide est fourni "tel quel" base sur l\'experience personnelle. Bien que nous visions l\'exactitude, nous ne garantissons pas de resultats specifiques. Claude Code est un produit d\'Anthropic, et ce guide n\'est pas affilie ni approuve par Anthropic.',
		contactTitle: 'Questions?',
		contactPara: 'Pour toute question sur ces conditions, contactez-nous a:',
		contactEmail: 'support@claudecodeguide.com'
	},

	// Disclosure page
	disclosure: {
		pageTitle: 'Divulgation - Claude Code Tips',
		pageDescription:
			'Divulgations importantes sur Claude Code Tips, y compris les relations d\'affiliation et l\'independance editoriale.',
		title: 'Divulgation',
		lastUpdated: 'Derniere mise a jour: Decembre 2024',
		affiliationTitle: 'Pas d\'Affiliation avec Anthropic',
		affiliationPara:
			'Ce guide est un produit independant cree par Danyel Koca. Il n\'est PAS affilie, approuve ou sponsorise par Anthropic, l\'entreprise derriere Claude et Claude Code. Toutes les opinions et recommandations sont uniquement celles de l\'auteur.',
		independenceTitle: 'Independance Editoriale',
		independencePara:
			'Tout le contenu de ce guide reflete les opinions genuines de l\'auteur basees sur son experience personnelle. Aucune entreprise ou organisation n\'a paye pour une couverture favorable ou n\'a influence le contenu.',
		aiAssistedTitle: 'Contenu Assiste par IA',
		aiAssistedPara:
			'Ce guide a ete cree avec l\'assistance de Claude Code lui-meme. L\'auteur utilise Claude Code quotidiennement et l\'a utilise pour aider a ecrire, editer et affiner le contenu du guide. Ceci est divulgue dans un esprit de transparence.',
		noSponsoredTitle: 'Pas de Contenu Sponsorise',
		noSponsoredPara:
			'Le guide ne contient pas de contenu sponsorise, de placements payes ou de liens d\'affiliation. Le seul produit vendu est le guide lui-meme.',
		contactTitle: 'Questions?',
		contactPara: 'Pour toute question sur ces divulgations, contactez-nous a:',
		contactEmail: 'hello@claudecodeguide.com'
	},

	// Blog (UI strings only - post content in .svx files)
	blog: {
		pageTitle: 'Blog - Claude Code Tips',
		pageDescription:
			'Conseils, tutoriels et perspectives sur Claude Code par le createur du guide 50 Tips.',
		title: 'Blog',
		subtitle: 'Conseils, tutoriels et perspectives sur Claude Code',
		readMore: 'Lire la suite',
		publishedOn: 'Publie le',
		backToBlog: 'Retour au Blog',
		noPosts: 'Pas encore d\'articles. Revenez bientot!'
	},

	// Disclaimer for untranslated content
	disclaimer: {
		notTranslated:
			'Ce contenu n\'est pas encore disponible dans votre langue. Affichage de la version anglaise.'
	},

	// FAQ page
	faq: {
		pageTitle: 'FAQ - Claude Code Tips',
		pageDescription: 'Questions frequemment posees sur le guide Claude Code Tips.',
		title: 'Questions Frequemment Posees',
		items: [
			{ q: 'Quel est le format du guide?', a: 'C\'est un guide web accessible depuis n\'importe quel appareil. Pas de telechargement PDF necessaire.' },
			{ q: 'Ai-je besoin d\'experience avec Claude Code?', a: 'Une familiarite de base aide, mais le guide couvre tout, de l\'installation initiale aux techniques avancees.' },
			{ q: 'Et si Claude Code est mis a jour?', a: 'Le guide se concentre sur les workflows et patterns qui restent stables. Quand des fonctionnalites majeures changent, le guide est mis a jour aussi.' }
		]
	}
};
