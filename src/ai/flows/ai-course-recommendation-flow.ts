'use server';
/**
 * @fileOverview An AI agent that recommends courses and personalized learning paths to students.
 *
 * - aiCourseRecommendation - A function that handles the AI course recommendation process.
 * - AICourseRecommendationInput - The input type for the aiCourseRecommendation function.
 * - AICourseRecommendationOutput - The return type for the aiCourseRecommendation function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const AICourseRecommendationInputSchema = z.object({
  userId: z.string().describe('The ID of the user requesting recommendations.'),
  enrolledCourses: z
    .array(z.string())
    .describe('A list of courses the user is currently enrolled in or has completed.'),
  performanceSummary: z
    .string()
    .describe('A summary of the user\'s past academic performance, e.g., grades, completion rates.'),
  interests: z
    .array(z.string())
    .describe('A list of topics or subjects the user is interested in.'),
});
export type AICourseRecommendationInput = z.infer<typeof AICourseRecommendationInputSchema>;

const AICourseRecommendationOutputSchema = z.object({
  recommendedCourses: z
    .array(
      z.object({
        title: z.string().describe('The title of the recommended course.'),
        description: z.string().describe('A brief description of the recommended course.'),
        reason: z.string().describe('The reason why this course is recommended to the user.'),
      })
    )
    .describe('A list of courses recommended to the user.'),
  personalizedLearningPaths: z
    .array(
      z.object({
        name: z.string().describe('The name of the personalized learning path.'),
        description: z
          .string()
          .describe('A description of what the learning path entails and its goal.'),
        courses: z
          .array(z.string())
          .describe('A list of course titles included in this learning path, in recommended order.'),
      })
    )
    .describe('A list of personalized learning paths tailored to the user.'),
});
export type AICourseRecommendationOutput = z.infer<typeof AICourseRecommendationOutputSchema>;

export async function aiCourseRecommendation(
  input: AICourseRecommendationInput
): Promise<AICourseRecommendationOutput> {
  return aiCourseRecommendationFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiCourseRecommendationPrompt',
  input: { schema: AICourseRecommendationInputSchema },
  output: { schema: AICourseRecommendationOutputSchema },
  prompt: `You are an AI educational advisor for an LMS called 'LetsCatchUp Learn'. Your goal is to provide students with relevant course recommendations and personalized learning paths based on their academic profile.

Here is the student's profile:

User ID: {{{userId}}}
Enrolled/Completed Courses: {{#if enrolledCourses}}{{#each enrolledCourses}}- {{{this}}}{{/each}}{{else}}None listed.{{/if}}
Performance Summary: {{{performanceSummary}}}
Interests: {{#if interests}}{{#each interests}}- {{{this}}}{{/each}}{{else}}None listed.{{/if}}

Based on this information, recommend a list of individual courses and outline a few personalized learning paths. For each recommendation, provide a clear reason why it is suitable for the student.

Ensure your output is a JSON object matching the following schema.`,
});

const aiCourseRecommendationFlow = ai.defineFlow(
  {
    name: 'aiCourseRecommendationFlow',
    inputSchema: AICourseRecommendationInputSchema,
    outputSchema: AICourseRecommendationOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    return output!;
  }
);
