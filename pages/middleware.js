import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export function middleware(request){
    return NextResponse.redirect(new URL(`/about-2`,request.url))
}

export const config = {
    matcher: `/about/:path`,
}