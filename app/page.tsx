import Link from 'next/link';

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto text-center py-12">
      <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
        Welcome to the Harare Ward Sacrament Meeting Planner
      </h2>
      <p className="text-lg text-gray-600 mb-8">
        Manage ward programs, view meeting agendas, and access current and past sacrament programs easily.
      </p>
      <div className="flex justify-center space-x-4">
        <Link
          href="/meetings"
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg shadow transition-colors"
        >
          View All Meetings
        </Link>
        <Link
          href="/meetings/current"
          className="bg-gray-800 hover:bg-gray-900 text-white font-medium py-3 px-6 rounded-lg shadow transition-colors"
        >
          Current Program
        </Link>
      </div>
    </div>
  );
}
