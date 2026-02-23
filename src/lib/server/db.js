/**
 * Get D1 database instance from platform
 * @param {App.Platform} platform
 * @returns {D1Database}
 */
export function getDb(platform) {
	if (!platform?.env?.DB) {
		throw new Error('D1 database not available');
	}
	return platform.env.DB;
}
