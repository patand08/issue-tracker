import { z } from "zod";

export const issueSchema = z.object({
  title: z
    .string()
    .min(1, "Title is rquired.")
    .max(255, "Title is over 255 characters."),
  description: z
    .string()
    .min(10, "Proper description is required.")
    .max(65535, "Description is too long."),
  status: z.enum(["OPEN", "IN_PROGRESS", "CLOSED"]).optional(),
});

export const patchIssueSchema = z.object({
  title: z
    .string()
    .min(1, "Title is rquired.")
    .max(255, "Title is over 255 characters.")
    .optional(),
  description: z
    .string()
    .min(10, "Proper description is required.")
    .max(65535, "Description is too long.")
    .optional(),
  status: z.enum(["OPEN", "IN_PROGRESS", "CLOSED"]).optional(),
  assignedToUserId: z
    .string()
    .min(1, "AssignedToUserId is required")
    .max(255, "Invalid ID")
    .optional()
    .nullable(),
});
