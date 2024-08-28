import { z } from "zod";

export const issueSchema = z.object({
  title: z
    .string()
    .min(1, "Title is rquired")
    .max(255, "Title is over 255 characters"),
  description: z.string().min(10, "Proper description is required"),
});
