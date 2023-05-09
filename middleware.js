import { NextResponse } from "next/server";

export const config = {
  matcher: ["/authentication", "/dashboard", "/account", "/word/:id"],
};

export function middleware(request) {
  console.log("Run middleware");
  /*  if (!token) {
    // send the user back to the sign in / home page or wherever
    const url = request.nextUrl.clone();
    url.pathname = "/account/signin";
    return NextResponse.redirect(url);
  } */
}
