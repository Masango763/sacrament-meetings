'use client';

import { useActionState } from 'react';
import { createMeeting, type FormState } from '@/lib/actions';

const initialState: FormState = { message: null, errors: {} };

export default function CreateMeetingForm() {
  const [state, formAction, isPending] = useActionState(createMeeting, initialState);

  return (
    <form action={formAction} className="space-y-4 rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
      <div>
        <label htmlFor="title" className="mb-1 block text-sm font-medium text-slate-800">
          Meeting Title
        </label>
        <input
          id="title"
          name="title"
          type="text"
          aria-describedby="title-error"
          className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <div id="title-error" aria-live="polite" aria-atomic="true">
          {state?.errors?.title?.map((msg) => (
            <p key={msg} className="mt-1 text-sm text-red-600">{msg}</p>
          ))}
        </div>
      </div>

      <div>
        <label htmlFor="meetingDate" className="mb-1 block text-sm font-medium text-slate-800">
          Meeting Date
        </label>
        <input
          id="meetingDate"
          name="meetingDate"
          type="date"
          aria-describedby="meetingDate-error"
          className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <div id="meetingDate-error" aria-live="polite" aria-atomic="true">
          {state?.errors?.meetingDate?.map((msg) => (
            <p key={msg} className="mt-1 text-sm text-red-600">{msg}</p>
          ))}
        </div>
      </div>

      <div>
        <label htmlFor="meetingType" className="mb-1 block text-sm font-medium text-slate-800">
          Meeting Type
        </label>
        <input
          id="meetingType"
          name="meetingType"
          type="text"
          placeholder="Regular Sacrament Meeting"
          aria-describedby="meetingType-error"
          className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <div id="meetingType-error" aria-live="polite" aria-atomic="true">
          {state?.errors?.meetingType?.map((msg) => (
            <p key={msg} className="mt-1 text-sm text-red-600">{msg}</p>
          ))}
        </div>
      </div>

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

      <div>
        <label htmlFor="openingHymn" className="mb-1 block text-sm font-medium text-slate-800">
          Opening Hymn
        </label>
        <input
          id="openingHymn"
          name="openingHymn"
          type="text"
          aria-describedby="openingHymn-error"
          className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <div id="openingHymn-error" aria-live="polite" aria-atomic="true">
          {state?.errors?.openingHymn?.map((msg) => (
            <p key={msg} className="mt-1 text-sm text-red-600">{msg}</p>
          ))}
        </div>
      </div>

      <div>
        <label htmlFor="invocation" className="mb-1 block text-sm font-medium text-slate-800">
          Invocation
        </label>
        <input
          id="invocation"
          name="invocation"
          type="text"
          aria-describedby="invocation-error"
          className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <div id="invocation-error" aria-live="polite" aria-atomic="true">
          {state?.errors?.invocation?.map((msg) => (
            <p key={msg} className="mt-1 text-sm text-red-600">{msg}</p>
          ))}
        </div>
      </div>

      <div>
        <label htmlFor="speakers" className="mb-1 block text-sm font-medium text-slate-800">
          Speakers
        </label>
        <textarea
          id="speakers"
          name="speakers"
          rows={3}
          aria-describedby="speakers-error"
          className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div id="speakers-error" aria-live="polite" aria-atomic="true">
          {state?.errors?.speakers?.map((msg) => (
            <p key={msg} className="mt-1 text-sm text-red-600">{msg}</p>
          ))}
        </div>
      </div>

      <div>
        <label htmlFor="wardBusiness" className="mb-1 block text-sm font-medium text-slate-800">
          Ward Business
        </label>
        <textarea
          id="wardBusiness"
          name="wardBusiness"
          rows={3}
          aria-describedby="wardBusiness-error"
          className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div id="wardBusiness-error" aria-live="polite" aria-atomic="true">
          {state?.errors?.wardBusiness?.map((msg) => (
            <p key={msg} className="mt-1 text-sm text-red-600">{msg}</p>
          ))}
        </div>
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
