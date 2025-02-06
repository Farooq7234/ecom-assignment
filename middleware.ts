import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/sign-in", "/register", "/", "/interests"],
};

export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request });
  const url = request.nextUrl;

  // If user is logged in and tries to access sign-in, register, or home, redirect to /interests
  if (token && ["/sign-in", "/register"].includes(url.pathname)) {
    return NextResponse.redirect(new URL("/interests", request.url));
  }

  // If user is NOT logged in and tries to access /interests, redirect to home
  if (!token && url.pathname === "/interests") {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}
