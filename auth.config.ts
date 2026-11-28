import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isProtectedRoute =
        nextUrl.pathname.startsWith('/manage') ||
        nextUrl.pathname.startsWith('/meetings/manage') ||
        nextUrl.pathname.startsWith('/admin');

      if (isProtectedRoute) {
        if (isLoggedIn) return true;
        return false;
      }

      if (isLoggedIn && nextUrl.pathname === '/login') {
        return Response.redirect(new URL('/manage', nextUrl));
      }

      return true;
    },
  },
  providers: [],
} satisfies NextAuthConfig;
