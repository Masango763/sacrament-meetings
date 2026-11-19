'use server';

import { z } from 'zod';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import {
  createMeetingInDb,
  updateMeetingInDb,
  deleteMeetingInDb,
  type MeetingMutationInput,
} from '@/lib/meetings-db';

const MeetingFormSchema = z.object({
  date: z.string().trim().min(1, 'Meeting date is required.'),
  meetingType: z.enum(['regular', 'testimony', 'stake', 'general'], {
    message: 'Select a valid meeting type.',
  }),
  presiding: z.string().trim().min(2, 'Presiding leader is required.'),
  conducting: z.string().trim().min(2, 'Conducting leader is required.'),
  openingHymnNumber: z.coerce.number().int().min(1, 'Opening hymn number is required.'),
  openingHymnTitle: z.string().trim().min(2, 'Opening hymn title is required.'),
  openingPrayer: z.string().trim().min(2, 'Opening prayer is required.'),
  sacramentHymnNumber: z.coerce.number().int().min(1, 'Sacrament hymn number is required.'),
  sacramentHymnTitle: z.string().trim().min(2, 'Sacrament hymn title is required.'),
  closingHymnNumber: z.coerce.number().int().min(1, 'Closing hymn number is required.'),
  closingHymnTitle: z.string().trim().min(2, 'Closing hymn title is required.'),
  closingPrayer: z.string().trim().min(2, 'Closing prayer is required.'),
  speakersText: z.string().trim().optional().default(''),
  wardBusinessText: z.string().trim().optional().default(''),
  announcementsText: z.string().trim().optional().default(''),
  stakeBusiness: z.boolean().optional().default(false),
});

export type FormState = {
  errors?: Record<string, string[]>;
  message?: string | null;
};

function buildMutationInput(parsed: z.infer<typeof MeetingFormSchema>): MeetingMutationInput {
  const speakers = parsed.speakersText
    ? parsed.speakersText
        .split('\n')
        .map((line) => line.trim())
        .filter(Boolean)
        .map((line) => {
          const [namePart, topicPart] = line.split('-').map((s) => s.trim());
          return {
            name: namePart || line,
            topic: topicPart || 'Gospel Message',
            type: 'speaker' as const,
          };
        })
    : [];

  const wardBusiness = parsed.wardBusinessText
    ? parsed.wardBusinessText
        .split('\n')
        .map((line) => line.trim())
        .filter(Boolean)
        .map((description) => ({ description }))
    : [];

  const announcements = parsed.announcementsText
    ? parsed.announcementsText
        .split('\n')
        .map((line) => line.trim())
        .filter(Boolean)
    : [];

  return {
    date: parsed.date,
    meetingType: parsed.meetingType,
    presiding: parsed.presiding,
    conducting: parsed.conducting,
    openingHymn: {
      number: parsed.openingHymnNumber,
      title: parsed.openingHymnTitle,
    },
    openingPrayer: parsed.openingPrayer,
    wardBusiness,
    stakeBusiness: parsed.stakeBusiness,
    sacramentHymn: {
      number: parsed.sacramentHymnNumber,
      title: parsed.sacramentHymnTitle,
    },
    speakers,
    closingHymn: {
      number: parsed.closingHymnNumber,
      title: parsed.closingHymnTitle,
    },
    closingPrayer: parsed.closingPrayer,
    announcements,
  };
}

function parseRawForm(formData: FormData) {
  return MeetingFormSchema.safeParse({
    date: formData.get('date') ?? '',
    meetingType: formData.get('meetingType') ?? 'regular',
    presiding: formData.get('presiding') ?? '',
    conducting: formData.get('conducting') ?? '',
    openingHymnNumber: formData.get('openingHymnNumber') ?? '',
    openingHymnTitle: formData.get('openingHymnTitle') ?? '',
    openingPrayer: formData.get('openingPrayer') ?? '',
    sacramentHymnNumber: formData.get('sacramentHymnNumber') ?? '',
    sacramentHymnTitle: formData.get('sacramentHymnTitle') ?? '',
    closingHymnNumber: formData.get('closingHymnNumber') ?? '',
    closingHymnTitle: formData.get('closingHymnTitle') ?? '',
    closingPrayer: formData.get('closingPrayer') ?? '',
    speakersText: formData.get('speakersText') ?? '',
    wardBusinessText: formData.get('wardBusinessText') ?? '',
    announcementsText: formData.get('announcementsText') ?? '',
    stakeBusiness: formData.get('stakeBusiness') === 'on',
  });
}

export async function createMeeting(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const parsed = parseRawForm(formData);

  if (!parsed.success) {
    return {
      errors: parsed.error.flatten().fieldErrors,
      message: 'Please correct the highlighted fields and try again.',
    };
  }

  try {
    await createMeetingInDb(buildMutationInput(parsed.data));
    revalidatePath('/meetings');
  } catch (error) {
    console.error('Failed to create meeting:', error);
    throw new Error('Could not save the new meeting. Please try again.');
  }

  redirect('/meetings');
}

export async function updateMeeting(
  id: number,
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const parsed = parseRawForm(formData);

  if (!parsed.success) {
    return {
      errors: parsed.error.flatten().fieldErrors,
      message: 'Please correct the highlighted fields and try again.',
    };
  }

  try {
    await updateMeetingInDb(id, buildMutationInput(parsed.data));
    revalidatePath('/meetings');
    revalidatePath(`/meetings/${id}`);
  } catch (error) {
    console.error(`Failed to update meeting ${id}:`, error);
    throw new Error('Could not update this meeting. Please try again.');
  }

  redirect('/meetings');
}

export async function deleteMeeting(id: number): Promise<void> {
  try {
    await deleteMeetingInDb(id);
    revalidatePath('/meetings');
  } catch (error) {
    console.error(`Failed to delete meeting ${id}:`, error);
    throw new Error('Could not delete this meeting. Please try again.');
  }
}
