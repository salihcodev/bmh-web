import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const COOKIE = "locale";

function localeCookie(request: NextRequest): "ar" | "en" {
  return request.cookies.get(COOKIE)?.value === "en" ? "en" : "ar";
}

function withLocaleCookie(response: NextResponse, locale: "ar" | "en") {
  response.cookies.set(COOKIE, locale, {
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
    sameSite: "lax",
  });
  return response;
}

function requestLocale(request: NextRequest, locale: "ar" | "en") {
  const headers = new Headers(request.headers);
  headers.set("x-locale", locale);
  return headers;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/.well-known") ||
    pathname === "/icon" ||
    pathname.startsWith("/apple-icon")
  ) {
    return NextResponse.next();
  }

  const prefixedUtility = pathname.match(/^\/(ar|en)(\/join|\/bag\/.+)$/);
  if (prefixedUtility) {
    const url = request.nextUrl.clone();
    url.pathname = prefixedUtility[2] ?? "/join";
    return withLocaleCookie(NextResponse.redirect(url), prefixedUtility[1] === "en" ? "en" : "ar");
  }

  if (pathname === "/join" || pathname.startsWith("/bag/")) {
    const locale = localeCookie(request);
    const url = request.nextUrl.clone();
    url.pathname = `/${locale}${pathname}`;
    return NextResponse.rewrite(url, { request: { headers: requestLocale(request, locale) } });
  }

  const hasLocale =
    pathname === "/ar" || pathname.startsWith("/ar/") || pathname === "/en" || pathname.startsWith("/en/");
  if (hasLocale) {
    const locale = pathname === "/en" || pathname.startsWith("/en/") ? "en" : "ar";
    return withLocaleCookie(
      NextResponse.next({ request: { headers: requestLocale(request, locale) } }),
      locale,
    );
  }

  const url = request.nextUrl.clone();
  url.pathname = pathname === "/" ? "/ar" : `/ar${pathname}`;
  return withLocaleCookie(NextResponse.redirect(url), "ar");
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
