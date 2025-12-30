export const DEFAULT_LANG = 'en';

export const languages = [
	{ code: 'en', nativeName: 'English' },
	{ code: 'ja', nativeName: '日本語' },
	{ code: 'zh-CN', nativeName: '简体中文' },
	{ code: 'zh-TW', nativeName: '繁體中文' },
	{ code: 'es', nativeName: 'Español' },
	{ code: 'fr', nativeName: 'Français' },
	{ code: 'pt', nativeName: 'Português' },
	{ code: 'de', nativeName: 'Deutsch' },
	{ code: 'ko', nativeName: '한국어' },
	{ code: 'ar', nativeName: 'العربية' },
	{ code: 'ru', nativeName: 'Русский' },
	{ code: 'id', nativeName: 'Bahasa Indonesia' },
	{ code: 'tr', nativeName: 'Türkçe' }
];

export const supportedLangs = languages.map((l) => l.code);

export function isValidLang(lang) {
	return supportedLangs.includes(lang);
}

export async function loadTranslations(lang) {
	const loaders = {
		en: () => import('./en.js'),
		ja: () => import('./ja.js'),
		'zh-CN': () => import('./zh-CN.js'),
		'zh-TW': () => import('./zh-TW.js'),
		es: () => import('./es.js'),
		fr: () => import('./fr.js'),
		pt: () => import('./pt.js'),
		de: () => import('./de.js'),
		ko: () => import('./ko.js'),
		ar: () => import('./ar.js'),
		ru: () => import('./ru.js'),
		id: () => import('./id.js'),
		tr: () => import('./tr.js')
	};

	const loader = loaders[lang] || loaders[DEFAULT_LANG];
	const module = await loader();
	return module.default;
}
