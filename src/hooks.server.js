import { redirect } from '@sveltejs/kit';
import { supportedLangs, DEFAULT_LANG } from '$lib/i18n/loader.js';

export async function handle({ event, resolve }) {
	const path = event.url.pathname;

	// Validate language code and redirect invalid paths to default language
	if (!path.startsWith('/api/') && !path.includes('.') && path !== '/') {
		const segments = path.split('/').filter(Boolean);
		const potentialLang = segments[0];

		if (potentialLang && !supportedLangs.includes(potentialLang)) {
			const knownRoutes = ['robots.txt'];
			if (!knownRoutes.includes(potentialLang)) {
				throw redirect(307, `/${DEFAULT_LANG}`);
			}
		}
	}

	// Detect language from URL path
	let lang = DEFAULT_LANG;
	for (const supportedLang of supportedLangs) {
		if (path.startsWith(`/${supportedLang}`)) {
			lang = supportedLang;
			break;
		}
	}

	// Skip internal SvelteKit fetches
	if (event.isSubRequest) {
		return resolve(event);
	}

	const dir = lang === 'ar' ? 'rtl' : 'ltr';

	const response = await resolve(event, {
		transformPageChunk: ({ html }) => html.replace('%lang%', lang).replace('%dir%', dir)
	});

	// Add charset=utf-8 to HTML responses
	if (response.headers.get('content-type')?.includes('text/html')) {
		response.headers.set('content-type', 'text/html; charset=utf-8');
	}

	// Security headers (also in _headers for production, here for dev)
	response.headers.set('X-Content-Type-Options', 'nosniff');
	response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
	response.headers.set('X-Frame-Options', 'DENY');

	return response;
}
