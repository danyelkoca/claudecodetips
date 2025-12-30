export default {
	// Meta
	lang: 'en',
	langName: 'English',
	siteBrand: 'Claude Code Tips',

	// Common strings
	common: {
		tipPrefix: 'Tip',
		tip: 'tip',
		tips: 'tips',
		previous: 'Previous',
		next: 'Next',
		loading: 'Loading...',
		backArrow: '\u2190',
		forwardArrow: '\u2192'
	},

	// Error page
	error: {
		titleSuffix: 'Error',
		notFoundTitle: 'Page Not Found',
		notFoundDescription: 'The page you\'re looking for doesn\'t exist.',
		genericTitle: 'Something Went Wrong',
		genericDescription: 'An unexpected error occurred.',
		goHome: 'Go Home',
		// Server error keys (backend sends key, UI translates)
		langNotFound: 'Language not found',
		blogNotFound: 'Blog post not found',
		sectionNotFound: 'Section not found',
		tipNotInSection: 'Tip not found in this section',
		tipNotFound: 'Tip not found',
		emailRequired: 'Email is required',
		checkoutFailed: 'Failed to create checkout session'
	},

	// Checkout
	checkout: {
		productName: '50 Tips to Master Claude Code',
		productDescription: 'Complete guide with all 50 tips - lifetime access'
	},

	// Navigation
	nav: {
		home: 'Home',
		guide: 'Guide',
		pricing: 'Pricing',
		toggleMenu: 'Toggle menu'
	},

	// Landing page
	landing: {
		hero: {
			eyebrow: 'From 6 months of daily use',
			title: 'Master Claude Code in Days, Not Months',
			subtitle: '50 battle-tested tips. Copy-paste configs. Zero fluff.',
			cta: 'Get Instant Access - $29',
			guarantee: '14-day money-back guarantee'
		},
		social: {
			quote: 'After 500+ hours building real products with Claude Code, I documented every pattern that actually works.',
			author: 'Danyel Koca',
			role: 'Applied Research Engineer at Sakana AI | Ex-Senior Data Scientist at McKinsey',
			benefits: [
				'Skip months of trial and error',
				'Copy-paste ready CLAUDE.md configs',
				'Patterns that work with any project'
			]
		},
		curriculum: {
			title: 'What\'s Inside',
			subtitle: '50 tips across 12 sections + bonus content'
		},
		sample: {
			title: 'See the Quality',
			subtitle: 'Read this tip free. If it helps, imagine 49 more.',
			readFull: 'Read full tip free'
		},
		pricing: {
			title: 'One-Time Purchase',
			price: '$29',
			subtitle: 'Lifetime access to all 50 tips',
			features: [
				'50 detailed tips with code examples',
				'Copy-paste CLAUDE.md configs',
				'12 sections + bonus content',
				'Future updates included'
			],
			cta: 'Get Instant Access',
			guarantee: '14-day money-back guarantee. No questions asked.'
		},
		faq: {
			title: 'FAQ',
			items: [
				{
					q: 'What format is the guide?',
					a: 'It\'s a web-based guide you can access from any device. No PDF downloads needed.'
				},
				{
					q: 'Do I need Claude Code experience?',
					a: 'Basic familiarity helps, but the guide covers everything from initial setup to advanced techniques.'
				},
				{
					q: 'What if Claude Code updates?',
					a: 'The guide focuses on workflows and patterns that remain stable. When major features change, the guide gets updated too.'
				}
			]
		}
	},

	// Guide
	guide: {
		title: 'Guide',
		overview: 'All 50 Tips',
		overviewDescription: 'Master Claude Code with these battle-tested tips from 6 months of daily use.',
		backToGuide: 'Back to Guide',
		free: 'Free',
		freePreview: 'Free Preview',
		locked: 'Unlock to read',
		lockedTitle: 'This tip is locked',
		lockedDescription: 'Get full access to all 50 tips with a one-time purchase.',
		unlockCta: 'Unlock Full Guide - $29',
		unlockAll: 'Unlock All 50 Tips'
	},

	// Section data (unified: title, short description, long description)
	sections: {
		title: 'All Sections',
		description: 'Explore 51 tips organized into 13 sections. Each section focuses on a specific aspect of mastering Claude Code.',
		tipsInSection: 'in this section',
		setup: {
			title: 'Setup',
			short: 'Terminal, CLAUDE.md, shortcuts and commands',
			long: 'Get Claude Code running optimally with the right terminal setup, CLAUDE.md configuration, and essential keyboard shortcuts that will save you hours.'
		},
		safety: {
			title: 'Safety',
			short: 'Git, permissions, protecting sensitive files',
			long: 'Protect your codebase and secrets with proper git practices, file permissions, and smart auto-approve rules that balance speed with security.'
		},
		planning: {
			title: 'Planning',
			short: 'Plan mode, detailed plans, end-to-end thinking',
			long: 'Master plan mode to think through complex tasks before coding. Learn to create detailed, actionable plans that Claude can execute flawlessly.'
		},
		prompting: {
			title: 'Prompting',
			short: 'Ultrathink, being direct, exaggerating importance',
			long: 'Unlock Claude\'s full potential with advanced prompting techniques. From ultrathink to strategic guidance, learn how to get consistently better results.'
		},
		session: {
			title: 'Session',
			short: 'Context management, resume, quality degradation',
			long: 'Manage context effectively across long coding sessions. Know when to compact, clear, or start fresh to maintain Claude\'s peak performance.'
		},
		input: {
			title: 'Input',
			short: 'Images, screenshots, error messages',
			long: 'Leverage Claude\'s multimodal capabilities with images, screenshots, and properly formatted error messages for faster debugging.'
		},
		'multi-agent': {
			title: 'Multi-Agent',
			short: 'Parallel agents, worktrees, subagents',
			long: 'Scale your productivity with multiple Claude instances. Learn git worktrees, parallel agents, and when to use subagents effectively.'
		},
		customization: {
			title: 'Customization',
			short: 'Hierarchical configs, commands, custom agents',
			long: 'Tailor Claude Code to your workflow with hierarchical CLAUDE.md files, custom slash commands, and specialized agents.'
		},
		pitfalls: {
			title: 'Pitfalls',
			short: 'Common Claude behaviors to watch for',
			long: 'Avoid the common traps that trip up Claude Code users. From over-engineering to silent failures, learn what to watch for.'
		},
		advanced: {
			title: 'Advanced',
			short: 'Hooks, MCP servers, skills, headless mode',
			long: 'Unlock power-user features like hooks, MCP servers, skills, and headless mode for automation and CI/CD integration.'
		},
		'use-cases': {
			title: 'Use Cases',
			short: 'Quality checks, POCs, learning, commits',
			long: 'Real-world applications from codebase quality checks to rapid prototyping. See how to apply Claude Code effectively in your daily work.'
		},
		closing: {
			title: 'Closing',
			short: 'Final wisdom on finding your workflow',
			long: 'Final wisdom on finding your personal workflow. Not every feature is for everyone - focus on what works for you.'
		},
		bonus: {
			title: 'Bonus',
			short: 'Battle-tested CLAUDE.md from 6 months of daily use',
			long: 'A complete, battle-tested CLAUDE.md file distilled from 6 months of daily use. Copy, adapt, and make it your own.'
		}
	},

	// Paywall
	paywall: {
		title: 'Unlock the Full Guide',
		description: 'Get access to all 50 tips for just $29',
		cta: 'Get Full Access'
	},

	// Success page
	success: {
		title: 'Thank You!',
		description: 'Your purchase was successful. You now have full access to all 50 tips.',
		cta: 'Start Reading'
	},

	// Footer
	footer: {
		builtWith: 'Built with Claude Code',
		guide: 'Guide',
		company: 'Company',
		legal: 'Legal',
		allTips: 'All 50 Tips',
		faq: 'FAQ',
		blog: 'Blog',
		about: 'About',
		privacy: 'Privacy',
		terms: 'Terms',
		disclosure: 'Disclosure'
	},

	// About page
	about: {
		pageTitle: 'About - Claude Code Tips',
		pageDescription: 'Learn about Danyel Koca, the creator of the Claude Code Tips, and why this guide exists.',
		heroTitle: 'Built by a Practitioner',
		heroSubtitle: 'This guide was created by someone who uses Claude Code every single day to build real products.',
		storyTitle: 'The Story',
		storyPara1: 'I\'m Danyel Koca, an Applied Research Engineer at Sakana AI in Tokyo. Before that, I spent 3 years as a Senior Data Scientist at McKinsey & Company, building AI/ML solutions for enterprise clients.',
		storyPara2: 'I\'ve been using Claude Code daily since it launched. What started as curiosity turned into obsession - I found myself discovering new patterns, shortcuts, and configurations that dramatically improved my workflow.',
		storyPara3: 'After 6 months of daily use, I had accumulated dozens of tips that I wished someone had told me on day one. That\'s why I created this guide.',
		whyTitle: 'Why This Guide Exists',
		whyPara1: 'Most Claude Code tutorials cover the basics: how to install it, how to run commands. But they don\'t cover the real patterns that make you productive.',
		whyPara2: 'This guide is different. Every tip comes from real experience building production systems. No theory - just what actually works.',
		credentialsTitle: 'Credentials',
		credentialsList: [
			'Applied Research Engineer at Sakana AI',
			'Ex-Senior Data Scientist at McKinsey & Company',
			'Kyoto University graduate (GPA 3.76/4)',
			'Published researcher on IEEE',
			'Trilingual: English, Japanese (JLPT N1), Turkish'
		],
		contactTitle: 'Get in Touch',
		contactPara: 'Have questions or feedback? I\'d love to hear from you.',
		contactLinks: {
			linkedin: 'LinkedIn',
			github: 'GitHub',
			website: 'Website'
		}
	},

	// Privacy page
	privacy: {
		pageTitle: 'Privacy Policy - Claude Code Tips',
		pageDescription: 'Learn how Claude Code Tips handles your data and protects your privacy.',
		title: 'Privacy Policy',
		lastUpdated: 'Last updated: December 2024',
		introTitle: 'Our Commitment',
		introPara: 'We believe in minimal data collection. We only collect what\'s absolutely necessary to process your purchase and deliver the guide.',
		dataCollectedTitle: 'Data We Collect',
		dataCollectedPara: 'When you purchase the guide, we collect:',
		dataCollectedList: [
			'Email address (to deliver access)',
			'Payment information (processed securely by Stripe)'
		],
		noTrackingTitle: 'What We Don\'t Do',
		noTrackingList: [
			'No analytics or tracking scripts',
			'No cookies for advertising',
			'No selling or sharing your data with third parties',
			'No behavioral tracking'
		],
		stripeTitle: 'Payment Processing',
		stripePara: 'All payments are processed securely by Stripe. We never see or store your full credit card details. Stripe\'s privacy policy applies to payment processing.',
		retentionTitle: 'Data Retention',
		retentionPara: 'We retain purchase records to provide you with continued access to the guide and handle any support requests.',
		contactTitle: 'Questions?',
		contactPara: 'For any privacy-related questions, contact us at:',
		contactEmail: 'privacy@claudecodeguide.com'
	},

	// Terms page
	terms: {
		pageTitle: 'Terms of Service - Claude Code Tips',
		pageDescription: 'Terms and conditions for using the Claude Code Tips.',
		title: 'Terms of Service',
		lastUpdated: 'Last updated: December 2024',
		serviceTitle: 'The Service',
		servicePara: 'Claude Code Tips provides a digital guide containing 50 tips for mastering Claude Code. Upon purchase, you receive lifetime access to the web-based guide.',
		paymentTitle: 'Payment',
		paymentList: [
			'One-time payment of $29 USD',
			'Lifetime access to all current and future tips',
			'No recurring charges or subscriptions'
		],
		refundTitle: 'Refund Policy',
		refundPara: 'We offer a 14-day money-back guarantee. If you\'re not satisfied with the guide, contact us within 14 days of purchase for a full refund. No questions asked.',
		licenseTitle: 'License',
		licensePara: 'Your purchase grants you a personal, non-transferable license to access and use the guide. You may not:',
		licenseList: [
			'Share your account or access with others',
			'Copy, redistribute, or republish the guide content',
			'Use the content for commercial purposes without permission'
		],
		disclaimerTitle: 'Disclaimer',
		disclaimerPara: 'This guide is provided "as is" based on personal experience. While we strive for accuracy, we make no guarantees about specific results. Claude Code is a product of Anthropic, and this guide is not affiliated with or endorsed by Anthropic.',
		contactTitle: 'Questions?',
		contactPara: 'For any questions about these terms, contact us at:',
		contactEmail: 'support@claudecodeguide.com'
	},

	// Disclosure page
	disclosure: {
		pageTitle: 'Disclosure - Claude Code Tips',
		pageDescription: 'Important disclosures about the Claude Code Tips, including affiliate relationships and editorial independence.',
		title: 'Disclosure',
		lastUpdated: 'Last updated: December 2024',
		affiliationTitle: 'No Affiliation with Anthropic',
		affiliationPara: 'This guide is an independent product created by Danyel Koca. It is NOT affiliated with, endorsed by, or sponsored by Anthropic, the company behind Claude and Claude Code. All opinions and recommendations are solely those of the author.',
		independenceTitle: 'Editorial Independence',
		independencePara: 'All content in this guide reflects the author\'s genuine opinions based on personal experience. No company or organization has paid for favorable coverage or influenced the content.',
		aiAssistedTitle: 'AI-Assisted Content',
		aiAssistedPara: 'This guide was created with the assistance of Claude Code itself. The author uses Claude Code daily and has used it to help write, edit, and refine the guide content. This is disclosed in the spirit of transparency.',
		noSponsoredTitle: 'No Sponsored Content',
		noSponsoredPara: 'The guide contains no sponsored content, paid placements, or affiliate links. The only product being sold is the guide itself.',
		contactTitle: 'Questions?',
		contactPara: 'For any questions about these disclosures, contact us at:',
		contactEmail: 'hello@claudecodeguide.com'
	},

	// Blog (UI strings only - post content in .svx files)
	blog: {
		pageTitle: 'Blog - Claude Code Tips',
		pageDescription: 'Tips, tutorials, and insights about Claude Code from the creator of the 50 Tips guide.',
		title: 'Blog',
		subtitle: 'Tips, tutorials, and insights about Claude Code',
		readMore: 'Read more',
		publishedOn: 'Published on',
		backToBlog: 'Back to Blog',
		noPosts: 'No posts yet. Check back soon!'
	},

	// Disclaimer for untranslated content
	disclaimer: {
		notTranslated: 'This content is not yet available in your language. Showing English version.'
	},

	// FAQ page
	faq: {
		pageTitle: 'FAQ - Claude Code Tips',
		pageDescription: 'Frequently asked questions about the Claude Code Tips guide.',
		title: 'Frequently Asked Questions',
		items: [
			{
				q: 'What format is the guide?',
				a: 'It\'s a web-based guide you can access from any device. No PDF downloads needed.'
			},
			{
				q: 'Do I need Claude Code experience?',
				a: 'Basic familiarity helps, but the guide covers everything from initial setup to advanced techniques.'
			},
			{
				q: 'What if Claude Code updates?',
				a: 'The guide focuses on workflows and patterns that remain stable. When major features change, the guide gets updated too.'
			}
		]
	}
};
