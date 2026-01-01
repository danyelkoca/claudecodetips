// Uses Firestore because Netlify serverless functions don't persist in-memory state across cold starts
import { db } from '$lib/server/firebase-admin.js';

export async function checkRateLimit(key, maxAttempts, windowMinutes = 60) {
	if (!key) throw new Error('rateLimitKeyRequired');

	const windowStart = Math.floor(Date.now() / (windowMinutes * 60 * 1000));
	const docId = `${key}_${windowStart}`;

	await db.runTransaction(async (transaction) => {
		const docRef = db.collection('rate_limits').doc(docId);
		const doc = await transaction.get(docRef);
		const currentCount = doc.exists ? doc.data().count || 0 : 0;

		if (currentCount >= maxAttempts) {
			throw new Error('rateLimitExceeded');
		}

		transaction.set(docRef, {
			count: currentCount + 1,
			key: key,
			createdAt: Date.now(),
		}, { merge: true });
	});
}
