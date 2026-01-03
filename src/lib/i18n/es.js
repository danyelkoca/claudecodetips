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

  theme: {
    light: "Modo claro",
    dark: "Modo oscuro",
  },

  landing: {
    hero: {
      eyebrow: "Del creador de Kumamap (389K usuarios)",
      title: "Domina Claude Code en Días, No Meses",
      subtitle: "Los flujos de trabajo, atajos y configuraciones que separan a los principiantes de los usuarios avanzados.",
      cta: "Obtener la Guía - $29",
      guarantee: "Garantia de devolucion de 7 dias",
      seeAll: "Ver los {count} consejos",
    },
    social: {
      quote: "Claude Code tiene una curva de aprendizaje pronunciada. Pasé cientos de horas descubriendo qué funciona y qué no. Esta guía es todo lo que deseaba tener desde el día uno.",
      author: "Danyel Koca",
      roleTitle: "Ingeniero de Investigación Aplicada en Sakana AI",
      roleSubtitle: "Anteriormente Científico de Datos Senior en McKinsey & Company",
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
      sections: "secciones",
    },
    sample: {
      title: "Prueba Antes de Comprar",
      subtitle: "Lee estos 4 consejos gratis. Si te ayudan, imagina 47 mas.",
      readFree: "Leer gratis",
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
        "Actualizado a enero 2026",
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
      "Soy Danyel Koca, Ingeniero de Investigación Aplicada en Sakana AI en Tokio, trabajando en soluciones de IA para servicios financieros. Antes de eso, pasé 3 años como Científico de Datos Senior en McKinsey & Company, construyendo soluciones AI/ML para clientes empresariales.",
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
      "Construyendo soluciones de IA para servicios financieros",
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
    notTranslated: "Estamos trabajando en traducir este contenido. Actualmente mostrando versión en inglés.",
    translationInProgress: "El contenido de la guía está actualmente en inglés. Estamos trabajando activamente en las traducciones.",
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
        q: "Que tan actualizada esta esta guia?",
        a: "Esta guia refleja las ultimas funciones y mejores practicas de Claude Code a enero de 2026.",
      },
    ],
  },

  // Tip titles and summaries
  tips: {
    "1": { title: "Usa la Terminal", summary: "Usar Claude Code en la terminal es la forma más flexible de interactuar con él." },
    "2": { title: "Crea CLAUDE.md", summary: "El manual de instrucciones de tu proyecto para Claude. El archivo más importante para un uso efectivo de Claude Code." },
    "3": { title: "Atajos y Comandos", summary: "Atajos de teclado y comandos esenciales para un uso eficiente de Claude Code." },
    "4": { title: "Usa Git Extensivamente", summary: "Git es tu red de seguridad cuando Claude hace cambios amplios. Haz commits frecuentes, revisa diffs y conoce tus comandos de recuperación." },
    "5": { title: "Protege Archivos Sensibles", summary: "Claude Code lee automáticamente archivos .env sin preguntar. Añade reglas deny para proteger secretos." },
    "6": { title: "Nunca Auto-Apruebes Comandos Bash", summary: "Auto-aprobar comandos bash es lo más peligroso que puedes hacer con Claude Code." },
    "7": { title: "Auto-Aprueba Acciones Seguras", summary: "Acelera tu flujo de trabajo auto-aprobando acciones de bajo riesgo como lecturas y búsquedas." },
    "8": { title: "Siempre Usa el Modo Plan", summary: "Presiona Shift+Tab dos veces para entrar en modo plan antes de tareas complejas. Claude piensa antes de codificar." },
    "9": { title: "Nunca Aceptes Planes Genéricos", summary: "Siempre asegúrate de que el plan sea detallado a nivel de código y factual." },
    "10": { title: "Valida Contra CLAUDE.md", summary: "Pide a Claude que valide su plan contra las reglas de CLAUDE.md. Claude olvida instrucciones a medida que las conversaciones crecen." },
    "11": { title: "Fuerza el Pensamiento de Extremo a Extremo", summary: "Haz que Claude trace el camino completo desde la acción hasta el resultado." },
    "12": { title: "Ultrathink Siempre Activo", summary: "Nunca dejes que Claude diga lo primero que se le ocurra. Déjalo pensar. SIEMPRE." },
    "13": { title: "Sé Directo", summary: "Sé explícito sobre cantidades. Claude tiende a elegir el camino fácil." },
    "14": { title: "Di Qué Hacer, No Qué NO Hacer", summary: "Siempre proporciona una alternativa cuando le dices a Claude qué no hacer." },
    "15": { title: "Exagera la Importancia", summary: "Claude calibra el esfuerzo según la importancia percibida. Alta importancia = trabajo exhaustivo." },
    "16": { title: "Trata a Claude como Herramienta, No Persona", summary: "No te preocupes por ser cortés. Claude se comporta mejor cuando eres directo." },
    "17": { title: "Claude Sobresale en Tareas de Asistente - Guíalo en Trabajos Estratégicos", summary: "Convierte tareas estratégicas en trabajos tipo asistente guiando a Claude a investigar primero." },
    "18": { title: "Una Tarea = Una Sesión", summary: "Cuando la tarea termine, ciérrala. Usa /clear para limpiar el contexto y empezar de nuevo." },
    "19": { title: "La Calidad Degrada en Sesiones Largas", summary: "La ventana de contexto se llena. Claude se vuelve más torpe. Sabe cuándo compactar o limpiar." },
    "20": { title: "Usa /resume para Continuar Sesiones", summary: "¿Claude se cayó? ¿Se cerró la terminal? Usa /resume para retomar donde lo dejaste." },
    "21": { title: "Nunca Confíes en 'Todo Listo'", summary: "Claude a menudo omite casos límite o salta pasos silenciosamente. Siempre verifica." },
    "22": { title: "Usa Imágenes/Capturas", summary: "Pega capturas directamente con Ctrl+V para bugs visuales. Una imagen vale mil tokens." },
    "23": { title: "Copia Mensajes de Error Textualmente", summary: "No parafrasees. Stack trace completo con números de línea." },
    "24": { title: "No Esperes Perfecto a la Primera", summary: "Deja que un agente codifique, usa otro agente para revisar el código." },
    "25": { title: "Múltiples Agentes para Trabajos Grandes", summary: "Lanza múltiples agentes con el mismo prompt. Para tareas grandes es raro que un agente lo haga bien." },
    "26": { title: "Divide Problemas Complejos en Pasos", summary: "Mejor tener una sesión por sub-tarea que una sesión masiva." },
    "27": { title: "Git Worktrees", summary: "Múltiples directorios de trabajo del mismo repo. Ejecuta Claude en cada uno." },
    "28": { title: "Subagentes - Usa con Precaución", summary: "Los resúmenes de subagentes pierden detalle. Para código crítico, haz que el agente principal lea archivos directamente." },
    "29": { title: "CLAUDE.md Jerárquico", summary: "CLAUDE.md en la raíz del proyecto + subdirectorios + global. Claude prioriza el más específico." },
    "30": { title: "Comandos Slash Personalizados", summary: "Crea flujos de trabajo reutilizables en la carpeta .claude/commands/." },
    "31": { title: "Agentes Personalizados", summary: "Crea agentes especializados con su propia ventana de contexto, prompt de sistema y restricciones de herramientas." },
    "32": { title: "Claude Inventa URLs", summary: "Alucina URLs que no existen. Siempre verifica antes de confiar en enlaces externos." },
    "33": { title: "Claude Sobre-Ingeniería", summary: "Pides una función simple, obtienes una clase abstracta con patrón factory." },
    "34": { title: "Claude Crea Duplicados", summary: "Claude no busca en tu código. Solo escribe código nuevo." },
    "35": { title: "Claude es Aditivo, Nunca Sustractivo", summary: "Claude solo añade código. Nunca elimina. Tienes que forzar la eliminación explícitamente." },
    "36": { title: "Claude es un YES MAN", summary: "Claude está de acuerdo con todo lo que dices. Dile que cuestione tus suposiciones." },
    "37": { title: "Claude Asume en Vez de Preguntar", summary: "¿Requisito ambiguo? Claude elige una interpretación y sigue adelante." },
    "38": { title: "Claude Lee Archivos Parcialmente", summary: "Claude lee el primer fragmento y empieza a trabajar. ¿Función crítica en la línea 400? La perdió." },
    "39": { title: "Claude Modifica Tests en Vez de Arreglar Código", summary: "Cuando el código está mal, Claude cambia las aserciones del test para que coincidan con el código malo." },
    "40": { title: "Hooks", summary: "Comandos shell que se ejecutan en eventos específicos como ediciones, uso de herramientas o inicio de sesión." },
    "41": { title: "Servidores MCP", summary: "Conecta herramientas externas - bases de datos, automatización de navegador, búsqueda de docs." },
    "42": { title: "Skills", summary: "Comportamientos auto-activados que se cargan automáticamente cuando son relevantes." },
    "43": { title: "GitHub Actions", summary: "Ejecuta /install-github-app para configurar Claude en tus repos." },
    "44": { title: "Modo Headless", summary: "Ejecuta Claude sin sesión interactiva. Para automatización y scripts." },
    "45": { title: "Ejecuta Chequeos de Calidad Periódicamente", summary: "Cada consulta = 1 sesión. Revisa textos hardcodeados, consistencia de diseño, etc." },
    "46": { title: "Aprovecha Claude Code para POCs", summary: "Perfecto para prototipado rápido. Para POCs, deja que Claude se desate." },
    "47": { title: "Claude es Genial para Boilerplate", summary: "Operaciones CRUD, formularios, archivos de config, patrones repetitivos. Deja que Claude trabaje." },
    "48": { title: "Usa Claude para Aprender", summary: "No solo dejes que Claude escriba código. Haz que explique." },
    "49": { title: "Claude para Mensajes de Commit", summary: "Deja que Claude escriba commits desde tu diff. Formato consistente, captura el 'por qué'." },
    "50": { title: "No Persigas Cada Nueva Característica", summary: "Claude Code tiene nuevas características cada semana. Enfócate en lo que funciona." },
    "51": { title: "CLAUDE.md Probado en Batalla", summary: "Un ejemplo real de CLAUDE.md destilado de 6 meses de lecciones, fallos y correcciones." },
  },
};
