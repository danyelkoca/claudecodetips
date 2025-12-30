export default {
	// Meta
	lang: 'ja',
	langName: '日本語',
	siteBrand: 'Claude Code Tips',

	// Common strings
	common: {
		tipPrefix: 'ヒント',
		tip: 'ヒント',
		tips: 'ヒント',
		previous: '前へ',
		next: '次へ',
		loading: '読み込み中...',
		backArrow: '\u2190',
		forwardArrow: '\u2192'
	},

	// Error page
	error: {
		titleSuffix: 'エラー',
		notFoundTitle: 'ページが見つかりません',
		notFoundDescription: 'お探しのページは存在しません。',
		genericTitle: 'エラーが発生しました',
		genericDescription: '予期しないエラーが発生しました。',
		goHome: 'ホームに戻る',
		langNotFound: '言語が見つかりません',
		blogNotFound: 'ブログ記事が見つかりません',
		sectionNotFound: 'セクションが見つかりません',
		tipNotInSection: 'このセクションにヒントが見つかりません',
		tipNotFound: 'ヒントが見つかりません',
		emailRequired: 'メールアドレスが必要です',
		checkoutFailed: 'チェックアウトセッションの作成に失敗しました'
	},

	// Checkout
	checkout: {
		productName: 'Claude Codeマスター50のヒント',
		productDescription: '全50ヒントの完全ガイド - 永久アクセス'
	},

	// Navigation
	nav: {
		home: 'ホーム',
		guide: 'ガイド',
		pricing: '料金',
		toggleMenu: 'メニュー切替'
	},

	// Landing page
	landing: {
		hero: {
			eyebrow: '6ヶ月の実践から生まれた',
			title: 'Claude Codeを数日でマスター',
			subtitle: '初心者とパワーユーザーを分けるワークフロー、ショートカット、設定。',
			cta: 'ガイドを購入 - $29',
			guarantee: '14日間返金保証'
		},
		social: {
			quote: '500時間以上Claude Codeで実製品を作った後、本当に効果があるパターンをすべて文書化しました。',
			author: 'Danyel Koca',
			role: 'Sakana AI応用研究エンジニア | 元McKinseyシニアデータサイエンティスト',
			benefits: ['数ヶ月の試行錯誤をスキップ', 'コピペで使えるCLAUDE.md設定', 'どんなプロジェクトにも使えるパターン']
		},
		curriculum: {
			title: '内容',
			subtitle: '12セクションにわたる50のヒント + ボーナスコンテンツ'
		},
		sample: {
			title: 'クオリティを確認',
			subtitle: 'このヒントを無料で読んでください。役立つと感じたら、残り49個を想像してみてください。',
			readFull: '無料で全文を読む'
		},
		pricing: {
			title: '一度きりの購入',
			price: '$29',
			subtitle: '全50ヒントへの永久アクセス',
			features: [
				'コード例付きの50の詳細なヒント',
				'コピペできるCLAUDE.md設定',
				'12セクション + ボーナスコンテンツ',
				'将来のアップデート含む'
			],
			cta: '今すぐアクセス',
			anchor: '数ヶ月の試行錯誤をスキップ。',
			guarantee: '14日間返金保証。質問なし。'
		}
	},

	// Guide
	guide: {
		title: 'ガイド',
		overview: '全50ヒント',
		overviewDescription: '6ヶ月の実践から生まれた実戦テスト済みのヒントでClaude Codeをマスター。',
		backToGuide: 'ガイドに戻る',
		free: '無料',
		freePreview: '無料プレビュー',
		locked: 'ロック解除して読む',
		lockedTitle: 'このヒントはロックされています',
		lockedDescription: '一度きりの購入で全50ヒントへのフルアクセスを取得。',
		unlockCta: '全ガイドをアンロック - $29',
		unlockAll: '全50ヒントをアンロック'
	},

	// Section data
	sections: {
		title: '全セクション',
		description: '13セクションに整理された51のヒントを探索。各セクションはClaude Codeマスターの特定の側面に焦点を当てています。',
		tipsInSection: 'このセクション内',
		setup: {
			title: 'セットアップ',
			short: 'ターミナル、CLAUDE.md、ショートカットとコマンド',
			long: '適切なターミナル設定、CLAUDE.md構成、時間を節約する重要なキーボードショートカットでClaude Codeを最適に実行。'
		},
		safety: {
			title: '安全性',
			short: 'Git、権限、機密ファイルの保護',
			long: '適切なgit実践、ファイル権限、速度とセキュリティのバランスを取るスマートな自動承認ルールでコードベースと秘密を保護。'
		},
		planning: {
			title: 'プランニング',
			short: 'プランモード、詳細な計画、エンドツーエンド思考',
			long: 'コーディング前に複雑なタスクを考え抜くためのプランモードをマスター。Claudeが完璧に実行できる詳細でアクション可能な計画の作成方法を学ぶ。'
		},
		prompting: {
			title: 'プロンプティング',
			short: 'Ultrathink、直接的に、重要性の誇張',
			long: '高度なプロンプティング技術でClaudeの可能性を最大限に引き出す。ultrathinkから戦略的ガイダンスまで、一貫して良い結果を得る方法を学ぶ。'
		},
		session: {
			title: 'セッション',
			short: 'コンテキスト管理、再開、品質低下',
			long: '長いコーディングセッション全体でコンテキストを効果的に管理。Claudeの最高のパフォーマンスを維持するために、いつコンパクト化、クリア、または新規開始すべきかを知る。'
		},
		input: {
			title: '入力',
			short: '画像、スクリーンショット、エラーメッセージ',
			long: '画像、スクリーンショット、適切にフォーマットされたエラーメッセージでClaudeのマルチモーダル機能を活用し、デバッグを高速化。'
		},
		'multi-agent': {
			title: 'マルチエージェント',
			short: '並列エージェント、ワークツリー、サブエージェント',
			long: '複数のClaudeインスタンスで生産性を拡大。gitワークツリー、並列エージェント、サブエージェントの効果的な使用方法を学ぶ。'
		},
		customization: {
			title: 'カスタマイズ',
			short: '階層的な設定、コマンド、カスタムエージェント',
			long: '階層的なCLAUDE.mdファイル、カスタムスラッシュコマンド、専門エージェントでClaude Codeをワークフローに合わせてカスタマイズ。'
		},
		pitfalls: {
			title: '落とし穴',
			short: '注意すべきClaudeの一般的な動作',
			long: 'Claude Codeユーザーが陥りがちな一般的な罠を回避。オーバーエンジニアリングからサイレント障害まで、注意すべき点を学ぶ。'
		},
		advanced: {
			title: '上級',
			short: 'フック、MCPサーバー、スキル、ヘッドレスモード',
			long: 'フック、MCPサーバー、スキル、自動化とCI/CD統合のためのヘッドレスモードなどのパワーユーザー機能をアンロック。'
		},
		'use-cases': {
			title: 'ユースケース',
			short: '品質チェック、POC、学習、コミット',
			long: 'コードベースの品質チェックからラピッドプロトタイピングまでの実世界のアプリケーション。日常業務でClaude Codeを効果的に適用する方法を見る。'
		},
		closing: {
			title: 'クロージング',
			short: '自分のワークフローを見つけるための最終的な知恵',
			long: '個人的なワークフローを見つけるための最終的な知恵。すべての機能がすべての人向けではありません - 自分に合ったものに集中。'
		},
		bonus: {
			title: 'ボーナス',
			short: '6ヶ月の実践から生まれた実戦テスト済みCLAUDE.md',
			long: '6ヶ月の毎日の使用から抽出された完全な実戦テスト済みCLAUDE.mdファイル。コピーして、適応して、自分のものにする。'
		}
	},

	// Paywall
	paywall: {
		title: '完全ガイドをアンロック',
		description: 'わずか$29で全50ヒントにアクセス',
		cta: 'フルアクセスを取得'
	},

	// Success page
	success: {
		title: 'ありがとうございます！',
		description: 'ご購入が完了しました。全50ヒントへのフルアクセスが可能になりました。',
		cta: '読み始める'
	},

	// Footer
	footer: {
		builtWith: 'Claude Codeで構築',
		guide: 'ガイド',
		company: '会社',
		legal: '法的情報',
		allTips: '全50ヒント',
		faq: 'よくある質問',
		blog: 'ブログ',
		about: '概要',
		privacy: 'プライバシー',
		terms: '利用規約',
		disclosure: '開示'
	},

	// About page
	about: {
		pageTitle: '概要 - Claude Code Tips',
		pageDescription: 'Claude Code Tipsの作成者であるDanyel Kocaについて、そしてこのガイドが存在する理由を学ぶ。',
		heroTitle: '実践者によって構築',
		heroSubtitle: 'このガイドは、毎日Claude Codeを使って実際の製品を作っている人によって作成されました。',
		storyTitle: 'ストーリー',
		storyPara1: '私はDanyel Koca、東京のSakana AIで応用研究エンジニアをしています。それ以前は、McKinsey & Companyで3年間シニアデータサイエンティストとして、企業クライアント向けのAI/MLソリューションを構築していました。',
		storyPara2: 'Claude Codeがローンチしてから毎日使っています。最初は好奇心でしたが、ワークフローを劇的に改善する新しいパターン、ショートカット、構成を発見するにつれ、夢中になりました。',
		storyPara3: '6ヶ月の毎日の使用後、初日に誰かが教えてくれればよかったと思う数十のヒントを蓄積していました。それがこのガイドを作成した理由です。',
		whyTitle: 'このガイドが存在する理由',
		whyPara1: 'ほとんどのClaude Codeチュートリアルは基本をカバーしています：インストール方法、コマンドの実行方法。しかし、生産性を高める本当のパターンはカバーしていません。',
		whyPara2: 'このガイドは違います。すべてのヒントは本番システムを構築した実際の経験から来ています。理論なし - 実際に効果があるものだけ。',
		credentialsTitle: '資格',
		credentialsList: [
			'Sakana AI 応用研究エンジニア',
			'元McKinsey & Company シニアデータサイエンティスト',
			'京都大学卒業 (GPA 3.76/4)',
			'IEEE掲載研究者',
			'トリリンガル：英語、日本語 (JLPT N1)、トルコ語'
		],
		contactTitle: 'お問い合わせ',
		contactPara: 'ご質問やフィードバックがありましたら、お気軽にどうぞ。',
		contactLinks: {
			linkedin: 'LinkedIn',
			github: 'GitHub',
			website: 'ウェブサイト'
		}
	},

	// Privacy page
	privacy: {
		pageTitle: 'プライバシーポリシー - Claude Code Tips',
		pageDescription: 'Claude Code Tipsがどのようにデータを扱い、プライバシーを保護するかを学ぶ。',
		title: 'プライバシーポリシー',
		lastUpdated: '最終更新：2024年12月',
		introTitle: '私たちの約束',
		introPara: '私たちは最小限のデータ収集を信条としています。購入の処理とガイドの提供に絶対に必要なものだけを収集します。',
		dataCollectedTitle: '収集するデータ',
		dataCollectedPara: 'ガイドを購入する際、以下を収集します：',
		dataCollectedList: [
			'メールアドレス（アクセスの提供用）',
			'支払い情報（Stripeで安全に処理）'
		],
		noTrackingTitle: '私たちがしないこと',
		noTrackingList: [
			'分析やトラッキングスクリプトなし',
			'広告用クッキーなし',
			'第三者へのデータ販売・共有なし',
			'行動トラッキングなし'
		],
		stripeTitle: '支払い処理',
		stripePara: 'すべての支払いはStripeによって安全に処理されます。完全なクレジットカード情報を見たり保存したりすることはありません。支払い処理にはStripeのプライバシーポリシーが適用されます。',
		retentionTitle: 'データ保持',
		retentionPara: 'ガイドへの継続的なアクセスを提供し、サポートリクエストに対応するために購入記録を保持します。',
		contactTitle: 'ご質問は？',
		contactPara: 'プライバシーに関するご質問は、以下までお問い合わせください：',
		contactEmail: 'privacy@claudecodeguide.com'
	},

	// Terms page
	terms: {
		pageTitle: '利用規約 - Claude Code Tips',
		pageDescription: 'Claude Code Tipsの利用規約。',
		title: '利用規約',
		lastUpdated: '最終更新：2024年12月',
		serviceTitle: 'サービス',
		servicePara: 'Claude Code Tipsは、Claude Codeをマスターするための50のヒントを含むデジタルガイドを提供します。購入すると、Webベースのガイドへの永久アクセスが得られます。',
		paymentTitle: '支払い',
		paymentList: [
			'$29 USDの一度きりの支払い',
			'現在および将来のすべてのヒントへの永久アクセス',
			'定期課金やサブスクリプションなし'
		],
		refundTitle: '返金ポリシー',
		refundPara: '14日間の返金保証を提供しています。ガイドに満足できない場合は、購入から14日以内にご連絡いただければ全額返金いたします。質問はありません。',
		licenseTitle: 'ライセンス',
		licensePara: 'ご購入により、ガイドにアクセスして使用するための個人的で譲渡不可のライセンスが付与されます。以下は禁止されています：',
		licenseList: [
			'アカウントやアクセスを他者と共有',
			'ガイドコンテンツのコピー、再配布、再公開',
			'許可なくコンテンツを商用目的で使用'
		],
		disclaimerTitle: '免責事項',
		disclaimerPara: 'このガイドは個人的な経験に基づいて「現状のまま」提供されます。正確性を追求していますが、特定の結果についての保証はありません。Claude CodeはAnthropicの製品であり、このガイドはAnthropicと提携または承認されていません。',
		contactTitle: 'ご質問は？',
		contactPara: 'これらの規約に関するご質問は、以下までお問い合わせください：',
		contactEmail: 'support@claudecodeguide.com'
	},

	// Disclosure page
	disclosure: {
		pageTitle: '開示 - Claude Code Tips',
		pageDescription: 'アフィリエイト関係や編集独立性を含む、Claude Code Tipsに関する重要な開示。',
		title: '開示',
		lastUpdated: '最終更新：2024年12月',
		affiliationTitle: 'Anthropicとの提携なし',
		affiliationPara: 'このガイドはDanyel Kocaによって作成された独立した製品です。ClaudeとClaude Codeの背後にある会社であるAnthropicとは提携、承認、スポンサーされていません。すべての意見と推奨事項は著者のみのものです。',
		independenceTitle: '編集独立性',
		independencePara: 'このガイドのすべてのコンテンツは、個人的な経験に基づく著者の純粋な意見を反映しています。いかなる企業や組織も好意的な報道のために支払ったり、コンテンツに影響を与えたりしていません。',
		aiAssistedTitle: 'AI支援コンテンツ',
		aiAssistedPara: 'このガイドはClaude Code自体の支援を受けて作成されました。著者は毎日Claude Codeを使用し、ガイドコンテンツの執筆、編集、改良に使用しています。これは透明性の精神で開示されています。',
		noSponsoredTitle: 'スポンサーコンテンツなし',
		noSponsoredPara: 'ガイドにはスポンサーコンテンツ、有料掲載、アフィリエイトリンクは含まれていません。販売されている唯一の製品はガイド自体です。',
		contactTitle: 'ご質問は？',
		contactPara: 'これらの開示に関するご質問は、以下までお問い合わせください：',
		contactEmail: 'hello@claudecodeguide.com'
	},

	// Blog
	blog: {
		pageTitle: 'ブログ - Claude Code Tips',
		pageDescription: '50 Tipsガイドの作成者によるClaude Codeに関するヒント、チュートリアル、インサイト。',
		title: 'ブログ',
		subtitle: 'Claude Codeに関するヒント、チュートリアル、インサイト',
		readMore: '続きを読む',
		publishedOn: '公開日',
		backToBlog: 'ブログに戻る',
		noPosts: 'まだ投稿がありません。後でまた確認してください！'
	},

	// Disclaimer
	disclaimer: {
		notTranslated: 'このコンテンツはまだお使いの言語では利用できません。英語版を表示しています。'
	},

	// FAQ page
	faq: {
		pageTitle: 'よくある質問 - Claude Code Tips',
		pageDescription: 'Claude Code Tipsガイドに関するよくある質問。',
		title: 'よくある質問',
		items: [
			{ q: 'ガイドの形式は？', a: 'どのデバイスからでもアクセスできるWebベースのガイドです。PDFダウンロードは不要です。' },
			{ q: 'Claude Codeの経験は必要ですか？', a: '基本的な知識があると役立ちますが、ガイドは初期設定から高度なテクニックまですべてをカバーしています。' },
			{ q: 'Claude Codeがアップデートされたら？', a: 'ガイドは安定したワークフローとパターンに焦点を当てています。主要な機能が変更されたら、ガイドも更新されます。' }
		]
	}
};
