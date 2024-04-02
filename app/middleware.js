import { NextResponse } from "next/server";
import { verifyJwt } from "@/lib/auth";
import next from "next";

const AUTH_PAGES = ["/login"];

const isAuthPage = (url) => AUTH_PAGES.some((page) => page.startsWith(url));

export async function middleware(request) {
    const { url, nextUrl, cookies } = request;
    const { value: token } = cookies.get("token") ?? { value: null };
    const hasVerifiedToken = token && (await verifyJwt(token));
    const isAuthPageRequested = isAuthPage(nextUrl.pathname);
    
    if (!hasVerifiedToken) {
        const searchParams = new URLSearchParams(nextUrl.searchParams);
        searchParams.set("next", nextUrl.pathname);
        const response = NextResponse.redirect(
            new URL(`/login?${searchParams}`, url)
        );
        response.cookies.delete("token");
        return response;
    }
    return NextResponse.next();
}

export const config = { matcher: ["/login", "/api/*"]};