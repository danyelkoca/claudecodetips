export default {
	// Meta
	lang: "ar",
	langName: "العربية",
	siteBrand: "Claude Code Tips",

	// Common strings
	common: {
		tipPrefix: "نصيحة",
		tip: "نصيحة",
		tips: "نصائح",
		previous: "السابق",
		next: "التالي",
		loading: "جاري التحميل...",
		backArrow: "\u2192",
		forwardArrow: "\u2190",
		goToSlide: "انتقل إلى الشريحة",
	},

	// Error page
	error: {
		titleSuffix: "خطأ",
		notFoundTitle: "الصفحة غير موجودة",
		notFoundDescription: "الصفحة التي تبحث عنها غير موجودة.",
		genericTitle: "حدث خطأ ما",
		genericDescription: "حدث خطأ غير متوقع.",
		goHome: "العودة للرئيسية",
		// Server error keys (backend sends key, UI translates)
		langNotFound: "اللغة غير موجودة",
		blogNotFound: "المقالة غير موجودة",
		sectionNotFound: "القسم غير موجود",
		tipNotInSection: "النصيحة غير موجودة في هذا القسم",
		tipNotFound: "النصيحة غير موجودة",
	},

	// Checkout
	checkout: {
		productName: "51 نصيحة لإتقان Claude Code",
		productDescription: "دليل شامل مع جميع النصائح الـ 51 - وصول مدى الحياة",
	},

	// Navigation
	nav: {
		guide: "الدليل",
		toggleMenu: "تبديل القائمة",
	},

	// Landing page
	landing: {
		hero: {
			eyebrow: "من مبتكر Kumamap (389 ألف مستخدم)",
			title: "أتقن Claude Code في أيام، وليس أشهر",
			subtitle: "سير العمل والاختصارات والإعدادات التي تفرق بين المبتدئين والمحترفين.",
			cta: "احصل على الدليل - 29$",
			guarantee: "ضمان استرداد المال خلال 7 أيام",
		},
		social: {
			quote: "Claude Code له منحنى تعلم حاد. قضيت مئات الساعات في معرفة ما يعمل وما لا يعمل. هذا الدليل هو كل ما تمنيته في اليوم الأول.",
			author: "Danyel Koca",
			role: "مهندس ذكاء اصطناعي في Sakana AI | سابقاً عالم بيانات أول في McKinsey & Company",
		},
		caseStudy: {
			title: "مبني بـ Claude Code",
			description: "بنيت Kumamap — متتبع الدببة رقم 1 في اليابان — بالكامل باستخدام Claude Code. هذا الدليل يعلمك الأنماط الدقيقة التي استخدمتها.",
			cta: "شاهد المنتج الحي",
			stats: {
				views: { value: "1.3 مليون", label: "مشاهدة صفحة" },
				users: { value: "389,000", label: "مستخدم" },
				time: { value: "3 أشهر", label: "للبناء" },
			},
		},
		curriculum: {
			title: "ماذا يتضمن",
			subtitle: "51 نصيحة في 13 قسم",
			viewAll: "عرض جميع النصائح الـ {count}",
		},
		sample: {
			title: "شاهد الجودة",
			subtitle: "اقرأ هذه النصيحة مجاناً. إذا كانت مفيدة، تخيل 49 أخرى.",
			readFull: "اقرأ النصيحة كاملة مجاناً",
		},
		pricing: {
			title: "شراء لمرة واحدة",
			price: "29$",
			subtitle: "وصول مدى الحياة لجميع النصائح الـ 51",
			features: ["51 نصيحة مفصلة مع أمثلة برمجية", "إعدادات CLAUDE.md جاهزة للنسخ", "13 قسم منظم", "التحديثات المستقبلية مشمولة"],
			cta: "احصل على وصول فوري",
			guarantee: "ضمان استرداد المال خلال 7 أيام. بدون أسئلة.",
		},
		checkoutCanceled: "تم إلغاء الدفع. جاهز عندما تكون مستعداً.",
	},

	// Pricing page
	pricingPage: {
		pageTitle: "الدفع - Claude Code Tips",
		pageDescription: "وصول فوري لجميع النصائح الـ 51 مقابل 29$",
		emailLabel: "البريد الإلكتروني",
		emailPlaceholder: "you@example.com",
		cta: "المتابعة للدفع",
		processing: "جاري المعالجة...",
		errors: {
			emailRequired: "الرجاء إدخال بريدك الإلكتروني.",
			invalidEmail: "الرجاء إدخال عنوان بريد إلكتروني صالح.",
			checkoutFailed: "حدث خطأ ما. الرجاء المحاولة مرة أخرى.",
		},
	},

	// Guide
	guide: {
		title: "الدليل",
		overview: "جميع النصائح الـ 51",
		overviewDescription: "أتقن Claude Code مع هذه النصائح المجربة من 6 أشهر من الاستخدام اليومي.",
		backToGuide: "العودة للدليل",
		free: "مجاني",
		freePreview: "معاينة مجانية",
		locked: "افتح للقراءة",
		lockedTitle: "هذه النصيحة مقفلة",
		lockedDescription: "احصل على وصول كامل لجميع النصائح الـ 51 بشراء واحد.",
		unlockCta: "افتح الدليل الكامل - 29$",
		unlockAll: "افتح جميع النصائح الـ 51",
		sections: "أقسام",
		freeLabel: "معاينات مجانية",
		whatsIncluded: "ماذا يتضمن",
		detailedTips: "نصائح مفصلة",
		organizedSections: "أقسام منظمة",
		freePreviews: "معاينات مجانية",
		startReading: "ابدأ القراءة",
		jumpTo: "انتقل إلى القسم",
	},

	// Section data (unified: title, short description, long description)
	sections: {
		setup: {
			title: "الإعداد",
			short: "الطرفية، CLAUDE.md، الاختصارات والأوامر",
			long: "اجعل Claude Code يعمل بشكل مثالي مع إعداد الطرفية الصحيح، تكوين CLAUDE.md، واختصارات لوحة المفاتيح الأساسية التي ستوفر لك ساعات.",
		},
		safety: {
			title: "الأمان",
			short: "Git، الصلاحيات، حماية الملفات الحساسة",
			long: "احمِ قاعدة الكود والأسرار مع ممارسات git المناسبة، صلاحيات الملفات، وقواعد الموافقة التلقائية الذكية التي توازن بين السرعة والأمان.",
		},
		planning: {
			title: "التخطيط",
			short: "وضع الخطة، الخطط التفصيلية، التفكير الشامل",
			long: "أتقن وضع الخطة للتفكير في المهام المعقدة قبل البرمجة. تعلم كيفية إنشاء خطط مفصلة وقابلة للتنفيذ يمكن لـ Claude تنفيذها بشكل مثالي.",
		},
		prompting: {
			title: "كتابة الأوامر",
			short: "التفكير العميق، المباشرة، المبالغة في الأهمية",
			long:
				"أطلق العنان لإمكانات Claude الكاملة مع تقنيات كتابة الأوامر المتقدمة. من التفكير العميق إلى التوجيه الاستراتيجي، تعلم كيفية الحصول على نتائج أفضل باستمرار.",
		},
		session: {
			title: "الجلسة",
			short: "إدارة السياق، الاستئناف، تدهور الجودة",
			long: "أدر السياق بفعالية خلال جلسات البرمجة الطويلة. اعرف متى تضغط، تمسح، أو تبدأ من جديد للحفاظ على أداء Claude الأمثل.",
		},
		input: {
			title: "المدخلات",
			short: "الصور، لقطات الشاشة، رسائل الخطأ",
			long: "استفد من قدرات Claude المتعددة الوسائط مع الصور ولقطات الشاشة ورسائل الخطأ المنسقة بشكل صحيح لتصحيح الأخطاء بشكل أسرع.",
		},
		"multi-agent": {
			title: "تعدد الوكلاء",
			short: "وكلاء متوازيون، أشجار العمل، الوكلاء الفرعيون",
			long: "وسّع إنتاجيتك مع نسخ متعددة من Claude. تعلم أشجار عمل git، الوكلاء المتوازيون، ومتى تستخدم الوكلاء الفرعيين بفعالية.",
		},
		customization: {
			title: "التخصيص",
			short: "إعدادات هرمية، أوامر، وكلاء مخصصون",
			long: "خصص Claude Code لسير عملك مع ملفات CLAUDE.md الهرمية، أوامر slash المخصصة، والوكلاء المتخصصين.",
		},
		pitfalls: {
			title: "المزالق",
			short: "سلوكيات Claude الشائعة التي يجب مراقبتها",
			long: "تجنب المزالق الشائعة التي تعيق مستخدمي Claude Code. من الإفراط في الهندسة إلى الفشل الصامت، تعلم ما يجب مراقبته.",
		},
		advanced: {
			title: "متقدم",
			short: "الخطافات، خوادم MCP، المهارات، الوضع بدون واجهة",
			long: "افتح ميزات المستخدم المحترف مثل الخطافات، خوادم MCP، المهارات، والوضع بدون واجهة للأتمتة وتكامل CI/CD.",
		},
		"use-cases": {
			title: "حالات الاستخدام",
			short: "فحوصات الجودة، النماذج الأولية، التعلم، الالتزامات",
			long: "تطبيقات واقعية من فحوصات جودة قاعدة الكود إلى النمذجة السريعة. شاهد كيفية تطبيق Claude Code بفعالية في عملك اليومي.",
		},
		closing: {
			title: "الختام",
			short: "حكمة أخيرة حول إيجاد سير عملك",
			long: "حكمة أخيرة حول إيجاد سير عملك الشخصي. ليست كل ميزة للجميع - ركز على ما يناسبك.",
		},
		bonus: {
			title: "إضافي",
			short: "CLAUDE.md مجرب من 6 أشهر من الاستخدام اليومي",
			long: "ملف CLAUDE.md كامل ومجرب مستخلص من 6 أشهر من الاستخدام اليومي. انسخ، عدّل، واجعله خاصاً بك.",
		},
	},

	// Paywall
	paywall: {
		title: "افتح الدليل الكامل",
		description: "احصل على وصول لجميع النصائح الـ 51 مقابل 29$ فقط",
		cta: "احصل على وصول كامل",
		alreadyPurchased: "اشتريت بالفعل؟",
		restoreAccess: "استعادة الوصول",
	},

	// Success page
	success: {
		title: "شكراً لك!",
		description: "تم الشراء بنجاح. لديك الآن وصول كامل لجميع النصائح الـ 51.",
		cta: "ابدأ القراءة",
	},

	// Restore page
	restore: {
		pageTitle: "استعادة الوصول - Claude Code Tips",
		title: "استعادة الوصول",
		description: "أدخل البريد الإلكتروني الذي استخدمته عند الشراء لاستعادة الوصول على هذا الجهاز.",
		emailLabel: "البريد الإلكتروني للشراء",
		emailPlaceholder: "you@example.com",
		cta: "استعادة الوصول",
		successMessage: "تم استعادة الوصول بنجاح!",
		redirecting: "إعادة التوجيه إلى الدليل...",
		noAccount: "لم تشترِ بعد؟",
		buyNow: "اشترِ الآن",
		errors: {
			restoreFailed: "فشل في استعادة الوصول. حاول مرة أخرى.",
			emailRequired: "البريد الإلكتروني مطلوب.",
			invalidEmail: "الرجاء إدخال عنوان بريد إلكتروني صالح.",
			rateLimitExceeded: "محاولات كثيرة جدا. حاول مرة أخرى بعد ساعة.",
		},
	},

	// Footer
	footer: {
		builtWith: "بُني باستخدام Claude Code",
		guide: "الدليل",
		company: "الشركة",
		legal: "قانوني",
		allTips: "جميع النصائح الـ 51",
		faq: "الأسئلة الشائعة",
		restoreAccess: "استعادة الوصول",
		pricing: "الأسعار",
		blog: "المدونة",
		about: "حول",
		privacy: "الخصوصية",
		terms: "الشروط",
		disclosure: "الإفصاح",
	},

	// About page
	about: {
		pageTitle: "حول - Claude Code Tips",
		pageDescription: "تعرف على دانيال كوجا، مبتكر Claude Code Tips، ولماذا يوجد هذا الدليل.",
		heroTitle: "بُني بواسطة ممارس",
		heroSubtitle: "هذا الدليل أنشأه شخص يستخدم Claude Code كل يوم لبناء منتجات حقيقية.",
		storyTitle: "القصة",
		storyPara1:
			"أنا دانيال كوجا، مهندس أبحاث تطبيقية في Sakana AI في طوكيو. قبل ذلك، أمضيت 3 سنوات كعالم بيانات أول في McKinsey & Company، أبني حلول AI/ML لعملاء المؤسسات.",
		storyPara2:
			"أستخدم Claude Code يومياً منذ إطلاقه. ما بدأ كفضول تحول إلى هوس - وجدت نفسي أكتشف أنماطاً واختصارات وإعدادات جديدة حسنت سير عملي بشكل كبير.",
		storyPara3: "بعد 6 أشهر من الاستخدام اليومي، جمعت عشرات النصائح التي كنت أتمنى لو أخبرني بها أحد في اليوم الأول. لهذا أنشأت هذا الدليل.",
		whyTitle: "لماذا يوجد هذا الدليل",
		whyPara1: "معظم دروس Claude Code تغطي الأساسيات: كيفية التثبيت، كيفية تشغيل الأوامر. لكنها لا تغطي الأنماط الحقيقية التي تجعلك منتجاً.",
		whyPara2: "هذا الدليل مختلف. كل نصيحة تأتي من خبرة حقيقية في بناء أنظمة إنتاج. لا نظريات - فقط ما يعمل فعلاً.",
		credentialsTitle: "المؤهلات",
		credentialsList: [
			"مهندس أبحاث تطبيقية في Sakana AI",
			"سابقاً عالم بيانات أول في McKinsey & Company",
			"خريج جامعة كيوتو (معدل 3.76/4)",
			"باحث منشور في IEEE",
			"ثلاثي اللغات: الإنجليزية، اليابانية (JLPT N1)، التركية",
		],
		contactTitle: "تواصل معنا",
		contactPara: "لديك أسئلة أو ملاحظات؟ يسعدني سماع رأيك.",
		contactLinks: {
			linkedin: "LinkedIn",
			github: "GitHub",
			website: "الموقع",
		},
	},

	// Privacy page
	privacy: {
		pageTitle: "سياسة الخصوصية - Claude Code Tips",
		pageDescription: "تعرف على كيفية تعامل Claude Code Tips مع بياناتك.",
		title: "سياسة الخصوصية",
		dataCollectedTitle: "البيانات التي نجمعها",
		dataCollectedDescription: "عند شراء الدليل:",
		dataEmail: "البريد الإلكتروني (للتسليم والوصول)",
		paymentTitle: "معالجة الدفع",
		paymentDescription: "تتم معالجة جميع المدفوعات بشكل آمن عبر Stripe. نحن لا نخزن معلومات الدفع الخاصة بك.",
		contactTitle: "تواصل معنا",
		contactLabel: "البريد الإلكتروني",
		contactEmail: "hello@claudecodetips.com",
	},

	// Terms page
	terms: {
		pageTitle: "شروط الخدمة - Claude Code Tips",
		pageDescription: "شروط الخدمة لـ Claude Code Tips.",
		title: "شروط الخدمة",
		serviceTitle: "الخدمة",
		serviceDescription: "يوفر Claude Code Tips دليلاً رقمياً يحتوي على 51 نصيحة لإتقان Claude Code. عند الشراء، تحصل على وصول مدى الحياة.",
		paymentTitle: "الدفع",
		paymentDescription: "يمكنك شراء الوصول إلى الدليل:",
		paymentOneTime: "دفعة واحدة بقيمة 29 دولار أمريكي",
		paymentStripe: "تتم معالجة جميع المدفوعات بشكل آمن عبر Stripe",
		refundTitle: "الاسترداد",
		refundDescription: "ضمان استرداد الأموال لمدة 7 أيام. إذا لم تكن راضياً، تواصل معنا خلال 7 أيام لاسترداد كامل المبلغ.",
		contactTitle: "تواصل معنا",
		contactLabel: "البريد الإلكتروني",
		contactEmail: "hello@claudecodetips.com",
	},

	// Disclosure page (Commercial Disclosure)
	disclosure: {
		pageTitle: "الإفصاح التجاري - Claude Code Tips",
		pageDescription: "الإفصاح التجاري لـ Claude Code Tips.",
		title: "الإفصاح التجاري",
		sellerName: "البائع",
		sellerNameValue: "Claude Code Tips",
		address: "العنوان",
		addressValue: "يُكشف عند الطلب",
		phone: "الهاتف",
		phoneValue: "يُكشف عند الطلب",
		email: "البريد الإلكتروني",
		emailValue: "hello@claudecodetips.com",
		headOfOperations: "رئيس العمليات",
		headOfOperationsValue: "يُكشف عند الطلب",
		additionalFees: "رسوم إضافية",
		additionalFeesValue: "لا يوجد",
		refundPolicy: "سياسة الاسترداد",
		refundServiceIssues: "مشاكل الخدمة",
		refundServiceIssuesValue:
			"إذا لم يتم تقديم الخدمة بسبب مشاكل في النظام، يرجى التواصل على hello@claudecodetips.com. سنراجع ونقدم استرداداً كاملاً.",
		refundCustomer: "إلغاء من العميل",
		refundCustomerValue: "ضمان استرداد الأموال لمدة 7 أيام. إذا لم تكن راضياً عن شرائك، تواصل معنا خلال 7 أيام لاسترداد كامل المبلغ، بدون أسئلة.",
		deliveryTime: "وقت التسليم",
		deliveryTimeValue: "وصول فوري بعد الدفع",
		paymentMethods: "طرق الدفع",
		paymentMethodsValue: "بطاقات الائتمان (فيزا، ماستركارد، أمريكان إكسبريس، JCB)",
		paymentPeriod: "فترة الدفع",
		paymentPeriodValue: "تتم المعالجة فوراً عند الدفع ببطاقة الائتمان",
		price: "السعر",
		priceValue: "29 دولار أمريكي",
		priceTaxNote: "*السعر شامل جميع الضرائب المطبقة",
	},

	// Blog (UI strings only - post content in .svx files)
	blog: {
		pageTitle: "المدونة - Claude Code Tips",
		pageDescription: "نصائح ودروس ورؤى حول Claude Code من مبتكر دليل 51 Tips.",
		title: "المدونة",
		subtitle: "نصائح ودروس ورؤى حول Claude Code",
		readMore: "اقرأ المزيد",
		publishedOn: "نُشر في",
		backToBlog: "العودة للمدونة",
		noPosts: "لا توجد مقالات بعد. تحقق قريباً!",
	},

	// Disclaimer for untranslated content
	disclaimer: {
		notTranslated: "هذا المحتوى غير متوفر بعد بلغتك. يتم عرض النسخة الإنجليزية.",
	},

	// FAQ page
	faq: {
		pageTitle: "الأسئلة الشائعة - Claude Code Tips",
		pageDescription: "أسئلة شائعة حول دليل Claude Code Tips.",
		title: "الأسئلة الشائعة",
		items: [
			{
				q: "ما هو تنسيق الدليل؟",
				a: "إنه دليل على الويب يمكنك الوصول إليه من أي جهاز. لا حاجة لتحميل PDF.",
			},
			{
				q: "هل أحتاج خبرة في Claude Code؟",
				a: "المعرفة الأساسية مفيدة، لكن الدليل يغطي كل شيء من الإعداد الأولي إلى التقنيات المتقدمة.",
			},
			{
				q: "ماذا لو تم تحديث Claude Code؟",
				a: "يركز الدليل على سير العمل والأنماط التي تظل مستقرة. عندما تتغير الميزات الرئيسية، يتم تحديث الدليل أيضاً.",
			},
		],
	},
};
