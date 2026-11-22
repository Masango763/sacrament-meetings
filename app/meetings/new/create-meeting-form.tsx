'use client';

import { useActionState } from 'react';
import { createMeeting, type FormState } from '@/lib/actions';

const initialState: FormState = { message: null, errors: {} };

export default function CreateMeetingForm() {
  const [state, formAction, isPending] = useActionState(createMeeting, initialState);

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
            aria-describedby="date-error"
            className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
            defaultValue="regular"
            aria-describedby="meetingType-error"
            className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
            aria-describedby="presiding-error"
            className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
            aria-describedby="conducting-error"
            className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
            aria-describedby="openingHymnNumber-error"
            className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
            aria-describedby="openingHymnTitle-error"
            className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
          aria-describedby="openingPrayer-error"
          className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
            aria-describedby="sacramentHymnNumber-error"
            className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
            aria-describedby="sacramentHymnTitle-error"
            className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
            aria-describedby="closingHymnNumber-error"
            className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
            aria-describedby="closingHymnTitle-error"
            className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
          aria-describedby="closingPrayer-error"
          className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
          aria-describedby="speakersText-error"
          className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
          aria-describedby="wardBusinessText-error"
          className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
          aria-describedby="announcementsText-error"
          className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
          className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
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
        className="rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-60"
      >
        {isPending ? 'Creating...' : 'Create Meeting'}
      </button>
    </form>
  );
}
