import { signOut } from '@/auth';

export function SignOutButton() {
  return (
    <form
      action={async () => {
        'use server';
        await signOut({ redirectTo: '/login' });
      }}
    >
      <button
        type="submit"
        className="rounded border px-3 py-1.5 text-sm font-medium hover:bg-gray-100"
      >
        Sign Out
      </button>
    </form>
  );
}
