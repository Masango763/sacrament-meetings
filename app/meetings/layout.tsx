import { Suspense } from "react";
import NavLinks from '@/components/NavLinks';

export default function MeetingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Suspense fallback={null}><NavLinks /></Suspense>
      {children}
    </div>
  );
}
