export default {
  // Meta
  lang: "pt",
  langName: "Português",
  siteBrand: "Claude Code Tips",

  // Common strings
  common: {
    tipPrefix: "Dica",
    tip: "dica",
    tips: "dicas",
    previous: "Anterior",
    next: "Proximo",
    loading: "Carregando...",
    backArrow: "\u2190",
    forwardArrow: "\u2192",
    goToSlide: "Ir para o slide",
  },

  // Error page
  error: {
    titleSuffix: "Erro",
    notFoundTitle: "Pagina Nao Encontrada",
    notFoundDescription: "A pagina que voce esta procurando nao existe.",
    genericTitle: "Algo Deu Errado",
    genericDescription: "Ocorreu um erro inesperado.",
    goHome: "Ir para o Inicio",
    // Server error keys (backend sends key, UI translates)
    langNotFound: "Idioma nao encontrado",
    blogNotFound: "Post do blog nao encontrado",
    sectionNotFound: "Secao nao encontrada",
    tipNotInSection: "Dica nao encontrada nesta secao",
    tipNotFound: "Dica nao encontrada",
  },

  // Navigation
  nav: {
    guide: "Guia",
    toggleMenu: "Alternar menu",
  },

  // Theme toggle
  theme: {
    light: "Modo claro",
    dark: "Modo escuro",
  },

  // Landing page
  landing: {
    hero: {
      eyebrow: "Do criador do Kumamap (389 mil usuários)",
      title: "Domine o Claude Code em Dias, Nao Meses",
      subtitle: "Os workflows, atalhos e configuracoes que separam iniciantes de usuarios avancados.",
      seeAll: "Ver todas as {count} dicas",
    },
    problem: {
      title: "Parece familiar?",
      subtitle: "Essas frustrações me levaram a escrever este guia",
      cards: [
        {
          title: "Claude ignora CLAUDE.md",
          description: "Suas instruções personalizadas são ignoradas ou esquecidas no meio da conversa",
        },
        {
          title: "Super-engenheira tudo",
          description: "Você pede uma função simples, recebe 500 linhas de abstração",
        },
        {
          title: "Resultados diferentes toda vez",
          description: "O mesmo prompt, qualidade de saída muito diferente",
        },
        {
          title: "Diz pronto mas está quebrado",
          description: "Entrega código com confiança que na verdade não funciona",
        },
      ],
    },
    author: {
      sectionTitle: "Por que confiar neste guia?",
      quote: "Descobri o que realmente funciona com Claude Code através de centenas de horas de tentativa e erro. Este guia é tudo o que aprendi.",
    },
    experience: {
      title: "A Experiência Por Trás Deste Guia",
      subtitle: "Eu não apenas li sobre esses problemas, eu os vivi.",
      conclusion: "2,7 bilhões de tokens de lições conquistadas, condensadas em 51 dicas práticas.",
      stats: {
        tokens: "2.772.274.103",
        cost: "US$ 2.288,41",
        period: "28 Nov 2025 - 5 Jan 2026",
      },
    },
    social: {
      quote: "Claude Code tem uma curva de aprendizado íngreme. Passei centenas de horas descobrindo o que funciona e o que não funciona. Este guia é tudo o que eu gostaria de ter no primeiro dia.",
      author: "Danyel Koca",
      roleTitle: "Engenheiro de Pesquisa Aplicada na Sakana AI",
      roleSubtitle: "Anteriormente Cientista de Dados Sênior na McKinsey & Company",
    },
    caseStudy: {
      title: "Prova de que Funciona",
      description: "Construí o Kumamap — o rastreador de ursos #1 do Japão — inteiramente com Claude Code. Este guia ensina os padrões exatos que usei.",
      cta: "Ver o produto ao vivo",
      stats: {
        views: { value: "1,3 milhão", label: "visualizações" },
        users: { value: "389.000", label: "usuários" },
        time: { value: "3 meses", label: "para construir" },
      },
    },
    curriculum: {
      title: "O Que Esta Incluido",
      subtitle: "51 dicas em 13 secoes",
      viewAll: "Ver todas as {count} dicas",
      sections: "seções",
    },
    sample: {
      title: "Featured Tips",
      subtitle: "Start with these popular tips",
      readFree: "Ler gratis",
    },
  },

  // Guide
  guide: {
    title: "Guia",
    overview: "Todas as 51 Dicas",
    overviewDescription: "Domine o Claude Code com estas dicas testadas em batalha de 6 meses de uso diario.",
    backToGuide: "Voltar ao Guia",
    sections: "secoes",
    whatsIncluded: "O Que Esta Incluido",
    detailedTips: "dicas detalhadas",
    organizedSections: "secoes organizadas",
    startReading: "Comecar a Ler",
    jumpTo: "Ir para Secao",
  },

  // Section data (unified: title, short description, long description)
  sections: {
    setup: {
      title: "Configuracao",
      short: "Terminal, CLAUDE.md, atalhos e comandos",
      long:
        "Faca o Claude Code funcionar de forma otima com a configuracao correta de terminal, configuracao CLAUDE.md, e atalhos de teclado essenciais que economizarao horas.",
    },
    safety: {
      title: "Seguranca",
      short: "Git, permissoes, protecao de arquivos sensiveis",
      long:
        "Proteja sua base de codigo e segredos com praticas adequadas de git, permissoes de arquivo, e regras inteligentes de auto-aprovacao que equilibram velocidade com seguranca.",
    },
    planning: {
      title: "Planejamento",
      short: "Modo plano, planos detalhados, pensamento de ponta a ponta",
      long:
        "Domine o modo plano para pensar em tarefas complexas antes de codar. Aprenda a criar planos detalhados e acionaveis que Claude pode executar perfeitamente.",
    },
    prompting: {
      title: "Prompting",
      short: "Ultrathink, ser direto, exagerar importancia",
      long:
        "Desbloqueie o potencial total do Claude com tecnicas avancadas de prompting. De ultrathink a orientacao estrategica, aprenda como obter resultados consistentemente melhores.",
    },
    session: {
      title: "Sessao",
      short: "Gerenciamento de contexto, retomar, degradacao de qualidade",
      long:
        "Gerencie o contexto efetivamente em longas sessoes de codificacao. Saiba quando compactar, limpar, ou comecar do zero para manter o desempenho maximo do Claude.",
    },
    input: {
      title: "Entrada",
      short: "Imagens, capturas de tela, mensagens de erro",
      long:
        "Aproveite as capacidades multimodais do Claude com imagens, capturas de tela e mensagens de erro formatadas corretamente para depuracao mais rapida.",
    },
    "multi-agent": {
      title: "Multi-Agente",
      short: "Agentes paralelos, worktrees, subagentes",
      long:
        "Escale sua produtividade com multiplas instancias do Claude. Aprenda git worktrees, agentes paralelos, e quando usar subagentes efetivamente.",
    },
    customization: {
      title: "Personalizacao",
      short: "Configs hierarquicas, comandos, agentes personalizados",
      long: "Adapte o Claude Code ao seu workflow com arquivos CLAUDE.md hierarquicos, comandos slash personalizados e agentes especializados.",
    },
    pitfalls: {
      title: "Armadilhas",
      short: "Comportamentos comuns do Claude para observar",
      long: "Evite as armadilhas comuns que atrapalham usuarios do Claude Code. De over-engineering a falhas silenciosas, aprenda o que observar.",
    },
    advanced: {
      title: "Avancado",
      short: "Hooks, servidores MCP, skills, modo headless",
      long: "Desbloqueie recursos de usuario avancado como hooks, servidores MCP, skills e modo headless para automacao e integracao CI/CD.",
    },
    "use-cases": {
      title: "Casos de Uso",
      short: "Verificacoes de qualidade, POCs, aprendizado, commits",
      long:
        "Aplicacoes do mundo real desde verificacoes de qualidade de codigo ate prototipagem rapida. Veja como aplicar o Claude Code efetivamente no seu trabalho diario.",
    },
    closing: {
      title: "Conclusao",
      short: "Sabedoria final sobre encontrar seu workflow",
      long: "Sabedoria final sobre encontrar seu workflow pessoal. Nem todo recurso e para todos - foque no que funciona para voce.",
    },
    bonus: {
      title: "Bonus",
      short: "CLAUDE.md testado em batalha de 6 meses de uso diario",
      long: "Um arquivo CLAUDE.md completo e testado em batalha destilado de 6 meses de uso diario. Copie, adapte e faca seu.",
    },
  },

  // Footer
  footer: {
    builtWith: "Construido com Claude Code",
    product: "Produto",
    company: "Empresa",
    legal: "Legal",
    faq: "FAQ",
    blog: "Blog",
    about: "Sobre",
    contact: "Contato",
    privacy: "Privacidade",
    terms: "Termos",
    disclosure: "Divulgacao",
  },

  // Contact page
  contact: {
    pageTitle: "Contato - Claude Code Tips",
    pageDescription: "Entre em contato com perguntas ou feedback",
    title: "Fale Conosco",
    description: "Tem perguntas ou feedback? Adoraria ouvir de voce.",
    nameLabel: "Nome",
    namePlaceholder: "Seu nome",
    emailLabel: "Email",
    emailPlaceholder: "voce@exemplo.com",
    messageLabel: "Mensagem",
    messagePlaceholder: "Sua mensagem...",
    cta: "Enviar mensagem",
    sent: "Enviado",
    successMessage: "Mensagem enviada com sucesso! Responderei em breve.",
    errors: {
      nameRequired: "Por favor insira seu nome.",
      emailRequired: "Por favor insira seu email.",
      invalidEmail: "Por favor insira um endereco de email valido.",
      messageRequired: "Por favor insira uma mensagem (pelo menos 10 caracteres).",
      rateLimitExceeded: "Muitas tentativas. Tente em uma hora.",
      submitFailed: "Algo deu errado. Por favor tente novamente.",
    },
  },

  // About page
  about: {
    pageTitle: "Sobre - Claude Code Tips",
    pageDescription: "Conheca Danyel Koca, o criador do Claude Code Tips, e por que este guia existe.",
    heroTitle: "Criado por um Praticante",
    heroSubtitle: "Este guia foi criado por alguem que usa Claude Code todos os dias para construir produtos reais.",
    storyTitle: "A Historia",
    storyPara1:
      "Sou Danyel Koca, Engenheiro de Pesquisa Aplicada na Sakana AI em Toquio, trabalhando em solucoes de IA para servicos financeiros. Antes disso, passei 3 anos como Senior Data Scientist na McKinsey & Company, construindo solucoes de AI/ML para clientes corporativos.",
    storyPara2:
      "Tenho usado Claude Code diariamente desde seu lancamento. O que comecou como curiosidade virou obsessao - me vi descobrindo novos padroes, atalhos e configuracoes que melhoraram dramaticamente meu workflow.",
    storyPara3:
      "Apos 6 meses de uso diario, acumulei dezenas de dicas que gostaria que alguem tivesse me contado no primeiro dia. Por isso criei este guia.",
    whyTitle: "Por Que Este Guia Existe",
    whyPara1:
      "A maioria dos tutoriais de Claude Code cobrem o basico: como instalar, como executar comandos. Mas nao cobrem os padroes reais que te tornam produtivo.",
    whyPara2:
      "Este guia e diferente. Cada dica vem de experiencia real construindo sistemas em producao. Sem teoria - apenas o que realmente funciona.",
    credentialsTitle: "Credenciais",
    credentialsList: [
      "Engenheiro de Pesquisa Aplicada na Sakana AI",
      "Construindo solucoes de IA para servicos financeiros",
      "Ex-Senior Data Scientist na McKinsey & Company",
      "Graduado pela Universidade de Kyoto (GPA 3.76/4)",
      "Pesquisador publicado na IEEE",
      "Trilingue: Ingles, Japones (JLPT N1), Turco",
    ],
    contactTitle: "Entre em Contato",
    contactPara: "Tem perguntas ou feedback? Adoraria ouvir de voce.",
    contactLinks: {
      linkedin: "LinkedIn",
      github: "GitHub",
      website: "Website",
    },
  },

  // Privacy page
  privacy: {
    pageTitle: "Politica de Privacidade - Claude Code Tips",
    pageDescription: "Politica de privacidade e tratamento de dados do Claude Code Tips",
    title: "Politica de Privacidade",
    dataCollectedTitle: "Dados que Coletamos",
    dataCollectedDescription: "This is a free guide. We only collect data you voluntarily provide through our contact form.",
    contactTitle: "Contato",
    contactLabel: "Email",
    contactEmail: "hello@claudecodetips.com",
  },

  // Terms page
  terms: {
    pageTitle: "Termos de Servico - Claude Code Tips",
    pageDescription: "Termos de servico do Claude Code Tips",
    title: "Termos de Servico",
    serviceTitle: "Servico",
    serviceDescription:
      "Claude Code Tips provides a free digital guide containing 51 tips for mastering Claude Code.",
    contactTitle: "Contato",
    contactLabel: "Email",
    contactEmail: "hello@claudecodetips.com",
  },

  // Disclosure page (Commercial Disclosure)
  disclosure: {
    pageTitle: "Divulgacao Comercial - Claude Code Tips",
    pageDescription: "Divulgacao comercial conforme exigido pela lei japonesa",
    title: "Divulgacao Comercial",
    sellerName: "Vendedor",
    sellerNameValue: "Claude Code Tips",
    address: "Endereco",
    addressValue: "Divulgado mediante solicitacao",
    phone: "Telefone",
    phoneValue: "Divulgado mediante solicitacao",
    email: "Email",
    emailValue: "hello@claudecodetips.com",
    headOfOperations: "Responsavel pelas Operacoes",
    headOfOperationsValue: "Divulgado mediante solicitacao",
  },

  // Blog (UI strings only - post content in .svx files)
  blog: {
    pageTitle: "Blog - Claude Code Tips",
    pageDescription: "Dicas, tutoriais e insights sobre Claude Code do criador do guia 51 Tips.",
    title: "Blog",
    subtitle: "Dicas, tutoriais e insights sobre Claude Code",
    readMore: "Leia mais",
    publishedOn: "Publicado em",
    backToBlog: "Voltar ao Blog",
    noPosts: "Nenhum post ainda. Volte em breve!",
  },

  // Disclaimer for untranslated content
  disclaimer: {
    notTranslated: "Estamos trabalhando na traducao deste conteudo. Atualmente exibindo versao em ingles.",
    translationInProgress: "O conteudo do guia esta atualmente em ingles. Estamos trabalhando ativamente nas traducoes.",
  },

  // FAQ page
  faq: {
    pageTitle: "FAQ - Claude Code Tips",
    pageDescription: "Perguntas frequentes sobre o guia Claude Code Tips.",
    title: "Perguntas Frequentes",
    items: [
      {
        q: "Qual e o formato do guia?",
        a: "E um guia baseado em web que voce pode acessar de qualquer dispositivo. Nao precisa baixar PDF.",
      },
      {
        q: "Preciso de experiencia com Claude Code?",
        a: "Familiaridade basica ajuda, mas o guia cobre tudo desde a configuracao inicial ate tecnicas avancadas.",
      },
      {
        q: "Quao atual e este guia?",
        a: "Este guia reflete os recursos e melhores praticas mais recentes do Claude Code em janeiro de 2026.",
      },
    ],
  },

  // Tip titles and summaries
  tips: {
    "1": { title: "Use o Terminal", summary: "Usar Claude Code no terminal é a forma mais flexível de interagir com ele." },
    "2": { title: "Crie o CLAUDE.md", summary: "O manual de instruções do seu projeto para o Claude. O arquivo mais importante para uso eficaz do Claude Code." },
    "3": { title: "Atalhos e Comandos", summary: "Atalhos de teclado e comandos essenciais para uso eficiente do Claude Code." },
    "4": { title: "Use Git Extensivamente", summary: "Git é sua rede de segurança quando Claude faz mudanças amplas. Faça commits frequentes, revise diffs e conheça seus comandos de recuperação." },
    "5": { title: "Proteja Arquivos Sensíveis", summary: "Claude Code lê automaticamente arquivos .env sem perguntar. Adicione regras deny para proteger segredos." },
    "6": { title: "Nunca Auto-Aprove Comandos Bash", summary: "Auto-aprovar comandos bash é a coisa mais perigosa que você pode fazer com Claude Code." },
    "7": { title: "Auto-Aprove Ações Seguras", summary: "Acelere seu fluxo de trabalho auto-aprovando ações de baixo risco como leituras e buscas." },
    "8": { title: "Sempre Use o Modo Plano", summary: "Pressione Shift+Tab duas vezes para entrar no modo plano antes de tarefas complexas. Claude pensa antes de codificar." },
    "9": { title: "Nunca Aceite Planos Genéricos", summary: "Sempre certifique-se de que o plano seja detalhado em nível de código e factual." },
    "10": { title: "Valide Contra o CLAUDE.md", summary: "Peça ao Claude para validar seu plano contra as regras do CLAUDE.md. Claude esquece instruções conforme as conversas crescem." },
    "11": { title: "Force o Pensamento de Ponta a Ponta", summary: "Faça Claude traçar o caminho completo da ação ao resultado." },
    "12": { title: "Ultrathink Sempre Ativo", summary: "Nunca deixe Claude dizer o que vem à mente primeiro. Deixe-o pensar. SEMPRE." },
    "13": { title: "Seja Direto", summary: "Seja explícito sobre quantidades. Claude tende a escolher o caminho fácil." },
    "14": { title: "Diga O Que Fazer, Não O Que NÃO Fazer", summary: "Sempre forneça uma alternativa quando disser ao Claude o que não fazer." },
    "15": { title: "Exagere a Importância", summary: "Claude calibra o esforço com base na importância percebida. Alta importância = trabalho minucioso." },
    "16": { title: "Trate Claude como Ferramenta, Não Pessoa", summary: "Não se preocupe em ser educado. Claude se comporta melhor quando você é direto." },
    "17": { title: "Claude Excele em Tarefas de Assistente - Guie-o em Trabalhos Estratégicos", summary: "Converta tarefas estratégicas em trabalhos tipo assistente guiando Claude a pesquisar primeiro." },
    "18": { title: "Uma Tarefa = Uma Sessão", summary: "Quando a tarefa terminar, feche-a. Use /clear para limpar o contexto e começar de novo." },
    "19": { title: "Qualidade Degrada em Sessões Longas", summary: "A janela de contexto enche. Claude fica mais lento. Saiba quando compactar ou limpar." },
    "20": { title: "Use /resume para Continuar Sessões", summary: "Claude travou? Terminal fechou? Use /resume para retomar de onde parou." },
    "21": { title: "Nunca Confie em 'Tudo Pronto'", summary: "Claude frequentemente perde casos limite ou pula passos silenciosamente. Sempre verifique." },
    "22": { title: "Use Imagens/Capturas de Tela", summary: "Cole capturas diretamente com Ctrl+V para bugs visuais. Uma imagem vale mil tokens." },
    "23": { title: "Copie Mensagens de Erro Literalmente", summary: "Não parafraseie. Stack trace completo com números de linha." },
    "24": { title: "Não Espere Perfeito na Primeira", summary: "Deixe um agente codificar, use outro agente para verificar o código." },
    "25": { title: "Múltiplos Agentes para Trabalhos Grandes", summary: "Lance múltiplos agentes com o mesmo prompt. Para tarefas grandes, é raro um agente acertar." },
    "26": { title: "Divida Problemas Complexos em Etapas", summary: "Melhor ter uma sessão por sub-tarefa do que uma sessão massiva." },
    "27": { title: "Git Worktrees", summary: "Múltiplos diretórios de trabalho do mesmo repo. Execute Claude em cada um." },
    "28": { title: "Subagentes - Use com Cautela", summary: "Resumos de subagentes perdem detalhes. Para código crítico, faça o agente principal ler arquivos diretamente." },
    "29": { title: "CLAUDE.md Hierárquico", summary: "CLAUDE.md na raiz do projeto + subdiretórios + global. Claude prioriza o mais específico." },
    "30": { title: "Comandos Slash Personalizados", summary: "Crie fluxos de trabalho reutilizáveis na pasta .claude/commands/." },
    "31": { title: "Agentes Personalizados", summary: "Crie agentes especializados com sua própria janela de contexto, prompt de sistema e restrições de ferramentas." },
    "32": { title: "Claude Inventa URLs", summary: "Alucina URLs que não existem. Sempre verifique antes de confiar em links externos." },
    "33": { title: "Claude Sobre-Engenheira", summary: "Peça uma função simples, receba uma classe abstrata com padrão factory." },
    "34": { title: "Claude Cria Duplicatas", summary: "Claude não pesquisa seu código. Ele apenas escreve código novo." },
    "35": { title: "Claude é Aditivo, Nunca Subtrativo", summary: "Claude só adiciona código. Nunca remove. Você tem que forçar a remoção explicitamente." },
    "36": { title: "Claude é um YES MAN", summary: "Claude concorda com tudo que você diz. Diga para ele questionar suas suposições." },
    "37": { title: "Claude Assume em Vez de Perguntar", summary: "Requisito ambíguo? Claude escolhe uma interpretação e segue em frente." },
    "38": { title: "Claude Lê Arquivos Parcialmente", summary: "Claude lê o primeiro bloco e começa a trabalhar. Função crítica na linha 400? Perdeu." },
    "39": { title: "Claude Modifica Testes em Vez de Corrigir Código", summary: "Quando o código está errado, Claude muda as asserções do teste para corresponder ao código ruim." },
    "40": { title: "Hooks", summary: "Comandos shell que executam em eventos específicos como edições, uso de ferramentas ou início de sessão." },
    "41": { title: "Servidores MCP", summary: "Conecte ferramentas externas - bancos de dados, automação de navegador, busca de docs." },
    "42": { title: "Skills", summary: "Comportamentos auto-acionados que carregam automaticamente quando relevantes." },
    "43": { title: "GitHub Actions", summary: "Execute /install-github-app para configurar Claude para seus repos." },
    "44": { title: "Modo Headless", summary: "Execute Claude sem sessão interativa. Para automação e scripts." },
    "45": { title: "Execute Verificações de Qualidade Periodicamente", summary: "Cada consulta = 1 sessão. Verifique textos hardcoded, consistência de design, etc." },
    "46": { title: "Aproveite Claude Code para POCs", summary: "Perfeito para prototipagem rápida. Para POCs, deixe Claude trabalhar." },
    "47": { title: "Claude é Ótimo para Boilerplate", summary: "Operações CRUD, formulários, arquivos de config, padrões repetitivos. Deixe Claude cuidar." },
    "48": { title: "Use Claude para Aprender", summary: "Não apenas deixe Claude escrever código. Faça-o explicar." },
    "49": { title: "Claude para Mensagens de Commit", summary: "Deixe Claude escrever commits do seu diff. Formato consistente, captura o 'porquê'." },
    "50": { title: "Não Persiga Cada Nova Funcionalidade", summary: "Claude Code tem novas funcionalidades toda semana. Foque no que funciona." },
    "51": { title: "CLAUDE.md Testado em Batalha", summary: "Um exemplo real de CLAUDE.md destilado de 6 meses de lições, falhas e correções." },
  },
};
