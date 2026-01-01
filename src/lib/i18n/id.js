export default {
  // Meta
  lang: "id",
  langName: "Bahasa Indonesia",
  siteBrand: "Claude Code Tips",

  // Common strings
  common: {
    tipPrefix: "Tips",
    tip: "tips",
    tips: "tips",
    previous: "Sebelumnya",
    next: "Selanjutnya",
    loading: "Memuat...",
    backArrow: "\u2190",
    forwardArrow: "\u2192",
    goToSlide: "Ke slide",
  },

  // Error page
  error: {
    titleSuffix: "Error",
    notFoundTitle: "Halaman Tidak Ditemukan",
    notFoundDescription: "Halaman yang Anda cari tidak ada.",
    genericTitle: "Terjadi Kesalahan",
    genericDescription: "Terjadi kesalahan yang tidak terduga.",
    goHome: "Kembali ke Beranda",
    // Server error keys (backend sends key, UI translates)
    langNotFound: "Bahasa tidak ditemukan",
    blogNotFound: "Postingan blog tidak ditemukan",
    sectionNotFound: "Bagian tidak ditemukan",
    tipNotInSection: "Tips tidak ditemukan di bagian ini",
    tipNotFound: "Tips tidak ditemukan",
  },

  // Checkout
  checkout: {
    productName: "51 Tips untuk Menguasai Claude Code",
    productDescription: "Panduan lengkap dengan semua 51 tips - akses seumur hidup",
  },

  // Navigation
  nav: {
    guide: "Panduan",
    toggleMenu: "Toggle menu",
  },

  // Landing page
  landing: {
    hero: {
      eyebrow: "Dari pembuat Kumamap (389 ribu pengguna)",
      title: "Kuasai Claude Code dalam Hitungan Hari, Bukan Bulan",
      subtitle: "Alur kerja, shortcut, dan konfigurasi yang membedakan pemula dari pengguna mahir.",
      cta: "Dapatkan Panduan - $29",
      guarantee: "Garansi uang kembali 7 hari",
    },
    social: {
      quote: "Claude Code memiliki kurva belajar yang curam. Saya menghabiskan ratusan jam untuk mencari tahu apa yang berhasil dan apa yang tidak. Panduan ini adalah semua yang saya inginkan sejak hari pertama.",
      author: "Danyel Koca",
      role: "AI Engineer di Sakana AI | Sebelumnya Senior Data Scientist di McKinsey & Company",
    },
    caseStudy: {
      title: "Dibangun dengan Claude Code",
      description: "Saya membangun Kumamap — pelacak beruang #1 Jepang — sepenuhnya dengan Claude Code. Panduan ini mengajarkan pola-pola persis yang saya gunakan.",
      cta: "Lihat produk langsung",
      stats: {
        views: { value: "1,3 juta", label: "tampilan halaman" },
        users: { value: "389.000", label: "pengguna" },
        time: { value: "3 bulan", label: "untuk membangun" },
      },
    },
    curriculum: {
      title: "Apa yang Ada di Dalamnya",
      subtitle: "51 tips dalam 13 bagian",
      viewAll: "Lihat semua {count} tips",
    },
    sample: {
      title: "Lihat Kualitasnya",
      subtitle: "Baca tips ini gratis. Jika membantu, bayangkan 49 lainnya.",
      readFull: "Baca tips lengkap gratis",
    },
    pricing: {
      title: "Pembelian Sekali",
      price: "$29",
      subtitle: "Akses seumur hidup ke semua 51 tips",
      features: ["51 tips detail dengan contoh kode", "Konfigurasi CLAUDE.md siap pakai", "13 bagian terorganisir", "Update di masa depan termasuk"],
      cta: "Dapatkan Akses Instan",
      guarantee: "Garansi uang kembali 7 hari. Tanpa pertanyaan.",
    },
    checkoutCanceled: "Pembayaran dibatalkan. Siap kapan pun Anda mau.",
  },

  // Pricing page
  pricingPage: {
    pageTitle: "Pembayaran - Claude Code Tips",
    pageDescription: "Akses instan ke semua 51 tips seharga $29",
    emailLabel: "Alamat Email",
    emailPlaceholder: "anda@contoh.com",
    cta: "Lanjut ke Pembayaran",
    processing: "Memproses...",
    errors: {
      emailRequired: "Silakan masukkan email Anda.",
      invalidEmail: "Silakan masukkan alamat email yang valid.",
      checkoutFailed: "Terjadi kesalahan. Silakan coba lagi.",
      rateLimitExceeded: "Terlalu banyak percobaan. Coba lagi dalam satu jam.",
    },
  },

  // Guide
  guide: {
    title: "Panduan",
    overview: "Semua 51 Tips",
    overviewDescription: "Kuasai Claude Code dengan tips teruji dari 6 bulan penggunaan harian.",
    backToGuide: "Kembali ke Panduan",
    free: "Gratis",
    freePreview: "Preview Gratis",
    locked: "Buka untuk membaca",
    lockedTitle: "Tips ini terkunci",
    lockedDescription: "Dapatkan akses penuh ke semua 51 tips dengan pembelian sekali.",
    unlockCta: "Buka Panduan Lengkap - $29",
    unlockAll: "Buka Semua 51 Tips",
    sections: "bagian",
    freeLabel: "preview gratis",
    whatsIncluded: "Apa yang Termasuk",
    detailedTips: "tips detail",
    organizedSections: "bagian terorganisir",
    freePreviews: "preview gratis",
    startReading: "Mulai Membaca",
    jumpTo: "Lompat ke Bagian",
  },

  // Section data (unified: title, short description, long description)
  sections: {
    setup: {
      title: "Setup",
      short: "Terminal, CLAUDE.md, shortcut dan perintah",
      long:
        "Jalankan Claude Code secara optimal dengan setup terminal yang tepat, konfigurasi CLAUDE.md, dan shortcut keyboard esensial yang akan menghemat waktu berjam-jam.",
    },
    safety: {
      title: "Keamanan",
      short: "Git, permission, melindungi file sensitif",
      long:
        "Lindungi codebase dan rahasia Anda dengan praktik git yang tepat, permission file, dan aturan auto-approve cerdas yang menyeimbangkan kecepatan dan keamanan.",
    },
    planning: {
      title: "Perencanaan",
      short: "Mode plan, rencana detail, pemikiran end-to-end",
      long:
        "Kuasai mode plan untuk memikirkan tugas kompleks sebelum coding. Pelajari cara membuat rencana detail dan actionable yang dapat Claude eksekusi dengan sempurna.",
    },
    prompting: {
      title: "Prompting",
      short: "Ultrathink, langsung, melebih-lebihkan kepentingan",
      long:
        "Buka potensi penuh Claude dengan teknik prompting lanjutan. Dari ultrathink hingga panduan strategis, pelajari cara mendapatkan hasil yang konsisten lebih baik.",
    },
    session: {
      title: "Sesi",
      short: "Manajemen konteks, resume, degradasi kualitas",
      long:
        "Kelola konteks secara efektif dalam sesi coding panjang. Ketahui kapan harus compact, clear, atau mulai fresh untuk menjaga performa puncak Claude.",
    },
    input: {
      title: "Input",
      short: "Gambar, screenshot, pesan error",
      long:
        "Manfaatkan kemampuan multimodal Claude dengan gambar, screenshot, dan pesan error yang diformat dengan benar untuk debugging lebih cepat.",
    },
    "multi-agent": {
      title: "Multi-Agent",
      short: "Agent paralel, worktree, subagent",
      long:
        "Tingkatkan produktivitas dengan beberapa instance Claude. Pelajari git worktree, agent paralel, dan kapan menggunakan subagent secara efektif.",
    },
    customization: {
      title: "Kustomisasi",
      short: "Konfigurasi hierarkis, perintah, agent kustom",
      long: "Sesuaikan Claude Code dengan alur kerja Anda menggunakan file CLAUDE.md hierarkis, perintah slash kustom, dan agent khusus.",
    },
    pitfalls: {
      title: "Jebakan",
      short: "Perilaku Claude umum yang perlu diwaspadai",
      long:
        "Hindari jebakan umum yang menghambat pengguna Claude Code. Dari over-engineering hingga kegagalan diam-diam, pelajari apa yang harus diwaspadai.",
    },
    advanced: {
      title: "Lanjutan",
      short: "Hook, server MCP, skill, mode headless",
      long: "Buka fitur power-user seperti hook, server MCP, skill, dan mode headless untuk otomatisasi dan integrasi CI/CD.",
    },
    "use-cases": {
      title: "Kasus Penggunaan",
      short: "Pemeriksaan kualitas, POC, pembelajaran, commit",
      long:
        "Aplikasi dunia nyata dari pemeriksaan kualitas codebase hingga prototyping cepat. Lihat cara menerapkan Claude Code secara efektif dalam pekerjaan sehari-hari.",
    },
    closing: {
      title: "Penutup",
      short: "Kebijaksanaan akhir tentang menemukan alur kerja Anda",
      long:
        "Kebijaksanaan akhir tentang menemukan alur kerja personal Anda. Tidak semua fitur untuk semua orang - fokus pada apa yang berhasil untuk Anda.",
    },
    bonus: {
      title: "Bonus",
      short: "CLAUDE.md teruji dari 6 bulan penggunaan harian",
      long: "File CLAUDE.md lengkap dan teruji yang disaring dari 6 bulan penggunaan harian. Salin, adaptasi, dan jadikan milik Anda.",
    },
  },

  // Paywall
  paywall: {
    title: "Buka Panduan Lengkap",
    description: "Dapatkan akses ke semua 51 tips hanya $29",
    cta: "Dapatkan Akses Penuh",
    alreadyPurchased: "Sudah membeli?",
    restoreAccess: "Pulihkan akses",
  },

  // Success page
  success: {
    title: "Terima Kasih!",
    description: "Pembelian Anda berhasil. Anda sekarang memiliki akses penuh ke semua 51 tips.",
    cta: "Mulai Membaca",
  },

  // Restore page
  restore: {
    pageTitle: "Pulihkan Akses - Claude Code Tips",
    title: "Pulihkan Akses Anda",
    description: "Masukkan email yang digunakan saat pembelian untuk memulihkan akses di perangkat ini.",
    emailLabel: "Email pembelian",
    emailPlaceholder: "anda@contoh.com",
    cta: "Pulihkan Akses",
    successMessage: "Akses berhasil dipulihkan!",
    redirecting: "Mengarahkan ke panduan...",
    noAccount: "Belum membeli?",
    buyNow: "Beli Sekarang",
    errors: {
      restoreFailed: "Gagal memulihkan akses. Coba lagi.",
      emailRequired: "Email diperlukan.",
      invalidEmail: "Silakan masukkan alamat email yang valid.",
      rateLimitExceeded: "Terlalu banyak percobaan. Coba lagi dalam satu jam.",
    },
  },

  // Footer
  footer: {
    builtWith: "Dibangun dengan Claude Code",
    guide: "Panduan",
    company: "Perusahaan",
    legal: "Legal",
    allTips: "Semua 51 Tips",
    faq: "FAQ",
    restoreAccess: "Pulihkan akses",
    pricing: "Harga",
    blog: "Blog",
    about: "Tentang",
    contact: "Hubungi Kami",
    privacy: "Privasi",
    terms: "Ketentuan",
    disclosure: "Pengungkapan",
  },

  // Contact page
  contact: {
    pageTitle: "Hubungi Kami - Claude Code Tips",
    pageDescription: "Hubungi kami untuk pertanyaan atau feedback",
    title: "Hubungi Kami",
    description: "Punya pertanyaan atau feedback? Saya senang mendengar dari Anda.",
    nameLabel: "Nama",
    namePlaceholder: "Nama Anda",
    emailLabel: "Email",
    emailPlaceholder: "anda@contoh.com",
    messageLabel: "Pesan",
    messagePlaceholder: "Pesan Anda...",
    cta: "Kirim Pesan",
    sent: "Terkirim",
    successMessage: "Pesan berhasil dikirim! Saya akan segera membalas.",
    errors: {
      nameRequired: "Silakan masukkan nama Anda.",
      emailRequired: "Silakan masukkan email Anda.",
      invalidEmail: "Silakan masukkan alamat email yang valid.",
      messageRequired: "Silakan masukkan pesan (minimal 10 karakter).",
      rateLimitExceeded: "Terlalu banyak percobaan. Coba lagi dalam satu jam.",
      submitFailed: "Terjadi kesalahan. Silakan coba lagi.",
    },
  },

  // About page
  about: {
    pageTitle: "Tentang - Claude Code Tips",
    pageDescription: "Pelajari tentang Danyel Koca, pembuat Claude Code Tips, dan mengapa panduan ini ada.",
    heroTitle: "Dibangun oleh Praktisi",
    heroSubtitle: "Panduan ini dibuat oleh seseorang yang menggunakan Claude Code setiap hari untuk membangun produk nyata.",
    storyTitle: "Ceritanya",
    storyPara1:
      "Saya Danyel Koca, Applied Research Engineer di Sakana AI di Tokyo. Sebelumnya, saya menghabiskan 3 tahun sebagai Senior Data Scientist di McKinsey & Company, membangun solusi AI/ML untuk klien enterprise.",
    storyPara2:
      "Saya telah menggunakan Claude Code setiap hari sejak diluncurkan. Apa yang dimulai sebagai rasa ingin tahu berubah menjadi obsesi - saya menemukan pola, shortcut, dan konfigurasi baru yang secara dramatis meningkatkan alur kerja saya.",
    storyPara3:
      "Setelah 6 bulan penggunaan harian, saya telah mengumpulkan puluhan tips yang saya harap seseorang memberitahu saya di hari pertama. Itulah mengapa saya membuat panduan ini.",
    whyTitle: "Mengapa Panduan Ini Ada",
    whyPara1:
      "Kebanyakan tutorial Claude Code mencakup dasar-dasar: cara menginstal, cara menjalankan perintah. Tapi mereka tidak mencakup pola nyata yang membuat Anda produktif.",
    whyPara2:
      "Panduan ini berbeda. Setiap tips berasal dari pengalaman nyata membangun sistem produksi. Tanpa teori - hanya apa yang benar-benar berhasil.",
    credentialsTitle: "Kredensial",
    credentialsList: [
      "Applied Research Engineer di Sakana AI",
      "Mantan Senior Data Scientist di McKinsey & Company",
      "Lulusan Universitas Kyoto (IPK 3.76/4)",
      "Peneliti yang dipublikasikan di IEEE",
      "Trilingual: Inggris, Jepang (JLPT N1), Turki",
    ],
    contactTitle: "Hubungi Kami",
    contactPara: "Punya pertanyaan atau feedback? Saya senang mendengar dari Anda.",
    contactLinks: {
      linkedin: "LinkedIn",
      github: "GitHub",
      website: "Website",
    },
  },

  // Privacy page
  privacy: {
    pageTitle: "Kebijakan Privasi - Claude Code Tips",
    pageDescription: "Pelajari bagaimana Claude Code Tips menangani data Anda.",
    title: "Kebijakan Privasi",
    dataCollectedTitle: "Data yang Kami Kumpulkan",
    dataCollectedDescription: "Ketika Anda membeli panduan:",
    dataEmail: "Email (untuk pengiriman dan akses)",
    paymentTitle: "Pemrosesan Pembayaran",
    paymentDescription: "Semua pembayaran diproses dengan aman oleh Stripe. Kami tidak menyimpan informasi pembayaran Anda.",
    contactTitle: "Kontak",
    contactLabel: "Email",
    contactEmail: "hello@claudecodetips.com",
  },

  // Terms page
  terms: {
    pageTitle: "Ketentuan Layanan - Claude Code Tips",
    pageDescription: "Ketentuan layanan untuk Claude Code Tips.",
    title: "Ketentuan Layanan",
    serviceTitle: "Layanan",
    serviceDescription:
      "Claude Code Tips menyediakan panduan digital dengan 51 tips untuk menguasai Claude Code. Setelah pembelian, Anda menerima akses seumur hidup.",
    paymentTitle: "Pembayaran",
    paymentDescription: "Anda dapat membeli akses ke panduan:",
    paymentOneTime: "Pembayaran sekali $29 USD",
    paymentStripe: "Semua pembayaran diproses dengan aman melalui Stripe",
    refundTitle: "Pengembalian Dana",
    refundDescription: "Garansi uang kembali 7 hari. Jika tidak puas, hubungi kami dalam 7 hari untuk pengembalian dana penuh.",
    contactTitle: "Kontak",
    contactLabel: "Email",
    contactEmail: "hello@claudecodetips.com",
  },

  // Disclosure page (Commercial Disclosure)
  disclosure: {
    pageTitle: "Pengungkapan Komersial - Claude Code Tips",
    pageDescription: "Pengungkapan komersial untuk Claude Code Tips.",
    title: "Pengungkapan Komersial",
    sellerName: "Penjual",
    sellerNameValue: "Claude Code Tips",
    address: "Alamat",
    addressValue: "Diungkapkan atas permintaan",
    phone: "Telepon",
    phoneValue: "Diungkapkan atas permintaan",
    email: "Email",
    emailValue: "hello@claudecodetips.com",
    headOfOperations: "Kepala Operasi",
    headOfOperationsValue: "Diungkapkan atas permintaan",
    additionalFees: "Biaya Tambahan",
    additionalFeesValue: "Tidak ada",
    refundPolicy: "Kebijakan Pengembalian Dana",
    refundServiceIssues: "Masalah Layanan",
    refundServiceIssuesValue:
      "Jika layanan tidak diberikan karena masalah sistem, silakan hubungi hello@claudecodetips.com. Kami akan meninjau dan memberikan pengembalian dana penuh.",
    refundCustomer: "Pembatalan oleh Pelanggan",
    refundCustomerValue:
      "Garansi uang kembali 7 hari. Jika Anda tidak puas dengan pembelian, hubungi kami dalam 7 hari untuk pengembalian dana penuh, tanpa pertanyaan.",
    deliveryTime: "Waktu Pengiriman",
    deliveryTimeValue: "Akses instan setelah pembayaran",
    paymentMethods: "Metode Pembayaran",
    paymentMethodsValue: "Kartu kredit (Visa, Mastercard, American Express, JCB)",
    paymentPeriod: "Periode Pembayaran",
    paymentPeriodValue: "Diproses segera setelah pembayaran kartu kredit",
    price: "Harga",
    priceValue: "$29 USD",
    priceTaxNote: "*Harga sudah termasuk semua pajak yang berlaku",
  },

  // Blog (UI strings only - post content in .svx files)
  blog: {
    pageTitle: "Blog - Claude Code Tips",
    pageDescription: "Tips, tutorial, dan wawasan tentang Claude Code dari pembuat panduan 51 Tips.",
    title: "Blog",
    subtitle: "Tips, tutorial, dan wawasan tentang Claude Code",
    readMore: "Baca selengkapnya",
    publishedOn: "Diterbitkan pada",
    backToBlog: "Kembali ke Blog",
    noPosts: "Belum ada postingan. Cek lagi nanti!",
  },

  // Disclaimer for untranslated content
  disclaimer: {
    notTranslated: "Konten ini belum tersedia dalam bahasa Anda. Menampilkan versi bahasa Inggris.",
  },

  // FAQ page
  faq: {
    pageTitle: "FAQ - Claude Code Tips",
    pageDescription: "Pertanyaan yang sering diajukan tentang panduan Claude Code Tips.",
    title: "Pertanyaan yang Sering Diajukan",
    items: [
      { q: "Apa format panduannya?", a: "Ini adalah panduan berbasis web yang bisa Anda akses dari perangkat apa pun. Tidak perlu download PDF." },
      {
        q: "Apakah saya perlu pengalaman Claude Code?",
        a: "Familiar dasar membantu, tapi panduan ini mencakup semuanya dari setup awal hingga teknik lanjutan.",
      },
      {
        q: "Bagaimana jika Claude Code diperbarui?",
        a: "Panduan ini fokus pada alur kerja dan pola yang tetap stabil. Ketika fitur utama berubah, panduan juga diperbarui.",
      },
    ],
  },
};
