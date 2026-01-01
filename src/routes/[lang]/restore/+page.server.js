import { redirect } from '@sveltejs/kit';

export async function load({ parent, params }) {
	const { hasAccess } = await parent();

	if (hasAccess) {
		throw redirect(307, `/${params.lang}/guide`);
	}

	return {};
}
