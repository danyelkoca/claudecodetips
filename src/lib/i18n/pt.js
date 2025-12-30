export default {
	// Meta
	lang: 'pt',
	langName: 'Portugues',
	siteBrand: 'Claude Code Tips',

	// Common strings
	common: {
		tipPrefix: 'Dica',
		tip: 'dica',
		tips: 'dicas',
		previous: 'Anterior',
		next: 'Proximo',
		loading: 'Carregando...',
		backArrow: '\u2190',
		forwardArrow: '\u2192'
	},

	// Error page
	error: {
		titleSuffix: 'Erro',
		notFoundTitle: 'Pagina Nao Encontrada',
		notFoundDescription: 'A pagina que voce esta procurando nao existe.',
		genericTitle: 'Algo Deu Errado',
		genericDescription: 'Ocorreu um erro inesperado.',
		goHome: 'Ir para o Inicio',
		// Server error keys (backend sends key, UI translates)
		langNotFound: 'Idioma nao encontrado',
		blogNotFound: 'Post do blog nao encontrado',
		sectionNotFound: 'Secao nao encontrada',
		tipNotInSection: 'Dica nao encontrada nesta secao',
		tipNotFound: 'Dica nao encontrada',
		emailRequired: 'Email e obrigatorio',
		checkoutFailed: 'Falha ao criar sessao de checkout'
	},

	// Checkout
	checkout: {
		productName: '50 Dicas para Dominar o Claude Code',
		productDescription: 'Guia completo com todas as 50 dicas - acesso vitalicio'
	},

	// Navigation
	nav: {
		home: 'Inicio',
		guide: 'Guia',
		pricing: 'Precos',
		toggleMenu: 'Alternar menu'
	},

	// Landing page
	landing: {
		hero: {
			eyebrow: 'De 6 meses de uso diario',
			title: 'Domine o Claude Code em Dias, Nao Meses',
			subtitle:
				'Os workflows, atalhos e configuracoes que separam iniciantes de usuarios avancados.',
			cta: 'Obter o Guia - $29',
			guarantee: 'Garantia de devolucao de 14 dias'
		},
		social: {
			quote: 'Apos mais de 500 horas construindo produtos reais com Claude Code, documentei todos os padroes que realmente funcionam.',
			author: 'Danyel Koca',
			role: 'Engenheiro de Pesquisa Aplicada na Sakana AI | Ex-Senior Data Scientist na McKinsey',
			benefits: [
				'Pule meses de tentativa e erro',
				'Configs CLAUDE.md prontas para copiar',
				'Padroes que funcionam com qualquer projeto'
			]
		},
		curriculum: {
			title: 'O Que Esta Incluido',
			subtitle: '50 dicas em 12 secoes + conteudo bonus'
		},
		sample: {
			title: 'Veja a Qualidade',
			subtitle: 'Leia esta dica gratuitamente. Se ajudar, imagine mais 49.',
			readFull: 'Ler dica completa gratis'
		},
		pricing: {
			title: 'Compra Unica',
			price: '$29',
			subtitle: 'Acesso vitalicio a todas as 50 dicas',
			features: [
				'50 dicas detalhadas com exemplos de codigo',
				'Configs CLAUDE.md prontas para copiar',
				'12 secoes + conteudo bonus',
				'Atualizacoes futuras incluidas'
			],
			cta: 'Obter Acesso Instantaneo',
			anchor: 'Pule meses de tentativa e erro.',
			guarantee: 'Garantia de devolucao de 14 dias. Sem perguntas.'
		}
	},

	// Guide
	guide: {
		title: 'Guia',
		overview: 'Todas as 50 Dicas',
		overviewDescription:
			'Domine o Claude Code com estas dicas testadas em batalha de 6 meses de uso diario.',
		backToGuide: 'Voltar ao Guia',
		free: 'Gratis',
		freePreview: 'Preview Gratuito',
		locked: 'Desbloqueie para ler',
		lockedTitle: 'Esta dica esta bloqueada',
		lockedDescription: 'Obtenha acesso completo a todas as 50 dicas com uma compra unica.',
		unlockCta: 'Desbloquear Guia Completo - $29',
		unlockAll: 'Desbloquear Todas as 50 Dicas'
	},

	// Section data (unified: title, short description, long description)
	sections: {
		title: 'Todas as Secoes',
		description:
			'Explore 51 dicas organizadas em 13 secoes. Cada secao foca em um aspecto especifico de dominar o Claude Code.',
		tipsInSection: 'nesta secao',
		setup: {
			title: 'Configuracao',
			short: 'Terminal, CLAUDE.md, atalhos e comandos',
			long: 'Faca o Claude Code funcionar de forma otima com a configuracao correta de terminal, configuracao CLAUDE.md, e atalhos de teclado essenciais que economizarao horas.'
		},
		safety: {
			title: 'Seguranca',
			short: 'Git, permissoes, protecao de arquivos sensiveis',
			long: 'Proteja sua base de codigo e segredos com praticas adequadas de git, permissoes de arquivo, e regras inteligentes de auto-aprovacao que equilibram velocidade com seguranca.'
		},
		planning: {
			title: 'Planejamento',
			short: 'Modo plano, planos detalhados, pensamento de ponta a ponta',
			long: 'Domine o modo plano para pensar em tarefas complexas antes de codar. Aprenda a criar planos detalhados e acionaveis que Claude pode executar perfeitamente.'
		},
		prompting: {
			title: 'Prompting',
			short: 'Ultrathink, ser direto, exagerar importancia',
			long: 'Desbloqueie o potencial total do Claude com tecnicas avancadas de prompting. De ultrathink a orientacao estrategica, aprenda como obter resultados consistentemente melhores.'
		},
		session: {
			title: 'Sessao',
			short: 'Gerenciamento de contexto, retomar, degradacao de qualidade',
			long: 'Gerencie o contexto efetivamente em longas sessoes de codificacao. Saiba quando compactar, limpar, ou comecar do zero para manter o desempenho maximo do Claude.'
		},
		input: {
			title: 'Entrada',
			short: 'Imagens, capturas de tela, mensagens de erro',
			long: 'Aproveite as capacidades multimodais do Claude com imagens, capturas de tela e mensagens de erro formatadas corretamente para depuracao mais rapida.'
		},
		'multi-agent': {
			title: 'Multi-Agente',
			short: 'Agentes paralelos, worktrees, subagentes',
			long: 'Escale sua produtividade com multiplas instancias do Claude. Aprenda git worktrees, agentes paralelos, e quando usar subagentes efetivamente.'
		},
		customization: {
			title: 'Personalizacao',
			short: 'Configs hierarquicas, comandos, agentes personalizados',
			long: 'Adapte o Claude Code ao seu workflow com arquivos CLAUDE.md hierarquicos, comandos slash personalizados e agentes especializados.'
		},
		pitfalls: {
			title: 'Armadilhas',
			short: 'Comportamentos comuns do Claude para observar',
			long: 'Evite as armadilhas comuns que atrapalham usuarios do Claude Code. De over-engineering a falhas silenciosas, aprenda o que observar.'
		},
		advanced: {
			title: 'Avancado',
			short: 'Hooks, servidores MCP, skills, modo headless',
			long: 'Desbloqueie recursos de usuario avancado como hooks, servidores MCP, skills e modo headless para automacao e integracao CI/CD.'
		},
		'use-cases': {
			title: 'Casos de Uso',
			short: 'Verificacoes de qualidade, POCs, aprendizado, commits',
			long: 'Aplicacoes do mundo real desde verificacoes de qualidade de codigo ate prototipagem rapida. Veja como aplicar o Claude Code efetivamente no seu trabalho diario.'
		},
		closing: {
			title: 'Conclusao',
			short: 'Sabedoria final sobre encontrar seu workflow',
			long: 'Sabedoria final sobre encontrar seu workflow pessoal. Nem todo recurso e para todos - foque no que funciona para voce.'
		},
		bonus: {
			title: 'Bonus',
			short: 'CLAUDE.md testado em batalha de 6 meses de uso diario',
			long: 'Um arquivo CLAUDE.md completo e testado em batalha destilado de 6 meses de uso diario. Copie, adapte e faca seu.'
		}
	},

	// Paywall
	paywall: {
		title: 'Desbloqueie o Guia Completo',
		description: 'Obtenha acesso a todas as 50 dicas por apenas $29',
		cta: 'Obter Acesso Completo'
	},

	// Success page
	success: {
		title: 'Obrigado!',
		description: 'Sua compra foi bem-sucedida. Voce agora tem acesso completo a todas as 50 dicas.',
		cta: 'Comecar a Ler'
	},

	// Footer
	footer: {
		builtWith: 'Construido com Claude Code',
		guide: 'Guia',
		company: 'Empresa',
		legal: 'Legal',
		allTips: 'Todas as 50 Dicas',
		faq: 'FAQ',
		blog: 'Blog',
		about: 'Sobre',
		privacy: 'Privacidade',
		terms: 'Termos',
		disclosure: 'Divulgacao'
	},

	// About page
	about: {
		pageTitle: 'Sobre - Claude Code Tips',
		pageDescription:
			'Conheca Danyel Koca, o criador do Claude Code Tips, e por que este guia existe.',
		heroTitle: 'Criado por um Praticante',
		heroSubtitle:
			'Este guia foi criado por alguem que usa Claude Code todos os dias para construir produtos reais.',
		storyTitle: 'A Historia',
		storyPara1:
			'Sou Danyel Koca, Engenheiro de Pesquisa Aplicada na Sakana AI em Toquio. Antes disso, passei 3 anos como Senior Data Scientist na McKinsey & Company, construindo solucoes de AI/ML para clientes corporativos.',
		storyPara2:
			'Tenho usado Claude Code diariamente desde seu lancamento. O que comecou como curiosidade virou obsessao - me vi descobrindo novos padroes, atalhos e configuracoes que melhoraram dramaticamente meu workflow.',
		storyPara3:
			'Apos 6 meses de uso diario, acumulei dezenas de dicas que gostaria que alguem tivesse me contado no primeiro dia. Por isso criei este guia.',
		whyTitle: 'Por Que Este Guia Existe',
		whyPara1:
			'A maioria dos tutoriais de Claude Code cobrem o basico: como instalar, como executar comandos. Mas nao cobrem os padroes reais que te tornam produtivo.',
		whyPara2:
			'Este guia e diferente. Cada dica vem de experiencia real construindo sistemas em producao. Sem teoria - apenas o que realmente funciona.',
		credentialsTitle: 'Credenciais',
		credentialsList: [
			'Engenheiro de Pesquisa Aplicada na Sakana AI',
			'Ex-Senior Data Scientist na McKinsey & Company',
			'Graduado pela Universidade de Kyoto (GPA 3.76/4)',
			'Pesquisador publicado na IEEE',
			'Trilingue: Ingles, Japones (JLPT N1), Turco'
		],
		contactTitle: 'Entre em Contato',
		contactPara: 'Tem perguntas ou feedback? Adoraria ouvir de voce.',
		contactLinks: {
			linkedin: 'LinkedIn',
			github: 'GitHub',
			website: 'Website'
		}
	},

	// Privacy page
	privacy: {
		pageTitle: 'Politica de Privacidade - Claude Code Tips',
		pageDescription: 'Saiba como Claude Code Tips lida com seus dados e protege sua privacidade.',
		title: 'Politica de Privacidade',
		lastUpdated: 'Ultima atualizacao: Dezembro 2024',
		introTitle: 'Nosso Compromisso',
		introPara:
			'Acreditamos em coleta minima de dados. Coletamos apenas o que e absolutamente necessario para processar sua compra e entregar o guia.',
		dataCollectedTitle: 'Dados que Coletamos',
		dataCollectedPara: 'Quando voce compra o guia, coletamos:',
		dataCollectedList: [
			'Endereco de email (para entregar o acesso)',
			'Informacoes de pagamento (processadas de forma segura pelo Stripe)'
		],
		noTrackingTitle: 'O que Nao Fazemos',
		noTrackingList: [
			'Sem scripts de analytics ou rastreamento',
			'Sem cookies para publicidade',
			'Sem venda ou compartilhamento de seus dados com terceiros',
			'Sem rastreamento comportamental'
		],
		stripeTitle: 'Processamento de Pagamento',
		stripePara:
			'Todos os pagamentos sao processados de forma segura pelo Stripe. Nunca vemos ou armazenamos os detalhes completos do seu cartao de credito. A politica de privacidade do Stripe se aplica ao processamento de pagamentos.',
		retentionTitle: 'Retencao de Dados',
		retentionPara:
			'Retemos registros de compra para fornecer acesso continuo ao guia e lidar com quaisquer solicitacoes de suporte.',
		contactTitle: 'Perguntas?',
		contactPara: 'Para qualquer pergunta relacionada a privacidade, entre em contato:',
		contactEmail: 'privacy@claudecodeguide.com'
	},

	// Terms page
	terms: {
		pageTitle: 'Termos de Servico - Claude Code Tips',
		pageDescription: 'Termos e condicoes para usar o Claude Code Tips.',
		title: 'Termos de Servico',
		lastUpdated: 'Ultima atualizacao: Dezembro 2024',
		serviceTitle: 'O Servico',
		servicePara:
			'Claude Code Tips fornece um guia digital contendo 50 dicas para dominar o Claude Code. Ao comprar, voce recebe acesso vitalicio ao guia baseado em web.',
		paymentTitle: 'Pagamento',
		paymentList: [
			'Pagamento unico de $29 USD',
			'Acesso vitalicio a todas as dicas atuais e futuras',
			'Sem cobrancas recorrentes ou assinaturas'
		],
		refundTitle: 'Politica de Reembolso',
		refundPara:
			'Oferecemos garantia de devolucao do dinheiro em 14 dias. Se voce nao estiver satisfeito com o guia, entre em contato dentro de 14 dias da compra para um reembolso completo. Sem perguntas.',
		licenseTitle: 'Licenca',
		licensePara:
			'Sua compra concede uma licenca pessoal e nao transferivel para acessar e usar o guia. Voce nao pode:',
		licenseList: [
			'Compartilhar sua conta ou acesso com outros',
			'Copiar, redistribuir ou republicar o conteudo do guia',
			'Usar o conteudo para fins comerciais sem permissao'
		],
		disclaimerTitle: 'Aviso Legal',
		disclaimerPara:
			'Este guia e fornecido "como esta" baseado em experiencia pessoal. Embora busquemos precisao, nao garantimos resultados especificos. Claude Code e um produto da Anthropic, e este guia nao e afiliado ou endossado pela Anthropic.',
		contactTitle: 'Perguntas?',
		contactPara: 'Para qualquer pergunta sobre estes termos, entre em contato:',
		contactEmail: 'support@claudecodeguide.com'
	},

	// Disclosure page
	disclosure: {
		pageTitle: 'Divulgacao - Claude Code Tips',
		pageDescription:
			'Divulgacoes importantes sobre o Claude Code Tips, incluindo relacoes de afiliacao e independencia editorial.',
		title: 'Divulgacao',
		lastUpdated: 'Ultima atualizacao: Dezembro 2024',
		affiliationTitle: 'Sem Afiliacao com Anthropic',
		affiliationPara:
			'Este guia e um produto independente criado por Danyel Koca. NAO e afiliado, endossado ou patrocinado pela Anthropic, a empresa por tras do Claude e Claude Code. Todas as opinioes e recomendacoes sao exclusivamente do autor.',
		independenceTitle: 'Independencia Editorial',
		independencePara:
			'Todo o conteudo neste guia reflete as opinioes genuinas do autor baseadas em experiencia pessoal. Nenhuma empresa ou organizacao pagou por cobertura favoravel ou influenciou o conteudo.',
		aiAssistedTitle: 'Conteudo Assistido por IA',
		aiAssistedPara:
			'Este guia foi criado com a assistencia do proprio Claude Code. O autor usa Claude Code diariamente e o usou para ajudar a escrever, editar e refinar o conteudo do guia. Isso e divulgado em espirito de transparencia.',
		noSponsoredTitle: 'Sem Conteudo Patrocinado',
		noSponsoredPara:
			'O guia nao contem conteudo patrocinado, posicionamentos pagos ou links de afiliados. O unico produto sendo vendido e o proprio guia.',
		contactTitle: 'Perguntas?',
		contactPara: 'Para qualquer pergunta sobre estas divulgacoes, entre em contato:',
		contactEmail: 'hello@claudecodeguide.com'
	},

	// Blog (UI strings only - post content in .svx files)
	blog: {
		pageTitle: 'Blog - Claude Code Tips',
		pageDescription:
			'Dicas, tutoriais e insights sobre Claude Code do criador do guia 50 Tips.',
		title: 'Blog',
		subtitle: 'Dicas, tutoriais e insights sobre Claude Code',
		readMore: 'Leia mais',
		publishedOn: 'Publicado em',
		backToBlog: 'Voltar ao Blog',
		noPosts: 'Nenhum post ainda. Volte em breve!'
	},

	// Disclaimer for untranslated content
	disclaimer: {
		notTranslated:
			'Este conteudo ainda nao esta disponivel no seu idioma. Exibindo versao em ingles.'
	},

	// FAQ page
	faq: {
		pageTitle: 'FAQ - Claude Code Tips',
		pageDescription: 'Perguntas frequentes sobre o guia Claude Code Tips.',
		title: 'Perguntas Frequentes',
		items: [
			{
				q: 'Qual e o formato do guia?',
				a: 'E um guia baseado em web que voce pode acessar de qualquer dispositivo. Nao precisa baixar PDF.'
			},
			{
				q: 'Preciso de experiencia com Claude Code?',
				a: 'Familiaridade basica ajuda, mas o guia cobre tudo desde a configuracao inicial ate tecnicas avancadas.'
			},
			{
				q: 'E se o Claude Code for atualizado?',
				a: 'O guia foca em workflows e padroes que permanecem estaveis. Quando recursos importantes mudam, o guia e atualizado tambem.'
			}
		]
	}
};
