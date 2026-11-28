import type { Metadata } from 'next';
import { Suspense } from 'react';
import { auth } from '@/auth';
import { SignOutButton } from '@/components/SignOutButton';

export const metadata: Metadata = {
  title: 'Manage Sacrament Meetings',
  description: 'Protected bishopric workspace for managing sacrament meeting schedules, speakers, and hymns.',
};

async function ManageWorkspace() {
  const session = await auth();

  return (
    <>
      <div className="flex items-center justify-between border-b pb-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold">Manage Sacrament Meetings</h1>
          <p className="text-sm text-gray-600">
            Signed in as {session?.user?.email || 'Bishopric Member'}
          </p>
        </div>
        <SignOutButton />
      </div>
      <p className="text-gray-700">
        Bishopric schedule management area. Update weekly sacrament meeting agendas, speakers, and hymns here.
      </p>
    </>
  );
}

export default function ManageMeetingsPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <Suspense
        fallback={
          <div className="rounded border p-4 text-sm text-gray-600">
            Loading bishopric workspace...
          </div>
        }
      >
        <ManageWorkspace />
      </Suspense>
    </main>
  );
}
