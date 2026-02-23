import { getDb } from './db.js';

/**
 * Check and increment rate limit
 * @param {App.Platform} platform
 * @param {string} key
 * @param {number} maxAttempts
 * @param {number} windowMinutes
 */
export async function checkRateLimit(platform, key, maxAttempts, windowMinutes = 60) {
	if (!key) throw new Error('rateLimitKeyRequired');

	const db = getDb(platform);
	const windowMs = windowMinutes * 60 * 1000;
	const windowStart = new Date(Math.floor(Date.now() / windowMs) * windowMs).toISOString();
	const id = `${key}_${windowStart}`;

	// Atomic upsert: INSERT or UPDATE and return count
	const result = await db.prepare(`
		INSERT INTO rate_limits (id, count, window_start)
		VALUES (?1, 1, ?2)
		ON CONFLICT(id) DO UPDATE SET count = count + 1
		RETURNING count
	`).bind(id, windowStart).first();

	if (result && result.count > maxAttempts) {
		throw new Error('rateLimitExceeded');
	}
}
