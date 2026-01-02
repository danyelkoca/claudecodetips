export default {
  lang: "es",
  langName: "Español",
  siteBrand: "Claude Code Tips",

  common: {
    tipPrefix: "Consejo",
    tip: "consejo",
    tips: "consejos",
    previous: "Anterior",
    next: "Siguiente",
    loading: "Cargando...",
    backArrow: "\u2190",
    forwardArrow: "\u2192",
    goToSlide: "Ir a diapositiva",
  },

  error: {
    titleSuffix: "Error",
    notFoundTitle: "Página no encontrada",
    notFoundDescription: "La página que buscas no existe.",
    genericTitle: "Algo salió mal",
    genericDescription: "Ocurrió un error inesperado.",
    goHome: "Ir al inicio",
    langNotFound: "Idioma no encontrado",
    blogNotFound: "Artículo de blog no encontrado",
    sectionNotFound: "Sección no encontrada",
    tipNotInSection: "Consejo no encontrado en esta sección",
    tipNotFound: "Consejo no encontrado",
  },

  checkout: {
    productName: "51 Consejos para Dominar Claude Code",
    productDescription: "Guía completa con los 51 consejos - acceso de por vida",
  },

  nav: {
    guide: "Guía",
    toggleMenu: "Alternar menú",
  },

  landing: {
    hero: {
      eyebrow: "Del creador de Kumamap (389K usuarios)",
      title: "Domina Claude Code en Días, No Meses",
      subtitle: "Los flujos de trabajo, atajos y configuraciones que separan a los principiantes de los usuarios avanzados.",
      cta: "Obtener la Guía - $29",
      guarantee: "Garantia de devolucion de 7 dias",
    },
    social: {
      quote: "Claude Code tiene una curva de aprendizaje pronunciada. Pasé cientos de horas descubriendo qué funciona y qué no. Esta guía es todo lo que deseaba tener desde el día uno.",
      author: "Danyel Koca",
      role: "Ingeniero de IA en Sakana AI | Anteriormente Científico de Datos Senior en McKinsey & Company",
    },
    caseStudy: {
      title: "Construido con Claude Code",
      description: "Construí Kumamap — el rastreador de osos #1 de Japón — completamente con Claude Code. Esta guía te enseña los patrones exactos que usé.",
      cta: "Ver el producto en vivo",
      stats: {
        views: { value: "1.3 millones", label: "vistas de página" },
        users: { value: "389,000", label: "usuarios" },
        time: { value: "3 meses", label: "para construir" },
      },
    },
    curriculum: {
      title: "Que Incluye",
      subtitle: "51 consejos en 13 secciones",
      viewAll: "Ver los {count} consejos",
    },
    sample: {
      title: "Prueba Antes de Comprar",
      subtitle: "Lee estos 4 consejos gratis. Si te ayudan, imagina 47 mas.",
    },
    pricing: {
      title: "Compra Única",
      price: "$29",
      subtitle: "Acceso de por vida a los 51 consejos",
      guarantee: "Garantia de devolucion de 7 dias. Sin preguntas.",
      features: [
        "51 consejos detallados con ejemplos de código",
        "Configuraciones CLAUDE.md para copiar y pegar",
        "13 secciones organizadas",
        "Actualizaciones futuras incluidas",
      ],
      cta: "Obtener Acceso Instantáneo",
    },
    checkoutCanceled: "Pago cancelado. Listo cuando lo estés.",
  },

  // Pricing page
  pricingPage: {
    pageTitle: "Pago - Claude Code Tips",
    pageDescription: "Acceso instantáneo a los 51 consejos por $29",
    emailLabel: "Correo electrónico",
    emailPlaceholder: "tu@ejemplo.com",
    cta: "Continuar al pago",
    processing: "Procesando...",
    errors: {
      emailRequired: "Por favor ingresa tu correo electrónico.",
      invalidEmail: "Por favor ingresa una dirección de correo electrónico válida.",
      checkoutFailed: "Algo salió mal. Por favor intenta de nuevo.",
      rateLimitExceeded: "Demasiados intentos. Intenta en una hora.",
    },
  },

  guide: {
    title: "Guía",
    overview: "Los 51 Consejos",
    overviewDescription: "Domina Claude Code con estos consejos probados en batalla de 6 meses de uso diario.",
    backToGuide: "Volver a la Guía",
    free: "Gratis",
    freePreview: "Vista Previa Gratis",
    locked: "Desbloquear para leer",
    lockedTitle: "Este consejo está bloqueado",
    lockedDescription: "Obtén acceso completo a los 51 consejos con una compra única.",
    unlockCta: "Desbloquear Guía Completa - $29",
    unlockAll: "Desbloquear los 51 Consejos",
    sections: "secciones",
    freeLabel: "vistas previas gratis",
    whatsIncluded: "Qué incluye",
    detailedTips: "consejos detallados",
    organizedSections: "secciones organizadas",
    freePreviews: "vistas previas gratis",
    startReading: "Empezar a Leer",
    jumpTo: "Ir a Sección",
  },

  sections: {
    setup: {
      title: "Configuración",
      short: "Terminal, CLAUDE.md, atajos y comandos",
      long:
        "Haz que Claude Code funcione óptimamente con la configuración correcta del terminal, configuración de CLAUDE.md y atajos de teclado esenciales que te ahorrarán horas.",
    },
    safety: {
      title: "Seguridad",
      short: "Git, permisos, protección de archivos sensibles",
      long:
        "Protege tu código y secretos con prácticas adecuadas de git, permisos de archivos y reglas inteligentes de auto-aprobación que equilibran velocidad con seguridad.",
    },
    planning: {
      title: "Planificación",
      short: "Modo plan, planes detallados, pensamiento end-to-end",
      long:
        "Domina el modo plan para pensar en tareas complejas antes de codificar. Aprende a crear planes detallados y accionables que Claude puede ejecutar perfectamente.",
    },
    prompting: {
      title: "Prompting",
      short: "Ultrathink, ser directo, exagerar importancia",
      long:
        "Desbloquea todo el potencial de Claude con técnicas avanzadas de prompting. Desde ultrathink hasta orientación estratégica, aprende cómo obtener resultados consistentemente mejores.",
    },
    session: {
      title: "Sesión",
      short: "Gestión de contexto, reanudar, degradación de calidad",
      long:
        "Gestiona el contexto efectivamente en sesiones de codificación largas. Sabe cuándo compactar, limpiar o empezar de nuevo para mantener el rendimiento óptimo de Claude.",
    },
    input: {
      title: "Entrada",
      short: "Imágenes, capturas de pantalla, mensajes de error",
      long:
        "Aprovecha las capacidades multimodales de Claude con imágenes, capturas de pantalla y mensajes de error correctamente formateados para depuración más rápida.",
    },
    "multi-agent": {
      title: "Multi-Agente",
      short: "Agentes paralelos, worktrees, subagentes",
      long:
        "Escala tu productividad con múltiples instancias de Claude. Aprende git worktrees, agentes paralelos y cuándo usar subagentes efectivamente.",
    },
    customization: {
      title: "Personalización",
      short: "Configuraciones jerárquicas, comandos, agentes personalizados",
      long: "Adapta Claude Code a tu flujo de trabajo con archivos CLAUDE.md jerárquicos, comandos slash personalizados y agentes especializados.",
    },
    pitfalls: {
      title: "Trampas",
      short: "Comportamientos comunes de Claude a vigilar",
      long:
        "Evita las trampas comunes que hacen tropezar a los usuarios de Claude Code. Desde sobre-ingeniería hasta fallos silenciosos, aprende qué vigilar.",
    },
    advanced: {
      title: "Avanzado",
      short: "Hooks, servidores MCP, skills, modo headless",
      long: "Desbloquea funciones de usuario avanzado como hooks, servidores MCP, skills y modo headless para automatización e integración CI/CD.",
    },
    "use-cases": {
      title: "Casos de Uso",
      short: "Verificaciones de calidad, POCs, aprendizaje, commits",
      long:
        "Aplicaciones del mundo real desde verificaciones de calidad de código hasta prototipado rápido. Ve cómo aplicar Claude Code efectivamente en tu trabajo diario.",
    },
    closing: {
      title: "Cierre",
      short: "Sabiduría final para encontrar tu flujo de trabajo",
      long:
        "Sabiduría final para encontrar tu flujo de trabajo personal. No todas las funciones son para todos - enfócate en lo que funciona para ti.",
    },
    bonus: {
      title: "Bonus",
      short: "CLAUDE.md probado en batalla de 6 meses de uso diario",
      long: "Un archivo CLAUDE.md completo y probado en batalla destilado de 6 meses de uso diario. Copia, adapta y hazlo tuyo.",
    },
  },

  paywall: {
    title: "Desbloquear la Guía Completa",
    description: "Obtén acceso a los 51 consejos por solo $29",
    cta: "Obtener Acceso Completo",
    alreadyPurchased: "¿Ya compraste?",
    restoreAccess: "Restaurar acceso",
  },

  success: {
    title: "¡Gracias!",
    description: "Tu compra fue exitosa. Ahora tienes acceso completo a los 51 consejos.",
    cta: "Empezar a Leer",
  },

  restore: {
    pageTitle: "Restaurar Acceso - Claude Code Tips",
    title: "Restaura tu Acceso",
    description: "Ingresa el correo que usaste al comprar para restaurar el acceso en este dispositivo.",
    emailLabel: "Correo de compra",
    emailPlaceholder: "tu@ejemplo.com",
    cta: "Restaurar Acceso",
    successMessage: "¡Acceso restaurado exitosamente!",
    redirecting: "Redirigiendo a la guía...",
    noAccount: "¿Aún no has comprado?",
    buyNow: "Comprar Ahora",
    errors: {
      restoreFailed: "Error al restaurar acceso. Intenta de nuevo.",
      emailRequired: "Se requiere correo electrónico.",
      invalidEmail: "Por favor ingresa un correo electrónico válido.",
      rateLimitExceeded: "Demasiados intentos. Intenta en una hora.",
    },
  },

  footer: {
    builtWith: "Construido con Claude Code",
    guide: "Guía",
    company: "Empresa",
    legal: "Legal",
    allTips: "Los 51 Consejos",
    faq: "Preguntas Frecuentes",
    restoreAccess: "Restaurar acceso",
    pricing: "Precios",
    blog: "Blog",
    about: "Acerca de",
    contact: "Contacto",
    privacy: "Privacidad",
    terms: "Términos",
    disclosure: "Divulgación",
  },

  // Contact page
  contact: {
    pageTitle: "Contacto - Claude Code Tips",
    pageDescription: "Ponte en contacto con preguntas o comentarios",
    title: "Contáctanos",
    description: "¿Tienes preguntas o comentarios? Me encantaría saber de ti.",
    nameLabel: "Nombre",
    namePlaceholder: "Tu nombre",
    emailLabel: "Correo electrónico",
    emailPlaceholder: "tu@ejemplo.com",
    messageLabel: "Mensaje",
    messagePlaceholder: "Tu mensaje...",
    cta: "Enviar mensaje",
    sent: "Enviado",
    successMessage: "¡Mensaje enviado con éxito! Te responderé pronto.",
    errors: {
      nameRequired: "Por favor ingresa tu nombre.",
      emailRequired: "Por favor ingresa tu correo electrónico.",
      invalidEmail: "Por favor ingresa una dirección de correo electrónico válida.",
      messageRequired: "Por favor ingresa un mensaje (al menos 10 caracteres).",
      rateLimitExceeded: "Demasiados intentos. Intenta en una hora.",
      submitFailed: "Algo salió mal. Por favor intenta de nuevo.",
    },
  },

  about: {
    pageTitle: "Acerca de - Claude Code Tips",
    pageDescription: "Conoce a Danyel Koca, el creador de Claude Code Tips, y por qué existe esta guía.",
    heroTitle: "Construido por un Profesional",
    heroSubtitle: "Esta guía fue creada por alguien que usa Claude Code todos los días para construir productos reales.",
    storyTitle: "La Historia",
    storyPara1:
      "Soy Danyel Koca, Ingeniero de Investigación Aplicada en Sakana AI en Tokio. Antes de eso, pasé 3 años como Científico de Datos Senior en McKinsey & Company, construyendo soluciones AI/ML para clientes empresariales.",
    storyPara2:
      "He estado usando Claude Code diariamente desde que se lanzó. Lo que comenzó como curiosidad se convirtió en obsesión - me encontré descubriendo nuevos patrones, atajos y configuraciones que mejoraron dramáticamente mi flujo de trabajo.",
    storyPara3:
      "Después de 6 meses de uso diario, había acumulado docenas de consejos que desearía que alguien me hubiera dicho el primer día. Por eso creé esta guía.",
    whyTitle: "Por Qué Existe Esta Guía",
    whyPara1:
      "La mayoría de los tutoriales de Claude Code cubren lo básico: cómo instalarlo, cómo ejecutar comandos. Pero no cubren los patrones reales que te hacen productivo.",
    whyPara2:
      "Esta guía es diferente. Cada consejo viene de experiencia real construyendo sistemas de producción. Sin teoría - solo lo que realmente funciona.",
    credentialsTitle: "Credenciales",
    credentialsList: [
      "Ingeniero de Investigación Aplicada en Sakana AI",
      "Ex-Científico de Datos Senior en McKinsey & Company",
      "Graduado de la Universidad de Kioto (GPA 3.76/4)",
      "Investigador publicado en IEEE",
      "Trilingüe: Inglés, Japonés (JLPT N1), Turco",
    ],
    contactTitle: "Contacto",
    contactPara: "¿Tienes preguntas o comentarios? Me encantaría saber de ti.",
    contactLinks: { linkedin: "LinkedIn", github: "GitHub", website: "Sitio Web" },
  },

  privacy: {
    pageTitle: "Política de Privacidad - Claude Code Tips",
    pageDescription: "Política de privacidad y manejo de datos de Claude Code Tips",
    title: "Política de Privacidad",
    dataCollectedTitle: "Datos que Recolectamos",
    dataCollectedDescription: "Cuando compras la guía:",
    dataEmail: "Correo electrónico (para entrega y acceso)",
    paymentTitle: "Procesamiento de Pagos",
    paymentDescription: "Todos los pagos son procesados de forma segura por Stripe. No almacenamos tu información de pago.",
    contactTitle: "Contacto",
    contactLabel: "Correo",
    contactEmail: "hello@claudecodetips.com",
  },

  terms: {
    pageTitle: "Términos de Servicio - Claude Code Tips",
    pageDescription: "Términos de servicio de Claude Code Tips",
    title: "Términos de Servicio",
    serviceTitle: "Servicio",
    serviceDescription:
      "Claude Code Tips proporciona una guía digital que contiene 51 consejos para dominar Claude Code. Al comprar, recibes acceso de por vida.",
    paymentTitle: "Pago",
    paymentDescription: "Puedes comprar acceso a la guía:",
    paymentOneTime: "Pago único de $29 USD",
    paymentStripe: "Todos los pagos procesados de forma segura a través de Stripe",
    refundTitle: "Reembolsos",
    refundDescription: "Garantía de devolución de 7 días. Si no estás satisfecho, contáctanos dentro de 7 días para un reembolso completo.",
    contactTitle: "Contacto",
    contactLabel: "Correo",
    contactEmail: "hello@claudecodetips.com",
  },

  disclosure: {
    pageTitle: "Divulgación Comercial - Claude Code Tips",
    pageDescription: "Divulgación comercial según lo requerido por la ley japonesa",
    title: "Divulgación Comercial",
    sellerName: "Vendedor",
    sellerNameValue: "Claude Code Tips",
    address: "Dirección",
    addressValue: "Disponible bajo solicitud",
    phone: "Teléfono",
    phoneValue: "Disponible bajo solicitud",
    email: "Correo",
    emailValue: "hello@claudecodetips.com",
    headOfOperations: "Jefe de Operaciones",
    headOfOperationsValue: "Disponible bajo solicitud",
    additionalFees: "Cargos Adicionales",
    additionalFeesValue: "Ninguno",
    refundPolicy: "Política de Reembolso",
    refundServiceIssues: "Problemas de Servicio",
    refundServiceIssuesValue:
      "Si el servicio no se proporciona debido a problemas del sistema, contacta a hello@claudecodetips.com. Revisaremos y proporcionaremos un reembolso completo.",
    refundCustomer: "Iniciado por el Cliente",
    refundCustomerValue:
      "Garantía de devolución de 7 días. Si no estás satisfecho con tu compra, contáctanos dentro de 7 días para un reembolso completo, sin preguntas.",
    deliveryTime: "Tiempo de Entrega",
    deliveryTimeValue: "Acceso instantáneo después del pago",
    paymentMethods: "Métodos de Pago",
    paymentMethodsValue: "Tarjetas de crédito (Visa, Mastercard, American Express, JCB)",
    paymentPeriod: "Período de Pago",
    paymentPeriodValue: "Procesado inmediatamente al pagar con tarjeta de crédito",
    price: "Precio",
    priceValue: "$29 USD",
    priceTaxNote: "*El precio incluye todos los impuestos aplicables",
  },

  blog: {
    pageTitle: "Blog - Claude Code Tips",
    pageDescription: "Consejos, tutoriales e insights sobre Claude Code del creador de la guía de 51 Tips.",
    title: "Blog",
    subtitle: "Consejos, tutoriales e insights sobre Claude Code",
    readMore: "Leer más",
    publishedOn: "Publicado el",
    backToBlog: "Volver al Blog",
    noPosts: "¡Aún no hay publicaciones. ¡Vuelve pronto!",
  },

  disclaimer: {
    notTranslated: "Este contenido aún no está disponible en tu idioma. Mostrando versión en inglés.",
  },

  faq: {
    pageTitle: "Preguntas Frecuentes - Claude Code Tips",
    pageDescription: "Preguntas frecuentes sobre la guia Claude Code Tips.",
    title: "Preguntas Frecuentes",
    items: [
      {
        q: "En que formato esta la guia?",
        a: "Es una guia basada en web a la que puedes acceder desde cualquier dispositivo. No se necesitan descargas de PDF.",
      },
      {
        q: "Necesito experiencia con Claude Code?",
        a: "Una familiaridad basica ayuda, pero la guia cubre todo desde la configuracion inicial hasta tecnicas avanzadas.",
      },
      {
        q: "Que pasa si Claude Code se actualiza?",
        a:
          "La guia se enfoca en flujos de trabajo y patrones que permanecen estables. Cuando cambian las funciones principales, la guia tambien se actualiza.",
      },
    ],
  },
};
