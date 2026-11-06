import type { SacramentMeeting } from './types';

const meetings: SacramentMeeting[] = [
  {
    id: 1,
    date: '2026-05-03',
    meetingType: 'regular',
    presiding: 'Bishop Smith',
    conducting: 'Brother Jones',
    openingHymn: { number: 2, title: 'The Spirit of God' },
    openingPrayer: 'Sister Williams',
    wardBusiness: [{ description: 'Sustaining of new Primary president' }],
    stakeBusiness: false,
    sacramentHymn: { number: 169, title: "In Remembrance of Thy Suffering" },
    speakers: [
      { name: 'Sister Brown', topic: 'Faith in Jesus Christ', type: 'speaker' },
      { name: 'Youth Choir', topic: '', type: 'musical-number' }
    ],
    closingHymn: { number: 31, title: 'O God, Our Help in Ages Past' },
    closingPrayer: 'Brother Davis',
    announcements: ['Ward temple night: May 10']
  },
  {
    id: 2,
    date: '2026-05-10',
    meetingType: 'testimony',
    presiding: 'Bishop Smith',
    conducting: 'Bishop Smith',
    openingHymn: { number: 70, title: 'Sing We Now at Parting' },
    openingPrayer: 'Brother Taylor',
    wardBusiness: [],
    stakeBusiness: false,
    sacramentHymn: { number: 193, title: 'I Stand All Amazed' },
    speakers: [],
    closingHymn: { number: 134, title: 'I Believe in Christ' },
    closingPrayer: 'Sister Martinez',
    announcements: ['Mother’s Day recognition next Sunday']
  },
  {
    id: 3,
    date: '2026-05-17',
    meetingType: 'regular',
    presiding: '1st Counselor Johnson',
    conducting: '2nd Counselor White',
    openingHymn: { number: 26, title: 'Joseph Smith’s First Prayer' },
    openingPrayer: 'Brother Anderson',
    wardBusiness: [{ description: 'Release of Sunday School teacher' }],
    stakeBusiness: false,
    sacramentHymn: { number: 181, title: 'Jesus of Nazareth, Savior and King' },
    speakers: [
      { name: 'Brother Clark', topic: 'Service and Compassion', type: 'speaker' },
      { name: 'Sister Evans', topic: 'The Power of Prayer', type: 'speaker' }
    ],
    closingHymn: { number: 252, title: 'Put Your Shoulder to the Wheel' },
    closingPrayer: 'Sister Thomas',
    announcements: ['Youth service project on Saturday at 9 AM']
  },
  {
    id: 4,
    date: '2026-05-24',
    meetingType: 'regular',
    presiding: 'Bishop Smith',
    conducting: 'Brother Jones',
    openingHymn: { number: 30, title: 'Come, Come, Ye Saints' },
    openingPrayer: 'Sister Harris',
    wardBusiness: [],
    stakeBusiness: false,
    sacramentHymn: { number: 175, title: 'O God, the Eternal Father' },
    speakers: [
      { name: 'Elder Wilson', topic: 'Missionary Work', type: 'speaker' },
      { name: 'Sister Young', topic: 'Family History', type: 'speaker' }
    ],
    closingHymn: { number: 292, title: 'O May My Soul Commune With Thee' },
    closingPrayer: 'Brother Jackson',
    announcements: ['Ward picnic next Monday at the park']
  },
  {
    id: 5,
    date: '2026-05-31',
    meetingType: 'regular',
    presiding: '1st Counselor Johnson',
    conducting: 'Brother Jones',
    openingHymn: { number: 85, title: 'How Firm a Foundation' },
    openingPrayer: 'Brother King',
    wardBusiness: [{ description: 'Ward budget review' }],
    stakeBusiness: false,
    sacramentHymn: { number: 178, title: 'O Lord of Hosts' },
    speakers: [
      { name: 'Bishop Smith', topic: 'Following the Prophet', type: 'speaker' }
    ],
    closingHymn: { number: 64, title: 'Onward, Christian Soldiers' },
    closingPrayer: 'Sister Lee',
    announcements: ['Fast Sunday next week']
  }
];

export function getMeetings(date?: string | null): SacramentMeeting[] {
  if (date) return meetings.filter(m => m.date === date);
  return meetings;
}

export function getMeetingById(id: number): SacramentMeeting | null {
  return meetings.find(m => m.id === id) ?? null;
}
