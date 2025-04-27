import { NextRequest, NextResponse } from "next/server";
import { getAuthCookies } from "./actions";
import { API_URL } from "./constants";

const PUBLIC_ROUTES = ["/login", "/register"];

export const middleware = async (request: NextRequest) => {
  const headers = new Headers(request.headers);
  const auth = await getAuthCookies();

  if (request.nextUrl.pathname.startsWith("/api/v1")) {
    return fetch(
      new URL(`${request.nextUrl.pathname}${request.nextUrl.search}`, API_URL),
      {
        body: request.body,
        method: request.method,
        headers: {
          Authorization: auth ? `Bearer ${auth}` : "",
          "Content-Type": headers.get("Content-Type") ?? "application/json",
        },
      }
    );
  }

  if (
    !auth &&
    !PUBLIC_ROUTES.some((route) => request.nextUrl.pathname.startsWith(route))
  ) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (
    auth &&
    PUBLIC_ROUTES.some((route) => request.nextUrl.pathname.startsWith(route))
  ) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
};

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
