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

  // Navigation
  nav: {
    guide: "ガイド",
    toggleMenu: "メニュー切替",
  },

  // Theme toggle
  theme: {
    light: "ライトモード",
    dark: "ダークモード",
  },

  // Landing page
  landing: {
    hero: {
      eyebrow: "くまマップ（38.9万ユーザー）の開発者より",
      title: "Claude Codeは難しい。このガイドで簡単に。",
      subtitle: "6ヶ月の毎日の実践を51の実用的なヒントに凝縮。理論なし。手取り足取りなし。本番アプリを作りながら学んだことだけ。",
      seeAll: "全{count}件のヒントを見る",
    },
    problem: {
      title: "こんな経験ありませんか？",
      subtitle: "これらの不満がこのガイドを書くきっかけになりました",
      cards: [
        {
          title: "ClaudeがCLAUDE.mdを無視する",
          description: "カスタム指示が見落とされたり、会話の途中で忘れられる",
        },
        {
          title: "すべてを過剰設計する",
          description: "シンプルな関数を頼んだのに、500行の抽象化が返ってくる",
        },
        {
          title: "毎回違う結果が出る",
          description: "同じプロンプトなのに、出力の品質がまちまち",
        },
        {
          title: "「完了」と言うが壊れている",
          description: "自信満々で動かないコードを提供する",
        },
      ],
    },
    author: {
      sectionTitle: "なぜこのガイドを信頼できるのか？",
      quote: "何百時間もの試行錯誤を通じて、Claude Codeで本当に効果があることを見つけました。このガイドは私が学んだすべてです。",
    },
    experience: {
      title: "このガイドの背景にある経験",
      subtitle: "これらの問題を読んだだけではない。実際に体験した。",
      conclusion: "27億トークン分の実体験を、51の実践的なヒントに凝縮。",
      stats: {
        tokens: "2,772,274,103",
        cost: "$2,288.41",
        period: "2025年11月28日 - 2026年1月5日",
      },
    },
    social: {
      quote: "Claude Codeには急な学習曲線があります。何が効いて何が効かないかを理解するために何百時間も費やしました。このガイドは初日に欲しかったすべてです。",
      author: "Danyel Koca",
      roleTitle: "Sakana AI 応用研究エンジニア",
      roleSubtitle: "元McKinsey & Company シニアデータサイエンティスト",
    },
    caseStudy: {
      title: "実績の証明",
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
      sections: "セクション",
    },
    sample: {
      title: "Featured Tips",
      subtitle: "Start with these popular tips",
      readFree: "無料で読む",
    },
  },

  // Guide
  guide: {
    title: "ガイド",
    overview: "全51ヒント",
    overviewDescription: "6ヶ月の実践から生まれた実戦テスト済みのヒントでClaude Codeをマスター。",
    backToGuide: "ガイドに戻る",
    sections: "セクション",
    whatsIncluded: "含まれる内容",
    detailedTips: "詳細なヒント",
    organizedSections: "整理されたセクション",
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

  // Footer
  footer: {
    builtWith: "Claude Codeで構築",
    product: "製品",
    company: "会社",
    legal: "法的情報",
    faq: "よくある質問",
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
      "私はDanyel Koca、東京のSakana AIで応用研究エンジニアとして、金融サービス向けAIソリューションに取り組んでいます。それ以前は、McKinsey & Companyで3年間シニアデータサイエンティストとして、企業クライアント向けのAI/MLソリューションを構築していました。",
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
      "金融サービス向けAIソリューションを構築",
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
    dataCollectedDescription: "This is a free guide. We only collect data you voluntarily provide through our contact form.",
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
      "Claude Code Tips provides a free digital guide containing 51 tips for mastering Claude Code.",
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
    notTranslated: "このコンテンツの翻訳作業を進めています。現在は英語版を表示しています。",
    translationInProgress: "ガイドの内容は現在英語です。翻訳作業を進めています。",
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
        q: "このガイドはどれくらい最新ですか？",
        a: "このガイドは2026年1月時点の最新のClaude Code機能とベストプラクティスを反映しています。",
      },
    ],
  },

  // Tip titles and summaries
  tips: {
    "1": { title: "ターミナルを使う", summary: "Claude Codeはターミナルで使うのが最も柔軟な方法です。" },
    "2": { title: "CLAUDE.mdを作成する", summary: "Claudeへのプロジェクト指示書。効果的なClaude Code活用の最重要ファイル。" },
    "3": { title: "ショートカットとコマンド", summary: "効率的なClaude Code使用に必須のキーボードショートカットとコマンド。" },
    "4": { title: "Gitを徹底活用する", summary: "Claudeが大規模な変更を行う際のセーフティネット。頻繁にコミットし、差分を確認し、復旧コマンドを把握する。" },
    "5": { title: "機密ファイルを保護する", summary: "Claude Codeは確認なしに.envファイルを自動で読み込みます。denyルールを追加して秘密情報を守る。" },
    "6": { title: "Bashコマンドを自動承認しない", summary: "Bashコマンドの自動承認はClaude Codeで最も危険な行為です。" },
    "7": { title: "安全なアクションを自動承認する", summary: "読み取りや検索などの低リスクアクションを自動承認してワークフローを高速化。" },
    "8": { title: "常にプランモードを使う", summary: "複雑なタスクの前にShift+Tabを2回押してプランモードに入る。Claudeはコーディング前に考える。" },
    "9": { title: "汎用的なプランを受け入れない", summary: "プランは常にコードレベルで詳細かつ事実に基づいていることを確認する。" },
    "10": { title: "CLAUDE.mdに対して検証する", summary: "ClaudeにCLAUDE.mdルールに対するプランの検証を依頼する。会話が長くなるとClaudeは指示を忘れる。明示的な確認を強制する。" },
    "11": { title: "エンドツーエンド思考を強制する", summary: "Claudeにアクションから結果までの完全なパスをトレースさせる。" },
    "12": { title: "Ultrathinkを常にオン", summary: "Claudeに最初に思いついたことを言わせない。常に考えさせる。" },
    "13": { title: "直接的に伝える", summary: "数量について明確に伝える。Claudeは楽な道を選びがち。" },
    "14": { title: "「しないこと」ではなく「すること」を伝える", summary: "Claudeに「しないこと」を伝える際は常に代替案を提示する。" },
    "15": { title: "重要性を誇張する", summary: "Claudeは認識した重要度に応じて努力を調整する。重要度が高い＝徹底的な作業。" },
    "16": { title: "Claudeをツールとして扱う（人ではなく）", summary: "丁寧さを気にする必要はない。直接的な方がClaudeは良く動く。" },
    "17": { title: "Claudeはアシスタントタスクが得意 - 戦略的な仕事は導く", summary: "戦略的なタスクをアシスタント的な仕事に変換し、Claudeにまず調査させる。" },
    "18": { title: "1タスク＝1セッション", summary: "タスクが終わったら閉じる。/clearでコンテキストをクリアして新たに始める。" },
    "19": { title: "長いセッションで品質が低下する", summary: "コンテキストウィンドウが埋まる。Claudeの性能が落ちる。compactやclearのタイミングを知る。" },
    "20": { title: "/resumeでセッションを継続する", summary: "Claudeがクラッシュ？ターミナルが閉じた？/resumeで中断したところから再開。" },
    "21": { title: "「完了」を信用しない", summary: "Claudeはエッジケースを見落としたり、ステップを黙ってスキップすることが多い。常に確認する。" },
    "22": { title: "画像/スクリーンショットを使う", summary: "視覚的なバグにはCtrl+Vで直接スクリーンショットを貼り付ける。1枚の画像は千トークンの価値がある。" },
    "23": { title: "エラーメッセージをそのままコピーする", summary: "言い換えない。行番号付きの完全なスタックトレースを。" },
    "24": { title: "一発で完璧を期待しない", summary: "1つのエージェントにコードを書かせ、別のエージェントにコードをチェックさせる。" },
    "25": { title: "大きな仕事には複数のエージェント", summary: "同じプロンプトで複数のエージェントを起動する。大きなタスクでは1つのエージェントが正解することは稀。" },
    "26": { title: "複雑な問題をステップに分解する", summary: "1つの巨大セッションより、サブタスクごとに1セッションの方が良い。" },
    "27": { title: "Git Worktrees", summary: "同じリポジトリから複数の作業ディレクトリ。それぞれでClaudeを実行。" },
    "28": { title: "サブエージェント - 注意して使う", summary: "サブエージェントのサマリーは詳細を失う。重要なコードはメインエージェントに直接ファイルを読ませる。" },
    "29": { title: "階層的なCLAUDE.md", summary: "プロジェクトルート＋サブディレクトリ＋グローバルにCLAUDE.md。Claudeは最も具体的なものを優先。" },
    "30": { title: "カスタムスラッシュコマンド", summary: ".claude/commands/フォルダに再利用可能なワークフローを作成。" },
    "31": { title: "カスタムエージェント", summary: "独自のコンテキストウィンドウ、システムプロンプト、ツール制限を持つ専門エージェントを作成。" },
    "32": { title: "ClaudeはURLを捏造する", summary: "存在しないURLをでっち上げる。外部リンクを信用する前に必ず確認。" },
    "33": { title: "Claudeはオーバーエンジニアリングする", summary: "シンプルな関数を頼んだのに、ファクトリーパターン付きの抽象クラスが返ってくる。" },
    "34": { title: "Claudeは重複を作成する", summary: "Claudeはコードベースを検索しない。ただ新しいコードを書く。" },
    "35": { title: "Claudeは追加のみ、削除しない", summary: "Claudeはコードを追加するだけ。削除しない。明示的に強制する必要がある。" },
    "36": { title: "Claudeはイエスマン", summary: "Claudeはあなたの言うことすべてに同意する。前提を疑うように指示する。" },
    "37": { title: "Claudeは質問せずに仮定する", summary: "曖昧な要件？Claudeは解釈を選んでそのまま進む。" },
    "38": { title: "Claudeはファイルを部分的にしか読まない", summary: "Claudeは最初のチャンクを読んで作業を開始する。400行目の重要な関数？見逃す。" },
    "39": { title: "Claudeはコードを直さずテストを修正する", summary: "コードが間違っている時、Claudeは悪いコードに合わせてテストのアサーションを変更する。" },
    "40": { title: "Hooks", summary: "編集、ツール使用、セッション開始など特定イベントで実行されるシェルコマンド。" },
    "41": { title: "MCPサーバー", summary: "外部ツールを接続 - データベース、ブラウザ自動化、ドキュメント検索。" },
    "42": { title: "Skills", summary: "関連する時に自動でロードされる自動トリガー動作。" },
    "43": { title: "GitHub Actions", summary: "/install-github-appを実行してリポジトリにClaudeをセットアップ。" },
    "44": { title: "ヘッドレスモード", summary: "対話セッションなしでClaudeを実行。自動化やスクリプト向け。" },
    "45": { title: "定期的にコードベース品質チェックを実行", summary: "各クエリ＝1セッション。ハードコードされたテキスト、デザインの一貫性などをチェック。" },
    "46": { title: "POCにClaude Codeを活用", summary: "ラピッドプロトタイピングに最適。POCではClaudeに任せる。" },
    "47": { title: "Claudeはボイラープレートが得意", summary: "CRUD操作、フォーム、設定ファイル、繰り返しパターン。Claudeに任せる。" },
    "48": { title: "Claudeで学ぶ", summary: "Claudeにコードを書かせるだけでなく、説明させる。" },
    "49": { title: "Claudeでコミットメッセージ", summary: "Claudeにdiffからコミットを書かせる。一貫したフォーマット、「なぜ」を捉える。" },
    "50": { title: "すべての新機能を追いかけない", summary: "Claude Codeは毎週新機能が出る。効果のあるものに集中する。" },
    "51": { title: "実戦テスト済みCLAUDE.md", summary: "6ヶ月の教訓、失敗、修正から蒸留された実世界のCLAUDE.md例。" },
  },
};
