import { NextResponse } from "next/server";

export const config = {
  matcher: ["/authentication", "/main", "/account", "/word/:id"],
};

export function middleware(request) {
  /*   if (!token) {
    // send the user back to the sign in / home page or wherever
    const url = request.nextUrl.clone();
    url.pathname = "/authentication";
    return NextResponse.redirect(url);
  } */
}
