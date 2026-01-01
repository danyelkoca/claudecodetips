export default {
  // Meta
  lang: "ko",
  langName: "한국어",
  siteBrand: "Claude Code Tips",

  // Common strings
  common: {
    tipPrefix: "팁",
    tip: "팁",
    tips: "팁",
    previous: "이전",
    next: "다음",
    loading: "로딩 중...",
    backArrow: "\u2190",
    forwardArrow: "\u2192",
    goToSlide: "슬라이드로 이동",
  },

  // Error page
  error: {
    titleSuffix: "오류",
    notFoundTitle: "페이지를 찾을 수 없습니다",
    notFoundDescription: "찾으시는 페이지가 존재하지 않습니다.",
    genericTitle: "문제가 발생했습니다",
    genericDescription: "예상치 못한 오류가 발생했습니다.",
    goHome: "홈으로 이동",
    // Server error keys (backend sends key, UI translates)
    langNotFound: "언어를 찾을 수 없습니다",
    blogNotFound: "블로그 게시물을 찾을 수 없습니다",
    sectionNotFound: "섹션을 찾을 수 없습니다",
    tipNotInSection: "이 섹션에서 팁을 찾을 수 없습니다",
    tipNotFound: "팁을 찾을 수 없습니다",
  },

  // Checkout
  checkout: {
    productName: "Claude Code 마스터를 위한 51가지 팁",
    productDescription: "51가지 팁이 담긴 완전한 가이드 - 평생 이용",
  },

  // Navigation
  nav: {
    guide: "가이드",
    toggleMenu: "메뉴 전환",
  },

  // Landing page
  landing: {
    hero: {
      eyebrow: "Kumamap(38.9만 사용자) 개발자로부터",
      title: "몇 달이 아닌 며칠 만에 Claude Code 마스터하기",
      subtitle: "초보자와 파워 유저를 구분하는 워크플로우, 단축키, 설정들.",
      cta: "가이드 구매 - $29",
      guarantee: "7일 환불 보장",
    },
    social: {
      quote: "Claude Code는 가파른 학습 곡선을 가지고 있습니다. 무엇이 효과가 있고 무엇이 없는지 알아내는 데 수백 시간을 보냈습니다. 이 가이드는 제가 첫날부터 갖고 싶었던 모든 것입니다.",
      author: "Danyel Koca",
      role: "Sakana AI AI 엔지니어 | 전 McKinsey & Company 시니어 데이터 사이언티스트",
    },
    caseStudy: {
      title: "Claude Code로 구축",
      description: "저는 Kumamap — 일본 1위 곰 출몰 추적기 — 를 전적으로 Claude Code로 만들었습니다. 이 가이드는 제가 사용한 정확한 패턴을 가르쳐 드립니다.",
      cta: "라이브 제품 보기",
      stats: {
        views: { value: "130만", label: "페이지뷰" },
        users: { value: "38.9만", label: "사용자" },
        time: { value: "3개월", label: "구축 기간" },
      },
    },
    curriculum: {
      title: "구성 내용",
      subtitle: "13개 섹션에 걸친 51가지 팁",
      viewAll: "{count}개 팁 모두 보기",
    },
    sample: {
      title: "품질 확인하기",
      subtitle: "이 팁을 무료로 읽어보세요. 도움이 된다면 49개가 더 있습니다.",
      readFull: "전체 팁 무료로 읽기",
    },
    pricing: {
      title: "일회성 구매",
      price: "$29",
      subtitle: "51가지 팁 평생 이용",
      features: ["코드 예제가 포함된 51가지 상세 팁", "복사해서 바로 쓰는 CLAUDE.md 설정", "13개 정리된 섹션", "향후 업데이트 포함"],
      cta: "즉시 이용하기",
      guarantee: "7일 환불 보장. 질문 없이.",
    },
    checkoutCanceled: "결제가 취소되었습니다. 준비되면 언제든지.",
  },

  // Pricing page
  pricingPage: {
    pageTitle: "결제 - Claude Code Tips",
    pageDescription: "51가지 팁 모두 $29에 즉시 이용",
    emailLabel: "이메일 주소",
    emailPlaceholder: "you@example.com",
    cta: "결제 계속하기",
    processing: "처리 중...",
    errors: {
      emailRequired: "이메일을 입력해주세요.",
      invalidEmail: "유효한 이메일 주소를 입력해주세요.",
      checkoutFailed: "문제가 발생했습니다. 다시 시도해주세요.",
    },
  },

  // Guide
  guide: {
    title: "가이드",
    overview: "51가지 팁 전체",
    overviewDescription: "6개월 일일 사용에서 얻은 실전 검증된 팁으로 Claude Code를 마스터하세요.",
    backToGuide: "가이드로 돌아가기",
    free: "무료",
    freePreview: "무료 미리보기",
    locked: "잠금 해제하여 읽기",
    lockedTitle: "이 팁은 잠겨 있습니다",
    lockedDescription: "일회성 구매로 51가지 팁 전체에 접근하세요.",
    unlockCta: "전체 가이드 잠금 해제 - $29",
    unlockAll: "51가지 팁 전체 잠금 해제",
    sections: "섹션",
    freeLabel: "무료 미리보기",
    whatsIncluded: "포함 내용",
    detailedTips: "상세 팁",
    organizedSections: "정리된 섹션",
    freePreviews: "무료 미리보기",
    startReading: "읽기 시작",
    jumpTo: "섹션으로 이동",
  },

  // Section data (unified: title, short description, long description)
  sections: {
    setup: {
      title: "설정",
      short: "터미널, CLAUDE.md, 단축키 및 명령어",
      long: "올바른 터미널 설정, CLAUDE.md 구성, 시간을 절약해 줄 필수 키보드 단축키로 Claude Code를 최적으로 실행하세요.",
    },
    safety: {
      title: "안전",
      short: "Git, 권한, 민감한 파일 보호",
      long: "적절한 git 관행, 파일 권한, 속도와 보안의 균형을 맞추는 스마트한 자동 승인 규칙으로 코드베이스와 비밀을 보호하세요.",
    },
    planning: {
      title: "계획",
      short: "플랜 모드, 상세 계획, 엔드투엔드 사고",
      long:
        "코딩 전에 복잡한 작업을 깊이 생각하기 위해 플랜 모드를 마스터하세요. Claude가 완벽하게 실행할 수 있는 상세하고 실행 가능한 계획을 만드는 방법을 배우세요.",
    },
    prompting: {
      title: "프롬프팅",
      short: "Ultrathink, 직접적으로 말하기, 중요성 강조",
      long: "고급 프롬프팅 기술로 Claude의 잠재력을 최대한 발휘하세요. Ultrathink부터 전략적 안내까지, 일관되게 더 나은 결과를 얻는 방법을 배우세요.",
    },
    session: {
      title: "세션",
      short: "컨텍스트 관리, 재개, 품질 저하",
      long:
        "긴 코딩 세션에서 컨텍스트를 효과적으로 관리하세요. Claude의 최고 성능을 유지하기 위해 언제 압축하고, 지우고, 새로 시작해야 하는지 알아보세요.",
    },
    input: {
      title: "입력",
      short: "이미지, 스크린샷, 오류 메시지",
      long: "더 빠른 디버깅을 위해 이미지, 스크린샷, 올바르게 포맷된 오류 메시지로 Claude의 멀티모달 기능을 활용하세요.",
    },
    "multi-agent": {
      title: "멀티 에이전트",
      short: "병렬 에이전트, 워크트리, 서브에이전트",
      long: "여러 Claude 인스턴스로 생산성을 확장하세요. Git 워크트리, 병렬 에이전트, 서브에이전트를 효과적으로 사용하는 시점을 배우세요.",
    },
    customization: {
      title: "커스터마이징",
      short: "계층적 설정, 명령어, 커스텀 에이전트",
      long: "계층적 CLAUDE.md 파일, 커스텀 슬래시 명령어, 특화된 에이전트로 Claude Code를 워크플로우에 맞게 조정하세요.",
    },
    pitfalls: {
      title: "함정",
      short: "주의해야 할 일반적인 Claude 동작",
      long: "Claude Code 사용자가 빠지기 쉬운 일반적인 함정을 피하세요. 오버엔지니어링부터 조용한 실패까지, 무엇을 주의해야 하는지 배우세요.",
    },
    advanced: {
      title: "고급",
      short: "훅, MCP 서버, 스킬, 헤드리스 모드",
      long: "자동화 및 CI/CD 통합을 위한 훅, MCP 서버, 스킬, 헤드리스 모드와 같은 파워 유저 기능을 잠금 해제하세요.",
    },
    "use-cases": {
      title: "사용 사례",
      short: "품질 검사, POC, 학습, 커밋",
      long: "코드베이스 품질 검사부터 빠른 프로토타이핑까지 실제 응용 프로그램. 일상 업무에서 Claude Code를 효과적으로 적용하는 방법을 확인하세요.",
    },
    closing: {
      title: "마무리",
      short: "자신만의 워크플로우 찾기에 대한 최종 조언",
      long: "개인 워크플로우 찾기에 대한 최종 조언. 모든 기능이 모두에게 맞는 것은 아닙니다 - 자신에게 맞는 것에 집중하세요.",
    },
    bonus: {
      title: "보너스",
      short: "6개월 일일 사용에서 검증된 CLAUDE.md",
      long: "6개월 일일 사용에서 추출한 완전하고 실전 검증된 CLAUDE.md 파일. 복사하고, 수정하고, 자신만의 것으로 만드세요.",
    },
  },

  // Paywall
  paywall: {
    title: "전체 가이드 잠금 해제",
    description: "$29에 51가지 팁 전체 이용",
    cta: "전체 이용하기",
    alreadyPurchased: "이미 구매하셨나요?",
    restoreAccess: "액세스 복원",
  },

  // Success page
  success: {
    title: "감사합니다!",
    description: "구매가 완료되었습니다. 이제 51가지 팁 전체에 접근할 수 있습니다.",
    cta: "읽기 시작",
  },

  // Restore page
  restore: {
    pageTitle: "액세스 복원 - Claude Code Tips",
    title: "액세스 복원",
    description: "구매 시 사용한 이메일을 입력하여 이 기기에서 액세스를 복원하세요.",
    emailLabel: "구매 이메일",
    emailPlaceholder: "you@example.com",
    cta: "액세스 복원",
    successMessage: "액세스가 복원되었습니다!",
    redirecting: "가이드로 리디렉션 중...",
    noAccount: "아직 구매하지 않으셨나요?",
    buyNow: "지금 구매",
    errors: {
      restoreFailed: "액세스 복원 실패. 다시 시도하세요.",
      emailRequired: "이메일이 필요합니다.",
      invalidEmail: "유효한 이메일 주소를 입력해주세요.",
      rateLimitExceeded: "시도 횟수가 너무 많습니다. 1시간 후 다시 시도하세요.",
    },
  },

  // Footer
  footer: {
    builtWith: "Claude Code로 제작",
    guide: "가이드",
    company: "회사",
    legal: "법적 고지",
    allTips: "51가지 팁 전체",
    faq: "FAQ",
    restoreAccess: "액세스 복원",
    pricing: "가격",
    blog: "블로그",
    about: "소개",
    privacy: "개인정보 처리방침",
    terms: "이용약관",
    disclosure: "공시",
  },

  // About page
  about: {
    pageTitle: "소개 - Claude Code Tips",
    pageDescription: "Claude Code Tips의 제작자 Danyel Koca와 이 가이드가 존재하는 이유에 대해 알아보세요.",
    heroTitle: "실무자가 만든",
    heroSubtitle: "이 가이드는 매일 Claude Code를 사용하여 실제 제품을 만드는 사람이 작성했습니다.",
    storyTitle: "이야기",
    storyPara1:
      "저는 도쿄 Sakana AI의 응용 연구 엔지니어 Danyel Koca입니다. 그 전에는 McKinsey & Company에서 3년간 시니어 데이터 사이언티스트로 근무하며 기업 고객을 위한 AI/ML 솔루션을 구축했습니다.",
    storyPara2:
      "Claude Code가 출시된 이후로 매일 사용해 왔습니다. 호기심으로 시작한 것이 집착으로 변했습니다 - 워크플로우를 극적으로 개선하는 새로운 패턴, 단축키, 설정을 계속 발견하게 되었습니다.",
    storyPara3: "6개월 동안 매일 사용한 후, 첫날에 누군가 알려줬으면 좋았을 수십 가지 팁을 축적했습니다. 그래서 이 가이드를 만들었습니다.",
    whyTitle: "이 가이드가 존재하는 이유",
    whyPara1:
      "대부분의 Claude Code 튜토리얼은 기본적인 것만 다룹니다: 설치 방법, 명령어 실행 방법. 하지만 생산성을 높여주는 실제 패턴은 다루지 않습니다.",
    whyPara2: "이 가이드는 다릅니다. 모든 팁은 프로덕션 시스템을 구축한 실제 경험에서 나왔습니다. 이론 없음 - 정말 효과가 있는 것만.",
    credentialsTitle: "자격",
    credentialsList: [
      "Sakana AI 응용 연구 엔지니어",
      "전 McKinsey & Company 시니어 데이터 사이언티스트",
      "교토대학교 졸업 (GPA 3.76/4)",
      "IEEE 게재 연구자",
      "3개 국어 구사: 영어, 일본어 (JLPT N1), 터키어",
    ],
    contactTitle: "연락하기",
    contactPara: "질문이나 피드백이 있으신가요? 연락 주시면 감사하겠습니다.",
    contactLinks: {
      linkedin: "LinkedIn",
      github: "GitHub",
      website: "웹사이트",
    },
  },

  // Privacy page
  privacy: {
    pageTitle: "개인정보 처리방침 - Claude Code Tips",
    pageDescription: "Claude Code Tips 개인정보 처리방침 및 데이터 처리",
    title: "개인정보 처리방침",
    dataCollectedTitle: "수집하는 데이터",
    dataCollectedDescription: "가이드를 구매할 때:",
    dataEmail: "이메일 (배송 및 접근용)",
    paymentTitle: "결제 처리",
    paymentDescription: "모든 결제는 Stripe에서 안전하게 처리됩니다. 결제 정보를 저장하지 않습니다.",
    contactTitle: "연락처",
    contactLabel: "이메일",
    contactEmail: "hello@claudecodetips.com",
  },

  // Terms page
  terms: {
    pageTitle: "이용약관 - Claude Code Tips",
    pageDescription: "Claude Code Tips 이용약관",
    title: "이용약관",
    serviceTitle: "서비스",
    serviceDescription:
      "Claude Code Tips는 Claude Code 마스터를 위한 51가지 팁이 담긴 디지털 가이드를 제공합니다. 구매 시 평생 접근 권한을 받습니다.",
    paymentTitle: "결제",
    paymentDescription: "가이드 접근권을 구매할 수 있습니다:",
    paymentOneTime: "$29 USD 일회성 결제",
    paymentStripe: "모든 결제는 Stripe를 통해 안전하게 처리",
    refundTitle: "환불",
    refundDescription: "7일 환불 보장. 만족하지 않으시면 7일 이내에 연락 주시면 전액 환불해 드립니다.",
    contactTitle: "연락처",
    contactLabel: "이메일",
    contactEmail: "hello@claudecodetips.com",
  },

  // Disclosure page (Commercial Disclosure)
  disclosure: {
    pageTitle: "상거래 공시 - Claude Code Tips",
    pageDescription: "일본 법률에 따른 상거래 공시",
    title: "상거래 공시",
    sellerName: "판매자",
    sellerNameValue: "Claude Code Tips",
    address: "주소",
    addressValue: "요청 시 공개",
    phone: "전화",
    phoneValue: "요청 시 공개",
    email: "이메일",
    emailValue: "hello@claudecodetips.com",
    headOfOperations: "운영 책임자",
    headOfOperationsValue: "요청 시 공개",
    additionalFees: "추가 요금",
    additionalFeesValue: "없음",
    refundPolicy: "환불 정책",
    refundServiceIssues: "서비스 문제",
    refundServiceIssuesValue: "시스템 문제로 서비스가 제공되지 않는 경우 hello@claudecodetips.com으로 연락해 주세요. 검토 후 전액 환불해 드립니다.",
    refundCustomer: "고객 요청",
    refundCustomerValue: "7일 환불 보장. 구매에 만족하지 않으시면 7일 이내에 연락 주시면 질문 없이 전액 환불해 드립니다.",
    deliveryTime: "배송 시간",
    deliveryTimeValue: "결제 후 즉시 접근",
    paymentMethods: "결제 방법",
    paymentMethodsValue: "신용카드 (Visa, Mastercard, American Express, JCB)",
    paymentPeriod: "결제 기간",
    paymentPeriodValue: "신용카드 결제 시 즉시 처리",
    price: "가격",
    priceValue: "$29 USD",
    priceTaxNote: "*가격에는 모든 적용 세금이 포함됩니다",
  },

  // Blog (UI strings only - post content in .svx files)
  blog: {
    pageTitle: "블로그 - Claude Code Tips",
    pageDescription: "51 Tips 가이드 제작자가 전하는 Claude Code에 대한 팁, 튜토리얼 및 인사이트.",
    title: "블로그",
    subtitle: "Claude Code에 대한 팁, 튜토리얼 및 인사이트",
    readMore: "더 읽기",
    publishedOn: "게시일",
    backToBlog: "블로그로 돌아가기",
    noPosts: "아직 게시물이 없습니다. 곧 다시 확인해 주세요!",
  },

  // Disclaimer for untranslated content
  disclaimer: {
    notTranslated: "이 콘텐츠는 아직 한국어로 제공되지 않습니다. 영어 버전을 표시합니다.",
  },

  // FAQ page
  faq: {
    pageTitle: "FAQ - Claude Code Tips",
    pageDescription: "Claude Code Tips 가이드에 대한 자주 묻는 질문.",
    title: "자주 묻는 질문",
    items: [
      {
        q: "가이드 형식이 어떻게 되나요?",
        a: "어떤 기기에서든 접근할 수 있는 웹 기반 가이드입니다. PDF 다운로드가 필요 없습니다.",
      },
      {
        q: "Claude Code 경험이 필요한가요?",
        a: "기본적인 이해가 도움이 되지만, 가이드는 초기 설정부터 고급 기술까지 모든 것을 다룹니다.",
      },
      {
        q: "Claude Code가 업데이트되면 어떻게 되나요?",
        a: "가이드는 안정적으로 유지되는 워크플로우와 패턴에 초점을 맞춥니다. 주요 기능이 변경되면 가이드도 업데이트됩니다.",
      },
    ],
  },
};
