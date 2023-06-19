import { NextResponse } from "next/server";

export const config = {
  matcher: ["/authentication", "/main", "/account", "/word/:id"],
};

export function middleware(request) {}
