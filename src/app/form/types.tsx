import { z } from "zod";

export const FormValues = z.object(
  {
    firstName: z.string().min(10, "First name should not be empty"),
    lastName: z.string().min(10, "Last name sould not be empty")
  }
).required();
export type FormValues = z.infer<typeof FormValues>;
