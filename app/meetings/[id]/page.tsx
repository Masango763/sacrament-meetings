import { Suspense } from 'react';
import { notFound } from 'next/navigation';
import MeetingDetail from '@/components/MeetingDetail';
import { getMeetings, getMeetingById } from '@/lib/meetings-db';

export function generateStaticParams() {
  return getMeetings().map((m) => ({ id: String(m.id) }));
}

async function MeetingContent({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const meeting = getMeetingById(Number(id));

  if (!meeting) {
    notFound();
  }

  return <MeetingDetail meeting={meeting} />;
}

export default function MeetingPage(props: { params: Promise<{ id: string }> }) {
  return (
    <Suspense fallback={<p>Loading meeting...</p>}>
      <MeetingContent params={props.params} />
    </Suspense>
  );
}
