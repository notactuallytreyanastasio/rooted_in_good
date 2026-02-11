import { z } from "zod/v4";

export const emailSchema = z.email();

export const passwordSchema = z
  .string()
  .min(8, "Password must be at least 8 characters");

export const signUpSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: emailSchema,
  password: passwordSchema,
});

export const signInSchema = z.object({
  email: emailSchema,
  password: z.string().min(1, "Password is required"),
});

export const checkInSchema = z.object({
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Invalid date format"),
  touchCompleted: z.boolean(),
  listenCompleted: z.boolean(),
  qualityTimeCompleted: z.boolean(),
  touchNotes: z.string().optional(),
  listenNotes: z.string().optional(),
  qualityTimeNotes: z.string().optional(),
});

export const reflectionSchema = z.object({
  weekId: z.string().min(1),
  content: z.string().min(1, "Reflection cannot be empty"),
  mood: z.string().min(1, "Please select a mood"),
});

export const socialPostSchema = z.object({
  platform: z.enum(["INSTAGRAM", "TIKTOK", "FACEBOOK"]),
  title: z.string().min(1, "Title is required"),
  content: z.string().min(1, "Content is required"),
  imageUrl: z.string().optional(),
  scheduledFor: z.string().optional(),
});

export const campaignSchema = z.object({
  name: z.string().min(1, "Campaign name is required"),
  description: z.string().min(1, "Description is required"),
  startDate: z.string().min(1, "Start date is required"),
  endDate: z.string().min(1, "End date is required"),
});

export const shareableContentSchema = z.object({
  title: z.string().min(1, "Title is required"),
  caption: z.string().min(1, "Caption is required"),
  hashtags: z.array(z.string()),
  category: z.string().min(1, "Category is required"),
});

export type SignUpInput = z.infer<typeof signUpSchema>;
export type SignInInput = z.infer<typeof signInSchema>;
export type CheckInInput = z.infer<typeof checkInSchema>;
export type ReflectionInput = z.infer<typeof reflectionSchema>;
export type SocialPostInput = z.infer<typeof socialPostSchema>;
export type CampaignInput = z.infer<typeof campaignSchema>;
export type ShareableContentInput = z.infer<typeof shareableContentSchema>;
