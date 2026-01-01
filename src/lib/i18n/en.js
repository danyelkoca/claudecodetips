export default {
  // Meta
  lang: "en",
  langName: "English",
  siteBrand: "Claude Code Tips",

  // Common strings
  common: {
    tipPrefix: "Tip",
    tip: "tip",
    tips: "tips",
    previous: "Previous",
    next: "Next",
    loading: "Loading...",
    backArrow: "\u2190",
    forwardArrow: "\u2192",
    goToSlide: "Go to slide",
  },

  // Error page
  error: {
    titleSuffix: "Error",
    notFoundTitle: "Page Not Found",
    notFoundDescription: "The page you're looking for doesn't exist.",
    genericTitle: "Something Went Wrong",
    genericDescription: "An unexpected error occurred.",
    goHome: "Go Home",
    // Server error keys (backend sends key, UI translates)
    langNotFound: "Language not found",
    blogNotFound: "Blog post not found",
    sectionNotFound: "Section not found",
    tipNotInSection: "Tip not found in this section",
    tipNotFound: "Tip not found",
  },

  // Checkout
  checkout: {
    productName: "51 Tips to Master Claude Code",
    productDescription: "Complete guide with all 51 tips - lifetime access",
  },

  // Navigation
  nav: {
    guide: "Guide",
    toggleMenu: "Toggle menu",
  },

  // Landing page
  landing: {
    hero: {
      eyebrow: "From the creator of Kumamap (389K users)",
      title: "Claude Code Is Hard. This Guide Makes It Easy.",
      subtitle: "6 months of daily grinding distilled into 51 tips that actually work. No theory. No hand-holding. Just what I learned building production apps.",
      cta: "Get the Guide - $29",
      guarantee: "7-day money-back guarantee",
    },
    social: {
      quote: "Claude Code has a steep learning curve. I burned through hundreds of hours figuring out what works and what doesn't. This guide is everything I wish I had on day one.",
      author: "Danyel Koca",
      role: "AI Engineer at Sakana AI | Previously Senior Data Scientist at McKinsey & Company",
    },
    caseStudy: {
      title: "Built With Claude Code",
      description: "I built Kumamap — Japan's #1 bear tracker — entirely with Claude Code. This guide teaches you the exact patterns I used.",
      cta: "See the live product",
      stats: {
        views: { value: "1.3 million", label: "page views" },
        users: { value: "389,000", label: "users" },
        time: { value: "3 months", label: "to build" },
      },
    },
    curriculum: {
      title: "What's Inside",
      subtitle: "51 tips across 13 sections",
      viewAll: "View all {count} tips",
    },
    sample: {
      title: "See the Quality",
      subtitle: "Read this tip free. If it helps, imagine 49 more.",
      readFull: "Read full tip free",
    },
    pricing: {
      title: "One-Time Purchase",
      price: "$29",
      subtitle: "Lifetime access to all 51 tips",
      features: ["51 detailed tips with code examples", "Copy-paste CLAUDE.md configs", "13 organized sections", "Future updates included"],
      cta: "Get the Guide",
      guarantee: "7-day money-back guarantee. No questions asked.",
    },
    checkoutCanceled: "Checkout canceled. Ready when you are.",
  },

  // Pricing page
  pricingPage: {
    pageTitle: "Checkout - Claude Code Tips",
    pageDescription: "Get instant access to all 51 tips for $29",
    emailLabel: "Email Address",
    emailPlaceholder: "you@example.com",
    cta: "Continue to Payment",
    processing: "Processing...",
    errors: {
      emailRequired: "Please enter your email.",
      invalidEmail: "Please enter a valid email address.",
      checkoutFailed: "Something went wrong. Please try again.",
      rateLimitExceeded: "Too many attempts. Try again in an hour.",
    },
  },

  // Guide
  guide: {
    title: "Guide",
    overview: "All 51 Tips",
    overviewDescription: "Master Claude Code with these battle-tested tips from 6 months of daily use.",
    backToGuide: "Back to Guide",
    free: "Free",
    freePreview: "Free Preview",
    locked: "Unlock to read",
    lockedTitle: "This tip is locked",
    lockedDescription: "Get full access to all 51 tips with a one-time purchase.",
    unlockCta: "Get the Guide - $29",
    unlockAll: "Unlock All 51 Tips",
    sections: "sections",
    freeLabel: "free previews",
    whatsIncluded: "What's Included",
    detailedTips: "detailed tips",
    organizedSections: "organized sections",
    freePreviews: "free previews",
    startReading: "Start Reading",
    jumpTo: "Jump to Section",
  },

  // Section data (unified: title, short description, long description)
  sections: {
    setup: {
      title: "Setup",
      short: "Terminal, CLAUDE.md, shortcuts and commands",
      long:
        "Get Claude Code running optimally with the right terminal setup, CLAUDE.md configuration, and essential keyboard shortcuts that will save you hours.",
    },
    safety: {
      title: "Safety",
      short: "Git, permissions, protecting sensitive files",
      long:
        "Protect your codebase and secrets with proper git practices, file permissions, and smart auto-approve rules that balance speed with security.",
    },
    planning: {
      title: "Planning",
      short: "Plan mode, detailed plans, end-to-end thinking",
      long:
        "Master plan mode to think through complex tasks before coding. Learn to create detailed, actionable plans that Claude can execute flawlessly.",
    },
    prompting: {
      title: "Prompting",
      short: "Ultrathink, being direct, exaggerating importance",
      long:
        "Unlock Claude's full potential with advanced prompting techniques. From ultrathink to strategic guidance, learn how to get consistently better results.",
    },
    session: {
      title: "Session",
      short: "Context management, resume, quality degradation",
      long:
        "Manage context effectively across long coding sessions. Know when to compact, clear, or start fresh to maintain Claude's peak performance.",
    },
    input: {
      title: "Input",
      short: "Images, screenshots, error messages",
      long: "Leverage Claude's multimodal capabilities with images, screenshots, and properly formatted error messages for faster debugging.",
    },
    "multi-agent": {
      title: "Multi-Agent",
      short: "Parallel agents, worktrees, subagents",
      long: "Scale your productivity with multiple Claude instances. Learn git worktrees, parallel agents, and when to use subagents effectively.",
    },
    customization: {
      title: "Customization",
      short: "Hierarchical configs, commands, custom agents",
      long: "Tailor Claude Code to your workflow with hierarchical CLAUDE.md files, custom slash commands, and specialized agents.",
    },
    pitfalls: {
      title: "Pitfalls",
      short: "Common Claude behaviors to watch for",
      long: "Avoid the common traps that trip up Claude Code users. From over-engineering to silent failures, learn what to watch for.",
    },
    advanced: {
      title: "Advanced",
      short: "Hooks, MCP servers, skills, headless mode",
      long: "Unlock power-user features like hooks, MCP servers, skills, and headless mode for automation and CI/CD integration.",
    },
    "use-cases": {
      title: "Use Cases",
      short: "Quality checks, POCs, learning, commits",
      long: "Real-world applications from codebase quality checks to rapid prototyping. See how to apply Claude Code effectively in your daily work.",
    },
    closing: {
      title: "Closing",
      short: "Final wisdom on finding your workflow",
      long: "Final wisdom on finding your personal workflow. Not every feature is for everyone - focus on what works for you.",
    },
    bonus: {
      title: "Bonus",
      short: "Battle-tested CLAUDE.md from 6 months of daily use",
      long: "A complete, battle-tested CLAUDE.md file distilled from 6 months of daily use. Copy, adapt, and make it your own.",
    },
  },

  // Paywall
  paywall: {
    title: "Get the Full Guide",
    description: "Access all 51 tips for just $29",
    cta: "Get the Guide",
    alreadyPurchased: "Already purchased?",
    restoreAccess: "Restore Access",
  },

  // Success page
  success: {
    title: "Thank You!",
    description: "Your purchase was successful. You now have full access to all 51 tips.",
    cta: "Start Reading",
  },

  // Restore access page
  restore: {
    pageTitle: "Restore Access - Claude Code Tips",
    title: "Restore Your Access",
    description: "Enter the email you used when purchasing to restore access on this device.",
    emailLabel: "Purchase Email",
    emailPlaceholder: "you@example.com",
    cta: "Restore Access",
    successMessage: "Access restored successfully!",
    redirecting: "Redirecting to guide...",
    noAccount: "No purchase yet?",
    buyNow: "Buy Now",
    errors: {
      restoreFailed: "Failed to restore access. Please try again.",
      emailRequired: "Email is required.",
      invalidEmail: "Please enter a valid email address.",
      rateLimitExceeded: "Too many attempts. Try again in an hour.",
    },
  },

  // Footer
  footer: {
    builtWith: "Built with Claude Code",
    guide: "Guide",
    company: "Company",
    legal: "Legal",
    allTips: "All 51 Tips",
    faq: "FAQ",
    restoreAccess: "Restore Access",
    pricing: "Pricing",
    blog: "Blog",
    about: "About",
    contact: "Contact",
    privacy: "Privacy",
    terms: "Terms",
    disclosure: "Disclosure",
  },

  // Contact page
  contact: {
    pageTitle: "Contact - Claude Code Tips",
    pageDescription: "Get in touch with questions or feedback",
    title: "Contact Us",
    description: "Have questions or feedback? I'd love to hear from you.",
    nameLabel: "Name",
    namePlaceholder: "Your name",
    emailLabel: "Email",
    emailPlaceholder: "you@example.com",
    messageLabel: "Message",
    messagePlaceholder: "Your message...",
    cta: "Send Message",
    sent: "Sent",
    successMessage: "Message sent successfully! I'll get back to you soon.",
    errors: {
      nameRequired: "Please enter your name.",
      emailRequired: "Please enter your email.",
      invalidEmail: "Please enter a valid email address.",
      messageRequired: "Please enter a message (at least 10 characters).",
      rateLimitExceeded: "Too many attempts. Try again in an hour.",
      submitFailed: "Something went wrong. Please try again.",
    },
  },

  // About page
  about: {
    pageTitle: "About - Claude Code Tips",
    pageDescription: "Learn about Danyel Koca, the creator of Claude Code Tips, and why this guide exists.",
    heroTitle: "Built by Someone Who Actually Ships",
    heroSubtitle: "Not another tutorial from someone who read the docs. This guide is from someone who used Claude Code to build a product with 389K users.",
    storyTitle: "The Story",
    storyPara1:
      "I'm Danyel Koca, an AI Engineer at Sakana AI in Tokyo, working on AI solutions for financial services. Before that, I spent 3 years at McKinsey building AI/ML solutions for Fortune 500 clients.",
    storyPara2:
      "I've been using Claude Code daily since it launched. What started as curiosity turned into obsession - I built Kumamap, a bear tracker that now serves 389K users, almost entirely with Claude Code.",
    storyPara3:
      "After 6 months of daily grinding, I had accumulated dozens of tips that I wished someone had told me on day one. The patterns that actually work. The pitfalls that waste hours. That's this guide.",
    whyTitle: "Why This Guide Exists",
    whyPara1:
      "Most Claude Code tutorials cover the basics: how to install it, how to run commands. But they don't cover the real patterns that make you productive.",
    whyPara2: "This guide is different. Every tip comes from real experience building production systems. No theory - just what actually works.",
    credentialsTitle: "Credentials",
    credentialsList: [
      "AI Engineer at Sakana AI",
      "Building AI solutions for financial services",
      "Ex-Senior Data Scientist at McKinsey & Company",
      "Built Kumamap.com - 389K users",
      "Kyoto University graduate | IEEE published",
      "Trilingual: English, Japanese (JLPT N1), Turkish",
    ],
    contactTitle: "Get in Touch",
    contactPara: "Have questions or feedback? I'd love to hear from you.",
    contactLinks: {
      linkedin: "LinkedIn",
      github: "GitHub",
      website: "Website",
    },
  },

  // Privacy page
  privacy: {
    pageTitle: "Privacy Policy - Claude Code Tips",
    pageDescription: "Claude Code Tips privacy policy and data handling",
    title: "Privacy Policy",
    dataCollectedTitle: "Data We Collect",
    dataCollectedDescription: "When you purchase the guide:",
    dataEmail: "Email (for delivery and access)",
    paymentTitle: "Payment Processing",
    paymentDescription: "All payments are processed securely by Stripe. We do not store your payment information.",
    contactTitle: "Contact",
    contactLabel: "Email",
    contactEmail: "hello@claudecodetips.com",
  },

  // Terms page
  terms: {
    pageTitle: "Terms of Service - Claude Code Tips",
    pageDescription: "Claude Code Tips terms of service",
    title: "Terms of Service",
    serviceTitle: "Service",
    serviceDescription:
      "Claude Code Tips provides a digital guide containing 51 tips for mastering Claude Code. Upon purchase, you receive lifetime access.",
    paymentTitle: "Payment",
    paymentDescription: "You can purchase access to the guide:",
    paymentOneTime: "One-time payment of $29 USD",
    paymentStripe: "All payments processed securely through Stripe",
    refundTitle: "Refunds",
    refundDescription: "7-day money-back guarantee. If you are not satisfied, contact us within 7 days for a full refund.",
    contactTitle: "Contact",
    contactLabel: "Email",
    contactEmail: "hello@claudecodetips.com",
  },

  // Disclosure page (Commercial Disclosure - 特定商取引法)
  disclosure: {
    pageTitle: "Commercial Disclosure - Claude Code Tips",
    pageDescription: "Commercial disclosure as required by Japanese law",
    title: "Commercial Disclosure",
    sellerName: "Seller",
    sellerNameValue: "Claude Code Tips",
    address: "Address",
    addressValue: "Disclosed upon request",
    phone: "Phone",
    phoneValue: "Disclosed upon request",
    email: "Email",
    emailValue: "hello@claudecodetips.com",
    headOfOperations: "Head of Operations",
    headOfOperationsValue: "Disclosed upon request",
    additionalFees: "Additional Fees",
    additionalFeesValue: "None",
    refundPolicy: "Refund Policy",
    refundServiceIssues: "Service Issues",
    refundServiceIssuesValue:
      "If the service is not provided due to system issues, please contact hello@claudecodetips.com. We will review and provide a full refund.",
    refundCustomer: "Customer-Initiated",
    refundCustomerValue:
      "7-day money-back guarantee. If you are not satisfied with your purchase, contact us within 7 days for a full refund, no questions asked.",
    deliveryTime: "Delivery Time",
    deliveryTimeValue: "Instant access after payment",
    paymentMethods: "Payment Methods",
    paymentMethodsValue: "Credit cards (Visa, Mastercard, American Express, JCB)",
    paymentPeriod: "Payment Period",
    paymentPeriodValue: "Processed immediately upon credit card payment",
    price: "Price",
    priceValue: "$29 USD",
    priceTaxNote: "*Price includes all applicable taxes",
  },

  // Blog (UI strings only - post content in .svx files)
  blog: {
    pageTitle: "Blog - Claude Code Tips",
    pageDescription: "Tips, tutorials, and insights about Claude Code from the creator of the 51 Tips guide.",
    title: "Blog",
    subtitle: "Tips, tutorials, and insights about Claude Code",
    readMore: "Read more",
    publishedOn: "Published on",
    backToBlog: "Back to Blog",
    noPosts: "No posts yet. Check back soon!",
  },

  // Disclaimer for untranslated content
  disclaimer: {
    notTranslated: "This content is not yet available in your language. Showing English version.",
  },

  // FAQ page
  faq: {
    pageTitle: "FAQ - Claude Code Tips",
    pageDescription: "Frequently asked questions about the Claude Code Tips guide.",
    title: "Frequently Asked Questions",
    items: [
      {
        q: "What format is the guide?",
        a: "It's a web-based guide you can access from any device. No PDF downloads needed.",
      },
      {
        q: "Do I need Claude Code experience?",
        a: "Basic familiarity helps, but the guide covers everything from initial setup to advanced techniques.",
      },
      {
        q: "What if Claude Code updates?",
        a: "The guide focuses on workflows and patterns that remain stable. When major features change, the guide gets updated too.",
      },
    ],
  },
};
