export default {
	lang: 'es',
	langName: 'Español',
	siteBrand: 'Claude Code Tips',

	common: {
		tipPrefix: 'Consejo',
		tip: 'consejo',
		tips: 'consejos',
		previous: 'Anterior',
		next: 'Siguiente',
		loading: 'Cargando...',
		backArrow: '\u2190',
		forwardArrow: '\u2192'
	},

	error: {
		titleSuffix: 'Error',
		notFoundTitle: 'Página no encontrada',
		notFoundDescription: 'La página que buscas no existe.',
		genericTitle: 'Algo salió mal',
		genericDescription: 'Ocurrió un error inesperado.',
		goHome: 'Ir al inicio',
		langNotFound: 'Idioma no encontrado',
		blogNotFound: 'Artículo de blog no encontrado',
		sectionNotFound: 'Sección no encontrada',
		tipNotInSection: 'Consejo no encontrado en esta sección',
		tipNotFound: 'Consejo no encontrado',
		emailRequired: 'Se requiere correo electrónico',
		checkoutFailed: 'Error al crear la sesión de pago'
	},

	checkout: {
		productName: '50 Consejos para Dominar Claude Code',
		productDescription: 'Guía completa con los 50 consejos - acceso de por vida'
	},

	nav: {
		home: 'Inicio',
		guide: 'Guía',
		pricing: 'Precios',
		toggleMenu: 'Alternar menú'
	},

	landing: {
		hero: {
			eyebrow: 'De 6 meses de uso diario',
			title: 'Domina Claude Code en Días, No Meses',
			subtitle: 'Los flujos de trabajo, atajos y configuraciones que separan a los principiantes de los usuarios avanzados.',
			cta: 'Obtener la Guía - $29',
			guarantee: 'Garantia de devolucion de 14 dias'
		},
		social: {
			quote: 'Despues de mas de 500 horas construyendo productos reales con Claude Code, documente todos los patrones que realmente funcionan.',
			author: 'Danyel Koca',
			role: 'Ingeniero de Investigacion Aplicada en Sakana AI | Ex-Cientifico de Datos Senior en McKinsey',
			benefits: ['Salta meses de prueba y error', 'Configuraciones CLAUDE.md listas para copiar', 'Patrones que funcionan con cualquier proyecto']
		},
		curriculum: {
			title: 'Que Incluye',
			subtitle: '50 consejos en 12 secciones + contenido extra'
		},
		sample: {
			title: 'Ve la Calidad',
			subtitle: 'Lee este consejo gratis. Si te ayuda, imagina 49 mas.',
			readFull: 'Leer consejo completo gratis'
		},
		pricing: {
			title: 'Compra Única',
			price: '$29',
			subtitle: 'Acceso de por vida a los 50 consejos',
			guarantee: 'Garantia de devolucion de 14 dias. Sin preguntas.',
			features: [
				'50 consejos detallados con ejemplos de código',
				'Configuraciones CLAUDE.md para copiar y pegar',
				'12 secciones + contenido extra',
				'Actualizaciones futuras incluidas'
			],
			cta: 'Obtener Acceso Instantáneo',
			anchor: 'Sáltate meses de prueba y error.'
		},
		faq: {
			title: 'Preguntas',
			items: [
				{
					q: '¿En qué formato está la guía?',
					a: 'Es una guía basada en web a la que puedes acceder desde cualquier dispositivo. No se necesitan descargas de PDF.'
				},
				{
					q: '¿Necesito experiencia con Claude Code?',
					a: 'Una familiaridad básica ayuda, pero la guía cubre todo desde la configuración inicial hasta técnicas avanzadas.'
				},
				{
					q: '¿Qué pasa si Claude Code se actualiza?',
					a: 'La guía se enfoca en flujos de trabajo y patrones que permanecen estables. Cuando cambian las funciones principales, la guía también se actualiza.'
				}
			]
		}
	},

	guide: {
		title: 'Guía',
		overview: 'Los 50 Consejos',
		overviewDescription: 'Domina Claude Code con estos consejos probados en batalla de 6 meses de uso diario.',
		backToGuide: 'Volver a la Guía',
		free: 'Gratis',
		freePreview: 'Vista Previa Gratis',
		locked: 'Desbloquear para leer',
		lockedTitle: 'Este consejo está bloqueado',
		lockedDescription: 'Obtén acceso completo a los 50 consejos con una compra única.',
		unlockCta: 'Desbloquear Guía Completa - $29',
		unlockAll: 'Desbloquear los 50 Consejos'
	},

	sections: {
		title: 'Todas las Secciones',
		description: 'Explora 51 consejos organizados en 13 secciones. Cada sección se enfoca en un aspecto específico de dominar Claude Code.',
		tipsInSection: 'en esta sección',
		setup: { title: 'Configuración', short: 'Terminal, CLAUDE.md, atajos y comandos', long: 'Haz que Claude Code funcione óptimamente con la configuración correcta del terminal, configuración de CLAUDE.md y atajos de teclado esenciales que te ahorrarán horas.' },
		safety: { title: 'Seguridad', short: 'Git, permisos, protección de archivos sensibles', long: 'Protege tu código y secretos con prácticas adecuadas de git, permisos de archivos y reglas inteligentes de auto-aprobación que equilibran velocidad con seguridad.' },
		planning: { title: 'Planificación', short: 'Modo plan, planes detallados, pensamiento end-to-end', long: 'Domina el modo plan para pensar en tareas complejas antes de codificar. Aprende a crear planes detallados y accionables que Claude puede ejecutar perfectamente.' },
		prompting: { title: 'Prompting', short: 'Ultrathink, ser directo, exagerar importancia', long: 'Desbloquea todo el potencial de Claude con técnicas avanzadas de prompting. Desde ultrathink hasta orientación estratégica, aprende cómo obtener resultados consistentemente mejores.' },
		session: { title: 'Sesión', short: 'Gestión de contexto, reanudar, degradación de calidad', long: 'Gestiona el contexto efectivamente en sesiones de codificación largas. Sabe cuándo compactar, limpiar o empezar de nuevo para mantener el rendimiento óptimo de Claude.' },
		input: { title: 'Entrada', short: 'Imágenes, capturas de pantalla, mensajes de error', long: 'Aprovecha las capacidades multimodales de Claude con imágenes, capturas de pantalla y mensajes de error correctamente formateados para depuración más rápida.' },
		'multi-agent': { title: 'Multi-Agente', short: 'Agentes paralelos, worktrees, subagentes', long: 'Escala tu productividad con múltiples instancias de Claude. Aprende git worktrees, agentes paralelos y cuándo usar subagentes efectivamente.' },
		customization: { title: 'Personalización', short: 'Configuraciones jerárquicas, comandos, agentes personalizados', long: 'Adapta Claude Code a tu flujo de trabajo con archivos CLAUDE.md jerárquicos, comandos slash personalizados y agentes especializados.' },
		pitfalls: { title: 'Trampas', short: 'Comportamientos comunes de Claude a vigilar', long: 'Evita las trampas comunes que hacen tropezar a los usuarios de Claude Code. Desde sobre-ingeniería hasta fallos silenciosos, aprende qué vigilar.' },
		advanced: { title: 'Avanzado', short: 'Hooks, servidores MCP, skills, modo headless', long: 'Desbloquea funciones de usuario avanzado como hooks, servidores MCP, skills y modo headless para automatización e integración CI/CD.' },
		'use-cases': { title: 'Casos de Uso', short: 'Verificaciones de calidad, POCs, aprendizaje, commits', long: 'Aplicaciones del mundo real desde verificaciones de calidad de código hasta prototipado rápido. Ve cómo aplicar Claude Code efectivamente en tu trabajo diario.' },
		closing: { title: 'Cierre', short: 'Sabiduría final para encontrar tu flujo de trabajo', long: 'Sabiduría final para encontrar tu flujo de trabajo personal. No todas las funciones son para todos - enfócate en lo que funciona para ti.' },
		bonus: { title: 'Bonus', short: 'CLAUDE.md probado en batalla de 6 meses de uso diario', long: 'Un archivo CLAUDE.md completo y probado en batalla destilado de 6 meses de uso diario. Copia, adapta y hazlo tuyo.' }
	},

	paywall: { title: 'Desbloquear la Guía Completa', description: 'Obtén acceso a los 50 consejos por solo $29', cta: 'Obtener Acceso Completo' },
	success: { title: '¡Gracias!', description: 'Tu compra fue exitosa. Ahora tienes acceso completo a los 50 consejos.', cta: 'Empezar a Leer' },
	footer: { builtWith: 'Construido con Claude Code', guide: 'Guía', company: 'Empresa', legal: 'Legal', allTips: 'Los 50 Consejos', blog: 'Blog', about: 'Acerca de', privacy: 'Privacidad', terms: 'Términos', disclosure: 'Divulgación', faq: 'Preguntas Frecuentes' },

	about: {
		pageTitle: 'Acerca de - Claude Code Tips',
		pageDescription: 'Conoce a Danyel Koca, el creador de Claude Code Tips, y por qué existe esta guía.',
		heroTitle: 'Construido por un Profesional',
		heroSubtitle: 'Esta guía fue creada por alguien que usa Claude Code todos los días para construir productos reales.',
		storyTitle: 'La Historia',
		storyPara1: 'Soy Danyel Koca, Ingeniero de Investigación Aplicada en Sakana AI en Tokio. Antes de eso, pasé 3 años como Científico de Datos Senior en McKinsey & Company, construyendo soluciones AI/ML para clientes empresariales.',
		storyPara2: 'He estado usando Claude Code diariamente desde que se lanzó. Lo que comenzó como curiosidad se convirtió en obsesión - me encontré descubriendo nuevos patrones, atajos y configuraciones que mejoraron dramáticamente mi flujo de trabajo.',
		storyPara3: 'Después de 6 meses de uso diario, había acumulado docenas de consejos que desearía que alguien me hubiera dicho el primer día. Por eso creé esta guía.',
		whyTitle: 'Por Qué Existe Esta Guía',
		whyPara1: 'La mayoría de los tutoriales de Claude Code cubren lo básico: cómo instalarlo, cómo ejecutar comandos. Pero no cubren los patrones reales que te hacen productivo.',
		whyPara2: 'Esta guía es diferente. Cada consejo viene de experiencia real construyendo sistemas de producción. Sin teoría - solo lo que realmente funciona.',
		credentialsTitle: 'Credenciales',
		credentialsList: ['Ingeniero de Investigación Aplicada en Sakana AI', 'Ex-Científico de Datos Senior en McKinsey & Company', 'Graduado de la Universidad de Kioto (GPA 3.76/4)', 'Investigador publicado en IEEE', 'Trilingüe: Inglés, Japonés (JLPT N1), Turco'],
		contactTitle: 'Contacto',
		contactPara: '¿Tienes preguntas o comentarios? Me encantaría saber de ti.',
		contactLinks: { linkedin: 'LinkedIn', github: 'GitHub', website: 'Sitio Web' }
	},

	privacy: {
		pageTitle: 'Política de Privacidad - Claude Code Tips',
		pageDescription: 'Conoce cómo Claude Code Tips maneja tus datos y protege tu privacidad.',
		title: 'Política de Privacidad',
		lastUpdated: 'Última actualización: Diciembre 2024',
		introTitle: 'Nuestro Compromiso',
		introPara: 'Creemos en la recolección mínima de datos. Solo recolectamos lo absolutamente necesario para procesar tu compra y entregar la guía.',
		dataCollectedTitle: 'Datos que Recolectamos',
		dataCollectedPara: 'Cuando compras la guía, recolectamos:',
		dataCollectedList: ['Dirección de correo electrónico (para entregar acceso)', 'Información de pago (procesada de forma segura por Stripe)'],
		noTrackingTitle: 'Lo que No Hacemos',
		noTrackingList: ['Sin scripts de análisis o seguimiento', 'Sin cookies para publicidad', 'Sin vender o compartir tus datos con terceros', 'Sin seguimiento de comportamiento'],
		stripeTitle: 'Procesamiento de Pagos',
		stripePara: 'Todos los pagos son procesados de forma segura por Stripe. Nunca vemos ni almacenamos los detalles completos de tu tarjeta de crédito. La política de privacidad de Stripe aplica al procesamiento de pagos.',
		retentionTitle: 'Retención de Datos',
		retentionPara: 'Retenemos registros de compra para proporcionarte acceso continuo a la guía y manejar cualquier solicitud de soporte.',
		contactTitle: '¿Preguntas?',
		contactPara: 'Para cualquier pregunta relacionada con la privacidad, contáctanos en:',
		contactEmail: 'privacy@claudecodeguide.com'
	},

	terms: {
		pageTitle: 'Términos de Servicio - Claude Code Tips',
		pageDescription: 'Términos y condiciones para usar Claude Code Tips.',
		title: 'Términos de Servicio',
		lastUpdated: 'Última actualización: Diciembre 2024',
		serviceTitle: 'El Servicio',
		servicePara: 'Claude Code Tips proporciona una guía digital que contiene 50 consejos para dominar Claude Code. Al comprar, recibes acceso de por vida a la guía basada en web.',
		paymentTitle: 'Pago',
		paymentList: ['Pago único de $29 USD', 'Acceso de por vida a todos los consejos actuales y futuros', 'Sin cargos recurrentes ni suscripciones'],
		refundTitle: 'Política de Reembolso',
		refundPara: 'Ofrecemos una garantía de devolución de dinero de 14 días. Si no estás satisfecho con la guía, contáctanos dentro de los 14 días posteriores a la compra para un reembolso completo. Sin preguntas.',
		licenseTitle: 'Licencia',
		licensePara: 'Tu compra te otorga una licencia personal e intransferible para acceder y usar la guía. No puedes:',
		licenseList: ['Compartir tu cuenta o acceso con otros', 'Copiar, redistribuir o republicar el contenido de la guía', 'Usar el contenido con fines comerciales sin permiso'],
		disclaimerTitle: 'Descargo de Responsabilidad',
		disclaimerPara: 'Esta guía se proporciona "tal cual" basada en experiencia personal. Aunque nos esforzamos por la precisión, no garantizamos resultados específicos. Claude Code es un producto de Anthropic, y esta guía no está afiliada ni respaldada por Anthropic.',
		contactTitle: '¿Preguntas?',
		contactPara: 'Para cualquier pregunta sobre estos términos, contáctanos en:',
		contactEmail: 'support@claudecodeguide.com'
	},

	disclosure: {
		pageTitle: 'Divulgación - Claude Code Tips',
		pageDescription: 'Divulgaciones importantes sobre Claude Code Tips, incluyendo relaciones de afiliados e independencia editorial.',
		title: 'Divulgación',
		lastUpdated: 'Última actualización: Diciembre 2024',
		affiliationTitle: 'Sin Afiliación con Anthropic',
		affiliationPara: 'Esta guía es un producto independiente creado por Danyel Koca. NO está afiliada, respaldada ni patrocinada por Anthropic, la empresa detrás de Claude y Claude Code. Todas las opiniones y recomendaciones son únicamente del autor.',
		independenceTitle: 'Independencia Editorial',
		independencePara: 'Todo el contenido de esta guía refleja las opiniones genuinas del autor basadas en experiencia personal. Ninguna empresa u organización ha pagado por cobertura favorable ni ha influenciado el contenido.',
		aiAssistedTitle: 'Contenido Asistido por IA',
		aiAssistedPara: 'Esta guía fue creada con la asistencia de Claude Code mismo. El autor usa Claude Code diariamente y lo ha utilizado para ayudar a escribir, editar y refinar el contenido de la guía. Esto se divulga en el espíritu de la transparencia.',
		noSponsoredTitle: 'Sin Contenido Patrocinado',
		noSponsoredPara: 'La guía no contiene contenido patrocinado, colocaciones pagadas ni enlaces de afiliados. El único producto que se vende es la guía misma.',
		contactTitle: '¿Preguntas?',
		contactPara: 'Para cualquier pregunta sobre estas divulgaciones, contáctanos en:',
		contactEmail: 'hello@claudecodeguide.com'
	},

	blog: {
		pageTitle: 'Blog - Claude Code Tips',
		pageDescription: 'Consejos, tutoriales e insights sobre Claude Code del creador de la guía de 50 Tips.',
		title: 'Blog',
		subtitle: 'Consejos, tutoriales e insights sobre Claude Code',
		readMore: 'Leer más',
		publishedOn: 'Publicado el',
		backToBlog: 'Volver al Blog',
		noPosts: '¡Aún no hay publicaciones. ¡Vuelve pronto!'
	},

	disclaimer: {
		notTranslated: 'Este contenido aún no está disponible en tu idioma. Mostrando versión en inglés.'
	},

	faq: {
		pageTitle: 'Preguntas Frecuentes - Claude Code Tips',
		pageDescription: 'Preguntas frecuentes sobre la guia Claude Code Tips.',
		title: 'Preguntas Frecuentes',
		items: [
			{ q: 'En que formato esta la guia?', a: 'Es una guia basada en web a la que puedes acceder desde cualquier dispositivo. No se necesitan descargas de PDF.' },
			{ q: 'Necesito experiencia con Claude Code?', a: 'Una familiaridad basica ayuda, pero la guia cubre todo desde la configuracion inicial hasta tecnicas avanzadas.' },
			{ q: 'Que pasa si Claude Code se actualiza?', a: 'La guia se enfoca en flujos de trabajo y patrones que permanecen estables. Cuando cambian las funciones principales, la guia tambien se actualiza.' }
		]
	}
};
