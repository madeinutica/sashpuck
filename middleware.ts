import { NextResponse } from "next/server";

import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();

  if (req.method === "GET") {
    // Rewrite routes that match "/[...puckPath]/edit" to "/puck/[...puckPath]"
    if (req.nextUrl.pathname.endsWith("/edit")) {
      const pathWithoutEdit = req.nextUrl.pathname.slice(
        0,
        req.nextUrl.pathname.length - 5
      );
      const pathWithEditPrefix = `/puck${pathWithoutEdit}`;
      return NextResponse.rewrite(new URL(pathWithEditPrefix, req.url));
    }

    // Only allow /puck routes for logged-in users (session cookie check)
    if (req.nextUrl.pathname.startsWith("/puck")) {
      const session = req.cookies.get("adminSession");
      if (!session) {
        return NextResponse.redirect(new URL("/", req.url));
      }
    }
  }

  return res;
}
