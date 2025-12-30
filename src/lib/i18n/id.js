export default {
	// Meta
	lang: 'id',
	langName: 'Bahasa Indonesia',
	siteBrand: 'Claude Code Tips',

	// Common strings
	common: {
		tipPrefix: 'Tips',
		tip: 'tips',
		tips: 'tips',
		previous: 'Sebelumnya',
		next: 'Selanjutnya',
		loading: 'Memuat...',
		backArrow: '\u2190',
		forwardArrow: '\u2192'
	},

	// Error page
	error: {
		titleSuffix: 'Error',
		notFoundTitle: 'Halaman Tidak Ditemukan',
		notFoundDescription: 'Halaman yang Anda cari tidak ada.',
		genericTitle: 'Terjadi Kesalahan',
		genericDescription: 'Terjadi kesalahan yang tidak terduga.',
		goHome: 'Kembali ke Beranda',
		// Server error keys (backend sends key, UI translates)
		langNotFound: 'Bahasa tidak ditemukan',
		blogNotFound: 'Postingan blog tidak ditemukan',
		sectionNotFound: 'Bagian tidak ditemukan',
		tipNotInSection: 'Tips tidak ditemukan di bagian ini',
		tipNotFound: 'Tips tidak ditemukan',
		emailRequired: 'Email diperlukan',
		checkoutFailed: 'Gagal membuat sesi checkout'
	},

	// Checkout
	checkout: {
		productName: '50 Tips untuk Menguasai Claude Code',
		productDescription: 'Panduan lengkap dengan semua 50 tips - akses seumur hidup'
	},

	// Navigation
	nav: {
		home: 'Beranda',
		guide: 'Panduan',
		pricing: 'Harga',
		toggleMenu: 'Toggle menu'
	},

	// Landing page
	landing: {
		hero: {
			eyebrow: 'Dari 6 bulan penggunaan harian',
			title: 'Kuasai Claude Code dalam Hitungan Hari, Bukan Bulan',
			subtitle:
				'Alur kerja, shortcut, dan konfigurasi yang membedakan pemula dari pengguna mahir.',
			cta: 'Dapatkan Panduan - $29',
			guarantee: 'Garansi uang kembali 14 hari'
		},
		social: {
			quote: 'Setelah lebih dari 500 jam membangun produk nyata dengan Claude Code, saya mendokumentasikan semua pola yang benar-benar berhasil.',
			author: 'Danyel Koca',
			role: 'Applied Research Engineer di Sakana AI | Mantan Senior Data Scientist di McKinsey',
			benefits: ['Lewati berbulan-bulan trial and error', 'Konfigurasi CLAUDE.md siap pakai', 'Pola yang bekerja dengan proyek apa pun']
		},
		curriculum: {
			title: 'Apa yang Ada di Dalamnya',
			subtitle: '50 tips dalam 12 bagian + konten bonus'
		},
		sample: {
			title: 'Lihat Kualitasnya',
			subtitle: 'Baca tips ini gratis. Jika membantu, bayangkan 49 lainnya.',
			readFull: 'Baca tips lengkap gratis'
		},
		pricing: {
			title: 'Pembelian Sekali',
			price: '$29',
			subtitle: 'Akses seumur hidup ke semua 50 tips',
			features: [
				'50 tips detail dengan contoh kode',
				'Konfigurasi CLAUDE.md siap pakai',
				'12 bagian + konten bonus',
				'Update di masa depan termasuk'
			],
			cta: 'Dapatkan Akses Instan',
			anchor: 'Lewati berbulan-bulan trial and error.',
			guarantee: 'Garansi uang kembali 14 hari. Tanpa pertanyaan.'
		}
	},

	// Guide
	guide: {
		title: 'Panduan',
		overview: 'Semua 50 Tips',
		overviewDescription:
			'Kuasai Claude Code dengan tips teruji dari 6 bulan penggunaan harian.',
		backToGuide: 'Kembali ke Panduan',
		free: 'Gratis',
		freePreview: 'Preview Gratis',
		locked: 'Buka untuk membaca',
		lockedTitle: 'Tips ini terkunci',
		lockedDescription: 'Dapatkan akses penuh ke semua 50 tips dengan pembelian sekali.',
		unlockCta: 'Buka Panduan Lengkap - $29',
		unlockAll: 'Buka Semua 50 Tips'
	},

	// Section data (unified: title, short description, long description)
	sections: {
		title: 'Semua Bagian',
		description:
			'Jelajahi 51 tips yang diorganisir dalam 13 bagian. Setiap bagian fokus pada aspek spesifik penguasaan Claude Code.',
		tipsInSection: 'di bagian ini',
		setup: {
			title: 'Setup',
			short: 'Terminal, CLAUDE.md, shortcut dan perintah',
			long: 'Jalankan Claude Code secara optimal dengan setup terminal yang tepat, konfigurasi CLAUDE.md, dan shortcut keyboard esensial yang akan menghemat waktu berjam-jam.'
		},
		safety: {
			title: 'Keamanan',
			short: 'Git, permission, melindungi file sensitif',
			long: 'Lindungi codebase dan rahasia Anda dengan praktik git yang tepat, permission file, dan aturan auto-approve cerdas yang menyeimbangkan kecepatan dan keamanan.'
		},
		planning: {
			title: 'Perencanaan',
			short: 'Mode plan, rencana detail, pemikiran end-to-end',
			long: 'Kuasai mode plan untuk memikirkan tugas kompleks sebelum coding. Pelajari cara membuat rencana detail dan actionable yang dapat Claude eksekusi dengan sempurna.'
		},
		prompting: {
			title: 'Prompting',
			short: 'Ultrathink, langsung, melebih-lebihkan kepentingan',
			long: 'Buka potensi penuh Claude dengan teknik prompting lanjutan. Dari ultrathink hingga panduan strategis, pelajari cara mendapatkan hasil yang konsisten lebih baik.'
		},
		session: {
			title: 'Sesi',
			short: 'Manajemen konteks, resume, degradasi kualitas',
			long: 'Kelola konteks secara efektif dalam sesi coding panjang. Ketahui kapan harus compact, clear, atau mulai fresh untuk menjaga performa puncak Claude.'
		},
		input: {
			title: 'Input',
			short: 'Gambar, screenshot, pesan error',
			long: 'Manfaatkan kemampuan multimodal Claude dengan gambar, screenshot, dan pesan error yang diformat dengan benar untuk debugging lebih cepat.'
		},
		'multi-agent': {
			title: 'Multi-Agent',
			short: 'Agent paralel, worktree, subagent',
			long: 'Tingkatkan produktivitas dengan beberapa instance Claude. Pelajari git worktree, agent paralel, dan kapan menggunakan subagent secara efektif.'
		},
		customization: {
			title: 'Kustomisasi',
			short: 'Konfigurasi hierarkis, perintah, agent kustom',
			long: 'Sesuaikan Claude Code dengan alur kerja Anda menggunakan file CLAUDE.md hierarkis, perintah slash kustom, dan agent khusus.'
		},
		pitfalls: {
			title: 'Jebakan',
			short: 'Perilaku Claude umum yang perlu diwaspadai',
			long: 'Hindari jebakan umum yang menghambat pengguna Claude Code. Dari over-engineering hingga kegagalan diam-diam, pelajari apa yang harus diwaspadai.'
		},
		advanced: {
			title: 'Lanjutan',
			short: 'Hook, server MCP, skill, mode headless',
			long: 'Buka fitur power-user seperti hook, server MCP, skill, dan mode headless untuk otomatisasi dan integrasi CI/CD.'
		},
		'use-cases': {
			title: 'Kasus Penggunaan',
			short: 'Pemeriksaan kualitas, POC, pembelajaran, commit',
			long: 'Aplikasi dunia nyata dari pemeriksaan kualitas codebase hingga prototyping cepat. Lihat cara menerapkan Claude Code secara efektif dalam pekerjaan sehari-hari.'
		},
		closing: {
			title: 'Penutup',
			short: 'Kebijaksanaan akhir tentang menemukan alur kerja Anda',
			long: 'Kebijaksanaan akhir tentang menemukan alur kerja personal Anda. Tidak semua fitur untuk semua orang - fokus pada apa yang berhasil untuk Anda.'
		},
		bonus: {
			title: 'Bonus',
			short: 'CLAUDE.md teruji dari 6 bulan penggunaan harian',
			long: 'File CLAUDE.md lengkap dan teruji yang disaring dari 6 bulan penggunaan harian. Salin, adaptasi, dan jadikan milik Anda.'
		}
	},

	// Paywall
	paywall: {
		title: 'Buka Panduan Lengkap',
		description: 'Dapatkan akses ke semua 50 tips hanya $29',
		cta: 'Dapatkan Akses Penuh'
	},

	// Success page
	success: {
		title: 'Terima Kasih!',
		description: 'Pembelian Anda berhasil. Anda sekarang memiliki akses penuh ke semua 50 tips.',
		cta: 'Mulai Membaca'
	},

	// Footer
	footer: {
		builtWith: 'Dibangun dengan Claude Code',
		guide: 'Panduan',
		company: 'Perusahaan',
		legal: 'Legal',
		allTips: 'Semua 50 Tips',
		faq: 'FAQ',
		blog: 'Blog',
		about: 'Tentang',
		privacy: 'Privasi',
		terms: 'Ketentuan',
		disclosure: 'Pengungkapan'
	},

	// About page
	about: {
		pageTitle: 'Tentang - Claude Code Tips',
		pageDescription:
			'Pelajari tentang Danyel Koca, pembuat Claude Code Tips, dan mengapa panduan ini ada.',
		heroTitle: 'Dibangun oleh Praktisi',
		heroSubtitle:
			'Panduan ini dibuat oleh seseorang yang menggunakan Claude Code setiap hari untuk membangun produk nyata.',
		storyTitle: 'Ceritanya',
		storyPara1:
			'Saya Danyel Koca, Applied Research Engineer di Sakana AI di Tokyo. Sebelumnya, saya menghabiskan 3 tahun sebagai Senior Data Scientist di McKinsey & Company, membangun solusi AI/ML untuk klien enterprise.',
		storyPara2:
			'Saya telah menggunakan Claude Code setiap hari sejak diluncurkan. Apa yang dimulai sebagai rasa ingin tahu berubah menjadi obsesi - saya menemukan pola, shortcut, dan konfigurasi baru yang secara dramatis meningkatkan alur kerja saya.',
		storyPara3:
			'Setelah 6 bulan penggunaan harian, saya telah mengumpulkan puluhan tips yang saya harap seseorang memberitahu saya di hari pertama. Itulah mengapa saya membuat panduan ini.',
		whyTitle: 'Mengapa Panduan Ini Ada',
		whyPara1:
			'Kebanyakan tutorial Claude Code mencakup dasar-dasar: cara menginstal, cara menjalankan perintah. Tapi mereka tidak mencakup pola nyata yang membuat Anda produktif.',
		whyPara2:
			'Panduan ini berbeda. Setiap tips berasal dari pengalaman nyata membangun sistem produksi. Tanpa teori - hanya apa yang benar-benar berhasil.',
		credentialsTitle: 'Kredensial',
		credentialsList: [
			'Applied Research Engineer di Sakana AI',
			'Mantan Senior Data Scientist di McKinsey & Company',
			'Lulusan Universitas Kyoto (IPK 3.76/4)',
			'Peneliti yang dipublikasikan di IEEE',
			'Trilingual: Inggris, Jepang (JLPT N1), Turki'
		],
		contactTitle: 'Hubungi Kami',
		contactPara: 'Punya pertanyaan atau feedback? Saya senang mendengar dari Anda.',
		contactLinks: {
			linkedin: 'LinkedIn',
			github: 'GitHub',
			website: 'Website'
		}
	},

	// Privacy page
	privacy: {
		pageTitle: 'Kebijakan Privasi - Claude Code Tips',
		pageDescription: 'Pelajari bagaimana Claude Code Tips menangani data Anda dan melindungi privasi Anda.',
		title: 'Kebijakan Privasi',
		lastUpdated: 'Terakhir diperbarui: Desember 2024',
		introTitle: 'Komitmen Kami',
		introPara:
			'Kami percaya pada pengumpulan data minimal. Kami hanya mengumpulkan apa yang benar-benar diperlukan untuk memproses pembelian Anda dan mengirimkan panduan.',
		dataCollectedTitle: 'Data yang Kami Kumpulkan',
		dataCollectedPara: 'Ketika Anda membeli panduan, kami mengumpulkan:',
		dataCollectedList: [
			'Alamat email (untuk mengirimkan akses)',
			'Informasi pembayaran (diproses dengan aman oleh Stripe)'
		],
		noTrackingTitle: 'Yang Tidak Kami Lakukan',
		noTrackingList: [
			'Tidak ada skrip analytics atau tracking',
			'Tidak ada cookie untuk iklan',
			'Tidak ada penjualan atau berbagi data Anda dengan pihak ketiga',
			'Tidak ada pelacakan perilaku'
		],
		stripeTitle: 'Pemrosesan Pembayaran',
		stripePara:
			'Semua pembayaran diproses dengan aman oleh Stripe. Kami tidak pernah melihat atau menyimpan detail kartu kredit lengkap Anda. Kebijakan privasi Stripe berlaku untuk pemrosesan pembayaran.',
		retentionTitle: 'Retensi Data',
		retentionPara:
			'Kami menyimpan catatan pembelian untuk memberikan Anda akses berkelanjutan ke panduan dan menangani permintaan dukungan.',
		contactTitle: 'Pertanyaan?',
		contactPara: 'Untuk pertanyaan terkait privasi, hubungi kami di:',
		contactEmail: 'privacy@claudecodeguide.com'
	},

	// Terms page
	terms: {
		pageTitle: 'Ketentuan Layanan - Claude Code Tips',
		pageDescription: 'Syarat dan ketentuan untuk menggunakan Claude Code Tips.',
		title: 'Ketentuan Layanan',
		lastUpdated: 'Terakhir diperbarui: Desember 2024',
		serviceTitle: 'Layanan',
		servicePara:
			'Claude Code Tips menyediakan panduan digital berisi 50 tips untuk menguasai Claude Code. Setelah pembelian, Anda menerima akses seumur hidup ke panduan berbasis web.',
		paymentTitle: 'Pembayaran',
		paymentList: [
			'Pembayaran sekali $29 USD',
			'Akses seumur hidup ke semua tips saat ini dan masa depan',
			'Tidak ada biaya berulang atau langganan'
		],
		refundTitle: 'Kebijakan Pengembalian Dana',
		refundPara:
			'Kami menawarkan jaminan uang kembali 14 hari. Jika Anda tidak puas dengan panduan, hubungi kami dalam 14 hari setelah pembelian untuk pengembalian dana penuh. Tanpa pertanyaan.',
		licenseTitle: 'Lisensi',
		licensePara:
			'Pembelian Anda memberikan lisensi personal, tidak dapat dipindahtangankan untuk mengakses dan menggunakan panduan. Anda tidak boleh:',
		licenseList: [
			'Membagikan akun atau akses Anda dengan orang lain',
			'Menyalin, mendistribusikan ulang, atau menerbitkan ulang konten panduan',
			'Menggunakan konten untuk tujuan komersial tanpa izin'
		],
		disclaimerTitle: 'Disclaimer',
		disclaimerPara:
			'Panduan ini disediakan "apa adanya" berdasarkan pengalaman pribadi. Meskipun kami berusaha untuk akurat, kami tidak menjamin hasil spesifik. Claude Code adalah produk Anthropic, dan panduan ini tidak berafiliasi atau didukung oleh Anthropic.',
		contactTitle: 'Pertanyaan?',
		contactPara: 'Untuk pertanyaan tentang ketentuan ini, hubungi kami di:',
		contactEmail: 'support@claudecodeguide.com'
	},

	// Disclosure page
	disclosure: {
		pageTitle: 'Pengungkapan - Claude Code Tips',
		pageDescription:
			'Pengungkapan penting tentang Claude Code Tips, termasuk hubungan afiliasi dan independensi editorial.',
		title: 'Pengungkapan',
		lastUpdated: 'Terakhir diperbarui: Desember 2024',
		affiliationTitle: 'Tidak Ada Afiliasi dengan Anthropic',
		affiliationPara:
			'Panduan ini adalah produk independen yang dibuat oleh Danyel Koca. TIDAK berafiliasi dengan, didukung oleh, atau disponsori oleh Anthropic, perusahaan di balik Claude dan Claude Code. Semua pendapat dan rekomendasi sepenuhnya dari penulis.',
		independenceTitle: 'Independensi Editorial',
		independencePara:
			'Semua konten dalam panduan ini mencerminkan pendapat tulus penulis berdasarkan pengalaman pribadi. Tidak ada perusahaan atau organisasi yang membayar untuk liputan yang menguntungkan atau mempengaruhi konten.',
		aiAssistedTitle: 'Konten Dibantu AI',
		aiAssistedPara:
			'Panduan ini dibuat dengan bantuan Claude Code itu sendiri. Penulis menggunakan Claude Code setiap hari dan menggunakannya untuk membantu menulis, mengedit, dan menyempurnakan konten panduan. Ini diungkapkan dalam semangat transparansi.',
		noSponsoredTitle: 'Tidak Ada Konten Bersponsor',
		noSponsoredPara:
			'Panduan tidak berisi konten bersponsor, penempatan berbayar, atau link afiliasi. Satu-satunya produk yang dijual adalah panduan itu sendiri.',
		contactTitle: 'Pertanyaan?',
		contactPara: 'Untuk pertanyaan tentang pengungkapan ini, hubungi kami di:',
		contactEmail: 'hello@claudecodeguide.com'
	},

	// Blog (UI strings only - post content in .svx files)
	blog: {
		pageTitle: 'Blog - Claude Code Tips',
		pageDescription:
			'Tips, tutorial, dan wawasan tentang Claude Code dari pembuat panduan 50 Tips.',
		title: 'Blog',
		subtitle: 'Tips, tutorial, dan wawasan tentang Claude Code',
		readMore: 'Baca selengkapnya',
		publishedOn: 'Diterbitkan pada',
		backToBlog: 'Kembali ke Blog',
		noPosts: 'Belum ada postingan. Cek lagi nanti!'
	},

	// Disclaimer for untranslated content
	disclaimer: {
		notTranslated: 'Konten ini belum tersedia dalam bahasa Anda. Menampilkan versi bahasa Inggris.'
	},

	// FAQ page
	faq: {
		pageTitle: 'FAQ - Claude Code Tips',
		pageDescription: 'Pertanyaan yang sering diajukan tentang panduan Claude Code Tips.',
		title: 'Pertanyaan yang Sering Diajukan',
		items: [
			{ q: 'Apa format panduannya?', a: 'Ini adalah panduan berbasis web yang bisa Anda akses dari perangkat apa pun. Tidak perlu download PDF.' },
			{ q: 'Apakah saya perlu pengalaman Claude Code?', a: 'Familiar dasar membantu, tapi panduan ini mencakup semuanya dari setup awal hingga teknik lanjutan.' },
			{ q: 'Bagaimana jika Claude Code diperbarui?', a: 'Panduan ini fokus pada alur kerja dan pola yang tetap stabil. Ketika fitur utama berubah, panduan juga diperbarui.' }
		]
	}
};
