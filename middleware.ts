import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    const origin = request.headers.get('origin')
    console.log(origin)

    const response = NextResponse.next();
    response.headers.set("Access-Control-Allow-Origin", "*");
    response.headers.set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    response.headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization");
    response.headers.set("Access-Control-Max-Age", "86400")
//   return NextResponse.redirect(new URL('/home', request.url))

console.log('middleware')
console.log(request.method)
console.log(request.url)

return response;
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: '/about/:path*',
}