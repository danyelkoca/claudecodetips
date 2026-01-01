export default {
  // Meta
  lang: "ru",
  langName: "Русский",
  siteBrand: "Claude Code Tips",

  // Common strings
  common: {
    tipPrefix: "Совет",
    tip: "совет",
    tips: "советов",
    previous: "Назад",
    next: "Далее",
    loading: "Загрузка...",
    backArrow: "\u2190",
    forwardArrow: "\u2192",
    goToSlide: "Перейти к слайду",
  },

  // Error page
  error: {
    titleSuffix: "Ошибка",
    notFoundTitle: "Страница не найдена",
    notFoundDescription: "Страница, которую вы ищете, не существует.",
    genericTitle: "Что-то пошло не так",
    genericDescription: "Произошла непредвиденная ошибка.",
    goHome: "На главную",
    // Server error keys (backend sends key, UI translates)
    langNotFound: "Язык не найден",
    blogNotFound: "Статья блога не найдена",
    sectionNotFound: "Раздел не найден",
    tipNotInSection: "Совет не найден в этом разделе",
    tipNotFound: "Совет не найден",
  },

  // Checkout
  checkout: {
    productName: "51 совет по освоению Claude Code",
    productDescription: "Полное руководство со всеми 51 советами - пожизненный доступ",
  },

  // Navigation
  nav: {
    guide: "Руководство",
    toggleMenu: "Переключить меню",
  },

  // Landing page
  landing: {
    hero: {
      eyebrow: "От создателя Kumamap (389 тыс. пользователей)",
      title: "Освойте Claude Code за дни, а не месяцы",
      subtitle: "Рабочие процессы, горячие клавиши и конфигурации, которые отличают новичков от продвинутых пользователей.",
      cta: "Получить руководство - $29",
      guarantee: "7-дневная гарантия возврата денег",
    },
    social: {
      quote: "У Claude Code крутая кривая обучения. Я потратил сотни часов, чтобы понять, что работает, а что нет. Это руководство — всё, что я хотел бы иметь с первого дня.",
      author: "Danyel Koca",
      role: "ИИ-инженер в Sakana AI | Ранее старший дата-сайентист в McKinsey & Company",
    },
    caseStudy: {
      title: "Создано с Claude Code",
      description: "Я полностью создал Kumamap — трекер медведей #1 в Японии — с помощью Claude Code. Это руководство научит вас точным паттернам, которые я использовал.",
      cta: "Посмотреть продукт",
      stats: {
        views: { value: "1,3 млн", label: "просмотров" },
        users: { value: "389 000", label: "пользователей" },
        time: { value: "3 месяца", label: "на создание" },
      },
    },
    curriculum: {
      title: "Что внутри",
      subtitle: "51 совет в 13 разделах",
      viewAll: "Смотреть все {count} советов",
    },
    sample: {
      title: "Оцените качество",
      subtitle: "Прочитайте этот совет бесплатно. Если он поможет, представьте еще 49.",
      readFull: "Читать полный совет бесплатно",
    },
    pricing: {
      title: "Единоразовая покупка",
      price: "$29",
      subtitle: "Пожизненный доступ ко всем 51 советам",
      features: ["51 детальный совет с примерами кода", "Готовые конфиги CLAUDE.md", "13 организованных разделов", "Будущие обновления включены"],
      cta: "Получить мгновенный доступ",
      guarantee: "7-дневная гарантия возврата денег. Без вопросов.",
    },
    checkoutCanceled: "Оплата отменена. Готовы когда вы.",
  },

  // Pricing page
  pricingPage: {
    pageTitle: "Оплата - Claude Code Tips",
    pageDescription: "Мгновенный доступ ко всем 51 совету за $29",
    emailLabel: "Электронная почта",
    emailPlaceholder: "you@example.com",
    cta: "Перейти к оплате",
    processing: "Обработка...",
    errors: {
      emailRequired: "Пожалуйста, введите email.",
      invalidEmail: "Пожалуйста, введите действительный email.",
      checkoutFailed: "Что-то пошло не так. Попробуйте снова.",
      rateLimitExceeded: "Слишком много попыток. Повторите через час.",
    },
  },

  // Guide
  guide: {
    title: "Руководство",
    overview: "Все 51 совет",
    overviewDescription: "Освойте Claude Code с этими проверенными советами из 6 месяцев ежедневного использования.",
    backToGuide: "Назад к руководству",
    free: "Бесплатно",
    freePreview: "Бесплатный просмотр",
    locked: "Разблокировать для чтения",
    lockedTitle: "Этот совет заблокирован",
    lockedDescription: "Получите полный доступ ко всем 51 советам с единоразовой покупкой.",
    unlockCta: "Разблокировать полное руководство - $29",
    unlockAll: "Разблокировать все 51 совет",
    sections: "разделов",
    freeLabel: "бесплатных превью",
    whatsIncluded: "Что включено",
    detailedTips: "детальных советов",
    organizedSections: "организованных разделов",
    freePreviews: "бесплатных превью",
    startReading: "Начать чтение",
    jumpTo: "Перейти к разделу",
  },

  // Section data (unified: title, short description, long description)
  sections: {
    setup: {
      title: "Настройка",
      short: "Терминал, CLAUDE.md, горячие клавиши и команды",
      long:
        "Настройте Claude Code оптимально с правильной конфигурацией терминала, CLAUDE.md и необходимыми горячими клавишами, которые сэкономят вам часы.",
    },
    safety: {
      title: "Безопасность",
      short: "Git, права доступа, защита конфиденциальных файлов",
      long:
        "Защитите вашу кодовую базу и секреты с правильными практиками git, правами доступа к файлам и умными правилами автоподтверждения, которые балансируют скорость и безопасность.",
    },
    planning: {
      title: "Планирование",
      short: "Режим плана, детальные планы, сквозное мышление",
      long:
        "Освойте режим плана для обдумывания сложных задач перед кодированием. Научитесь создавать детальные, выполнимые планы, которые Claude может безупречно выполнить.",
    },
    prompting: {
      title: "Промптинг",
      short: "Ultrathink, прямота, преувеличение важности",
      long:
        "Раскройте полный потенциал Claude с продвинутыми техниками промптинга. От ultrathink до стратегического руководства, узнайте как получать стабильно лучшие результаты.",
    },
    session: {
      title: "Сессия",
      short: "Управление контекстом, возобновление, деградация качества",
      long:
        "Эффективно управляйте контекстом в длительных сессиях кодирования. Знайте когда сжимать, очищать или начинать заново для поддержания пиковой производительности Claude.",
    },
    input: {
      title: "Ввод",
      short: "Изображения, скриншоты, сообщения об ошибках",
      long:
        "Используйте мультимодальные возможности Claude с изображениями, скриншотами и правильно отформатированными сообщениями об ошибках для более быстрой отладки.",
    },
    "multi-agent": {
      title: "Мульти-агент",
      short: "Параллельные агенты, ворктри, субагенты",
      long:
        "Масштабируйте продуктивность с несколькими экземплярами Claude. Изучите git worktrees, параллельных агентов и когда эффективно использовать субагентов.",
    },
    customization: {
      title: "Кастомизация",
      short: "Иерархические конфиги, команды, кастомные агенты",
      long:
        "Адаптируйте Claude Code под ваш рабочий процесс с иерархическими файлами CLAUDE.md, кастомными slash-командами и специализированными агентами.",
    },
    pitfalls: {
      title: "Подводные камни",
      short: "Распространенные поведения Claude, за которыми нужно следить",
      long: "Избегайте распространенных ловушек, которые мешают пользователям Claude Code. От переусложнения до тихих сбоев, узнайте за чем следить.",
    },
    advanced: {
      title: "Продвинутое",
      short: "Хуки, MCP серверы, навыки, headless режим",
      long: "Разблокируйте продвинутые функции как хуки, MCP серверы, навыки и headless режим для автоматизации и CI/CD интеграции.",
    },
    "use-cases": {
      title: "Кейсы использования",
      short: "Проверки качества, POC, обучение, коммиты",
      long:
        "Реальные применения от проверок качества кодовой базы до быстрого прототипирования. Посмотрите как эффективно применять Claude Code в повседневной работе.",
    },
    closing: {
      title: "Заключение",
      short: "Финальные мысли о поиске своего рабочего процесса",
      long: "Финальные мысли о поиске своего личного рабочего процесса. Не каждая функция для каждого - фокусируйтесь на том, что работает для вас.",
    },
    bonus: {
      title: "Бонус",
      short: "Проверенный CLAUDE.md из 6 месяцев ежедневного использования",
      long: "Полный, проверенный файл CLAUDE.md, выведенный из 6 месяцев ежедневного использования. Копируйте, адаптируйте и сделайте его своим.",
    },
  },

  // Paywall
  paywall: {
    title: "Разблокируйте полное руководство",
    description: "Получите доступ ко всем 51 советам всего за $29",
    cta: "Получить полный доступ",
    alreadyPurchased: "Уже купили?",
    restoreAccess: "Восстановить доступ",
  },

  // Success page
  success: {
    title: "Спасибо!",
    description: "Ваша покупка успешна. Теперь у вас есть полный доступ ко всем 51 советам.",
    cta: "Начать читать",
  },

  // Restore page
  restore: {
    pageTitle: "Восстановить доступ - Claude Code Tips",
    title: "Восстановите доступ",
    description: "Введите email, использованный при покупке, чтобы восстановить доступ на этом устройстве.",
    emailLabel: "Email покупки",
    emailPlaceholder: "you@example.com",
    cta: "Восстановить доступ",
    successMessage: "Доступ успешно восстановлен!",
    redirecting: "Перенаправление к руководству...",
    noAccount: "Ещё не купили?",
    buyNow: "Купить сейчас",
    errors: {
      restoreFailed: "Не удалось восстановить доступ. Попробуйте снова.",
      emailRequired: "Требуется email.",
      invalidEmail: "Пожалуйста, введите действительный email.",
      rateLimitExceeded: "Слишком много попыток. Повторите через час.",
    },
  },

  // Footer
  footer: {
    builtWith: "Создано с Claude Code",
    guide: "Руководство",
    company: "Компания",
    legal: "Юридическое",
    allTips: "Все 51 совет",
    faq: "FAQ",
    restoreAccess: "Восстановить доступ",
    pricing: "Цены",
    blog: "Блог",
    about: "О нас",
    contact: "Контакты",
    privacy: "Конфиденциальность",
    terms: "Условия",
    disclosure: "Раскрытие информации",
  },

  // Contact page
  contact: {
    pageTitle: "Контакты - Claude Code Tips",
    pageDescription: "Свяжитесь с нами с вопросами или отзывами",
    title: "Свяжитесь с нами",
    description: "Есть вопросы или отзывы? Буду рад услышать от вас.",
    nameLabel: "Имя",
    namePlaceholder: "Ваше имя",
    emailLabel: "Email",
    emailPlaceholder: "you@example.com",
    messageLabel: "Сообщение",
    messagePlaceholder: "Ваше сообщение...",
    cta: "Отправить сообщение",
    sent: "Отправлено",
    successMessage: "Сообщение успешно отправлено! Скоро отвечу.",
    errors: {
      nameRequired: "Пожалуйста, введите ваше имя.",
      emailRequired: "Пожалуйста, введите ваш email.",
      invalidEmail: "Пожалуйста, введите действительный email.",
      messageRequired: "Пожалуйста, введите сообщение (минимум 10 символов).",
      rateLimitExceeded: "Слишком много попыток. Повторите через час.",
      submitFailed: "Что-то пошло не так. Попробуйте снова.",
    },
  },

  // About page
  about: {
    pageTitle: "О нас - Claude Code Tips",
    pageDescription: "Узнайте о Даниэле Кодже, создателе Claude Code Tips, и почему это руководство существует.",
    heroTitle: "Создано практиком",
    heroSubtitle: "Это руководство создано человеком, который использует Claude Code каждый день для создания реальных продуктов.",
    storyTitle: "История",
    storyPara1:
      "Я Даниэль Коджа, инженер прикладных исследований в Sakana AI в Токио. До этого я 3 года работал старшим дата-сайентистом в McKinsey & Company, создавая AI/ML решения для корпоративных клиентов.",
    storyPara2:
      "Я использую Claude Code ежедневно с момента его запуска. Что началось как любопытство, превратилось в одержимость - я обнаружил новые паттерны, горячие клавиши и конфигурации, которые значительно улучшили мой рабочий процесс.",
    storyPara3:
      "После 6 месяцев ежедневного использования я накопил десятки советов, о которых хотел бы, чтобы мне кто-то рассказал в первый день. Поэтому я создал это руководство.",
    whyTitle: "Почему это руководство существует",
    whyPara1:
      "Большинство туториалов по Claude Code охватывают основы: как установить, как запустить команды. Но они не охватывают реальные паттерны, которые делают вас продуктивным.",
    whyPara2:
      "Это руководство другое. Каждый совет исходит из реального опыта создания продакшн систем. Никакой теории - только то, что действительно работает.",
    credentialsTitle: "Квалификация",
    credentialsList: [
      "Инженер прикладных исследований в Sakana AI",
      "Бывший старший дата-сайентист в McKinsey & Company",
      "Выпускник Киотского университета (GPA 3.76/4)",
      "Опубликованный исследователь IEEE",
      "Владею тремя языками: английский, японский (JLPT N1), турецкий",
    ],
    contactTitle: "Связаться",
    contactPara: "Есть вопросы или отзывы? Буду рад услышать от вас.",
    contactLinks: {
      linkedin: "LinkedIn",
      github: "GitHub",
      website: "Сайт",
    },
  },

  // Privacy page
  privacy: {
    pageTitle: "Политика конфиденциальности - Claude Code Tips",
    pageDescription: "Узнайте как Claude Code Tips обрабатывает ваши данные.",
    title: "Политика конфиденциальности",
    dataCollectedTitle: "Данные, которые мы собираем",
    dataCollectedDescription: "При покупке руководства:",
    dataEmail: "Email (для доставки и доступа)",
    paymentTitle: "Обработка платежей",
    paymentDescription: "Все платежи безопасно обрабатываются Stripe. Мы не храним вашу платежную информацию.",
    contactTitle: "Контакты",
    contactLabel: "Email",
    contactEmail: "hello@claudecodetips.com",
  },

  // Terms page
  terms: {
    pageTitle: "Условия использования - Claude Code Tips",
    pageDescription: "Условия использования Claude Code Tips.",
    title: "Условия использования",
    serviceTitle: "Сервис",
    serviceDescription:
      "Claude Code Tips предоставляет цифровое руководство с 51 советом по освоению Claude Code. При покупке вы получаете пожизненный доступ.",
    paymentTitle: "Оплата",
    paymentDescription: "Вы можете приобрести доступ к руководству:",
    paymentOneTime: "Единоразовый платеж $29 USD",
    paymentStripe: "Все платежи безопасно обрабатываются через Stripe",
    refundTitle: "Возврат",
    refundDescription: "7-дневная гарантия возврата денег. Если вы не удовлетворены, свяжитесь с нами в течение 7 дней для полного возврата.",
    contactTitle: "Контакты",
    contactLabel: "Email",
    contactEmail: "hello@claudecodetips.com",
  },

  // Disclosure page (Commercial Disclosure)
  disclosure: {
    pageTitle: "Коммерческое раскрытие - Claude Code Tips",
    pageDescription: "Коммерческое раскрытие информации для Claude Code Tips.",
    title: "Коммерческое раскрытие",
    sellerName: "Продавец",
    sellerNameValue: "Claude Code Tips",
    address: "Адрес",
    addressValue: "Предоставляется по запросу",
    phone: "Телефон",
    phoneValue: "Предоставляется по запросу",
    email: "Email",
    emailValue: "hello@claudecodetips.com",
    headOfOperations: "Руководитель операций",
    headOfOperationsValue: "Предоставляется по запросу",
    additionalFees: "Дополнительные сборы",
    additionalFeesValue: "Нет",
    refundPolicy: "Политика возврата",
    refundServiceIssues: "Проблемы с сервисом",
    refundServiceIssuesValue:
      "Если услуга не предоставлена из-за системных проблем, свяжитесь с hello@claudecodetips.com. Мы рассмотрим и произведем полный возврат.",
    refundCustomer: "Отмена клиентом",
    refundCustomerValue:
      "7-дневная гарантия возврата денег. Если вы не удовлетворены покупкой, свяжитесь с нами в течение 7 дней для полного возврата, без лишних вопросов.",
    deliveryTime: "Время доставки",
    deliveryTimeValue: "Мгновенный доступ после оплаты",
    paymentMethods: "Способы оплаты",
    paymentMethodsValue: "Кредитные карты (Visa, Mastercard, American Express, JCB)",
    paymentPeriod: "Период оплаты",
    paymentPeriodValue: "Обрабатывается немедленно при оплате кредитной картой",
    price: "Цена",
    priceValue: "$29 USD",
    priceTaxNote: "*Цена включает все применимые налоги",
  },

  // Blog (UI strings only - post content in .svx files)
  blog: {
    pageTitle: "Блог - Claude Code Tips",
    pageDescription: "Советы, туториалы и инсайты о Claude Code от создателя руководства 51 Tips.",
    title: "Блог",
    subtitle: "Советы, туториалы и инсайты о Claude Code",
    readMore: "Читать далее",
    publishedOn: "Опубликовано",
    backToBlog: "Назад в блог",
    noPosts: "Пока нет постов. Заходите позже!",
  },

  // Disclaimer for untranslated content
  disclaimer: {
    notTranslated: "Этот контент пока недоступен на вашем языке. Показана английская версия.",
  },

  // FAQ page
  faq: {
    pageTitle: "FAQ - Claude Code Tips",
    pageDescription: "Часто задаваемые вопросы о руководстве Claude Code Tips.",
    title: "Часто Задаваемые Вопросы",
    items: [
      {
        q: "В каком формате руководство?",
        a: "Это веб-руководство, к которому вы можете получить доступ с любого устройства. Скачивание PDF не требуется.",
      },
      {
        q: "Нужен ли опыт работы с Claude Code?",
        a: "Базовое знакомство поможет, но руководство охватывает все от начальной настройки до продвинутых техник.",
      },
      {
        q: "Что если Claude Code обновится?",
        a:
          "Руководство фокусируется на рабочих процессах и паттернах, которые остаются стабильными. Когда основные функции меняются, руководство тоже обновляется.",
      },
    ],
  },
};
