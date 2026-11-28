import type { Metadata } from 'next';
import { Suspense } from 'react';
import { AuthError } from 'next-auth';
import { redirect } from 'next/navigation';
import { signIn } from '@/auth';

export const metadata: Metadata = {
  title: 'Bishopric Sign In',
  description: 'Sign in to manage sacrament meeting schedules, speakers, hymns, and program details.',
};

async function LoginForm({
  searchParams,
}: {
  searchParams: Promise<{ error?: string; callbackUrl?: string }>;
}) {
  const params = await searchParams;
  const callbackUrl = params?.callbackUrl || '/manage';

  async function authenticate(formData: FormData) {
    'use server';
    try {
      await signIn('credentials', {
        email: formData.get('email'),
        password: formData.get('password'),
        redirectTo: callbackUrl,
      });
    } catch (error) {
      if (error instanceof AuthError) {
        redirect('/login?error=InvalidCredentials');
      }
      throw error;
    }
  }

  return (
    <>
      {params?.error && (
        <div className="mb-4 rounded border border-red-300 bg-red-50 p-3 text-sm text-red-700">
          Invalid bishopric email or password. Please try again.
        </div>
      )}

      <form action={authenticate} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="bishopric@ward.org"
            className="w-full rounded border px-3 py-2"
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium mb-1">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            required
            className="w-full rounded border px-3 py-2"
          />
        </div>

        <button
          type="submit"
          className="w-full rounded bg-blue-700 px-4 py-2 font-medium text-white hover:bg-blue-800"
        >
          Sign In
        </button>
      </form>
    </>
  );
}

export default function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string; callbackUrl?: string }>;
}) {
  return (
    <main className="mx-auto max-w-md px-4 py-12">
      <h1 className="text-2xl font-bold mb-2">Bishopric Sign In</h1>
      <p className="text-sm text-gray-600 mb-6">
        Sign in to manage sacrament meeting schedules, speakers, and musical numbers.
      </p>

      <Suspense
        fallback={
          <div className="rounded border p-4 text-sm text-gray-600">
            Loading sign-in form...
          </div>
        }
      >
        <LoginForm searchParams={searchParams} />
      </Suspense>
    </main>
  );
}
