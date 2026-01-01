export default {
  // Meta
  lang: "ja",
  langName: "日本語",
  siteBrand: "Claude Code Tips",

  // Common strings
  common: {
    tipPrefix: "ヒント",
    tip: "ヒント",
    tips: "ヒント",
    previous: "前へ",
    next: "次へ",
    loading: "読み込み中...",
    backArrow: "\u2190",
    forwardArrow: "\u2192",
    goToSlide: "スライドに移動",
  },

  // Error page
  error: {
    titleSuffix: "エラー",
    notFoundTitle: "ページが見つかりません",
    notFoundDescription: "お探しのページは存在しません。",
    genericTitle: "エラーが発生しました",
    genericDescription: "予期しないエラーが発生しました。",
    goHome: "ホームに戻る",
    langNotFound: "言語が見つかりません",
    blogNotFound: "ブログ記事が見つかりません",
    sectionNotFound: "セクションが見つかりません",
    tipNotInSection: "このセクションにヒントが見つかりません",
    tipNotFound: "ヒントが見つかりません",
  },

  // Checkout
  checkout: {
    productName: "Claude Codeマスター51のヒント",
    productDescription: "全51ヒントの完全ガイド - 永久アクセス",
  },

  // Navigation
  nav: {
    guide: "ガイド",
    toggleMenu: "メニュー切替",
  },

  // Landing page
  landing: {
    hero: {
      eyebrow: "くまマップ（38.9万ユーザー）の開発者より",
      title: "Claude Codeは難しい。このガイドで簡単に。",
      subtitle: "6ヶ月の毎日の実践を51の実用的なヒントに凝縮。理論なし。手取り足取りなし。本番アプリを作りながら学んだことだけ。",
      cta: "ガイドを購入 - $29",
      guarantee: "7日間返金保証",
    },
    social: {
      quote: "Claude Codeには急な学習曲線があります。何が効いて何が効かないかを理解するために何百時間も費やしました。このガイドは初日に欲しかったすべてです。",
      author: "Danyel Koca",
      role: "Sakana AI AIエンジニア | 元McKinsey & Company シニアデータサイエンティスト",
    },
    caseStudy: {
      title: "Claude Codeで構築",
      description: "くまマップ（日本一の熊出没トラッカー）をClaude Codeだけで構築しました。このガイドでは、私が使用したパターンを正確にお教えします。",
      cta: "ライブ製品を見る",
      stats: {
        views: { value: "130万", label: "ページビュー" },
        users: { value: "38.9万", label: "ユーザー" },
        time: { value: "3ヶ月", label: "で構築" },
      },
    },
    curriculum: {
      title: "内容",
      subtitle: "13セクションにわたる51のヒント",
      viewAll: "全{count}ヒントを見る",
    },
    sample: {
      title: "クオリティを確認",
      subtitle: "このヒントを無料で読んでください。役立つと感じたら、残り49個を想像してみてください。",
      readFull: "無料で全文を読む",
    },
    pricing: {
      title: "一度きりの購入",
      price: "$29",
      subtitle: "全51ヒントへの永久アクセス",
      features: ["コード例付きの51の詳細なヒント", "コピペできるCLAUDE.md設定", "13の整理されたセクション", "将来のアップデート含む"],
      cta: "今すぐアクセス",
      guarantee: "7日間返金保証。質問なし。",
    },
    checkoutCanceled: "チェックアウトがキャンセルされました。準備ができたらどうぞ。",
  },

  // Pricing page
  pricingPage: {
    pageTitle: "チェックアウト - Claude Code Tips",
    pageDescription: "全51ヒントに$29で即座にアクセス",
    emailLabel: "メールアドレス",
    emailPlaceholder: "you@example.com",
    cta: "支払いに進む",
    processing: "処理中...",
    errors: {
      emailRequired: "メールアドレスを入力してください。",
      invalidEmail: "有効なメールアドレスを入力してください。",
      checkoutFailed: "問題が発生しました。もう一度お試しください。",
      rateLimitExceeded: "試行回数が多すぎます。1時間後にお試しください。",
    },
  },

  // Guide
  guide: {
    title: "ガイド",
    overview: "全51ヒント",
    overviewDescription: "6ヶ月の実践から生まれた実戦テスト済みのヒントでClaude Codeをマスター。",
    backToGuide: "ガイドに戻る",
    free: "無料",
    freePreview: "無料プレビュー",
    locked: "ロック解除して読む",
    lockedTitle: "このヒントはロックされています",
    lockedDescription: "一度きりの購入で全51ヒントへのフルアクセスを取得。",
    unlockCta: "全ガイドをアンロック - $29",
    unlockAll: "全51ヒントをアンロック",
    sections: "セクション",
    freeLabel: "無料プレビュー",
    whatsIncluded: "含まれる内容",
    detailedTips: "詳細なヒント",
    organizedSections: "整理されたセクション",
    freePreviews: "無料プレビュー",
    startReading: "読み始める",
    jumpTo: "セクションへジャンプ",
  },

  // Section data
  sections: {
    setup: {
      title: "セットアップ",
      short: "ターミナル、CLAUDE.md、ショートカットとコマンド",
      long: "適切なターミナル設定、CLAUDE.md構成、時間を節約する重要なキーボードショートカットでClaude Codeを最適に実行。",
    },
    safety: {
      title: "安全性",
      short: "Git、権限、機密ファイルの保護",
      long: "適切なgit実践、ファイル権限、速度とセキュリティのバランスを取るスマートな自動承認ルールでコードベースと秘密を保護。",
    },
    planning: {
      title: "プランニング",
      short: "プランモード、詳細な計画、エンドツーエンド思考",
      long:
        "コーディング前に複雑なタスクを考え抜くためのプランモードをマスター。Claudeが完璧に実行できる詳細でアクション可能な計画の作成方法を学ぶ。",
    },
    prompting: {
      title: "プロンプティング",
      short: "Ultrathink、直接的に、重要性の誇張",
      long: "高度なプロンプティング技術でClaudeの可能性を最大限に引き出す。ultrathinkから戦略的ガイダンスまで、一貫して良い結果を得る方法を学ぶ。",
    },
    session: {
      title: "セッション",
      short: "コンテキスト管理、再開、品質低下",
      long:
        "長いコーディングセッション全体でコンテキストを効果的に管理。Claudeの最高のパフォーマンスを維持するために、いつコンパクト化、クリア、または新規開始すべきかを知る。",
    },
    input: {
      title: "入力",
      short: "画像、スクリーンショット、エラーメッセージ",
      long: "画像、スクリーンショット、適切にフォーマットされたエラーメッセージでClaudeのマルチモーダル機能を活用し、デバッグを高速化。",
    },
    "multi-agent": {
      title: "マルチエージェント",
      short: "並列エージェント、ワークツリー、サブエージェント",
      long: "複数のClaudeインスタンスで生産性を拡大。gitワークツリー、並列エージェント、サブエージェントの効果的な使用方法を学ぶ。",
    },
    customization: {
      title: "カスタマイズ",
      short: "階層的な設定、コマンド、カスタムエージェント",
      long: "階層的なCLAUDE.mdファイル、カスタムスラッシュコマンド、専門エージェントでClaude Codeをワークフローに合わせてカスタマイズ。",
    },
    pitfalls: {
      title: "落とし穴",
      short: "注意すべきClaudeの一般的な動作",
      long: "Claude Codeユーザーが陥りがちな一般的な罠を回避。オーバーエンジニアリングからサイレント障害まで、注意すべき点を学ぶ。",
    },
    advanced: {
      title: "上級",
      short: "フック、MCPサーバー、スキル、ヘッドレスモード",
      long: "フック、MCPサーバー、スキル、自動化とCI/CD統合のためのヘッドレスモードなどのパワーユーザー機能をアンロック。",
    },
    "use-cases": {
      title: "ユースケース",
      short: "品質チェック、POC、学習、コミット",
      long:
        "コードベースの品質チェックからラピッドプロトタイピングまでの実世界のアプリケーション。日常業務でClaude Codeを効果的に適用する方法を見る。",
    },
    closing: {
      title: "クロージング",
      short: "自分のワークフローを見つけるための最終的な知恵",
      long: "個人的なワークフローを見つけるための最終的な知恵。すべての機能がすべての人向けではありません - 自分に合ったものに集中。",
    },
    bonus: {
      title: "ボーナス",
      short: "6ヶ月の実践から生まれた実戦テスト済みCLAUDE.md",
      long: "6ヶ月の毎日の使用から抽出された完全な実戦テスト済みCLAUDE.mdファイル。コピーして、適応して、自分のものにする。",
    },
  },

  // Paywall
  paywall: {
    title: "完全ガイドをアンロック",
    description: "わずか$29で全51ヒントにアクセス",
    cta: "フルアクセスを取得",
    alreadyPurchased: "購入済みですか？",
    restoreAccess: "アクセスを復元",
  },

  // Success page
  success: {
    title: "ありがとうございます！",
    description: "ご購入が完了しました。全51ヒントへのフルアクセスが可能になりました。",
    cta: "読み始める",
  },

  // Restore access page
  restore: {
    pageTitle: "アクセス復元 - Claude Code Tips",
    title: "アクセスを復元",
    description: "購入時に使用したメールアドレスを入力して、このデバイスでのアクセスを復元してください。",
    emailLabel: "購入時のメールアドレス",
    emailPlaceholder: "you@example.com",
    cta: "アクセスを復元",
    successMessage: "アクセスが復元されました！",
    redirecting: "ガイドにリダイレクト中...",
    noAccount: "まだ購入していませんか？",
    buyNow: "今すぐ購入",
    errors: {
      restoreFailed: "アクセスの復元に失敗しました。もう一度お試しください。",
      emailRequired: "メールアドレスが必要です。",
      invalidEmail: "有効なメールアドレスを入力してください。",
      rateLimitExceeded: "試行回数が多すぎます。1時間後にお試しください。",
    },
  },

  // Footer
  footer: {
    builtWith: "Claude Codeで構築",
    guide: "ガイド",
    company: "会社",
    legal: "法的情報",
    allTips: "全51ヒント",
    faq: "よくある質問",
    restoreAccess: "アクセス復元",
    pricing: "料金",
    blog: "ブログ",
    about: "概要",
    contact: "お問い合わせ",
    privacy: "プライバシー",
    terms: "利用規約",
    disclosure: "特商法表記",
  },

  // Contact page
  contact: {
    pageTitle: "お問い合わせ - Claude Code Tips",
    pageDescription: "ご質問やフィードバックはこちらから",
    title: "お問い合わせ",
    description: "ご質問やフィードバックがありましたら、お気軽にどうぞ。",
    nameLabel: "お名前",
    namePlaceholder: "お名前",
    emailLabel: "メールアドレス",
    emailPlaceholder: "you@example.com",
    messageLabel: "メッセージ",
    messagePlaceholder: "メッセージを入力...",
    cta: "送信",
    sent: "送信済み",
    successMessage: "メッセージが送信されました！後ほどご連絡いたします。",
    errors: {
      nameRequired: "お名前を入力してください。",
      emailRequired: "メールアドレスを入力してください。",
      invalidEmail: "有効なメールアドレスを入力してください。",
      messageRequired: "メッセージを入力してください（10文字以上）。",
      rateLimitExceeded: "試行回数が多すぎます。1時間後にお試しください。",
      submitFailed: "問題が発生しました。もう一度お試しください。",
    },
  },

  // About page
  about: {
    pageTitle: "概要 - Claude Code Tips",
    pageDescription: "Claude Code Tipsの作成者であるDanyel Kocaについて、そしてこのガイドが存在する理由を学ぶ。",
    heroTitle: "実践者によって構築",
    heroSubtitle: "このガイドは、毎日Claude Codeを使って実際の製品を作っている人によって作成されました。",
    storyTitle: "ストーリー",
    storyPara1:
      "私はDanyel Koca、東京のSakana AIで応用研究エンジニアをしています。それ以前は、McKinsey & Companyで3年間シニアデータサイエンティストとして、企業クライアント向けのAI/MLソリューションを構築していました。",
    storyPara2:
      "Claude Codeがローンチしてから毎日使っています。最初は好奇心でしたが、ワークフローを劇的に改善する新しいパターン、ショートカット、構成を発見するにつれ、夢中になりました。",
    storyPara3: "6ヶ月の毎日の使用後、初日に誰かが教えてくれればよかったと思う数十のヒントを蓄積していました。それがこのガイドを作成した理由です。",
    whyTitle: "このガイドが存在する理由",
    whyPara1:
      "ほとんどのClaude Codeチュートリアルは基本をカバーしています：インストール方法、コマンドの実行方法。しかし、生産性を高める本当のパターンはカバーしていません。",
    whyPara2: "このガイドは違います。すべてのヒントは本番システムを構築した実際の経験から来ています。理論なし - 実際に効果があるものだけ。",
    credentialsTitle: "資格",
    credentialsList: [
      "Sakana AI 応用研究エンジニア",
      "元McKinsey & Company シニアデータサイエンティスト",
      "京都大学卒業 (GPA 3.76/4)",
      "IEEE掲載研究者",
      "トリリンガル：英語、日本語 (JLPT N1)、トルコ語",
    ],
    contactTitle: "お問い合わせ",
    contactPara: "ご質問やフィードバックがありましたら、お気軽にどうぞ。",
    contactLinks: {
      linkedin: "LinkedIn",
      github: "GitHub",
      website: "ウェブサイト",
    },
  },

  // Privacy page
  privacy: {
    pageTitle: "プライバシーポリシー - Claude Code Tips",
    pageDescription: "Claude Code Tipsのプライバシーポリシーとデータ取り扱い",
    title: "プライバシーポリシー",
    dataCollectedTitle: "収集するデータ",
    dataCollectedDescription: "ガイドを購入する際：",
    dataEmail: "メールアドレス（配信およびアクセス用）",
    paymentTitle: "支払い処理",
    paymentDescription: "すべての支払いはStripeによって安全に処理されます。お支払い情報は保存しません。",
    contactTitle: "お問い合わせ",
    contactLabel: "メール",
    contactEmail: "hello@claudecodetips.com",
  },

  // Terms page
  terms: {
    pageTitle: "利用規約 - Claude Code Tips",
    pageDescription: "Claude Code Tipsの利用規約",
    title: "利用規約",
    serviceTitle: "サービス",
    serviceDescription:
      "Claude Code Tipsは、Claude Codeをマスターするための51のヒントを含むデジタルガイドを提供します。購入すると、永久アクセスが得られます。",
    paymentTitle: "支払い",
    paymentDescription: "ガイドへのアクセスを購入できます：",
    paymentOneTime: "$29 USDの一度きりの支払い",
    paymentStripe: "すべての支払いはStripeで安全に処理されます",
    refundTitle: "返金",
    refundDescription: "7日間の返金保証。ご満足いただけない場合は、7日以内にご連絡いただければ全額返金いたします。",
    contactTitle: "お問い合わせ",
    contactLabel: "メール",
    contactEmail: "hello@claudecodetips.com",
  },

  // Disclosure page (Commercial Disclosure - 特定商取引法)
  disclosure: {
    pageTitle: "特定商取引法に基づく表記 - Claude Code Tips",
    pageDescription: "日本の法律で義務付けられている特定商取引法に基づく表記",
    title: "特定商取引法に基づく表記",
    sellerName: "販売業者",
    sellerNameValue: "Claude Code Tips",
    address: "所在地",
    addressValue: "ご請求があれば遅滞なく開示いたします",
    phone: "電話番号",
    phoneValue: "ご請求があれば遅滞なく開示いたします",
    email: "メールアドレス",
    emailValue: "hello@claudecodetips.com",
    headOfOperations: "運営責任者",
    headOfOperationsValue: "ご請求があれば遅滞なく開示いたします",
    additionalFees: "追加料金",
    additionalFeesValue: "なし",
    refundPolicy: "返品・返金ポリシー",
    refundServiceIssues: "サービス上の問題",
    refundServiceIssuesValue:
      "システム上の問題によりサービスが提供されない場合は、hello@claudecodetips.comまでご連絡ください。確認の上、全額返金いたします。",
    refundCustomer: "お客様都合",
    refundCustomerValue: "7日間の返金保証。ご購入に満足いただけない場合は、7日以内にご連絡いただければ全額返金いたします。",
    deliveryTime: "引き渡し時期",
    deliveryTimeValue: "お支払い後、即時アクセス可能",
    paymentMethods: "支払い方法",
    paymentMethodsValue: "クレジットカード（Visa、Mastercard、American Express、JCB）",
    paymentPeriod: "支払い時期",
    paymentPeriodValue: "クレジットカード決済時に即時処理",
    price: "販売価格",
    priceValue: "$29 USD",
    priceTaxNote: "※価格には適用されるすべての税金が含まれています",
  },

  // Blog
  blog: {
    pageTitle: "ブログ - Claude Code Tips",
    pageDescription: "51 Tipsガイドの作成者によるClaude Codeに関するヒント、チュートリアル、インサイト。",
    title: "ブログ",
    subtitle: "Claude Codeに関するヒント、チュートリアル、インサイト",
    readMore: "続きを読む",
    publishedOn: "公開日",
    backToBlog: "ブログに戻る",
    noPosts: "まだ投稿がありません。後でまた確認してください！",
  },

  // Disclaimer
  disclaimer: {
    notTranslated: "このコンテンツはまだお使いの言語では利用できません。英語版を表示しています。",
  },

  // FAQ page
  faq: {
    pageTitle: "よくある質問 - Claude Code Tips",
    pageDescription: "Claude Code Tipsガイドに関するよくある質問。",
    title: "よくある質問",
    items: [
      { q: "ガイドの形式は？", a: "どのデバイスからでもアクセスできるWebベースのガイドです。PDFダウンロードは不要です。" },
      {
        q: "Claude Codeの経験は必要ですか？",
        a: "基本的な知識があると役立ちますが、ガイドは初期設定から高度なテクニックまですべてをカバーしています。",
      },
      {
        q: "Claude Codeがアップデートされたら？",
        a: "ガイドは安定したワークフローとパターンに焦点を当てています。主要な機能が変更されたら、ガイドも更新されます。",
      },
    ],
  },
};
