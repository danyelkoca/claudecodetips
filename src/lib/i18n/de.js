export default {
  // Meta
  lang: "de",
  langName: "Deutsch",
  siteBrand: "Claude Code Tips",

  // Common strings
  common: {
    tipPrefix: "Tipp",
    tip: "Tipp",
    tips: "Tipps",
    previous: "Zurück",
    next: "Weiter",
    loading: "Laden...",
    backArrow: "\u2190",
    forwardArrow: "\u2192",
    goToSlide: "Zur Folie",
  },

  // Error page
  error: {
    titleSuffix: "Fehler",
    notFoundTitle: "Seite Nicht Gefunden",
    notFoundDescription: "Die gesuchte Seite existiert nicht.",
    genericTitle: "Etwas ist Schiefgelaufen",
    genericDescription: "Ein unerwarteter Fehler ist aufgetreten.",
    goHome: "Zur Startseite",
    // Server error keys (backend sends key, UI translates)
    langNotFound: "Sprache nicht gefunden",
    blogNotFound: "Blogbeitrag nicht gefunden",
    sectionNotFound: "Abschnitt nicht gefunden",
    tipNotInSection: "Tipp in diesem Abschnitt nicht gefunden",
    tipNotFound: "Tipp nicht gefunden",
  },

  // Checkout
  checkout: {
    productName: "51 Tipps zum Meistern von Claude Code",
    productDescription: "Kompletter Leitfaden mit allen 51 Tipps - lebenslanger Zugang",
  },

  // Navigation
  nav: {
    guide: "Leitfaden",
    toggleMenu: "Menu umschalten",
  },

  // Landing page
  landing: {
    hero: {
      eyebrow: "Vom Entwickler von Kumamap (389K Nutzer)",
      title: "Meistere Claude Code in Tagen, Nicht Monaten",
      subtitle: "Die Workflows, Shortcuts und Konfigurationen, die Anfanger von Power-Usern unterscheiden.",
      cta: "Leitfaden Holen - $29",
      guarantee: "7-Tage Geld-zuruck-Garantie",
    },
    social: {
      quote: "Claude Code hat eine steile Lernkurve. Ich habe Hunderte von Stunden damit verbracht herauszufinden, was funktioniert und was nicht. Dieser Leitfaden ist alles, was ich mir am ersten Tag gewünscht hätte.",
      author: "Danyel Koca",
      role: "KI-Ingenieur bei Sakana AI | Zuvor Senior Data Scientist bei McKinsey & Company",
    },
    caseStudy: {
      title: "Mit Claude Code gebaut",
      description: "Ich habe Kumamap — Japans #1 Bären-Tracker — komplett mit Claude Code gebaut. Dieser Leitfaden lehrt Sie die genauen Muster, die ich verwendet habe.",
      cta: "Live-Produkt ansehen",
      stats: {
        views: { value: "1,3 Millionen", label: "Seitenaufrufe" },
        users: { value: "389.000", label: "Nutzer" },
        time: { value: "3 Monate", label: "Bauzeit" },
      },
    },
    curriculum: {
      title: "Was Enthalten Ist",
      subtitle: "51 Tipps in 13 Abschnitten",
      viewAll: "Alle {count} Tipps ansehen",
    },
    sample: {
      title: "Sieh die Qualitat",
      subtitle: "Lies diesen Tipp kostenlos. Wenn er hilft, stell dir 49 weitere vor.",
      readFull: "Vollstandigen Tipp kostenlos lesen",
    },
    pricing: {
      title: "Einmaliger Kauf",
      price: "$29",
      subtitle: "Lebenslanger Zugang zu allen 51 Tipps",
      features: [
        "51 detaillierte Tipps mit Code-Beispielen",
        "Kopierfertige CLAUDE.md Configs",
        "13 organisierte Abschnitte",
        "Zukunftige Updates inklusive",
      ],
      cta: "Sofortigen Zugang Erhalten",
      guarantee: "7-Tage Geld-zuruck-Garantie. Ohne Fragen.",
    },
    checkoutCanceled: "Zahlung abgebrochen. Bereit wenn du es bist.",
  },

  // Pricing page
  pricingPage: {
    pageTitle: "Zahlung - Claude Code Tips",
    pageDescription: "Sofortiger Zugang zu allen 51 Tipps fur $29",
    emailLabel: "E-Mail-Adresse",
    emailPlaceholder: "du@beispiel.com",
    cta: "Weiter zur Zahlung",
    processing: "Verarbeitung...",
    errors: {
      emailRequired: "Bitte gib deine E-Mail-Adresse ein.",
      invalidEmail: "Bitte gib eine gultige E-Mail-Adresse ein.",
      checkoutFailed: "Etwas ist schiefgelaufen. Bitte versuche es erneut.",
      rateLimitExceeded: "Zu viele Versuche. Versuche es in einer Stunde erneut.",
    },
  },

  // Guide
  guide: {
    title: "Leitfaden",
    overview: "Alle 51 Tipps",
    overviewDescription: "Meistere Claude Code mit diesen kampferprobten Tipps aus 6 Monaten taglicher Nutzung.",
    backToGuide: "Zuruck zum Leitfaden",
    free: "Kostenlos",
    freePreview: "Kostenlose Vorschau",
    locked: "Freischalten zum Lesen",
    lockedTitle: "Dieser Tipp ist gesperrt",
    lockedDescription: "Erhalte vollen Zugang zu allen 51 Tipps mit einem einmaligen Kauf.",
    unlockCta: "Kompletten Leitfaden Freischalten - $29",
    unlockAll: "Alle 51 Tipps Freischalten",
    sections: "Abschnitte",
    freeLabel: "kostenlose Vorschauen",
    whatsIncluded: "Was enthalten ist",
    detailedTips: "detaillierte Tipps",
    organizedSections: "organisierte Abschnitte",
    freePreviews: "kostenlose Vorschauen",
    startReading: "Lesen beginnen",
    jumpTo: "Zu Abschnitt springen",
  },

  // Section data (unified: title, short description, long description)
  sections: {
    setup: {
      title: "Einrichtung",
      short: "Terminal, CLAUDE.md, Shortcuts und Befehle",
      long:
        "Bringe Claude Code mit der richtigen Terminal-Einrichtung, CLAUDE.md-Konfiguration und essentiellen Tastenkurzeln optimal zum Laufen, die dir Stunden sparen werden.",
    },
    safety: {
      title: "Sicherheit",
      short: "Git, Berechtigungen, Schutz sensibler Dateien",
      long:
        "Schutze deine Codebase und Geheimnisse mit ordentlichen Git-Praktiken, Dateiberechtigungen und intelligenten Auto-Approve-Regeln, die Geschwindigkeit und Sicherheit ausbalancieren.",
    },
    planning: {
      title: "Planung",
      short: "Planmodus, detaillierte Plane, End-to-End-Denken",
      long:
        "Meistere den Planmodus, um komplexe Aufgaben vor dem Programmieren durchzudenken. Lerne, detaillierte, umsetzbare Plane zu erstellen, die Claude perfekt ausfuhren kann.",
    },
    prompting: {
      title: "Prompting",
      short: "Ultrathink, direkt sein, Wichtigkeit ubertreiben",
      long:
        "Erschliesse Claudes volles Potenzial mit fortgeschrittenen Prompting-Techniken. Von Ultrathink bis strategischer Fuhrung, lerne wie du konsistent bessere Ergebnisse erzielst.",
    },
    session: {
      title: "Sitzung",
      short: "Kontextmanagement, Fortsetzen, Qualitatsabbau",
      long:
        "Verwalte Kontext effektiv uber lange Coding-Sitzungen. Wisse, wann du komprimieren, loschen oder neu starten solltest, um Claudes Spitzenleistung zu erhalten.",
    },
    input: {
      title: "Eingabe",
      short: "Bilder, Screenshots, Fehlermeldungen",
      long: "Nutze Claudes multimodale Fahigkeiten mit Bildern, Screenshots und korrekt formatierten Fehlermeldungen fur schnelleres Debugging.",
    },
    "multi-agent": {
      title: "Multi-Agent",
      short: "Parallele Agenten, Worktrees, Subagenten",
      long:
        "Skaliere deine Produktivitat mit mehreren Claude-Instanzen. Lerne Git Worktrees, parallele Agenten und wann Subagenten effektiv eingesetzt werden.",
    },
    customization: {
      title: "Anpassung",
      short: "Hierarchische Configs, Befehle, benutzerdefinierte Agenten",
      long:
        "Passe Claude Code an deinen Workflow an mit hierarchischen CLAUDE.md-Dateien, benutzerdefinierten Slash-Befehlen und spezialisierten Agenten.",
    },
    pitfalls: {
      title: "Fallstricke",
      short: "Haufige Claude-Verhaltensweisen zum Beobachten",
      long:
        "Vermeide die haufigen Fallen, die Claude Code-Nutzer stolpern lassen. Von Over-Engineering bis zu stillen Fehlern, lerne worauf du achten musst.",
    },
    advanced: {
      title: "Fortgeschritten",
      short: "Hooks, MCP-Server, Skills, Headless-Modus",
      long: "Schalte Power-User-Funktionen wie Hooks, MCP-Server, Skills und Headless-Modus fur Automatisierung und CI/CD-Integration frei.",
    },
    "use-cases": {
      title: "Anwendungsfalle",
      short: "Qualitatsprufungen, POCs, Lernen, Commits",
      long:
        "Praxisanwendungen von Codebase-Qualitatsprufungen bis zu schnellem Prototyping. Sieh, wie du Claude Code effektiv in deiner taglichen Arbeit anwendest.",
    },
    closing: {
      title: "Abschluss",
      short: "Abschliessende Weisheit zum Finden deines Workflows",
      long:
        "Abschliessende Weisheit zum Finden deines personlichen Workflows. Nicht jede Funktion ist fur jeden - konzentriere dich auf das, was fur dich funktioniert.",
    },
    bonus: {
      title: "Bonus",
      short: "Kampferprobte CLAUDE.md aus 6 Monaten taglicher Nutzung",
      long:
        "Eine komplette, kampferprobte CLAUDE.md-Datei destilliert aus 6 Monaten taglicher Nutzung. Kopiere, passe an und mach sie zu deiner eigenen.",
    },
  },

  // Paywall
  paywall: {
    title: "Kompletten Leitfaden Freischalten",
    description: "Erhalte Zugang zu allen 51 Tipps fur nur $29",
    cta: "Vollen Zugang Erhalten",
    alreadyPurchased: "Bereits gekauft?",
    restoreAccess: "Zugang wiederherstellen",
  },

  // Success page
  success: {
    title: "Danke!",
    description: "Dein Kauf war erfolgreich. Du hast jetzt vollen Zugang zu allen 51 Tipps.",
    cta: "Mit dem Lesen Beginnen",
  },

  // Restore page
  restore: {
    pageTitle: "Zugang wiederherstellen - Claude Code Tips",
    title: "Zugang wiederherstellen",
    description: "Geben Sie die E-Mail ein, die Sie beim Kauf verwendet haben, um den Zugang auf diesem Gerät wiederherzustellen.",
    emailLabel: "Kauf-E-Mail",
    emailPlaceholder: "sie@beispiel.de",
    cta: "Zugang wiederherstellen",
    successMessage: "Zugang erfolgreich wiederhergestellt!",
    redirecting: "Weiterleitung zum Guide...",
    noAccount: "Noch nicht gekauft?",
    buyNow: "Jetzt kaufen",
    errors: {
      restoreFailed: "Wiederherstellung fehlgeschlagen. Bitte erneut versuchen.",
      emailRequired: "E-Mail ist erforderlich.",
      invalidEmail: "Bitte gib eine gultige E-Mail-Adresse ein.",
      rateLimitExceeded: "Zu viele Versuche. Versuche es in einer Stunde erneut.",
    },
  },

  // Footer
  footer: {
    builtWith: "Erstellt mit Claude Code",
    guide: "Leitfaden",
    company: "Unternehmen",
    legal: "Rechtliches",
    allTips: "Alle 51 Tipps",
    faq: "FAQ",
    restoreAccess: "Zugang wiederherstellen",
    pricing: "Preise",
    blog: "Blog",
    about: "Uber Uns",
    contact: "Kontakt",
    privacy: "Datenschutz",
    terms: "AGB",
    disclosure: "Offenlegung",
  },

  // Contact page
  contact: {
    pageTitle: "Kontakt - Claude Code Tips",
    pageDescription: "Kontaktiere uns bei Fragen oder Feedback",
    title: "Kontaktiere uns",
    description: "Hast du Fragen oder Feedback? Ich wurde mich freuen von dir zu horen.",
    nameLabel: "Name",
    namePlaceholder: "Dein Name",
    emailLabel: "E-Mail",
    emailPlaceholder: "du@beispiel.com",
    messageLabel: "Nachricht",
    messagePlaceholder: "Deine Nachricht...",
    cta: "Nachricht senden",
    sent: "Gesendet",
    successMessage: "Nachricht erfolgreich gesendet! Ich melde mich bald.",
    errors: {
      nameRequired: "Bitte gib deinen Namen ein.",
      emailRequired: "Bitte gib deine E-Mail-Adresse ein.",
      invalidEmail: "Bitte gib eine gultige E-Mail-Adresse ein.",
      messageRequired: "Bitte gib eine Nachricht ein (mindestens 10 Zeichen).",
      rateLimitExceeded: "Zu viele Versuche. Versuche es in einer Stunde erneut.",
      submitFailed: "Etwas ist schiefgelaufen. Bitte versuche es erneut.",
    },
  },

  // About page
  about: {
    pageTitle: "Uber Uns - Claude Code Tips",
    pageDescription: "Erfahre mehr uber Danyel Koca, den Ersteller von Claude Code Tips, und warum dieser Leitfaden existiert.",
    heroTitle: "Erstellt von einem Praktiker",
    heroSubtitle: "Dieser Leitfaden wurde von jemandem erstellt, der Claude Code jeden Tag nutzt, um echte Produkte zu bauen.",
    storyTitle: "Die Geschichte",
    storyPara1:
      "Ich bin Danyel Koca, Applied Research Engineer bei Sakana AI in Tokio. Davor war ich 3 Jahre lang Senior Data Scientist bei McKinsey & Company und habe AI/ML-Losungen fur Unternehmenskunden gebaut.",
    storyPara2:
      "Ich nutze Claude Code taglich seit seinem Launch. Was als Neugierde begann, wurde zur Obsession - ich entdeckte standig neue Muster, Shortcuts und Konfigurationen, die meinen Workflow drastisch verbesserten.",
    storyPara3:
      "Nach 6 Monaten taglicher Nutzung hatte ich Dutzende Tipps gesammelt, die ich mir am ersten Tag gewunscht hatte. Deshalb habe ich diesen Leitfaden erstellt.",
    whyTitle: "Warum Dieser Leitfaden Existiert",
    whyPara1:
      "Die meisten Claude Code Tutorials behandeln die Grundlagen: wie man es installiert, wie man Befehle ausfuhrt. Aber sie behandeln nicht die echten Muster, die dich produktiv machen.",
    whyPara2:
      "Dieser Leitfaden ist anders. Jeder Tipp kommt aus echter Erfahrung beim Bauen von Produktionssystemen. Keine Theorie - nur was wirklich funktioniert.",
    credentialsTitle: "Qualifikationen",
    credentialsList: [
      "Applied Research Engineer bei Sakana AI",
      "Ex-Senior Data Scientist bei McKinsey & Company",
      "Absolvent der Kyoto University (GPA 3.76/4)",
      "Veroffentlichter Forscher bei IEEE",
      "Dreisprachig: Englisch, Japanisch (JLPT N1), Turkisch",
    ],
    contactTitle: "Kontakt",
    contactPara: "Hast du Fragen oder Feedback? Ich wurde mich freuen von dir zu horen.",
    contactLinks: {
      linkedin: "LinkedIn",
      github: "GitHub",
      website: "Webseite",
    },
  },

  // Privacy page
  privacy: {
    pageTitle: "Datenschutzrichtlinie - Claude Code Tips",
    pageDescription: "Datenschutzrichtlinie und Datenverarbeitung von Claude Code Tips",
    title: "Datenschutzrichtlinie",
    dataCollectedTitle: "Daten Die Wir Erfassen",
    dataCollectedDescription: "Wenn du den Leitfaden kaufst:",
    dataEmail: "E-Mail (fur Lieferung und Zugang)",
    paymentTitle: "Zahlungsabwicklung",
    paymentDescription: "Alle Zahlungen werden sicher durch Stripe verarbeitet. Wir speichern deine Zahlungsinformationen nicht.",
    contactTitle: "Kontakt",
    contactLabel: "E-Mail",
    contactEmail: "hello@claudecodetips.com",
  },

  // Terms page
  terms: {
    pageTitle: "Nutzungsbedingungen - Claude Code Tips",
    pageDescription: "Nutzungsbedingungen von Claude Code Tips",
    title: "Nutzungsbedingungen",
    serviceTitle: "Service",
    serviceDescription:
      "Claude Code Tips bietet einen digitalen Leitfaden mit 51 Tipps zum Meistern von Claude Code. Nach dem Kauf erhaltst du lebenslangen Zugang.",
    paymentTitle: "Zahlung",
    paymentDescription: "Du kannst Zugang zum Leitfaden kaufen:",
    paymentOneTime: "Einmalige Zahlung von $29 USD",
    paymentStripe: "Alle Zahlungen sicher uber Stripe verarbeitet",
    refundTitle: "Ruckerstattungen",
    refundDescription:
      "7-tagige Geld-zuruck-Garantie. Wenn du nicht zufrieden bist, kontaktiere uns innerhalb von 7 Tagen fur eine vollstandige Ruckerstattung.",
    contactTitle: "Kontakt",
    contactLabel: "E-Mail",
    contactEmail: "hello@claudecodetips.com",
  },

  // Disclosure page (Commercial Disclosure)
  disclosure: {
    pageTitle: "Geschaeftliche Offenlegung - Claude Code Tips",
    pageDescription: "Geschaeftliche Offenlegung gemaess japanischem Recht",
    title: "Geschaeftliche Offenlegung",
    sellerName: "Verkaufer",
    sellerNameValue: "Claude Code Tips",
    address: "Adresse",
    addressValue: "Auf Anfrage offengelegt",
    phone: "Telefon",
    phoneValue: "Auf Anfrage offengelegt",
    email: "E-Mail",
    emailValue: "hello@claudecodetips.com",
    headOfOperations: "Betriebsleiter",
    headOfOperationsValue: "Auf Anfrage offengelegt",
    additionalFees: "Zusatzliche Gebuhren",
    additionalFeesValue: "Keine",
    refundPolicy: "Ruckerstattungsrichtlinie",
    refundServiceIssues: "Serviceprobleme",
    refundServiceIssuesValue:
      "Wenn der Service aufgrund von Systemproblemen nicht bereitgestellt wird, kontaktiere hello@claudecodetips.com. Wir werden prufen und eine vollstandige Ruckerstattung leisten.",
    refundCustomer: "Vom Kunden Initiiert",
    refundCustomerValue:
      "7-tagige Geld-zuruck-Garantie. Wenn du mit deinem Kauf nicht zufrieden bist, kontaktiere uns innerhalb von 7 Tagen fur eine vollstandige Ruckerstattung, ohne Fragen.",
    deliveryTime: "Lieferzeit",
    deliveryTimeValue: "Sofortiger Zugang nach Zahlung",
    paymentMethods: "Zahlungsmethoden",
    paymentMethodsValue: "Kreditkarten (Visa, Mastercard, American Express, JCB)",
    paymentPeriod: "Zahlungszeitraum",
    paymentPeriodValue: "Sofort bei Kreditkartenzahlung verarbeitet",
    price: "Preis",
    priceValue: "$29 USD",
    priceTaxNote: "*Preis enthalt alle anfallenden Steuern",
  },

  // Blog (UI strings only - post content in .svx files)
  blog: {
    pageTitle: "Blog - Claude Code Tips",
    pageDescription: "Tipps, Tutorials und Einblicke zu Claude Code vom Ersteller des 51 Tips Leitfadens.",
    title: "Blog",
    subtitle: "Tipps, Tutorials und Einblicke zu Claude Code",
    readMore: "Mehr lesen",
    publishedOn: "Veroffentlicht am",
    backToBlog: "Zuruck zum Blog",
    noPosts: "Noch keine Beitrage. Schau bald wieder vorbei!",
  },

  // Disclaimer for untranslated content
  disclaimer: {
    notTranslated: "Dieser Inhalt ist noch nicht in deiner Sprache verfugbar. Englische Version wird angezeigt.",
  },

  // FAQ page
  faq: {
    pageTitle: "FAQ - Claude Code Tips",
    pageDescription: "Haufig gestellte Fragen zum Claude Code Tips Leitfaden.",
    title: "Haufig Gestellte Fragen",
    items: [
      {
        q: "Welches Format hat der Leitfaden?",
        a: "Es ist ein web-basierter Leitfaden, auf den du von jedem Gerat zugreifen kannst. Kein PDF-Download notig.",
      },
      {
        q: "Brauche ich Claude Code Erfahrung?",
        a: "Grundlegende Vertrautheit hilft, aber der Leitfaden deckt alles von der Ersteinrichtung bis zu fortgeschrittenen Techniken ab.",
      },
      {
        q: "Was passiert, wenn Claude Code aktualisiert wird?",
        a:
          "Der Leitfaden konzentriert sich auf Workflows und Muster, die stabil bleiben. Wenn sich wichtige Funktionen andern, wird der Leitfaden ebenfalls aktualisiert.",
      },
    ],
  },
};
