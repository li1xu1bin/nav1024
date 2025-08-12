'use server';

/**
 * @fileOverview A flow that suggests related websites to add based on the user's browsing history.
 *
 * - suggestRelatedWebsites - A function that suggests related websites.
 * - SuggestRelatedWebsitesInput - The input type for the suggestRelatedWebsites function.
 * - SuggestRelatedWebsitesOutput - The return type for the suggestRelatedWebsites function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestRelatedWebsitesInputSchema = z.object({
  browsingHistory: z
    .string()
    .describe('The user browsing history as a text.'),
});
export type SuggestRelatedWebsitesInput = z.infer<typeof SuggestRelatedWebsitesInputSchema>;

const SuggestedWebsiteSchema = z.object({
  title: z.string().describe('The title of the suggested website.'),
  url: z.string().url().describe('The URL of the suggested website.'),
  reason: z.string().describe('The reason why this website is suggested.'),
});

const SuggestRelatedWebsitesOutputSchema = z.array(SuggestedWebsiteSchema).describe('A list of suggested websites.');
export type SuggestRelatedWebsitesOutput = z.infer<typeof SuggestRelatedWebsitesOutputSchema>;

export async function suggestRelatedWebsites(input: SuggestRelatedWebsitesInput): Promise<SuggestRelatedWebsitesOutput> {
  return suggestRelatedWebsitesFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestRelatedWebsitesPrompt',
  input: {schema: SuggestRelatedWebsitesInputSchema},
  output: {schema: SuggestRelatedWebsitesOutputSchema},
  prompt: `You are a website suggestion expert. Given the user's browsing history, suggest related websites to add to their navigation page.

Consider the relevance and usefulness of the suggested websites to the user.

User's Browsing History:
{{browsingHistory}}

Suggestions (Must be a JSON array of suggested websites):`,
});

const suggestRelatedWebsitesFlow = ai.defineFlow(
  {
    name: 'suggestRelatedWebsitesFlow',
    inputSchema: SuggestRelatedWebsitesInputSchema,
    outputSchema: SuggestRelatedWebsitesOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
