import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { authConfig } from './auth.config';

export const { handlers, auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      name: 'Bishopric Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const email = typeof credentials?.email === 'string' ? credentials.email.trim() : '';
        const password = typeof credentials?.password === 'string' ? credentials.password : '';

        const validEmail = process.env.BISHOPRIC_EMAIL || 'bishopric@ward.org';
        const validPassword = process.env.BISHOPRIC_PASSWORD || 'ChangeMe123!';

        if (email === validEmail && password === validPassword) {
          return {
            id: 'bishopric-1',
            name: 'Ward Bishopric',
            email: validEmail,
          };
        }

        return null;
      },
    }),
  ],
});
