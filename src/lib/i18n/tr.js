export default {
  // Meta
  lang: "tr",
  langName: "Türkçe",
  siteBrand: "Claude Code Tips",

  // Common strings
  common: {
    tipPrefix: "İpucu",
    tip: "ipucu",
    tips: "ipucu",
    previous: "Önceki",
    next: "Sonraki",
    loading: "Yükleniyor...",
    backArrow: "\u2190",
    forwardArrow: "\u2192",
    goToSlide: "Slayta git",
  },

  // Error page
  error: {
    titleSuffix: "Hata",
    notFoundTitle: "Sayfa Bulunamadı",
    notFoundDescription: "Aradığınız sayfa mevcut değil.",
    genericTitle: "Bir Şeyler Yanlış Gitti",
    genericDescription: "Beklenmeyen bir hata oluştu.",
    goHome: "Ana Sayfaya Dön",
    // Server error keys (backend sends key, UI translates)
    langNotFound: "Dil bulunamadı",
    blogNotFound: "Blog yazısı bulunamadı",
    sectionNotFound: "Bölüm bulunamadı",
    tipNotInSection: "Bu bölümde ipucu bulunamadı",
    tipNotFound: "İpucu bulunamadı",
  },

  // Checkout
  checkout: {
    productName: "Claude Code Ustası Olmak için 51 İpucu",
    productDescription: "51 ipucunun tamamı ile eksiksiz rehber - ömür boyu erişim",
  },

  // Navigation
  nav: {
    guide: "Rehber",
    toggleMenu: "Menüyü aç/kapat",
  },

  // Theme toggle
  theme: {
    light: "Açık mod",
    dark: "Koyu mod",
  },

  // Landing page
  landing: {
    hero: {
      eyebrow: "Kumamap'in yaratıcısından (389 bin kullanıcı)",
      title: "Claude Code'u Aylar Değil, Günler İçinde Ustalaşın",
      subtitle: "Yeni başlayanlarla uzman kullanıcıları ayıran iş akışları, kısayollar ve yapılandırmalar.",
      cta: "Rehberi Al - $29",
      guarantee: "7 gün para iade garantisi",
      seeAll: "Tüm {count} İpucunu Gör",
    },
    social: {
      quote: "Claude Code'un dik bir öğrenme eğrisi var. Neyin işe yaradığını ve yaramadığını anlamak için yüzlerce saat harcadım. Bu rehber, ilk günden beri sahip olmak istediğim her şey.",
      author: "Danyel Koca",
      roleTitle: "Sakana AI'da Uygulamalı Araştırma Mühendisi",
      roleSubtitle: "Önceden McKinsey & Company'de Kıdemli Veri Bilimci",
    },
    problem: {
      title: "Tanidik geliyor mu?",
      subtitle: "Bu hayal kirikliklarini bu rehberi yazmama neden oldu",
      cards: [
        {
          title: "Claude CLAUDE.md'yi görmezden geliyor",
          description: "Özel talimatlarınız göz ardı ediliyor veya konuşmanın ortasında unutuluyor",
        },
        {
          title: "Her şeyi aşırı mühendislik yapıyor",
          description: "Basit bir fonksiyon istiyorsunuz, 500 satır soyutlama alıyorsunuz",
        },
        {
          title: "Her seferinde farklı sonuçlar",
          description: "Aynı prompt, çok farklı çıktı kalitesi",
        },
        {
          title: "Bitti diyor ama bozuk",
          description: "Güvenle aslında çalışmayan kod sunuyor",
        },
      ],
    },
    author: {
      sectionTitle: "Bu Rehbere Neden Güvenmelisiniz?",
      quote: "Yüzlerce saatlik deneme yanılma sonucunda Claude Code'da gerçekten işe yarayan şeyleri keşfettim. Bu rehber öğrendiğim her şey.",
    },
    experience: {
      title: "Bu Rehberin Arkasındaki Deneyim",
      subtitle: "Bu sorunları sadece okumadım, yaşadım.",
      conclusion: "2,7 milyar token deneyim, 51 pratik ipucuna sıkıştırıldı.",
      stats: {
        tokens: "2.772.274.103",
        cost: "$2.288,41",
        period: "28 Kas 2025 - 5 Oca 2026",
      },
    },
    caseStudy: {
      title: "İşe Yaradığının Kanıtı",
      description: "Kumamap'i — Japonya'nın 1 numaralı ayı takipçisini — tamamen Claude Code ile inşa ettim. Bu rehber size kullandığım tam kalıpları öğretiyor.",
      cta: "Canlı ürünü gör",
      stats: {
        views: { value: "1,3 milyon", label: "sayfa görüntüleme" },
        users: { value: "389.000", label: "kullanıcı" },
        time: { value: "3 ay", label: "inşa süresi" },
      },
    },
    curriculum: {
      title: "İçinde Neler Var",
      subtitle: "13 bölümde 51 ipucu",
      viewAll: "Tüm {count} ipucunu gör",
      sections: "bölüm",
    },
    sample: {
      title: "Almadan Once Deneyin",
      subtitle: "Bu 4 ipucunu ucretsiz okuyun. Yardimci olurlarsa, 47 tane daha hayal edin.",
      readFree: "Ucretsiz Oku",
    },
    pricing: {
      title: "Tek Seferlik Satın Alma",
      price: "$29",
      subtitle: "51 ipucunun tamamına ömür boyu erişim",
      features: [
        "Kod örnekleriyle 51 detaylı ipucu",
        "Kopyala-yapıştır CLAUDE.md yapılandırmaları",
        "13 düzenlenmiş bölüm",
        "Ocak 2026 itibariyla guncel",
      ],
      cta: "Anında Erişim Al",
      guarantee: "7 gün para iade garantisi. Soru sorulmaz.",
    },
    checkoutCanceled: "Ödeme iptal edildi. Hazır olduğunuzda.",
  },

  // Pricing page
  pricingPage: {
    pageTitle: "Ödeme - Claude Code Tips",
    pageDescription: "51 ipucunun tamamına $29 ile anında erişim",
    emailLabel: "E-posta Adresi",
    emailPlaceholder: "siz@ornek.com",
    cta: "Ödemeye Devam Et",
    processing: "İşleniyor...",
    errors: {
      emailRequired: "Lütfen e-posta adresinizi girin.",
      invalidEmail: "Lütfen geçerli bir e-posta adresi girin.",
      checkoutFailed: "Bir şeyler yanlış gitti. Lütfen tekrar deneyin.",
      rateLimitExceeded: "Çok fazla deneme. Bir saat sonra tekrar deneyin.",
    },
  },

  // Guide
  guide: {
    title: "Rehber",
    overview: "51 İpucunun Tamamı",
    overviewDescription: "6 aylık günlük kullanımdan elde edilen savaş meydanında test edilmiş ipuçlarıyla Claude Code'da ustalaşın.",
    backToGuide: "Rehbere Dön",
    free: "Ücretsiz",
    freePreview: "Ücretsiz Önizleme",
    locked: "Okumak için aç",
    lockedTitle: "Bu ipucu kilitli",
    lockedDescription: "Tek seferlik satın alma ile 51 ipucunun tamamına erişim sağlayın.",
    unlockCta: "Tam Rehberi Aç - $29",
    unlockAll: "51 İpucunun Tamamını Aç",
    sections: "bölüm",
    freeLabel: "ücretsiz önizleme",
    whatsIncluded: "Neler Dahil",
    detailedTips: "detaylı ipucu",
    organizedSections: "düzenlenmiş bölüm",
    freePreviews: "ücretsiz önizleme",
    startReading: "Okumaya Başla",
    jumpTo: "Bölüme Git",
  },

  // Section data (unified: title, short description, long description)
  sections: {
    setup: {
      title: "Kurulum",
      short: "Terminal, CLAUDE.md, kısayollar ve komutlar",
      long:
        "Doğru terminal kurulumu, CLAUDE.md yapılandırması ve saatler kazandıracak temel klavye kısayolları ile Claude Code'u optimal şekilde çalıştırın.",
    },
    safety: {
      title: "Güvenlik",
      short: "Git, izinler, hassas dosyaları koruma",
      long:
        "Kod tabanınızı ve sırlarınızı uygun git pratikleri, dosya izinleri ve hız ile güvenliği dengeleyen akıllı otomatik onay kuralları ile koruyun.",
    },
    planning: {
      title: "Planlama",
      short: "Plan modu, detaylı planlar, uçtan uca düşünme",
      long:
        "Kodlamadan önce karmaşık görevleri düşünmek için plan modunda ustalaşın. Claude'un kusursuzca yürütebileceği detaylı, eyleme geçirilebilir planlar oluşturmayı öğrenin.",
    },
    prompting: {
      title: "Prompt Yazma",
      short: "Ultrathink, doğrudan olmak, önemi abartmak",
      long:
        "Gelişmiş prompt teknikleriyle Claude'un tam potansiyelini açın. Ultrathink'ten stratejik yönlendirmeye kadar, tutarlı şekilde daha iyi sonuçlar almayı öğrenin.",
    },
    session: {
      title: "Oturum",
      short: "Bağlam yönetimi, devam etme, kalite düşüşü",
      long:
        "Uzun kodlama oturumlarında bağlamı etkili bir şekilde yönetin. Claude'un en yüksek performansını korumak için ne zaman sıkıştırıp, temizleyip veya yeniden başlamanız gerektiğini bilin.",
    },
    input: {
      title: "Girdi",
      short: "Görseller, ekran görüntüleri, hata mesajları",
      long:
        "Daha hızlı hata ayıklama için görseller, ekran görüntüleri ve düzgün formatlanmış hata mesajlarıyla Claude'un çok modlu yeteneklerinden yararlanın.",
    },
    "multi-agent": {
      title: "Çoklu Ajan",
      short: "Paralel ajanlar, worktree'ler, alt ajanlar",
      long:
        "Birden fazla Claude örneği ile üretkenliğinizi ölçeklendirin. Git worktree'leri, paralel ajanlar ve alt ajanları ne zaman etkili kullanacağınızı öğrenin.",
    },
    customization: {
      title: "Özelleştirme",
      short: "Hiyerarşik yapılandırmalar, komutlar, özel ajanlar",
      long: "Hiyerarşik CLAUDE.md dosyaları, özel slash komutları ve uzman ajanlarla Claude Code'u iş akışınıza uyarlayın.",
    },
    pitfalls: {
      title: "Tuzaklar",
      short: "Dikkat edilmesi gereken yaygın Claude davranışları",
      long:
        "Claude Code kullanıcılarını tuzağa düşüren yaygın hatalardan kaçının. Aşırı mühendislikten sessiz başarısızlıklara kadar, neye dikkat etmeniz gerektiğini öğrenin.",
    },
    advanced: {
      title: "İleri Düzey",
      short: "Hook'lar, MCP sunucuları, beceriler, başlıksız mod",
      long: "Otomasyon ve CI/CD entegrasyonu için hook'lar, MCP sunucuları, beceriler ve başlıksız mod gibi uzman kullanıcı özelliklerini açın.",
    },
    "use-cases": {
      title: "Kullanım Senaryoları",
      short: "Kalite kontrolleri, POC'ler, öğrenme, commit'ler",
      long:
        "Kod tabanı kalite kontrollerinden hızlı prototiplemeye kadar gerçek dünya uygulamaları. Claude Code'u günlük işinizde etkili bir şekilde nasıl uygulayacağınızı görün.",
    },
    closing: {
      title: "Kapanış",
      short: "İş akışınızı bulmak için son bilgelik",
      long: "Kişisel iş akışınızı bulmak için son bilgelik. Her özellik herkes için değil - sizin için işe yarayanlara odaklanın.",
    },
    bonus: {
      title: "Bonus",
      short: "6 aylık günlük kullanımdan savaş meydanında test edilmiş CLAUDE.md",
      long:
        "6 aylık günlük kullanımdan damıtılmış eksiksiz, savaş meydanında test edilmiş bir CLAUDE.md dosyası. Kopyalayın, uyarlayın ve kendinizinki yapın.",
    },
  },

  // Paywall
  paywall: {
    title: "Tam Rehberi Aç",
    description: "51 ipucunun tamamına sadece $29 ile erişin",
    cta: "Tam Erişim Al",
    alreadyPurchased: "Zaten satın aldınız mı?",
    restoreAccess: "Erişimi geri yükle",
  },

  // Success page
  success: {
    title: "Teşekkürler!",
    description: "Satın alımınız başarılı. Artık 51 ipucunun tamamına erişebilirsiniz.",
    cta: "Okumaya Başla",
  },

  // Restore page
  restore: {
    pageTitle: "Erişimi Geri Yükle - Claude Code Tips",
    title: "Erişiminizi Geri Yükleyin",
    description: "Bu cihazda erişimi geri yüklemek için satın alırken kullandığınız e-postayı girin.",
    emailLabel: "Satın alma e-postası",
    emailPlaceholder: "siz@ornek.com",
    cta: "Erişimi Geri Yükle",
    successMessage: "Erişim başarıyla geri yüklendi!",
    redirecting: "Rehbere yönlendiriliyor...",
    noAccount: "Henüz satın almadınız mı?",
    buyNow: "Şimdi Satın Al",
    errors: {
      restoreFailed: "Erişim geri yüklenemedi. Tekrar deneyin.",
      emailRequired: "E-posta gerekli.",
      invalidEmail: "Lütfen geçerli bir e-posta adresi girin.",
      rateLimitExceeded: "Çok fazla deneme. Bir saat sonra tekrar deneyin.",
    },
  },

  // Footer
  footer: {
    builtWith: "Claude Code ile inşa edildi",
    product: "Ürün",
    company: "Şirket",
    legal: "Yasal",
    faq: "SSS",
    restoreAccess: "Erişimi geri yükle",
    pricing: "Fiyatlandırma",
    blog: "Blog",
    about: "Hakkında",
    contact: "İletişim",
    privacy: "Gizlilik",
    terms: "Şartlar",
    disclosure: "Açıklama",
  },

  // Contact page
  contact: {
    pageTitle: "İletişim - Claude Code Tips",
    pageDescription: "Sorularınız veya geri bildirimleriniz için bizimle iletişime geçin",
    title: "İletişim",
    description: "Sorularınız veya geri bildirimleriniz mi var? Sizden haber almak isterim.",
    nameLabel: "Ad",
    namePlaceholder: "Adınız",
    emailLabel: "E-posta",
    emailPlaceholder: "siz@ornek.com",
    messageLabel: "Mesaj",
    messagePlaceholder: "Mesajınız...",
    cta: "Mesaj Gönder",
    sent: "Gönderildi",
    successMessage: "Mesaj başarıyla gönderildi! Yakında size döneceğim.",
    errors: {
      nameRequired: "Lütfen adınızı girin.",
      emailRequired: "Lütfen e-posta adresinizi girin.",
      invalidEmail: "Lütfen geçerli bir e-posta adresi girin.",
      messageRequired: "Lütfen bir mesaj girin (en az 10 karakter).",
      rateLimitExceeded: "Çok fazla deneme. Bir saat sonra tekrar deneyin.",
      submitFailed: "Bir şeyler yanlış gitti. Lütfen tekrar deneyin.",
    },
  },

  // About page
  about: {
    pageTitle: "Hakkında - Claude Code Tips",
    pageDescription: "Claude Code Tips'in yaratıcısı Danyel Koca hakkında bilgi edinin ve bu rehberin neden var olduğunu öğrenin.",
    heroTitle: "Bir Uygulayıcı Tarafından İnşa Edildi",
    heroSubtitle: "Bu rehber, gerçek ürünler inşa etmek için her gün Claude Code kullanan biri tarafından oluşturuldu.",
    storyTitle: "Hikaye",
    storyPara1:
      "Ben Danyel Koca, Tokyo'daki Sakana AI'da Uygulamalı Araştırma Mühendisi olarak finansal hizmetler için yapay zeka çözümleri üzerinde çalışıyorum. Öncesinde, McKinsey & Company'de 3 yıl Kıdemli Veri Bilimci olarak kurumsal müşteriler için AI/ML çözümleri inşa ettim.",
    storyPara2:
      "Claude Code'u piyasaya sürüldüğünden beri her gün kullanıyorum. Merak olarak başlayan şey saplantıya dönüştü - iş akışımı önemli ölçüde iyileştiren yeni kalıplar, kısayollar ve yapılandırmalar keşfettim.",
    storyPara3:
      "6 aylık günlük kullanımdan sonra, birinin bana ilk gün söylemesini istediğim düzinelerce ipucu biriktirdim. Bu yüzden bu rehberi oluşturdum.",
    whyTitle: "Bu Rehber Neden Var",
    whyPara1:
      "Çoğu Claude Code öğretici içeriği temel bilgileri kapsar: nasıl kurulur, komutlar nasıl çalıştırılır. Ancak sizi üretken yapan gerçek kalıpları kapsamazlar.",
    whyPara2:
      "Bu rehber farklı. Her ipucu, üretim sistemleri inşa etmenin gerçek deneyiminden geliyor. Teori yok - sadece gerçekten işe yarayan şeyler.",
    credentialsTitle: "Yeterlilikler",
    credentialsList: [
      "Sakana AI'da Uygulamalı Araştırma Mühendisi",
      "Finansal hizmetler icin yapay zeka cozumleri gelistirme",
      "Eski McKinsey & Company Kıdemli Veri Bilimci",
      "Kyoto Üniversitesi mezunu (GNO 3.76/4)",
      "IEEE'de yayınlanmış araştırmacı",
      "Üç dil biliyor: İngilizce, Japonca (JLPT N1), Türkçe",
    ],
    contactTitle: "İletişim",
    contactPara: "Sorularınız veya geri bildirimleriniz mi var? Sizden haber almak isterim.",
    contactLinks: {
      linkedin: "LinkedIn",
      github: "GitHub",
      website: "Web Sitesi",
    },
  },

  // Privacy page
  privacy: {
    pageTitle: "Gizlilik Politikası - Claude Code Tips",
    pageDescription: "Claude Code Tips'in verilerinizi nasıl işlediğini öğrenin.",
    title: "Gizlilik Politikası",
    dataCollectedTitle: "Topladığımız Veriler",
    dataCollectedDescription: "Rehberi satın aldığınızda:",
    dataEmail: "E-posta (teslimat ve erişim için)",
    paymentTitle: "Ödeme İşleme",
    paymentDescription: "Tüm ödemeler Stripe tarafından güvenli bir şekilde işlenir. Ödeme bilgilerinizi saklamıyoruz.",
    contactTitle: "İletişim",
    contactLabel: "E-posta",
    contactEmail: "hello@claudecodetips.com",
  },

  // Terms page
  terms: {
    pageTitle: "Hizmet Şartları - Claude Code Tips",
    pageDescription: "Claude Code Tips için hizmet şartları.",
    title: "Hizmet Şartları",
    serviceTitle: "Hizmet",
    serviceDescription:
      "Claude Code Tips, Claude Code'da ustalaşmak için 51 ipucu içeren dijital bir rehber sağlar. Satın alımda ömür boyu erişim elde edersiniz.",
    paymentTitle: "Ödeme",
    paymentDescription: "Rehbere erişim satın alabilirsiniz:",
    paymentOneTime: "$29 USD tek seferlik ödeme",
    paymentStripe: "Tüm ödemeler Stripe aracılığıyla güvenli şekilde işlenir",
    refundTitle: "İade",
    refundDescription: "7 günlük para iade garantisi. Memnun kalmazsanız, tam iade için 7 gün içinde bize ulaşın.",
    contactTitle: "İletişim",
    contactLabel: "E-posta",
    contactEmail: "hello@claudecodetips.com",
  },

  // Disclosure page (Commercial Disclosure)
  disclosure: {
    pageTitle: "Ticari Açıklama - Claude Code Tips",
    pageDescription: "Claude Code Tips için ticari açıklama.",
    title: "Ticari Açıklama",
    sellerName: "Satıcı",
    sellerNameValue: "Claude Code Tips",
    address: "Adres",
    addressValue: "Talep üzerine açıklanır",
    phone: "Telefon",
    phoneValue: "Talep üzerine açıklanır",
    email: "E-posta",
    emailValue: "hello@claudecodetips.com",
    headOfOperations: "Operasyonlar Müdürü",
    headOfOperationsValue: "Talep üzerine açıklanır",
    additionalFees: "Ek Ücretler",
    additionalFeesValue: "Yok",
    refundPolicy: "İade Politikası",
    refundServiceIssues: "Hizmet Sorunları",
    refundServiceIssuesValue:
      "Hizmet sistem sorunları nedeniyle sağlanmazsa, lütfen hello@claudecodetips.com adresinden bize ulaşın. İnceleyip tam iade yapacağız.",
    refundCustomer: "Müşteri İptali",
    refundCustomerValue:
      "7 günlük para iade garantisi. Satın alımınızdan memnun kalmazsanız, soru sorulmadan tam iade için 7 gün içinde bize ulaşın.",
    deliveryTime: "Teslimat Süresi",
    deliveryTimeValue: "Ödemeden sonra anında erişim",
    paymentMethods: "Ödeme Yöntemleri",
    paymentMethodsValue: "Kredi kartları (Visa, Mastercard, American Express, JCB)",
    paymentPeriod: "Ödeme Dönemi",
    paymentPeriodValue: "Kredi kartı ödemesinde anında işlenir",
    price: "Fiyat",
    priceValue: "$29 USD",
    priceTaxNote: "*Fiyat tüm geçerli vergileri içerir",
  },

  // Blog (UI strings only - post content in .svx files)
  blog: {
    pageTitle: "Blog - Claude Code Tips",
    pageDescription: "51 Tips rehberinin yaratıcısından Claude Code hakkında ipuçları, öğretici içerikler ve görüşler.",
    title: "Blog",
    subtitle: "Claude Code hakkında ipuçları, öğretici içerikler ve görüşler",
    readMore: "Devamını oku",
    publishedOn: "Yayınlanma tarihi",
    backToBlog: "Bloga Dön",
    noPosts: "Henüz yazı yok. Yakında tekrar kontrol edin!",
  },

  // Disclaimer for untranslated content
  disclaimer: {
    notTranslated: "Bu içeriğin çevirisi üzerinde çalışıyoruz. Şu anda İngilizce sürüm gösteriliyor.",
    translationInProgress: "Rehber içeriği şu anda İngilizce'dir. Çeviriler üzerinde aktif olarak çalışıyoruz.",
  },

  // FAQ page
  faq: {
    pageTitle: "SSS - Claude Code Tips",
    pageDescription: "Claude Code Tips rehberi hakkında sık sorulan sorular.",
    title: "Sık Sorulan Sorular",
    items: [
      {
        q: "Rehber hangi formatta?",
        a: "Herhangi bir cihazdan erişebileceğiniz web tabanlı bir rehber. PDF indirme gerekmiyor.",
      },
      {
        q: "Claude Code deneyimim olmalı mı?",
        a: "Temel aşinalık yardımcı olur, ancak rehber ilk kurulumdan ileri tekniklere kadar her şeyi kapsar.",
      },
      {
        q: "Bu rehber ne kadar güncel?",
        a: "Bu rehber, Ocak 2026 itibarıyla en son Claude Code özelliklerini ve en iyi uygulamaları yansıtmaktadır.",
      },
    ],
  },

  // Tip titles and summaries
  tips: {
    "1": { title: "Terminal Kullan", summary: "Claude Code'u terminalde kullan - onunla etkileşim kurmanın en esnek yolu." },
    "2": { title: "CLAUDE.md Oluştur", summary: "Projenizin Claude için kullanım kılavuzu. Etkili Claude Code kullanımı için en önemli dosya." },
    "3": { title: "Kısayollar ve Komutlar", summary: "Verimli Claude Code kullanımı için temel klavye kısayolları ve komutlar." },
    "4": { title: "Git'i Yoğun Kullan", summary: "Claude kapsamlı değişiklikler yaptığında Git güvenlik ağınızdır. Sık commit yapın, diff'leri inceleyin ve kurtarma komutlarını bilin." },
    "5": { title: "Hassas Dosyaları Koru", summary: "Claude Code .env dosyalarını sormadan otomatik okur. Sırları korumak için reddetme kuralları ekleyin." },
    "6": { title: "Bash Komutlarını Asla Otomatik Onaylama", summary: "Bash komutlarını otomatik onaylamak Claude Code ile yapabileceğiniz en tehlikeli şey." },
    "7": { title: "Güvenli Eylemleri Otomatik Onayla", summary: "Okuma ve arama gibi düşük riskli eylemleri otomatik onaylayarak iş akışınızı hızlandırın." },
    "8": { title: "Her Zaman Plan Modu Kullan", summary: "Karmaşık görevlerden önce plan moduna girmek için Shift+Tab'a iki kez basın. Claude kodlamadan önce düşünür." },
    "9": { title: "Genel Planları Asla Kabul Etme", summary: "Planın her zaman kod seviyesinde detaylı ve olgusal olduğundan emin olun." },
    "10": { title: "CLAUDE.md'ye Karşı Doğrula", summary: "Claude'dan planını CLAUDE.md kurallarına karşı doğrulamasını isteyin. Claude konuşmalar uzadıkça talimatları unutur - açık doğrulama zorlayın." },
    "11": { title: "Uçtan Uca Düşünmeye Zorla", summary: "Claude'un eylemden sonuca tam yolu izlemesini sağlayın." },
    "12": { title: "Ultrathink Her Zaman Açık", summary: "Claude'un aklına ilk geleni söylemesine izin vermeyin. Düşünmesine izin verin. HER ZAMAN." },
    "13": { title: "Doğrudan Ol", summary: "Miktar konusunda açık olun - Claude kolay yolu seçme eğilimindedir." },
    "14": { title: "Ne Yapılacağını Söyle, Ne Yapılmayacağını Değil", summary: "Claude'a ne yapmaması gerektiğini söylerken her zaman bir alternatif sunun." },
    "15": { title: "Önemi Abartın", summary: "Claude çabasını algılanan risklere göre ayarlar. Yüksek risk = kapsamlı çalışma." },
    "16": { title: "Claude'a Araç Olarak Davran - İnsan Değil", summary: "Kibar olmak konusunda endişelenmeyin. Doğrudan olduğunuzda Claude daha iyi davranır." },
    "17": { title: "Claude Asistan Görevlerinde Başarılı - Stratejik İşler İçin Yönlendir", summary: "Claude'u önce araştırmaya yönlendirerek stratejik görevleri asistan işlerine dönüştürün." },
    "18": { title: "Bir Görev = Bir Oturum", summary: "Görev bittiğinde kapatın. Bağlamı silmek ve yeniden başlamak için /clear kullanın." },
    "19": { title: "Uzun Oturumlarda Kalite Düşer", summary: "Bağlam penceresi dolar. Claude aptallaşır. Ne zaman sıkıştırıp temizleyeceğinizi bilin." },
    "20": { title: "Oturumları Sürdürmek İçin /resume Kullan", summary: "Claude çöktü mü? Terminal kapandı mı? Kaldığınız yerden devam etmek için /resume kullanın." },
    "21": { title: "'Hepsi Tamam'a Güvenme", summary: "Claude genellikle uç durumları kaçırır veya adımları sessizce atlar. Her zaman doğrulayın." },
    "22": { title: "Görsel/Ekran Görüntüsü Kullan", summary: "Görsel hatalar için ekran görüntülerini Ctrl+V ile doğrudan yapıştırın. Bir resim bin token değerinde." },
    "23": { title: "Hata Mesajlarını Aynen Kopyala", summary: "Başka kelimelerle ifade etmeyin. Satır numaralarıyla tam yığın izi." },
    "24": { title: "İlk Denemede Mükemmel Bekleme", summary: "Bir ajanın kodlamasına izin verin, kodu kontrol etmek için başka bir ajan kullanın." },
    "25": { title: "Büyük İşler İçin Çoklu Ajan", summary: "Aynı promptla birden fazla ajan başlatın. Büyük görevlerde nadiren 1 ajan başarılı olur." },
    "26": { title: "Karmaşık Sorunları Adımlara Böl", summary: "Devasa bir oturum yerine alt görev başına 1 oturum daha iyidir." },
    "27": { title: "Git Worktree'leri", summary: "Aynı repodan birden fazla çalışma dizini. Her birinde Claude çalıştırın." },
    "28": { title: "Alt Ajanlar - Dikkatli Kullan", summary: "Alt ajan özetleri detay kaybeder. Kritik kod için ana ajanın dosyaları doğrudan okumasını sağlayın." },
    "29": { title: "Hiyerarşik CLAUDE.md", summary: "Proje kökünde + alt dizinlerde + global CLAUDE.md. Claude en spesifik olanı önceliklendirir." },
    "30": { title: "Özel Slash Komutları", summary: ".claude/commands/ klasöründe yeniden kullanılabilir iş akışları oluşturun." },
    "31": { title: "Özel Ajanlar", summary: "Kendi bağlam penceresi, sistem promptu ve araç kısıtlamalarına sahip özelleşmiş ajanlar oluşturun." },
    "32": { title: "Claude URL Uydurur", summary: "Var olmayan URL'ler halüsine eder. Harici bağlantılara güvenmeden önce her zaman doğrulayın." },
    "33": { title: "Claude Aşırı Mühendislik Yapar", summary: "Basit bir fonksiyon isteyin, fabrika deseniyle soyut sınıf alın." },
    "34": { title: "Claude Duplikat Oluşturur", summary: "Claude kod tabanınızı aramaz. Sadece yeni kod yazar." },
    "35": { title: "Claude Ekler, Asla Çıkarmaz", summary: "Claude sadece kod ekler. Asla silmez. Silmeyi açıkça zorlamanız gerekir." },
    "36": { title: "Claude EVET ADAM'dır", summary: "Claude söylediğiniz her şeye katılır. Varsayımlarınızı sorgulamasını söyleyin." },
    "37": { title: "Claude Sormak Yerine Varsayar", summary: "Belirsiz gereksinim mi? Claude bir yorum seçer ve onunla devam eder." },
    "38": { title: "Claude Dosyaları Kısmen Okur", summary: "Claude ilk parçayı okur ve çalışmaya başlar. 400. satırdaki kritik fonksiyon? Kaçırıldı." },
    "39": { title: "Claude Kodu Düzeltmek Yerine Testleri Değiştirir", summary: "Kod yanlış olduğunda, Claude test iddialarını kötü koda uyacak şekilde değiştirir." },
    "40": { title: "Hook'lar", summary: "Düzenleme, araç kullanımı veya oturum başlangıcı gibi belirli olaylarda çalışan shell komutları." },
    "41": { title: "MCP Sunucuları", summary: "Harici araçları bağlayın - veritabanları, tarayıcı otomasyonu, belge arama." },
    "42": { title: "Beceriler", summary: "İlgili olduğunda otomatik olarak yüklenen otomatik tetiklenen davranışlar." },
    "43": { title: "GitHub Actions", summary: "Repolarınız için Claude'u kurmak üzere /install-github-app çalıştırın." },
    "44": { title: "Başlıksız Mod", summary: "Claude'u etkileşimli oturum olmadan çalıştırın. Otomasyon ve betikler için." },
    "45": { title: "Kod Tabanı Kalite Kontrollerini Periyodik Çalıştır", summary: "Her sorgu = 1 oturum. Sabit kodlanmış metinleri, tasarım tutarlılığını vb. kontrol edin." },
    "46": { title: "POC'ler İçin Claude Code'u Kullan", summary: "Hızlı prototipleme için mükemmel. POC'ler için Claude'a izin verin." },
    "47": { title: "Claude Şablon Kodda Harika", summary: "CRUD işlemleri, formlar, yapılandırma dosyaları, tekrarlayan desenler. Claude'un çalışmasına izin verin." },
    "48": { title: "Öğrenmek İçin Claude Kullan", summary: "Claude'un sadece kod yazmasına izin vermeyin. Açıklamasını sağlayın." },
    "49": { title: "Commit Mesajları İçin Claude", summary: "Claude'un diff'inizden commit yazmasına izin verin. Tutarlı format, 'neden'i yakalar." },
    "50": { title: "Her Yeni Özelliğin Peşinden Koşma", summary: "Claude Code her hafta yeni özellikler alır. İşe yarayan şeylere odaklanın." },
    "51": { title: "Savaş Meydanında Test Edilmiş CLAUDE.md", summary: "6 aylık dersler, başarısızlıklar ve düzeltmelerden damıtılmış gerçek dünya CLAUDE.md örneği." },
  },
};
