export default {
	// Meta
	lang: 'ko',
	langName: '한국어',
	siteBrand: 'Claude Code Tips',

	// Common strings
	common: {
		tipPrefix: '팁',
		tip: '팁',
		tips: '팁',
		previous: '이전',
		next: '다음',
		loading: '로딩 중...',
		backArrow: '\u2190',
		forwardArrow: '\u2192'
	},

	// Error page
	error: {
		titleSuffix: '오류',
		notFoundTitle: '페이지를 찾을 수 없습니다',
		notFoundDescription: '찾으시는 페이지가 존재하지 않습니다.',
		genericTitle: '문제가 발생했습니다',
		genericDescription: '예상치 못한 오류가 발생했습니다.',
		goHome: '홈으로 이동',
		// Server error keys (backend sends key, UI translates)
		langNotFound: '언어를 찾을 수 없습니다',
		blogNotFound: '블로그 게시물을 찾을 수 없습니다',
		sectionNotFound: '섹션을 찾을 수 없습니다',
		tipNotInSection: '이 섹션에서 팁을 찾을 수 없습니다',
		tipNotFound: '팁을 찾을 수 없습니다',
		emailRequired: '이메일이 필요합니다',
		checkoutFailed: '결제 세션 생성에 실패했습니다'
	},

	// Checkout
	checkout: {
		productName: 'Claude Code 마스터를 위한 50가지 팁',
		productDescription: '50가지 팁이 담긴 완전한 가이드 - 평생 이용'
	},

	// Navigation
	nav: {
		home: '홈',
		guide: '가이드',
		pricing: '가격',
		toggleMenu: '메뉴 전환'
	},

	// Landing page
	landing: {
		hero: {
			eyebrow: '6개월 일일 사용 경험에서',
			title: '몇 달이 아닌 며칠 만에 Claude Code 마스터하기',
			subtitle: '초보자와 파워 유저를 구분하는 워크플로우, 단축키, 설정들.',
			cta: '가이드 구매 - $29',
			guarantee: '14일 환불 보장'
		},
		social: {
			quote:
				'Claude Code로 실제 제품을 500시간 이상 만들면서 정말 효과가 있는 모든 패턴을 문서화했습니다.',
			author: 'Danyel Koca',
			role: 'Sakana AI 응용 연구 엔지니어 | 전 McKinsey 시니어 데이터 사이언티스트',
			benefits: [
				'몇 달간의 시행착오를 건너뛰세요',
				'복사해서 바로 쓰는 CLAUDE.md 설정',
				'어떤 프로젝트에도 적용되는 패턴'
			]
		},
		curriculum: {
			title: '구성 내용',
			subtitle: '12개 섹션에 걸친 50가지 팁 + 보너스 콘텐츠'
		},
		sample: {
			title: '품질 확인하기',
			subtitle: '이 팁을 무료로 읽어보세요. 도움이 된다면 49개가 더 있습니다.',
			readFull: '전체 팁 무료로 읽기'
		},
		pricing: {
			title: '일회성 구매',
			price: '$29',
			subtitle: '50가지 팁 평생 이용',
			features: [
				'코드 예제가 포함된 50가지 상세 팁',
				'복사해서 바로 쓰는 CLAUDE.md 설정',
				'12개 섹션 + 보너스 콘텐츠',
				'향후 업데이트 포함'
			],
			cta: '즉시 이용하기',
			anchor: '몇 달간의 시행착오를 건너뛰세요.',
			guarantee: '14일 환불 보장. 질문 없이.'
		}
	},

	// Guide
	guide: {
		title: '가이드',
		overview: '50가지 팁 전체',
		overviewDescription: '6개월 일일 사용에서 얻은 실전 검증된 팁으로 Claude Code를 마스터하세요.',
		backToGuide: '가이드로 돌아가기',
		free: '무료',
		freePreview: '무료 미리보기',
		locked: '잠금 해제하여 읽기',
		lockedTitle: '이 팁은 잠겨 있습니다',
		lockedDescription: '일회성 구매로 50가지 팁 전체에 접근하세요.',
		unlockCta: '전체 가이드 잠금 해제 - $29',
		unlockAll: '50가지 팁 전체 잠금 해제'
	},

	// Section data (unified: title, short description, long description)
	sections: {
		title: '모든 섹션',
		description:
			'13개 섹션으로 구성된 51가지 팁을 살펴보세요. 각 섹션은 Claude Code 마스터의 특정 측면에 초점을 맞춥니다.',
		tipsInSection: '이 섹션에',
		setup: {
			title: '설정',
			short: '터미널, CLAUDE.md, 단축키 및 명령어',
			long: '올바른 터미널 설정, CLAUDE.md 구성, 시간을 절약해 줄 필수 키보드 단축키로 Claude Code를 최적으로 실행하세요.'
		},
		safety: {
			title: '안전',
			short: 'Git, 권한, 민감한 파일 보호',
			long: '적절한 git 관행, 파일 권한, 속도와 보안의 균형을 맞추는 스마트한 자동 승인 규칙으로 코드베이스와 비밀을 보호하세요.'
		},
		planning: {
			title: '계획',
			short: '플랜 모드, 상세 계획, 엔드투엔드 사고',
			long: '코딩 전에 복잡한 작업을 깊이 생각하기 위해 플랜 모드를 마스터하세요. Claude가 완벽하게 실행할 수 있는 상세하고 실행 가능한 계획을 만드는 방법을 배우세요.'
		},
		prompting: {
			title: '프롬프팅',
			short: 'Ultrathink, 직접적으로 말하기, 중요성 강조',
			long: '고급 프롬프팅 기술로 Claude의 잠재력을 최대한 발휘하세요. Ultrathink부터 전략적 안내까지, 일관되게 더 나은 결과를 얻는 방법을 배우세요.'
		},
		session: {
			title: '세션',
			short: '컨텍스트 관리, 재개, 품질 저하',
			long: '긴 코딩 세션에서 컨텍스트를 효과적으로 관리하세요. Claude의 최고 성능을 유지하기 위해 언제 압축하고, 지우고, 새로 시작해야 하는지 알아보세요.'
		},
		input: {
			title: '입력',
			short: '이미지, 스크린샷, 오류 메시지',
			long: '더 빠른 디버깅을 위해 이미지, 스크린샷, 올바르게 포맷된 오류 메시지로 Claude의 멀티모달 기능을 활용하세요.'
		},
		'multi-agent': {
			title: '멀티 에이전트',
			short: '병렬 에이전트, 워크트리, 서브에이전트',
			long: '여러 Claude 인스턴스로 생산성을 확장하세요. Git 워크트리, 병렬 에이전트, 서브에이전트를 효과적으로 사용하는 시점을 배우세요.'
		},
		customization: {
			title: '커스터마이징',
			short: '계층적 설정, 명령어, 커스텀 에이전트',
			long: '계층적 CLAUDE.md 파일, 커스텀 슬래시 명령어, 특화된 에이전트로 Claude Code를 워크플로우에 맞게 조정하세요.'
		},
		pitfalls: {
			title: '함정',
			short: '주의해야 할 일반적인 Claude 동작',
			long: 'Claude Code 사용자가 빠지기 쉬운 일반적인 함정을 피하세요. 오버엔지니어링부터 조용한 실패까지, 무엇을 주의해야 하는지 배우세요.'
		},
		advanced: {
			title: '고급',
			short: '훅, MCP 서버, 스킬, 헤드리스 모드',
			long: '자동화 및 CI/CD 통합을 위한 훅, MCP 서버, 스킬, 헤드리스 모드와 같은 파워 유저 기능을 잠금 해제하세요.'
		},
		'use-cases': {
			title: '사용 사례',
			short: '품질 검사, POC, 학습, 커밋',
			long: '코드베이스 품질 검사부터 빠른 프로토타이핑까지 실제 응용 프로그램. 일상 업무에서 Claude Code를 효과적으로 적용하는 방법을 확인하세요.'
		},
		closing: {
			title: '마무리',
			short: '자신만의 워크플로우 찾기에 대한 최종 조언',
			long: '개인 워크플로우 찾기에 대한 최종 조언. 모든 기능이 모두에게 맞는 것은 아닙니다 - 자신에게 맞는 것에 집중하세요.'
		},
		bonus: {
			title: '보너스',
			short: '6개월 일일 사용에서 검증된 CLAUDE.md',
			long: '6개월 일일 사용에서 추출한 완전하고 실전 검증된 CLAUDE.md 파일. 복사하고, 수정하고, 자신만의 것으로 만드세요.'
		}
	},

	// Paywall
	paywall: {
		title: '전체 가이드 잠금 해제',
		description: '$29에 50가지 팁 전체 이용',
		cta: '전체 이용하기'
	},

	// Success page
	success: {
		title: '감사합니다!',
		description: '구매가 완료되었습니다. 이제 50가지 팁 전체에 접근할 수 있습니다.',
		cta: '읽기 시작'
	},

	// Footer
	footer: {
		builtWith: 'Claude Code로 제작',
		guide: '가이드',
		company: '회사',
		legal: '법적 고지',
		allTips: '50가지 팁 전체',
		faq: 'FAQ',
		blog: '블로그',
		about: '소개',
		privacy: '개인정보 처리방침',
		terms: '이용약관',
		disclosure: '공시'
	},

	// About page
	about: {
		pageTitle: '소개 - Claude Code Tips',
		pageDescription:
			'Claude Code Tips의 제작자 Danyel Koca와 이 가이드가 존재하는 이유에 대해 알아보세요.',
		heroTitle: '실무자가 만든',
		heroSubtitle: '이 가이드는 매일 Claude Code를 사용하여 실제 제품을 만드는 사람이 작성했습니다.',
		storyTitle: '이야기',
		storyPara1:
			'저는 도쿄 Sakana AI의 응용 연구 엔지니어 Danyel Koca입니다. 그 전에는 McKinsey & Company에서 3년간 시니어 데이터 사이언티스트로 근무하며 기업 고객을 위한 AI/ML 솔루션을 구축했습니다.',
		storyPara2:
			'Claude Code가 출시된 이후로 매일 사용해 왔습니다. 호기심으로 시작한 것이 집착으로 변했습니다 - 워크플로우를 극적으로 개선하는 새로운 패턴, 단축키, 설정을 계속 발견하게 되었습니다.',
		storyPara3:
			'6개월 동안 매일 사용한 후, 첫날에 누군가 알려줬으면 좋았을 수십 가지 팁을 축적했습니다. 그래서 이 가이드를 만들었습니다.',
		whyTitle: '이 가이드가 존재하는 이유',
		whyPara1:
			'대부분의 Claude Code 튜토리얼은 기본적인 것만 다룹니다: 설치 방법, 명령어 실행 방법. 하지만 생산성을 높여주는 실제 패턴은 다루지 않습니다.',
		whyPara2:
			'이 가이드는 다릅니다. 모든 팁은 프로덕션 시스템을 구축한 실제 경험에서 나왔습니다. 이론 없음 - 정말 효과가 있는 것만.',
		credentialsTitle: '자격',
		credentialsList: [
			'Sakana AI 응용 연구 엔지니어',
			'전 McKinsey & Company 시니어 데이터 사이언티스트',
			'교토대학교 졸업 (GPA 3.76/4)',
			'IEEE 게재 연구자',
			'3개 국어 구사: 영어, 일본어 (JLPT N1), 터키어'
		],
		contactTitle: '연락하기',
		contactPara: '질문이나 피드백이 있으신가요? 연락 주시면 감사하겠습니다.',
		contactLinks: {
			linkedin: 'LinkedIn',
			github: 'GitHub',
			website: '웹사이트'
		}
	},

	// Privacy page
	privacy: {
		pageTitle: '개인정보 처리방침 - Claude Code Tips',
		pageDescription: 'Claude Code Tips가 데이터를 어떻게 처리하고 개인정보를 보호하는지 알아보세요.',
		title: '개인정보 처리방침',
		lastUpdated: '최종 업데이트: 2024년 12월',
		introTitle: '우리의 약속',
		introPara:
			'우리는 최소한의 데이터 수집을 믿습니다. 구매를 처리하고 가이드를 제공하는 데 절대적으로 필요한 것만 수집합니다.',
		dataCollectedTitle: '수집하는 데이터',
		dataCollectedPara: '가이드를 구매할 때 수집하는 정보:',
		dataCollectedList: [
			'이메일 주소 (접근 권한 제공용)',
			'결제 정보 (Stripe에서 안전하게 처리)'
		],
		noTrackingTitle: '하지 않는 것',
		noTrackingList: [
			'분석 또는 추적 스크립트 없음',
			'광고용 쿠키 없음',
			'제3자에게 데이터 판매 또는 공유 없음',
			'행동 추적 없음'
		],
		stripeTitle: '결제 처리',
		stripePara:
			'모든 결제는 Stripe에서 안전하게 처리됩니다. 신용카드 정보 전체를 보거나 저장하지 않습니다. Stripe의 개인정보 처리방침이 결제 처리에 적용됩니다.',
		retentionTitle: '데이터 보관',
		retentionPara:
			'가이드에 대한 지속적인 접근을 제공하고 지원 요청을 처리하기 위해 구매 기록을 보관합니다.',
		contactTitle: '질문이 있으신가요?',
		contactPara: '개인정보 관련 질문은 다음으로 연락해 주세요:',
		contactEmail: 'privacy@claudecodeguide.com'
	},

	// Terms page
	terms: {
		pageTitle: '이용약관 - Claude Code Tips',
		pageDescription: 'Claude Code Tips 이용에 대한 약관입니다.',
		title: '이용약관',
		lastUpdated: '최종 업데이트: 2024년 12월',
		serviceTitle: '서비스',
		servicePara:
			'Claude Code Tips는 Claude Code 마스터를 위한 50가지 팁이 담긴 디지털 가이드를 제공합니다. 구매 시 웹 기반 가이드에 대한 평생 접근 권한을 받습니다.',
		paymentTitle: '결제',
		paymentList: [
			'$29 USD 일회성 결제',
			'현재 및 미래의 모든 팁에 대한 평생 접근',
			'반복 청구 또는 구독 없음'
		],
		refundTitle: '환불 정책',
		refundPara:
			'14일 환불 보장을 제공합니다. 가이드에 만족하지 않으시면 구매 후 14일 이내에 연락 주시면 전액 환불해 드립니다. 질문 없이.',
		licenseTitle: '라이선스',
		licensePara:
			'구매 시 가이드에 접근하고 사용할 수 있는 개인용, 양도 불가 라이선스가 부여됩니다. 다음은 금지됩니다:',
		licenseList: [
			'계정 또는 접근 권한을 다른 사람과 공유',
			'가이드 콘텐츠 복사, 재배포 또는 재게시',
			'허가 없이 콘텐츠를 상업적 목적으로 사용'
		],
		disclaimerTitle: '면책 조항',
		disclaimerPara:
			'이 가이드는 개인 경험을 바탕으로 "있는 그대로" 제공됩니다. 정확성을 위해 노력하지만 특정 결과를 보장하지는 않습니다. Claude Code는 Anthropic의 제품이며, 이 가이드는 Anthropic과 제휴하거나 승인받지 않았습니다.',
		contactTitle: '질문이 있으신가요?',
		contactPara: '이 약관에 대한 질문은 다음으로 연락해 주세요:',
		contactEmail: 'support@claudecodeguide.com'
	},

	// Disclosure page
	disclosure: {
		pageTitle: '공시 - Claude Code Tips',
		pageDescription:
			'제휴 관계 및 편집 독립성을 포함한 Claude Code Tips에 대한 중요한 공시입니다.',
		title: '공시',
		lastUpdated: '최종 업데이트: 2024년 12월',
		affiliationTitle: 'Anthropic과의 제휴 없음',
		affiliationPara:
			'이 가이드는 Danyel Koca가 만든 독립 제품입니다. Claude와 Claude Code를 만든 회사인 Anthropic과 제휴, 승인 또는 후원 관계가 없습니다. 모든 의견과 추천은 전적으로 저자의 것입니다.',
		independenceTitle: '편집 독립성',
		independencePara:
			'이 가이드의 모든 콘텐츠는 개인 경험을 바탕으로 한 저자의 진정한 의견을 반영합니다. 어떤 회사나 조직도 호의적인 보도에 대해 비용을 지불하거나 콘텐츠에 영향을 미치지 않았습니다.',
		aiAssistedTitle: 'AI 지원 콘텐츠',
		aiAssistedPara:
			'이 가이드는 Claude Code 자체의 도움으로 작성되었습니다. 저자는 Claude Code를 매일 사용하며 가이드 콘텐츠 작성, 편집 및 다듬기에 사용했습니다. 이는 투명성 정신에 따라 공개됩니다.',
		noSponsoredTitle: '스폰서 콘텐츠 없음',
		noSponsoredPara:
			'가이드에는 스폰서 콘텐츠, 유료 배치 또는 제휴 링크가 없습니다. 판매되는 유일한 제품은 가이드 자체입니다.',
		contactTitle: '질문이 있으신가요?',
		contactPara: '이 공시에 대한 질문은 다음으로 연락해 주세요:',
		contactEmail: 'hello@claudecodeguide.com'
	},

	// Blog (UI strings only - post content in .svx files)
	blog: {
		pageTitle: '블로그 - Claude Code Tips',
		pageDescription: '50 Tips 가이드 제작자가 전하는 Claude Code에 대한 팁, 튜토리얼 및 인사이트.',
		title: '블로그',
		subtitle: 'Claude Code에 대한 팁, 튜토리얼 및 인사이트',
		readMore: '더 읽기',
		publishedOn: '게시일',
		backToBlog: '블로그로 돌아가기',
		noPosts: '아직 게시물이 없습니다. 곧 다시 확인해 주세요!'
	},

	// Disclaimer for untranslated content
	disclaimer: {
		notTranslated: '이 콘텐츠는 아직 한국어로 제공되지 않습니다. 영어 버전을 표시합니다.'
	},

	// FAQ page
	faq: {
		pageTitle: 'FAQ - Claude Code Tips',
		pageDescription: 'Claude Code Tips 가이드에 대한 자주 묻는 질문.',
		title: '자주 묻는 질문',
		items: [
			{
				q: '가이드 형식이 어떻게 되나요?',
				a: '어떤 기기에서든 접근할 수 있는 웹 기반 가이드입니다. PDF 다운로드가 필요 없습니다.'
			},
			{
				q: 'Claude Code 경험이 필요한가요?',
				a: '기본적인 이해가 도움이 되지만, 가이드는 초기 설정부터 고급 기술까지 모든 것을 다룹니다.'
			},
			{
				q: 'Claude Code가 업데이트되면 어떻게 되나요?',
				a: '가이드는 안정적으로 유지되는 워크플로우와 패턴에 초점을 맞춥니다. 주요 기능이 변경되면 가이드도 업데이트됩니다.'
			}
		]
	}
};
