export default {
	// Meta
	lang: 'tr',
	langName: 'Turkce',
	siteBrand: 'Claude Code Tips',

	// Common strings
	common: {
		tipPrefix: 'Ipucu',
		tip: 'ipucu',
		tips: 'ipucu',
		previous: 'Onceki',
		next: 'Sonraki',
		loading: 'Yukleniyor...',
		backArrow: '\u2190',
		forwardArrow: '\u2192'
	},

	// Error page
	error: {
		titleSuffix: 'Hata',
		notFoundTitle: 'Sayfa Bulunamadi',
		notFoundDescription: 'Aradiginiz sayfa mevcut degil.',
		genericTitle: 'Bir Seyler Yanlis Gitti',
		genericDescription: 'Beklenmeyen bir hata olustu.',
		goHome: 'Ana Sayfaya Don',
		// Server error keys (backend sends key, UI translates)
		langNotFound: 'Dil bulunamadi',
		blogNotFound: 'Blog yazisi bulunamadi',
		sectionNotFound: 'Bolum bulunamadi',
		tipNotInSection: 'Bu bolumde ipucu bulunamadi',
		tipNotFound: 'Ipucu bulunamadi',
		emailRequired: 'E-posta gerekli',
		checkoutFailed: 'Odeme oturumu olusturulamadi'
	},

	// Checkout
	checkout: {
		productName: 'Claude Code Ustasi Olmak icin 50 Ipucu',
		productDescription: '50 ipucunun tamami ile eksiksiz rehber - omur boyu erisim'
	},

	// Navigation
	nav: {
		home: 'Ana Sayfa',
		guide: 'Rehber',
		pricing: 'Fiyatlandirma',
		toggleMenu: 'Menuyu ac/kapat'
	},

	// Landing page
	landing: {
		hero: {
			eyebrow: '6 aylik gunluk kullanimdan',
			title: 'Claude Code\'u Aylar Degil, Gunler Icinde Ustalasin',
			subtitle:
				'Yeni baslayanlarla uzman kullanicilari ayiran is akislari, kisayollar ve yapilandirmalar.',
			cta: 'Rehberi Al - $29',
			guarantee: '14 gun para iade garantisi'
		},
		social: {
			quote:
				'Claude Code ile gercek urunler insa ederek 500 saatten fazla zaman gecirdikten sonra, gercekten ise yarayan tum kaliplari belgeledim.',
			author: 'Danyel Koca',
			role: 'Sakana AI\'da Uygulamali Arastirma Muhendisi | Eski McKinsey Kidemli Veri Bilimci',
			benefits: [
				'Aylarca deneme yaninlmayi atlayin',
				'Kopyala-yapistir CLAUDE.md yapilandirmalari',
				'Her projede calisan kaliplar'
			]
		},
		curriculum: {
			title: 'Icinde Neler Var',
			subtitle: '12 bolumde 50 ipucu + bonus icerik'
		},
		sample: {
			title: 'Kaliteyi Gorun',
			subtitle:
				'Bu ipucunu ucretsiz okuyun. Faydali bulursaniz, 49 tane daha hayal edin.',
			readFull: 'Tam ipucunu ucretsiz okuyun'
		},
		pricing: {
			title: 'Tek Seferlik Satin Alma',
			price: '$29',
			subtitle: '50 ipucunun tamamina omur boyu erisim',
			features: [
				'Kod ornekleriyle 50 detayli ipucu',
				'Kopyala-yapistir CLAUDE.md yapilandirmalari',
				'12 bolum + bonus icerik',
				'Gelecek guncellemeler dahil'
			],
			cta: 'Aninda Erisim Al',
			anchor: 'Aylarca deneme yaninlmayi atlayin.',
			guarantee: '14 gun para iade garantisi. Soru sorulmaz.'
		}
	},

	// Guide
	guide: {
		title: 'Rehber',
		overview: '50 Ipucunun Tamami',
		overviewDescription:
			'6 aylik gunluk kullanimdan elde edilen savas meydaninda test edilmis ipuclariyla Claude Code\'da ustalasin.',
		backToGuide: 'Rehbere Don',
		free: 'Ucretsiz',
		freePreview: 'Ucretsiz Onizleme',
		locked: 'Okumak icin ac',
		lockedTitle: 'Bu ipucu kilitli',
		lockedDescription: 'Tek seferlik satin alma ile 50 ipucunun tamamina erisim saglayin.',
		unlockCta: 'Tam Rehberi Ac - $29',
		unlockAll: '50 Ipucunun Tamamini Ac'
	},

	// Section data (unified: title, short description, long description)
	sections: {
		title: 'Tum Bolumler',
		description:
			'13 bolume duzenlenmis 51 ipucunu kesfedin. Her bolum Claude Code\'da ustaligin belirli bir yonune odaklanir.',
		tipsInSection: 'bu bolumde',
		setup: {
			title: 'Kurulum',
			short: 'Terminal, CLAUDE.md, kisayollar ve komutlar',
			long: 'Dogru terminal kurulumu, CLAUDE.md yapilandirmasi ve saatler kazandiracak temel klavye kisayollari ile Claude Code\'u optimal sekilde calistirin.'
		},
		safety: {
			title: 'Guvenlik',
			short: 'Git, izinler, hassas dosyalari koruma',
			long: 'Kod tabaninizi ve sirlarinizi uygun git pratikleri, dosya izinleri ve hiz ile guvenligi dengeleyen akilli otomatik onay kurallari ile koruyun.'
		},
		planning: {
			title: 'Planlama',
			short: 'Plan modu, detayli planlar, uctan uca dusunme',
			long: 'Kodlamadan once karmasik gorevleri dusunmek icin plan modunda ustalasin. Claude\'un kusursuzca yurutebilecegi detayli, eyleme gecirilebilir planlar olusturmayi ogrenin.'
		},
		prompting: {
			title: 'Prompt Yazma',
			short: 'Ultrathink, dogrudan olmak, onemi abartmak',
			long: 'Gelismis prompt teknikleriyle Claude\'un tam potansiyelini acin. Ultrathink\'ten stratejik yonlendirmeye kadar, tutarli sekilde daha iyi sonuclar almayi ogrenin.'
		},
		session: {
			title: 'Oturum',
			short: 'Baglam yonetimi, devam etme, kalite dususu',
			long: 'Uzun kodlama oturumlarinda baglami etkili bir sekilde yonetin. Claude\'un en yuksek performansini korumak icin ne zaman sikistirip, temizleyip veya yeniden baslamaniz gerektigini bilin.'
		},
		input: {
			title: 'Girdi',
			short: 'Gorseller, ekran goruntuleri, hata mesajlari',
			long: 'Daha hizli hata ayiklama icin gorseller, ekran goruntuleri ve duzgun formatlanmis hata mesajlariyla Claude\'un cok modlu yeteneklerinden yararlanin.'
		},
		'multi-agent': {
			title: 'Coklu Ajan',
			short: 'Paralel ajanlar, worktree\'ler, alt ajanlar',
			long: 'Birden fazla Claude ornegi ile uretkenliginizi olceklendirin. Git worktree\'leri, paralel ajanlar ve alt ajanlari ne zaman etkili kullanacaginizi ogrenin.'
		},
		customization: {
			title: 'Ozellestirme',
			short: 'Hiyerarsik yapilandirmalar, komutlar, ozel ajanlar',
			long: 'Hiyerarsik CLAUDE.md dosyalari, ozel slash komutlari ve uzman ajanlarla Claude Code\'u is akisiniza uyarlayin.'
		},
		pitfalls: {
			title: 'Tuzaklar',
			short: 'Dikkat edilmesi gereken yaygin Claude davranislari',
			long: 'Claude Code kullanicilarini tuzaga dusuren yaygin hatalardan kacinin. Asiri muhendislikten sessiz basarisizliklara kadar, neye dikkat etmeniz gerektigini ogrenin.'
		},
		advanced: {
			title: 'Ileri Duzey',
			short: 'Hook\'lar, MCP sunuculari, beceriler, basliksiz mod',
			long: 'Otomasyon ve CI/CD entegrasyonu icin hook\'lar, MCP sunuculari, beceriler ve basliksiz mod gibi uzman kullanici ozelliklerini acin.'
		},
		'use-cases': {
			title: 'Kullanim Senaryolari',
			short: 'Kalite kontrolleri, POC\'ler, ogrenme, commit\'ler',
			long: 'Kod tabani kalite kontrollerinden hizli prototiplemeye kadar gercek dunya uygulamalari. Claude Code\'u gunluk isinizde etkili bir sekilde nasil uygulayacaginizi gorun.'
		},
		closing: {
			title: 'Kapani',
			short: 'Is akisinizi bulmak icin son bilgelik',
			long: 'Kisisel is akisinizi bulmak icin son bilgelik. Her ozellik herkes icin degil - sizin icin ise yarayanlara odaklanin.'
		},
		bonus: {
			title: 'Bonus',
			short: '6 aylik gunluk kullanimdan savas meydaninda test edilmis CLAUDE.md',
			long: '6 aylik gunluk kullanimdan damitilmis eksiksiz, savas meydaninda test edilmis bir CLAUDE.md dosyasi. Kopyalayin, uyarlayin ve kendinizinki yapin.'
		}
	},

	// Paywall
	paywall: {
		title: 'Tam Rehberi Ac',
		description: '50 ipucunun tamamina sadece $29 ile erisin',
		cta: 'Tam Erisim Al'
	},

	// Success page
	success: {
		title: 'Tesekkurler!',
		description: 'Satin aliminiz basarili. Artik 50 ipucunun tamamina erisebilirsiniz.',
		cta: 'Okumaya Basla'
	},

	// Footer
	footer: {
		builtWith: 'Claude Code ile insa edildi',
		guide: 'Rehber',
		company: 'Sirket',
		legal: 'Yasal',
		allTips: '50 Ipucunun Tamami',
		faq: 'SSS',
		blog: 'Blog',
		about: 'Hakkinda',
		privacy: 'Gizlilik',
		terms: 'Sartlar',
		disclosure: 'Aciklama'
	},

	// About page
	about: {
		pageTitle: 'Hakkinda - Claude Code Tips',
		pageDescription:
			'Claude Code Tips\'in yaraticisi Danyel Koca hakkinda bilgi edinin ve bu rehberin neden var oldugunu ogrenin.',
		heroTitle: 'Bir Uygulayici Tarafindan Insa Edildi',
		heroSubtitle:
			'Bu rehber, gercek urunler insa etmek icin her gun Claude Code kullanan biri tarafindan olusturuldu.',
		storyTitle: 'Hikaye',
		storyPara1:
			'Ben Danyel Koca, Tokyo\'daki Sakana AI\'da Uygulamali Arastirma Muhendisiyim. Oncesinde, McKinsey & Company\'de 3 yil Kidemli Veri Bilimci olarak kurumsal musteriler icin AI/ML cozumleri insa ettim.',
		storyPara2:
			'Claude Code\'u piyasaya suruldugunden beri her gun kullaniyorum. Merak olarak baslayan sey saplantiya donustu - is akisimi onemli olcude iyilestiren yeni kaliplar, kisayollar ve yapilandirmalar kesfettim.',
		storyPara3:
			'6 aylik gunluk kullanimdan sonra, birinin bana ilk gun soylemesini istedigim duzinelerce ipucu biriktirdim. Bu yuzden bu rehberi olusturdum.',
		whyTitle: 'Bu Rehber Neden Var',
		whyPara1:
			'Cogu Claude Code ogretici icerigi temel bilgileri kapsar: nasil kurulur, komutlar nasil calistirilir. Ancak sizi uretken yapan gercek kaliplari kapsamazlar.',
		whyPara2:
			'Bu rehber farkli. Her ipucu, uretim sistemleri insa etmenin gercek deneyiminden geliyor. Teori yok - sadece gercekten ise yarayan seyler.',
		credentialsTitle: 'Yeterlilikler',
		credentialsList: [
			'Sakana AI\'da Uygulamali Arastirma Muhendisi',
			'Eski McKinsey & Company Kidemli Veri Bilimci',
			'Kyoto Universitesi mezunu (GNO 3.76/4)',
			'IEEE\'de yayinlanmis arastirmaci',
			'Uc dil biliyor: Ingilizce, Japonca (JLPT N1), Turkce'
		],
		contactTitle: 'Iletisim',
		contactPara: 'Sorulariniz veya geri bildirimleriniz mi var? Sizden haber almak isterim.',
		contactLinks: {
			linkedin: 'LinkedIn',
			github: 'GitHub',
			website: 'Web Sitesi'
		}
	},

	// Privacy page
	privacy: {
		pageTitle: 'Gizlilik Politikasi - Claude Code Tips',
		pageDescription:
			'Claude Code Tips\'in verilerinizi nasil isledigini ve gizliliginizi nasil korudugunu ogrenin.',
		title: 'Gizlilik Politikasi',
		lastUpdated: 'Son guncelleme: Aralik 2024',
		introTitle: 'Taahhudumuz',
		introPara:
			'Minimum veri toplama ilkesine inaniyoruz. Yalnizca satin aliminizi islemek ve rehberi teslim etmek icin kesinlikle gerekli olanlari topluyoruz.',
		dataCollectedTitle: 'Topladigimiz Veriler',
		dataCollectedPara: 'Rehberi satin aldiginizda topluyoruz:',
		dataCollectedList: [
			'E-posta adresi (erisimi saglamak icin)',
			'Odeme bilgileri (Stripe tarafindan guvenli bir sekilde islenir)'
		],
		noTrackingTitle: 'Yapmadigimiz Seyler',
		noTrackingList: [
			'Analitik veya izleme betikleri yok',
			'Reklam amaçli cerezler yok',
			'Verilerinizi ucuncu taraflarla satma veya paylasma yok',
			'Davranissal izleme yok'
		],
		stripeTitle: 'Odeme Isleme',
		stripePara:
			'Tum odemeler Stripe tarafindan guvenli bir sekilde islenir. Kredi karti bilgilerinizin tamamini asla gormuyoruz veya saklamiyoruz. Stripe\'in gizlilik politikasi odeme isleme icin gecerlidir.',
		retentionTitle: 'Veri Saklama',
		retentionPara:
			'Rehbere surekli erisim saglamak ve destek taleplerini karsilamak icin satin alma kayitlarini sakliyoruz.',
		contactTitle: 'Sorular?',
		contactPara: 'Gizlilikle ilgili sorular icin bize ulasin:',
		contactEmail: 'privacy@claudecodeguide.com'
	},

	// Terms page
	terms: {
		pageTitle: 'Hizmet Sartlari - Claude Code Tips',
		pageDescription: 'Claude Code Tips\'i kullanmak icin sartlar ve kosullar.',
		title: 'Hizmet Sartlari',
		lastUpdated: 'Son guncelleme: Aralik 2024',
		serviceTitle: 'Hizmet',
		servicePara:
			'Claude Code Tips, Claude Code\'da ustalasmak icin 50 ipucu iceren dijital bir rehber saglar. Satin alimda, web tabanli rehbere omur boyu erisim elde edersiniz.',
		paymentTitle: 'Odeme',
		paymentList: [
			'$29 USD tek seferlik odeme',
			'Tum mevcut ve gelecek ipuclarina omur boyu erisim',
			'Yinelenen ucret veya abonelik yok'
		],
		refundTitle: 'Iade Politikasi',
		refundPara:
			'14 gunluk para iade garantisi sunuyoruz. Rehberden memnun kalmazsaniz, tam iade icin satin alimdan sonraki 14 gun icinde bize ulasin. Soru sorulmaz.',
		licenseTitle: 'Lisans',
		licensePara:
			'Satin aliminiz, rehbere erismek ve kullanmak icin kisisel, devredilemeyen bir lisans verir. Yapamazsiniz:',
		licenseList: [
			'Hesabinizi veya erisinizi baskalariyia paylasma',
			'Rehber icerigini kopyalama, yeniden dagitma veya yeniden yayinlama',
			'Icerigi izinsiz ticari amaclarla kullanma'
		],
		disclaimerTitle: 'Sorumluluk Reddi',
		disclaimerPara:
			'Bu rehber kisisel deneyime dayali olarak "oldugu gibi" saglanmaktadir. Dogruluk icin calissakta, belirli sonuclari garanti etmiyoruz. Claude Code, Anthropic\'in bir urunudur ve bu rehber Anthropic ile baglantili veya onaylanan degildir.',
		contactTitle: 'Sorular?',
		contactPara: 'Bu sartlar hakkinda sorular icin bize ulasin:',
		contactEmail: 'support@claudecodeguide.com'
	},

	// Disclosure page
	disclosure: {
		pageTitle: 'Aciklama - Claude Code Tips',
		pageDescription:
			'Ortaklik iliskileri ve editoryal bagimsizlik dahil Claude Code Tips hakkinda onemli aciklamalar.',
		title: 'Aciklama',
		lastUpdated: 'Son guncelleme: Aralik 2024',
		affiliationTitle: 'Anthropic ile Baglanti Yok',
		affiliationPara:
			'Bu rehber, Danyel Koca tarafindan olusturulan bagimsiz bir urundur. Claude ve Claude Code\'un arkasindaki sirket olan Anthropic ile baglantili, onaylanan veya sponsorlu DEGILDIR. Tum gorusler ve oneriler yalnizca yazara aittir.',
		independenceTitle: 'Editoryal Bagimsizlik',
		independencePara:
			'Bu rehberdeki tum icerik, yazarin kisisel deneyime dayanan gercek goruslerini yansitir. Hicbir sirket veya kuruluş olumlu kapsam icin odeme yapmadi veya icerigi etkilemedi.',
		aiAssistedTitle: 'Yapay Zeka Destekli Icerik',
		aiAssistedPara:
			'Bu rehber, Claude Code\'un kendisinin yardimiyla olusturuldu. Yazar, Claude Code\'u her gun kullaniyor ve rehber icerigini yazmak, duzenlemek ve rafine etmek icin kullandi. Bu, seffaflik ruhuyla aciklanmaktadir.',
		noSponsoredTitle: 'Sponsorlu Icerik Yok',
		noSponsoredPara:
			'Rehber sponsorlu icerik, ucretli yerlestirmeler veya ortaklik baglantilari icermez. Satilan tek urun rehberin kendisidir.',
		contactTitle: 'Sorular?',
		contactPara: 'Bu aciklamalar hakkinda sorular icin bize ulasin:',
		contactEmail: 'hello@claudecodeguide.com'
	},

	// Blog (UI strings only - post content in .svx files)
	blog: {
		pageTitle: 'Blog - Claude Code Tips',
		pageDescription:
			'50 Tips rehberinin yaraticisinden Claude Code hakkinda ipuclari, ogretici icerikler ve goruler.',
		title: 'Blog',
		subtitle: 'Claude Code hakkinda ipuclari, ogretici icerikler ve goruler',
		readMore: 'Devamini oku',
		publishedOn: 'Yayinlanma tarihi',
		backToBlog: 'Bloga Don',
		noPosts: 'Henuz yazi yok. Yakinda tekrar kontrol edin!'
	},

	// Disclaimer for untranslated content
	disclaimer: {
		notTranslated: 'Bu icerik henuz dilinizde mevcut degil. Ingilizce surum gosteriliyor.'
	},

	// FAQ page
	faq: {
		pageTitle: 'SSS - Claude Code Tips',
		pageDescription: 'Claude Code Tips rehberi hakkinda sik sorulan sorular.',
		title: 'Sik Sorulan Sorular',
		items: [
			{
				q: 'Rehber hangi formatta?',
				a: 'Herhangi bir cihazdan erisebileceginiz web tabanli bir rehber. PDF indirme gerekmiyor.'
			},
			{
				q: 'Claude Code deneyimim olmali mi?',
				a: 'Temel asinalik yardimci olur, ancak rehber ilk kurulumdan ileri tekniklere kadar her seyi kapsar.'
			},
			{
				q: 'Claude Code guncellenirse ne olur?',
				a: 'Rehber, sabit kalan is akislari ve kaliplara odaklanir. Buyuk ozellikler degistiginde, rehber de guncellenir.'
			}
		]
	}
};
