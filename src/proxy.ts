import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const launchLocked = process.env.PORTFOLIO_LAUNCH_LOCKED !== "false";

export function proxy(request: NextRequest) {
    if (!launchLocked) {
        return NextResponse.next();
    }

    const { pathname } = request.nextUrl;

    if (pathname === "/coming-soon") {
        return NextResponse.next();
    }

    const url = request.nextUrl.clone();
    url.pathname = "/coming-soon";

    return NextResponse.redirect(url);
}

export const config = {
    matcher: [
        "/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|.*\\..*).*)",
    ],
};
