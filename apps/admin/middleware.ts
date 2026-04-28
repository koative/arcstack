import { NextResponse, type NextRequest } from "next/server";

export const config = {
	matcher: ["/((?!_next/static|_next/image|favicon.ico|api/).*)"],
};

export function middleware(req: NextRequest) {
	const password = process.env.ADMIN_PASSWORD;
	if (!password) return NextResponse.next();

	const header = req.headers.get("authorization");
	if (header?.startsWith("Basic ")) {
		const [user, pass] = decode(header.slice(6)).split(":");
		if (user === (process.env.ADMIN_USER ?? "admin") && pass === password) {
			return NextResponse.next();
		}
	}

	return new NextResponse("Authentication required", {
		status: 401,
		headers: { "WWW-Authenticate": 'Basic realm="eros admin"' },
	});
}

function decode(value: string): string {
	if (typeof atob === "function") return atob(value);
	return Buffer.from(value, "base64").toString("utf8");
}
