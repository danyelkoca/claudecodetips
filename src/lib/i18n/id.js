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

  // Navigation
  nav: {
    guide: "Panduan",
    toggleMenu: "Toggle menu",
  },

  // Theme toggle
  theme: {
    light: "Mode terang",
    dark: "Mode gelap",
  },

  // Landing page
  landing: {
    hero: {
      eyebrow: "Dari pembuat Kumamap (389 ribu pengguna)",
      title: "Kuasai Claude Code dalam Hitungan Hari, Bukan Bulan",
      subtitle: "Alur kerja, shortcut, dan konfigurasi yang membedakan pemula dari pengguna mahir.",
      seeAll: "Lihat Semua {count} Tips",
    },
    social: {
      quote: "Claude Code memiliki kurva belajar yang curam. Saya menghabiskan ratusan jam untuk mencari tahu apa yang berhasil dan apa yang tidak. Panduan ini adalah semua yang saya inginkan sejak hari pertama.",
      author: "Danyel Koca",
      roleTitle: "Applied Research Engineer di Sakana AI",
      roleSubtitle: "Sebelumnya Senior Data Scientist di McKinsey & Company",
    },
    problem: {
      title: "Terdengar familiar?",
      subtitle: "Frustrasi-frustrasi ini mendorong saya menulis panduan ini",
      cards: [
        {
          title: "Claude mengabaikan CLAUDE.md",
          description: "Instruksi kustom Anda diabaikan atau dilupakan di tengah percakapan",
        },
        {
          title: "Over-engineering segalanya",
          description: "Anda minta fungsi sederhana, dapat 500 baris abstraksi",
        },
        {
          title: "Hasil berbeda setiap kali",
          description: "Prompt sama, kualitas output sangat berbeda",
        },
        {
          title: "Bilang selesai tapi rusak",
          description: "Dengan percaya diri memberikan kode yang sebenarnya tidak berfungsi",
        },
      ],
    },
    author: {
      sectionTitle: "Mengapa Mempercayai Panduan Ini?",
      quote: "Saya menemukan apa yang benar-benar berhasil dengan Claude Code melalui ratusan jam coba-coba. Panduan ini adalah semua yang saya pelajari.",
    },
    experience: {
      title: "Pengalaman di Balik Panduan Ini",
      subtitle: "Saya tidak hanya membaca tentang masalah ini, saya mengalaminya.",
      conclusion: "2,7 miliar token pengalaman, dipadatkan menjadi 51 tips praktis.",
      stats: {
        tokens: "2.772.274.103",
        cost: "$2.288,41",
        period: "28 Nov 2025 - 5 Jan 2026",
      },
    },
    caseStudy: {
      title: "Bukti Ini Berhasil",
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
      sections: "bagian",
    },
    sample: {
      title: "Featured Tips",
      subtitle: "Start with these popular tips",
      readFree: "Baca Gratis",
    },
  },

  // Guide
  guide: {
    title: "Panduan",
    overview: "Semua 51 Tips",
    overviewDescription: "Kuasai Claude Code dengan tips teruji dari 6 bulan penggunaan harian.",
    backToGuide: "Kembali ke Panduan",
    sections: "bagian",
    whatsIncluded: "Apa yang Termasuk",
    detailedTips: "tips detail",
    organizedSections: "bagian terorganisir",
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

  // Footer
  footer: {
    builtWith: "Dibangun dengan Claude Code",
    product: "Produk",
    company: "Perusahaan",
    legal: "Legal",
    faq: "FAQ",
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
      "Saya Danyel Koca, Applied Research Engineer di Sakana AI di Tokyo, mengerjakan solusi AI untuk layanan keuangan. Sebelumnya, saya menghabiskan 3 tahun sebagai Senior Data Scientist di McKinsey & Company, membangun solusi AI/ML untuk klien enterprise.",
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
      "Membangun solusi AI untuk layanan keuangan",
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
    dataCollectedDescription: "This is a free guide. We only collect data you voluntarily provide through our contact form.",
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
      "Claude Code Tips provides a free digital guide containing 51 tips for mastering Claude Code.",
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
    notTranslated: "Kami sedang mengerjakan terjemahan konten ini. Saat ini menampilkan versi bahasa Inggris.",
    translationInProgress: "Konten panduan saat ini dalam bahasa Inggris. Kami sedang aktif mengerjakan terjemahan.",
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
        q: "Seberapa mutakhir panduan ini?",
        a: "Panduan ini mencerminkan fitur dan praktik terbaik Claude Code terbaru per Januari 2026.",
      },
    ],
  },

  // Tip titles and summaries
  tips: {
    "1": { title: "Gunakan Terminal", summary: "Gunakan Claude Code di terminal - ini cara paling fleksibel untuk berinteraksi dengannya." },
    "2": { title: "Buat CLAUDE.md", summary: "Manual instruksi proyek Anda untuk Claude. File paling penting untuk penggunaan Claude Code yang efektif." },
    "3": { title: "Shortcut & Perintah", summary: "Shortcut keyboard dan perintah penting untuk penggunaan Claude Code yang efisien." },
    "4": { title: "Gunakan Git Secara Ekstensif", summary: "Git adalah jaring pengaman Anda saat Claude membuat perubahan besar. Commit sering, review diff, dan ketahui perintah recovery." },
    "5": { title: "Lindungi File Sensitif", summary: "Claude Code otomatis membaca file .env tanpa bertanya. Tambahkan aturan deny untuk melindungi rahasia." },
    "6": { title: "Jangan Auto-Approve Perintah Bash", summary: "Auto-approve perintah bash adalah hal paling berbahaya yang bisa Anda lakukan dengan Claude Code." },
    "7": { title: "Auto-Approve Aksi Aman", summary: "Percepat workflow dengan auto-approve aksi berisiko rendah seperti read dan search." },
    "8": { title: "Selalu Gunakan Plan Mode", summary: "Tekan Shift+Tab dua kali untuk masuk plan mode sebelum tugas kompleks. Claude berpikir sebelum coding." },
    "9": { title: "Jangan Terima Rencana Generik", summary: "Selalu pastikan rencana detail di level kode dan faktual." },
    "10": { title: "Validasi Terhadap CLAUDE.md", summary: "Minta Claude memvalidasi rencananya terhadap aturan CLAUDE.md. Claude melupakan instruksi seiring percakapan - paksa verifikasi eksplisit." },
    "11": { title: "Paksa Pemikiran End-to-End", summary: "Buat Claude melacak jalur lengkap dari aksi ke hasil." },
    "12": { title: "Ultrathink Selalu Aktif", summary: "Jangan biarkan Claude mengatakan apa yang terlintas pertama. Biarkan berpikir. SELALU." },
    "13": { title: "Langsung Saja", summary: "Eksplisit soal kuantitas - Claude cenderung memilih jalan mudah." },
    "14": { title: "Katakan Apa yang Harus Dilakukan, Bukan Tidak Dilakukan", summary: "Selalu berikan alternatif saat memberi tahu Claude apa yang tidak boleh dilakukan." },
    "15": { title: "Lebih-lebihkan Kepentingan", summary: "Claude mengkalibrasi usaha sesuai taruhan yang dirasakan. Taruhan tinggi = kerja menyeluruh." },
    "16": { title: "Perlakukan Claude sebagai Tool - Bukan Orang", summary: "Jangan khawatir soal sopan santun. Claude berperilaku lebih baik saat Anda langsung." },
    "17": { title: "Claude Unggul di Tugas Asisten - Arahkan untuk Pekerjaan Strategis", summary: "Ubah tugas strategis menjadi pekerjaan asisten dengan mengarahkan Claude untuk riset dulu." },
    "18": { title: "Satu Tugas = Satu Sesi", summary: "Begitu tugas selesai, tutup. Gunakan /clear untuk menghapus konteks dan mulai fresh." },
    "19": { title: "Kualitas Menurun di Sesi Panjang", summary: "Context window terisi. Claude jadi kurang cerdas. Ketahui kapan compact atau clear." },
    "20": { title: "Gunakan /resume untuk Melanjutkan Sesi", summary: "Claude crash? Terminal tertutup? Gunakan /resume untuk melanjutkan dari tempat berhenti." },
    "21": { title: "Jangan Percaya 'Semua Selesai'", summary: "Claude sering melewatkan edge case atau diam-diam melewati langkah. Selalu verifikasi." },
    "22": { title: "Gunakan Gambar/Screenshot", summary: "Paste screenshot langsung dengan Ctrl+V untuk bug visual. Satu gambar bernilai ribuan token." },
    "23": { title: "Salin Pesan Error Persis", summary: "Jangan parafrase. Stack trace lengkap dengan nomor baris." },
    "24": { title: "Jangan Harap Sempurna Pertama Kali", summary: "Biarkan 1 agent coding, gunakan agent lain untuk mengecek kode." },
    "25": { title: "Multiple Agent untuk Pekerjaan Besar", summary: "Luncurkan beberapa agent dengan prompt sama. Untuk tugas besar jarang 1 agent berhasil." },
    "26": { title: "Pecah Masalah Kompleks Jadi Langkah", summary: "Lebih baik 1 sesi per sub-tugas daripada satu sesi masif." },
    "27": { title: "Git Worktrees", summary: "Beberapa direktori kerja dari repo yang sama. Jalankan Claude di masing-masing." },
    "28": { title: "Subagent - Gunakan dengan Hati-hati", summary: "Ringkasan subagent kehilangan detail. Untuk kode kritis, biarkan agent utama membaca file langsung." },
    "29": { title: "CLAUDE.md Hierarkis", summary: "CLAUDE.md di root proyek + subdirektori + global. Claude memprioritaskan yang paling spesifik." },
    "30": { title: "Custom Slash Commands", summary: "Buat workflow yang dapat digunakan ulang di folder .claude/commands/." },
    "31": { title: "Custom Agents", summary: "Buat agent khusus dengan context window sendiri, system prompt, dan batasan tool." },
    "32": { title: "Claude Mengarang URL", summary: "Menghalusinasi URL yang tidak ada. Selalu verifikasi sebelum mempercayai link eksternal." },
    "33": { title: "Claude Over-Engineer", summary: "Minta fungsi sederhana, dapat abstract class dengan factory pattern." },
    "34": { title: "Claude Membuat Duplikat", summary: "Claude tidak mencari codebase Anda. Dia hanya menulis kode baru." },
    "35": { title: "Claude Aditif, Tidak Subtraktif", summary: "Claude hanya menambah kode. Tidak pernah menghapus. Anda harus memaksa penghapusan secara eksplisit." },
    "36": { title: "Claude adalah YES MAN", summary: "Claude setuju dengan semua yang Anda katakan. Suruh dia menantang asumsi Anda." },
    "37": { title: "Claude Berasumsi Alih-alih Bertanya", summary: "Requirement ambigu? Claude memilih interpretasi dan menjalankannya." },
    "38": { title: "Claude Membaca File Sebagian", summary: "Claude membaca chunk pertama dan mulai bekerja. Fungsi kritis di baris 400? Terlewat." },
    "39": { title: "Claude Mengubah Test Alih-alih Memperbaiki Kode", summary: "Saat kode salah, Claude mengubah assertion test untuk cocok dengan kode buruk." },
    "40": { title: "Hooks", summary: "Perintah shell yang berjalan pada event tertentu seperti edit, penggunaan tool, atau mulai sesi." },
    "41": { title: "MCP Servers", summary: "Hubungkan tool eksternal - database, otomasi browser, pencarian dokumentasi." },
    "42": { title: "Skills", summary: "Perilaku yang dipicu otomatis dan dimuat saat relevan." },
    "43": { title: "GitHub Actions", summary: "Jalankan /install-github-app untuk menyiapkan Claude untuk repo Anda." },
    "44": { title: "Headless Mode", summary: "Jalankan Claude tanpa sesi interaktif. Untuk otomasi dan skrip." },
    "45": { title: "Jalankan Pemeriksaan Kualitas Codebase Secara Berkala", summary: "Setiap query = 1 sesi. Periksa teks hardcode, konsistensi desain, dll." },
    "46": { title: "Manfaatkan Claude Code untuk POC", summary: "Sempurna untuk prototyping cepat. Untuk POC, biarkan Claude bebas." },
    "47": { title: "Claude Hebat di Boilerplate", summary: "Operasi CRUD, form, file config, pola berulang. Biarkan Claude bekerja." },
    "48": { title: "Gunakan Claude untuk Belajar", summary: "Jangan biarkan Claude hanya menulis kode. Buat dia menjelaskan." },
    "49": { title: "Claude untuk Pesan Commit", summary: "Biarkan Claude menulis commit dari diff Anda. Format konsisten, menangkap 'mengapa'." },
    "50": { title: "Jangan Kejar Setiap Fitur Baru", summary: "Claude Code mendapat fitur baru setiap minggu. Fokus pada apa yang berhasil." },
    "51": { title: "CLAUDE.md Teruji", summary: "Contoh CLAUDE.md dunia nyata yang disaring dari 6 bulan pelajaran, kegagalan, dan perbaikan." },
  },
};
