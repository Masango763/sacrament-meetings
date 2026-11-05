'use client';
import type { SacramentMeeting } from '@/lib/types';

export default function MeetingDetail({ meeting }: { meeting: SacramentMeeting }) {
  return (
    <div className="bg-white border border-gray-200 shadow-sm rounded-lg p-6 max-w-3xl mx-auto print:shadow-none print:border-none print:p-0">
      <div className="flex justify-between items-center mb-6 print:hidden">
        <span className="text-xs uppercase tracking-wider px-3 py-1 bg-blue-100 text-blue-800 font-semibold rounded-full">
          {meeting.meetingType} Meeting
        </span>
        <button
          onClick={() => window.print()}
          className="bg-gray-800 hover:bg-gray-900 text-white text-sm font-medium py-2 px-4 rounded transition-colors"
        >
          Print Program
        </button>
      </div>

      <div className="text-center border-b border-gray-200 pb-6 mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Sacrament Meeting Program</h2>
        <p className="text-gray-600 mt-1">{meeting.date}</p>
        <div className="mt-3 text-sm text-gray-700 flex justify-center space-x-6">
          <span><strong>Presiding:</strong> {meeting.presiding}</span>
          <span><strong>Conducting:</strong> {meeting.conducting}</span>
        </div>
      </div>

      {meeting.announcements && meeting.announcements.length > 0 && (
        <div className="mb-6 bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r">
          <h3 className="text-sm font-bold text-amber-800 uppercase tracking-wide mb-2">Announcements</h3>
          <ul className="list-disc list-inside text-sm text-amber-900 space-y-1">
            {meeting.announcements.map((ann, idx) => (
              <li key={idx}>{ann}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="space-y-4 text-gray-800 text-sm">
        <div className="flex justify-between py-2 border-b border-gray-100">
          <span className="font-semibold text-gray-600">Opening Hymn</span>
          <span>#{meeting.openingHymn.number} - {meeting.openingHymn.title}</span>
        </div>

        <div className="flex justify-between py-2 border-b border-gray-100">
          <span className="font-semibold text-gray-600">Opening Prayer</span>
          <span>{meeting.openingPrayer}</span>
        </div>

        <div className="py-2 border-b border-gray-100">
          <span className="font-semibold text-gray-600 block mb-1">Ward Business</span>
          {meeting.wardBusiness.length > 0 ? (
            <ul className="list-disc list-inside pl-2 space-y-1 text-gray-700">
              {meeting.wardBusiness.map((wb, idx) => (
                <li key={idx}>{wb.description}</li>
              ))}
            </ul>
          ) : (
            <span className="text-gray-500 italic">None</span>
          )}
        </div>

        <div className="flex justify-between py-2 border-b border-gray-100">
          <span className="font-semibold text-gray-600">Sacrament Hymn</span>
          <span>#{meeting.sacramentHymn.number} - {meeting.sacramentHymn.title}</span>
        </div>

        <div className="py-3 bg-gray-50 px-4 rounded text-center font-semibold text-gray-700 uppercase text-xs tracking-wider">
          Administration of the Sacrament
        </div>

        {meeting.speakers.length > 0 && (
          <div className="py-2 border-b border-gray-100">
            <span className="font-semibold text-gray-600 block mb-2">Speakers & Musical Numbers</span>
            <div className="space-y-2 pl-2">
              {meeting.speakers.map((speaker, idx) => (
                <div key={idx} className="flex justify-between items-center text-sm">
                  <div>
                    <span className="font-medium">{speaker.name}</span>
                    {speaker.topic && <span className="text-gray-500 text-xs ml-2">({speaker.topic})</span>}
                  </div>
                  <span className="text-xs uppercase bg-gray-200 px-2 py-0.5 rounded text-gray-700">
                    {speaker.type}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="flex justify-between py-2 border-b border-gray-100">
          <span className="font-semibold text-gray-600">Closing Hymn</span>
          <span>#{meeting.closingHymn.number} - {meeting.closingHymn.title}</span>
        </div>

        <div className="flex justify-between py-2">
          <span className="font-semibold text-gray-600">Closing Prayer</span>
          <span>{meeting.closingPrayer}</span>
        </div>
      </div>
    </div>
  );
}
