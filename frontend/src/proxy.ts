import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
export default function proxy(request: NextRequest) {
  const url = request.nextUrl.clone();
  return NextResponse.redirect(new URL("/home", request.url));
}

export const config = {
  matcher: ["/me"],
};
