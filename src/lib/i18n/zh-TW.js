export default {
	lang: 'zh-TW',
	langName: '繁體中文',
	siteBrand: 'Claude Code Tips',

	common: {
		tipPrefix: '技巧',
		tip: '技巧',
		tips: '技巧',
		previous: '上一個',
		next: '下一個',
		loading: '載入中...',
		backArrow: '\u2190',
		forwardArrow: '\u2192'
	},

	error: {
		titleSuffix: '錯誤',
		notFoundTitle: '頁面未找到',
		notFoundDescription: '您要查找的頁面不存在。',
		genericTitle: '出錯了',
		genericDescription: '發生了意外錯誤。',
		goHome: '返回首頁',
		langNotFound: '語言未找到',
		blogNotFound: '部落格文章未找到',
		sectionNotFound: '章節未找到',
		tipNotInSection: '此章節中未找到技巧',
		tipNotFound: '技巧未找到',
		emailRequired: '需要電子郵件',
		checkoutFailed: '建立結帳會話失敗'
	},

	checkout: {
		productName: '掌握Claude Code的50個技巧',
		productDescription: '包含全部50個技巧的完整指南 - 終身存取'
	},

	nav: {
		home: '首頁',
		guide: '指南',
		pricing: '價格',
		toggleMenu: '切換選單'
	},

	landing: {
		hero: {
			eyebrow: '來自6個月的日常使用',
			title: '幾天內掌握Claude Code',
			subtitle: '區分初學者和進階用戶的工作流程、快捷鍵和設定。',
			cta: '取得指南 - $29',
			guarantee: '14天退款保證'
		},
		social: {
			quote: '在用Claude Code建構真實產品500多小時後，我記錄了所有真正有效的模式。',
			author: 'Danyel Koca',
			role: 'Sakana AI應用研究工程師 | 前McKinsey資深資料科學家',
			benefits: ['跳過數月的試錯', '即複即用的CLAUDE.md設定', '適用於任何專案的模式']
		},
		curriculum: {
			title: '內容概覽',
			subtitle: '12個章節共50個技巧 + 額外內容'
		},
		sample: {
			title: '查看品質',
			subtitle: '免費閱讀此技巧。如果有幫助，想像還有49個。',
			readFull: '免費閱讀全文'
		},
		pricing: {
			title: '一次性購買',
			price: '$29',
			subtitle: '全部50個技巧的終身存取',
			features: [
				'50個帶程式碼範例的詳細技巧',
				'可複製的CLAUDE.md設定',
				'12個章節 + 額外內容',
				'包含未來更新'
			],
			cta: '立即取得',
			anchor: '跳過數月的試錯。',
			guarantee: '14天無條件退款保證。'
		}
	},

	guide: {
		title: '指南',
		overview: '全部50個技巧',
		overviewDescription: '用這些經過6個月日常使用實戰測試的技巧掌握Claude Code。',
		backToGuide: '返回指南',
		free: '免費',
		freePreview: '免費預覽',
		locked: '解鎖閱讀',
		lockedTitle: '此技巧已鎖定',
		lockedDescription: '一次性購買即可取得全部50個技巧的完整存取權限。',
		unlockCta: '解鎖完整指南 - $29',
		unlockAll: '解鎖全部50個技巧'
	},

	sections: {
		title: '全部章節',
		description: '探索整理成13個章節的51個技巧。每個章節專注於掌握Claude Code的特定方面。',
		tipsInSection: '在此章節中',
		setup: {
			title: '設定',
			short: '終端、CLAUDE.md、快捷鍵和命令',
			long: '透過正確的終端設定、CLAUDE.md設定和節省時間的基本鍵盤快捷鍵讓Claude Code最佳運行。'
		},
		safety: {
			title: '安全',
			short: 'Git、權限、保護敏感檔案',
			long: '透過適當的git實踐、檔案權限和平衡速度與安全的智慧自動批准規則保護您的程式碼庫和秘密。'
		},
		planning: {
			title: '規劃',
			short: '計畫模式、詳細計畫、端到端思考',
			long: '掌握計畫模式以在編碼前思考複雜任務。學習建立Claude可以完美執行的詳細可操作計畫。'
		},
		prompting: {
			title: '提示',
			short: 'Ultrathink、直接、誇大重要性',
			long: '用進階提示技術釋放Claude的全部潛力。從ultrathink到策略指導，學習如何持續獲得更好的結果。'
		},
		session: {
			title: '會話',
			short: '上下文管理、恢復、品質下降',
			long: '在長時間編碼會話中有效管理上下文。知道何時壓縮、清除或重新開始以保持Claude的最佳效能。'
		},
		input: {
			title: '輸入',
			short: '圖片、截圖、錯誤訊息',
			long: '利用Claude的多模態能力處理圖片、截圖和正確格式的錯誤訊息以加快除錯。'
		},
		'multi-agent': {
			title: '多代理',
			short: '並行代理、工作樹、子代理',
			long: '用多個Claude實例擴展您的生產力。學習git工作樹、並行代理以及何時有效使用子代理。'
		},
		customization: {
			title: '自訂',
			short: '分層設定、命令、自訂代理',
			long: '用分層CLAUDE.md檔案、自訂斜線命令和專門代理根據您的工作流程定制Claude Code。'
		},
		pitfalls: {
			title: '陷阱',
			short: '需要注意的常見Claude行為',
			long: '避免讓Claude Code用戶絆倒的常見陷阱。從過度工程到靜默失敗，了解需要注意什麼。'
		},
		advanced: {
			title: '進階',
			short: '鉤子、MCP伺服器、技能、無頭模式',
			long: '解鎖鉤子、MCP伺服器、技能和用於自動化和CI/CD整合的無頭模式等進階用戶功能。'
		},
		'use-cases': {
			title: '用例',
			short: '品質檢查、POC、學習、提交',
			long: '從程式碼庫品質檢查到快速原型的實際應用。了解如何在日常工作中有效應用Claude Code。'
		},
		closing: {
			title: '結語',
			short: '找到您的工作流程的最終智慧',
			long: '找到個人工作流程的最終智慧。不是每個功能都適合每個人 - 專注於對您有效的東西。'
		},
		bonus: {
			title: '額外',
			short: '6個月日常使用的實戰測試CLAUDE.md',
			long: '從6個月日常使用中提煉的完整實戰測試CLAUDE.md檔案。複製、調整並使其成為您自己的。'
		}
	},

	paywall: {
		title: '解鎖完整指南',
		description: '僅需$29即可存取全部50個技巧',
		cta: '取得完整存取'
	},

	success: {
		title: '謝謝！',
		description: '您的購買已成功。您現在可以完整存取全部50個技巧。',
		cta: '開始閱讀'
	},

	footer: {
		builtWith: '使用Claude Code建構',
		guide: '指南',
		company: '公司',
		legal: '法律',
		allTips: '全部50個技巧',
		faq: '常見問題',
		blog: '部落格',
		about: '關於',
		privacy: '隱私',
		terms: '條款',
		disclosure: '披露'
	},

	about: {
		pageTitle: '關於 - Claude Code Tips',
		pageDescription: '了解Claude Code Tips的建立者Danyel Koca，以及為什麼存在這個指南。',
		heroTitle: '由實踐者建構',
		heroSubtitle: '這個指南是由每天使用Claude Code建構真實產品的人建立的。',
		storyTitle: '故事',
		storyPara1: '我是Danyel Koca，東京Sakana AI的應用研究工程師。在此之前，我在McKinsey & Company擔任資深資料科學家3年，為企業客戶建構AI/ML解決方案。',
		storyPara2: '自Claude Code發布以來我每天都在使用。最初是好奇心，後來變成了痴迷 - 我發現自己不斷發現新的模式、快捷鍵和設定，極大地改善了我的工作流程。',
		storyPara3: '經過6個月的日常使用，我積累了幾十個希望第一天就有人告訴我的技巧。這就是我建立這個指南的原因。',
		whyTitle: '為什麼存在這個指南',
		whyPara1: '大多數Claude Code教學涵蓋基礎知識：如何安裝，如何執行命令。但它們不涵蓋真正讓您高效的模式。',
		whyPara2: '這個指南不同。每個技巧都來自建構生產系統的真實經驗。沒有理論 - 只有真正有效的東西。',
		credentialsTitle: '資歷',
		credentialsList: [
			'Sakana AI應用研究工程師',
			'前McKinsey & Company資深資料科學家',
			'京都大學畢業 (GPA 3.76/4)',
			'IEEE發表研究員',
			'三語：英語、日語 (JLPT N1)、土耳其語'
		],
		contactTitle: '聯絡方式',
		contactPara: '有問題或回饋？我很樂意聽取。',
		contactLinks: {
			linkedin: 'LinkedIn',
			github: 'GitHub',
			website: '網站'
		}
	},

	privacy: {
		pageTitle: '隱私政策 - Claude Code Tips',
		pageDescription: '了解Claude Code Tips如何處理您的資料並保護您的隱私。',
		title: '隱私政策',
		lastUpdated: '最後更新：2024年12月',
		introTitle: '我們的承諾',
		introPara: '我們相信最小化資料收集。我們只收集處理購買和提供指南絕對必要的資料。',
		dataCollectedTitle: '我們收集的資料',
		dataCollectedPara: '當您購買指南時，我們收集：',
		dataCollectedList: [
			'電子郵件地址（用於提供存取）',
			'支付資訊（由Stripe安全處理）'
		],
		noTrackingTitle: '我們不做的事',
		noTrackingList: [
			'沒有分析或追蹤腳本',
			'沒有廣告Cookie',
			'不向第三方出售或分享您的資料',
			'沒有行為追蹤'
		],
		stripeTitle: '支付處理',
		stripePara: '所有支付由Stripe安全處理。我們從不查看或儲存您的完整信用卡詳細資訊。Stripe的隱私政策適用於支付處理。',
		retentionTitle: '資料保留',
		retentionPara: '我們保留購買記錄以便為您提供對指南的持續存取並處理任何支援請求。',
		contactTitle: '問題？',
		contactPara: '如有任何隱私相關問題，請聯絡我們：',
		contactEmail: 'privacy@claudecodeguide.com'
	},

	terms: {
		pageTitle: '服務條款 - Claude Code Tips',
		pageDescription: 'Claude Code Tips的使用條款和條件。',
		title: '服務條款',
		lastUpdated: '最後更新：2024年12月',
		serviceTitle: '服務',
		servicePara: 'Claude Code Tips提供包含50個掌握Claude Code技巧的數位指南。購買後，您將獲得網頁版指南的終身存取權限。',
		paymentTitle: '支付',
		paymentList: [
			'一次性支付$29美元',
			'終身存取所有當前和未來的技巧',
			'無定期收費或訂閱'
		],
		refundTitle: '退款政策',
		refundPara: '我們提供14天退款保證。如果您對指南不滿意，請在購買後14天內聯絡我們申請全額退款。無需解釋。',
		licenseTitle: '授權',
		licensePara: '您的購買授予您存取和使用指南的個人、不可轉讓授權。您不得：',
		licenseList: [
			'與他人分享您的帳戶或存取權限',
			'複製、再分發或重新發布指南內容',
			'未經許可將內容用於商業目的'
		],
		disclaimerTitle: '免責聲明',
		disclaimerPara: '本指南基於個人經驗「按原樣」提供。雖然我們力求準確，但不保證特定結果。Claude Code是Anthropic的產品，本指南與Anthropic無關聯或獲其認可。',
		contactTitle: '問題？',
		contactPara: '如有任何關於這些條款的問題，請聯絡我們：',
		contactEmail: 'support@claudecodeguide.com'
	},

	disclosure: {
		pageTitle: '披露 - Claude Code Tips',
		pageDescription: '關於Claude Code Tips的重要披露，包括關聯關係和編輯獨立性。',
		title: '披露',
		lastUpdated: '最後更新：2024年12月',
		affiliationTitle: '與Anthropic無關聯',
		affiliationPara: '本指南是Danyel Koca建立的獨立產品。它與Claude和Claude Code背後的公司Anthropic沒有關聯、認可或贊助。所有觀點和建議僅代表作者個人。',
		independenceTitle: '編輯獨立性',
		independencePara: '本指南中的所有內容反映作者基於個人經驗的真實觀點。沒有公司或組織為有利報導付費或影響內容。',
		aiAssistedTitle: 'AI輔助內容',
		aiAssistedPara: '本指南是在Claude Code自身的協助下建立的。作者每天使用Claude Code，並使用它來幫助編寫、編輯和完善指南內容。這是出於透明度的考慮而披露的。',
		noSponsoredTitle: '無贊助內容',
		noSponsoredPara: '指南不包含贊助內容、付費植入或聯盟連結。銷售的唯一產品是指南本身。',
		contactTitle: '問題？',
		contactPara: '如有任何關於這些披露的問題，請聯絡我們：',
		contactEmail: 'hello@claudecodeguide.com'
	},

	blog: {
		pageTitle: '部落格 - Claude Code Tips',
		pageDescription: '來自50 Tips指南建立者的Claude Code技巧、教學和見解。',
		title: '部落格',
		subtitle: '關於Claude Code的技巧、教學和見解',
		readMore: '閱讀更多',
		publishedOn: '發布於',
		backToBlog: '返回部落格',
		noPosts: '還沒有文章。請稍後再來！'
	},

	disclaimer: {
		notTranslated: '此內容尚未提供您的語言版本。顯示英文版本。'
	},

	faq: {
		pageTitle: '常見問題 - Claude Code Tips',
		pageDescription: '關於Claude Code Tips指南的常見問題。',
		title: '常見問題',
		items: [
			{ q: '指南是什麼格式？', a: '這是一個網頁版指南，可從任何裝置存取。無需PDF下載。' },
			{ q: '需要Claude Code經驗嗎？', a: '基本了解會有幫助，但指南涵蓋從初始設定到進階技術的所有內容。' },
			{ q: '如果Claude Code更新了怎麼辦？', a: '指南專注於保持穩定的工作流程和模式。當主要功能變化時，指南也會更新。' }
		]
	}
};
