import MeetingCard from '@/components/MeetingCard';
import type { SacramentMeeting } from '@/lib/types';

async function fetchMeetings(): Promise<SacramentMeeting[]> {
  const res = await fetch('http://localhost:3000/api/meetings', { cache: 'no-store' });
  if (!res.ok) throw new Error('Failed to fetch meetings');
  return res.json();
}

export default async function MeetingsPage() {
  const meetings = await fetchMeetings();

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">All Sacrament Meetings</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {meetings.map((meeting) => (
          <MeetingCard key={meeting.id} meeting={meeting} />
        ))}
      </div>
    </div>
  );
}
