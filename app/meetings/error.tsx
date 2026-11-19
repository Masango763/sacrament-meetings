'use client';

import Link from 'next/link';
import { useEffect } from 'react';

export default function MeetingsError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Meetings route error:', error);
  }, [error]);

  return (
    <div className="mx-auto mt-12 max-w-xl rounded-lg border border-red-200 bg-white p-6 shadow-sm">
      <h1 className="text-xl font-bold text-slate-900">Unable to load meetings</h1>
      <p className="mt-2 text-sm text-slate-600">
        {error.message || 'An unexpected error occurred while processing your request.'}
      </p>
      <div className="mt-6 flex items-center gap-3">
        <button
          type="button"
          onClick={() => reset()}
          className="rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Try Again
        </button>
        <Link
          href="/meetings"
          className="rounded-md border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Back to Meetings
        </Link>
      </div>
    </div>
  );
}
