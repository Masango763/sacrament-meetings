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
  title: z.string().trim().min(3, 'Title must be at least 3 characters.'),
  meetingDate: z.string().trim().min(1, 'Meeting date is required.'),
  meetingType: z.string().trim().min(2, 'Meeting type is required.'),
  presiding: z.string().trim().min(2, 'Presiding leader is required.'),
  conducting: z.string().trim().min(2, 'Conducting leader is required.'),
  openingHymn: z.string().trim().min(1, 'Opening hymn is required.'),
  invocation: z.string().trim().min(2, 'Invocation is required.'),
  speakers: z.string().trim().optional().default(''),
  wardBusiness: z.string().trim().optional().default(''),
});

export type FormState = {
  errors?: {
    title?: string[];
    meetingDate?: string[];
    meetingType?: string[];
    presiding?: string[];
    conducting?: string[];
    openingHymn?: string[];
    invocation?: string[];
    speakers?: string[];
    wardBusiness?: string[];
  };
  message?: string | null;
};

function extractFormData(formData: FormData): MeetingMutationInput {
  return {
    title: String(formData.get('title') ?? ''),
    meetingDate: String(formData.get('meetingDate') ?? ''),
    meetingType: String(formData.get('meetingType') ?? ''),
    presiding: String(formData.get('presiding') ?? ''),
    conducting: String(formData.get('conducting') ?? ''),
    openingHymn: String(formData.get('openingHymn') ?? ''),
    invocation: String(formData.get('invocation') ?? ''),
    speakers: String(formData.get('speakers') ?? ''),
    wardBusiness: String(formData.get('wardBusiness') ?? ''),
  };
}

export async function createMeeting(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const parsed = MeetingFormSchema.safeParse(extractFormData(formData));

  if (!parsed.success) {
    return {
      errors: parsed.error.flatten().fieldErrors,
      message: 'Please correct the highlighted fields and try again.',
    };
  }

  try {
    await createMeetingInDb(parsed.data);
    revalidatePath('/meetings');
  } catch (error) {
    console.error('Failed to create meeting:', error);
    throw new Error('Could not save the new meeting. Please try again.');
  }

  redirect('/meetings');
}

export async function updateMeeting(
  id: string,
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const parsed = MeetingFormSchema.safeParse(extractFormData(formData));

  if (!parsed.success) {
    return {
      errors: parsed.error.flatten().fieldErrors,
      message: 'Please correct the highlighted fields and try again.',
    };
  }

  try {
    await updateMeetingInDb(id, parsed.data);
    revalidatePath('/meetings');
    revalidatePath(`/meetings/${id}`);
  } catch (error) {
    console.error(`Failed to update meeting ${id}:`, error);
    throw new Error('Could not update this meeting. Please try again.');
  }

  redirect('/meetings');
}

export async function deleteMeeting(id: string): Promise<void> {
  try {
    await deleteMeetingInDb(id);
    revalidatePath('/meetings');
  } catch (error) {
    console.error(`Failed to delete meeting ${id}:`, error);
    throw new Error('Could not delete this meeting. Please try again.');
  }
}
