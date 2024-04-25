import { NextResponse } from "next/server";

export default function middleware(request) {
  // (redirection)
  // if (request.nextUrl.pathname === "/about") {
  //   return NextResponse.rewrite(new URL("/book/7135756", request.nextUrl));
  // }

  // (url rewrite)
  // if (request.nextUrl.pathname === "/about") {
  //   return NextResponse.rewrite(new URL("/chapter/35478134/13475713", request.nextUrl));
  // }

  // (cookies and headers)
  const themePreference = request.cookies.get("theme");
  const response = NextResponse.next();
  if (!themePreference) {
    response.cookies.set("theme", "dark");
  }
  response.headers.set("custom-header", "custom-value");

  return response;
}
