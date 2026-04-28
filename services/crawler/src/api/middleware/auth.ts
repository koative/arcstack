import { createMiddleware } from "hono/factory";

const PUBLIC_PATHS = new Set(["/health"]);

export function bearerAuth(expected: string | undefined) {
	return createMiddleware(async (c, next) => {
		if (!expected) return next();
		if (PUBLIC_PATHS.has(c.req.path)) return next();

		const header = c.req.header("authorization");
		if (!header?.startsWith("Bearer ")) {
			return c.json({ error: "unauthorized" }, 401);
		}
		const token = header.slice(7).trim();
		if (!safeEqual(token, expected)) {
			return c.json({ error: "unauthorized" }, 401);
		}
		return next();
	});
}

function safeEqual(a: string, b: string): boolean {
	if (a.length !== b.length) return false;
	let diff = 0;
	for (let i = 0; i < a.length; i++) {
		diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
	}
	return diff === 0;
}
