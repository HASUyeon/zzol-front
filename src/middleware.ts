import { NextResponse, NextRequest } from "next/server";
import {
  pageForOnlyGuest,
  pageForOnlyMember,
  pageRoutes,
} from "./utils/page-utils";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (!request.cookies.get("token") || !request.cookies.get("refreshToken")) {
    if (pageForOnlyMember.includes(pathname))
      return NextResponse.redirect(new URL(pageRoutes.signIn, request.url));
    return NextResponse.next();
  } else {
    if (pageForOnlyGuest.includes(pathname))
      return NextResponse.redirect(new URL(pageRoutes.root, request.url));
    return NextResponse.next();
  }
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
