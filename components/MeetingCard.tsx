import Link from 'next/link';
import type { SacramentMeeting } from '@/lib/types';

export default function MeetingCard({ meeting }: { meeting: SacramentMeeting }) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-5 hover:shadow-md transition-shadow flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-start mb-2">
          <span className="text-xs font-semibold uppercase tracking-wider px-2 py-1 bg-blue-100 text-blue-800 rounded">
            {meeting.meetingType}
          </span>
          <span className="text-sm font-medium text-gray-500">{meeting.date}</span>
        </div>
        <h3 className="text-lg font-bold text-gray-900 mb-1">
          Sacrament Meeting Program
        </h3>
        <p className="text-sm text-gray-600 mb-4">
          Presiding: {meeting.presiding} | Conducting: {meeting.conducting}
        </p>
      </div>
      <Link
        href={`/meetings/${meeting.id}`}
        className="inline-block text-center bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-4 rounded transition-colors"
      >
        View Full Agenda
      </Link>
    </div>
  );
}
