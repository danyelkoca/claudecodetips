export default {
	lang: 'zh-CN',
	langName: '简体中文',
	siteBrand: 'Claude Code Tips',

	common: {
		tipPrefix: '技巧',
		tip: '技巧',
		tips: '技巧',
		previous: '上一个',
		next: '下一个',
		loading: '加载中...',
		backArrow: '\u2190',
		forwardArrow: '\u2192'
	},

	error: {
		titleSuffix: '错误',
		notFoundTitle: '页面未找到',
		notFoundDescription: '您要查找的页面不存在。',
		genericTitle: '出错了',
		genericDescription: '发生了意外错误。',
		goHome: '返回首页',
		langNotFound: '语言未找到',
		blogNotFound: '博客文章未找到',
		sectionNotFound: '章节未找到',
		tipNotInSection: '此章节中未找到技巧',
		tipNotFound: '技巧未找到',
		emailRequired: '需要电子邮件',
		checkoutFailed: '创建结账会话失败'
	},

	checkout: {
		productName: '掌握Claude Code的50个技巧',
		productDescription: '包含全部50个技巧的完整指南 - 终身访问'
	},

	nav: {
		home: '首页',
		guide: '指南',
		pricing: '价格',
		toggleMenu: '切换菜单'
	},

	landing: {
		hero: {
			eyebrow: '来自6个月的日常使用',
			title: '几天内掌握Claude Code',
			subtitle: '区分初学者和高级用户的工作流程、快捷键和配置。',
			cta: '获取指南 - $29',
			guarantee: '14天退款保证'
		},
		social: {
			quote: '在用Claude Code构建真实产品500多小时后，我记录了所有真正有效的模式。',
			author: 'Danyel Koca',
			role: 'Sakana AI应用研究工程师 | 前McKinsey高级数据科学家',
			benefits: ['跳过数月的试错', '即复即用的CLAUDE.md配置', '适用于任何项目的模式']
		},
		curriculum: {
			title: '内容概览',
			subtitle: '12个章节共50个技巧 + 额外内容'
		},
		sample: {
			title: '查看质量',
			subtitle: '免费阅读此技巧。如果有帮助，想象还有49个。',
			readFull: '免费阅读全文'
		},
		pricing: {
			title: '一次性购买',
			price: '$29',
			subtitle: '全部50个技巧的终身访问',
			features: [
				'50个带代码示例的详细技巧',
				'可复制的CLAUDE.md配置',
				'12个章节 + 额外内容',
				'包含未来更新'
			],
			cta: '立即获取',
			anchor: '跳过数月的试错。',
			guarantee: '14天无条件退款保证。'
		},
		faq: {
			title: '常见问题',
			items: [
				{
					q: '指南是什么格式？',
					a: '这是一个网页版指南，可从任何设备访问。无需PDF下载。'
				},
				{
					q: '需要Claude Code经验吗？',
					a: '基本了解会有帮助，但指南涵盖从初始设置到高级技术的所有内容。'
				},
				{
					q: '如果Claude Code更新了怎么办？',
					a: '指南专注于保持稳定的工作流程和模式。当主要功能变化时，指南也会更新。'
				}
			]
		}
	},

	guide: {
		title: '指南',
		overview: '全部50个技巧',
		overviewDescription: '用这些经过6个月日常使用实战测试的技巧掌握Claude Code。',
		backToGuide: '返回指南',
		free: '免费',
		freePreview: '免费预览',
		locked: '解锁阅读',
		lockedTitle: '此技巧已锁定',
		lockedDescription: '一次性购买即可获得全部50个技巧的完整访问权限。',
		unlockCta: '解锁完整指南 - $29',
		unlockAll: '解锁全部50个技巧'
	},

	sections: {
		title: '全部章节',
		description: '探索整理成13个章节的51个技巧。每个章节专注于掌握Claude Code的特定方面。',
		tipsInSection: '在此章节中',
		setup: {
			title: '设置',
			short: '终端、CLAUDE.md、快捷键和命令',
			long: '通过正确的终端设置、CLAUDE.md配置和节省时间的基本键盘快捷键让Claude Code最佳运行。'
		},
		safety: {
			title: '安全',
			short: 'Git、权限、保护敏感文件',
			long: '通过适当的git实践、文件权限和平衡速度与安全的智能自动批准规则保护您的代码库和秘密。'
		},
		planning: {
			title: '规划',
			short: '计划模式、详细计划、端到端思考',
			long: '掌握计划模式以在编码前思考复杂任务。学习创建Claude可以完美执行的详细可操作计划。'
		},
		prompting: {
			title: '提示',
			short: 'Ultrathink、直接、夸大重要性',
			long: '用高级提示技术释放Claude的全部潜力。从ultrathink到战略指导，学习如何持续获得更好的结果。'
		},
		session: {
			title: '会话',
			short: '上下文管理、恢复、质量下降',
			long: '在长时间编码会话中有效管理上下文。知道何时压缩、清除或重新开始以保持Claude的最佳性能。'
		},
		input: {
			title: '输入',
			short: '图片、截图、错误信息',
			long: '利用Claude的多模态能力处理图片、截图和正确格式的错误信息以加快调试。'
		},
		'multi-agent': {
			title: '多代理',
			short: '并行代理、工作树、子代理',
			long: '用多个Claude实例扩展您的生产力。学习git工作树、并行代理以及何时有效使用子代理。'
		},
		customization: {
			title: '自定义',
			short: '分层配置、命令、自定义代理',
			long: '用分层CLAUDE.md文件、自定义斜杠命令和专门代理根据您的工作流程定制Claude Code。'
		},
		pitfalls: {
			title: '陷阱',
			short: '需要注意的常见Claude行为',
			long: '避免让Claude Code用户绊倒的常见陷阱。从过度工程到静默失败，了解需要注意什么。'
		},
		advanced: {
			title: '高级',
			short: '钩子、MCP服务器、技能、无头模式',
			long: '解锁钩子、MCP服务器、技能和用于自动化和CI/CD集成的无头模式等高级用户功能。'
		},
		'use-cases': {
			title: '用例',
			short: '质量检查、POC、学习、提交',
			long: '从代码库质量检查到快速原型的实际应用。了解如何在日常工作中有效应用Claude Code。'
		},
		closing: {
			title: '结语',
			short: '找到您的工作流程的最终智慧',
			long: '找到个人工作流程的最终智慧。不是每个功能都适合每个人 - 专注于对您有效的东西。'
		},
		bonus: {
			title: '额外',
			short: '6个月日常使用的实战测试CLAUDE.md',
			long: '从6个月日常使用中提炼的完整实战测试CLAUDE.md文件。复制、调整并使其成为您自己的。'
		}
	},

	paywall: {
		title: '解锁完整指南',
		description: '仅需$29即可访问全部50个技巧',
		cta: '获取完整访问'
	},

	success: {
		title: '谢谢！',
		description: '您的购买已成功。您现在可以完整访问全部50个技巧。',
		cta: '开始阅读'
	},

	footer: {
		builtWith: '使用Claude Code构建',
		guide: '指南',
		company: '公司',
		legal: '法律',
		allTips: '全部50个技巧',
		faq: '常见问题',
		blog: '博客',
		about: '关于',
		privacy: '隐私',
		terms: '条款',
		disclosure: '披露'
	},

	about: {
		pageTitle: '关于 - Claude Code Tips',
		pageDescription: '了解Claude Code Tips的创建者Danyel Koca，以及为什么存在这个指南。',
		heroTitle: '由实践者构建',
		heroSubtitle: '这个指南是由每天使用Claude Code构建真实产品的人创建的。',
		storyTitle: '故事',
		storyPara1: '我是Danyel Koca，东京Sakana AI的应用研究工程师。在此之前，我在McKinsey & Company担任高级数据科学家3年，为企业客户构建AI/ML解决方案。',
		storyPara2: '自Claude Code发布以来我每天都在使用。最初是好奇心，后来变成了痴迷 - 我发现自己不断发现新的模式、快捷键和配置，极大地改善了我的工作流程。',
		storyPara3: '经过6个月的日常使用，我积累了几十个希望第一天就有人告诉我的技巧。这就是我创建这个指南的原因。',
		whyTitle: '为什么存在这个指南',
		whyPara1: '大多数Claude Code教程涵盖基础知识：如何安装，如何运行命令。但它们不涵盖真正让您高效的模式。',
		whyPara2: '这个指南不同。每个技巧都来自构建生产系统的真实经验。没有理论 - 只有真正有效的东西。',
		credentialsTitle: '资历',
		credentialsList: [
			'Sakana AI应用研究工程师',
			'前McKinsey & Company高级数据科学家',
			'京都大学毕业 (GPA 3.76/4)',
			'IEEE发表研究员',
			'三语：英语、日语 (JLPT N1)、土耳其语'
		],
		contactTitle: '联系方式',
		contactPara: '有问题或反馈？我很乐意听取。',
		contactLinks: {
			linkedin: 'LinkedIn',
			github: 'GitHub',
			website: '网站'
		}
	},

	privacy: {
		pageTitle: '隐私政策 - Claude Code Tips',
		pageDescription: '了解Claude Code Tips如何处理您的数据并保护您的隐私。',
		title: '隐私政策',
		lastUpdated: '最后更新：2024年12月',
		introTitle: '我们的承诺',
		introPara: '我们相信最小化数据收集。我们只收集处理购买和提供指南绝对必要的数据。',
		dataCollectedTitle: '我们收集的数据',
		dataCollectedPara: '当您购买指南时，我们收集：',
		dataCollectedList: [
			'电子邮件地址（用于提供访问）',
			'支付信息（由Stripe安全处理）'
		],
		noTrackingTitle: '我们不做的事',
		noTrackingList: [
			'没有分析或跟踪脚本',
			'没有广告Cookie',
			'不向第三方出售或分享您的数据',
			'没有行为跟踪'
		],
		stripeTitle: '支付处理',
		stripePara: '所有支付由Stripe安全处理。我们从不查看或存储您的完整信用卡详细信息。Stripe的隐私政策适用于支付处理。',
		retentionTitle: '数据保留',
		retentionPara: '我们保留购买记录以便为您提供对指南的持续访问并处理任何支持请求。',
		contactTitle: '问题？',
		contactPara: '如有任何隐私相关问题，请联系我们：',
		contactEmail: 'privacy@claudecodeguide.com'
	},

	terms: {
		pageTitle: '服务条款 - Claude Code Tips',
		pageDescription: 'Claude Code Tips的使用条款和条件。',
		title: '服务条款',
		lastUpdated: '最后更新：2024年12月',
		serviceTitle: '服务',
		servicePara: 'Claude Code Tips提供包含50个掌握Claude Code技巧的数字指南。购买后，您将获得网页版指南的终身访问权限。',
		paymentTitle: '支付',
		paymentList: [
			'一次性支付$29美元',
			'终身访问所有当前和未来的技巧',
			'无定期收费或订阅'
		],
		refundTitle: '退款政策',
		refundPara: '我们提供14天退款保证。如果您对指南不满意，请在购买后14天内联系我们申请全额退款。无需解释。',
		licenseTitle: '许可',
		licensePara: '您的购买授予您访问和使用指南的个人、不可转让许可。您不得：',
		licenseList: [
			'与他人分享您的账户或访问权限',
			'复制、再分发或重新发布指南内容',
			'未经许可将内容用于商业目的'
		],
		disclaimerTitle: '免责声明',
		disclaimerPara: '本指南基于个人经验"按原样"提供。虽然我们力求准确，但不保证特定结果。Claude Code是Anthropic的产品，本指南与Anthropic无关联或获其认可。',
		contactTitle: '问题？',
		contactPara: '如有任何关于这些条款的问题，请联系我们：',
		contactEmail: 'support@claudecodeguide.com'
	},

	disclosure: {
		pageTitle: '披露 - Claude Code Tips',
		pageDescription: '关于Claude Code Tips的重要披露，包括关联关系和编辑独立性。',
		title: '披露',
		lastUpdated: '最后更新：2024年12月',
		affiliationTitle: '与Anthropic无关联',
		affiliationPara: '本指南是Danyel Koca创建的独立产品。它与Claude和Claude Code背后的公司Anthropic没有关联、认可或赞助。所有观点和建议仅代表作者个人。',
		independenceTitle: '编辑独立性',
		independencePara: '本指南中的所有内容反映作者基于个人经验的真实观点。没有公司或组织为有利报道付费或影响内容。',
		aiAssistedTitle: 'AI辅助内容',
		aiAssistedPara: '本指南是在Claude Code自身的协助下创建的。作者每天使用Claude Code，并使用它来帮助编写、编辑和完善指南内容。这是出于透明度的考虑而披露的。',
		noSponsoredTitle: '无赞助内容',
		noSponsoredPara: '指南不包含赞助内容、付费植入或联盟链接。销售的唯一产品是指南本身。',
		contactTitle: '问题？',
		contactPara: '如有任何关于这些披露的问题，请联系我们：',
		contactEmail: 'hello@claudecodeguide.com'
	},

	blog: {
		pageTitle: '博客 - Claude Code Tips',
		pageDescription: '来自50 Tips指南创建者的Claude Code技巧、教程和见解。',
		title: '博客',
		subtitle: '关于Claude Code的技巧、教程和见解',
		readMore: '阅读更多',
		publishedOn: '发布于',
		backToBlog: '返回博客',
		noPosts: '还没有文章。请稍后再来！'
	},

	disclaimer: {
		notTranslated: '此内容尚未提供您的语言版本。显示英文版本。'
	},

	faq: {
		pageTitle: '常见问题 - Claude Code Tips',
		pageDescription: '关于Claude Code Tips指南的常见问题。',
		title: '常见问题',
		items: [
			{ q: '指南是什么格式？', a: '这是一个网页版指南，可从任何设备访问。无需PDF下载。' },
			{ q: '需要Claude Code经验吗？', a: '基本了解会有帮助，但指南涵盖从初始设置到高级技术的所有内容。' },
			{ q: '如果Claude Code更新了怎么办？', a: '指南专注于保持稳定的工作流程和模式。当主要功能变化时，指南也会更新。' }
		]
	}
};
