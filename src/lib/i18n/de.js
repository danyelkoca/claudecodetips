export default {
	// Meta
	lang: 'de',
	langName: 'Deutsch',
	siteBrand: 'Claude Code Tips',

	// Common strings
	common: {
		tipPrefix: 'Tipp',
		tip: 'Tipp',
		tips: 'Tipps',
		previous: 'Zuruck',
		next: 'Weiter',
		loading: 'Laden...',
		backArrow: '\u2190',
		forwardArrow: '\u2192'
	},

	// Error page
	error: {
		titleSuffix: 'Fehler',
		notFoundTitle: 'Seite Nicht Gefunden',
		notFoundDescription: 'Die gesuchte Seite existiert nicht.',
		genericTitle: 'Etwas ist Schiefgelaufen',
		genericDescription: 'Ein unerwarteter Fehler ist aufgetreten.',
		goHome: 'Zur Startseite',
		// Server error keys (backend sends key, UI translates)
		langNotFound: 'Sprache nicht gefunden',
		blogNotFound: 'Blogbeitrag nicht gefunden',
		sectionNotFound: 'Abschnitt nicht gefunden',
		tipNotInSection: 'Tipp in diesem Abschnitt nicht gefunden',
		tipNotFound: 'Tipp nicht gefunden',
		emailRequired: 'E-Mail ist erforderlich',
		checkoutFailed: 'Checkout-Sitzung konnte nicht erstellt werden'
	},

	// Checkout
	checkout: {
		productName: '50 Tipps zum Meistern von Claude Code',
		productDescription: 'Kompletter Leitfaden mit allen 50 Tipps - lebenslanger Zugang'
	},

	// Navigation
	nav: {
		home: 'Start',
		guide: 'Leitfaden',
		pricing: 'Preise',
		toggleMenu: 'Menu umschalten'
	},

	// Landing page
	landing: {
		hero: {
			eyebrow: 'Aus 6 Monaten taglicher Nutzung',
			title: 'Meistere Claude Code in Tagen, Nicht Monaten',
			subtitle:
				'Die Workflows, Shortcuts und Konfigurationen, die Anfanger von Power-Usern unterscheiden.',
			cta: 'Leitfaden Holen - $29',
			guarantee: '14-Tage Geld-zuruck-Garantie'
		},
		social: {
			quote: 'Nach uber 500 Stunden Bauen echter Produkte mit Claude Code habe ich alle Muster dokumentiert, die wirklich funktionieren.',
			author: 'Danyel Koca',
			role: 'Applied Research Engineer bei Sakana AI | Ex-Senior Data Scientist bei McKinsey',
			benefits: ['Uberspringe Monate von Versuch und Irrtum', 'Kopierfertige CLAUDE.md Configs', 'Muster die mit jedem Projekt funktionieren']
		},
		curriculum: {
			title: 'Was Enthalten Ist',
			subtitle: '50 Tipps in 12 Abschnitten + Bonus-Inhalt'
		},
		sample: {
			title: 'Sieh die Qualitat',
			subtitle: 'Lies diesen Tipp kostenlos. Wenn er hilft, stell dir 49 weitere vor.',
			readFull: 'Vollstandigen Tipp kostenlos lesen'
		},
		pricing: {
			title: 'Einmaliger Kauf',
			price: '$29',
			subtitle: 'Lebenslanger Zugang zu allen 50 Tipps',
			features: [
				'50 detaillierte Tipps mit Code-Beispielen',
				'Kopierfertige CLAUDE.md Configs',
				'12 Abschnitte + Bonus-Inhalt',
				'Zukunftige Updates inklusive'
			],
			cta: 'Sofortigen Zugang Erhalten',
			anchor: 'Uberspringe Monate von Versuch und Irrtum.',
			guarantee: '14-Tage Geld-zuruck-Garantie. Ohne Fragen.'
		},
		faq: {
			title: 'Fragen',
			items: [
				{
					q: 'Welches Format hat der Leitfaden?',
					a: 'Es ist ein web-basierter Leitfaden, auf den du von jedem Gerat zugreifen kannst. Kein PDF-Download notig.'
				},
				{
					q: 'Brauche ich Claude Code Erfahrung?',
					a: 'Grundlegende Vertrautheit hilft, aber der Leitfaden deckt alles von der Ersteinrichtung bis zu fortgeschrittenen Techniken ab.'
				},
				{
					q: 'Was passiert, wenn Claude Code aktualisiert wird?',
					a: 'Der Leitfaden konzentriert sich auf Workflows und Muster, die stabil bleiben. Wenn sich wichtige Funktionen andern, wird der Leitfaden ebenfalls aktualisiert.'
				}
			]
		}
	},

	// Guide
	guide: {
		title: 'Leitfaden',
		overview: 'Alle 50 Tipps',
		overviewDescription:
			'Meistere Claude Code mit diesen kampferprobten Tipps aus 6 Monaten taglicher Nutzung.',
		backToGuide: 'Zuruck zum Leitfaden',
		free: 'Kostenlos',
		freePreview: 'Kostenlose Vorschau',
		locked: 'Freischalten zum Lesen',
		lockedTitle: 'Dieser Tipp ist gesperrt',
		lockedDescription: 'Erhalte vollen Zugang zu allen 50 Tipps mit einem einmaligen Kauf.',
		unlockCta: 'Kompletten Leitfaden Freischalten - $29',
		unlockAll: 'Alle 50 Tipps Freischalten'
	},

	// Section data (unified: title, short description, long description)
	sections: {
		title: 'Alle Abschnitte',
		description:
			'Erkunde 51 Tipps in 13 Abschnitten organisiert. Jeder Abschnitt konzentriert sich auf einen spezifischen Aspekt des Claude Code Meisterns.',
		tipsInSection: 'in diesem Abschnitt',
		setup: {
			title: 'Einrichtung',
			short: 'Terminal, CLAUDE.md, Shortcuts und Befehle',
			long: 'Bringe Claude Code mit der richtigen Terminal-Einrichtung, CLAUDE.md-Konfiguration und essentiellen Tastenkurzeln optimal zum Laufen, die dir Stunden sparen werden.'
		},
		safety: {
			title: 'Sicherheit',
			short: 'Git, Berechtigungen, Schutz sensibler Dateien',
			long: 'Schutze deine Codebase und Geheimnisse mit ordentlichen Git-Praktiken, Dateiberechtigungen und intelligenten Auto-Approve-Regeln, die Geschwindigkeit und Sicherheit ausbalancieren.'
		},
		planning: {
			title: 'Planung',
			short: 'Planmodus, detaillierte Plane, End-to-End-Denken',
			long: 'Meistere den Planmodus, um komplexe Aufgaben vor dem Programmieren durchzudenken. Lerne, detaillierte, umsetzbare Plane zu erstellen, die Claude perfekt ausfuhren kann.'
		},
		prompting: {
			title: 'Prompting',
			short: 'Ultrathink, direkt sein, Wichtigkeit ubertreiben',
			long: 'Erschliesse Claudes volles Potenzial mit fortgeschrittenen Prompting-Techniken. Von Ultrathink bis strategischer Fuhrung, lerne wie du konsistent bessere Ergebnisse erzielst.'
		},
		session: {
			title: 'Sitzung',
			short: 'Kontextmanagement, Fortsetzen, Qualitatsabbau',
			long: 'Verwalte Kontext effektiv uber lange Coding-Sitzungen. Wisse, wann du komprimieren, loschen oder neu starten solltest, um Claudes Spitzenleistung zu erhalten.'
		},
		input: {
			title: 'Eingabe',
			short: 'Bilder, Screenshots, Fehlermeldungen',
			long: 'Nutze Claudes multimodale Fahigkeiten mit Bildern, Screenshots und korrekt formatierten Fehlermeldungen fur schnelleres Debugging.'
		},
		'multi-agent': {
			title: 'Multi-Agent',
			short: 'Parallele Agenten, Worktrees, Subagenten',
			long: 'Skaliere deine Produktivitat mit mehreren Claude-Instanzen. Lerne Git Worktrees, parallele Agenten und wann Subagenten effektiv eingesetzt werden.'
		},
		customization: {
			title: 'Anpassung',
			short: 'Hierarchische Configs, Befehle, benutzerdefinierte Agenten',
			long: 'Passe Claude Code an deinen Workflow an mit hierarchischen CLAUDE.md-Dateien, benutzerdefinierten Slash-Befehlen und spezialisierten Agenten.'
		},
		pitfalls: {
			title: 'Fallstricke',
			short: 'Haufige Claude-Verhaltensweisen zum Beobachten',
			long: 'Vermeide die haufigen Fallen, die Claude Code-Nutzer stolpern lassen. Von Over-Engineering bis zu stillen Fehlern, lerne worauf du achten musst.'
		},
		advanced: {
			title: 'Fortgeschritten',
			short: 'Hooks, MCP-Server, Skills, Headless-Modus',
			long: 'Schalte Power-User-Funktionen wie Hooks, MCP-Server, Skills und Headless-Modus fur Automatisierung und CI/CD-Integration frei.'
		},
		'use-cases': {
			title: 'Anwendungsfalle',
			short: 'Qualitatsprufungen, POCs, Lernen, Commits',
			long: 'Praxisanwendungen von Codebase-Qualitatsprufungen bis zu schnellem Prototyping. Sieh, wie du Claude Code effektiv in deiner taglichen Arbeit anwendest.'
		},
		closing: {
			title: 'Abschluss',
			short: 'Abschliessende Weisheit zum Finden deines Workflows',
			long: 'Abschliessende Weisheit zum Finden deines personlichen Workflows. Nicht jede Funktion ist fur jeden - konzentriere dich auf das, was fur dich funktioniert.'
		},
		bonus: {
			title: 'Bonus',
			short: 'Kampferprobte CLAUDE.md aus 6 Monaten taglicher Nutzung',
			long: 'Eine komplette, kampferprobte CLAUDE.md-Datei destilliert aus 6 Monaten taglicher Nutzung. Kopiere, passe an und mach sie zu deiner eigenen.'
		}
	},

	// Paywall
	paywall: {
		title: 'Kompletten Leitfaden Freischalten',
		description: 'Erhalte Zugang zu allen 50 Tipps fur nur $29',
		cta: 'Vollen Zugang Erhalten'
	},

	// Success page
	success: {
		title: 'Danke!',
		description:
			'Dein Kauf war erfolgreich. Du hast jetzt vollen Zugang zu allen 50 Tipps.',
		cta: 'Mit dem Lesen Beginnen'
	},

	// Footer
	footer: {
		builtWith: 'Erstellt mit Claude Code',
		guide: 'Leitfaden',
		company: 'Unternehmen',
		legal: 'Rechtliches',
		allTips: 'Alle 50 Tipps',
		faq: 'FAQ',
		blog: 'Blog',
		about: 'Uber Uns',
		privacy: 'Datenschutz',
		terms: 'AGB',
		disclosure: 'Offenlegung'
	},

	// About page
	about: {
		pageTitle: 'Uber Uns - Claude Code Tips',
		pageDescription:
			'Erfahre mehr uber Danyel Koca, den Ersteller von Claude Code Tips, und warum dieser Leitfaden existiert.',
		heroTitle: 'Erstellt von einem Praktiker',
		heroSubtitle:
			'Dieser Leitfaden wurde von jemandem erstellt, der Claude Code jeden Tag nutzt, um echte Produkte zu bauen.',
		storyTitle: 'Die Geschichte',
		storyPara1:
			'Ich bin Danyel Koca, Applied Research Engineer bei Sakana AI in Tokio. Davor war ich 3 Jahre lang Senior Data Scientist bei McKinsey & Company und habe AI/ML-Losungen fur Unternehmenskunden gebaut.',
		storyPara2:
			'Ich nutze Claude Code taglich seit seinem Launch. Was als Neugierde begann, wurde zur Obsession - ich entdeckte standig neue Muster, Shortcuts und Konfigurationen, die meinen Workflow drastisch verbesserten.',
		storyPara3:
			'Nach 6 Monaten taglicher Nutzung hatte ich Dutzende Tipps gesammelt, die ich mir am ersten Tag gewunscht hatte. Deshalb habe ich diesen Leitfaden erstellt.',
		whyTitle: 'Warum Dieser Leitfaden Existiert',
		whyPara1:
			'Die meisten Claude Code Tutorials behandeln die Grundlagen: wie man es installiert, wie man Befehle ausfuhrt. Aber sie behandeln nicht die echten Muster, die dich produktiv machen.',
		whyPara2:
			'Dieser Leitfaden ist anders. Jeder Tipp kommt aus echter Erfahrung beim Bauen von Produktionssystemen. Keine Theorie - nur was wirklich funktioniert.',
		credentialsTitle: 'Qualifikationen',
		credentialsList: [
			'Applied Research Engineer bei Sakana AI',
			'Ex-Senior Data Scientist bei McKinsey & Company',
			'Absolvent der Kyoto University (GPA 3.76/4)',
			'Veroffentlichter Forscher bei IEEE',
			'Dreisprachig: Englisch, Japanisch (JLPT N1), Turkisch'
		],
		contactTitle: 'Kontakt',
		contactPara: 'Hast du Fragen oder Feedback? Ich wurde mich freuen von dir zu horen.',
		contactLinks: {
			linkedin: 'LinkedIn',
			github: 'GitHub',
			website: 'Webseite'
		}
	},

	// Privacy page
	privacy: {
		pageTitle: 'Datenschutzrichtlinie - Claude Code Tips',
		pageDescription:
			'Erfahre, wie Claude Code Tips mit deinen Daten umgeht und deine Privatsphare schutzt.',
		title: 'Datenschutzrichtlinie',
		lastUpdated: 'Zuletzt aktualisiert: Dezember 2024',
		introTitle: 'Unser Engagement',
		introPara:
			'Wir glauben an minimale Datenerfassung. Wir erfassen nur, was absolut notwendig ist, um deinen Kauf zu verarbeiten und den Leitfaden zu liefern.',
		dataCollectedTitle: 'Daten Die Wir Erfassen',
		dataCollectedPara: 'Wenn du den Leitfaden kaufst, erfassen wir:',
		dataCollectedList: [
			'E-Mail-Adresse (um den Zugang zu liefern)',
			'Zahlungsinformationen (sicher verarbeitet durch Stripe)'
		],
		noTrackingTitle: 'Was Wir Nicht Tun',
		noTrackingList: [
			'Keine Analytics- oder Tracking-Skripte',
			'Keine Cookies fur Werbung',
			'Kein Verkauf oder Teilen deiner Daten mit Dritten',
			'Kein Verhaltens-Tracking'
		],
		stripeTitle: 'Zahlungsabwicklung',
		stripePara:
			'Alle Zahlungen werden sicher durch Stripe verarbeitet. Wir sehen oder speichern niemals deine vollstandigen Kreditkartendaten. Die Datenschutzrichtlinie von Stripe gilt fur die Zahlungsabwicklung.',
		retentionTitle: 'Datenspeicherung',
		retentionPara:
			'Wir behalten Kaufaufzeichnungen, um dir weiterhin Zugang zum Leitfaden zu ermoglichen und Support-Anfragen zu bearbeiten.',
		contactTitle: 'Fragen?',
		contactPara: 'Fur datenschutzbezogene Fragen kontaktiere uns unter:',
		contactEmail: 'privacy@claudecodeguide.com'
	},

	// Terms page
	terms: {
		pageTitle: 'Nutzungsbedingungen - Claude Code Tips',
		pageDescription: 'Allgemeine Geschaftsbedingungen fur die Nutzung von Claude Code Tips.',
		title: 'Nutzungsbedingungen',
		lastUpdated: 'Zuletzt aktualisiert: Dezember 2024',
		serviceTitle: 'Der Service',
		servicePara:
			'Claude Code Tips bietet einen digitalen Leitfaden mit 50 Tipps zum Meistern von Claude Code. Nach dem Kauf erhaltst du lebenslangen Zugang zum web-basierten Leitfaden.',
		paymentTitle: 'Zahlung',
		paymentList: [
			'Einmalige Zahlung von $29 USD',
			'Lebenslanger Zugang zu allen aktuellen und zukunftigen Tipps',
			'Keine wiederkehrenden Gebuhren oder Abonnements'
		],
		refundTitle: 'Ruckerstattungsrichtlinie',
		refundPara:
			'Wir bieten eine 14-tagige Geld-zuruck-Garantie. Wenn du mit dem Leitfaden nicht zufrieden bist, kontaktiere uns innerhalb von 14 Tagen nach dem Kauf fur eine vollstandige Ruckerstattung. Ohne Fragen.',
		licenseTitle: 'Lizenz',
		licensePara:
			'Dein Kauf gewahrt dir eine personliche, nicht ubertragbare Lizenz zum Zugriff auf und zur Nutzung des Leitfadens. Du darfst nicht:',
		licenseList: [
			'Dein Konto oder Zugang mit anderen teilen',
			'Den Inhalt des Leitfadens kopieren, weiterverteilen oder wiederverouffentlichen',
			'Den Inhalt ohne Erlaubnis fur kommerzielle Zwecke nutzen'
		],
		disclaimerTitle: 'Haftungsausschluss',
		disclaimerPara:
			'Dieser Leitfaden wird "wie besehen" basierend auf personlicher Erfahrung bereitgestellt. Obwohl wir nach Genauigkeit streben, garantieren wir keine spezifischen Ergebnisse. Claude Code ist ein Produkt von Anthropic, und dieser Leitfaden ist weder mit Anthropic verbunden noch von Anthropic gebilligt.',
		contactTitle: 'Fragen?',
		contactPara: 'Fur Fragen zu diesen Bedingungen kontaktiere uns unter:',
		contactEmail: 'support@claudecodeguide.com'
	},

	// Disclosure page
	disclosure: {
		pageTitle: 'Offenlegung - Claude Code Tips',
		pageDescription:
			'Wichtige Offenlegungen uber Claude Code Tips, einschliesslich Affiliate-Beziehungen und redaktioneller Unabhangigkeit.',
		title: 'Offenlegung',
		lastUpdated: 'Zuletzt aktualisiert: Dezember 2024',
		affiliationTitle: 'Keine Verbindung zu Anthropic',
		affiliationPara:
			'Dieser Leitfaden ist ein unabhangiges Produkt, erstellt von Danyel Koca. Er ist NICHT mit Anthropic, dem Unternehmen hinter Claude und Claude Code, verbunden, gebilligt oder gesponsert. Alle Meinungen und Empfehlungen stammen ausschliesslich vom Autor.',
		independenceTitle: 'Redaktionelle Unabhangigkeit',
		independencePara:
			'Alle Inhalte in diesem Leitfaden spiegeln die echten Meinungen des Autors basierend auf personlicher Erfahrung wider. Kein Unternehmen oder Organisation hat fur positive Berichterstattung bezahlt oder den Inhalt beeinflusst.',
		aiAssistedTitle: 'KI-unterstutzte Inhalte',
		aiAssistedPara:
			'Dieser Leitfaden wurde mit Hilfe von Claude Code selbst erstellt. Der Autor nutzt Claude Code taglich und hat es verwendet, um den Inhalt des Leitfadens zu schreiben, zu bearbeiten und zu verfeinern. Dies wird im Sinne der Transparenz offengelegt.',
		noSponsoredTitle: 'Keine Gesponserten Inhalte',
		noSponsoredPara:
			'Der Leitfaden enthalt keine gesponserten Inhalte, bezahlten Platzierungen oder Affiliate-Links. Das einzige verkaufte Produkt ist der Leitfaden selbst.',
		contactTitle: 'Fragen?',
		contactPara: 'Fur Fragen zu diesen Offenlegungen kontaktiere uns unter:',
		contactEmail: 'hello@claudecodeguide.com'
	},

	// Blog (UI strings only - post content in .svx files)
	blog: {
		pageTitle: 'Blog - Claude Code Tips',
		pageDescription:
			'Tipps, Tutorials und Einblicke zu Claude Code vom Ersteller des 50 Tips Leitfadens.',
		title: 'Blog',
		subtitle: 'Tipps, Tutorials und Einblicke zu Claude Code',
		readMore: 'Mehr lesen',
		publishedOn: 'Veroffentlicht am',
		backToBlog: 'Zuruck zum Blog',
		noPosts: 'Noch keine Beitrage. Schau bald wieder vorbei!'
	},

	// Disclaimer for untranslated content
	disclaimer: {
		notTranslated:
			'Dieser Inhalt ist noch nicht in deiner Sprache verfugbar. Englische Version wird angezeigt.'
	},

	// FAQ page
	faq: {
		pageTitle: 'FAQ - Claude Code Tips',
		pageDescription: 'Haufig gestellte Fragen zum Claude Code Tips Leitfaden.',
		title: 'Haufig Gestellte Fragen',
		items: [
			{ q: 'Welches Format hat der Leitfaden?', a: 'Es ist ein web-basierter Leitfaden, auf den du von jedem Gerat zugreifen kannst. Kein PDF-Download notig.' },
			{ q: 'Brauche ich Claude Code Erfahrung?', a: 'Grundlegende Vertrautheit hilft, aber der Leitfaden deckt alles von der Ersteinrichtung bis zu fortgeschrittenen Techniken ab.' },
			{ q: 'Was passiert, wenn Claude Code aktualisiert wird?', a: 'Der Leitfaden konzentriert sich auf Workflows und Muster, die stabil bleiben. Wenn sich wichtige Funktionen andern, wird der Leitfaden ebenfalls aktualisiert.' }
		]
	}
};
