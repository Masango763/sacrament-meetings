'use client';

import { useActionState } from 'react';
import { updateMeeting, type FormState } from '@/lib/actions';
import type { SacramentMeeting } from '@/lib/types';

const initialState: FormState = { message: null, errors: {} };

export default function EditMeetingForm({ meeting }: { meeting: SacramentMeeting }) {
  const boundAction = updateMeeting.bind(null, meeting.id);
  const [state, formAction, isPending] = useActionState(boundAction, initialState);

  const speakersDefault = meeting.speakers
    .map((s) => `${s.name} - ${s.topic}`)
    .join('\n');
  const wardBusinessDefault = meeting.wardBusiness
    .map((w) => w.description)
    .join('\n');
  const announcementsDefault = (meeting.announcements ?? []).join('\n');

  return (
    <form action={formAction} className="space-y-4 rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="date" className="mb-1 block text-sm font-medium text-slate-800">
            Meeting Date
          </label>
          <input
            id="date"
            name="date"
            type="date"
            defaultValue={meeting.date}
            aria-describedby="date-error"
            className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900"
            required
          />
          <div id="date-error" aria-live="polite" aria-atomic="true">
            {state?.errors?.date?.map((msg) => (
              <p key={msg} className="mt-1 text-sm text-red-600">{msg}</p>
            ))}
          </div>
        </div>

        <div>
          <label htmlFor="meetingType" className="mb-1 block text-sm font-medium text-slate-800">
            Meeting Type
          </label>
          <select
            id="meetingType"
            name="meetingType"
            defaultValue={meeting.meetingType}
            aria-describedby="meetingType-error"
            className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900"
          >
            <option value="regular">Regular</option>
            <option value="testimony">Fast & Testimony</option>
            <option value="stake">Stake Conference</option>
            <option value="general">General Conference</option>
          </select>
          <div id="meetingType-error" aria-live="polite" aria-atomic="true">
            {state?.errors?.meetingType?.map((msg) => (
              <p key={msg} className="mt-1 text-sm text-red-600">{msg}</p>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="presiding" className="mb-1 block text-sm font-medium text-slate-800">
            Presiding
          </label>
          <input
            id="presiding"
            name="presiding"
            type="text"
            defaultValue={meeting.presiding}
            aria-describedby="presiding-error"
            className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900"
            required
          />
          <div id="presiding-error" aria-live="polite" aria-atomic="true">
            {state?.errors?.presiding?.map((msg) => (
              <p key={msg} className="mt-1 text-sm text-red-600">{msg}</p>
            ))}
          </div>
        </div>

        <div>
          <label htmlFor="conducting" className="mb-1 block text-sm font-medium text-slate-800">
            Conducting
          </label>
          <input
            id="conducting"
            name="conducting"
            type="text"
            defaultValue={meeting.conducting}
            aria-describedby="conducting-error"
            className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900"
            required
          />
          <div id="conducting-error" aria-live="polite" aria-atomic="true">
            {state?.errors?.conducting?.map((msg) => (
              <p key={msg} className="mt-1 text-sm text-red-600">{msg}</p>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <div>
          <label htmlFor="openingHymnNumber" className="mb-1 block text-sm font-medium text-slate-800">
            Opening Hymn #
          </label>
          <input
            id="openingHymnNumber"
            name="openingHymnNumber"
            type="number"
            min={1}
            defaultValue={meeting.openingHymn.number}
            aria-describedby="openingHymnNumber-error"
            className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900"
            required
          />
          <div id="openingHymnNumber-error" aria-live="polite" aria-atomic="true">
            {state?.errors?.openingHymnNumber?.map((msg) => (
              <p key={msg} className="mt-1 text-sm text-red-600">{msg}</p>
            ))}
          </div>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="openingHymnTitle" className="mb-1 block text-sm font-medium text-slate-800">
            Opening Hymn Title
          </label>
          <input
            id="openingHymnTitle"
            name="openingHymnTitle"
            type="text"
            defaultValue={meeting.openingHymn.title}
            aria-describedby="openingHymnTitle-error"
            className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900"
            required
          />
          <div id="openingHymnTitle-error" aria-live="polite" aria-atomic="true">
            {state?.errors?.openingHymnTitle?.map((msg) => (
              <p key={msg} className="mt-1 text-sm text-red-600">{msg}</p>
            ))}
          </div>
        </div>
      </div>

      <div>
        <label htmlFor="openingPrayer" className="mb-1 block text-sm font-medium text-slate-800">
          Opening Prayer
        </label>
        <input
          id="openingPrayer"
          name="openingPrayer"
          type="text"
          defaultValue={meeting.openingPrayer}
          aria-describedby="openingPrayer-error"
          className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900"
          required
        />
        <div id="openingPrayer-error" aria-live="polite" aria-atomic="true">
          {state?.errors?.openingPrayer?.map((msg) => (
            <p key={msg} className="mt-1 text-sm text-red-600">{msg}</p>
          ))}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <div>
          <label htmlFor="sacramentHymnNumber" className="mb-1 block text-sm font-medium text-slate-800">
            Sacrament Hymn #
          </label>
          <input
            id="sacramentHymnNumber"
            name="sacramentHymnNumber"
            type="number"
            min={1}
            defaultValue={meeting.sacramentHymn.number}
            aria-describedby="sacramentHymnNumber-error"
            className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900"
            required
          />
          <div id="sacramentHymnNumber-error" aria-live="polite" aria-atomic="true">
            {state?.errors?.sacramentHymnNumber?.map((msg) => (
              <p key={msg} className="mt-1 text-sm text-red-600">{msg}</p>
            ))}
          </div>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="sacramentHymnTitle" className="mb-1 block text-sm font-medium text-slate-800">
            Sacrament Hymn Title
          </label>
          <input
            id="sacramentHymnTitle"
            name="sacramentHymnTitle"
            type="text"
            defaultValue={meeting.sacramentHymn.title}
            aria-describedby="sacramentHymnTitle-error"
            className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900"
            required
          />
          <div id="sacramentHymnTitle-error" aria-live="polite" aria-atomic="true">
            {state?.errors?.sacramentHymnTitle?.map((msg) => (
              <p key={msg} className="mt-1 text-sm text-red-600">{msg}</p>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <div>
          <label htmlFor="closingHymnNumber" className="mb-1 block text-sm font-medium text-slate-800">
            Closing Hymn #
          </label>
          <input
            id="closingHymnNumber"
            name="closingHymnNumber"
            type="number"
            min={1}
            defaultValue={meeting.closingHymn.number}
            aria-describedby="closingHymnNumber-error"
            className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900"
            required
          />
          <div id="closingHymnNumber-error" aria-live="polite" aria-atomic="true">
            {state?.errors?.closingHymnNumber?.map((msg) => (
              <p key={msg} className="mt-1 text-sm text-red-600">{msg}</p>
            ))}
          </div>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="closingHymnTitle" className="mb-1 block text-sm font-medium text-slate-800">
            Closing Hymn Title
          </label>
          <input
            id="closingHymnTitle"
            name="closingHymnTitle"
            type="text"
            defaultValue={meeting.closingHymn.title}
            aria-describedby="closingHymnTitle-error"
            className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900"
            required
          />
          <div id="closingHymnTitle-error" aria-live="polite" aria-atomic="true">
            {state?.errors?.closingHymnTitle?.map((msg) => (
              <p key={msg} className="mt-1 text-sm text-red-600">{msg}</p>
            ))}
          </div>
        </div>
      </div>

      <div>
        <label htmlFor="closingPrayer" className="mb-1 block text-sm font-medium text-slate-800">
          Closing Prayer
        </label>
        <input
          id="closingPrayer"
          name="closingPrayer"
          type="text"
          defaultValue={meeting.closingPrayer}
          aria-describedby="closingPrayer-error"
          className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900"
          required
        />
        <div id="closingPrayer-error" aria-live="polite" aria-atomic="true">
          {state?.errors?.closingPrayer?.map((msg) => (
            <p key={msg} className="mt-1 text-sm text-red-600">{msg}</p>
          ))}
        </div>
      </div>

      <div>
        <label htmlFor="speakersText" className="mb-1 block text-sm font-medium text-slate-800">
          Speakers (one per line: Name - Topic)
        </label>
        <textarea
          id="speakersText"
          name="speakersText"
          rows={3}
          defaultValue={speakersDefault}
          aria-describedby="speakersText-error"
          className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900"
        />
        <div id="speakersText-error" aria-live="polite" aria-atomic="true">
          {state?.errors?.speakersText?.map((msg) => (
            <p key={msg} className="mt-1 text-sm text-red-600">{msg}</p>
          ))}
        </div>
      </div>

      <div>
        <label htmlFor="wardBusinessText" className="mb-1 block text-sm font-medium text-slate-800">
          Ward Business (one item per line)
        </label>
        <textarea
          id="wardBusinessText"
          name="wardBusinessText"
          rows={2}
          defaultValue={wardBusinessDefault}
          aria-describedby="wardBusinessText-error"
          className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900"
        />
        <div id="wardBusinessText-error" aria-live="polite" aria-atomic="true">
          {state?.errors?.wardBusinessText?.map((msg) => (
            <p key={msg} className="mt-1 text-sm text-red-600">{msg}</p>
          ))}
        </div>
      </div>

      <div>
        <label htmlFor="announcementsText" className="mb-1 block text-sm font-medium text-slate-800">
          Announcements (one item per line)
        </label>
        <textarea
          id="announcementsText"
          name="announcementsText"
          rows={2}
          defaultValue={announcementsDefault}
          aria-describedby="announcementsText-error"
          className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900"
        />
        <div id="announcementsText-error" aria-live="polite" aria-atomic="true">
          {state?.errors?.announcementsText?.map((msg) => (
            <p key={msg} className="mt-1 text-sm text-red-600">{msg}</p>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-2">
        <input
          id="stakeBusiness"
          name="stakeBusiness"
          type="checkbox"
          defaultChecked={meeting.stakeBusiness}
          className="h-4 w-4 rounded border-slate-300 text-blue-600"
        />
        <label htmlFor="stakeBusiness" className="text-sm font-medium text-slate-800">
          Includes Stake Business
        </label>
      </div>

      {state?.message ? (
        <p aria-live="polite" className="text-sm font-medium text-red-600">
          {state.message}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={isPending}
        className="rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 disabled:opacity-60"
      >
        {isPending ? 'Saving Changes...' : 'Save Changes'}
      </button>
    </form>
  );
}
