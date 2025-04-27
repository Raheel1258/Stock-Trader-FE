import { NextRequest, NextResponse } from "next/server";
import { getAuthCookies } from "./actions";

export const middleware = async (request: NextRequest) => {
  const auth = await getAuthCookies();

  if (!auth) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  return NextResponse.next();
};
