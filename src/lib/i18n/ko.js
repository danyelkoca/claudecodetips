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

  // Navigation
  nav: {
    guide: "가이드",
    toggleMenu: "메뉴 전환",
  },

  // Theme toggle
  theme: {
    light: "라이트 모드",
    dark: "다크 모드",
  },

  // Landing page
  landing: {
    hero: {
      eyebrow: "Kumamap(38.9만 사용자) 개발자로부터",
      title: "몇 달이 아닌 며칠 만에 Claude Code 마스터하기",
      subtitle: "초보자와 파워 유저를 구분하는 워크플로우, 단축키, 설정들.",
      seeAll: "전체 {count}개 팁 보기",
    },
    problem: {
      title: "익숙한가요?",
      subtitle: "이러한 불만이 이 가이드를 쓰게 만들었습니다",
      cards: [
        {
          title: "Claude가 CLAUDE.md를 무시함",
          description: "사용자 지정 지시가 무시되거나 대화 중간에 잊혀짐",
        },
        {
          title: "모든 것을 과잉 설계함",
          description: "간단한 함수를 요청하면 500줄의 추상화가 돌아옴",
        },
        {
          title: "매번 다른 결과",
          description: "같은 프롬프트, 매우 다른 출력 품질",
        },
        {
          title: "완료라고 하지만 망가져 있음",
          description: "자신있게 실제로 작동하지 않는 코드를 제공함",
        },
      ],
    },
    author: {
      sectionTitle: "왜 이 가이드를 신뢰해야 할까요?",
      quote: "수백 시간의 시행착오를 통해 Claude Code에서 실제로 효과가 있는 것을 알아냈습니다. 이 가이드는 제가 배운 모든 것입니다.",
    },
    experience: {
      title: "이 가이드 뒤의 경험",
      subtitle: "이 문제들을 읽기만 한 게 아니라, 직접 겪었습니다.",
      conclusion: "27억 토큰의 경험을 51개의 실용적인 팁으로 압축했습니다.",
      stats: {
        tokens: "2,772,274,103",
        cost: "$2,288.41",
        period: "2025년 11월 28일 - 2026년 1월 5일",
      },
    },
    social: {
      quote: "Claude Code는 가파른 학습 곡선을 가지고 있습니다. 무엇이 효과가 있고 무엇이 없는지 알아내는 데 수백 시간을 보냈습니다. 이 가이드는 제가 첫날부터 갖고 싶었던 모든 것입니다.",
      author: "Danyel Koca",
      roleTitle: "Sakana AI 응용 연구 엔지니어",
      roleSubtitle: "전 McKinsey & Company 시니어 데이터 사이언티스트",
    },
    caseStudy: {
      title: "효과의 증거",
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
      sections: "섹션",
    },
    sample: {
      title: "Featured Tips",
      subtitle: "Start with these popular tips",
      readFree: "무료로 읽기",
    },
  },

  // Guide
  guide: {
    title: "가이드",
    overview: "51가지 팁 전체",
    overviewDescription: "6개월 일일 사용에서 얻은 실전 검증된 팁으로 Claude Code를 마스터하세요.",
    backToGuide: "가이드로 돌아가기",
    sections: "섹션",
    whatsIncluded: "포함 내용",
    detailedTips: "상세 팁",
    organizedSections: "정리된 섹션",
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

  // Footer
  footer: {
    builtWith: "Claude Code로 제작",
    product: "제품",
    company: "회사",
    legal: "법적 고지",
    faq: "FAQ",
    blog: "블로그",
    about: "소개",
    contact: "문의하기",
    privacy: "개인정보 처리방침",
    terms: "이용약관",
    disclosure: "공시",
  },

  // Contact page
  contact: {
    pageTitle: "문의하기 - Claude Code Tips",
    pageDescription: "질문이나 피드백을 남겨주세요",
    title: "문의하기",
    description: "질문이나 피드백이 있으신가요? 연락 주시면 감사하겠습니다.",
    nameLabel: "이름",
    namePlaceholder: "이름",
    emailLabel: "이메일",
    emailPlaceholder: "you@example.com",
    messageLabel: "메시지",
    messagePlaceholder: "메시지 입력...",
    cta: "메시지 보내기",
    sent: "전송됨",
    successMessage: "메시지가 성공적으로 전송되었습니다! 곧 답변 드리겠습니다.",
    errors: {
      nameRequired: "이름을 입력해주세요.",
      emailRequired: "이메일을 입력해주세요.",
      invalidEmail: "유효한 이메일 주소를 입력해주세요.",
      messageRequired: "메시지를 입력해주세요 (최소 10자 이상).",
      rateLimitExceeded: "시도 횟수가 너무 많습니다. 1시간 후 다시 시도하세요.",
      submitFailed: "문제가 발생했습니다. 다시 시도해주세요.",
    },
  },

  // About page
  about: {
    pageTitle: "소개 - Claude Code Tips",
    pageDescription: "Claude Code Tips의 제작자 Danyel Koca와 이 가이드가 존재하는 이유에 대해 알아보세요.",
    heroTitle: "실무자가 만든",
    heroSubtitle: "이 가이드는 매일 Claude Code를 사용하여 실제 제품을 만드는 사람이 작성했습니다.",
    storyTitle: "이야기",
    storyPara1:
      "저는 도쿄 Sakana AI의 응용 연구 엔지니어 Danyel Koca로, 금융 서비스를 위한 AI 솔루션을 개발하고 있습니다. 그 전에는 McKinsey & Company에서 3년간 시니어 데이터 사이언티스트로 근무하며 기업 고객을 위한 AI/ML 솔루션을 구축했습니다.",
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
      "금융 서비스를 위한 AI 솔루션 구축",
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
    dataCollectedDescription: "This is a free guide. We only collect data you voluntarily provide through our contact form.",
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
      "Claude Code Tips provides a free digital guide containing 51 tips for mastering Claude Code.",
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
    notTranslated: "이 콘텐츠의 번역 작업을 진행 중입니다. 현재 영어 버전을 표시합니다.",
    translationInProgress: "가이드 내용은 현재 영어입니다. 번역 작업을 진행 중입니다.",
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
        q: "이 가이드는 얼마나 최신인가요?",
        a: "이 가이드는 2026년 1월 기준 최신 Claude Code 기능과 모범 사례를 반영합니다.",
      },
    ],
  },

  // Tip titles and summaries
  tips: {
    "1": { title: "터미널 사용하기", summary: "터미널에서 Claude Code를 사용하는 것이 가장 유연한 상호작용 방법입니다." },
    "2": { title: "CLAUDE.md 생성하기", summary: "Claude를 위한 프로젝트 설명서. 효과적인 Claude Code 사용을 위한 가장 중요한 파일." },
    "3": { title: "단축키와 명령어", summary: "효율적인 Claude Code 사용을 위한 필수 키보드 단축키와 명령어." },
    "4": { title: "Git 적극 활용하기", summary: "Claude가 대규모 변경을 할 때 Git은 안전망입니다. 자주 커밋하고, diff를 확인하고, 복구 명령어를 숙지하세요." },
    "5": { title: "민감한 파일 보호하기", summary: "Claude Code는 묻지 않고 .env 파일을 자동으로 읽습니다. deny 규칙을 추가해 비밀을 보호하세요." },
    "6": { title: "Bash 명령어 자동 승인 금지", summary: "Bash 명령어 자동 승인은 Claude Code에서 할 수 있는 가장 위험한 일입니다." },
    "7": { title: "안전한 작업 자동 승인", summary: "읽기와 검색 같은 저위험 작업을 자동 승인해 워크플로우를 가속화하세요." },
    "8": { title: "항상 플랜 모드 사용", summary: "복잡한 작업 전에 Shift+Tab을 두 번 눌러 플랜 모드로 진입하세요. Claude가 코딩 전에 생각합니다." },
    "9": { title: "일반적인 계획 수락 금지", summary: "계획이 항상 코드 수준에서 상세하고 사실에 기반하는지 확인하세요." },
    "10": { title: "CLAUDE.md에 대해 검증하기", summary: "Claude에게 CLAUDE.md 규칙에 대해 계획을 검증하도록 요청하세요. 대화가 길어지면 Claude는 지시를 잊습니다." },
    "11": { title: "엔드투엔드 사고 강제하기", summary: "Claude가 행동에서 결과까지 전체 경로를 추적하게 하세요." },
    "12": { title: "Ultrathink 항상 켜기", summary: "Claude가 처음 떠오른 것을 말하게 두지 마세요. 생각하게 하세요. 항상." },
    "13": { title: "직접적으로 말하기", summary: "수량에 대해 명시적으로 말하세요. Claude는 쉬운 길을 선택하는 경향이 있습니다." },
    "14": { title: "하지 말아야 할 것이 아닌 해야 할 것 말하기", summary: "Claude에게 하지 말아야 할 것을 말할 때 항상 대안을 제시하세요." },
    "15": { title: "중요성 과장하기", summary: "Claude는 인식된 중요성에 따라 노력을 조정합니다. 높은 중요성 = 철저한 작업." },
    "16": { title: "Claude를 사람이 아닌 도구로 취급하기", summary: "예의를 걱정하지 마세요. 직접적일 때 Claude가 더 잘 동작합니다." },
    "17": { title: "Claude는 어시스턴트 작업에 뛰어남 - 전략적 작업은 안내하기", summary: "전략적 작업을 어시스턴트형 작업으로 변환해 Claude가 먼저 조사하게 안내하세요." },
    "18": { title: "하나의 작업 = 하나의 세션", summary: "작업이 끝나면 닫으세요. /clear로 컨텍스트를 지우고 새로 시작하세요." },
    "19": { title: "긴 세션에서 품질 저하", summary: "컨텍스트 윈도우가 채워집니다. Claude가 둔해집니다. 압축하거나 지울 때를 알아야 합니다." },
    "20": { title: "/resume으로 세션 계속하기", summary: "Claude가 충돌했나요? 터미널이 닫혔나요? /resume으로 중단한 곳에서 계속하세요." },
    "21": { title: "'모두 완료'를 믿지 마세요", summary: "Claude는 종종 엣지 케이스를 놓치거나 단계를 조용히 건너뜁니다. 항상 확인하세요." },
    "22": { title: "이미지/스크린샷 사용하기", summary: "시각적 버그에는 Ctrl+V로 스크린샷을 직접 붙여넣으세요. 이미지 하나가 천 토큰의 가치가 있습니다." },
    "23": { title: "오류 메시지 그대로 복사하기", summary: "바꿔 쓰지 마세요. 줄 번호가 포함된 전체 스택 트레이스를." },
    "24": { title: "첫 번째에 완벽을 기대하지 마세요", summary: "한 에이전트가 코드를 작성하게 하고, 다른 에이전트로 코드를 확인하세요." },
    "25": { title: "큰 작업에는 여러 에이전트", summary: "같은 프롬프트로 여러 에이전트를 실행하세요. 큰 작업에서 한 에이전트가 제대로 하는 경우는 드뭅니다." },
    "26": { title: "복잡한 문제를 단계로 분해하기", summary: "하나의 거대한 세션보다 하위 작업당 하나의 세션이 낫습니다." },
    "27": { title: "Git Worktrees", summary: "같은 저장소에서 여러 작업 디렉토리. 각각에서 Claude를 실행하세요." },
    "28": { title: "서브에이전트 - 주의해서 사용", summary: "서브에이전트 요약은 세부사항을 잃습니다. 중요한 코드는 메인 에이전트가 직접 파일을 읽게 하세요." },
    "29": { title: "계층적 CLAUDE.md", summary: "프로젝트 루트 + 하위 디렉토리 + 전역에 CLAUDE.md. Claude는 가장 구체적인 것을 우선합니다." },
    "30": { title: "커스텀 슬래시 명령어", summary: ".claude/commands/ 폴더에 재사용 가능한 워크플로우를 만드세요." },
    "31": { title: "커스텀 에이전트", summary: "자체 컨텍스트 윈도우, 시스템 프롬프트, 도구 제한이 있는 전문 에이전트를 만드세요." },
    "32": { title: "Claude는 URL을 만들어냅니다", summary: "존재하지 않는 URL을 환각합니다. 외부 링크를 신뢰하기 전에 항상 확인하세요." },
    "33": { title: "Claude는 과잉 설계합니다", summary: "간단한 함수를 요청하면 팩토리 패턴이 있는 추상 클래스를 받습니다." },
    "34": { title: "Claude는 중복을 만듭니다", summary: "Claude는 코드베이스를 검색하지 않습니다. 그냥 새 코드를 작성합니다." },
    "35": { title: "Claude는 추가만 하고 제거하지 않습니다", summary: "Claude는 코드를 추가만 합니다. 절대 제거하지 않습니다. 명시적으로 삭제를 강제해야 합니다." },
    "36": { title: "Claude는 예스맨입니다", summary: "Claude는 당신이 말하는 모든 것에 동의합니다. 가정에 이의를 제기하라고 말하세요." },
    "37": { title: "Claude는 묻지 않고 가정합니다", summary: "모호한 요구사항? Claude는 해석을 선택하고 그대로 진행합니다." },
    "38": { title: "Claude는 파일을 부분적으로만 읽습니다", summary: "Claude는 첫 번째 청크를 읽고 작업을 시작합니다. 400번 줄의 중요한 함수? 놓칩니다." },
    "39": { title: "Claude는 코드 대신 테스트를 수정합니다", summary: "코드가 잘못되면 Claude는 나쁜 코드에 맞게 테스트 단언을 변경합니다." },
    "40": { title: "Hooks", summary: "편집, 도구 사용, 세션 시작 같은 특정 이벤트에서 실행되는 셸 명령어." },
    "41": { title: "MCP 서버", summary: "외부 도구 연결 - 데이터베이스, 브라우저 자동화, 문서 조회." },
    "42": { title: "Skills", summary: "관련 있을 때 자동으로 로드되는 자동 트리거 동작." },
    "43": { title: "GitHub Actions", summary: "/install-github-app을 실행해 저장소에 Claude를 설정하세요." },
    "44": { title: "헤드리스 모드", summary: "대화형 세션 없이 Claude를 실행합니다. 자동화와 스크립트용." },
    "45": { title: "정기적으로 코드베이스 품질 검사 실행", summary: "각 쿼리 = 1 세션. 하드코딩된 텍스트, 디자인 일관성 등을 확인하세요." },
    "46": { title: "POC에 Claude Code 활용하기", summary: "빠른 프로토타이핑에 완벽합니다. POC에서는 Claude에게 맡기세요." },
    "47": { title: "Claude는 보일러플레이트에 뛰어납니다", summary: "CRUD 작업, 폼, 설정 파일, 반복 패턴. Claude에게 맡기세요." },
    "48": { title: "Claude로 배우기", summary: "Claude가 코드만 작성하게 두지 마세요. 설명하게 하세요." },
    "49": { title: "커밋 메시지에 Claude 사용", summary: "Claude가 diff로부터 커밋을 작성하게 하세요. 일관된 형식, '왜'를 포착합니다." },
    "50": { title: "모든 새 기능을 쫓지 마세요", summary: "Claude Code는 매주 새 기능이 나옵니다. 효과가 있는 것에 집중하세요." },
    "51": { title: "실전 검증된 CLAUDE.md", summary: "6개월의 교훈, 실패, 수정에서 추출한 실제 CLAUDE.md 예시." },
  },
};
