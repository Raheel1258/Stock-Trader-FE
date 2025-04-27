import { NextRequest, NextResponse } from "next/server";
import { getAuthCookies } from "./actions";

const PUBLIC_ROUTES = ["/login", "/register"];

export const middleware = async (request: NextRequest) => {
  const auth = await getAuthCookies();
  console.log("route ", request.nextUrl.pathname);
  console.log("auth", auth);
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
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
