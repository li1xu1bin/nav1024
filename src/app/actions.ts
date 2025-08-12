'use server';

import {
  suggestRelatedWebsites,
  type SuggestRelatedWebsitesOutput,
} from '@/ai/flows/suggest-related-websites';
import {z} from 'zod';

const SuggestionSchema = z.object({
  browsingHistory: z
    .string()
    .min(50, 'Please provide a more detailed browsing history (at least 50 characters).'),
});

export type SuggestionResult =
  | {
      success: true;
      suggestions: SuggestRelatedWebsitesOutput;
      error: null;
    }
  | {
      success: false;
      error: string;
      suggestions: null;
    };

export async function getSuggestions(
  prevState: any,
  formData: FormData
): Promise<SuggestionResult> {
  const rawData = {
    browsingHistory: formData.get('browsingHistory'),
  };

  const validatedFields = SuggestionSchema.safeParse(rawData);
  if (!validatedFields.success) {
    return {
      success: false,
      error:
        validatedFields.error.flatten().fieldErrors.browsingHistory?.[0] ||
        'Invalid input.',
      suggestions: null,
    };
  }

  try {
    const suggestions = await suggestRelatedWebsites(validatedFields.data);
    return {
      success: true,
      suggestions,
      error: null,
    };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      error: 'Failed to get suggestions from AI. Please try again later.',
      suggestions: null,
    };
  }
}
