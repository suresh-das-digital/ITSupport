import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
    request.headers.set('pathname', request.nextUrl.pathname);

    const response = NextResponse.next({
        request: {
            headers: request.headers,  //  put your headers here
        },
    });

    return response;

    // if (request.nextUrl.pathname.startsWith('/@')) {
    //     return NextResponse.rewrite(new URL('/profile', request.nextUrl), { headers: request.headers });
    // }
}