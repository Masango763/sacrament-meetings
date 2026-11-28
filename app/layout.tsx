import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Sacrament Meeting Planner',
    template: '%s | Sacrament Meeting Planner',
  },
  description:
    'Plan, organize, and share weekly sacrament meeting programs, speakers, prayers, and hymns.',
  openGraph: {
    title: 'Sacrament Meeting Planner',
    description:
      'Plan, organize, and share weekly sacrament meeting programs, speakers, prayers, and hymns.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
