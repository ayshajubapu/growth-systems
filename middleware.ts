import { next } from '@vercel/edge';

export default function middleware(request: Request) {
  const url = new URL(request.url);

  if (/^\/game(?:\/|$)/i.test(url.pathname)) {
    return new Response('Gone', { status: 410 });
  }

  return next();
}

export const config = {
  matcher: ['/game/:path*'],
};