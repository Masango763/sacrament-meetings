import Link from 'next/link';

export default function EditMeetingNotFound() {
  return (
    <div className="mx-auto mt-12 max-w-xl rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
      <h1 className="text-xl font-bold text-slate-900">Meeting not found</h1>
      <p className="mt-2 text-sm text-slate-600">
        No sacrament meeting record matches that ID. It may have been deleted or the link may be invalid.
      </p>
      <div className="mt-6">
        <Link
          href="/meetings"
          className="inline-block rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Back to Meetings
        </Link>
      </div>
    </div>
  );
}
