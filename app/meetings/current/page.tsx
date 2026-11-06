import { connection } from 'next/server';
import { redirect } from 'next/navigation';
import { getMeetings, getMeetingById } from '@/lib/meetings-db';

async function getCurrentMeetingId(): Promise<number | null> {
  await connection();
  const today = new Date();
  const sunday = new Date(today);
  sunday.setDate(today.getDate() - today.getDay());
  const dateStr = sunday.toISOString().split('T')[0];

  const meetings = await getMeetings(dateStr);
  if (meetings.length > 0) return meetings[0].id;

  // Fallback to meeting id 1 if the current Sunday is not in the sample data
  const fallback = await getMeetingById(1);
  return fallback ? fallback.id : null;
}

export default async function CurrentMeetingPage() {
  const id = await getCurrentMeetingId();
  if (id !== null) {
    redirect(`/meetings/${id}`);
  }
  redirect('/meetings');
}
