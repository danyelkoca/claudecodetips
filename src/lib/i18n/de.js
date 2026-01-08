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

  // Theme toggle
  theme: {
    light: "Hellmodus",
    dark: "Dunkelmodus",
  },

  // Landing page
  landing: {
    hero: {
      eyebrow: "Vom Entwickler von Kumamap (389K Nutzer)",
      title: "Meistere Claude Code in Tagen, Nicht Monaten",
      subtitle: "Die Workflows, Shortcuts und Konfigurationen, die Anfanger von Power-Usern unterscheiden.",
      cta: "Leitfaden Holen - $29",
      guarantee: "7-Tage Geld-zuruck-Garantie",
      seeAll: "Alle {count} Tipps ansehen",
    },
    problem: {
      title: "Kommt dir bekannt vor?",
      subtitle: "Diese Frustrationen haben mich dazu gebracht, diesen Leitfaden zu schreiben",
      cards: [
        {
          title: "Claude ignoriert CLAUDE.md",
          description: "Deine benutzerdefinierten Anweisungen werden übersehen oder mitten im Gespräch vergessen",
        },
        {
          title: "Übertechnisiert alles",
          description: "Du fragst nach einer einfachen Funktion, bekommst 500 Zeilen Abstraktion",
        },
        {
          title: "Jedes Mal andere Ergebnisse",
          description: "Der gleiche Prompt, sehr unterschiedliche Ausgabequalität",
        },
        {
          title: "Sagt fertig aber ist kaputt",
          description: "Liefert selbstbewusst Code, der eigentlich nicht funktioniert",
        },
      ],
    },
    author: {
      sectionTitle: "Warum diesem Guide vertrauen?",
      quote: "Ich habe durch Hunderte Stunden Trial-and-Error herausgefunden, was mit Claude Code wirklich funktioniert. Dieser Guide ist alles, was ich gelernt habe.",
    },
    experience: {
      title: "Die Erfahrung Hinter Diesem Guide",
      subtitle: "Ich habe diese Probleme nicht nur gelesen, ich habe sie erlebt.",
      conclusion: "2,7 Milliarden Tokens an hart erkämpften Lektionen, verdichtet in 51 praktische Tipps.",
      stats: {
        tokens: "2.772.274.103",
        cost: "2.288,41 $",
        period: "28. Nov. 2025 - 5. Jan. 2026",
      },
    },
    social: {
      quote: "Claude Code hat eine steile Lernkurve. Ich habe Hunderte von Stunden damit verbracht herauszufinden, was funktioniert und was nicht. Dieser Leitfaden ist alles, was ich mir am ersten Tag gewünscht hätte.",
      author: "Danyel Koca",
      roleTitle: "Applied Research Engineer bei Sakana AI",
      roleSubtitle: "Zuvor Senior Data Scientist bei McKinsey & Company",
    },
    caseStudy: {
      title: "Beweis, dass es Funktioniert",
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
      sections: "Abschnitte",
    },
    sample: {
      title: "Erst Testen, Dann Kaufen",
      subtitle: "Lesen Sie diese 4 Tipps kostenlos. Wenn sie helfen, stellen Sie sich 47 weitere vor.",
      readFree: "Kostenlos lesen",
    },
    pricing: {
      title: "Einmaliger Kauf",
      price: "$29",
      subtitle: "Lebenslanger Zugang zu allen 51 Tipps",
      features: [
        "51 detaillierte Tipps mit Code-Beispielen",
        "Kopierfertige CLAUDE.md Configs",
        "13 organisierte Abschnitte",
        "Aktuell Stand Januar 2026",
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
    product: "Produkt",
    company: "Unternehmen",
    legal: "Rechtliches",
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
      "Ich bin Danyel Koca, Applied Research Engineer bei Sakana AI in Tokio, arbeite an KI-Losungen fur Finanzdienstleistungen. Davor war ich 3 Jahre lang Senior Data Scientist bei McKinsey & Company und habe AI/ML-Losungen fur Unternehmenskunden gebaut.",
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
      "Entwicklung von KI-Losungen fur Finanzdienstleistungen",
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
    notTranslated: "Wir arbeiten an der Ubersetzung dieses Inhalts. Derzeit wird die englische Version angezeigt.",
    translationInProgress: "Der Leitfadeninhalt ist derzeit auf Englisch. Wir arbeiten aktiv an Ubersetzungen.",
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
        q: "Wie aktuell ist dieser Leitfaden?",
        a: "Dieser Leitfaden spiegelt die neuesten Claude Code-Funktionen und Best Practices von Januar 2026 wider.",
      },
    ],
  },

  // Tip titles and summaries
  tips: {
    "1": { title: "Terminal verwenden", summary: "Claude Code im Terminal zu verwenden ist der flexibelste Weg, damit zu interagieren." },
    "2": { title: "CLAUDE.md erstellen", summary: "Das Handbuch deines Projekts für Claude. Die wichtigste Datei für effektive Claude Code Nutzung." },
    "3": { title: "Tastenkürzel & Befehle", summary: "Essentielle Tastenkürzel und Befehle für effiziente Claude Code Nutzung." },
    "4": { title: "Git intensiv nutzen", summary: "Git ist dein Sicherheitsnetz wenn Claude umfangreiche Änderungen macht. Häufig committen, Diffs prüfen, Recovery-Befehle kennen." },
    "5": { title: "Sensible Dateien schützen", summary: "Claude Code liest automatisch .env-Dateien ohne zu fragen. Füge deny-Regeln hinzu um Geheimnisse zu schützen." },
    "6": { title: "Niemals Bash-Befehle auto-genehmigen", summary: "Bash-Befehle automatisch zu genehmigen ist das Gefährlichste was du mit Claude Code tun kannst." },
    "7": { title: "Sichere Aktionen auto-genehmigen", summary: "Beschleunige deinen Workflow durch Auto-Genehmigung von risikoarmen Aktionen wie Lesen und Suchen." },
    "8": { title: "Immer Plan-Modus verwenden", summary: "Drücke zweimal Shift+Tab um vor komplexen Aufgaben in den Plan-Modus zu wechseln. Claude denkt vor dem Coden." },
    "9": { title: "Niemals generische Pläne akzeptieren", summary: "Stelle immer sicher, dass der Plan auf Code-Ebene detailliert und faktisch ist." },
    "10": { title: "Gegen CLAUDE.md validieren", summary: "Bitte Claude seinen Plan gegen CLAUDE.md-Regeln zu validieren. Claude vergisst Anweisungen wenn Gespräche länger werden." },
    "11": { title: "End-to-End Denken erzwingen", summary: "Lass Claude den vollständigen Pfad von Aktion zu Ergebnis nachverfolgen." },
    "12": { title: "Ultrathink immer aktiv", summary: "Lass Claude niemals das Erste sagen was ihm einfällt. Lass ihn denken. IMMER." },
    "13": { title: "Direkt sein", summary: "Sei explizit bei Mengen. Claude neigt dazu den einfachen Weg zu wählen." },
    "14": { title: "Sage was zu tun ist, nicht was NICHT", summary: "Biete immer eine Alternative wenn du Claude sagst was er nicht tun soll." },
    "15": { title: "Wichtigkeit übertreiben", summary: "Claude kalibriert den Aufwand nach wahrgenommener Wichtigkeit. Hohe Wichtigkeit = gründliche Arbeit." },
    "16": { title: "Claude als Werkzeug behandeln, nicht als Person", summary: "Mach dir keine Sorgen höflich zu sein. Claude verhält sich besser wenn du direkt bist." },
    "17": { title: "Claude glänzt bei Assistenten-Aufgaben - Führe ihn bei strategischen Jobs", summary: "Wandle strategische Aufgaben in Assistenten-artige Jobs um indem du Claude zuerst recherchieren lässt." },
    "18": { title: "Eine Aufgabe = Eine Session", summary: "Wenn die Aufgabe endet, schließe sie. Nutze /clear um den Kontext zu löschen und neu zu starten." },
    "19": { title: "Qualität sinkt in langen Sessions", summary: "Das Kontextfenster füllt sich. Claude wird schlechter. Wisse wann kompaktieren oder löschen." },
    "20": { title: "/resume zum Fortsetzen von Sessions", summary: "Claude abgestürzt? Terminal geschlossen? Nutze /resume um dort weiterzumachen wo du aufgehört hast." },
    "21": { title: "Niemals 'Alles fertig' vertrauen", summary: "Claude übersieht oft Randfälle oder überspringt stillschweigend Schritte. Immer verifizieren." },
    "22": { title: "Bilder/Screenshots verwenden", summary: "Füge Screenshots direkt mit Ctrl+V für visuelle Bugs ein. Ein Bild ist tausend Tokens wert." },
    "23": { title: "Fehlermeldungen wörtlich kopieren", summary: "Nicht umschreiben. Vollständiger Stack-Trace mit Zeilennummern." },
    "24": { title: "Nicht Perfektion beim ersten Mal erwarten", summary: "Lass einen Agenten coden, nutze einen anderen um den Code zu prüfen." },
    "25": { title: "Mehrere Agenten für große Jobs", summary: "Starte mehrere Agenten mit demselben Prompt. Bei großen Aufgaben schafft es selten ein Agent richtig." },
    "26": { title: "Komplexe Probleme in Schritte aufteilen", summary: "Besser eine Session pro Teilaufgabe als eine massive Session." },
    "27": { title: "Git Worktrees", summary: "Mehrere Arbeitsverzeichnisse vom selben Repo. Führe Claude in jedem aus." },
    "28": { title: "Subagenten - Mit Vorsicht verwenden", summary: "Subagenten-Zusammenfassungen verlieren Details. Für kritischen Code lass den Hauptagenten Dateien direkt lesen." },
    "29": { title: "Hierarchische CLAUDE.md", summary: "CLAUDE.md im Projekt-Root + Unterverzeichnisse + global. Claude priorisiert die spezifischste." },
    "30": { title: "Benutzerdefinierte Slash-Befehle", summary: "Erstelle wiederverwendbare Workflows im .claude/commands/ Ordner." },
    "31": { title: "Benutzerdefinierte Agenten", summary: "Erstelle spezialisierte Agenten mit eigenem Kontextfenster, System-Prompt und Tool-Einschränkungen." },
    "32": { title: "Claude erfindet URLs", summary: "Halluziniert URLs die nicht existieren. Immer verifizieren bevor du externen Links vertraust." },
    "33": { title: "Claude überentwickelt", summary: "Frag nach einer einfachen Funktion, bekomme eine abstrakte Klasse mit Factory-Pattern." },
    "34": { title: "Claude erstellt Duplikate", summary: "Claude durchsucht nicht deine Codebasis. Er schreibt einfach neuen Code." },
    "35": { title: "Claude ist additiv, nie subtraktiv", summary: "Claude fügt nur Code hinzu. Er entfernt nie. Du musst das Löschen explizit erzwingen." },
    "36": { title: "Claude ist ein YES MAN", summary: "Claude stimmt allem zu was du sagst. Sag ihm er soll deine Annahmen hinterfragen." },
    "37": { title: "Claude nimmt an statt zu fragen", summary: "Unklare Anforderung? Claude wählt eine Interpretation und macht weiter." },
    "38": { title: "Claude liest Dateien nur teilweise", summary: "Claude liest den ersten Block und beginnt zu arbeiten. Kritische Funktion in Zeile 400? Verpasst." },
    "39": { title: "Claude ändert Tests statt Code zu reparieren", summary: "Wenn Code falsch ist, ändert Claude Test-Assertions um zum schlechten Code zu passen." },
    "40": { title: "Hooks", summary: "Shell-Befehle die bei bestimmten Ereignissen wie Bearbeitungen, Tool-Nutzung oder Session-Start ausgeführt werden." },
    "41": { title: "MCP-Server", summary: "Verbinde externe Tools - Datenbanken, Browser-Automatisierung, Docs-Suche." },
    "42": { title: "Skills", summary: "Auto-ausgelöste Verhaltensweisen die automatisch laden wenn relevant." },
    "43": { title: "GitHub Actions", summary: "Führe /install-github-app aus um Claude für deine Repos einzurichten." },
    "44": { title: "Headless-Modus", summary: "Führe Claude ohne interaktive Session aus. Für Automatisierung und Skripte." },
    "45": { title: "Qualitätsprüfungen regelmäßig durchführen", summary: "Jede Abfrage = 1 Session. Prüfe auf hartcodierte Texte, Design-Konsistenz, etc." },
    "46": { title: "Claude Code für POCs nutzen", summary: "Perfekt für schnelles Prototyping. Für POCs lass Claude loslegen." },
    "47": { title: "Claude ist super bei Boilerplate", summary: "CRUD-Operationen, Formulare, Config-Dateien, repetitive Patterns. Lass Claude machen." },
    "48": { title: "Claude zum Lernen nutzen", summary: "Lass Claude nicht nur Code schreiben. Lass ihn erklären." },
    "49": { title: "Claude für Commit-Nachrichten", summary: "Lass Claude Commits aus deinem Diff schreiben. Konsistentes Format, erfasst das 'Warum'." },
    "50": { title: "Nicht jedem neuen Feature hinterherjagen", summary: "Claude Code bekommt jede Woche neue Features. Konzentriere dich auf das was funktioniert." },
    "51": { title: "Kampferprobte CLAUDE.md", summary: "Ein reales CLAUDE.md-Beispiel destilliert aus 6 Monaten Lektionen, Fehlern und Korrekturen." },
  },
};
