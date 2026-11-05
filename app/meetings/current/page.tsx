import { redirect } from 'next/navigation';
import type { SacramentMeeting } from '@/lib/types';

async function fetchCurrentMeeting(): Promise<SacramentMeeting | null> {
  const today = new Date();
  const dayOfWeek = today.getDay();
  const sunday = new Date(today);
  sunday.setDate(today.getDate() - dayOfWeek);
  const dateStr = sunday.toISOString().split('T')[0];

  const res = await fetch(`http://localhost:3000/api/meetings?date=${dateStr}`, { cache: 'no-store' });
  if (!res.ok) return null;
  const meetings: SacramentMeeting[] = await res.json();
  
  if (meetings.length > 0) return meetings[0];
  
  // Fallback to meeting id 1 if exact current Sunday is not in sample data
  const fallbackRes = await fetch('http://localhost:3000/api/meetings/1', { cache: 'no-store' });
  if (fallbackRes.ok) return fallbackRes.json();
  
  return null;
}

export default async function CurrentMeetingPage() {
  // For static/development preview where 2026 sample dates might need matching:
  const meeting = await fetchCurrentMeeting();
  
  if (meeting) {
    redirect(`/meetings/${meeting.id}`);
  }

  redirect('/meetings');
}
