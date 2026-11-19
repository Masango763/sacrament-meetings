import { deleteMeeting } from '@/lib/actions';

export default function DeleteMeetingButton({
  meetingId,
  meetingTitle,
}: {
  meetingId: string;
  meetingTitle: string;
}) {
  const deleteAction = deleteMeeting.bind(null, meetingId);

  return (
    <form action={deleteAction}>
      <button
        type="submit"
        aria-label={`Delete ${meetingTitle}`}
        className="rounded-md border border-red-300 px-3 py-1.5 text-sm font-medium text-red-700 hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-500"
      >
        Delete
      </button>
    </form>
  );
}
